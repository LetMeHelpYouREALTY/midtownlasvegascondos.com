import Link from 'next/link'
import { RealScoutSearch } from '@/app/components/realscout-search'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { PageFAQ } from '@/app/components/page-faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las Vegas Arts District | 18b Arts District Homes & Condos',
  description: 'CNN called it "the most exciting neighborhood" in Las Vegas. Find your home in the Arts District with galleries, restaurants, and First Friday. Call (702) 500-1955.',
  keywords: 'Las Vegas Arts District, 18b Arts District, downtown Las Vegas homes, First Friday Las Vegas, Arts District condos, creative Las Vegas neighborhood',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/arts-district',
  },
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

        {/* Living in the Arts District */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Living in the Arts District</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Daily life in the Arts District revolves around walkability and cultural immersion. Residents start mornings 
            at local coffee roasters like PublicUs or Makers & Finders, walk to work in downtown Las Vegas or nearby offices, 
            and return home to explore new gallery openings, grab dinner at neighborhood restaurants, or simply enjoy the urban 
            energy. Unlike suburban Las Vegas, where cars dominate every errand, Arts District residents genuinely walk to 
            accomplish daily tasks—a rarity in car-centric Nevada.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            The demographic mix includes artists and creative professionals drawn to the cultural scene, young professionals 
            seeking authentic urban living, empty-nesters downsizing from suburban homes, and investors recognizing the 
            neighborhood's appreciation potential. This diversity creates vibrant street life where you're as likely to encounter 
            gallery owners, tech entrepreneurs, retirees, and visiting tourists all enjoying the same sidewalk café.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Property values reflect the neighborhood's transformation and continuing demand. Condos purchased in 2015 for $200,000 
            now sell for $350,000+, while newer developments command $400-$800 per square foot. First-time visitors often compare 
            the vibe to Portland's Pearl District, Austin's East Sixth Street, or Denver's RiNo—walkable arts neighborhoods with 
            authentic character. For potential residents, the question isn't "Is the Arts District worth it?" but rather "Which 
            part of the Arts District fits my lifestyle best?" Whether you prioritize proximity to galleries, walkability to 
            dining, or investment potential near upcoming developments, Dr. Jan can help identify the perfect Arts District location 
            for your needs. Contact her today to explore your options and discover why CNN called this "the most exciting neighborhood" 
            in Las Vegas.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6">A Neighborhood Transformed</h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Once an industrial warehouse district, the Las Vegas Arts District has evolved 
            into the city's creative soul. Starting in the late 1990s, artists and entrepreneurs 
            began transforming abandoned buildings into galleries, studios, and unique businesses.
          </p>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Today, the 18b Arts District (named for the original Las Vegas township designation) 
            stands as a testament to community-driven urban renewal, attracting visitors from 
            around the world while maintaining its authentic, local character.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Industrial Beginnings</h3>
              <p className="text-base text-white/90 leading-relaxed mb-3">
                Before becoming Las Vegas's cultural heart, the Arts District functioned as an industrial zone serving the city's 
                manufacturing and distribution needs. Warehouses and factories dominated the landscape, with minimal residential development. 
                The area's transformation began when visionary artists like Wes Myles recognized the potential in these abandoned structures, 
                seeing not dilapidated buildings but blank canvases for creative expression.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                The Arts Factory, opened in 1997, became a pioneering example of adaptive reuse, demonstrating how industrial spaces could 
                be repurposed for creative industries. Artists and entrepreneurs followed, drawn by affordable space and the opportunity to 
                build something new. This grassroots movement gained momentum throughout the late 1990s and early 2000s, as more creatives 
                discovered the area's potential. The neighborhood's transformation wasn't driven by top-down planning but by organic growth, 
                as artists, gallery owners, and small business owners invested in the community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The First Friday Revolution</h3>
              <p className="text-base text-white/90 leading-relaxed mb-3">
                The establishment of{' '}
                <Link href="/neighborhood/first-fridays" className="text-white font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}in 2002 marked a turning point in the Arts District's evolution. Founded by Cindy Funkhouser, this monthly 
                event transformed the neighborhood from a quiet creative enclave into a vibrant cultural destination. What began as a small 
                gathering of artists and art enthusiasts has grown into the largest monthly art event in the Southwest, regularly attracting 
                over 10,000 visitors.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                First Friday created a regular platform for artists to showcase their work, galleries to attract new visitors, and the 
                community to come together in celebration of creativity. The event's success demonstrated the neighborhood's potential as a 
                cultural destination, drawing attention from developers, investors, and city planners. This recognition led to increased 
                investment in infrastructure, new business development, and eventually, residential projects that would allow people to live 
                within walking distance of this cultural hub.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Modern Development and Recognition</h3>
              <p className="text-base text-white/90 leading-relaxed mb-3">
                The 2010s marked a new phase in the Arts District's evolution, as residential development began to complement the existing 
                commercial and creative spaces. Projects like{' '}
                <Link href="/neighborhood/english-residences" className="text-white font-semibold hover:underline">
                  The English Residences
                </Link>
                {' '}demonstrated that luxury living could coexist with the neighborhood's artistic character. The opening of{' '}
                <Link href="/neighborhood/english-hotel" className="text-white font-semibold hover:underline">
                  The English Hotel
                </Link>
                {' '}in 2022 brought international attention to Midtown while maintaining the area's authentic character.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                CNN's 2024 recognition of the Arts District as "the most exciting neighborhood" in Las Vegas validated what locals had known 
                for years—Midtown offers authentic urban culture that rivals established arts districts in larger cities. Today, the neighborhood 
                continues to evolve, with new developments like the Plaza Tower scheduled to open in 2025, bringing modern amenities while 
                preserving the neighborhood's artistic identity.
              </p>
            </div>
          </div>
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

