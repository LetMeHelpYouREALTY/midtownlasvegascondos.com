/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RealScoutListingsProps {
  title?: string
  description?: string
  priceMin?: string
  priceMax?: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'DATE_NEW'
  listingStatus?: 'For Sale' | 'For Rent' | 'Sold'
  propertyTypes?: string
  limit?: string
}

export function RealScoutListings({
  title,
  description,
  priceMin = '450000',
  priceMax = '1000000',
  sortOrder = 'PRICE_LOW',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,CONDO',
  limit = '12',
}: RealScoutListingsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || hasError) return

    try {
      if (!containerRef.current) return

      // Wait a bit for the script to load, then render
      const timeoutId = setTimeout(() => {
        try {
          if (containerRef.current && window.customElements?.get('realscout-office-listings')) {
            const element = document.createElement('realscout-office-listings')
            element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
            element.setAttribute('sort-order', sortOrder)
            element.setAttribute('listing-status', listingStatus)
            element.setAttribute('property-types', propertyTypes)
            element.setAttribute('price-min', priceMin)
            element.setAttribute('price-max', priceMax)
            element.setAttribute('limit', limit)
            
            containerRef.current.innerHTML = ''
            containerRef.current.appendChild(element)
          }
        } catch (error) {
          setHasError(true)
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId)
      }
    } catch (error) {
      setHasError(true)
    }
  }, [sortOrder, listingStatus, propertyTypes, priceMin, priceMax, limit])

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
      <div ref={containerRef} className="w-full">
        {!hasError && (
          <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Loading properties...</p>
          </div>
        )}
      </div>
    </div>
  )
}

