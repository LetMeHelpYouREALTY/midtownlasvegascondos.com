/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useState } from 'react'

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
  priceMin = '250000',
  priceMax = '1500000',
  sortOrder = 'PRICE_LOW',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,CONDO',
  limit = '12',
}: RealScoutListingsProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.customElements) {
      setIsReady(true)
      return
    }

    let attempts = 0
    const maxAttempts = 50 // 5 seconds max

    const checkElement = () => {
      attempts++
      try {
        if (window.customElements?.get('realscout-office-listings')) {
          setIsReady(true)
        } else if (attempts < maxAttempts) {
          setTimeout(checkElement, 100)
        } else {
          setIsReady(true) // Timeout - try to render anyway
        }
      } catch (error) {
        setIsReady(true)
      }
    }

    checkElement()
  }, [])

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
      {isReady ? (
        React.createElement('realscout-office-listings', {
          'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
          'sort-order': sortOrder,
          'listing-status': listingStatus,
          'property-types': propertyTypes,
          'price-min': priceMin,
          'price-max': priceMax,
          'limit': limit,
        })
      ) : (
        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-600">Loading properties...</p>
        </div>
      )}
    </div>
  )
}

