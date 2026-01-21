'use client'

import React, { useEffect, useState, useRef } from 'react'

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
  priceMin = '450000',
  priceMax = '1300000',
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,TC,MF',
}: RealScoutListingsProps) {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mappedSortOrder = mapSortOrder(sortOrder)

  // Ensure we only render the widget on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create the widget HTML
  const widgetHtml = `<realscout-office-listings 
    agent-encoded-id="QWdlbnQtMjI1MDUw"
    sort-order="${mappedSortOrder}"
    listing-status="${listingStatus}"
    property-types="${propertyTypes}"
    price-min="${priceMin}"
    price-max="${priceMax}"
  ></realscout-office-listings>`

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
      <div ref={containerRef} className="w-full min-h-[300px]">
        {isClient ? (
          <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />
        ) : (
          <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Loading properties...</p>
          </div>
        )}
      </div>
    </div>
  )
}
