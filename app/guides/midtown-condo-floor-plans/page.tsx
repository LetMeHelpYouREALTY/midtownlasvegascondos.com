import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'
import { CalendlyLink } from '@/app/components/calendly-link'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/guides/midtown-condo-floor-plans'

export const metadata: Metadata = {
  title: 'Midtown Condos Las Vegas Floor Plans | English Residences & Towers',
  description:
    'Midtown condo floor plans — studio to penthouse at English Residences, Plaza Tower, and Arts District towers. Sizes, layouts, and livability tips. Dr. Jan (702) 500-1980.',
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'What floor plans are available at Midtown Las Vegas?',
    answer:
      'Midtown offers studio, one-bedroom, two-bedroom, and penthouse layouts across Plaza Tower and The English Residences (121 Marriott Tribute condo-hotel units). Nearby Arts District buildings like Juhl and Soho Lofts offer additional loft-style floor plans.',
  },
  {
    question: 'How big are Midtown condo units?',
    answer:
      'Sizes vary by tower — some luxury complexes offer compact ~480 sq ft studios while penthouses exceed 2,000 sq ft. Tour in person or via video to judge livability; floor plan square footage alone does not tell the full story.',
  },
  {
    question: 'Where can I see English Residences floor plans?',
    answer:
      'View photos and layout details on our English Residences gallery page, or schedule a private tour with Dr. Jan Duffy at 921 S Main Street.',
  },
]

export default function MidtownCondoFloorPlansPage() {
  return (
    <>
      <ArticleSchema
        headline="Midtown Condos Las Vegas Floor Plans"
        description="Floor plan guide for Midtown Las Vegas and Arts District condo towers."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={absoluteUrl(PATH)}
        author={{ name: siteConfig.agent.name, url: siteConfig.baseUrl }}
      />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/buyers-guide-midtown' }, { name: 'Floor Plans', url: PATH }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Midtown Condos Las Vegas Floor Plans</h1>
        <p className="text-lg text-slate-600 mb-10">
          People searching &quot;Midtown condos las vegas floor plans&quot; want real layouts — not marketing renders.
          Here is how units break down at {midtownAuthority.officialName} and neighboring Arts District towers.
        </p>
        <section className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border px-4 py-3 text-left">Building</th>
                <th className="border px-4 py-3 text-left">Typical layouts</th>
                <th className="border px-4 py-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="border px-4 py-3">The English Residences</td>
                <td className="border px-4 py-3">Studio – penthouse</td>
                <td className="border px-4 py-3">{midtownAuthority.englishResidences.unitCount} condo-hotel units · {midtownAuthority.englishResidences.brand}</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Plaza Tower</td>
                <td className="border px-4 py-3">1BR – 2BR+</td>
                <td className="border px-4 py-3">Part of Midtown Phase One at 921 S Main</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Juhl</td>
                <td className="border px-4 py-3">Loft-style 1BR–2BR</td>
                <td className="border px-4 py-3">Arts Factory location · extensive amenities</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Soho Lofts</td>
                <td className="border px-4 py-3">Industrial loft plans</td>
                <td className="border px-4 py-3">~11-ft ceilings · gallery retail at street level</td>
              </tr>
            </tbody>
          </table>
        </section>
        <p className="text-slate-600 mb-8">
          See{' '}
          <Link href="/neighborhood/english-residences/gallery" className="font-semibold underline">
            English Residences gallery
          </Link>{' '}
          and{' '}
          <Link href="/guides/downtown-condo-buildings-compared" className="font-semibold underline">
            building comparison
          </Link>{' '}
          before choosing a layout.
        </p>
        <PageFAQ faqs={faqs} title="Floor Plan FAQs" />
        <div className="mt-10 text-center">
          <CalendlyLink text="Schedule a Floor Plan Tour" variant="primary" />
        </div>
      </div>
    </>
  )
}
