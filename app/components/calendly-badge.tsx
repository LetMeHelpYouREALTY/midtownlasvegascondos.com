'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE } from '@/lib/calendly-config'
import { useCalendlyAttribution } from '@/lib/hooks/use-calendly-attribution'
import { useCalendlyReady } from '@/lib/hooks/use-calendly'

export function CalendlyBadge() {
  const ready = useCalendlyReady()
  const { url, utm } = useCalendlyAttribution('site-badge')

  useEffect(() => {
    if (!ready || typeof window === 'undefined') return

    const timeoutId = setTimeout(() => {
      try {
        window.Calendly?.initBadgeWidget({
          url,
          text: CALENDLY_BADGE.text,
          color: CALENDLY_BADGE.color,
          textColor: CALENDLY_BADGE.textColor,
          branding: CALENDLY_BADGE.branding,
          utm,
        })
      } catch (error) {
        console.error('[Calendly] Badge init failed:', error)
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [ready, url, utm])

  return null
}
