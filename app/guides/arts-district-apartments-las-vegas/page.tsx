import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/guides/arts-district-apartments-las-vegas'

export const metadata: Metadata = {
  title: 'Arts District Apartments Las Vegas | Midtown vs Condos',
  description:
    'Arts District apartments Las Vegas — rental and for-sale options in Midtown north of Charleston. Apartments vs condos, Walk Score ~86. Dr. Jan Duffy (702) 500-1980.',
  keywords: ['Arts District apartments Las Vegas', 'Arts District apartments', 'Midtown apartments', 'downtown Las Vegas apartments'],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'Are there apartments in the Las Vegas Arts District?',
    answer:
      'Yes. The Arts District and Midtown include both apartments and condos — Midtown Phase One adds hundreds of residential units north of Charleston, mixing apartments with for-sale condos and hotel residences.',
  },
  {
    question: 'What is the difference between Arts District apartments and condos?',
    answer:
      'Apartments are typically leased from a landlord or building operator; condos are owned units with HOA fees. Condos build equity; apartments offer flexibility. English Residences blur the line with condo-hotel ownership.',
  },
  {
    question: 'How walkable are Arts District apartments?',
    answer: `Walk Score ~${siteConfig.walkScore} — among the highest in Las Vegas. Midtown apartments put galleries, Midtown Plaza, and First Friday within walking distance.`,
  },
]

export default function ArtsDistrictApartmentsPage() {
  return (
    <>
      <ArticleSchema
        headline="Arts District Apartments Las Vegas"
        description="Guide to apartments and condos in the Las Vegas Arts District and Midtown."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={absoluteUrl(PATH)}
        author={{ name: siteConfig.agent.name, url: siteConfig.baseUrl }}
      />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/buyers-guide-midtown' }, { name: 'Arts District Apartments', url: PATH }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Arts District Apartments Las Vegas</h1>
        <p className="text-lg text-slate-600 mb-10">
          Searching Arts District apartments? {midtownAuthority.officialName} north of Charleston adds new apartment
          inventory alongside condos — in Las Vegas&apos;s most walkable neighborhood.
        </p>
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/midtown-condos-for-rent" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg">Rentals</h2>
            <p className="text-slate-600 text-sm">Midtown condos &amp; apartments for rent</p>
          </Link>
          <Link href="/guides/new-apartments-arts-district-las-vegas" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg">New construction</h2>
            <p className="text-slate-600 text-sm">Midtown Phase One apartments &amp; condos</p>
          </Link>
          <Link href="/midtown-condos-for-sale" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg">Buy a condo</h2>
            <p className="text-slate-600 text-sm">English Residences &amp; Arts District towers for sale</p>
          </Link>
          <Link href="/guides/walkable-arts-district-living" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg">Walkable living</h2>
            <p className="text-slate-600 text-sm">Walk Score ~{siteConfig.walkScore} lifestyle guide</p>
          </Link>
        </section>
        <PageFAQ faqs={faqs} title="Arts District Apartments — FAQs" />
      </div>
    </>
  )
}
