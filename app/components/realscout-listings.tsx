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

  // Use Intersection Observer to load widget only when it's about to be visible
  useEffect(() => {
    setIsClient(true)
    
    if (!containerRef.current) return
    
    // Use Intersection Observer to load widget when it's about to enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Widget is about to be visible, check for script
            const checkScript = () => {
              if (typeof window !== 'undefined' && window.customElements) {
                if (window.customElements.get('realscout-office-listings')) {
                  setScriptLoaded(true)
                  observer.disconnect()
                } else {
                  // Poll for custom element definition
                  const interval = setInterval(() => {
                    if (window.customElements.get('realscout-office-listings')) {
                      setScriptLoaded(true)
                      clearInterval(interval)
                      observer.disconnect()
                    }
                  }, 100)
                  
                  // Timeout after 5 seconds
                  setTimeout(() => {
                    clearInterval(interval)
                    setScriptLoaded(true)
                    observer.disconnect()
                  }, 5000)
                }
              }
            }
            
            checkScript()
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
