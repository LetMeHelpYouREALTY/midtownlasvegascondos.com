export type AmenityCategoryId =
  | 'restaurants'
  | 'attractions'
  | 'parking'
  | 'grocery'
  | 'fitness'
  | 'cafes'
  | 'shopping'
  | 'parks'
  | 'healthcare'
  | 'pharmacies'
  | 'golf'
  | 'schools'

export type CuratedPlace = {
  id: string
  name: string
  categories: AmenityCategoryId[]
  /** Omit when address is not verified for JSON-LD */
  streetAddress?: string
  addressLocality: string
  addressRegion: string
  postalCode?: string
  lat: number
  lng: number
  schemaType: string
  /** Official primary source used to verify name/address */
  sourceUrl: string
  note?: string
}

export type AmenityCategoryConfig = {
  id: AmenityCategoryId
  label: string
  ariaLabel: string
  /** Google Places API (New) primary types for searchNearby */
  primaryTypes: string[]
}
