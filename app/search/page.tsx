import { RealScoutSearch } from '../components/realscout-search'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutScript } from '../components/realscout-script'
import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '../components/breadcrumb'
import { CalendlyLink } from '../components/calendly-link'
import { PersonaIntro } from '../components/persona-intro'

export const metadata: Metadata = {
  title: 'Search Walkable Arts District Homes | Midtown Las Vegas',
  description:
    'Search condos and homes in walkable Midtown and the 18b Arts District — for locals choosing gallery life over suburban sprawl. Dr. Jan Duffy (702) 500-1980.',
  keywords: [
    'Midtown Las Vegas homes',
    'Arts District condos',
    'property search Las Vegas',
    'English Residences',
    'Midtown condos for sale',
    'downtown Las Vegas real estate',
  ],
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/search',
  },
}

export default function SearchPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Property Search', url: '/search' },
  ]

  return (
    <>
      <RealScoutScript />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Search Walkable Arts District Homes
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
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
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
              Consider factors beyond the property itself: proximity to{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday events
              </Link>
              , walkability to cafes and galleries, 
              parking availability, HOA fees, and future development plans that may impact property values. The{' '}
              <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                English Hotel area
              </Link>
              {' '}offers immediate access to fine dining and hotel amenities, while properties near{' '}
              <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                Midtown Plaza
              </Link>
              {' '}provide more retail 
              and dining variety. Arts District locations immerse you in creative culture with over 30 galleries within walking distance.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Investment Considerations in Midtown</h3>
            <p>
              Midtown's real estate market offers unique investment opportunities. Property values have appreciated consistently, 
              with average increases of 45% since 2015. The neighborhood's growing reputation, combined with ongoing development, 
              suggests continued appreciation potential. For investors,{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                The English Residences
              </Link>
              {' '}condo-hotel model provides an additional revenue stream through rental income when units aren't in personal use.
            </p>
            <p>
              Traditional condos and single-family homes offer rental potential, with the Arts District's cultural amenities 
              attracting both long-term residents and short-term visitors. The neighborhood's walkability and proximity to 
              downtown Las Vegas make it appealing to professionals, while the artistic community draws creatives and culture 
              enthusiasts. This diverse tenant base supports strong rental demand and occupancy rates.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Financing Your Midtown Property</h3>
            <p>
              Financing options for Midtown properties vary by property type. Traditional condos qualify for conventional 
              mortgages with standard down payments (typically 20% for investment properties, 3-5% for primary residences). 
              Condo-hotel properties may require specialized financing, with some lenders offering products specifically 
              designed for these unique ownership structures. Dr. Jan Duffy can connect you with lenders experienced in 
              Midtown real estate who understand the neighborhood's market dynamics.
            </p>
            <p>
              Investment property financing typically requires higher down payments (20-25%) and may have different interest 
              rates than primary residence loans. However, the rental income potential, especially for condo-hotel units, 
              can offset these costs. Work with a lender who understands Midtown's market to explore all available financing 
              options and find the best terms for your situation.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Buying Process in Midtown</h3>
            <p>
              Purchasing property in Midtown follows the standard Las Vegas real estate process, with some unique considerations. 
              Once you've identified a property, you'll submit an offer through your agent. In competitive markets, properties 
              may receive multiple offers, so working with an experienced agent like Dr. Jan Duffy provides valuable negotiation 
              expertise. The inspection period allows you to thoroughly evaluate the property, including building systems, 
              potential HOA issues, and any special considerations for condo-hotel units.
            </p>
            <p>
              For condo-hotel purchases, additional due diligence is essential. Review the hotel management agreement, 
              revenue-sharing terms, historical occupancy rates, and owner usage policies. Understand any restrictions on 
              personal use during peak seasons and the process for reserving your unit. Dr. Jan provides detailed guidance 
              through this process, ensuring you fully understand the condo-hotel ownership model before committing.
            </p>
            <p>
              Closing typically occurs 30-45 days after offer acceptance, depending on financing and inspection timelines. 
              Dr. Jan coordinates all aspects of the transaction, from initial search through closing and beyond. Post-closing, 
              she connects new owners with local service providers, from property management companies to interior designers, 
              ensuring a smooth transition to Midtown living.
            </p>
          </div>
        </div>

        <RealScoutSearch priceMin="450000" priceMax="1000000" />
      </section>

      {/* All Midtown Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="All Midtown & Arts District Listings"
            description="Browse all available properties in and around Midtown"
            priceMin="450000"
            priceMax="1300000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,TC,MF"
            listingStatus="For Sale"
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
          <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" className="bg-slate-900 text-white hover:bg-slate-800" />
          <a
            href="tel:7025001980"
            className="inline-block px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Call (702) 500-1980
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
    </>
  )
}

