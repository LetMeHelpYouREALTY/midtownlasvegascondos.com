import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutSearch } from '../components/realscout-search'

export const metadata: Metadata = {
  title: 'Midtown Real Estate Las Vegas | Midtown Condos & Homes for Sale',
  description:
    'Discover Midtown Las Vegas real estate. Luxury condos, homes, and condo-hotels in the Arts District. Walkable urban living with galleries, restaurants, and culture. Browse properties today.',
  keywords: [
    'midtown real estate',
    'midtown las vegas',
    'midtown condos',
    'Arts District real estate',
    'downtown Las Vegas homes',
    'Midtown Las Vegas condos',
  ],
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/midtown-real-estate',
  },
}

export default function MidtownRealEstatePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Midtown Real Estate', url: '/midtown-real-estate' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Midtown Real Estate Las Vegas
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl">
          Experience authentic urban living in Las Vegas's most exciting neighborhood. 
          Midtown offers luxury condos, homes, and unique condo-hotel residences in the 
          heart of the Arts District.
        </p>

        {/* Neighborhood Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            About Midtown Las Vegas
          </h2>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Midtown represents Las Vegas's most rapidly evolving cultural center, located just 
              north of Charleston Boulevard in the heart of the Arts District. This 18-block 
              neighborhood has transformed from an industrial zone into a vibrant residential and 
              commercial destination, offering walkable access to galleries, restaurants, and 
              cultural events.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              CNN called the Arts District "the most exciting neighborhood" in Las Vegas, and 
              Midtown builds on this legacy by providing residential opportunities that allow 
              residents to live within walking distance of world-class amenities. The area features 
              converted warehouses housing contemporary art galleries, chef-driven restaurants 
              serving innovative cuisine, and residential spaces designed for modern urban lifestyles.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With walkable streets, monthly cultural events like{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              , and a genuine sense of community, Midtown has emerged as the premier destination 
              for those seeking an authentic Las Vegas experience beyond the casinos and resorts.
            </p>
          </div>
        </section>

        {/* Market Data */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Midtown Real Estate Market
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Price Range</h3>
              <p className="text-2xl font-bold text-slate-900 mb-2">$250K - $2M+</p>
              <p className="text-slate-600">Condos, homes, and condo-hotels</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Appreciation</h3>
              <p className="text-2xl font-bold text-slate-900 mb-2">45%</p>
              <p className="text-slate-600">Average growth since 2015</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Property Types</h3>
              <p className="text-lg text-slate-900 mb-2">Luxury Condos</p>
              <p className="text-slate-600">Condo-hotels, townhouses, single-family</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Midtown's real estate market has demonstrated strong performance with consistent 
              appreciation and growing demand. The neighborhood's unique combination of cultural 
              amenities, walkability, and proximity to downtown Las Vegas makes it attractive 
              to both owner-occupants and investors. New developments like{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                The English Residences
              </Link>{' '}
              and the upcoming Plaza Tower continue to expand residential options while maintaining 
              the area's authentic character.
            </p>
          </div>
        </section>

        {/* Why Buy in Midtown */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Why Choose Midtown Real Estate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Walkable Urban Lifestyle
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Midtown offers genuine walkability rare in Las Vegas. Residents can stroll to 
                breakfast at local cafes, browse galleries during lunch, enjoy dinner at 
                chef-driven restaurants, and attend evening performances—all without leaving 
                the neighborhood.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Cultural Richness
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                With over 30 art galleries, monthly First Friday events, and cultural venues 
                like the Majestic Repertory Theatre, Midtown provides constant access to arts 
                and culture that enriches daily life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Investment Potential
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Property values have appreciated 45% since 2015, and the area continues to attract 
                new businesses and residents. The condo-hotel model offers unique income 
                generation opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Strategic Location
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Just minutes from downtown Las Vegas, 15 minutes to the Strip, and 15 minutes 
                to the airport. Midtown provides easy access to city amenities while maintaining 
                its distinct neighborhood character.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="mb-20">
          <RealScoutListings
            title="Featured Midtown Properties"
            description="Explore luxury condos and homes in the heart of the Arts District"
            priceMin="300000"
            priceMax="2000000"
            sortOrder="PRICE_LOW"
            propertyTypes=",CONDO,SFR"
            limit="6"
          />
        </section>

        {/* Property Search */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Search Midtown Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find your perfect Midtown home with our comprehensive property search
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </section>

        {/* Neighborhood Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Midtown Neighborhood Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/neighborhood/arts-district"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Arts District</h3>
              <p className="text-slate-600">
                18 blocks of galleries, studios, and cultural venues
              </p>
            </Link>
            <Link
              href="/neighborhood/english-hotel"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">The English Hotel</h3>
              <p className="text-slate-600">
                Luxury boutique hotel with award-winning restaurant
              </p>
            </Link>
            <Link
              href="/neighborhood/midtown-plaza"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Midtown Plaza</h3>
              <p className="text-slate-600">
                Central gathering space with dining and shopping
              </p>
            </Link>
            <Link
              href="/neighborhood/first-fridays"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">First Friday</h3>
              <p className="text-slate-600">
                Largest monthly art event in the Southwest
              </p>
            </Link>
            <Link
              href="/neighborhood/pepper-club"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pepper Club</h3>
              <p className="text-slate-600">
                Award-winning restaurant at The English Hotel
              </p>
            </Link>
            <Link
              href="/neighborhood/english-residences"
              className="block p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">English Residences</h3>
              <p className="text-slate-600">
                Luxury condo-hotel units with income potential
              </p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Midtown Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy to schedule a personal tour of Midtown and explore available 
            properties. Specializing in Arts District real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7025001955"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Tour
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

