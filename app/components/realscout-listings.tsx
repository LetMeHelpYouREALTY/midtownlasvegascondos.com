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

  // Load widget script - use Intersection Observer if below fold, otherwise load immediately
  useEffect(() => {
    setIsClient(true)
    
    if (!containerRef.current) return
    
    let scriptLoadingStarted = false
    
    // Function to load RealScout script
    const loadScript = () => {
      if (typeof window === 'undefined' || scriptLoadingStarted) return
      scriptLoadingStarted = true
      
      // Check if custom element is already registered
      if (window.customElements?.get('realscout-office-listings')) {
        // Element already registered, wait a bit then render
        setTimeout(() => {
          setScriptLoaded(true)
          // Force widget re-render after a brief delay to ensure initialization
          setTimeout(() => {
            setWidgetKey(prev => prev + 1)
          }, 100)
        }, 500)
        return
      }
      
      // Check if script tag already exists (from layout.tsx)
      const existingScript = document.getElementById('realscout-web-components-script')
      if (existingScript) {
        // Script is loading from layout, poll for custom element registration
        let attempts = 0
        const maxAttempts = 100 // 10 seconds at 100ms intervals
        
        const interval = setInterval(() => {
          attempts++
          
          if (window.customElements?.get('realscout-office-listings')) {
            // Custom element registered - give it extra time to fully initialize
            clearInterval(interval)
            setTimeout(() => {
              setScriptLoaded(true)
              // Force widget re-render after a brief delay to ensure initialization
              setTimeout(() => {
                setWidgetKey(prev => prev + 1)
              }, 100)
            }, 500) // Increased delay to ensure full initialization
            return
          }
          
          // Timeout after max attempts
          if (attempts >= maxAttempts) {
            clearInterval(interval)
            // Render anyway - widget may still work
            setScriptLoaded(true)
          }
        }, 100)
        
        return
      }
      
      // Script not found - this shouldn't happen if layout.tsx is correct
      // But fallback: load script dynamically
      const script = document.createElement('script')
      script.id = 'realscout-web-components-script'
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.async = true
      script.onload = () => {
        // Wait for custom element to be registered and ensure it's ready
        let attempts = 0
        const maxAttempts = 100 // 10 seconds at 100ms intervals
        const checkElement = setInterval(() => {
          attempts++
          if (window.customElements?.get('realscout-office-listings')) {
            // Custom element registered - give it extra time to fully initialize
            clearInterval(checkElement)
            setTimeout(() => {
              setScriptLoaded(true)
              // Force widget re-render after a brief delay to ensure initialization
              setTimeout(() => {
                setWidgetKey(prev => prev + 1)
              }, 100)
            }, 500) // Increased delay to ensure full initialization
          } else if (attempts >= maxAttempts) {
            // Timeout - render anyway, widget will show error if script isn't ready
            clearInterval(checkElement)
            setScriptLoaded(true)
          }
        }, 100)
      }
      script.onerror = () => {
        setScriptLoaded(true) // Still render, will show error state
      }
      document.head.appendChild(script)
    }
    
    // Check if element is already visible (above fold)
    const rect = containerRef.current.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight + 200
    
    if (isVisible) {
      // Widget is above fold or close to viewport, load immediately
      loadScript()
    } else {
      // Widget is below fold, use Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !scriptLoadingStarted) {
              loadScript()
              observer.disconnect()
            }
          })
        },
        {
          rootMargin: '200px', // Start loading 200px before widget enters viewport
        }
      )
      
      observer.observe(containerRef.current)
      
      return () => observer.disconnect()
    }
  }, [])

  // Create the widget HTML - only include attributes with values
  const attributes = [
    'agent-encoded-id="QWdlbnQtMjI1MDUw"',
    `sort-order="${mappedSortOrder}"`,
    `listing-status="${listingStatus}"`,
    propertyTypes ? `property-types="${propertyTypes}"` : '',
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
      <div ref={containerRef} className="w-full min-h-[300px]">
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
