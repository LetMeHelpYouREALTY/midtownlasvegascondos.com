import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Newsletter } from './components/newsletter'
import { UpcomingEvents } from './components/upcoming-events'
import { RealScoutSearch } from './components/realscout-search'
import { RealScoutListings } from './components/realscout-listings'
import { PageFAQ } from './components/page-faq'
import { CalendlyLink } from './components/calendly-link'

export const metadata: Metadata = {
  title: 'Luxury Midtown Las Vegas Condos | Arts District Real Estate | 702-500-1980',
  description:
    'Discover luxury condominium living in the heart of Las Vegas Arts District. Experience the vibrant culture, dining, and entertainment of Midtown. Contact us today at (702) 500-1980.',
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/midtown/blvd-aerial-rendering.jpg"
            alt="Aerial nighttime view of BLVD mixed-use complex in Midtown Las Vegas Arts District at 921 S Main Street showing retail, dining, entertainment spaces, and The English Hotel with vibrant urban lighting"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Luxury Midtown Las Vegas Condos
            <br />
            <span className="text-4xl md:text-6xl">Arts District Living Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover luxury living in the heart of Las Vegas Arts District
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
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
            priceMin="450000"
            priceMax="16000000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO"
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
          <RealScoutSearch priceMin="450000" priceMax="1000000" />
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
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Midtown represents a unique convergence of urban sophistication and creative energy. Unlike the tourist-focused Strip, 
            Midtown offers authentic Las Vegas living where residents become part of a thriving artistic community. The neighborhood 
            features converted warehouses housing contemporary art galleries, chef-driven restaurants serving innovative cuisine, 
            and residential spaces designed for modern urban lifestyles. With walkable streets, monthly cultural events, and a genuine 
            sense of community, Midtown has emerged as the premier destination for those seeking an authentic Las Vegas experience 
            beyond the casinos and resorts.
          </p>
          <div className="max-w-4xl mx-auto text-left mt-12 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Arts District Revolution</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                What began as a grassroots movement in the late 1990s has transformed into Las Vegas's most dynamic cultural destination. 
                The{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Las Vegas Arts District
                </Link>{' '}
                spans 18 blocks of creative energy, housing over 30 art galleries, studios, and performance venues. Artists and 
                entrepreneurs discovered the potential in abandoned warehouses and industrial buildings, transforming them into vibrant 
                cultural spaces. Today, these converted spaces attract visitors from around the world, drawn by the neighborhood's 
                authentic character and creative spirit.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The Arts District's growth accelerated with the establishment of{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}in 2002, which has become the largest monthly art event in the Southwest, drawing over 10,000 visitors each month. 
                This monthly celebration showcases the neighborhood's creative talent, featuring gallery openings, live music, food trucks, 
                street performers, and interactive art installations. The event has become a cornerstone of Las Vegas culture, demonstrating 
                the city's evolution beyond its entertainment reputation into a genuine cultural destination.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Living in the Heart of Culture</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Midtown residents enjoy unparalleled access to the Arts District's cultural offerings. Within walking distance, you'll find 
                world-class galleries like the{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Arts Factory
                </Link>
                , which houses multiple artist studios and exhibition spaces. The neighborhood's dining scene features locally-owned 
                restaurants that celebrate Las Vegas's culinary diversity, from innovative fusion cuisine to traditional comfort food with 
                creative twists. The{' '}
                <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                  Midtown Plaza
                </Link>{' '}
                serves as a central gathering space, offering a curated selection of dining, shopping, and entertainment options that 
                reflect the neighborhood's artistic character.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The residential experience in Midtown differs fundamentally from typical Las Vegas developments. Rather than isolated 
                communities accessible only by car, Midtown offers genuine walkability. Residents can stroll to breakfast at local cafes, 
                browse galleries during lunch breaks, enjoy dinner at chef-driven restaurants, and attend evening performances—all 
                without leaving the neighborhood. This lifestyle appeals to professionals seeking work-life balance, empty-nesters looking 
                for vibrant retirement communities, and young creatives drawn to the area's artistic energy. The neighborhood's mix of 
                residential and commercial spaces creates a 24/7 community where people live, work, and play in close proximity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Investment and Growth Potential</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Property values in Midtown have demonstrated consistent appreciation, with average increases of 45% since 2015. This growth 
                reflects the neighborhood's transformation from an industrial area to a sought-after residential and commercial destination. 
                The ongoing development of new residential projects, including{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  The English Residences
                </Link>
                {' '}and the upcoming Plaza Tower, signals continued investment in the area's future. These developments bring modern 
                amenities and luxury finishes while preserving the neighborhood's authentic character.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Investors recognize Midtown's potential for long-term appreciation and rental income. The neighborhood's proximity to 
                downtown Las Vegas and the Strip, combined with its unique cultural offerings, makes it attractive to both permanent 
                residents and short-term visitors. The English Residences condo-hotel model, for example, allows owners to generate 
                rental income when not using their units, providing an innovative approach to real estate investment. As Midtown continues 
                to evolve, early investors benefit from the area's growing reputation and increasing property values.
              </p>
            </div>
          </div>
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
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Located between Charleston Boulevard and the Fremont East Entertainment District, Midtown encompasses 
                approximately 18 blocks of vibrant urban development. This strategic location provides residents with 
                easy access to downtown Las Vegas, the Las Vegas Strip, and McCarran International Airport, while 
                maintaining the neighborhood's distinct character. The area is anchored by landmarks like{' '}
                <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                  The English Hotel
                </Link>
                ,{' '}
                <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                  Midtown Plaza
                </Link>
                , and over 30 art galleries that have transformed former industrial spaces into 
                cultural destinations. With new residential developments, improved infrastructure, and a growing roster 
                of local businesses, Midtown continues to evolve while staying true to its artistic roots.
              </p>
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Location Benefits</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-3">
                    Midtown's location offers unparalleled advantages for residents. Just minutes from downtown Las Vegas, 
                    the neighborhood provides easy access to the city's business district, government offices, and cultural 
                    institutions. The Las Vegas Strip is a short drive away, making it convenient for entertainment and 
                    dining options beyond the Arts District. McCarran International Airport is approximately 15 minutes 
                    by car, ideal for frequent travelers and business professionals.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    The proximity to major transportation routes makes Midtown accessible while maintaining its distinct 
                    neighborhood character. Unlike suburban developments that require long commutes, Midtown residents can 
                    walk to work, entertainment, and dining within the neighborhood itself. This walkability reduces 
                    transportation costs, improves quality of life, and creates a genuine sense of community that's rare 
                    in Las Vegas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Neighborhood Landmarks and Destinations</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-3">
                    The English Hotel at 921 S Main Street serves as a cornerstone of Midtown, offering luxury accommodations, 
                    the award-winning{' '}
                    <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                      Pepper Club restaurant
                    </Link>
                    , and{' '}
                    <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                      The English Residences
                    </Link>
                    {' '}condo-hotel units. Midtown Plaza functions as the neighborhood's commercial heart, featuring locally-owned 
                    restaurants, boutique shops, and gathering spaces. The Arts Factory, one of the district's first converted 
                    warehouse spaces, houses multiple galleries and artist studios, representing the neighborhood's creative 
                    transformation.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Beyond these major landmarks, Midtown features numerous smaller galleries, studios, and creative spaces 
                    that contribute to the neighborhood's artistic identity. Street art and murals throughout the district 
                    showcase local and international talent, creating an ever-changing outdoor gallery. Performance venues 
                    like the Majestic Repertory Theatre offer year-round programming, while pop-up markets and festivals 
                    create regular opportunities for community gathering and cultural celebration.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/midtown/blvd-aerial-rendering.jpg"
                alt="Aerial view of Midtown Las Vegas Arts District location showing BLVD complex, The English Hotel, and surrounding neighborhood with galleries, restaurants, and cultural venues"
                fill
                className="object-cover"
                quality={85}
              />
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
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            The Arts District's evolution began in the late 1990s when artists and creative entrepreneurs discovered 
            the potential in abandoned warehouses and industrial buildings south of downtown. What started as a grassroots 
            movement has blossomed into a nationally recognized arts destination. The neighborhood gained momentum with the 
            establishment of First Friday in 2002, which has since grown into the largest monthly art event in the Southwest, 
            attracting over 10,000 visitors each month. Today, Midtown builds on this legacy, offering residential opportunities 
            that allow residents to live within walking distance of world-class galleries, chef-driven restaurants, and cultural 
            institutions like the Majestic Repertory Theatre.
          </p>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Early Years: Industrial Roots</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Before becoming Las Vegas's cultural heart, the Arts District functioned as an industrial zone serving 
                the city's manufacturing and distribution needs. Warehouses and factories dominated the landscape, with 
                minimal residential development. The area's transformation began when visionary artists like Wes Myles 
                recognized the potential in these abandoned structures, seeing not dilapidated buildings but blank canvases 
                for creative expression.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The Arts Factory, opened in 1997, became a pioneering example of adaptive reuse, demonstrating how industrial 
                spaces could be repurposed for creative industries. Artists and entrepreneurs followed, drawn by affordable 
                space and the opportunity to build something new. This grassroots movement gained momentum throughout the late 
                1990s and early 2000s, as more creatives discovered the area's potential. The neighborhood's transformation 
                wasn't driven by top-down planning but by organic growth, as artists, gallery owners, and small business 
                owners invested in the community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The First Friday Revolution</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                The establishment of{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}in 2002 marked a turning point in the Arts District's evolution. Founded by Cindy Funkhouser, this monthly 
                event transformed the neighborhood from a quiet creative enclave into a vibrant cultural destination. What 
                began as a small gathering of artists and art enthusiasts has grown into the largest monthly art event in the 
                Southwest, regularly attracting over 10,000 visitors.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                First Friday created a regular platform for artists to showcase their work, galleries to attract new visitors, 
                and the community to come together in celebration of creativity. The event's success demonstrated the neighborhood's 
                potential as a cultural destination, drawing attention from developers, investors, and city planners. This 
                recognition led to increased investment in infrastructure, new business development, and eventually, residential 
                projects that would allow people to live within walking distance of this cultural hub.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The event's impact extends beyond the monthly celebration. First Friday has become a symbol of the neighborhood's 
                identity, representing the collaborative spirit that defines the Arts District. Local businesses have thrived 
                thanks to the increased foot traffic, while artists have found new audiences for their work. The event's 
                international recognition has elevated the Arts District's profile, attracting visitors from around the world 
                who want to experience authentic Las Vegas culture.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Modern Development and Residential Growth</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                The 2010s marked a new phase in the Arts District's evolution, as residential development began to complement 
                the existing commercial and creative spaces. Projects like{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  The English Residences
                </Link>
                {' '}demonstrated that luxury living could coexist with the neighborhood's artistic character. These developments 
                attracted a new demographic of residents—professionals, empty-nesters, and investors—who appreciated both the 
                cultural amenities and the investment potential.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                The opening of{' '}
                <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                  The English Hotel
                </Link>
                {' '}in 2022 represented a milestone in the neighborhood's maturation. This boutique luxury hotel, featuring 
                the award-winning{' '}
                <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                  Pepper Club restaurant
                </Link>
                , brought international attention to Midtown while maintaining the area's authentic character. The hotel's success 
                validated the neighborhood's appeal to both tourists and residents, demonstrating that luxury and authenticity 
                could coexist.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Today, Midtown continues to evolve, with new developments like the Plaza Tower scheduled to open in 2025. These 
                projects bring modern amenities and luxury finishes while preserving the neighborhood's artistic identity. The 
                ongoing development reflects confidence in Midtown's future, as investors and residents recognize the value of 
                living in a neighborhood that offers both cultural richness and urban convenience. The transformation from 
                industrial zone to cultural destination to residential community demonstrates the neighborhood's ability to adapt 
                and grow while maintaining its essential character.
              </p>
            </div>
          </div>
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

      {/* Why Choose Midtown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Midtown Las Vegas Stands Out
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover what makes Midtown the premier destination for authentic Las Vegas living
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Walkable Urban Lifestyle
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Enjoy genuine walkability in the cultural heart of Vegas. Stroll to galleries, 
                restaurants, and entertainment within steps of your home.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                World-Class Culture & Dining
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Access 30+ art galleries, monthly First Friday events, chef-driven restaurants, 
                and cultural venues like the Majestic Repertory Theatre.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                45% Property Appreciation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Average property appreciation since 2015, reflecting the neighborhood's 
                transformation and strong investment potential.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Prime Location Access
              </h3>
              <p className="text-slate-600 leading-relaxed">
                15 minutes to airport, minutes to downtown & Strip. Convenient access to city 
                amenities while maintaining neighborhood character.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Authentic Community
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Experience authentic Las Vegas living vs. typical developments. Join a thriving 
                creative community with genuine neighborhood connections.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Investment & Income Potential
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Unique investment opportunities with rental income potential. The English Residences 
                condo-hotel model allows income generation when not in use.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/midtown-real-estate"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Midtown Real Estate
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Featured Midtown Properties"
            description="Explore luxury condos and homes in the heart of the Arts District"
            priceMin="450000"
            priceMax="1000000"
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
                  'Midtown offers luxury condos, condo-hotels (The English Residences), townhouses, and single-family homes. Our featured properties range from $450,000 to $1,000,000. Browse available properties at drjanduffy.realscout.com or call Dr. Jan at (702) 500-1980.',
              },
              {
                question: 'Why should I buy in the Arts District?',
                answer:
                  'CNN called it "the most exciting neighborhood" in Las Vegas. You get walkable urban living, monthly First Friday events, 30+ art galleries, locally-owned restaurants, and a vibrant creative community - all while being close to the Strip and downtown.',
              },
              {
                question: 'How do I get started?',
                answer:
                  'Contact Dr. Jan Duffy at (702) 500-1980 or DrJanSells@MidtownVegasCondos.com. She specializes in Midtown properties and can schedule a personal tour, show you available homes, and guide you through the entire buying process.',
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
                921 South Main Street<br />
                Las Vegas, NV 89101
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">
                <a href="tel:7025001980" className="hover:text-slate-900 transition-colors">
                  (702) 500-1980
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:DrJanSells@MidtownVegasCondos.com" className="hover:text-slate-900 transition-colors">
                  DrJanSells@MidtownVegasCondos.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600">
                Sun-Thu: 9 am – 5 pm<br />
                Fri-Sat: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
