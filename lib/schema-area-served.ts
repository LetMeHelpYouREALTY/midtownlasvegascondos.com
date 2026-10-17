import { SITE_URL } from '@/lib/search-console'

/** Stable @id for Midtown Las Vegas geo entity (areaServed, Place schema, AEO). */
export const MIDTOWN_PLACE_SCHEMA_ID = `${SITE_URL}/#midtown-las-vegas-place`

/** Canonical areaServed for Midtown Las Vegas community (not sister-site Arts District city nodes). */
export const MIDTOWN_COMMUNITY_AREA_SERVED = {
  '@type': 'Place' as const,
  '@id': MIDTOWN_PLACE_SCHEMA_ID,
  name: 'Midtown Las Vegas',
  containedInPlace: {
    '@type': 'City' as const,
    name: 'Las Vegas',
  },
}
