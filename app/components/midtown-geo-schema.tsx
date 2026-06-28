import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

/** Place + geo entity for Midtown Las Vegas (AEO + local SEO) */
export function MidtownPlaceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Place', 'Neighborhood'],
    '@id': `${siteConfig.baseUrl}#midtown-place`,
    name: midtownAuthority.officialName,
    alternateName: [
      midtownAuthority.alternateName,
      'Midtown Arts District Las Vegas',
      '18b Arts District North of Charleston',
    ],
    description: midtownAuthority.description,
    url: siteConfig.baseUrl,
    sameAs: [
      midtownAuthority.officialUrl,
      midtownAuthority.social.instagram,
      midtownAuthority.social.facebook,
      midtownAuthority.social.tiktok,
    ],
    containedInPlace: {
      '@type': 'Place',
      name: 'Las Vegas Arts District',
      alternateName: '18b Arts District',
      containedInPlace: {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: midtownAuthority.geo.latitude,
      longitude: midtownAuthority.geo.longitude,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'North boundary',
        value: midtownAuthority.geo.northBoundary,
      },
      {
        '@type': 'PropertyValue',
        name: 'Walk Score',
        value: String(midtownAuthority.geo.walkScore),
      },
    ],
    amenityFeature: midtownAuthority.categories.map((category) => ({
      '@type': 'LocationFeatureSpecification',
      name: category,
      value: true,
    })),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/** Historical timeline as ItemList — mirrors midtownvegas.com journey */
export function MidtownTimelineSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Midtown Las Vegas Arts District Timeline',
    description:
      'Key milestones in the transformation of the Las Vegas Arts District and Midtown, from the Arts Factory (1997) to Midtown Plaza and The English Residences (2025).',
    itemListElement: midtownAuthority.timeline.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${item.year}: ${item.event}${'event2' in item && item.event2 ? `; ${item.event2}` : ''}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/** Recurring First Friday event series */
export function FirstFridayEventSeriesSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: midtownAuthority.firstFriday.name,
    description:
      'Monthly art walk in the Las Vegas Arts District and Midtown — gallery openings, live music, food, and artisan markets. Founded by Cindy Funkhouser in 2002.',
    eventSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1M',
      byDay: 'https://schema.org/Friday',
      startTime: '17:00',
      endTime: '23:00',
    },
    location: {
      '@type': 'Place',
      name: midtownAuthority.firstFriday.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: midtownAuthority.geo.addressLocality,
        addressRegion: midtownAuthority.geo.addressRegion,
        postalCode: midtownAuthority.geo.postalCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: midtownAuthority.geo.latitude,
        longitude: midtownAuthority.geo.longitude,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'First Friday Las Vegas',
      url: absoluteUrl('/neighborhood/first-fridays'),
    },
    url: absoluteUrl('/neighborhood/first-fridays'),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/** English Residences — condo-hotel product schema */
export function EnglishResidencesProductSchema() {
  const er = midtownAuthority.englishResidences
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'Accommodation'],
    '@id': `${siteConfig.baseUrl}#english-residences`,
    name: er.name,
    description: `${er.tagline} ${er.description}`,
    brand: {
      '@type': 'Brand',
      name: er.brand,
    },
    category: 'Condo-Hotel Residence',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: siteConfig.agent.name,
        telephone: siteConfig.phoneTel,
        url: siteConfig.baseUrl,
      },
      url: absoluteUrl('/neighborhood/english-residences'),
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Unit count',
        value: String(er.unitCount),
      },
      {
        '@type': 'PropertyValue',
        name: 'Opened',
        value: String(er.openedYear),
      },
    ],
    isRelatedTo: {
      '@type': 'LodgingBusiness',
      name: 'The English Hotel',
      url: absoluteUrl('/neighborhood/english-hotel'),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
