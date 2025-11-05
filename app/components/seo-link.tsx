import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SEOLinkProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
  variant?: 'default' | 'underline' | 'button'
}

const variantClasses = {
  default: 'text-slate-900 font-semibold hover:text-slate-700 transition-colors',
  underline:
    'text-slate-900 font-semibold hover:underline transition-all',
  button:
    'inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors',
}

export default function SEOLink({
  href,
  children,
  external = false,
  className,
  variant = 'underline',
}: SEOLinkProps) {
  const baseClasses = variantClasses[variant]
  const combinedClasses = cn(baseClasses, className)

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  )
}

