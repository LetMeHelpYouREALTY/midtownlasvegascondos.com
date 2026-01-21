'use client'

import { useEffect, useState } from 'react'

interface CalendlyLinkProps {
  text?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'link'
}

export function CalendlyLink({
  text = 'Schedule Your Walk-to-Everything Tour',
  className = '',
  variant = 'primary',
}: CalendlyLinkProps) {
  const [calendlyReady, setCalendlyReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if Calendly is already loaded
    if ((window as any).Calendly) {
      setCalendlyReady(true)
      return
    }

    // Wait for Calendly to load
    const checkCalendly = setInterval(() => {
      if ((window as any).Calendly) {
        setCalendlyReady(true)
        clearInterval(checkCalendly)
      }
    }, 100)

    // Timeout after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkCalendly)
    }, 5000)

    return () => {
      clearInterval(checkCalendly)
      clearTimeout(timeout)
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (typeof window === 'undefined') return false

    try {
      if ((window as any).Calendly) {
        ;(window as any).Calendly.initPopupWidget({
          url: 'https://calendly.com/drjanduffy',
        })
      } else {
        // Fallback: open Calendly in new tab if widget not available
        window.open('https://calendly.com/drjanduffy', '_blank')
      }
    } catch (error) {
      console.error('Error opening Calendly:', error)
      // Fallback: open Calendly in new tab
      window.open('https://calendly.com/drjanduffy', '_blank')
    }
    
    return false
  }

  const baseClasses =
    variant === 'primary'
      ? 'inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors'
      : variant === 'secondary'
        ? 'inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors'
        : 'text-slate-900 font-semibold hover:underline'

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </a>
  )
}
