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
  const widgetInitializedRef = useRef(false)

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
      if (window.customElements?.get('realscout-advanced-search')) {
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
        if (window.customElements?.get('realscout-advanced-search')) {
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
    script.id = 'realscout-advanced-search-script'
    
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
    
    // Reset state when dependencies change
    widgetInitializedRef.current = false
    setIsLoaded(false)

    let checkInterval: NodeJS.Timeout | null = null
    let isMounted = true

    // Wait a bit for custom element to be registered after script loads
    const initializeWidget = () => {
      if (!isMounted || !containerRef.current) return false
      
      try {
        if (window.customElements?.get('realscout-advanced-search') && !widgetInitializedRef.current) {
          widgetInitializedRef.current = true
          
          // Clear container safely
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild)
          }
          
          // Create the element
          const element = document.createElement('realscout-advanced-search')
          
          // Set attributes in the correct order
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
          element.setAttribute('price-min', priceMin)
          element.setAttribute('price-max', priceMax)
          
          // Append to DOM
          containerRef.current.appendChild(element)
          
          if (isMounted) {
            setIsLoaded(true)
          }
          
          return true
        }
      } catch (error) {
        console.error('Error initializing RealScout widget:', error)
        widgetInitializedRef.current = false
        if (isMounted) {
          setIsLoaded(false)
        }
        return false
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

