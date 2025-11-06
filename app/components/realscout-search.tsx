/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useRef, useState } from 'react'

export function RealScoutSearch() {
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
            const element = document.createElement('realscout-advanced-search')
            element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw')
            
            containerRef.current.innerHTML = ''
            containerRef.current.appendChild(element)
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
  }, [])

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

