import Link from 'next/link'
import { Metadata } from 'next'
import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { ArticleSchema } from '@/app/components/article-schema'

const CANONICAL_PATH = '/guides/downtown-condo-buildings-compared'
const CANONICAL_URL = absoluteUrl(CANONICAL_PATH)

export const metadata: Metadata = {
  title: 'Downtown Las Vegas Condo Buildings Compared | Arts District Guide',
  description:
    'Compare Juhl, Soho Lofts, Newport, The Ogden, and Midtown for walkable Arts District living. Local buyer guide from Dr. Jan Duffy at 921 S Main St. Call (702) 500-1980.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Downtown Vegas Condo Buildings Compared | Midtown Las Vegas',
    description:
      'Which downtown Las Vegas condo fits your lifestyle? Building-by-building comparison for locals choosing walkable Arts District life.',
    url: CANONICAL_URL,
    type: 'article',
  },
}

const faqs = [
  {
    question: 'Which downtown Las Vegas condo is best for walkable Arts District living?',
    answer:
      'Juhl, Soho Lofts, Newport Lofts, and Midtown all sit in or near the 18b Arts District with Walk Score ~86. Soho and Newport offer true loft character; Juhl adds extensive amenities; Midtown brings new English Residences and Plaza Tower inventory at 921 S Main St.',
  },
  {
    question: 'Is Juhl or Soho Lofts better for creatives?',
    answer:
      'Soho Lofts delivers industrial loft aesthetics — exposed ducts, 11-foot ceilings, gallery retail at street level. Juhl offers more amenities (rooftop pool, theater, co-working) and live/work flexibility. Many artists prefer Soho\'s raw loft feel; professionals often choose Juhl\'s full-service package.',
  },
  {
    question: 'How do HOA fees compare between downtown condo buildings?',
    answer:
      'Arts District high-rises typically run $400–$965/month depending on building and what\'s included (water, trash, amenities). Soho reports roughly $585–$965/month. Always request the resale package and reserve study — locals on r/vegaslocals note higher HOA is often worth it for walkability.',
  },
  {
    question: 'What is new at Midtown compared to older downtown towers?',
    answer:
      'Midtown is a master-planned Arts District development with The English Residences (Marriott Tribute condo-hotel), Plaza Tower, Midtown Plaza dining, and walkable courtyard between towers — all at 921 S Main Street. It complements established buildings like Juhl and Soho with new construction and hotel-managed units.',
  },
  {
    question: 'Should I tour buildings at night before buying downtown?',
    answer:
      'Yes. Las Vegas locals recommend visiting your shortlist after dark to gauge noise, lighting, and street activity. Fremont East (The Ogden) differs from gallery blocks near Soho and Midtown. Dr. Jan Duffy offers evening neighborhood tours for buyers comparing buildings.',
  },
]

const buildings = [
  {
    name: 'Midtown Las Vegas',
    vibe: 'New master-planned Arts District hub',
    walkability: 'Walk Score ~86 — galleries, Midtown Plaza, First Friday',
    hoa: 'Varies by tower; English Residences condo-hotel model',
    bestFor: 'Locals wanting newest inventory + hotel amenities at 921 S Main',
    link: '/neighborhood/english-residences',
  },
  {
    name: 'Juhl',
    vibe: 'Amenity-rich urban campus',
    walkability: 'Heart of Arts District near Mob Museum & galleries',
    hoa: 'Mid-to-upper downtown range; extensive amenities included',
    bestFor: 'Professionals & remote workers wanting pool, gym, co-working',
    link: '/neighborhood/arts-district',
  },
  {
    name: 'Soho Lofts',
    vibe: 'Authentic industrial loft living',
    walkability: 'Gallery row, breweries, First Friday routes',
    hoa: 'Typically $585–$965/mo (often includes utilities)',
    bestFor: 'Creatives who want exposed brick, high ceilings, loft character',
    link: '/neighborhood/arts-district',
  },
  {
    name: 'Newport Lofts',
    vibe: 'Boutique high-rise lofts',
    walkability: 'Adjacent to Soho in downtown south pocket',
    hoa: 'Comparable to Soho; review pet and lease restrictions',
    bestFor: 'Buyers wanting loft aesthetics with modern tower security',
    link: '/neighborhood/arts-district',
  },
  {
    name: 'The Ogden',
    vibe: 'Fremont East entertainment gateway',
    walkability: 'Steps to nightlife; louder than pure Arts District blocks',
    hoa: 'Downtown high-rise range; strong building management',
    bestFor: 'Buyers who want Fremont energy over gallery-quiet evenings',
    link: '/arts-district-guide',
  },
]

export default function DowntownCondoBuildingsComparedPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/buyers-guide-midtown' },
    { name: 'Downtown Buildings Compared', url: CANONICAL_PATH },
  ]

  return (
    <>
      <ArticleSchema
        headline="Downtown Las Vegas Condo Buildings Compared"
        description="Local buyer guide comparing Juhl, Soho, Newport, Ogden, and Midtown for walkable Arts District condo living."
        datePublished="2026-06-28"
        dateModified="2026-06-28"
        url={CANONICAL_URL}
        author={{ name: siteConfig.agent.name, url: absoluteUrl('/about') }}
      />
      <PageFAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-3">
            {siteConfig.personaLabel} · Local buyer guide
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Downtown Las Vegas Condo Buildings Compared
          </h1>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> The biggest decision isn&apos;t picking a unit — it&apos;s picking
              which <em>district</em> you want to live in. Arts District buildings (Juhl, Soho, Newport, Midtown)
              offer gallery walks and local dining; Fremont East (The Ogden) trades quiet evenings for nightlife
              at your doorstep. Tour each at night before you commit.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What locals ask on r/vegaslocals before buying downtown
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Condo threads on{' '}
              <a
                href="https://www.reddit.com/r/vegaslocals/comments/1i0vcce/condominium_recommendations_for_buyers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-semibold hover:underline"
              >
                r/vegaslocals
              </a>{' '}
              often boil down to: &quot;HOA is higher than I wanted, but walkable to the Arts District might be
              worth it.&quot; That trade-off defines downtown condo shopping — you&apos;re buying a lifestyle
              block, not just square footage.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Building comparison</h2>
            <div className="space-y-6">
              {buildings.map((b) => (
                <div
                  key={b.name}
                  className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{b.name}</h3>
                  <dl className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                    <div>
                      <dt className="font-semibold text-slate-900">Vibe</dt>
                      <dd>{b.vibe}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">Walkability</dt>
                      <dd>{b.walkability}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">HOA ballpark</dt>
                      <dd>{b.hoa}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">Best for</dt>
                      <dd>{b.bestFor}</dd>
                    </div>
                  </dl>
                  <Link
                    href={b.link}
                    className="inline-block mt-4 text-slate-900 font-semibold hover:underline"
                  >
                    Explore {b.name} on our site →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Next steps for local buyers</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
              <li>
                Read our{' '}
                <Link href="/guides/walkable-arts-district-living" className="font-semibold text-slate-900 hover:underline">
                  walkable living guide
                </Link>
              </li>
              <li>
                Plan around{' '}
                <Link href="/guides/first-fridays-living-guide" className="font-semibold text-slate-900 hover:underline">
                  First Friday
                </Link>{' '}
                parking and monthly rhythm
              </li>
              <li>
                Review{' '}
                <Link href="/guides/arts-district-living-at-night" className="font-semibold text-slate-900 hover:underline">
                  living downtown at night
                </Link>{' '}
                before choosing a block
              </li>
            </ul>
          </section>

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={faqs} title="Downtown Building FAQs" />
          </section>

          <div className="text-center">
            <CalendlyLink text="Schedule an Evening Building Tour" variant="primary" />
          </div>
        </div>
      </div>
    </>
  )
}
