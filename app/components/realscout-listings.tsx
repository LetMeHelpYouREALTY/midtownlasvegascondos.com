'use client'

import React, { useEffect, useState, useRef } from 'react'
import { loadRealScoutWebComponents, whenElementInView } from '@/lib/load-realscout-script'

interface RealScoutListingsProps {
  title?: string
  description?: string
  priceMin?: string
  priceMax?: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'DATE_NEW' | 'NEWEST' | 'STATUS_CHANGE'
  listingStatus?: 'For Sale' | 'For Rent' | 'Sold' | 'In Contract'
  propertyTypes?: string
  limit?: string
}

const PROPERTY_TYPE_CODES: Record<string, string> = {
  SFR: 'SFR',
  'SINGLE FAMILY': 'SFR',
  'SINGLE FAMILY RESIDENCE': 'SFR',
  TC: 'TC',
  CONDO: 'TC',
  CONDOS: 'TC',
  TOWNHOUSE: 'TC',
  TOWNHOME: 'TC',
  MF: 'MF',
  'MULTI-FAMILY': 'MF',
  MULTIFAMILY: 'MF',
  MOBILE: 'MOBILE',
}

/**
 * RealScout only accepts its own codes (SFR, TC, MF, MOBILE) with a leading comma.
 * Unknown names like "Condo" silently return zero listings, so translate them here.
 */
export function normalizePropertyTypes(value?: string): string | undefined {
  if (!value) return undefined
  const codes = value
    .split(',')
    .map((t) => PROPERTY_TYPE_CODES[t.trim().toUpperCase()])
    .filter((c): c is string => Boolean(c))
  const unique = [...new Set(codes)]
  return unique.length ? `,${unique.join(',')}` : undefined
}

// Map our sort order values to RealScout's expected values
const mapSortOrder = (sortOrder: string): string => {
  switch (sortOrder) {
    case 'PRICE_LOW':
      return 'PRICE_LOW'
    case 'PRICE_HIGH':
      return 'PRICE_HIGH'
    case 'DATE_NEW':
    case 'NEWEST':
      return 'NEWEST'
    case 'STATUS_CHANGE':
      return 'STATUS_AND_SIGNIFICANT_CHANGE'
    default:
      return 'NEWEST'
  }
}

export function RealScoutListings({
  title,
  description,
  priceMin,
  priceMax,
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes,
}: RealScoutListingsProps) {
  const [isClient, setIsClient] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [widgetKey, setWidgetKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mappedSortOrder = mapSortOrder(sortOrder)
  const propertyTypeCodes = normalizePropertyTypes(propertyTypes)

  useEffect(() => {
    setIsClient(true)
    const node = containerRef.current
    if (!node) return

    let cancelled = false
    const stop = whenElementInView(node, () => {
      void loadRealScoutWebComponents('realscout-office-listings').then(() => {
        if (cancelled) return
        setScriptLoaded(true)
        setWidgetKey((prev) => prev + 1)
      })
    })

    return () => {
      cancelled = true
      stop()
    }
  }, [])

  // Create the widget HTML - only include attributes with values
  const attributes = [
    'agent-encoded-id="QWdlbnQtMjI1MDUw"',
    `sort-order="${mappedSortOrder}"`,
    `listing-status="${listingStatus}"`,
    propertyTypeCodes ? `property-types="${propertyTypeCodes}"` : '',
    priceMin ? `price-min="${priceMin}"` : '',
    priceMax ? `price-max="${priceMax}"` : '',
  ].filter(Boolean).join(' ')

  const widgetHtml = `<realscout-office-listings ${attributes}></realscout-office-listings>`

  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      <div ref={containerRef} className="w-full min-h-[480px]">
        {isClient && scriptLoaded ? (
          <div 
            dangerouslySetInnerHTML={{ __html: widgetHtml }}
            key={`widget-${widgetKey}`}
          />
        ) : (
          <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Loading properties...</p>
          </div>
        )}
      </div>
    </div>
  )
}
