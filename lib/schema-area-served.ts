/** Canonical areaServed for Midtown Las Vegas community (not sister-site Arts District city nodes). */
export const MIDTOWN_COMMUNITY_AREA_SERVED = {
  '@type': 'Place' as const,
  name: 'Midtown Las Vegas',
  containedInPlace: {
    '@type': 'City' as const,
    name: 'Las Vegas',
  },
}
