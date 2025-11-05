import { RealScoutSearch } from '../components/realscout-search'
import { RealScoutListings } from '../components/realscout-listings'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/search',
  },
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Property Search
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Search available homes and condos in Midtown and the Las Vegas Arts District
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover luxury condominiums, condo-hotels, townhouses, and single-family homes in Las Vegas's most exciting neighborhood. 
            From The English Residences to traditional condos near Midtown Plaza, find your perfect property with prices ranging 
            from $150,000 to over $3,000,000.
          </p>
        </div>
      </section>

      {/* Search Guide Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Your Midtown Property Search Starts Here</h2>
          
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              Finding the perfect home in Midtown Las Vegas requires understanding the unique character of each neighborhood, 
              the different property types available, and how each option aligns with your lifestyle and investment goals. 
              Whether you're searching for a walkable urban lifestyle, an investment property with income potential, or a 
              cultural hub near galleries and restaurants, Midtown offers diverse options for every buyer.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Understanding Midtown Property Types</h3>
            <p>
              <strong>Luxury Condominiums:</strong> Traditional condos in Midtown range from $250,000 to $800,000, offering modern 
              finishes, secure parking, and low-maintenance living. These properties are perfect for professionals, downsizers, 
              or anyone seeking walkable urban convenience. Many feature rooftop terraces, fitness centers, and proximity to 
              First Friday and the Arts District's vibrant scene.
            </p>
            
            <p>
              <strong>Condo-Hotels (The English Residences):</strong> A unique hybrid combining ownership with hotel management, 
              condo-hotels allow you to use your unit as a personal residence while generating rental income through professional 
              hotel operations. Prices typically range from $300,000 to $700,000, with owners benefiting from revenue sharing, 
              housekeeping services, and access to The Pepper Club restaurant. This option is ideal for investors seeking passive 
              income or part-time residents who want flexibility.
            </p>
            
            <p>
              <strong>Townhouses and Single-Family Homes:</strong> For those seeking more space, Midtown's surrounding areas offer 
              townhouses ($400,000-$900,000) and detached homes ($500,000-$2,000,000+). These properties provide traditional 
              homeownership benefits—private yards, garages, and more square footage—while maintaining proximity to Arts District 
              amenities, galleries, and cultural events.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Find Your Perfect Midtown Home</h3>
            <p>
              Start by defining your priorities: Are you looking for investment income, personal residence, or both? Do you prefer 
              ultra-urban walkability or a bit more space? Your budget, desired square footage, and lifestyle preferences will 
              guide your search. Use the search tool below to filter by price range, property type, and specific neighborhoods. 
              Dr. Jan Duffy specializes in Midtown properties and can provide personalized recommendations based on your unique 
              needs, including off-market opportunities and upcoming listings before they hit the public market.
            </p>
            
            <p>
              Consider factors beyond the property itself: proximity to First Friday events, walkability to cafes and galleries, 
              parking availability, HOA fees, and future development plans that may impact property values. The English Hotel area 
              offers immediate access to fine dining and hotel amenities, while properties near Midtown Plaza provide more retail 
              and dining variety. Arts District locations immerse you in creative culture with over 30 galleries within walking distance.
            </p>
          </div>
        </div>

        <RealScoutSearch />
      </section>

      {/* All Midtown Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="All Midtown & Arts District Listings"
            description="Browse all available properties in and around Midtown"
            priceMin="150000"
            priceMax="3000000"
            sortOrder="DATE_NEW"
            propertyTypes=",CONDO,SFR,TOWNHOUSE"
            limit="24"
          />
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Explore Midtown Neighborhoods
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The English Residences',
                description: 'Luxury condo-hotel living with hotel management and income potential',
                href: '/neighborhood/english-residences',
                icon: '🏢',
              },
              {
                title: 'Midtown Plaza',
                description: 'Walk to dining, shopping, and entertainment in the heart of Midtown',
                href: '/neighborhood/midtown-plaza',
                icon: '🏪',
              },
              {
                title: 'Arts District',
                description: 'Live among galleries, studios, and the vibrant creative community',
                href: '/neighborhood/arts-district',
                icon: '🎨',
              },
            ].map((neighborhood) => (
              <Link
                key={neighborhood.title}
                href={neighborhood.href}
                className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{neighborhood.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {neighborhood.title}
                </h3>
                <p className="text-slate-600">{neighborhood.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Need Help Finding Your Perfect Home?
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Dr. Jan is here to help you navigate the Midtown market and find the ideal property for your needs. With expert knowledge 
          of every Midtown neighborhood, current market conditions, and upcoming developments, Dr. Jan provides the insider perspective 
          you need to make confident real estate decisions. Schedule a no-obligation consultation to discuss your search criteria and 
          receive personalized property recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:7025001955"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Call (702) 500-1955
          </a>
          <a
            href="mailto:DrJanSells@MidtownLasVegasCondos.com"
            className="inline-block px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Email Dr. Jan
          </a>
        </div>
      </section>
    </div>
  )
}

