import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/guides/midtown-lennar-las-vegas'

export const metadata: Metadata = {
  title: 'Midtown Lennar Las Vegas? | Developer Is Z Life Co.',
  description:
    'Searching "Midtown Lennar"? Midtown Las Vegas is developed by Z Life Co. (Weina Zhang & Anna Olin), not Lennar. Arts District condos at 921 S Main. Dr. Jan (702) 500-1980.',
  keywords: ['Midtown Lennar', 'Midtown Lennar Las Vegas', 'who built Midtown Las Vegas', 'Z Life Co Midtown'],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'Is Midtown Las Vegas a Lennar community?',
    answer: midtownAuthority.developer.notLennar,
  },
  {
    question: 'Who developed Midtown Las Vegas?',
    answer: `${midtownAuthority.developer.name} — ${midtownAuthority.developer.leaders.join(' and ')}. The team also developed The English Hotel. Groundbreaking ${midtownAuthority.developer.groundbreaking}.`,
  },
  {
    question: 'Does Lennar build in Las Vegas?',
    answer:
      'Yes — Lennar is a major homebuilder in the Las Vegas Valley, but Midtown Arts District is a separate Z Life Co. mixed-use project. If you searched "Midtown Lennar," you likely want Midtown at 921 S Main Street.',
  },
  {
    question: 'Where can I buy a condo in Midtown?',
    answer:
      'Browse Midtown condos for sale — English Residences, Plaza Tower, and Arts District resale inventory. Dr. Jan Duffy at (702) 500-1980.',
  },
]

export default function MidtownLennarPage() {
  return (
    <>
      <ArticleSchema
        headline="Midtown Lennar Las Vegas — Developer Clarification"
        description="Midtown Las Vegas is built by Z Life Co., not Lennar."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={absoluteUrl(PATH)}
        author={{ name: siteConfig.agent.name, url: siteConfig.baseUrl }}
      />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/buyers-guide-midtown' }, { name: 'Midtown Lennar', url: PATH }]} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Midtown Lennar Las Vegas?</h1>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <p className="text-lg text-slate-800">
            <strong>Quick answer:</strong> Midtown Las Vegas is <em>not</em> a Lennar project. It is developed by{' '}
            <strong>{midtownAuthority.developer.name}</strong> at 921 S Main Street in the Arts District.
          </p>
        </div>
        <p className="text-slate-600 mb-8">{midtownAuthority.developer.notLennar}</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who is building Midtown?</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {midtownAuthority.developer.leaders.map((leader) => (
              <li key={leader}>{leader}</li>
            ))}
            <li>Groundbreaking: {midtownAuthority.developer.groundbreaking}</li>
            <li>Investment (Midtown Plaza segment): ~{midtownAuthority.developer.investmentMidtownPlaza}</li>
          </ul>
        </section>
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/midtown-las-vegas" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold">Midtown Las Vegas hub</h2>
          </Link>
          <Link href="/midtown-condos-for-sale" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold">Midtown condos for sale</h2>
          </Link>
        </section>
        <PageFAQ faqs={faqs} title="Midtown Lennar — FAQs" />
      </div>
    </>
  )
}
