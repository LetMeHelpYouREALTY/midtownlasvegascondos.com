import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { PageFAQ } from '../components/page-faq'
import { PageFAQSchema } from '../components/page-faq-schema'
import { SectionFigure } from '@/app/components/section-figure'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { buildListingConsultationUrl } from '@/lib/calendly-utm'

const SELLER_FAQS = [
  {
    question: 'Which Midtown Las Vegas buildings does Dr. Jan Duffy list?',
    answer:
      'Dr. Jan Duffy focuses seller representation on condo and condo-hotel inventory at The English Residences, The English Hotel, and walkable units tied to Midtown Plaza at 921 S Main Street in Midtown Las Vegas — not general Arts District resales outside that core.',
  },
  {
    question: 'How does selling an English Residences condo-hotel unit work?',
    answer:
      'The English Residences are individually owned condo-hotel units within The English Hotel at 921 S Main St. Dr. Jan Duffy reviews HOA documents, hotel-management rules, and how personal use versus rental placement affects your marketing plan before listing.',
  },
  {
    question: 'What should I prepare before a Midtown listing consultation?',
    answer:
      'Gather your latest HOA statement, any special-assessment notices, recent utility bills, and renovation receipts. Dr. Jan Duffy uses that packet plus current Midtown Las Vegas comps to shape pricing and prep advice for English Residences, English Hotel, and Midtown Plaza-area units.',
  },
  {
    question: 'How do I request a home valuation for my Midtown condo?',
    answer:
      `Book a listing consultation with Dr. Jan Duffy online or call ${REAL_ESTATE_SITE.phone}. The consult covers pricing strategy, timing, and marketing for Midtown Las Vegas condos — not a automated Zestimate.`,
  },
] as const

export const metadata: Metadata = {
  title: 'Sell Your Midtown Las Vegas Condo | Dr. Jan Duffy',
  description:
    'Sell a condo or condo-hotel unit at English Residences, English Hotel, or Midtown Plaza. Listing strategy and home valuation consult with Dr. Jan Duffy, REALTOR®.',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/sellers-guide-midtown',
  },
}

const valuationHeroUrl = buildListingConsultationUrl('seller-hero-valuation')
const valuationFooterUrl = buildListingConsultationUrl('seller-footer-valuation')

export default function SellersGuideMidtownPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: "Seller's Guide", url: '/sellers-guide-midtown' },
  ]

  return (
    <>
      <PageFAQSchema faqs={[...SELLER_FAQS]} />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Sell Your Midtown Las Vegas Condo
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            Dr. Jan Duffy lists condo and condo-hotel units at The English Residences, The English
            Hotel, and Midtown Plaza — the walkable core at 921 S Main Street in Midtown Las Vegas.
            This seller guide covers what is different about each building and how to start with a
            home valuation consult.
          </p>

          <div className="bg-slate-900 text-white rounded-xl p-8 mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold mb-3">Request a home valuation consult</h2>
            <p className="text-slate-200 mb-6">
              Dr. Jan Duffy reviews your unit type, HOA packet, and Midtown Las Vegas comps before
              recommending list price and prep steps.
            </p>
            <a
              href={valuationHeroUrl}
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book listing consultation with Dr. Jan Duffy
            </a>
          </div>

          <SectionFigure image="buyerPlanningDesk" priority />

          <section className="mb-16 mt-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Buildings Dr. Jan Duffy lists in Midtown Las Vegas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">The English Residences</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Individually owned condo-hotel residences inside The English Hotel at 921 S Main
                  St. Sellers need a clear plan for hotel-management rules, owner usage, and how the
                  unit is shown alongside active guest rooms.
                </p>
                <Link
                  href="/neighborhood/english-residences"
                  className="text-slate-900 font-semibold hover:underline"
                >
                  English Residences overview →
                </Link>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">The English Hotel</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Boutique hotel at 921 S Main St anchors Midtown Las Vegas. Ownership and resale
                  questions often tie back to English Residences inventory and on-site amenities such
                  as KJ&apos;s Restaurant — Dr. Jan Duffy coordinates marketing with those realities.
                </p>
                <Link
                  href="/neighborhood/english-hotel"
                  className="text-slate-900 font-semibold hover:underline"
                >
                  English Hotel overview →
                </Link>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Midtown Plaza</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Midtown Plaza is the neighborhood hub for dining, shopping, and community events
                  next to The English Hotel. Resale value for nearby condos often highlights walkable
                  access to plaza businesses — Dr. Jan Duffy positions that story in listing copy.
                </p>
                <Link
                  href="/neighborhood/midtown-plaza"
                  className="text-slate-900 font-semibold hover:underline"
                >
                  Midtown Plaza overview →
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Seller steps with Dr. Jan Duffy
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-slate-600 max-w-3xl text-lg leading-relaxed">
              <li>
                <strong className="text-slate-900">Consultation:</strong> Book a listing
                consultation so Dr. Jan Duffy can review your English Residences, English Hotel, or
                Midtown Plaza-area unit and HOA documents.
              </li>
              <li>
                <strong className="text-slate-900">Pricing &amp; prep:</strong> Receive a pricing
                range grounded in current Midtown Las Vegas comps — not national averages — plus
                staging and disclosure checklist items.
              </li>
              <li>
                <strong className="text-slate-900">Launch:</strong> Professional photography,
                syndication, and targeted outreach to buyers already searching Midtown Las Vegas
                condos on this site.
              </li>
            </ol>
          </section>

          <section className="mb-20">
            <PageFAQ faqs={[...SELLER_FAQS]} title="Midtown seller FAQs" />
          </section>

          <div className="text-center border-t border-slate-200 pt-12">
            <p className="text-lg text-slate-600 mb-6">
              Ready for pricing guidance? Dr. Jan Duffy answers seller questions at{' '}
              <a href={REAL_ESTATE_SITE.phoneTel} className="font-semibold text-slate-900">
                {REAL_ESTATE_SITE.phone}
              </a>
              .
            </p>
            <a
              href={valuationFooterUrl}
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Schedule home valuation with Dr. Jan Duffy
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
