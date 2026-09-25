'use client'

import React, { useEffect, useState, useRef } from 'react'
import { loadRealScoutWebComponents, whenElementInView } from '@/lib/load-realscout-script'

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

  useEffect(() => {
    setIsClient(true)
    const node = containerRef.current
    if (!node) return

    let cancelled = false
    const stop = whenElementInView(node, () => {
      void loadRealScoutWebComponents('realscout-advanced-search').then(() => {
        if (!cancelled) setScriptLoaded(true)
      })
    })

    return () => {
      cancelled = true
      stop()
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
