// Structured Data (JSON-LD) for SEO

import { stringifyJsonLd } from '@/lib/json-ld'
import { SITE_URL } from '@/lib/search-console'
import { MIDTOWN_SHOWROOM, REAL_ESTATE_SITE } from '@/lib/site-persona'

/** @deprecated Global agent schema is in SiteSchemaGraph. */
export function LocalBusinessSchema() {
  return null
}

function toAbsoluteSchemaUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  const path = url.startsWith('/') ? url : `/${url}`
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteSchemaUrl(item.url),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
    />
  )
}

export function ResidenceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'The English Residences',
    description:
      'Luxury condo-hotel residences in the heart of the Las Vegas Arts District. Own your unit and earn income through professional hotel management.',
    url: 'https://www.midtownlasvegascondos.com/neighborhood/english-residences',
    address: {
      '@type': 'PostalAddress',
      streetAddress: MIDTOWN_SHOWROOM.street,
      addressLocality: MIDTOWN_SHOWROOM.city,
      addressRegion: MIDTOWN_SHOWROOM.region,
      postalCode: MIDTOWN_SHOWROOM.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REAL_ESTATE_SITE.midtownGeo.latitude,
      longitude: REAL_ESTATE_SITE.midtownGeo.longitude,
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Hotel Management',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Income Generation',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Concierge Service',
        value: true,
      },
    ],
    petsAllowed: 'Contact for policy',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
    />
  )
}

/** @deprecated Global WebSite schema is in SiteSchemaGraph. */
export function WebSiteSchema() {
  return null
}

