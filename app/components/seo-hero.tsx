import SEOLink from './seo-link'

interface SEOHeroProps {
  title: string
  subtitle?: string
  primaryCTA?: { text: string; href: string; external?: boolean }
  secondaryCTA?: { text: string; href: string; external?: boolean }
  backgroundImage?: string
  height?: 'full' | 'large' | 'medium'
}

const heightClasses = {
  full: 'h-screen',
  large: 'h-[80vh]',
  medium: 'h-[60vh]',
}

export default function SEOHero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  height = 'full',
}: SEOHeroProps) {
  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <SEOLink
                href={primaryCTA.href}
                external={primaryCTA.external}
                variant="button"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                {primaryCTA.text}
              </SEOLink>
            )}
            {secondaryCTA && (
              <SEOLink
                href={secondaryCTA.href}
                external={secondaryCTA.external}
                variant="button"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                {secondaryCTA.text}
              </SEOLink>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

