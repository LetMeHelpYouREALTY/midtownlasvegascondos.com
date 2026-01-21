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
  const containerRef = useRef<HTMLDivElement>(null)
  const mappedSortOrder = mapSortOrder(sortOrder)

  // Use Intersection Observer to load widget and script only when it's about to be visible
  useEffect(() => {
    setIsClient(true)
    
    if (!containerRef.current) return
    
    let scriptLoaded = false
    
    // Use Intersection Observer to load widget when it's about to enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scriptLoaded) {
            scriptLoaded = true
            
            // Dynamically load RealScout script only when widget is about to be visible
            const loadScript = () => {
              if (typeof window === 'undefined') return
              
              // Check if script is already loaded
              if (window.customElements?.get('realscout-office-listings')) {
                setScriptLoaded(true)
                return
              }
              
              // Check if script tag already exists
              const existingScript = document.getElementById('realscout-web-components-script')
              if (existingScript) {
                // Script is loading, poll for custom element
                const interval = setInterval(() => {
                  if (window.customElements?.get('realscout-office-listings')) {
                    setScriptLoaded(true)
                    clearInterval(interval)
                  }
                }, 100)
                
                setTimeout(() => {
                  clearInterval(interval)
                  setScriptLoaded(true)
                }, 5000)
                return
              }
              
              // Load script dynamically
              const script = document.createElement('script')
              script.id = 'realscout-web-components-script'
              script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
              script.async = true
              script.onload = () => {
                setScriptLoaded(true)
              }
              script.onerror = () => {
                setScriptLoaded(true) // Still render, will show error state
              }
              document.head.appendChild(script)
            }
            
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
