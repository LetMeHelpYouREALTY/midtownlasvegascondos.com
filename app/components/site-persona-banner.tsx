import Link from 'next/link'
import {
  BUYER_GUIDE_DISCLAIMER,
  NAV_LABELS,
  OFFICIAL_MIDTOWN_SITE,
  REAL_ESTATE_SITE,
} from '@/lib/site-persona'

type SitePersonaBannerProps = {
  variant?: 'neighborhood' | 'event' | 'news'
}

export function SitePersonaBanner({ variant = 'neighborhood' }: SitePersonaBannerProps) {
  const titles = {
    neighborhood: 'Neighborhood intel for buyers — not the official Midtown site',
    event: 'What this event means if you live (or buy) nearby',
    news: 'Market context for Midtown buyers — curated by your REALTOR®',
  } as const

  const angles = {
    neighborhood:
      'I summarize walkability, amenities, and resale context so you can decide if Midtown fits your budget and lifestyle.',
    event:
      'Festivals and art walks are part of the value proposition when you own here. Confirm schedules on the official calendar — I focus on how proximity affects your daily life and property decision.',
    news:
      'Development and openings change comps, HOA outlook, and walk scores. I track what buyers should know — official announcements stay on midtownvegas.com.',
  } as const

  return (
    <aside className="mb-10 rounded-xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-900 mb-1">
        {REAL_ESTATE_SITE.subtagline}
      </p>
      <p className="text-xs text-amber-800/80 mb-3">{REAL_ESTATE_SITE.tagline}</p>
      <h2 className="text-lg font-bold text-slate-900 mb-2">{titles[variant]}</h2>
      <p className="text-sm text-slate-700 leading-relaxed mb-2">{angles[variant]}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{BUYER_GUIDE_DISCLAIMER}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href={OFFICIAL_MIDTOWN_SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 hover:underline"
        >
          {NAV_LABELS.officialMidtown}
        </a>
        <Link href="/about" className="font-semibold text-slate-900 hover:underline">
          {NAV_LABELS.aboutAgent}
        </Link>
        <Link href="/contact" className="font-semibold text-slate-900 hover:underline">
          Schedule a private tour
        </Link>
        <a
          href={REAL_ESTATE_SITE.realScoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 hover:underline"
        >
          {NAV_LABELS.searchProperties} ↗
        </a>
      </div>
    </aside>
  )
}
