'use client'

import { useEffect, useRef } from 'react'
import {
  CALENDLY_CONSULTATION_URL,
  CALENDLY_INLINE_DEFAULTS,
} from '@/lib/calendly-config'
import { useCalendlyReady } from '@/lib/hooks/use-calendly'

type CalendlyInlineWidgetProps = {
  url?: string
  height?: string
  minWidth?: string
  className?: string
  title?: string
}

export function CalendlyInlineWidget({
  url = CALENDLY_CONSULTATION_URL,
  height = CALENDLY_INLINE_DEFAULTS.height,
  minWidth = CALENDLY_INLINE_DEFAULTS.minWidth,
  className = '',
  title = 'Schedule an in-person real estate consultation with Dr. Jan Duffy',
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)
  const ready = useCalendlyReady()

  useEffect(() => {
    if (!ready || !containerRef.current || initializedRef.current) return

    const parent = containerRef.current
    parent.innerHTML = ''

    try {
      window.Calendly?.initInlineWidget({
        url,
        parentElement: parent,
      })
      initializedRef.current = true
    } catch (error) {
      console.error('[Calendly] Inline widget init failed:', error)
    }
  }, [ready, url])

  return (
    <div
      className={`calendly-inline-widget rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm relative ${className}`}
      style={{ minWidth, height }}
      aria-label={title}
    >
      <div ref={containerRef} className="h-full w-full" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-white text-slate-500 text-sm p-6">
          Loading scheduling calendar…
        </div>
      )}
    </div>
  )
}
