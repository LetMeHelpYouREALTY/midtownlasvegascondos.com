import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'
import { midtownAuthority } from '@/lib/midtown-authority'
import { absoluteUrl, siteConfig } from '@/lib/site-config'

const PATH = '/guides/arts-district-revitalization'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Arts District Revitalization | Timeline',
  description:
    'Midtown Las Vegas arts district revitalization — from Arts Factory (1997) to Midtown Plaza (2025). CNN, First Friday, Z Life Co., and $300M Midtown development. Dr. Jan (702) 500-1980.',
  keywords: [
    'Midtown las vegas arts district revitalization',
    'Arts District revitalization Las Vegas',
    'Midtown development Las Vegas',
    '18b Arts District history',
  ],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'What is the Midtown Las Vegas arts district revitalization?',
    answer:
      'It is the decades-long transformation of the Las Vegas Arts District (18b) from an industrial zone into a walkable cultural neighborhood — capped by the Midtown mixed-use development north of Charleston, Midtown Plaza, and The English Residences opening in 2025.',
  },
  {
    question: 'When did Midtown Las Vegas break ground?',
    answer: `Z Life Co. held a ceremonial groundbreaking for Midtown on ${midtownAuthority.developer.groundbreaking} at 921 S Main Street.`,
  },
  {
    question: 'Why did CNN call the Arts District exciting?',
    answer:
      'In 2024 CNN called the Arts District "the most exciting neighborhood" in Las Vegas — recognizing gallery growth, chef-driven dining, First Friday, and new residential development like Midtown.',
  },
]

export default function ArtsDistrictRevitalizationPage() {
  return (
    <>
      <ArticleSchema
        headline="Midtown Las Vegas Arts District Revitalization"
        description="Timeline of Arts District and Midtown revitalization in downtown Las Vegas."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={absoluteUrl(PATH)}
        author={{ name: siteConfig.agent.name, url: siteConfig.baseUrl }}
      />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/buyers-guide-midtown' }, { name: 'Revitalization', url: PATH }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Midtown Las Vegas Arts District Revitalization
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          From industrial hub to CNN&apos;s &quot;most exciting neighborhood&quot; — the revitalization story behind{' '}
          {midtownAuthority.officialName}.
        </p>
        <div className="space-y-6 mb-12">
          {midtownAuthority.timeline.map((item) => (
            <div key={item.year} className="border-l-4 border-amber-500 pl-6 py-2">
              <div className="text-2xl font-bold text-slate-900">{item.year}</div>
              <p className="text-slate-600">{item.event}</p>
              {'event2' in item && item.event2 && <p className="text-slate-600 mt-1">{item.event2}</p>}
            </div>
          ))}
        </div>
        <section className="mb-12 bg-slate-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Midtown today — Z Life Co.</h2>
          <p className="text-slate-600 mb-4">{midtownAuthority.developer.notLennar}</p>
          <p className="text-slate-600">
            Phase One adds roughly {midtownAuthority.phaseOne.residentialUnits} residential units and{' '}
            {midtownAuthority.phaseOne.squareFeet} sq ft of mixed-use space — condos, apartments, hotel, and retail around The English Hotel.
          </p>
        </section>
        <p className="mb-8">
          <Link href="/midtown-las-vegas" className="font-semibold underline">
            Explore Midtown Las Vegas →
          </Link>
        </p>
        <PageFAQ faqs={faqs} title="Revitalization FAQs" />
      </div>
    </>
  )
}
