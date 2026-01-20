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

      // Function to check if RealScout script is loaded and initialize widget
      const initializeWidget = () => {
        if (containerRef.current && window.customElements?.get('realscout-office-listings')) {
          // Clear container first
          containerRef.current.innerHTML = ''
          
          // Create element and set ALL attributes BEFORE appending to DOM
          // This ensures RealScout widget reads our attributes during initialization
          const element = document.createElement('realscout-office-listings')
          
          // Set agent ID first (required)
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
          
          // Set price attributes BEFORE other attributes to ensure they're not overridden
          element.setAttribute('price-min', priceMin)
          element.setAttribute('price-max', priceMax)
          
          // Set other attributes
          element.setAttribute('sort-order', sortOrder)
          element.setAttribute('listing-status', listingStatus)
          element.setAttribute('property-types', propertyTypes)
          element.setAttribute('limit', limit)
          
          // Append to DOM after all attributes are set
          containerRef.current.appendChild(element)
          
          // Force attribute update after a brief delay to ensure widget reads them
          setTimeout(() => {
            if (element && containerRef.current?.contains(element)) {
              element.setAttribute('price-min', priceMin)
              element.setAttribute('price-max', priceMax)
            }
          }, 100)
          return true
        }
        return false
      }

      // Try to initialize immediately if script is already loaded
      if (initializeWidget()) {
        return
      }

      // Wait for script to load - check multiple times with increasing intervals
      let attempts = 0
      const maxAttempts = 20 // Try for up to 10 seconds (20 * 500ms)
      
      const checkInterval = setInterval(() => {
        attempts++
        if (initializeWidget()) {
          clearInterval(checkInterval)
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval)
          setHasError(true)
        }
      }, 500)

      return () => {
        clearInterval(checkInterval)
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

