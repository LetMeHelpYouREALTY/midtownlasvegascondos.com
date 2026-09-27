import { getAgentPhotoAbsoluteUrl } from '@/lib/agent-photo'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { MIDTOWN_COMMUNITY } from '@/lib/amenities/community-config'
import { CURATED_NEARBY_PLACES } from '@/lib/amenities/curated-places'
type AmenitiesPageSchemaProps = {
  pageUrl: string
}

export function AmenitiesPageSchema({ pageUrl }: AmenitiesPageSchemaProps) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${MIDTOWN_COMMUNITY.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => {
      const item: Record<string, unknown> = {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.lat,
          longitude: place.lng,
        },
      }
      if (place.streetAddress) {
        item.address = {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          ...(place.postalCode ? { postalCode: place.postalCode } : {}),
          addressCountry: 'US',
        }
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item,
      }
    }),
  }

  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${pageUrl}#midtown-community`,
    name: MIDTOWN_COMMUNITY.name,
    description: `${MIDTOWN_COMMUNITY.neighborhood} — luxury condos and walkable urban living at ${MIDTOWN_COMMUNITY.streetAddress}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: MIDTOWN_COMMUNITY.streetAddress,
      addressLocality: MIDTOWN_COMMUNITY.addressLocality,
      addressRegion: MIDTOWN_COMMUNITY.addressRegion,
      postalCode: MIDTOWN_COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MIDTOWN_COMMUNITY.center.lat,
      longitude: MIDTOWN_COMMUNITY.center.lng,
    },
  }

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${REAL_ESTATE_SITE.url}#agent`,
    name: REAL_ESTATE_SITE.agentName,
    image: getAgentPhotoAbsoluteUrl(),
    url: REAL_ESTATE_SITE.url,
    telephone: '+17025001980',
    email: REAL_ESTATE_SITE.email,
    jobTitle: REAL_ESTATE_SITE.agentTitle,
    worksFor: {
      '@type': 'Organization',
      name: REAL_ESTATE_SITE.brokerage,
    },
    areaServed: {
      '@type': 'Place',
      name: MIDTOWN_COMMUNITY.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: MIDTOWN_COMMUNITY.streetAddress,
        addressLocality: MIDTOWN_COMMUNITY.addressLocality,
        addressRegion: MIDTOWN_COMMUNITY.addressRegion,
        postalCode: MIDTOWN_COMMUNITY.postalCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: MIDTOWN_COMMUNITY.center.lat,
        longitude: MIDTOWN_COMMUNITY.center.lng,
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${REAL_ESTATE_SITE.url}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  }

  const payload = [itemListSchema, communityPlaceSchema, agentSchema, breadcrumbSchema]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
