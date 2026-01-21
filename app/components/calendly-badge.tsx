'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function CalendlyBadge() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (scriptLoaded && typeof window !== 'undefined') {
      // Small delay to ensure Calendly is fully initialized
      const timeoutId = setTimeout(() => {
        try {
          if ((window as any).Calendly) {
            ;(window as any).Calendly.initBadgeWidget({
              url: 'https://calendly.com/drjanduffy?hide_gdpr_banner=1',
              text: '',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true,
            })
          }
        } catch (error) {
          console.error('Error initializing Calendly badge:', error)
        }
      }, 100)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [scriptLoaded])

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      type="text/javascript"
      strategy="afterInteractive"
      id="calendly-widget-script"
      onLoad={() => {
        // Defer state update to avoid hydration issues
        setTimeout(() => {
          setScriptLoaded(true)
        }, 0)
      }}
    />
  )
}
