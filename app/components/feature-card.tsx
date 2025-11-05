import { ReactNode } from 'react'
import SEOLink from './seo-link'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon?: string | ReactNode
  title: string
  description: string
  link?: { href: string; text: string; external?: boolean }
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  link,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow',
        className,
      )}
    >
      {icon && (
        <div className="text-5xl mb-4 flex justify-center">
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-slate-600 text-center mb-4">{description}</p>
      {link && (
        <div className="text-center">
          <SEOLink href={link.href} external={link.external} variant="default">
            {link.text} →
          </SEOLink>
        </div>
      )}
    </div>
  )
}

