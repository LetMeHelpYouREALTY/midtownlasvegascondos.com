import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { PageFAQ } from '../components/page-faq'
import { PageFAQSchema } from '../components/page-faq-schema'
import { CalendlyLink } from '../components/calendly-link'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/midtown-las-vegas'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas | Arts District North of Charleston',
  description:
    'Midtown Las Vegas — the walkable Arts District neighborhood north of Charleston Blvd. Shop, Dine, Live, Stay, Events at 921 S Main St. Walk Score ~86. Dr. Jan Duffy (702) 500-1980.',
  keywords: [
    'Midtown Las Vegas',
    'Midtown at the Arts District',
    'Meet me in Midtown',
    'Las Vegas Arts District',
    '18b Arts District',
    'north of Charleston Las Vegas',
  ],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'What is Midtown Las Vegas?',
    answer:
      'Midtown is the emerging neighborhood north of Charleston Boulevard in the Las Vegas Arts District — a walkable cultural center with galleries, privately owned restaurants, Midtown Plaza, The English Hotel, and The English Residences at 921 S Main Street.',
  },
  {
    question: 'Where is Midtown in relation to the Arts District?',
    answer:
      'Midtown sits north of Charleston Blvd while the historic 18b Arts District extends south. Together they form Las Vegas\'s most walkable urban core with Walk Score ~86.',
  },
  {
    question: 'Who developed Midtown Las Vegas?',
    answer:
      `${midtownAuthority.developer.name} (${midtownAuthority.developer.leaders.join('; ')}) — not Lennar. Groundbreaking ${midtownAuthority.developer.groundbreaking}.`,
  },
]

export default function MidtownLasVegasPage() {
  return (
    <>
      <PageFAQSchema faqs={faqs} />
      <div className="min-h-screen bg-white">
        <section className="relative h-[50vh] flex items-center justify-center">
          <Image
            src="/images/midtown/blvd-aerial-rendering.jpg"
            alt="Midtown Las Vegas Arts District aerial view at 921 S Main Street showing mixed-use development north of Charleston Boulevard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <p className="text-amber-300 font-semibold uppercase tracking-widest mb-2">{midtownAuthority.tagline}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Midtown Las Vegas</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{midtownAuthority.alternateName}</p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Midtown Las Vegas', url: PATH }]} />
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">{midtownAuthority.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {midtownAuthority.categories.map((cat) => (
              <div key={cat} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center font-semibold text-slate-900">
                {cat}
              </div>
            ))}
          </div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Where is Midtown?</h2>
            <p className="text-slate-600 mb-4">
              Emerging north of <strong>{midtownAuthority.geo.northBoundary}</strong> — the perfect homebase for the{' '}
              <Link href="/neighborhood/arts-district" className="font-semibold underline">
                Las Vegas Arts District
              </Link>
              . NAP: {siteConfig.address.full}.
            </p>
          </section>
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {midtownAuthority.landmarks.map((lm) => (
              <Link key={lm.name} href={lm.slug} className="border rounded-xl p-5 hover:shadow-md">
                <h3 className="font-bold text-slate-900">{lm.name}</h3>
              </Link>
            ))}
          </section>
          <section className="grid md:grid-cols-3 gap-6 mb-16">
            <Link href="/midtown-condos-for-sale" className="bg-blue-600 text-white rounded-xl p-6 hover:bg-blue-700">
              <h2 className="font-bold text-xl mb-2">Condos for sale</h2>
              <p className="text-blue-100 text-sm">Browse Midtown &amp; Arts District listings</p>
            </Link>
            <Link href="/midtown-condos-for-rent" className="border rounded-xl p-6 hover:shadow-md">
              <h2 className="font-bold text-xl mb-2">Rentals &amp; apartments</h2>
              <p className="text-slate-600 text-sm">Rent vs buy in Walk Score ~{siteConfig.walkScore} Midtown</p>
            </Link>
            <Link href="/guides/arts-district-revitalization" className="border rounded-xl p-6 hover:shadow-md">
              <h2 className="font-bold text-xl mb-2">Revitalization story</h2>
              <p className="text-slate-600 text-sm">From Arts Factory (1997) to Midtown Plaza (2025)</p>
            </Link>
          </section>
          <PageFAQ faqs={faqs} title="Midtown Las Vegas — FAQs" />
          <div className="mt-12 text-center">
            <CalendlyLink text="Tour Midtown on Foot" variant="primary" />
          </div>
        </div>
      </div>
    </>
  )
}
