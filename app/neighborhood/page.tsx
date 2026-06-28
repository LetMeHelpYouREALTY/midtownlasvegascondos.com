import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { CalendlyLink } from '@/app/components/calendly-link'
import { MIDTOWN_EVENTS } from '@/lib/midtown-content/events-data'
import { RealScoutSection } from '@/app/components/realscout-section'
import { SitePersonaBanner } from '@/app/components/site-persona-banner'
import { AgentByline } from '@/app/components/agent-byline'
import { OFFICIAL_MIDTOWN_SITE, REAL_ESTATE_SITE } from '@/lib/site-persona'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Neighborhood Guide | Buyer\'s Guide by Dr. Jan Duffy',
  description:
    'A real estate buyer\'s guide to Midtown Las Vegas — English Residences, Midtown Plaza, First Friday, and walkable Arts District living. Call (702) 500-1980.',
  keywords: [
    'Midtown Las Vegas neighborhood',
    'Arts District places',
    'English Residences',
    'Midtown Plaza',
    'walkable Las Vegas',
  ],
  alternates: { canonical: 'https://www.midtownlasvegascondos.com/neighborhood' },
}

const places = [
  { name: 'The English Residences', href: '/neighborhood/english-residences', description: 'Luxury condo-hotel ownership in the Arts District' },
  { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza', description: 'Walkable dining, shopping, and community hub' },
  { name: 'The English Hotel', href: '/neighborhood/english-hotel', description: 'Boutique hotel at 921 S Main St' },
  { name: 'KJ\'s Restaurant', href: '/neighborhood/kjs-restaurant', description: 'Seafood, steaks, and sports-bar dining' },
  { name: 'The Pepper Club', href: '/neighborhood/pepper-club', description: 'Chef-driven dining at The English Hotel' },
  { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district', description: '18b galleries, murals, and culture' },
  { name: 'First Fridays Las Vegas', href: '/neighborhood/first-fridays', description: 'Monthly art festival — largest in the Southwest' },
  { name: 'Midtown Run Club', href: '/neighborhood/run-club', description: 'Community running at 921 S Main St' },
  { name: 'EV Vehicle Program', href: '/neighborhood/ev-program', description: 'Electric vehicle amenities for residents' },
]

const categories = [
  { name: 'Dine', href: '/midtown/dine' },
  { name: 'Shop', href: '/midtown/shop' },
  { name: 'Stay', href: '/midtown/stay' },
  { name: 'Live', href: '/midtown/live' },
  { name: 'Things to Do', href: '/midtown/things-to-do-in-las-vegas' },
  { name: 'Art Events', href: '/midtown/art' },
  { name: 'Music Events', href: '/midtown/music' },
]

const faqs = [
  {
    question: 'Where is Midtown Las Vegas?',
    answer: 'Midtown is the new neighborhood north of Charleston in the Las Vegas Arts District (18b), offering walkable access to galleries, locally-owned restaurants, and The English Residences at 921 S Main St.',
  },
  {
    question: 'What is there to do in Midtown?',
    answer: 'First Friday art walks, Market in the Alley, dining at KJ\'s and Midtown Plaza, the Run Club, gallery walks, and festivals throughout the year — all within walking distance.',
  },
  {
    question: 'Who sells condos in Midtown Las Vegas?',
    answer: 'Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, License S.0197614.LLC. Call (702) 500-1980 for The English Residences.',
  },
]

export default function NeighborhoodHubPage() {
  const upcomingEvents = MIDTOWN_EVENTS.filter((e) => e.slug.startsWith('first-friday-')).slice(-4)

  return (
    <div className="min-h-screen bg-white">
      <PageFAQSchema faqs={faqs} />

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-3">
            {REAL_ESTATE_SITE.shortName}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Midtown Neighborhood Guide</h1>
          <p className="text-xl text-white/90">
            What homebuyers and investors should know about living near the Arts District — north of Charleston
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Neighborhood', url: '/neighborhood' }]} />

        <SitePersonaBanner variant="neighborhood" />
        <AgentByline />

        <div className="prose prose-lg max-w-none text-slate-600 mb-16">
          <p>
            Midtown at the Arts District is one of Las Vegas&apos;s most walkable urban cores — galleries, locally owned restaurants,
            and new residential options north of Charleston. {REAL_ESTATE_SITE.agentName} helps buyers evaluate how places like The English
            Residences, Midtown Plaza, and nearby events fit into everyday life here. For official neighborhood programming and the
            events calendar, visit{' '}
            <a
              href={OFFICIAL_MIDTOWN_SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-900 hover:underline"
            >
              {OFFICIAL_MIDTOWN_SITE.url.replace('https://', '')}
            </a>.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Midtown Places</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {places.map((place) => (
            <Link
              key={place.href}
              href={place.href}
              className="block p-6 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{place.name}</h3>
              <p className="text-slate-600 text-sm">{place.description}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Explore by Category</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="px-5 py-2 bg-slate-100 text-slate-800 font-semibold rounded-full hover:bg-slate-200 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-8">Upcoming First Fridays</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {upcomingEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="block p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-slate-900">{event.title.split('|')[0].trim()}</h3>
              <p className="text-sm text-slate-600 mt-1">{event.startTime} – {event.endTime}</p>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <RealScoutSection
        listingsTitle="Own in Midtown Las Vegas"
        listingsDescription="The English Residences and Arts District condos — walk to everything in the neighborhood hub."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Own in Midtown</h2>
          <p className="text-xl text-white/90 mb-8">
            The English Residences — stay when you want, earn when you&apos;re away. Contact Dr. Jan Duffy.
          </p>
          <CalendlyLink text="Schedule Your Tour" variant="primary" />
        </div>
      </section>
    </div>
  )
}
