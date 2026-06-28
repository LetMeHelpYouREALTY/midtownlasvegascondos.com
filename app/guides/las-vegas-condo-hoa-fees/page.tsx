import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { RealScoutSection } from '@/app/components/realscout-section'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'

const CANONICAL_URL = 'https://www.midtownlasvegascondos.com/guides/las-vegas-condo-hoa-fees'

export const metadata: Metadata = {
  title: 'Las Vegas Condo HOA Fees Guide | Arts District & Midtown',
  description:
    'What do HOA fees cost for Las Vegas condos? Typical Arts District and Midtown HOA ranges, what fees cover, and how to evaluate HOA health before you buy. Call (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Las Vegas Condo HOA Fees Guide | Midtown Arts District',
    description:
      'Typical HOA fees for Las Vegas condos, including Arts District high-rises and Midtown communities — what you pay and what to ask before buying.',
    url: CANONICAL_URL,
    type: 'article',
  },
}

const faqs = [
  {
    question: 'What are typical HOA fees for Las Vegas condos?',
    answer:
      'Las Vegas condo HOA fees vary widely by building type. Low-rise and mid-rise communities often run $50–$150 per month. Downtown and Arts District high-rise condos commonly range from $400–$800+ per month because fees cover elevators, pools, fitness centers, security, and reserve funds. Always request the current HOA disclosure before making an offer.',
  },
  {
    question: 'What do HOA fees typically cover in Las Vegas?',
    answer:
      'HOA fees usually cover exterior maintenance, landscaping, common-area insurance, amenities (pool, gym, lobby), trash, water for common areas, and contributions to reserve funds for future repairs. High-rise buildings add elevator maintenance, concierge, and structural reserve requirements. Review the HOA budget and reserve study — not just the monthly number.',
  },
  {
    question: 'Are HOA fees in the Arts District higher than other Las Vegas areas?',
    answer:
      'Arts District and downtown high-rise HOA fees are generally higher than suburban low-rise condos because buildings include resort-style amenities, 24/7 security, and expensive shared systems like elevators and rooftop decks. The tradeoff is walkable urban living, cultural amenities, and strong rental demand near downtown employers and entertainment.',
  },
  {
    question: 'How do I know if an HOA is well-managed before buying?',
    answer:
      'Request the HOA budget, reserve study, meeting minutes, and any pending special assessments. Look for healthy reserve funding (25%+ of annual budget is a common benchmark), low delinquency rates, and transparent communication. Dr. Jan Duffy can help you review HOA documents for Midtown and Arts District properties before you commit.',
  },
  {
    question: 'Can HOA fees increase after I buy?',
    answer:
      'Yes. HOA boards can raise regular assessments and levy special assessments for major repairs. Reddit buyers in Las Vegas communities report increases when reserves are underfunded or insurance costs rise. Review 3–5 years of fee history and reserve study projections to understand likely future costs.',
  },
]

export default function LasVegasCondoHoaFeesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/buyers-guide-midtown' },
    { name: 'Las Vegas Condo HOA Fees', url: '/guides/las-vegas-condo-hoa-fees' },
  ]

  return (
    <>
      <ArticleSchema
        headline="Las Vegas Condo HOA Fees: What Buyers Should Know"
        description="Guide to typical HOA fees for Las Vegas condos, including Arts District and Midtown, with what fees cover and how to evaluate HOA health."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={CANONICAL_URL}
        author={{ name: 'Dr. Jan Duffy', url: 'https://www.midtownlasvegascondos.com/about' }}
      />
      <PageFAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Las Vegas Condo HOA Fees: What You&apos;re Really Paying For
          </h1>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> Las Vegas condo HOA fees range from about $50–$150/month
              in low-rise communities to $400–$800+ in downtown and Arts District high-rises. Fees
              cover shared maintenance, insurance, amenities, and reserve funds — and they can rise if
              reserves are underfunded. Always review the HOA budget and reserve study before you buy
              in Midtown or the Arts District.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How much are HOA fees for Las Vegas condos?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              HOA fees depend on building type, amenities, and how well the association funds reserves.
              Buyers relocating to Las Vegas — especially those comparing{' '}
              <Link href="/guides/walkable-arts-district-living" className="text-slate-900 font-semibold hover:underline">
                walkable Arts District living
              </Link>{' '}
              to suburban homes — should budget for HOA as part of total monthly cost, not just the mortgage.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-slate-200 text-left">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">Building type</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">Typical monthly HOA</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">Common inclusions</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Low-rise / garden-style condos</td>
                    <td className="border border-slate-200 px-4 py-3">$50 – $150</td>
                    <td className="border border-slate-200 px-4 py-3">Landscaping, exterior paint, pool, basic insurance</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Mid-rise downtown condos</td>
                    <td className="border border-slate-200 px-4 py-3">$300 – $600</td>
                    <td className="border border-slate-200 px-4 py-3">Fitness center, pool, parking, elevator, security</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Arts District high-rises (e.g. Juhl area)</td>
                    <td className="border border-slate-200 px-4 py-3">$600 – $800+</td>
                    <td className="border border-slate-200 px-4 py-3">Resort amenities, rooftop decks, concierge, large reserves</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Condo-hotel (English Residences)</td>
                    <td className="border border-slate-200 px-4 py-3">Varies by unit</td>
                    <td className="border border-slate-200 px-4 py-3">Hotel operations, housekeeping pool, management fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What services do HOA fees typically cover?
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
              <li><strong>Exterior &amp; common areas:</strong> Roofing, paint, hallways, landscaping, lighting</li>
              <li><strong>Amenities:</strong> Pool, spa, fitness center, clubroom, rooftop decks</li>
              <li><strong>Insurance:</strong> Master policy for shared structure and liability</li>
              <li><strong>Utilities:</strong> Water, trash, and sometimes partial electric for common areas</li>
              <li><strong>Reserves:</strong> Savings for future roof, elevator, or facade projects</li>
              <li><strong>Management:</strong> HOA management company fees and compliance</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              A lower HOA is not always better — underfunded reserves often lead to special assessments
              that can cost thousands. This is a common concern among Las Vegas buyers on forums like{' '}
              <a
                href="https://www.reddit.com/r/vegaslocals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-semibold hover:underline"
              >
                r/vegaslocals
              </a>
              .
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How do Midtown and Arts District HOA fees compare?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Midtown Las Vegas at 921 S Main Street sits in the Arts District — a walkable urban core
              with a Walk Score around 86. High-rise inventory near downtown often carries higher HOA
              fees than suburban Vegas, but buyers gain gallery access,{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>{' '}
              events, and proximity to downtown employers without a long commute.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Explore current{' '}
              <Link href="/midtown-real-estate" className="text-slate-900 font-semibold hover:underline">
                Midtown real estate listings
              </Link>{' '}
              or read our{' '}
              <Link href="/buyers-guide-midtown" className="text-slate-900 font-semibold hover:underline">
                buyer&apos;s guide
              </Link>{' '}
              for the full purchasing process.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Is buying a Las Vegas condo worth it when HOA fees are high?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For many buyers, yes — when total monthly cost (mortgage + HOA + taxes + insurance) still
              beats rent and the location matches lifestyle goals. Remote workers relocating for
              walkable daily life often find Arts District condos justify higher HOA through reduced
              car dependence and stronger appreciation in cultural urban cores.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dr. Jan Duffy specializes in Midtown and Arts District properties and can walk you through
              HOA documents, comparable sales, and investment scenarios. Call{' '}
              <a href="tel:+17025001980" className="text-slate-900 font-semibold hover:underline">
                (702) 500-1980
              </a>{' '}
              or email{' '}
              <a href="mailto:DrJanSells@MidtownVegasCondos.com" className="text-slate-900 font-semibold hover:underline">
                DrJanSells@MidtownVegasCondos.com
              </a>
              .
            </p>
          </section>

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={faqs} title="Las Vegas Condo HOA FAQs" />
          </section>

          <div className="text-center">
            <CalendlyLink text="Schedule an HOA Review Consultation" variant="primary" />
          </div>
        </div>

        <RealScoutSection
          listingsTitle="Las Vegas Arts District Condos"
          listingsDescription="Compare HOA and pricing across Midtown condo listings with Dr. Jan Duffy."
          propertyTypes="Condo"
          className="bg-white"
        />
      </div>
    </>
  )
}
