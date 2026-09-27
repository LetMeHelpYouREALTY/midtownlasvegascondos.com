import {
  curatedPlacesForCategory,
  formatPlaceAddress,
  googleMapsDirectionsUrl,
} from '@/lib/amenities/curated-places'
import type { AmenityCategoryId } from '@/lib/amenities/types'
import { getCategoryById } from '@/lib/amenities/categories'

type CuratedAmenityListProps = {
  category: AmenityCategoryId
  className?: string
}

export function CuratedAmenityList({ category, className }: CuratedAmenityListProps) {
  const places = curatedPlacesForCategory(category)
  const label = getCategoryById(category).label

  if (places.length === 0) {
    return (
      <p className={className ?? 'text-sm text-slate-600'}>
        No curated {label.toLowerCase()} listings on file for this category — use the map
        filters when Google Maps is enabled, or explore{' '}
        <a href="/midtown/dine" className="font-semibold text-slate-900 hover:underline">
          Midtown dining
        </a>{' '}
        and{' '}
        <a href="/neighborhood" className="font-semibold text-slate-900 hover:underline">
          neighborhood guides
        </a>
        .
      </p>
    )
  }

  return (
    <ul className={className ?? 'space-y-3'} aria-label={`Curated ${label} near Midtown`}>
      {places.map((place) => (
        <li
          key={place.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="font-semibold text-slate-900">{place.name}</p>
          <p className="text-sm text-slate-600 mt-1">{formatPlaceAddress(place)}</p>
          {place.note ? (
            <p className="text-sm text-slate-500 mt-1">{place.note}</p>
          ) : null}
          <a
            href={googleMapsDirectionsUrl(place.lat, place.lng)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm font-semibold text-slate-900 hover:underline"
          >
            Directions
          </a>
        </li>
      ))}
    </ul>
  )
}
