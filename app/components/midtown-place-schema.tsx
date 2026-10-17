import { stringifyJsonLd } from '@/lib/json-ld'
import {
  MIDTOWN_COMMUNITY_AREA_SERVED,
  MIDTOWN_PLACE_SCHEMA_ID,
} from '@/lib/schema-area-served'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { SITE_URL } from '@/lib/search-console'

/** Geo anchor for Midtown Las Vegas at the listing hub (921 S Main St). */
export function MidtownPlaceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': MIDTOWN_PLACE_SCHEMA_ID,
    name: MIDTOWN_COMMUNITY_AREA_SERVED.name,
    description:
      'Walkable Midtown Las Vegas — English Residences, The English Hotel, and Midtown Plaza near 921 S Main Street.',
    url: `${SITE_URL}/midtown-real-estate`,
    containedInPlace: MIDTOWN_COMMUNITY_AREA_SERVED.containedInPlace,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REAL_ESTATE_SITE.midtownGeo.latitude,
      longitude: REAL_ESTATE_SITE.midtownGeo.longitude,
    },
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=921+South+Main+Street+Las+Vegas+NV+89101',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
    />
  )
}
