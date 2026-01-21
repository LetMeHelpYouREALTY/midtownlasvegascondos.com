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

  // Ensure we only render the widget on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create the widget HTML
  const widgetHtml = `<realscout-advanced-search 
    agent-encoded-id="QWdlbnQtMjI1MDUw"
    price-min="${priceMin}"
    price-max="${priceMax}"
  ></realscout-advanced-search>`

  return (
    <div className="w-full min-h-[200px]">
      {isClient ? (
        <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />
      ) : (
        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-600">Loading search...</p>
        </div>
      )}
    </div>
  )
}
