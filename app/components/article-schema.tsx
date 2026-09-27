// Article Schema for Blog Posts
// 2026 SEO: Article schema with author bylines enhances E-E-A-T

import { getAgentPhotoAbsoluteUrl } from '@/lib/agent-photo'
import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string | string[]
  datePublished: string
  dateModified?: string
  url?: string
  author: {
    name: string
    url?: string
  }
  publisher?: {
    name: string
    logo?: string
  }
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
  author,
  publisher = {
    name: REAL_ESTATE_SITE.name,
    logo: getAgentPhotoAbsoluteUrl(),
  },
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image
      ? Array.isArray(image)
        ? image
        : image
      : 'https://www.midtownlasvegascondos.com/og-image.png',
    datePublished,
    dateModified: dateModified || datePublished,
    author:
      author.name === REAL_ESTATE_SITE.agentName
        ? { '@id': REAL_ESTATE_AGENT_SCHEMA_ID }
        : {
            '@type': 'Person',
            name: author.name,
            ...(author.url && { url: author.url }),
          },
    publisher: {
      '@id': REAL_ESTATE_AGENT_SCHEMA_ID,
      ...(publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo,
        },
      }),
    },
    ...(url && {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
