import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { CalendlyLink } from '@/app/components/calendly-link'
import { RealScoutSection } from '@/app/components/realscout-section'

export const metadata: Metadata = {
  title: 'KJ\'s Restaurant | Midtown Las Vegas at The English Hotel',
  description:
    'KJ\'s Restaurant at The English Hotel, 921 S Main St — lobster, oysters, prime steaks, and sports-bar energy in the Las Vegas Arts District. Near The English Residences.',
  keywords: ['KJs Restaurant Las Vegas', 'English Hotel dining', 'Midtown restaurants', 'Arts District food'],
  alternates: { canonical: 'https://www.midtownlasvegascondos.com/neighborhood/kjs-restaurant' },
}

const faqs = [
  {
    question: 'Where is KJ\'s Restaurant located?',
    answer: 'KJ\'s Restaurant is at The English Hotel, 921 S Main St, Las Vegas, NV 89101 — in Midtown at the Arts District.',
  },
  {
    question: 'What are KJ\'s hours?',
    answer: 'Monday–Thursday 11:00 AM–9:00 PM; Friday 11:00 AM–12:00 AM; Saturday 10:00 AM–12:00 AM; Sunday 10:00 AM–9:00 PM.',
  },
  {
    question: 'Can English Residences owners walk to KJ\'s?',
    answer: 'Yes — KJ\'s is at The English Hotel, directly adjacent to The English Residences in Midtown.',
  },
]

export default function KjsRestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
        <PageFAQSchema faqs={faqs} />

        <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">KJ&apos;s Restaurant</h1>
            <p className="text-xl text-white/90">At The English Hotel — Midtown Las Vegas</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { name: 'Home', url: '/' },
              { name: 'Neighborhood', url: '/neighborhood' },
              { name: 'KJ\'s Restaurant', url: '/neighborhood/kjs-restaurant' },
            ]}
          />

          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              KJ&apos;s at The English Hotel fits right into the Arts District: a little polished, a little playful, and always lively.
              The table fills with lobster, oysters, prime steaks, and the kind of food that deserves another round of drinks.
              Add a big game on the screens and the whole place takes on a celebratory mood.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Location & Hours</h2>
            <p>
              <strong>Address:</strong> 921 S Main St, Las Vegas, NV 89101<br />
              <strong>Phone:</strong>{' '}
              <a href="tel:7252051600" className="text-slate-900 font-semibold">(725) 205-1600</a><br />
              <strong>Website:</strong>{' '}
              <a href="https://kjslv.com/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold">
                kjslv.com
              </a>
            </p>
            <ul>
              <li>Monday – Thursday: 11:00 AM – 9:00 PM</li>
              <li>Friday: 11:00 AM – 12:00 AM</li>
              <li>Saturday: 10:00 AM – 12:00 AM</li>
              <li>Sunday: 10:00 AM – 9:00 PM</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900">Live Steps Away</h2>
            <p>
              Residents at{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                The English Residences
              </Link>
              {' '}enjoy walkable access to KJ&apos;s and the full Midtown dining scene. Contact Dr. Jan Duffy at (702) 500-1980
              to explore ownership in the Arts District.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <RealScoutSection
          listingsTitle="Homes Near KJ's & The English Hotel"
          listingsDescription="Walk to dining at KJ's from The English Residences and nearby Arts District condos."
          propertyTypes="Condo"
        />

        <section className="py-16 px-4 bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Dine Local, Live Local</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Midtown puts KJ&apos;s, Midtown Plaza, and First Friday at your doorstep.
          </p>
          <CalendlyLink text="Tour The English Residences" variant="primary" />
        </section>
    </div>
  )
}
