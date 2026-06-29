'use client'

import Script from 'next/script'
import { CALENDLY_SCRIPT_URL } from '@/lib/calendly-config'

/** Load Calendly widget.js once site-wide (popup, badge, inline). */
export function CalendlyScript() {
  return (
    <Script
      id="calendly-widget-script"
      src={CALENDLY_SCRIPT_URL}
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('calendly-script-loaded'))
        }
      }}
    />
  )
}
