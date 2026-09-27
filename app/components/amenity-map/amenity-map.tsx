'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { MIDTOWN_COMMUNITY } from '@/lib/amenities/community-config'
import { getCategoryById } from '@/lib/amenities/categories'
import { AMENITY_CATEGORY_ORDER } from '@/lib/amenities/categories'
import { loadGoogleMapsScript } from '@/lib/amenities/load-google-maps'
import type { AmenityCategoryId } from '@/lib/amenities/types'
import { AmenityCategoryFilters } from './amenity-category-filters'
import { CuratedAmenityList } from './curated-amenity-list'

const MAP_HEIGHT_CLASS = 'min-h-[420px] h-[min(70vh,520px)]'

type MapPlaceResult = {
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
}

type AmenityMapProps = {
  /** When true, show the full category chip row; compact still shows filters */
  variant?: 'default' | 'compact'
}

export function AmenityMap({ variant = 'default' }: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  const containerRef = useRef<HTMLDivElement>(null)
  const mapDivRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null>(
    null,
  )
  const placeMarkersRef = useRef<
    (google.maps.Marker | google.maps.marker.AdvancedMarkerElement)[]
  >([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(AMENITY_CATEGORY_ORDER[0])
  const [inView, setInView] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [livePlaces, setLivePlaces] = useState<MapPlaceResult[]>([])
  const [searching, setSearching] = useState(false)
  const initStartedRef = useRef(false)

  const useFallback = !apiKey || loadError

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((m) => {
      if ('map' in m && m.map) {
        m.map = null
      } else if ('setMap' in m && typeof m.setMap === 'function') {
        m.setMap(null)
      }
    })
    placeMarkersRef.current = []
  }, [])

  const openInfo = useCallback(
    (title: string, bodyHtml: string, anchor?: google.maps.MVCObject) => {
      if (!infoWindowRef.current || !mapRef.current) return
      infoWindowRef.current.setContent(
        `<div class="amenity-info-window" style="max-width:240px;font-family:system-ui,sans-serif">
          <strong style="display:block;margin-bottom:4px">${title}</strong>
          ${bodyHtml}
        </div>`,
      )
      if (anchor) {
        infoWindowRef.current.open({ map: mapRef.current, anchor })
      } else {
        infoWindowRef.current.open(mapRef.current)
      }
    },
    [],
  )

  const fetchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || !window.google?.maps) return
      setSearching(true)
      setLivePlaces([])
      clearPlaceMarkers()

      const category = getCategoryById(categoryId)
      const primaryType = category.primaryTypes[0]

      try {
        const placesLib = (await google.maps.importLibrary(
          'places',
        )) as google.maps.PlacesLibrary
        const { Place } = placesLib

        const center = MIDTOWN_COMMUNITY.center
        const request = {
          fields: [
            'displayName',
            'location',
            'formattedAddress',
            'rating',
            'googleMapsURI',
          ],
          locationRestriction: {
            center: { lat: center.lat, lng: center.lng },
            radius: MIDTOWN_COMMUNITY.searchRadiusMeters,
          },
          includedPrimaryTypes: [primaryType],
          maxResultCount: 15,
          rankPreference: google.maps.places.SearchNearbyRankPreference.POPULARITY,
        }

        const { places } = await Place.searchNearby(request)
        const results: MapPlaceResult[] = []

        for (const place of places) {
          if (!place.location) continue
          const lat = place.location.lat()
          const lng = place.location.lng()
          const name = place.displayName ? String(place.displayName) : 'Place'
          const address = place.formattedAddress ?? ''
          const rating = place.rating ?? undefined

          results.push({ name, address, rating, lat, lng })

          const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
          const ratingLine =
            rating != null ? `<div style="font-size:12px;color:#444">Rating: ${rating}</div>` : ''
          const body = `<div style="font-size:13px;color:#333">${address}</div>${ratingLine}
            <a href="${directionsUrl}" target="_blank" rel="noopener" style="font-size:13px;font-weight:600">Directions</a>`

          const marker = await createPlaceMarker(mapRef.current!, { lat, lng }, mapId)
          marker.addListener('click', () => {
            openInfo(name, body, marker as google.maps.MVCObject)
          })
          placeMarkersRef.current.push(marker)
        }

        setLivePlaces(results)
      } catch {
        setLoadError(true)
      } finally {
        setSearching(false)
      }
    },
    [clearPlaceMarkers, mapId, openInfo],
  )

  useEffect(() => {
    if (!inView || !apiKey || loadError || mapReady || initStartedRef.current) return
    initStartedRef.current = true

    let cancelled = false

    loadGoogleMapsScript(apiKey)
      .then(async () => {
        if (cancelled || !mapDivRef.current) return

        const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
        const center = MIDTOWN_COMMUNITY.center

        const mapOptions: google.maps.MapOptions = {
          center,
          zoom: MIDTOWN_COMMUNITY.defaultZoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        }
        if (mapId) {
          mapOptions.mapId = mapId
        }

        const map = new Map(mapDivRef.current, mapOptions)
        mapRef.current = map
        infoWindowRef.current = new google.maps.InfoWindow()

        const communityBody = `<div style="font-size:13px">${MIDTOWN_COMMUNITY.streetAddress}, ${MIDTOWN_COMMUNITY.addressLocality}</div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}" target="_blank" rel="noopener" style="font-size:13px;font-weight:600">Directions</a>`

        const communityMarker = await createPlaceMarker(
          map,
          center,
          mapId,
          true,
        )
        communityMarker.addListener('click', () => {
          openInfo(MIDTOWN_COMMUNITY.name, communityBody, communityMarker as google.maps.MVCObject)
        })
        communityMarkerRef.current = communityMarker

        setMapReady(true)
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })

    return () => {
      cancelled = true
    }
  }, [inView, apiKey, loadError, mapReady, mapId, openInfo])

  useEffect(() => {
    if (mapReady && !useFallback) {
      fetchNearby(activeCategory)
    }
  }, [activeCategory, mapReady, useFallback, fetchNearby])

  const embedSrc = `https://www.google.com/maps?q=${MIDTOWN_COMMUNITY.center.lat},${MIDTOWN_COMMUNITY.center.lng}&z=${MIDTOWN_COMMUNITY.defaultZoom}&output=embed`

  return (
    <div ref={containerRef} className="space-y-4">
      <AmenityCategoryFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div
        className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${MAP_HEIGHT_CLASS}`}
        aria-label="Map of amenities near Midtown Las Vegas"
      >
        {useFallback ? (
          <iframe
            title="Map centered on Midtown Las Vegas at 921 South Main Street"
            src={embedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div ref={mapDivRef} className="absolute inset-0 h-full w-full" />
        )}
        {!inView && !useFallback ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-600 text-sm">
            Map loads when you scroll here
          </div>
        ) : null}
        {searching && mapReady ? (
          <div className="absolute top-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow">
            Updating places…
          </div>
        ) : null}
      </div>

      {useFallback || variant === 'default' ? (
        <div>
          {useFallback ? (
            <p className="text-sm text-slate-600 mb-3">
              Interactive place search requires{' '}
              <code className="text-xs bg-slate-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code>
              . Showing verified Midtown picks for {getCategoryById(activeCategory).label}:
            </p>
          ) : livePlaces.length > 0 ? (
            <p className="text-sm text-slate-600 mb-3">
              Tap a marker for ratings and directions. Curated Midtown anchors are always listed
              below.
            </p>
          ) : null}
          <CuratedAmenityList category={activeCategory} />
        </div>
      ) : null}
    </div>
  )
}

async function createPlaceMarker(
  map: google.maps.Map,
  position: google.maps.LatLngLiteral,
  mapId?: string,
  isCommunity = false,
): Promise<google.maps.Marker | google.maps.marker.AdvancedMarkerElement> {
  if (mapId) {
    try {
      const markerLib = (await google.maps.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary
      const { AdvancedMarkerElement } = markerLib
      const pin = document.createElement('div')
      pin.className = isCommunity
        ? 'flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-amber-500 shadow-md'
        : 'h-3 w-3 rounded-full border border-white bg-slate-800 shadow'
      if (isCommunity) {
        pin.setAttribute('aria-hidden', 'true')
      }
      const marker = new AdvancedMarkerElement({
        map,
        position,
        content: pin,
        title: isCommunity ? MIDTOWN_COMMUNITY.name : undefined,
      })
      return marker
    } catch {
      // fall through to classic marker
    }
  }

  const marker = new google.maps.Marker({
    map,
    position,
    title: isCommunity ? MIDTOWN_COMMUNITY.name : undefined,
    icon: isCommunity
      ? {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#f59e0b',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        }
      : undefined,
  })
  return marker
}
