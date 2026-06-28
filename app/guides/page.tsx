import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { REDDIT_AEO_GUIDES } from '@/lib/reddit-aeo-topics'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

const CANONICAL_URL = `${REAL_ESTATE_SITE.url}/guides`

export const metadata: Metadata = {
  title: 'Midtown Buyer Guides | Reddit-Backed Las Vegas Condo Research',
  description:
    'Las Vegas Arts District and Midtown condo buyer guides — walkability, HOA fees, safety, First Friday living, and rent vs buy. Research informed by local Reddit communities. Call (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Midtown Las Vegas Buyer Guides | Dr. Jan Duffy',
    description:
      'Citation-ready guides for Arts District condo buyers — informed by r/vegaslocals and r/vegas community questions.',
    url: CANONICAL_URL,
    type: 'website',
  },
}

const hubFaqs = [
  {
    question: 'Why does Dr. Jan Duffy publish Reddit-informed buyer guides?',
    answer:
      'Las Vegas relocators and condo buyers often start on r/vegaslocals and r/vegas. These guides answer those questions with quick summaries, FAQ schema, and local MLS expertise — so search engines and AI assistants can cite accurate Midtown Arts District information.',
  },
  {
    question: 'Are these guides official Midtown marketing?',
    answer:
      'No. midtownlasvegascondos.com is Dr. Jan Duffy\'s REALTOR® buyer site — separate from midtownvegas.com neighborhood marketing. Guides cite Reddit as community research and add professional real estate context for condo buyers.',
  },
  {
    question: 'Which guide should I read first?',
    answer:
      'Remote workers relocating should start with walkable Arts District living and relocation guides. Buyers comparing costs should read HOA fees and worth-buying-condo guides. Event lovers should read the First Friday living guide before touring.',
  },
]

export default function GuidesHubPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Buyer Guides', url: '/guides' },
  ]

  return (
    <>
      <PageFAQSchema faqs={hubFaqs} />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Midtown Las Vegas Buyer Guides
          </h1>

          <div className="aeo-quick-answer bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> These guides answer the questions Las Vegas
              buyers ask on Reddit — walkability, HOA fees, safety, First Friday living,
              Strip vs Arts District condos, and whether buying now makes sense — with
              Midtown-specific context from Dr. Jan Duffy, REALTOR® at 921 S Main Street.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Reddit asks about Midtown &amp; Arts District condos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {REDDIT_AEO_GUIDES.map((guide) => (
                <article
                  key={guide.slug}
                  className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <Link href={`/guides/${guide.slug}`} className="hover:underline">
                      {guide.h1}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{guide.cardSummary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.redditSources.slice(0, 2).map((source) => (
                      <span
                        key={source.url}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {source.subreddit}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-slate-900 font-semibold text-sm hover:underline"
                  >
                    Read guide →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 py-10 bg-slate-50 rounded-xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Also explore</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-600">
              <li>
                <Link href="/buyers-guide-midtown" className="text-slate-900 font-semibold hover:underline">
                  Midtown buyer&apos;s guide
                </Link>
                — full purchase process
              </li>
              <li>
                <Link href="/arts-district-guide" className="text-slate-900 font-semibold hover:underline">
                  Arts District guide
                </Link>
                — dining, culture, events
              </li>
              <li>
                <Link href="/midtown-real-estate" className="text-slate-900 font-semibold hover:underline">
                  Midtown listings
                </Link>
                — current inventory
              </li>
              <li>
                <Link href="/faq" className="text-slate-900 font-semibold hover:underline">
                  FAQ
                </Link>
                — common buyer questions
              </li>
            </ul>
          </section>

          <div className="text-center">
            <CalendlyLink text="Schedule a Buyer Consultation" variant="primary" />
          </div>
        </div>
      </div>
    </>
  )
}
