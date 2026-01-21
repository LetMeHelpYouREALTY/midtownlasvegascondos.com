'use client'

import React, { useEffect, useState, useRef } from 'react'

interface RealScoutSearchProps {
  priceMin?: string
  priceMax?: string
}

export function RealScoutSearch({
  priceMin = '450000',
  priceMax = '1000000',
}: RealScoutSearchProps = {} as RealScoutSearchProps) {
  const [isClient, setIsClient] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  // Load widget script - use Intersection Observer if below fold, otherwise load immediately
  useEffect(() => {
    setIsClient(true)
    
    if (!containerRef.current) return
    
    let scriptLoaded = false
    
    // Function to load RealScout script
    const loadScript = () => {
      if (typeof window === 'undefined' || scriptLoaded) return
      scriptLoaded = true
      
      // Check if script is already loaded
      if (window.customElements?.get('realscout-advanced-search')) {
        setScriptLoaded(true)
        return
      }
      
      // Check if script tag already exists
      const existingScript = document.getElementById('realscout-web-components-script')
      if (existingScript) {
        // Script is loading, poll for custom element
        const interval = setInterval(() => {
          if (window.customElements?.get('realscout-advanced-search')) {
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
        // Wait for custom element to be registered
        const checkElement = setInterval(() => {
          if (window.customElements?.get('realscout-advanced-search')) {
            setScriptLoaded(true)
            clearInterval(checkElement)
          }
        }, 50)
        
        // Timeout after 3 seconds
        setTimeout(() => {
          clearInterval(checkElement)
          setScriptLoaded(true)
        }, 3000)
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
            if (entry.isIntersecting && !scriptLoaded) {
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

  // Create the widget HTML
  const widgetHtml = `<realscout-advanced-search 
    agent-encoded-id="QWdlbnQtMjI1MDUw"
    price-min="${priceMin}"
    price-max="${priceMax}"
  ></realscout-advanced-search>`

  return (
    <div ref={containerRef} className="w-full min-h-[200px]">
      {isClient && scriptLoaded ? (
        <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />
      ) : (
        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-600">Loading search...</p>
        </div>
      )}
    </div>
  )
}
