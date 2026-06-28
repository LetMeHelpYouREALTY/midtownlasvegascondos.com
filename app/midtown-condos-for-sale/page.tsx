import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutScript } from '../components/realscout-script'
import { RealScoutSearch } from '../components/realscout-search'
import { CalendlyLink } from '../components/calendly-link'
import { PageFAQ } from '../components/page-faq'
import { PageFAQSchema } from '../components/page-faq-schema'
import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/midtown-condos-for-sale'

export const metadata: Metadata = {
  title: 'Midtown Condos Las Vegas for Sale | Arts District Listings',
  description:
    'Midtown condos for sale in Las Vegas Arts District — English Residences, Plaza Tower, Juhl corridor, and downtown inventory at 921 S Main St. Dr. Jan Duffy (702) 500-1980.',
  keywords: [
    'Midtown condos las vegas for sale',
    'Midtown Las Vegas condos',
    'Arts District condos for sale',
    'English Residences for sale',
    'downtown Las Vegas condos',
  ],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'Are there Midtown condos for sale in Las Vegas right now?',
    answer:
      'Yes. Active Midtown and Arts District condo inventory includes The English Residences, Plaza Tower, and resale units in nearby buildings like Juhl and Soho Lofts. Browse current listings or call Dr. Jan Duffy at (702) 500-1980 for off-market opportunities.',
  },
  {
    question: 'How much do Midtown Las Vegas condos cost?',
    answer:
      'Midtown and Arts District condos typically range from about $299,000 for studios in new towers to $1M+ for penthouses and English Residences units. HOA fees vary by building — see our building comparison guide.',
  },
  {
    question: 'Where is Midtown Las Vegas?',
    answer:
      'Midtown is north of Charleston Boulevard in the Las Vegas Arts District (18b), centered at 921 S Main Street. Walk Score ~86.',
  },
]

export default function MidtownCondosForSalePage() {
  return (
    <>
      <RealScoutScript />
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Midtown Condos for Sale', url: PATH }]} />
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Midtown Condos Las Vegas for Sale</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl">
          {midtownAuthority.officialName} at 921 S Main St — walkable Arts District condos, English Residences
          condo-hotel units, and downtown towers for buyers who want gallery life on foot.
        </p>
        <div className="mb-10">
          <RealScoutSearch />
        </div>
        <RealScoutListings />
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          <Link href="/guides/midtown-condo-floor-plans" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg mb-2">Floor plans</h2>
            <p className="text-slate-600 text-sm">Studio to penthouse layouts at Midtown and English Residences</p>
          </Link>
          <Link href="/guides/downtown-condo-buildings-compared" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg mb-2">Compare buildings</h2>
            <p className="text-slate-600 text-sm">Juhl, Soho, Newport, Ogden, and Midtown side by side</p>
          </Link>
          <Link href="/midtown-las-vegas" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg mb-2">About Midtown</h2>
            <p className="text-slate-600 text-sm">North of Charleston — Shop, Dine, Live, Stay, Events</p>
          </Link>
        </section>
        <section className="mt-16">
          <PageFAQ faqs={faqs} title="Midtown Condos for Sale — FAQs" />
        </section>
        <div className="mt-12 text-center">
          <CalendlyLink text="Schedule a Midtown Condo Tour" variant="primary" />
        </div>
      </div>
    </>
  )
}
