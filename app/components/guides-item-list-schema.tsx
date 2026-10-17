import { stringifyJsonLd } from '@/lib/json-ld'
import { REDDIT_AEO_GUIDES } from '@/lib/reddit-aeo-topics'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

/** ItemList of AEO buyer guides for crawlers and answer engines. */
export function GuidesItemListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Midtown Las Vegas buyer guides by Dr. Jan Duffy',
    description:
      'Reddit-informed Las Vegas Arts District and Midtown condo buyer research guides.',
    numberOfItems: REDDIT_AEO_GUIDES.length + 1,
    itemListElement: [
      ...REDDIT_AEO_GUIDES.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.h1,
        url: `${REAL_ESTATE_SITE.url}/guides/${guide.slug}`,
      })),
      {
        '@type': 'ListItem',
        position: REDDIT_AEO_GUIDES.length + 1,
        name: 'Sell Your Midtown Las Vegas Condo',
        url: `${REAL_ESTATE_SITE.url}/sellers-guide-midtown`,
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
