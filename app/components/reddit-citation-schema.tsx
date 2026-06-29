import type { RedditSource } from '@/lib/reddit-aeo-topics'

interface RedditCitationSchemaProps {
  headline: string
  url: string
  description: string
  datePublished: string
  dateModified?: string
  redditSources: RedditSource[]
}

/**
 * Article schema with Reddit community citations for AEO/GEO discoverability.
 * Uses citation + isBasedOn to signal community-sourced buyer research.
 */
export function RedditCitationSchema({
  headline,
  url,
  description,
  datePublished,
  dateModified,
  redditSources,
}: RedditCitationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: 'https://www.midtownlasvegascondos.com/about',
      jobTitle: 'REALTOR®',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Homes by Dr. Jan Duffy',
      url: 'https://www.midtownlasvegascondos.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.aeo-quick-answer', 'h2'],
    },
    citation: redditSources.map((source) => ({
      '@type': 'DiscussionForumPosting',
      url: source.url,
      name: source.topic,
      isPartOf: {
        '@type': 'WebPage',
        name: source.subreddit,
        url: `https://www.reddit.com/${source.subreddit.replace('r/', '')}/`,
      },
    })),
    isBasedOn: redditSources.map((source) => ({
      '@type': 'CreativeWork',
      url: source.url,
      name: `${source.subreddit}: ${source.topic}`,
    })),
    about: [
      {
        '@type': 'Place',
        name: 'Midtown Las Vegas Arts District',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '921 South Main Street',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89101',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Thing',
        name: 'Las Vegas condo buyer research',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
