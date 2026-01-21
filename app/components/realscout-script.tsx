'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export function RealScoutScript() {
  useEffect(() => {
    // Inject styles for RealScout widgets
    if (typeof document !== 'undefined') {
      const styleId = 'realscout-widget-styles'
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
          realscout-office-listings {
            --rs-listing-divider-color: #0e64c8;
            width: 100%;
          }
        `
        document.head.appendChild(style)
      }
    }
  }, [])

  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="afterInteractive"
      id="realscout-web-components-script"
    />
  )
}
