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
  const elementRef = useRef<HTMLElement | null>(null)
  const mountedRef = useRef(true)

  // Wait for RealScout script to load (script is loaded per-page via RealScoutScript component)
  useEffect(() => {
    if (typeof window === 'undefined') return

    mountedRef.current = true
    let checkTimeout: NodeJS.Timeout | null = null

    // Check if custom element is already registered
    if (window.customElements?.get('realscout-advanced-search')) {
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
    const maxAttempts = 50 // 5 seconds max
    const checkCustomElement = () => {
      if (!mountedRef.current) {
        if (checkTimeout) clearTimeout(checkTimeout)
        return
      }
      if (window.customElements?.get('realscout-advanced-search')) {
        // Defer state update
        setTimeout(() => {
          if (mountedRef.current) {
            setScriptLoaded(true)
          }
        }, 0)
      } else {
        attempts++
        if (attempts < maxAttempts) {
          // Retry after a short delay
          checkTimeout = setTimeout(checkCustomElement, 100)
        } else {
          console.warn('RealScout custom element did not register within timeout')
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
    
    // If widget is already initialized and element is still in DOM, don't re-initialize
    if (widgetInitializedRef.current && elementRef.current && elementRef.current.isConnected) {
      console.log('RealScout search widget already initialized, skipping re-initialization')
      return
    }
    
    mountedRef.current = true
    
    // Only reset if not already initialized
    if (!widgetInitializedRef.current) {
      widgetInitializedRef.current = false
      // Defer state update to next tick to avoid React warnings
      setTimeout(() => {
        if (mountedRef.current) {
          setIsLoaded(false)
        }
      }, 0)
    }
    
    // Only clear existing element if it's not connected or we're re-initializing
    if (elementRef.current && elementRef.current.parentNode && !elementRef.current.isConnected) {
      try {
        elementRef.current.parentNode.removeChild(elementRef.current)
      } catch (e) {
        // Element may have already been removed
      }
      elementRef.current = null
    } else if (elementRef.current && !elementRef.current.isConnected) {
      elementRef.current = null
    }

    let checkInterval: NodeJS.Timeout | null = null

    // Wait a bit for custom element to be registered after script loads
    const initializeWidget = () => {
      if (!mountedRef.current || !containerRef.current) return false
      
      try {
        if (window.customElements?.get('realscout-advanced-search') && !widgetInitializedRef.current) {
          widgetInitializedRef.current = true
          
          // Clear container safely
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild)
          }
          
          // Create the element
          const element = document.createElement('realscout-advanced-search')
          elementRef.current = element
          
          // Set attributes in the correct order
          element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
          element.setAttribute('price-min', priceMin)
          element.setAttribute('price-max', priceMax)
          
          // Append to DOM
          containerRef.current.appendChild(element)
          
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
      if (elementRef.current && elementRef.current.parentNode) {
        try {
          elementRef.current.parentNode.removeChild(elementRef.current)
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
      elementRef.current = null
    }
  }, [scriptLoaded]) // Only depend on scriptLoaded - don't re-initialize when props change

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

