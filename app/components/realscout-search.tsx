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
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    // Check if custom element is already registered
    const checkAndRender = () => {
      if (window.customElements?.get('realscout-advanced-search')) {
        // Clear container
        containerRef.current!.innerHTML = ''
        
        // Create and configure the element
        const element = document.createElement('realscout-advanced-search')
        element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
        element.setAttribute('price-min', priceMin)
        element.setAttribute('price-max', priceMax)
        
        containerRef.current!.appendChild(element)
        setIsLoaded(true)
        return true
      }
      return false
    }

    // Try immediately
    if (checkAndRender()) {
      return
    }

    // Wait for script to load - check every 100ms for up to 10 seconds
    let attempts = 0
    const maxAttempts = 100
    
    const checkInterval = setInterval(() => {
      attempts++
      if (checkAndRender()) {
        clearInterval(checkInterval)
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval)
        console.warn('RealScout script did not load within timeout')
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
    }
  }, [priceMin, priceMax])

  return (
    <div ref={containerRef} className="w-full">
      {!isLoaded && (
        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-600">Loading search...</p>
        </div>
      )}
    </div>
  )
}

