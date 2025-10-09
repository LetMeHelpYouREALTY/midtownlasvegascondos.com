import Link from 'next/link'
import { RealScoutSearch } from '@/app/components/realscout-search'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { PageFAQ } from '@/app/components/page-faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las Vegas Arts District | 18b Arts District Homes & Condos',
  description: 'CNN called it "the most exciting neighborhood" in Las Vegas. Find your home in the Arts District with galleries, restaurants, and First Friday. Call (702) 500-1955.',
  keywords: 'Las Vegas Arts District, 18b Arts District, downtown Las Vegas homes, First Friday Las Vegas, Arts District condos, creative Las Vegas neighborhood',
}

export default function ArtsDistrictPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Las Vegas Arts District
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Where creativity and culture converge in Downtown Las Vegas
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            The Most Exciting Neighborhood in Las Vegas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            CNN called the Arts District "the most exciting neighborhood" in Las Vegas, and 
            it's easy to see why. This 18-block cultural epicenter is home to galleries, 
            studios, vintage shops, and some of the city's best dining.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Art & Culture
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Over 30 galleries and art spaces', link: null },
                { text: 'Monthly First Friday art walk', link: '/neighborhood/first-fridays' },
                { text: 'Street art and murals throughout', link: null },
                { text: 'Artist studios and workshops', link: null },
                { text: 'Performance venues and theaters', link: null },
              ].map((item) => (
                <li key={item.text} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-slate-900 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-slate-700">
                    {item.link ? (
                      <Link href={item.link} className="text-slate-900 font-semibold hover:underline">
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Dining & Nightlife
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Locally-owned restaurants', link: '/neighborhood/midtown-plaza' },
                { text: 'Craft cocktail bars', link: null },
                { text: 'Coffee shops and cafes', link: null },
                { text: 'Food festivals and events', link: '/events' },
                { text: 'Late-night entertainment', link: '/neighborhood/pepper-club' },
              ].map((item) => (
                <li key={item.text} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-slate-900 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-slate-700">
                    {item.link ? (
                      <Link href={item.link} className="text-slate-900 font-semibold hover:underline">
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6">A Neighborhood Transformed</h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Once an industrial warehouse district, the Las Vegas Arts District has evolved 
            into the city's creative soul. Starting in the late 1990s, artists and entrepreneurs 
            began transforming abandoned buildings into galleries, studios, and unique businesses.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            Today, the 18b Arts District (named for the original Las Vegas township designation) 
            stands as a testament to community-driven urban renewal, attracting visitors from 
            around the world while maintaining its authentic, local character.
          </p>
        </div>

        {/* Visit Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Plan Your Visit
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Galleries</h3>
              <p className="text-slate-600">
                Explore contemporary and traditional art from local and international artists
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dining</h3>
              <p className="text-slate-600">
                Discover unique restaurants and cafes featuring diverse cuisines
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Events</h3>
              <p className="text-slate-600">
                Attend First Friday, art walks, and special cultural events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Arts District Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Arts District Properties"
            description="Live among galleries, restaurants, and creative spaces"
            priceMin="250000"
            priceMax="1500000"
            sortOrder="DATE_NEW"
            propertyTypes=",CONDO,SFR,TOWNHOUSE"
            limit="12"
          />
        </div>
      </section>

      {/* Property Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Search Arts District Homes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse all available properties in the most exciting neighborhood in Las Vegas
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <PageFAQ
            title="Arts District Living FAQ"
            faqs={[
              {
                question: 'Why is the Arts District called "18b"?',
                answer:
                  'The "18b" designation comes from the original Las Vegas township plat. The area was Township 18, Block B. This historic designation has become a beloved nickname for the neighborhood.',
              },
              {
                question: 'What happens during First Friday?',
                answer:
                  'On the first Friday of every month from 5-11 PM, the Arts District transforms into a massive street festival with 30+ galleries opening their doors, live music stages, food trucks, artisan markets, and thousands of visitors.',
              },
              {
                question: 'How walkable is the neighborhood?',
                answer:
                  'The Arts District is one of Las Vegas\'s most walkable neighborhoods. You can easily walk to galleries, restaurants, cafes, and shops. The entire 18-block district is designed for pedestrians.',
              },
              {
                question: 'What type of people live in the Arts District?',
                answer:
                  'The neighborhood attracts artists, creative professionals, young urban dwellers, and people who appreciate walkable urban living. It\'s a diverse community of locals who love authentic Las Vegas culture.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Make the Arts District Your Home
          </h2>
          <p className="text-xl text-white/90 mb-8">
            CNN called it "the most exciting neighborhood" in Las Vegas. Contact Dr. Jan to discover 
            luxury living in the heart of the Arts District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Start Your Search
            </a>
            <a
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

