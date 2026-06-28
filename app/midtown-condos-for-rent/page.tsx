import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { PageFAQ } from '../components/page-faq'
import { PageFAQSchema } from '../components/page-faq-schema'
import { CalendlyLink } from '../components/calendly-link'
import { absoluteUrl, siteConfig } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

const PATH = '/midtown-condos-for-rent'

export const metadata: Metadata = {
  title: 'Midtown Condos Las Vegas for Rent | Arts District Apartments',
  description:
    'Looking for Midtown condos or apartments for rent in Las Vegas Arts District? Rental options, new apartment inventory, and when buying at Midtown may beat renting. Call (702) 500-1980.',
  keywords: [
    'Midtown condos las vegas for rent',
    'Arts District apartments Las Vegas',
    'Midtown apartments for rent',
    'downtown Las Vegas rentals',
  ],
  alternates: { canonical: absoluteUrl(PATH) },
}

const faqs = [
  {
    question: 'Can I rent a condo in Midtown Las Vegas?',
    answer:
      'Some Midtown and Arts District owners lease condos on the open market, and Phase One of the Midtown development includes apartment units alongside for-sale condos. Inventory changes frequently — contact Dr. Jan Duffy for current rental availability and new apartment pre-leasing updates.',
  },
  {
    question: 'Are there new apartments in the Arts District Las Vegas?',
    answer:
      'Yes. The Midtown mixed-use project north of Charleston adds hundreds of residential units — a mix of apartments and condos around The English Hotel. See our new apartments guide for Phase One details.',
  },
  {
    question: 'Is it better to rent or buy in Midtown?',
    answer:
      'If you plan to stay 3+ years and total monthly cost (mortgage + HOA) beats rent, buying builds equity in one of Las Vegas\'s most walkable neighborhoods. Dr. Jan offers rent-vs-buy analysis for Arts District buyers.',
  },
]

export default function MidtownCondosForRentPage() {
  return (
    <>
      <PageFAQSchema faqs={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Midtown Condos for Rent', url: PATH }]} />
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Midtown Condos &amp; Apartments for Rent</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl">
          Searching &quot;Midtown condos Las Vegas for rent&quot; or Arts District apartments? Here is how rental
          inventory works in {midtownAuthority.officialName} — and when buying a walkable condo may make more sense.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12 max-w-3xl">
          <p className="text-slate-700">
            <strong>Dr. Jan Duffy specializes in sales</strong>, not property management. For rentals, she can point
            you to current owner-leased units and new Midtown apartment pre-leasing — or help you compare{' '}
            <Link href="/midtown-condos-for-sale" className="font-semibold underline">
              condos for sale
            </Link>{' '}
            if you are ready to buy.
          </p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Rental options near Midtown</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Owner-leased condos in Juhl, Soho Lofts, Newport, and established Arts District towers</li>
            <li>New apartment units in the Midtown Phase One development ({midtownAuthority.phaseOne.mix})</li>
            <li>Extended-stay and hotel residences at The English Hotel / English Residences</li>
          </ul>
        </section>
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/guides/new-apartments-arts-district-las-vegas" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg mb-2">New apartments Arts District</h2>
            <p className="text-slate-600 text-sm">Midtown Phase One — apartments, condos, and mixed-use north of Charleston</p>
          </Link>
          <Link href="/guides/arts-district-apartments-las-vegas" className="border rounded-xl p-6 hover:shadow-md">
            <h2 className="font-bold text-lg mb-2">Apartments vs condos</h2>
            <p className="text-slate-600 text-sm">Which fits your timeline and Walk Score ~{siteConfig.walkScore} lifestyle</p>
          </Link>
        </section>
        <PageFAQ faqs={faqs} title="Midtown Rentals — FAQs" />
        <div className="mt-12 text-center">
          <CalendlyLink text="Discuss Rent vs Buy in Midtown" variant="primary" />
          <p className="mt-4 text-slate-500 text-sm">
            {siteConfig.phone} · {siteConfig.email}
          </p>
        </div>
      </div>
    </>
  )
}
