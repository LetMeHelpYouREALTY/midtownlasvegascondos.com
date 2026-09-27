import Link from 'next/link'
import { MIDTOWN_COMMUNITY } from '@/lib/amenities/community-config'
import { AmenityMap } from './amenity-map'

type AmenityMapSectionProps = {
  title?: string
  description?: string
  variant?: 'default' | 'compact'
  className?: string
}

export function AmenityMapSection({
  title = `Life Near ${MIDTOWN_COMMUNITY.name}`,
  description = `Explore restaurants, parking, grocery, fitness, and Arts District destinations within walking distance of ${MIDTOWN_COMMUNITY.streetAddress}.`,
  variant = 'default',
  className,
}: AmenityMapSectionProps) {
  return (
    <section
      className={className ?? 'py-16 px-4 sm:px-6 lg:px-8 bg-white'}
      aria-labelledby="amenity-map-section-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <h2
              id="amenity-map-section-title"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              {title}
            </h2>
            <p className="text-lg text-slate-600">{description}</p>
          </div>
          <Link
            href="/amenities"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Full nearby amenities guide →
          </Link>
        </div>
        <AmenityMap variant={variant} />
      </div>
    </section>
  )
}
