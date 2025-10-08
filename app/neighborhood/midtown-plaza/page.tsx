import Link from 'next/link'
import { RealScoutSearch } from '@/app/components/realscout-search'
import { RealScoutListings } from '@/app/components/realscout-listings'

export default function MidtownPlazaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Midtown Plaza
          </h1>
          <p className="text-xl text-white/90 mb-8">
            The heart of Midtown - dining, shopping, and entertainment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Your Neighborhood Hub
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Midtown Plaza serves as the central gathering place for the neighborhood, 
              offering a curated mix of local businesses, restaurants, and community spaces. 
              This is where Midtown comes together.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Locally-owned restaurants and cafes',
                'Unique retail shops and boutiques',
                'Community event spaces',
                'Outdoor seating and gathering areas',
                'Easy walkability to all Midtown attractions',
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-slate-900 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Plaza Image
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Dining',
              description:
                'From casual cafes to upscale restaurants, enjoy a diverse culinary scene featuring local favorites and innovative cuisine.',
            },
            {
              title: 'Shopping',
              description:
                'Discover unique boutiques and shops offering everything from local art to artisan goods.',
            },
            {
              title: 'Community',
              description:
                'Regular events, markets, and gatherings make Midtown Plaza the social heart of the neighborhood.',
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Listings Near Plaza */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Homes Near Midtown Plaza"
            description="Walk to restaurants, shops, and entertainment from these properties"
            priceMin="200000"
            priceMax="1000000"
            sortOrder="PRICE_LOW"
            propertyTypes=",CONDO,SFR"
            limit="9"
          />
        </div>
      </section>

      {/* Property Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Find Homes Near Midtown Plaza
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Search all available properties in walking distance
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Visit Midtown Plaza
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the vibrant heart of the Arts District. Open daily with something new to discover.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  )
}

