import { MIDTOWN_SHOWROOM } from '@/lib/site-persona'

/**
 * Hyperlocal map center for Midtown Las Vegas (Arts District).
 * Coordinates align with The English Hotel / Midtown at 921 S Main St, Las Vegas, NV 89101
 * (OpenStreetMap-backed geocode ~36.16124, -115.15229; matches site midtownGeo within ~0.001°).
 */
export const MIDTOWN_COMMUNITY = {
  name: 'Midtown Las Vegas',
  neighborhood: 'Las Vegas Arts District (18b)',
  streetAddress: MIDTOWN_SHOWROOM.street,
  addressLocality: MIDTOWN_SHOWROOM.city,
  addressRegion: MIDTOWN_SHOWROOM.region,
  postalCode: MIDTOWN_SHOWROOM.postalCode,
  center: {
    lat: 36.1612393,
    lng: -115.1522884,
  },
  /** Default map zoom when showing the full neighborhood */
  defaultZoom: 14,
  /** Radius in meters for Places searchNearby */
  searchRadiusMeters: 2000,
} as const
