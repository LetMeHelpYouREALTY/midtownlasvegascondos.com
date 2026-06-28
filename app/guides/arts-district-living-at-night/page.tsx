import Link from 'next/link'
import { Metadata } from 'next'
import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'

const CANONICAL_PATH = '/guides/arts-district-living-at-night'
const CANONICAL_URL = absoluteUrl(CANONICAL_PATH)

export const metadata: Metadata = {
  title: 'Arts District Las Vegas at Night | Safety & Noise Guide for Locals',
  description:
    'Honest guide to living downtown at night — Arts District vs Fremont East noise, safety tips locals use, and what to check before buying. Dr. Jan Duffy (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Arts District Living at Night | Midtown Las Vegas',
    description: 'What Las Vegas locals check before buying a downtown condo — evening tours, noise, and block-by-block differences.',
    url: CANONICAL_URL,
    type: 'article',
  },
}

const faqs = [
  {
    question: 'Is the Las Vegas Arts District safe at night?',
    answer:
      'The Arts District is an active urban neighborhood with gallery traffic, restaurant patrons, and monthly First Friday crowds. Like any downtown area, awareness matters — well-lit Main Street blocks near Midtown see steady foot traffic. Locals recommend touring buildings at night and talking to current residents before buying.',
  },
  {
    question: 'How does Fremont East noise compare to the Arts District?',
    answer:
      'The Ogden and Fremont East sit in the entertainment corridor — louder on weekends. Arts District blocks around Juhl, Soho, and Midtown skew quieter on weeknights with gallery-district character. Your building choice matters more than "downtown" as a single label.',
  },
  {
    question: 'What should I check on an evening condo tour?',
    answer:
      'Listen for street noise with windows closed and open, note lighting on your walk from parking, check lobby security hours, and visit the block after 9 PM on a Friday. Dr. Jan Duffy offers evening tours specifically for this due diligence.',
  },
  {
    question: 'Do downtown condos have secure parking at night?',
    answer:
      'Most Arts District high-rises offer gated or controlled-access garages. Confirm deeded parking, guest policies, and elevator access hours in the HOA resale package before closing.',
  },
]

export default function ArtsDistrictLivingAtNightPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/buyers-guide-midtown' },
    { name: 'Living at Night', url: CANONICAL_PATH },
  ]

  return (
    <>
      <ArticleSchema
        headline="Arts District Las Vegas Living at Night"
        description="Safety, noise, and evening due diligence for locals buying downtown Las Vegas condos."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={CANONICAL_URL}
        author={{ name: siteConfig.agent.name, url: absoluteUrl('/about') }}
      />
      <PageFAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-3">
            {siteConfig.personaLabel} · Honest local advice
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Arts District Living at Night
          </h1>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> Downtown Las Vegas isn&apos;t one experience — Fremont East
              nightlife differs from gallery blocks near Midtown. Smart local buyers tour at night, compare
              buildings in our{' '}
              <Link href="/guides/downtown-condo-buildings-compared" className="font-semibold text-slate-900 hover:underline">
                building guide
              </Link>
              , and choose the block that matches their tolerance for urban energy.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Block-by-block reality</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Arts District core</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gallery blocks around Main Street and Midtown at 921 S Main see evening restaurant traffic
                  and monthly First Friday spikes — but weeknights stay calmer than Fremont. Ideal for locals
                  who want culture without 24/7 casino energy.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fremont East corridor</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Ogden and adjacent towers sit at the entertainment gateway. Expect weekend noise and
                  foot traffic — a feature if you love nightlife, a drawback if you want quiet Tuesday evenings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Evening due diligence checklist</h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li>Walk from parking to the building after 8 PM</li>
              <li>Stand inside the unit with windows open and closed</li>
              <li>Ask residents in the lobby about weekend noise</li>
              <li>Review security cameras, fob access, and guest parking rules</li>
              <li>Visit on a First Friday if you plan to live near the festival route</li>
            </ol>
          </section>

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={faqs} title="Living Downtown at Night FAQs" />
          </section>

          <div className="text-center">
            <CalendlyLink text="Book an Evening Neighborhood Tour" variant="primary" />
          </div>
        </div>
      </div>
    </>
  )
}
