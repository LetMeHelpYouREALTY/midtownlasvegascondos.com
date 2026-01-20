'use client'

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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/drjanduffy',
      })
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
