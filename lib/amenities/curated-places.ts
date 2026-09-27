import type { AmenityCategoryId, CuratedPlace } from './types'

/**
 * Verified places with addresses documented on this site or Midtown event data.
 * Used for fallback map list and ItemList JSON-LD (no invented businesses).
 */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: 'midtown-las-vegas',
    name: 'Midtown Las Vegas',
    categories: ['attractions', 'parking'],
    streetAddress: '921 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1612393,
    lng: -115.1522884,
    schemaType: 'Place',
    note: 'Arts District hub — The English Hotel, Midtown Plaza, and English Residences',
  },
  {
    id: 'english-hotel',
    name: 'The English Hotel',
    categories: ['attractions'],
    streetAddress: '921 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1612393,
    lng: -115.1522884,
    schemaType: 'Hotel',
  },
  {
    id: 'kjs-restaurant',
    name: "KJ's Restaurant",
    categories: ['restaurants'],
    streetAddress: '921 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1612393,
    lng: -115.1522884,
    schemaType: 'Restaurant',
  },
  {
    id: 'midtown-plaza',
    name: 'Midtown Plaza',
    categories: ['attractions', 'shopping', 'restaurants'],
    streetAddress: '921 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1612393,
    lng: -115.1522884,
    schemaType: 'ShoppingCenter',
  },
  {
    id: 'market-in-the-alley',
    name: 'Market in the Alley',
    categories: ['attractions', 'shopping'],
    streetAddress: '1326 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1589,
    lng: -115.1521,
    schemaType: 'EventVenue',
    note: 'Also uses 1401 S Commerce for vendor booths',
  },
  {
    id: 'first-friday-parking-garage',
    name: 'City Parking Garage (First Friday Park & Ride)',
    categories: ['parking'],
    streetAddress: '500 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1648,
    lng: -115.1525,
    schemaType: 'ParkingFacility',
    note: 'Free Park & Ride shuttle for First Friday (per site FAQ)',
  },
  {
    id: 'commerce-street-parking',
    name: 'Commerce Street Event Parking',
    categories: ['parking'],
    streetAddress: '1000 Commerce Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1595,
    lng: -115.1488,
    schemaType: 'ParkingFacility',
  },
]

export function curatedPlacesForCategory(
  category: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.categories.includes(category))
}

export function formatPlaceAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`
}

export function googleMapsDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

export function googleMapsPlaceUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}
