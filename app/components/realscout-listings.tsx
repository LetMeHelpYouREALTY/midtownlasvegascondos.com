/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useRef, useState } from 'react'

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
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const mappedSortOrder = mapSortOrder(sortOrder)

  // Load script on component mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src*="realscout-web-components.umd.js"]'
    )
    
    if (existingScript) {
      // Script already exists, wait for it to load
      if (window.customElements?.get('realscout-office-listings')) {
        setScriptLoaded(true)
        return
      }
      // Wait for existing script to finish loading
      existingScript.addEventListener('load', () => {
        setScriptLoaded(true)
      })
      return
    }

    // Create and inject script tag
    const script = document.createElement('script')
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    script.type = 'module'
    script.async = true
    script.id = 'realscout-office-listings-script'
    
    script.onload = () => {
      setScriptLoaded(true)
    }
    
    script.onerror = () => {
      console.error('Failed to load RealScout script')
    }

    document.head.appendChild(script)

    return () => {
      // Don't remove script on unmount - it might be used by other components
    }
  }, [])

  // Initialize widget when script is loaded
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !scriptLoaded) return

    // Wait a bit for custom element to be registered after script loads
    const initializeWidget = () => {
      if (window.customElements?.get('realscout-office-listings')) {
        // Clear container
        containerRef.current!.innerHTML = ''
        
        // Create the element
        const element = document.createElement('realscout-office-listings')
        
        // Set attributes in the EXACT order RealScout expects (based on their documentation)
        // Order: agent-encoded-id, sort-order, listing-status, property-types, price-min, price-max
        element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
        element.setAttribute('sort-order', mappedSortOrder)
        element.setAttribute('listing-status', listingStatus)
        element.setAttribute('property-types', propertyTypes)
        element.setAttribute('price-min', priceMin)
        element.setAttribute('price-max', priceMax)
        
        // Set limit if provided (not in the example, but we'll keep it)
        if (limit) {
          element.setAttribute('limit', limit)
        }
        
        // Debug: Log attributes before appending
        console.log('RealScout Listings Widget - Setting attributes:', {
          'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
          'sort-order': mappedSortOrder,
          'listing-status': listingStatus,
          'property-types': propertyTypes,
          'price-min': priceMin,
          'price-max': priceMax,
          'limit': limit
        })
        
        // Append to DOM
        containerRef.current!.appendChild(element)
        
        // Debug: Verify attributes after appending
        setTimeout(() => {
          console.log('RealScout Listings Widget - Attributes after append:', {
            'agent-encoded-id': element.getAttribute('agent-encoded-id'),
            'sort-order': element.getAttribute('sort-order'),
            'listing-status': element.getAttribute('listing-status'),
            'property-types': element.getAttribute('property-types'),
            'price-min': element.getAttribute('price-min'),
            'price-max': element.getAttribute('price-max'),
            'limit': element.getAttribute('limit')
          })
        }, 200)
        
        setIsLoaded(true)
        return true
      }
      return false
    }

    // Try immediately
    if (initializeWidget()) {
      return
    }

    // Wait for custom element registration - check every 100ms for up to 5 seconds
    let attempts = 0
    const maxAttempts = 50
    
    const checkInterval = setInterval(() => {
      attempts++
      if (initializeWidget()) {
        clearInterval(checkInterval)
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval)
        console.warn('RealScout custom element did not register within timeout')
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
    }
  }, [scriptLoaded, mappedSortOrder, listingStatus, propertyTypes, priceMin, priceMax, limit])

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
          {!isLoaded && (
            <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Loading properties...</p>
            </div>
          )}
        </div>
      </div>
  )
}

