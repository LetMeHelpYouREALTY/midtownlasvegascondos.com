import { siteConfig } from '@/lib/site-config'

type PersonaIntroProps = {
  /** Optional override for page-specific angle */
  subtitle?: string
  className?: string
}

/** Local Urbanist positioning strip for landing pages */
export function PersonaIntro({ subtitle, className = '' }: PersonaIntroProps) {
  return (
    <div
      className={`bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-xl px-6 py-4 mb-8 ${className}`}
    >
      <p className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-1">
        {siteConfig.personaLabel} · {siteConfig.tagline}
      </p>
      <p className="text-slate-700 text-sm md:text-base leading-relaxed">
        {subtitle ?? siteConfig.personaDescription}
      </p>
    </div>
  )
}
