import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutSection } from '../components/realscout-section'

export const metadata: Metadata = {
  title: 'Arts District Las Vegas Guide | Culture, Dining, Real Estate',
  description:
    'Comprehensive guide to the Las Vegas Arts District. History, culture, events, dining, galleries, and real estate opportunities in downtown Las Vegas\'s most exciting neighborhood.',
  keywords: [
    'Arts District Las Vegas',
    'Arts District living',
    'downtown Vegas real estate',
    '18b Arts District',
    'First Friday Las Vegas',
    'Las Vegas galleries',
  ],
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/arts-district-guide',
  },
}

export default function ArtsDistrictGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Arts District Guide', url: '/arts-district-guide' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Complete Guide to the Las Vegas Arts District
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl">
          Discover the history, culture, dining, galleries, and real estate opportunities in 
          Las Vegas's most exciting neighborhood. CNN called it "the most exciting neighborhood" 
          in Las Vegas.
        </p>

        {/* History Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            History of the Arts District
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Las Vegas Arts District, originally known as 18b (referring to the 18 blocks 
              that make up the district), began its transformation in the late 1990s. What started 
              as abandoned warehouses and industrial buildings south of downtown Las Vegas has 
              evolved into a nationally recognized arts destination.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Visionary artists like Wes Myles recognized the potential in these structures, 
              seeing blank canvases for creative expression rather than dilapidated buildings. 
              The Arts Factory, opened in 1997, became a pioneering example of adaptive reuse, 
              demonstrating how industrial spaces could be repurposed for creative industries.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              The First Friday Revolution
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The establishment of{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>{' '}
              in 2002 by Cindy Funkhouser marked a turning point. This monthly event transformed 
              the neighborhood from a quiet creative enclave into a vibrant cultural destination, 
              regularly attracting over 10,000 visitors and putting the Arts District on the map.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Modern Development
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The 2010s brought residential development to complement existing commercial and 
              creative spaces. Projects like{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                The English Residences
              </Link>{' '}
              and{' '}
              <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                The English Hotel
              </Link>{' '}
              demonstrated that luxury living could coexist with the neighborhood's artistic 
              character, attracting professionals, empty-nesters, and investors.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Arts District Culture
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Art Galleries</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Arts District is home to over 30 art galleries and studios, showcasing 
                everything from contemporary fine art to street art and sculpture. The Arts 
                Factory houses multiple artist studios and exhibition spaces, while galleries 
                throughout the district feature rotating exhibitions by local and international 
                artists.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Street Art & Murals</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The district serves as an ever-changing outdoor gallery, with street art and 
                murals throughout showcasing local and international talent. These public art 
                installations contribute to the neighborhood's vibrant, creative atmosphere.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance Venues</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Majestic Repertory Theatre offers year-round programming, while pop-up 
                performance spaces throughout the district host live music, theater, and 
                dance performances. The neighborhood's creative energy extends beyond visual 
                arts into performance arts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Events</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Beyond First Friday, the Arts District hosts numerous community events including 
                pop-up markets, festivals, art walks, and cultural celebrations. These events 
                create regular opportunities for community gathering and cultural celebration.
              </p>
            </div>
          </div>
        </section>

        {/* Dining Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Dining in the Arts District
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Arts District dining scene features locally-owned restaurants that celebrate 
              Las Vegas's culinary diversity. From innovative fusion cuisine to traditional 
              comfort food with creative twists, the neighborhood offers diverse dining options.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Award-Winning Restaurants
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The{' '}
              <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                Pepper Club
              </Link>{' '}
              at The English Hotel has received national recognition for its innovative cuisine. 
              The restaurant exemplifies the district's commitment to culinary excellence, 
              combining local ingredients with creative techniques.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Midtown Plaza Dining
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                Midtown Plaza
              </Link>{' '}
              serves as a central dining destination, featuring a curated selection of locally-owned 
              restaurants. The plaza offers everything from casual cafes to fine dining, all within 
              a walkable setting.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Arts District Events
          </h2>
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              First Friday
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>{' '}
              is Las Vegas's largest monthly art event, held on the first Friday of every month 
              from 5 PM to 11 PM. The Arts District transforms into a vibrant street festival 
              with gallery openings, live music, food trucks, street performers, and artisan markets. 
              The event regularly draws over 10,000 visitors and has become a cornerstone of Las 
              Vegas culture.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Other Regular Events
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The district hosts numerous other events throughout the year, including art walks, 
              pop-up markets, food festivals, and cultural celebrations. These events contribute 
              to the neighborhood's vibrant, community-oriented atmosphere.
            </p>
          </div>
        </section>

        {/* Real Estate Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Real Estate Opportunities
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Arts District offers unique real estate opportunities for those seeking authentic 
              urban living. Property values have appreciated 45% since 2015, reflecting the 
              neighborhood's transformation and growing popularity.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Property Types Available
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The district offers luxury condos, condo-hotels, townhouses, and single-family 
              homes ranging from $250,000 to $2,000,000+. The{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                English Residences
              </Link>{' '}
              provide a unique condo-hotel model allowing owners to generate rental income when 
              not using their units.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Why Invest in the Arts District
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Arts District offers strong investment potential with consistent appreciation, 
              strong rental demand, and ongoing development. The neighborhood's cultural appeal 
              and walkability make it attractive to both residents and visitors, creating 
              opportunities for both long-term and short-term rental income.
            </p>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="mb-20">
          <RealScoutListings
            title="Arts District Homes for Sale"
            description="Discover available properties in the Las Vegas Arts District"
            priceMin="250000"
            priceMax="2000000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO,TC"
            listingStatus="For Sale"
          />
        </section>

        <RealScoutSection
          showListings={false}
          searchTitle="Search Arts District Homes"
          priceMin="250000"
          priceMax="2000000"
          className="bg-white mb-20"
        />

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Explore Arts District Real Estate
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to make the Arts District your home? Contact Dr. Jan Duffy to explore available 
            properties and discover the authentic Las Vegas living experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7025001980"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Call (702) 500-1980
            </a>
            <Link
              href="/midtown-real-estate"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

