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
                if (window.customElements.get('realscout-advanced-search')) {
                  setScriptLoaded(true)
                  observer.disconnect()
                } else {
                  // Poll for custom element definition
                  const interval = setInterval(() => {
                    if (window.customElements.get('realscout-advanced-search')) {
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
