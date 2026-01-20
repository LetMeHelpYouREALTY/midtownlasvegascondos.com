/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RealScoutSearchProps {
  priceMin?: string
  priceMax?: string
}

export function RealScoutSearch({
  priceMin = '450000',
  priceMax = '1000000',
}: RealScoutSearchProps = {} as RealScoutSearchProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || hasError) return

    try {
      if (!containerRef.current) return

      // Wait a bit for the script to load, then render
      const timeoutId = setTimeout(() => {
        try {
          if (containerRef.current && window.customElements?.get('realscout-advanced-search')) {
            // Clear container first
            containerRef.current.innerHTML = ''
            
            // Create element and set ALL attributes BEFORE appending to DOM
            // This ensures RealScout widget reads our attributes during initialization
            const element = document.createElement('realscout-advanced-search')
            
            // Set agent ID first (required)
            element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
            
            // Set price attributes to ensure they're not overridden
            element.setAttribute('price-min', priceMin)
            element.setAttribute('price-max', priceMax)
            
            // Append to DOM after all attributes are set
            containerRef.current.appendChild(element)
            
            // Force attribute update after a brief delay to ensure widget reads them
            setTimeout(() => {
              if (element && containerRef.current?.contains(element)) {
                element.setAttribute('price-min', priceMin)
                element.setAttribute('price-max', priceMax)
              }
            }, 100)
          }
        } catch (error) {
          setHasError(true)
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId)
      }
    } catch (error) {
      setHasError(true)
    }
  }, [priceMin, priceMax])

  return (
    <div className="w-full">
      <div ref={containerRef} className="w-full">
        {!hasError && (
          <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Loading search...</p>
          </div>
        )}
      </div>
    </div>
  )
}

