'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { MIDTOWN_COMMUNITY } from '@/lib/amenities/community-config'
import { getCategoryById } from '@/lib/amenities/categories'
import { AMENITY_CATEGORY_ORDER } from '@/lib/amenities/categories'
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from '@/lib/amenities/load-google-maps'
import { searchCategory } from '@/lib/amenities/search-nearby'
import type { AmenityCategoryId } from '@/lib/amenities/types'
import { AmenityCategoryFilters } from './amenity-category-filters'
import { CuratedAmenityList } from './curated-amenity-list'

const MAP_HEIGHT_CLASS = 'min-h-[420px] h-[min(70vh,520px)]'

type AmenityMapProps = {
  variant?: 'default' | 'compact'
}

function buildInfoWindowContent(title: string, address: string, lat: number, lng: number): HTMLElement {
  const wrap = document.createElement('div')
  wrap.className = 'amenity-info-window'
  wrap.style.maxWidth = '240px'
  wrap.style.fontFamily = 'system-ui,sans-serif'

  const strong = document.createElement('strong')
  strong.style.display = 'block'
  strong.style.marginBottom = '4px'
  strong.textContent = title
  wrap.appendChild(strong)

  if (address) {
    const addr = document.createElement('div')
    addr.style.fontSize = '13px'
    addr.style.color = '#333'
    addr.textContent = address
    wrap.appendChild(addr)
  }

  const link = document.createElement('a')
  link.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  link.target = '_blank'
  link.rel = 'noopener'
  link.style.fontSize = '13px'
  link.style.fontWeight = '600'
  link.textContent = 'Directions'
  wrap.appendChild(link)

  return wrap
}

export function AmenityMap({ variant = 'default' }: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  const containerRef = useRef<HTMLDivElement>(null)
  const mapDivRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<
    google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null
  >(null)
  const placeMarkersRef = useRef<
    (google.maps.Marker | google.maps.marker.AdvancedMarkerElement)[]
  >([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(AMENITY_CATEGORY_ORDER[0])
  const [inView, setInView] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [authFailed, setAuthFailed] = useState(
    () => typeof window !== 'undefined' && mapsAuthFailed,
  )
  const [loadError, setLoadError] = useState(false)
  const [livePlacesCount, setLivePlacesCount] = useState(0)
  const [searching, setSearching] = useState(false)
  const initStartedRef = useRef(false)

  const useFallback = !apiKey || authFailed || loadError

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

  useEffect(() => {
    const onAuthFailure = () => {
      setAuthFailed(true)
      setMapReady(false)
      mapRef.current = null
      clearPlaceMarkers()
      communityMarkerRef.current = null
      infoWindowRef.current?.close()
      infoWindowRef.current = null
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [clearPlaceMarkers])

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

  const openInfo = useCallback(
    (title: string, address: string, lat: number, lng: number, anchor?: google.maps.MVCObject) => {
      if (!infoWindowRef.current || !mapRef.current) return
      infoWindowRef.current.setContent(buildInfoWindowContent(title, address, lat, lng))
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
      if (!mapRef.current || useFallback) return
      setSearching(true)
      setLivePlacesCount(0)
      clearPlaceMarkers()

      try {
        const results = await searchCategory(MIDTOWN_COMMUNITY.center, categoryId)

        for (const place of results) {
          const { lat, lng, name, address } = place
          const marker = await createPlaceMarker(mapRef.current!, { lat, lng }, mapId)
          marker.addListener('click', () => {
            openInfo(name, address, lat, lng, marker as google.maps.MVCObject)
          })
          placeMarkersRef.current.push(marker)
        }

        setLivePlacesCount(results.length)
      } catch {
        setLivePlacesCount(0)
      } finally {
        setSearching(false)
      }
    },
    [clearPlaceMarkers, mapId, openInfo, useFallback],
  )

  useEffect(() => {
    if (mapsAuthFailed) {
      setAuthFailed(true)
    }
  }, [])

  useEffect(() => {
    if (!inView || !apiKey || useFallback || mapReady || initStartedRef.current) return
    if (mapsAuthFailed) {
      setAuthFailed(true)
      return
    }
    initStartedRef.current = true

    let cancelled = false

    loadGoogleMaps(apiKey)
      .then(async () => {
        if (cancelled || !mapDivRef.current || mapsAuthFailed) return

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

        const communityMarker = await createPlaceMarker(map, center, mapId, true)
        communityMarker.addListener('click', () => {
          openInfo(
            MIDTOWN_COMMUNITY.name,
            `${MIDTOWN_COMMUNITY.streetAddress}, ${MIDTOWN_COMMUNITY.addressLocality}`,
            center.lat,
            center.lng,
            communityMarker as google.maps.MVCObject,
          )
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
  }, [inView, apiKey, useFallback, mapReady, mapId, openInfo])

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
        {searching && mapReady && !useFallback ? (
          <div className="absolute top-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow">
            Updating places…
          </div>
        ) : null}
      </div>

      {useFallback || variant === 'default' ? (
        <div>
          {useFallback ? (
            <p className="text-sm text-slate-600 mb-3">
              Showing a map preview and verified Midtown picks for{' '}
              {getCategoryById(activeCategory).label}. Select another category to see more curated
              listings.
            </p>
          ) : livePlacesCount > 0 ? (
            <p className="text-sm text-slate-600 mb-3">
              Tap a marker for directions. Verified Midtown anchors are listed below.
            </p>
          ) : (
            <p className="text-sm text-slate-600 mb-3">
              Live place search did not return results for this filter — see verified listings
              below.
            </p>
          )}
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
