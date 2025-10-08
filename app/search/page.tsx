import { RealScoutSearch } from '../components/realscout-search'
import { RealScoutListings } from '../components/realscout-listings'
import Link from 'next/link'

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Property Search
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Search available homes and condos in Midtown and the Las Vegas Arts District
          </p>
        </div>
      </section>

      {/* RealScout Search Widget */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          Dr. Jan is here to help you navigate the Midtown market and find the ideal property for your needs.
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

