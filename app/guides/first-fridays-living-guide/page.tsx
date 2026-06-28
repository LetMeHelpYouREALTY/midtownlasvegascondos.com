import Link from 'next/link'
import { Metadata } from 'next'
import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'

const CANONICAL_PATH = '/guides/first-fridays-living-guide'
const CANONICAL_URL = absoluteUrl(CANONICAL_PATH)

export const metadata: Metadata = {
  title: 'First Friday Las Vegas Living Guide | Parking & Monthly Rhythm',
  description:
    'Live near First Friday without the hassle — parking tips, best arrival times, and what Arts District residents experience monthly at 921 S Main St. Call (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'First Friday Living Guide | Midtown Las Vegas',
    description:
      'How locals experience First Friday when they live in the Arts District — parking, timing, and neighborhood tips.',
    url: CANONICAL_URL,
    type: 'article',
  },
}

const faqs = [
  {
    question: 'When is First Friday in Las Vegas?',
    answer:
      'First Friday happens on the first Friday of every month, typically 5 PM to 11 PM in the 18b Arts District. Streets fill with gallery openings, food trucks, live music, and artisan vendors — drawing 10,000+ visitors monthly.',
  },
  {
    question: 'Where do Arts District residents park for First Friday?',
    answer:
      'Residents with building parking use assigned garages. Visitors flood street parking — locals often walk from Midtown, host guests after 8 PM when crowds thin, or use nearby municipal garages. Living in the district means you rarely need to drive.',
  },
  {
    question: 'Is it loud living near First Friday?',
    answer:
      'Expect elevated energy one night per month. Buildings set back from Main Street or with good glazing handle it well. Tour your unit on a First Friday evening before buying — Dr. Jan schedules monthly tours during the event.',
  },
  {
    question: 'What is it like to live steps from First Friday?',
    answer:
      'You grab dinner on your block, meet artists at gallery openings, and walk home — no rideshare surge pricing or parking hunts. Culture becomes a monthly routine, not a special trip across town.',
  },
]

export default function FirstFridaysLivingGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/buyers-guide-midtown' },
    { name: 'First Friday Living Guide', url: CANONICAL_PATH },
  ]

  return (
    <>
      <ArticleSchema
        headline="First Friday Las Vegas Living Guide"
        description="Parking, timing, and monthly rhythm for locals living near First Friday in the Arts District."
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
            {siteConfig.personaLabel} · Neighborhood culture
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Living Near First Friday Las Vegas
          </h1>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> First Friday is the Southwest&apos;s largest monthly art walk — and
              when you live in Midtown, it&apos;s your front porch. Residents walk to gallery openings, meet
              neighbors on the street, and skip the parking chaos that frustrates visitors driving in from
              Summerlin or Henderson.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The resident advantage</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">5 PM:</strong> Walk to your favorite gallery opening before crowds peak
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">7 PM:</strong> Dinner at{' '}
                <Link href="/neighborhood/pepper-club" className="font-semibold text-slate-900 hover:underline">
                  The Pepper Club
                </Link>{' '}
                or a Main Street spot — no reservation panic
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">9 PM:</strong> Street music and food trucks without a designated driver
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">10:30 PM:</strong> Walk home; your garage spot is waiting
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Parking tips for hosts & guests</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If friends visit from the suburbs, have them arrive after 8 PM or use rideshare drop-off at{' '}
              <Link href="/neighborhood/midtown-plaza" className="font-semibold text-slate-900 hover:underline">
                Midtown Plaza
              </Link>
              . Street parking on Charleston and Main fills by 6 PM on First Friday — another reason locals
              choose walkable buildings.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Read the full{' '}
              <Link href="/neighborhood/first-fridays" className="font-semibold text-slate-900 hover:underline">
                First Friday neighborhood page
              </Link>{' '}
              for event history and gallery highlights.
            </p>
          </section>

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={faqs} title="First Friday Living FAQs" />
          </section>

          <div className="text-center">
            <CalendlyLink text="Tour Midtown on First Friday" variant="primary" />
          </div>
        </div>
      </div>
    </>
  )
}
