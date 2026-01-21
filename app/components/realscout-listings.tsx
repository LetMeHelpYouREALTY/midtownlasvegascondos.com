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
  priceMax = '1200000',
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR',
}: RealScoutListingsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const widgetInitializedRef = useRef(false)
  const elementRef = useRef<HTMLElement | null>(null)
  const mountedRef = useRef(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mappedSortOrder = mapSortOrder(sortOrder)

  // Wait for RealScout script to load (script is loaded per-page via RealScoutScript component)
  useEffect(() => {
    if (typeof window === 'undefined') return

    mountedRef.current = true
    let checkTimeout: NodeJS.Timeout | null = null

    // Check if custom element is already registered
    if (window.customElements?.get('realscout-office-listings')) {
      // Defer state update to avoid synchronous updates
      setTimeout(() => {
        if (mountedRef.current) {
          setScriptLoaded(true)
        }
      }, 0)
      return () => {
        mountedRef.current = false
        if (checkTimeout) clearTimeout(checkTimeout)
      }
    }
    
    // Wait for custom element to register (script is loaded per-page)
    let attempts = 0
    const maxAttempts = 100 // 10 seconds max - module scripts can take longer
    const checkCustomElement = () => {
      if (!mountedRef.current) {
        if (checkTimeout) clearTimeout(checkTimeout)
        return
      }
      
      // Check if script is in DOM
      const script = document.querySelector('script[src*="realscout-web-components.umd.js"]')
      const customElementRegistered = window.customElements?.get('realscout-office-listings')
      
      if (customElementRegistered) {
        console.log('✅ RealScout custom element registered successfully')
        // Defer state update
        setTimeout(() => {
          if (mountedRef.current) {
            setScriptLoaded(true)
          }
        }, 0)
      } else {
        attempts++
        if (attempts % 10 === 0) {
          console.log(`Waiting for RealScout custom element... (attempt ${attempts}/${maxAttempts})`, {
            scriptInDOM: !!script,
            scriptLoaded: script?.getAttribute('data-loaded'),
            customElementsAvailable: !!window.customElements,
          })
        }
        if (attempts < maxAttempts) {
          // Retry after a short delay
          checkTimeout = setTimeout(checkCustomElement, 100)
        } else {
          console.error('❌ RealScout custom element did not register within timeout', {
            scriptInDOM: !!script,
            scriptSrc: script?.getAttribute('src'),
            attempts,
          })
        }
      }
    }
    
    // Start checking
    checkCustomElement()
    
    return () => {
      mountedRef.current = false
      if (checkTimeout) clearTimeout(checkTimeout)
    }
  }, [])

  // Initialize widget when script is loaded
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !scriptLoaded) return
    
    mountedRef.current = true
    
    // Reset state when dependencies change - defer to avoid synchronous updates
    widgetInitializedRef.current = false
    // Defer state update to next tick to avoid React warnings
    setTimeout(() => {
      if (mountedRef.current) {
        setIsLoaded(false)
      }
    }, 0)
    
    // Clear any existing element
    if (elementRef.current && elementRef.current.parentNode) {
      try {
        elementRef.current.parentNode.removeChild(elementRef.current)
      } catch (e) {
        // Element may have already been removed
      }
    }
    elementRef.current = null

    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    let checkInterval: NodeJS.Timeout | null = null

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
          
          // Create the element with all attributes set BEFORE appending
          // RealScout reads attributes during connectedCallback, so they must be set first
          const element = document.createElement('realscout-office-listings')
          elementRef.current = element
          
          // Set ALL attributes BEFORE appending to DOM (critical for RealScout)
          // Must match exactly: <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="450000" price-max="1200000"></realscout-office-listings>
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
          element.setAttribute('sort-order', mappedSortOrder)
          element.setAttribute('listing-status', listingStatus)
          element.setAttribute('property-types', propertyTypes)
          element.setAttribute('price-min', priceMin)
          element.setAttribute('price-max', priceMax)
          
          // Verify attributes are set before appending
          console.log('✅ RealScout element created with attributes:', {
            'agent-encoded-id': element.getAttribute('agent-encoded-id'),
            'sort-order': element.getAttribute('sort-order'),
            'listing-status': element.getAttribute('listing-status'),
            'property-types': element.getAttribute('property-types'),
            'price-min': element.getAttribute('price-min'),
            'price-max': element.getAttribute('price-max'),
            'all-attributes': Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' '),
          })
          
          // Append to DOM (body container) - RealScout initializes on connect
          containerRef.current.appendChild(element)
          
          console.log('✅ RealScout element appended to DOM:', {
            isConnected: element.isConnected,
            parentNode: element.parentNode?.nodeName,
            containerId: containerRef.current.id || 'no-id',
          })
          
          // Verify element is in DOM with correct attributes
          if (process.env.NODE_ENV === 'development') {
            console.log('RealScout element created:', {
              tagName: element.tagName,
              inDOM: element.isConnected,
              attributes: {
                'agent-encoded-id': element.getAttribute('agent-encoded-id'),
                'sort-order': element.getAttribute('sort-order'),
                'listing-status': element.getAttribute('listing-status'),
                'property-types': element.getAttribute('property-types'),
                'price-min': element.getAttribute('price-min'),
                'price-max': element.getAttribute('price-max'),
              }
            })
          }
          
          // Re-apply attributes after element is connected to DOM
          // RealScout custom elements read attributes in connectedCallback
          // Use longer delay to ensure RealScout has fully initialized
          timeoutRef.current = setTimeout(() => {
            if (!mountedRef.current || !containerRef.current || !element.parentNode || element !== elementRef.current) {
              return
            }
            
            try {
              // Re-apply all attributes in exact order after element is connected
              // This ensures RealScout sees them even if it missed them during initial connection
              element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
              element.setAttribute('sort-order', mappedSortOrder)
              element.setAttribute('listing-status', listingStatus)
              element.setAttribute('property-types', propertyTypes)
              element.setAttribute('price-min', priceMin)
              element.setAttribute('price-max', priceMax)
              
              // Force a re-render by triggering attribute change
              // Some custom elements need this to re-read attributes
              const event = new Event('attributechanged', { bubbles: true })
              element.dispatchEvent(event)
              
              console.log('RealScout element attributes RE-APPLIED after 300ms:', {
                'agent-encoded-id': element.getAttribute('agent-encoded-id'),
                'sort-order': element.getAttribute('sort-order'),
                'listing-status': element.getAttribute('listing-status'),
                'property-types': element.getAttribute('property-types'),
                'price-min': element.getAttribute('price-min'),
                'price-max': element.getAttribute('price-max'),
                'element-in-DOM': element.isConnected,
                'parent': element.parentNode?.nodeName,
              })
            } catch (err) {
              console.error('Error re-applying RealScout attributes:', err)
            }
          }, 300)
          
          // Defer state update to avoid synchronous updates during render
          setTimeout(() => {
            if (mountedRef.current) {
              setIsLoaded(true)
            }
          }, 0)
          
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
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      if (elementRef.current && elementRef.current.parentNode) {
        try {
          elementRef.current.parentNode.removeChild(elementRef.current)
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
      elementRef.current = null
    }
  }, [scriptLoaded, mappedSortOrder, listingStatus, propertyTypes, priceMin, priceMax])

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

