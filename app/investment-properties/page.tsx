import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { RealEstateListingSchema } from '../components/real-estate-listing-schema'
import { CalendlyLink } from '../components/calendly-link'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutSection } from '../components/realscout-section'

export const metadata: Metadata = {
  title: 'Investment Properties Midtown Las Vegas | Cap Rates, Cash Flow',
  description:
    'Midtown Las Vegas condo investments. Discover rental income opportunities, ROI analysis, and growth potential in the Arts District. Schedule consultation today.',
  keywords: [
    'investment properties las vegas',
    'condo investments',
    'rental income opportunities',
    'cap rates midtown',
    'real estate investment',
    'Arts District investment',
  ],
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/investment-properties',
  },
}

export default function InvestmentPropertiesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Investment Properties', url: '/investment-properties' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Investment Properties in Midtown Las Vegas
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl">
          Discover exceptional ROI opportunities in Las Vegas's fastest-growing neighborhood. 
          Midtown offers unique investment models with rental income potential and strong appreciation.
        </p>

        {/* Why Midtown for Investors */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Why Midtown for Investors
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                45% Appreciation Since 2015
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Midtown has demonstrated consistent property value growth, outperforming many 
                Las Vegas neighborhoods. The area's transformation from industrial zone to cultural 
                destination has driven strong appreciation rates that continue to attract investors.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Dual Income Streams
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The English Residences condo-hotel model allows owners to generate rental income 
                when not using their units through professional hotel management. This innovative 
                approach provides both personal use and investment returns.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Strong Rental Demand
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The Arts District's popularity with tourists, professionals, and creatives creates 
                consistent demand for both short-term and long-term rentals. The neighborhood's 
                cultural appeal and walkability make it attractive to renters.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ongoing Development
              </h3>
              <p className="text-slate-600 leading-relaxed">
                New projects like the Plaza Tower and continued infrastructure improvements signal 
                long-term growth potential. Early investors benefit from the area's evolving 
                reputation and increasing property values.
              </p>
            </div>
          </div>
        </section>

        {/* Market Data Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Market Data & ROI Analysis
          </h2>
          <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Investment Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">45%</div>
                <p className="text-slate-600">Average Appreciation (2015-2025)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$250K-$1.5M</div>
                <p className="text-slate-600">Investment Property Range</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">High</div>
                <p className="text-slate-600">Rental Demand</p>
              </div>
            </div>
          </div>
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Understanding Cap Rates in Midtown
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cap rates in Midtown vary based on property type and location. Condo-hotel units 
              like The English Residences offer unique income potential through hotel management, 
              while traditional condos provide stable long-term rental income. The neighborhood's 
              growing popularity and limited inventory contribute to competitive cap rates.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Cash Flow Examples
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Investment properties in Midtown can generate positive cash flow through various 
              strategies. Condo-hotel units benefit from professional management and high occupancy 
              rates during peak seasons. Traditional condos offer stable monthly rental income with 
              lower management overhead. Location within the Arts District significantly impacts 
              rental rates and occupancy.
            </p>
          </div>
        </section>

        {/* Investment Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Investment Property Types
          </h2>
          <div className="space-y-8">
            <div className="border border-slate-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Condo-Hotel Hybrid (The English Residences)
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The English Residences offer a unique investment model combining personal residence 
                with income generation. Owners can use their units when desired and earn rental 
                income through professional hotel management when away. This model provides both 
                lifestyle benefits and investment returns.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Professional hotel management included</li>
                <li>Income potential when unit not in use</li>
                <li>Personal use flexibility</li>
                <li>Luxury amenities and services</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Long-Term Rental Properties
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Traditional condos and single-family homes in Midtown attract professionals, 
                creatives, and empty-nesters seeking walkable urban living. The neighborhood's 
                cultural appeal and proximity to downtown create strong rental demand.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Stable monthly rental income</li>
                <li>Lower management overhead</li>
                <li>Long-term tenant potential</li>
                <li>Appreciation benefits</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Fix-and-Flip Opportunities
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Midtown's ongoing transformation presents opportunities for value-add investments. 
                Properties that benefit from strategic renovations can realize significant returns 
                in this appreciating market.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Value-add potential</li>
                <li>Strong resale market</li>
                <li>Growing buyer demand</li>
                <li>Quick appreciation cycles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Tax Benefits & Financial Considerations
          </h2>
          <div className="prose max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Investment properties in Midtown offer various tax advantages. Property owners may 
              benefit from depreciation deductions, mortgage interest deductions, and potential 
              1031 exchange opportunities. The condo-hotel model provides additional tax 
              considerations related to business use and rental income.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Consult with a tax professional to understand how investment property ownership 
              in Midtown can optimize your tax strategy. The combination of appreciation, rental 
              income, and tax benefits makes Midtown an attractive investment destination.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Schedule Your ROI Analysis
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized investment analysis for Midtown properties. Learn about current 
            opportunities, projected returns, and financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
            <a
              href="tel:7025001980"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1980
            </a>
          </div>
        </section>

        {/* Featured Investment Properties */}
        <section className="mb-20">
          <RealScoutListings
            title="Featured Investment Properties"
            description="Browse available investment opportunities in Midtown Las Vegas"
            priceMin="250000"
            priceMax="1500000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO,TC,MF"
            listingStatus="For Sale"
          />
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/neighborhood/english-residences"
              className="block p-6 border border-slate-200 rounded-lg hover:border-slate-900 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                The English Residences
              </h3>
              <p className="text-slate-600">
                Learn about the condo-hotel investment model in Midtown
              </p>
            </Link>
            <Link
              href="/buyers-guide-midtown"
              className="block p-6 border border-slate-200 rounded-lg hover:border-slate-900 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Buyer's Guide to Midtown
              </h3>
              <p className="text-slate-600">
                Complete guide to buying property in Midtown Las Vegas
              </p>
            </Link>
          </div>
        </section>

        <RealScoutSection
          showListings={false}
          searchTitle="Search Investment Properties in Midtown"
          priceMin="250000"
          priceMax="1500000"
          className="bg-white mb-20"
        />
      </div>
    </div>
  )
}

