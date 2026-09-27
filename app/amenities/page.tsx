import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { AmenityMap } from '@/app/components/amenity-map/amenity-map'
import { AmenitiesPageSchema } from '@/app/components/amenities-page-schema'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { CalendlyLink } from '@/app/components/calendly-link'
import { AgentProfilePhoto } from '@/app/components/agent-profile-photo'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { MIDTOWN_COMMUNITY } from '@/lib/amenities/community-config'
import {
  AMENITIES_PAGE_FAQS,
  AMENITIES_WRITTEN_SECTIONS,
} from '@/lib/amenities/page-content'

const pageUrl = `${REAL_ESTATE_SITE.url}/amenities`

export const metadata: Metadata = {
  title: `Nearby Amenities in ${MIDTOWN_COMMUNITY.name}, Las Vegas`,
  description:
    `Restaurants, parking, grocery, fitness, healthcare, and Arts District attractions near ${MIDTOWN_COMMUNITY.name} at 921 S Main St. Interactive map and buyer FAQ with Dr. Jan Duffy, REALTOR®. Call ${REAL_ESTATE_SITE.phone}.`,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Nearby Amenities in ${MIDTOWN_COMMUNITY.name} | Dr. Jan Duffy`,
    description:
      'Hyperlocal amenity map for Midtown Las Vegas condos — dining, parking, parks, and commute context in the Arts District.',
    url: pageUrl,
    type: 'website',
  },
}

export default function AmenitiesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Nearby Amenities', url: '/amenities' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <AmenitiesPageSchema pageUrl={pageUrl} />
      <PageFAQSchema faqs={[...AMENITIES_PAGE_FAQS]} />

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nearby Amenities in {MIDTOWN_COMMUNITY.name}, Las Vegas
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Walkable Arts District dining, event parking, and daily errands around{' '}
            {MIDTOWN_COMMUNITY.streetAddress} — mapped for buyers comparing Midtown condos.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Interactive Amenity Map</h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            Filter by category to explore what is near Midtown. The amber marker is{' '}
            {MIDTOWN_COMMUNITY.name}; tap any result for directions.
          </p>
          <AmenityMap variant="default" />
        </div>

        <div className="prose prose-lg max-w-none text-slate-600 space-y-12 mb-16">
          {AMENITIES_WRITTEN_SECTIONS.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mb-16" aria-labelledby="amenities-faq-title">
          <h2 id="amenities-faq-title" className="text-3xl font-bold text-slate-900 mb-8">
            Midtown Amenities FAQ
          </h2>
          <dl className="space-y-6">
            {AMENITIES_PAGE_FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</dt>
                <dd className="text-slate-600 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="rounded-2xl bg-slate-900 text-white p-10 text-center"
          aria-labelledby="amenities-cta-title"
        >
          <AgentProfilePhoto size="md" className="mx-auto mb-6" />
          <h2 id="amenities-cta-title" className="text-3xl font-bold mb-3">
            Tour Midtown With a Local Specialist
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-6">
            {REAL_ESTATE_SITE.agentName}, {REAL_ESTATE_SITE.agentTitle} — {REAL_ESTATE_SITE.brokerage}.
            License {REAL_ESTATE_SITE.license}. I help buyers map walk routes, parking, and HOA perks at The English
            Residences and nearby Arts District condos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyLink text="Schedule a Midtown Tour" variant="primary" />
            <a
              href={REAL_ESTATE_SITE.phoneTel}
              className="text-lg font-semibold text-amber-200 hover:text-white"
            >
              {REAL_ESTATE_SITE.phone}
            </a>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/90 hover:text-white underline"
            >
              Contact page
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
