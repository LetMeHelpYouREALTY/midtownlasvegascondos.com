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
  const widgetInitializedRef = useRef(false)
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
    
    // Reset state when dependencies change
    widgetInitializedRef.current = false
    setIsLoaded(false)

    let checkInterval: NodeJS.Timeout | null = null
    let isMounted = true

    // Wait a bit for custom element to be registered after script loads
    const initializeWidget = () => {
      if (!isMounted || !containerRef.current) return false
      
      if (window.customElements?.get('realscout-office-listings') && !widgetInitializedRef.current) {
        widgetInitializedRef.current = true
        
        try {
          // Clear container
          containerRef.current.innerHTML = ''
          
          // Create the element
          const element = document.createElement('realscout-office-listings')
          
          // Set attributes in the EXACT order RealScout expects
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
          element.setAttribute('sort-order', mappedSortOrder)
          element.setAttribute('listing-status', listingStatus)
          element.setAttribute('property-types', propertyTypes)
          element.setAttribute('price-min', priceMin)
          element.setAttribute('price-max', priceMax)
          
          // Set limit if provided
          if (limit) {
            element.setAttribute('limit', limit)
          }
          
          // Append to DOM
          containerRef.current.appendChild(element)
          
          if (isMounted) {
            setIsLoaded(true)
          }
          
          return true
        } catch (error) {
          console.error('Error initializing RealScout widget:', error)
          widgetInitializedRef.current = false
          return false
        }
      }
      return false
    }

    // Try immediately
    if (initializeWidget()) {
      return () => {
        isMounted = false
        if (checkInterval) clearInterval(checkInterval)
      }
    }

    // Wait for custom element registration - check every 100ms for up to 5 seconds
    let attempts = 0
    const maxAttempts = 50
    
    checkInterval = setInterval(() => {
      if (!isMounted) {
        if (checkInterval) clearInterval(checkInterval)
        return
      }
      
      attempts++
      if (initializeWidget()) {
        if (checkInterval) clearInterval(checkInterval)
      } else if (attempts >= maxAttempts) {
        if (checkInterval) clearInterval(checkInterval)
        console.warn('RealScout custom element did not register within timeout')
      }
    }, 100)

    return () => {
      isMounted = false
      if (checkInterval) clearInterval(checkInterval)
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

