/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

interface RealScoutListingsProps {
  title?: string
  description?: string
  priceMin?: string
  priceMax?: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'DATE_NEW' | 'NEWEST'
  listingStatus?: 'For Sale' | 'For Rent' | 'Sold'
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
    default:
      return 'NEWEST'
  }
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
  const [isLoaded, setIsLoaded] = useState(false)
  const mappedSortOrder = mapSortOrder(sortOrder)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    // Check if custom element is already registered
    const checkAndRender = () => {
      if (window.customElements?.get('realscout-office-listings')) {
        // Clear container
        containerRef.current!.innerHTML = ''
        
        // Create and configure the element
        const element = document.createElement('realscout-office-listings')
        element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
        element.setAttribute('sort-order', mappedSortOrder)
        element.setAttribute('listing-status', listingStatus)
        element.setAttribute('property-types', propertyTypes)
        element.setAttribute('price-min', priceMin)
        element.setAttribute('price-max', priceMax)
        element.setAttribute('limit', limit)
        
        containerRef.current!.appendChild(element)
        setIsLoaded(true)
        return true
      }
      return false
    }

    // Try immediately
    if (checkAndRender()) {
      return
    }

    // Wait for script to load - check every 100ms for up to 10 seconds
    let attempts = 0
    const maxAttempts = 100
    
    const checkInterval = setInterval(() => {
      attempts++
      if (checkAndRender()) {
        clearInterval(checkInterval)
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval)
        console.warn('RealScout script did not load within timeout')
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
    }
  }, [mappedSortOrder, listingStatus, propertyTypes, priceMin, priceMax, limit])

  return (
    <>
      {/* Load RealScout script for this widget */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="beforeInteractive"
        id="realscout-office-listings-script"
      />
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
          {!isLoaded && (
            <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Loading properties...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

