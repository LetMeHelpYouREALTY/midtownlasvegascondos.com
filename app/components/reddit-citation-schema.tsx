import { stringifyJsonLd } from '@/lib/json-ld'
import { MIDTOWN_PLACE_SCHEMA_ID } from '@/lib/schema-area-served'
import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'
import type { RedditSource } from '@/lib/reddit-aeo-topics'

/**
 * External Reddit threads are citations, not forum posts hosted on this site.
 * DiscussionForumPosting requires author, datePublished, and headline, and
 * Google only accepts that type for discussions the page itself hosts.
 */
function redditCitation(source: RedditSource) {
  const subredditPath = source.subreddit.replace(/^\/+/, '')

  return {
    '@type': 'CreativeWork' as const,
    url: source.url,
    name: source.topic,
    headline: source.topic,
    isPartOf: {
      '@type': 'WebSite' as const,
      name: source.subreddit,
      url: `https://www.reddit.com/${subredditPath}/`,
    },
  }
}

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
    author: { '@id': REAL_ESTATE_AGENT_SCHEMA_ID },
    publisher: { '@id': REAL_ESTATE_AGENT_SCHEMA_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.aeo-quick-answer', 'h2'],
    },
    citation: redditSources.map(redditCitation),
    isBasedOn: redditSources.map(redditCitation),
    about: [
      { '@id': MIDTOWN_PLACE_SCHEMA_ID },
      {
        '@type': 'Thing',
        name: 'Las Vegas condo buyer research',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
    />
  )
}
