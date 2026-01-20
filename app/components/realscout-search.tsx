/// <reference path="../../global.d.ts" />

import React from 'react'

interface RealScoutSearchProps {
  priceMin?: string
  priceMax?: string
}

export function RealScoutSearch({
  priceMin = '450000',
  priceMax = '1000000',
}: RealScoutSearchProps = {} as RealScoutSearchProps) {
  // Build the HTML string exactly as RealScout expects
  const widgetHtml = `<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" price-min="${priceMin}" price-max="${priceMax}"></realscout-advanced-search>`

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: widgetHtml }}
    />
  )
}

