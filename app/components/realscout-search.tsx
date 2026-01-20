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
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Load script on component mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src*="realscout-web-components.umd.js"]'
    )
    
    if (existingScript) {
      // Script already exists, wait for it to load
      if (window.customElements?.get('realscout-advanced-search')) {
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
    script.id = 'realscout-advanced-search-script'
    
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
      if (window.customElements?.get('realscout-advanced-search')) {
        // Clear container
        containerRef.current!.innerHTML = ''
        
        // Create the element
        const element = document.createElement('realscout-advanced-search')
        
        // Set price attributes FIRST (most important for filtering)
        element.setAttribute('price-min', priceMin)
        element.setAttribute('price-max', priceMax)
        
        // Then set other attributes
        element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
        
        // Append to DOM
        containerRef.current!.appendChild(element)
        
        // Force re-application of price attributes after a short delay
        // This ensures the widget reads them correctly after initialization
        setTimeout(() => {
          if (element.parentElement) {
            element.setAttribute('price-min', priceMin)
            element.setAttribute('price-max', priceMax)
          }
        }, 100)
        
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
  }, [scriptLoaded, priceMin, priceMax])

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

