import Link from 'next/link'
import { BUYER_GUIDE_DISCLAIMER, OFFICIAL_MIDTOWN_SITE, REAL_ESTATE_SITE } from '@/lib/site-persona'

type SitePersonaBannerProps = {
  variant?: 'neighborhood' | 'event' | 'news'
}

export function SitePersonaBanner({ variant = 'neighborhood' }: SitePersonaBannerProps) {
  const titles = {
    neighborhood: 'Buyer\'s guide to the Midtown neighborhood',
    event: 'Event guide for future Midtown residents',
    news: 'Real estate & neighborhood news for buyers',
  } as const

  return (
    <aside className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
        {REAL_ESTATE_SITE.shortName}
      </p>
      <h2 className="text-lg font-bold text-slate-900 mb-2">{titles[variant]}</h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{BUYER_GUIDE_DISCLAIMER}</p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href={OFFICIAL_MIDTOWN_SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 hover:underline"
        >
          Official {OFFICIAL_MIDTOWN_SITE.name} site ↗
        </a>
        <Link href="/about" className="font-semibold text-slate-900 hover:underline">
          About Dr. Jan Duffy
        </Link>
        <Link href="/contact" className="font-semibold text-slate-900 hover:underline">
          Schedule a tour
        </Link>
      </div>
    </aside>
  )
}
