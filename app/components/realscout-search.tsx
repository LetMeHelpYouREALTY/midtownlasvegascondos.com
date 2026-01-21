'use client'

import React, { useEffect, useState } from 'react'

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

  // Ensure we only render the widget on the client
  useEffect(() => {
    setIsClient(true)
    
    // Wait for RealScout script to load (custom element definition)
    const checkScript = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (window.customElements.get('realscout-advanced-search')) {
          setScriptLoaded(true)
        } else {
          // Poll for custom element definition (script loads lazily)
          const interval = setInterval(() => {
            if (window.customElements.get('realscout-advanced-search')) {
              setScriptLoaded(true)
              clearInterval(interval)
            }
          }, 100)
          
          // Timeout after 5 seconds
          setTimeout(() => {
            clearInterval(interval)
            // Still render even if script hasn't loaded (will show error state)
            setScriptLoaded(true)
          }, 5000)
        }
      }
    }
    
    checkScript()
  }, [])

  // Create the widget HTML
  const widgetHtml = `<realscout-advanced-search 
    agent-encoded-id="QWdlbnQtMjI1MDUw"
    price-min="${priceMin}"
    price-max="${priceMax}"
  ></realscout-advanced-search>`

  return (
    <div className="w-full min-h-[200px]">
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
