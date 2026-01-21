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
  const elementRef = useRef<HTMLElement | null>(null)
  const mountedRef = useRef(true)
  const mappedSortOrder = mapSortOrder(sortOrder)

  // Load script on component mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    let isMounted = true

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src*="realscout-web-components.umd.js"]'
    )
    
    if (existingScript) {
      // Script already exists, check if custom element is registered
      if (window.customElements?.get('realscout-office-listings')) {
        if (isMounted) {
          setScriptLoaded(true)
        }
        return
      }
      
      // Check if script has already loaded (for module scripts, check if it's in the DOM)
      // If script exists but custom element isn't registered yet, wait for it
      let checkTimeout: NodeJS.Timeout | null = null
      let attempts = 0
      const maxAttempts = 50 // 5 seconds max
      const checkCustomElement = () => {
        if (!isMounted) {
          if (checkTimeout) clearTimeout(checkTimeout)
          return
        }
        if (window.customElements?.get('realscout-office-listings')) {
          if (isMounted) {
            setScriptLoaded(true)
          }
        } else {
          attempts++
          if (attempts < maxAttempts) {
            // Retry after a short delay
            checkTimeout = setTimeout(checkCustomElement, 100)
          } else {
            console.warn('RealScout custom element did not register within timeout in script loading')
          }
        }
      }
      
      // Wait for existing script to finish loading
      if (existingScript.getAttribute('type') === 'module') {
        // For module scripts, check periodically
        checkCustomElement()
      } else {
        existingScript.addEventListener('load', () => {
          if (isMounted) {
            setScriptLoaded(true)
          }
        })
      }
      
      return () => {
        isMounted = false
        if (checkTimeout) clearTimeout(checkTimeout)
      }
    }

    // Create and inject script tag
    const script = document.createElement('script')
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    script.type = 'module'
    script.async = true
    script.id = 'realscout-office-listings-script'
    
    script.onload = () => {
      if (isMounted) {
        setScriptLoaded(true)
      }
    }
    
    script.onerror = () => {
      console.error('Failed to load RealScout script')
    }

    document.head.appendChild(script)

    return () => {
      isMounted = false
    }
  }, [])

  // Initialize widget when script is loaded
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !scriptLoaded) return
    
    mountedRef.current = true
    
    // Reset state when dependencies change
    widgetInitializedRef.current = false
    setIsLoaded(false)
    
    // Clear any existing element
    if (elementRef.current && elementRef.current.parentNode) {
      elementRef.current.parentNode.removeChild(elementRef.current)
    }
    elementRef.current = null

    let checkInterval: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null

    // Wait a bit for custom element to be registered after script loads
    const initializeWidget = () => {
      if (!mountedRef.current || !containerRef.current) return false
      
      try {
        if (window.customElements?.get('realscout-office-listings') && !widgetInitializedRef.current) {
          widgetInitializedRef.current = true
          
          // Clear container safely
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild)
          }
          
          // Create the element
          const element = document.createElement('realscout-office-listings')
          elementRef.current = element
          
          // Set attributes BEFORE appending (RealScout may read them during connection)
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
          
          // Use setTimeout instead of requestAnimationFrame to avoid closure issues
          // Small delay to ensure element is connected before setting attributes again
          timeoutId = setTimeout(() => {
            if (!mountedRef.current || !containerRef.current || !element.parentNode || element !== elementRef.current) {
              return
            }
            
            try {
              // Re-apply all attributes to ensure widget recognizes them
              element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
              element.setAttribute('sort-order', mappedSortOrder)
              element.setAttribute('listing-status', listingStatus)
              element.setAttribute('property-types', propertyTypes)
              element.setAttribute('price-min', priceMin)
              element.setAttribute('price-max', priceMax)
              
              if (limit) {
                element.setAttribute('limit', limit)
              }
            } catch (err) {
              // Silently fail - attributes may already be set
            }
          }, 50)
          
          if (mountedRef.current) {
            setIsLoaded(true)
          }
          
          return true
        }
      } catch (error) {
        console.error('Error initializing RealScout widget:', error)
        widgetInitializedRef.current = false
        if (mountedRef.current) {
          setIsLoaded(false)
        }
        return false
      }
      return false
    }

    // Try immediately
    if (initializeWidget()) {
      return () => {
        mountedRef.current = false
        if (checkInterval) clearInterval(checkInterval)
        if (timeoutId) clearTimeout(timeoutId)
        if (elementRef.current && elementRef.current.parentNode) {
          try {
            elementRef.current.parentNode.removeChild(elementRef.current)
          } catch (e) {
            // Ignore errors during cleanup
          }
        }
        elementRef.current = null
      }
    }

    // Wait for custom element registration - check every 100ms for up to 5 seconds
    let attempts = 0
    const maxAttempts = 50
    
    checkInterval = setInterval(() => {
      if (!mountedRef.current) {
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
      mountedRef.current = false
      if (checkInterval) clearInterval(checkInterval)
      if (timeoutId) clearTimeout(timeoutId)
      if (elementRef.current && elementRef.current.parentNode) {
        try {
          elementRef.current.parentNode.removeChild(elementRef.current)
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
      elementRef.current = null
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

