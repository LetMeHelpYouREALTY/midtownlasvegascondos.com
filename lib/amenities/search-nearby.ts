import { MIDTOWN_COMMUNITY } from './community-config'
import { getCategoryById } from './categories'
import type { AmenityCategoryId } from './types'

export type NearbyPlaceResult = {
  name: string
  address: string
  lat: number
  lng: number
  googleMapsURI?: string
}

const cache = new Map<string, Promise<google.maps.places.Place[]>>()

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<NearbyPlaceResult[]> {
  const category = getCategoryById(categoryId)
  let p = cache.get(categoryId)
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: {
          center,
          radius: MIDTOWN_COMMUNITY.searchRadiusMeters,
        },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as any,
      })
      return places
    })()
    p.catch(() => cache.delete(categoryId))
    cache.set(categoryId, p)
  }

  return p.then((places) =>
    places
      .filter((place) => place.location)
      .map((place) => {
        const lat = place.location!.lat()
        const lng = place.location!.lng()
        return {
          name: place.displayName ? String(place.displayName) : 'Place',
          address: place.formattedAddress ?? '',
          lat,
          lng,
          googleMapsURI: place.googleMapsURI ?? undefined,
        }
      }),
  )
}
