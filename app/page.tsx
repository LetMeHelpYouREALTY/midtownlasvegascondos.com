import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Newsletter } from './components/newsletter'
import { UpcomingEvents } from './components/upcoming-events'
import { RealScoutSearch } from './components/realscout-search'
import { RealScoutListings } from './components/realscout-listings'
import { PageFAQ } from './components/page-faq'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet me
            <br />
            in Midtown.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover luxury living in the heart of Las Vegas Arts District
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </section>

      {/* Featured Homes $500K-$600K */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Featured Homes in Midtown"
            description="Discover beautiful single-family homes in your price range"
            priceMin="500000"
            priceMax="600000"
            sortOrder="PRICE_LOW"
            propertyTypes=",SFR"
            listingStatus="For Sale"
            limit="6"
          />
        </div>
      </section>

      {/* Property Search Widget */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Find Your Midtown Home
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Search available properties in the Arts District
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <RealScoutSearch />
        </div>
      </section>

      {/* Midtown at the Arts District */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Midtown at the Arts District
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Say hello to the most rapidly evolving cultural center in the heart of Las Vegas. 
            This is where you can enjoy a walkable neighborhood with art galleries and privately 
            owned restaurants and now residences at Midtown.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Midtown represents a unique convergence of urban sophistication and creative energy. Unlike the tourist-focused Strip, 
            Midtown offers authentic Las Vegas living where residents become part of a thriving artistic community. The neighborhood 
            features converted warehouses housing contemporary art galleries, chef-driven restaurants serving innovative cuisine, 
            and residential spaces designed for modern urban lifestyles. With walkable streets, monthly cultural events, and a genuine 
            sense of community, Midtown has emerged as the premier destination for those seeking an authentic Las Vegas experience 
            beyond the casinos and resorts.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {['Shop', 'Dine', 'Live', 'Stay', 'Events'].map((category) => (
            <Link
              key={category}
              href={`#${category.toLowerCase()}`}
              className="aspect-square bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg flex items-center justify-center group"
            >
              <span className="text-2xl font-semibold text-slate-900 group-hover:scale-110 transition-transform">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Where is Midtown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                The Arts District <span className="italic">North of Charleston</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Where is Midtown?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Emerging is Midtown, the new neighborhood just north of Charleston, offering 
                the perfect homebase to fully experience the{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Las Vegas Arts District
                </Link>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Located between Charleston Boulevard and the Fremont East Entertainment District, Midtown encompasses 
                approximately 18 blocks of vibrant urban development. This strategic location provides residents with 
                easy access to downtown Las Vegas, the Las Vegas Strip, and McCarran International Airport, while 
                maintaining the neighborhood's distinct character. The area is anchored by landmarks like The English 
                Hotel, Midtown Plaza, and over 30 art galleries that have transformed former industrial spaces into 
                cultural destinations. With new residential developments, improved infrastructure, and a growing roster 
                of local businesses, Midtown continues to evolve while staying true to its artistic roots.
              </p>
            </div>
            <div className="aspect-video bg-slate-200 rounded-lg">
              {/* Map or image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey of Transformation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Constantly Evolving but Always True to Itself
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Journey of Transformation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            From its origins as an industrial hub to the art center of Sin City, change is 
            baked into the Arts District identity. Witness the transformation of a neighborhood 
            that continues to redefine art, design and culture.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The Arts District's evolution began in the late 1990s when artists and creative entrepreneurs discovered 
            the potential in abandoned warehouses and industrial buildings south of downtown. What started as a grassroots 
            movement has blossomed into a nationally recognized arts destination. The neighborhood gained momentum with the 
            establishment of First Friday in 2002, which has since grown into the largest monthly art event in the Southwest, 
            attracting over 10,000 visitors each month. Today, Midtown builds on this legacy, offering residential opportunities 
            that allow residents to live within walking distance of world-class galleries, chef-driven restaurants, and cultural 
            institutions like the Majestic Repertory Theatre.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
          <div className="space-y-12">
            {[
              { year: '1997', event: 'Wes Myles opens the Arts Factory' },
              { year: '1999', event: 'Mayor Oscar Goodman elected' },
              { year: '2002', event: 'Renamed the Las Vegas Arts District', event2: 'Cindy Funkhouser founds First Friday', link: '/neighborhood/first-fridays' },
              { year: '2009', event: '18b Arts District sign installed on Casino Center Blvd.' },
              { year: '2014', event: 'Anthony Bourdain highlights Makers & Finders on "Parts Unknown"' },
              { year: '2016', event: 'Majestic Repertory Theatre Opens' },
              { year: '2022', event: 'The English Hotel Opens', event2: 'The Pepper Club Opens', link: '/neighborhood/english-hotel', link2: '/neighborhood/pepper-club' },
              { year: '2024', event: 'CNN called the Arts District "the most exciting neighborhood" in Las Vegas' },
              { year: '2025', event: 'The Plaza Tower will open' },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{item.year}</div>
                    <p className="text-slate-600">
                      {item.link ? (
                        <Link href={item.link} className="text-slate-900 font-semibold hover:underline">
                          {item.event}
                        </Link>
                      ) : (
                        item.event
                      )}
                    </p>
                    {item.event2 && (
                      <p className="text-slate-600 mt-2">
                        {item.link2 ? (
                          <Link href={item.link2} className="text-slate-900 font-semibold hover:underline">
                            {item.event2}
                          </Link>
                        ) : (
                          item.event2
                        )}
                      </p>
                    )}
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Featured Midtown Properties"
            description="Explore luxury condos and homes in the heart of the Arts District"
            priceMin="300000"
            priceMax="2000000"
            sortOrder="PRICE_LOW"
            propertyTypes=",CONDO,SFR"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay in the know with what's happening in Midtown. From{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                art walks
              </Link>{' '}
              and food festivals to pop-up markets and live performances, there's always something 
              exciting to discover.{' '}
              <Link href="/events" className="text-slate-900 font-semibold hover:underline">
                View all events
              </Link>.
            </p>
          </div>
          <UpcomingEvents />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <PageFAQ
            faqs={[
              {
                question: 'What is Midtown Las Vegas?',
                answer:
                  'Midtown is the emerging neighborhood just north of Charleston Boulevard in the heart of the Las Vegas Arts District. It offers walkable access to galleries, restaurants, The English Hotel, and vibrant cultural events like First Friday.',
              },
              {
                question: 'What types of properties are available in Midtown?',
                answer:
                  'Midtown offers luxury condos, condo-hotels (The English Residences), townhouses, and single-family homes ranging from $250,000 to $2,000,000+. Browse available properties at drjanduffy.realscout.com or call Dr. Jan at (702) 500-1955.',
              },
              {
                question: 'Why should I buy in the Arts District?',
                answer:
                  'CNN called it "the most exciting neighborhood" in Las Vegas. You get walkable urban living, monthly First Friday events, 30+ art galleries, locally-owned restaurants, and a vibrant creative community - all while being close to the Strip and downtown.',
              },
              {
                question: 'How do I get started?',
                answer:
                  'Contact Dr. Jan Duffy at (702) 500-1955 or DrJanSells@MidtownLasVegasCondos.com. She specializes in Midtown properties and can schedule a personal tour, show you available homes, and guide you through the entire buying process.',
              },
            ]}
          />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-slate-900 hover:text-slate-700 font-semibold underline"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get the latest Midtown happenings in your inbox
          </h2>
          <Newsletter />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600">
                921 S Main St<br />
                Las Vegas, NV 89101
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">
                <a href="tel:7025001955" className="hover:text-slate-900 transition-colors">
                  (702) 500-1955
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:DrJanSells@MidtownLasVegasCondos.com" className="hover:text-slate-900 transition-colors">
                  DrJanSells@MidtownLasVegasCondos.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600">
                Mon-Fri: 9 am – 5 pm<br />
                Sat/Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
