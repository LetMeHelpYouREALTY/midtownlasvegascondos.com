import Link from 'next/link'
import { Metadata } from 'next'
import { CalendlyLink } from '../components/calendly-link'
import { Breadcrumb } from '../components/breadcrumb'
import { MIDTOWN_NEWS } from '@/lib/midtown-content/news-data'
import { RealScoutSection } from '@/app/components/realscout-section'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas News & Updates | Arts District Development',
  description:
    'Stay updated on the latest Midtown Las Vegas news, developments, and neighborhood updates. From Plaza Tower opening to Arts District growth and community events.',
  keywords: [
    'Midtown Las Vegas news',
    'Arts District development',
    'Plaza Tower Las Vegas',
    'Midtown updates',
    'Las Vegas Arts District news',
    'Midtown real estate news',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Midtown Las Vegas Condos',
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/news',
  },
  openGraph: {
    title: 'Midtown Las Vegas News & Updates',
    description: 'Stay updated on the latest Midtown Las Vegas news and developments.',
    type: 'website',
    url: 'https://www.midtownvegascondos.com/news',
  },
}

export default function NewsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'News', url: '/news' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Midtown News
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Stay updated on the latest developments, events, and stories from 
            Las Vegas's most dynamic neighborhood.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From new restaurant openings and property developments to cultural milestones and community achievements, discover what's happening in Midtown.
          </p>
        </div>
      </section>

      {/* News Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="prose prose-lg text-slate-600 space-y-4 mb-12">
          <p>
            Staying informed about Midtown developments, new business openings, cultural events, and real estate market trends helps current 
            and prospective residents make informed decisions about this rapidly evolving neighborhood. Our news section covers everything from 
            major infrastructure projects and new residential developments to gallery openings, restaurant debuts, and community initiatives that 
            shape Midtown's character. The Arts District's momentum shows no signs of slowing, with monthly announcements of new businesses, 
            cultural programming expansions, and real estate projects that continue positioning Midtown as Las Vegas's premier urban neighborhood.
          </p>
          <p>
            Recent headlines demonstrate the neighborhood's trajectory. The Plaza Tower's 2025 opening adds significant residential inventory and 
            retail space, expanding Midtown's footprint while maintaining its walkable scale. The{' '}
            <Link href="/neighborhood/run-club" className="text-slate-900 font-semibold hover:underline">
              Run Club's
            </Link>
            {' '}growth to over 200 members illustrates 
            community engagement beyond{' '}
            <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
              First Friday
            </Link>
            , creating year-round social infrastructure that strengthens neighborhood bonds. CNN's recognition 
            of the Arts District as "the most exciting neighborhood" validates what locals have known for years—Midtown offers authentic urban culture 
            that rivals established arts districts in larger cities.
          </p>
        </div>
        
        <h2 className="text-4xl font-bold text-slate-900 mb-6 mt-12">Why Midtown News Matters</h2>
        <div className="prose prose-lg text-slate-600 space-y-6 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real Estate Market Intelligence</h3>
            <p className="mb-3">
              For prospective residents and investors, monitoring Midtown news provides valuable market intelligence.{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              {' '}attendance records 
              signal growing awareness and visitation, potentially supporting retail businesses and property values. New residential developments indicate 
              developer confidence and expanding inventory. Restaurant openings suggest economic vitality and consumer demand.{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                English Residences
              </Link>
              {' '}availability represents rare opportunities in the condo-hotel market. Collectively, these news items paint a picture of neighborhood health 
              and trajectory, helping buyers time purchases and understand whether Midtown's growth phase continues or stabilizes.
            </p>
            <p>
              Property value trends in Midtown reflect the neighborhood's evolution. Since 2015, average property values have increased by 45%, 
              significantly outpacing Las Vegas's overall market. This appreciation reflects the area's transformation from industrial zone to 
              cultural destination, with ongoing development continuing to support property values. New projects like the Plaza Tower bring 
              modern amenities and luxury finishes while preserving the neighborhood's artistic character, attracting both residents and investors 
              who appreciate Midtown's unique combination of culture and convenience.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Community and Culture Updates</h3>
            <p className="mb-3">
              Beyond real estate implications, Midtown news keeps residents connected to their community. Learn about upcoming{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              {' '}themes, 
              discover new businesses before they officially open, follow infrastructure improvements that enhance walkability, and celebrate community 
              achievements like marathon participation or cultural recognition. This information transforms casual residents into engaged community members 
              who actively participate in shaping Midtown's future.
            </p>
            <p>
              The neighborhood's cultural programming continues to expand, with new galleries, performance venues, and community spaces opening regularly. 
              These additions enhance Midtown's appeal as a cultural destination while providing residents with diverse entertainment and engagement 
              opportunities. From{' '}
              <Link href="/neighborhood/run-club" className="text-slate-900 font-semibold hover:underline">
                running clubs
              </Link>
              {' '}to art workshops, Midtown offers year-round activities that build community 
              connections beyond the monthly{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              {' '}celebration.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Culinary Scene Evolution</h3>
            <p className="mb-3">
              New restaurant announcements particularly excite residents and food enthusiasts. Midtown's culinary scene evolves constantly, with 
              chef-driven concepts, ethnic cuisines, and specialty cafes filling former warehouse spaces with innovative dining experiences. Unlike 
              the Strip's corporate restaurant groups, Midtown prioritizes locally-owned establishments operated by passionate owners who live in or 
              near the neighborhood. This local ownership creates authentic experiences and personal connections impossible at chain restaurants, while 
              supporting the independent businesses that define Midtown's character.
            </p>
            <p>
              The{' '}
              <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                Pepper Club
              </Link>
              {' '}at{' '}
              <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                The English Hotel
              </Link>
              {' '}exemplifies Midtown's culinary excellence, offering award-winning dining that attracts visitors from across Las Vegas. Meanwhile, 
              new openings in{' '}
              <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                Midtown Plaza
              </Link>
              {' '}continue to diversify the neighborhood's dining options, from casual cafes to upscale restaurants. These culinary developments 
              enhance Midtown's appeal as a destination while providing residents with convenient, high-quality dining options within walking distance.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Staying Informed</h3>
            <p className="mb-3">
              Check this section regularly for updates, or contact Dr. Jan at (702) 500-1980 for insider perspective on developments affecting 
              property values and neighborhood character. The pace of change in Midtown means monthly check-ins reveal new developments, while 
              annual reviews showcase remarkable transformation that positions the neighborhood as one of Las Vegas's fastest-appreciating real 
              estate markets.
            </p>
            <p>
              Dr. Jan Duffy provides comprehensive market analysis and neighborhood insights, helping clients understand how news developments 
              impact property values and lifestyle opportunities. Her expertise extends beyond current listings to future developments, market 
              trends, and neighborhood evolution, ensuring clients make informed decisions based on complete information. Whether you're buying, 
              selling, or investing, staying current with Midtown news helps you navigate the market with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href={`/news/${MIDTOWN_NEWS[0].slug}`} className="block bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden hover:opacity-95 transition-opacity">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video md:aspect-auto bg-slate-700" role="img" aria-label="Midtown Las Vegas Arts District development news">
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Featured News
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 w-fit">
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {MIDTOWN_NEWS[0].title}
              </h2>
              <p className="text-white/80 text-sm mb-4">{MIDTOWN_NEWS[0].datePublished}</p>
              <p className="text-lg text-white/90 leading-relaxed">
                {MIDTOWN_NEWS[0].description}
              </p>
              <span className="mt-4 text-white font-semibold">Read full article →</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Midtown News Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Midtown News & Updates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MIDTOWN_NEWS.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="block bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500">{article.datePublished}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RealScoutSection
        listingsTitle="Invest in Midtown's Future"
        listingsDescription="See available Arts District properties as Midtown continues to evolve."
      />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Midtown's Growth
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Dr. Jan to learn about investment and living opportunities in Las Vegas's most exciting neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
            <a
              href="tel:7025001980"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1980
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

