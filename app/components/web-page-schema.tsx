import { stringifyJsonLd } from '@/lib/json-ld'
import { MIDTOWN_PLACE_SCHEMA_ID } from '@/lib/schema-area-served'
import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'
import { SITE_WEBSITE_SCHEMA_ID } from '@/lib/site-schema-ids'
import { absoluteUrl } from '@/lib/search-console'

type WebPageSchemaProps = {
  path: string
  name: string
  description: string
  pageType?: 'WebPage' | 'CollectionPage'
  speakableSelectors?: string[]
  dateModified?: string
}

export function WebPageSchema({
  path,
  name,
  description,
  pageType = 'WebPage',
  speakableSelectors = ['h1', '.aeo-quick-answer'],
  dateModified,
}: WebPageSchemaProps) {
  const url = absoluteUrl(path)
  const schema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': SITE_WEBSITE_SCHEMA_ID },
    about: { '@id': MIDTOWN_PLACE_SCHEMA_ID },
    author: { '@id': REAL_ESTATE_AGENT_SCHEMA_ID },
    publisher: { '@id': REAL_ESTATE_AGENT_SCHEMA_ID },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    },
    ...(dateModified && { dateModified }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
    />
  )
}
