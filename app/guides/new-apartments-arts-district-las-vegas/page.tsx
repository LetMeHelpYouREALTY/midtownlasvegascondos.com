import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'
import { CalendlyLink } from '@/app/components/calendly-link'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/guides/new-apartments-arts-district-las-vegas'

export const metadata: Metadata = {
  title: 'New Apartments Arts District Las Vegas | Midtown Phase One',
  description:
    'New apartments in Arts District Las Vegas — Midtown Phase One at 921 S Main adds apartments, condos, and mixed-use north of Charleston. English Residences & Plaza Tower. (702) 500-1980.',
  keywords: [
    'New apartments Arts District Las Vegas',
    'new apartments downtown Las Vegas',
    'Midtown new construction',
    'Midtown Phase One',
  ],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'Are there new apartments in the Arts District Las Vegas?',
    answer:
      `Yes. Midtown Phase One at 921 S Main Street adds ${midtownAuthority.phaseOne.residentialUnits} residential units — a mix of ${midtownAuthority.phaseOne.mix}. Midtown Plaza and The English Residences opened in 2025.`,
  },
  {
    question: 'Who is building new apartments in Midtown?',
    answer: `${midtownAuthority.developer.name} (${midtownAuthority.developer.leaders.join('; ')}). Groundbreaking ${midtownAuthority.developer.groundbreaking}. This is not a Lennar project.`,
  },
  {
    question: 'Can I buy instead of renting a new Arts District apartment?',
    answer:
      'Many Midtown units are for sale (condos and English Residences condo-hotel). See Midtown condos for sale or contact Dr. Jan for pre-construction inventory.',
  },
]

export default function NewApartmentsArtsDistrictPage() {
  return (
    <>
      <ArticleSchema
        headline="New Apartments Arts District Las Vegas"
        description="New apartment and condo inventory at Midtown Las Vegas Phase One."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={absoluteUrl(PATH)}
        author={{ name: siteConfig.agent.name, url: siteConfig.baseUrl }}
      />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/buyers-guide-midtown' }, { name: 'New Apartments', url: PATH }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">New Apartments Arts District Las Vegas</h1>
        <p className="text-lg text-slate-600 mb-10">
          &quot;New apartments Arts District Las Vegas&quot; leads to Midtown — the mixed-use development north of
          Charleston transforming unused blocks into walkable Shop · Dine · Live · Stay · Events.
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-10">
          <li>~{midtownAuthority.phaseOne.residentialUnits} Phase One residential units</li>
          <li>{midtownAuthority.phaseOne.squareFeet} sq ft mixed-use (retail, office, residential)</li>
          <li>{midtownAuthority.englishResidences.unitCount} English Residences ({midtownAuthority.englishResidences.brand})</li>
          <li>Plaza Tower — {midtownAuthority.phaseOne.plazaTowerEscrowPercent}% in escrow at launch (per News3LV)</li>
          <li>Developer investment ~{midtownAuthority.developer.investmentMidtownPlaza} in Midtown Plaza segment</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/neighborhood/english-residences" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold">The English Residences</h2>
            <p className="text-sm text-slate-600">{midtownAuthority.englishResidences.tagline}</p>
          </Link>
          <Link href="/neighborhood/midtown-plaza" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold">Midtown Plaza</h2>
            <p className="text-sm text-slate-600">Shopping, dining, and community hub</p>
          </Link>
        </div>
        <PageFAQ faqs={faqs} title="New Apartments — FAQs" />
        <div className="mt-10 text-center">
          <CalendlyLink text="Tour New Midtown Inventory" variant="primary" />
        </div>
      </div>
    </>
  )
}
