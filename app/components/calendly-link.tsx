'use client'

import { CALENDLY_CONSULTATION_URL } from '@/lib/calendly-config'
import { openCalendlyPopup } from '@/lib/hooks/use-calendly'

type CalendlyLinkProps = {
  text?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'link'
  url?: string
}

export function CalendlyLink({
  text = 'Schedule time with me',
  className = '',
  variant = 'primary',
  url = CALENDLY_CONSULTATION_URL,
}: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    openCalendlyPopup(url)
    return false
  }

  const baseClasses =
    variant === 'primary'
      ? 'inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors cursor-pointer'
      : variant === 'secondary'
        ? 'inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer'
        : 'text-slate-900 font-semibold hover:underline cursor-pointer'

  return (
    <a href={url} onClick={handleClick} className={`${baseClasses} ${className}`}>
      {text}
    </a>
  )
}
