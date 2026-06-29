'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initBadgeWidget: (options: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

export function useCalendlyReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.Calendly) {
      setReady(true)
      return
    }

    const onReady = () => setReady(true)
    window.addEventListener('calendly-script-loaded', onReady)

    const interval = setInterval(() => {
      if (window.Calendly) {
        setReady(true)
        clearInterval(interval)
      }
    }, 100)

    const timeout = setTimeout(() => clearInterval(interval), 8000)

    return () => {
      window.removeEventListener('calendly-script-loaded', onReady)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return ready
}

export function openCalendlyPopup(url: string) {
  if (typeof window === 'undefined') return

  try {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
