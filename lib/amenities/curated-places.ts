import type { AmenityCategoryId, CuratedPlace } from './types'

/**
 * Hyperlocal Midtown / Arts District anchors — each entry verified against sourceUrl.
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
    sourceUrl: 'https://midtownvegas.com/about/',
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
    sourceUrl: 'https://www.marriott.com/en-us/hotels/lastd-the-english-hotel-las-vegas-a-tribute-portfolio-hotel/overview/',
  },
  {
    id: 'kjs-social',
    name: "KJ's Social",
    categories: ['restaurants'],
    streetAddress: '921 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    lat: 36.1612393,
    lng: -115.1522884,
    schemaType: 'Restaurant',
    sourceUrl: 'https://kjslv.com/',
    note: 'Inside The English Hotel (formerly The Pepper Club space)',
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
    sourceUrl: 'https://midtownvegas.com/about/',
  },
  {
    id: 'market-in-the-alley',
    name: 'Market in the Alley',
    categories: ['attractions', 'shopping'],
    streetAddress: '1326 South Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89104',
    lat: 36.1589,
    lng: -115.1521,
    schemaType: 'EventVenue',
    sourceUrl: 'https://www.marketinthealley.com/pages/vendor',
    note: 'Flagship Arts District market — also uses 1401 S Commerce for some vendor booths',
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
    sourceUrl: 'https://www.lasvegasnevada.gov/News/Blog/Detail/first-friday-parking-in-downtown-las-vegas',
    note: 'Free Park & Ride shuttle for First Friday (3:00 PM–midnight, per City of Las Vegas)',
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
    sourceUrl: 'https://www.ffflv.org/',
    note: 'First Friday Foundation lists walk-in parking at 1000 Commerce St',
  },
]

export function curatedPlacesForCategory(
  category: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.categories.includes(category))
}

export function formatPlaceAddress(place: CuratedPlace): string {
  if (place.streetAddress && place.postalCode) {
    return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`
  }
  if (place.streetAddress) {
    return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion}`
  }
  return `${place.addressLocality}, ${place.addressRegion}`
}

export function googleMapsDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

export function googleMapsPlaceUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}
