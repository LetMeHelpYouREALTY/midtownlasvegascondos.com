import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { RealScoutSection } from '@/app/components/realscout-section'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'

const CANONICAL_URL = 'https://www.midtownlasvegascondos.com/guides/walkable-arts-district-living'

export const metadata: Metadata = {
  title: 'Walkable Living in Las Vegas Arts District | Midtown Guide',
  description:
    'Is the Las Vegas Arts District walkable? Guide for remote workers and relocators on walkable daily life, safety, condos vs rent, and Midtown at 921 S Main St. Call (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Walkable Arts District Living | Midtown Las Vegas',
    description:
      'Everything you need to know about walkable daily life in the Las Vegas Arts District and Midtown — dining, galleries, condos, and relocation tips.',
    url: CANONICAL_URL,
    type: 'article',
  },
}

const faqs = [
  {
    question: 'Is the Las Vegas Arts District walkable?',
    answer:
      'Yes. The Arts District has a Walk Score of approximately 86, making it one of Las Vegas\'s most walkable neighborhoods. Residents can walk to galleries, restaurants, coffee shops, First Friday events, and Midtown Plaza without relying on a car for daily errands.',
  },
  {
    question: 'Where should I live in Las Vegas if I work remotely and want walkability?',
    answer:
      'Midtown Las Vegas in the Arts District is ideal for remote workers who want walkable daily life outside the Strip. Centered at 921 S Main Street, Midtown offers condos, the English Residences condo-hotel, dining at Midtown Plaza, and cultural events within a few blocks — unlike car-dependent suburban communities.',
  },
  {
    question: 'Is it better to rent or buy a condo in the Arts District?',
    answer:
      'Buying makes sense when your total monthly cost (mortgage, HOA, taxes, insurance) is competitive with rent and you plan to stay 3+ years. Arts District condos appeal to buyers who want to build equity in a appreciating urban core. Dr. Jan Duffy can compare rent vs buy scenarios for your budget.',
  },
  {
    question: 'How far is Midtown from the Las Vegas Strip?',
    answer:
      'Midtown is about 15 minutes by car from the Las Vegas Strip. The neighborhood offers a distinctly local experience — galleries, chef-driven restaurants, and community events — while keeping Strip entertainment accessible for occasional visits.',
  },
  {
    question: 'What can I walk to from Midtown Las Vegas?',
    answer:
      'From Midtown you can walk to 30+ art galleries, locally-owned restaurants, The English Hotel, The Pepper Club, Midtown Plaza, First Friday festival routes, and downtown Las Vegas employers. The 18b Arts District spans roughly 18 blocks of creative and commercial activity.',
  },
]

export default function WalkableArtsDistrictLivingPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/buyers-guide-midtown' },
    { name: 'Walkable Arts District Living', url: '/guides/walkable-arts-district-living' },
  ]

  return (
    <>
      <ArticleSchema
        headline="Walkable Living in the Las Vegas Arts District"
        description="Guide to walkable daily life in Midtown Las Vegas and the Arts District for remote workers and relocators considering condos."
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
            Walkable Living in the Las Vegas Arts District
          </h1>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> The Las Vegas Arts District is one of the city&apos;s most
              walkable neighborhoods (Walk Score ~86). Midtown at 921 S Main Street lets you walk to
              galleries, restaurants, First Friday events, and Midtown Plaza — ideal for remote workers
              who want daily life on foot instead of Strip traffic and suburban sprawl.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why do remote workers choose the Arts District over the suburbs?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Las Vegas newcomers on forums like{' '}
              <a
                href="https://www.reddit.com/r/vegaslocals/comments/1nzs0wn/relocation_arts_district_or/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-semibold hover:underline"
              >
                r/vegaslocals
              </a>{' '}
              often ask where to live for walkable daily life. Suburban master-planned communities
              require driving everywhere. Midtown offers a different model: live, dine, and explore
              culture within a few blocks.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">Walk Score ~86</strong> — errands and dining on foot
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">30+ galleries</strong> — art walks and studio openings
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">First Friday monthly</strong> — 10,000+ visitors, live music, food trucks
              </li>
              <li className="bg-slate-50 rounded-lg p-4">
                <strong className="text-slate-900">Local dining</strong> — chef-driven spots, not chain restaurants
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Is it worth buying a condo in Las Vegas now?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Buyers weighing purchase timing should compare total monthly cost against rent, factor in{' '}
              <Link href="/guides/las-vegas-condo-hoa-fees" className="text-slate-900 font-semibold hover:underline">
                HOA fees
              </Link>
              , and consider how long they plan to stay. Arts District property values have appreciated
              roughly 45% since 2015 as the neighborhood transformed from industrial zone to cultural
              destination.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Condo-hotel units at{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                The English Residences
              </Link>{' '}
              add income potential when you&apos;re away — a model discussed frequently by Las Vegas
              investors comparing pure rental vs owner-use flexibility.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What does a typical walkable day in Midtown look like?
            </h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3 mb-6">
              <li>Morning coffee and breakfast at a local café near Main Street</li>
              <li>Gallery browsing or a studio visit in the 18b Arts District</li>
              <li>Lunch at{' '}
                <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                  Midtown Plaza
                </Link>{' '}
                or The Pepper Club
              </li>
              <li>Afternoon remote work from home or a co-working-friendly café</li>
              <li>Evening dinner, live music, or a show at a neighborhood venue</li>
              <li>Monthly First Friday art walk without driving or parking hassles</li>
            </ol>
            <p className="text-slate-600 leading-relaxed">
              Read our full{' '}
              <Link href="/arts-district-guide" className="text-slate-900 font-semibold hover:underline">
                Arts District guide
              </Link>{' '}
              for dining, events, and neighborhood highlights.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Condos vs apartments: which offers better security in downtown?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              High-rise and boutique condos in the Arts District typically offer controlled access,
              secure parking, and on-site management — factors Las Vegas relocators often prioritize
              over standard apartments. Ownership also builds equity in a neighborhood with limited
              walkable inventory.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Browse{' '}
              <Link href="/search" className="text-slate-900 font-semibold hover:underline">
                available Midtown properties
              </Link>{' '}
              or explore{' '}
              <Link href="/investment-properties" className="text-slate-900 font-semibold hover:underline">
                investment opportunities
              </Link>{' '}
              in the area.
            </p>
          </section>

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={faqs} title="Walkable Arts District FAQs" />
          </section>

          <div className="text-center">
            <CalendlyLink text="Schedule a Walkable Neighborhood Tour" variant="primary" />
          </div>
        </div>

        <RealScoutSection
          listingsTitle="Walkable Arts District Condos"
          listingsDescription="Find homes you can walk to galleries, First Friday, and Midtown Plaza from your door."
          className="bg-white"
        />
      </div>
    </>
  )
}
