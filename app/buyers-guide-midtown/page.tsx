import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { CalendlyBookingSection } from '../components/calendly-booking-section'
import { CalendlyLink } from '../components/calendly-link'
import { RealScoutListings } from '../components/realscout-listings'
import { RealScoutSearch } from '../components/realscout-search'

export const metadata: Metadata = {
  title: "Buyer's Guide to Midtown Las Vegas | How to Buy in Arts District",
  description:
    'Complete guide to buying in Midtown Las Vegas. Learn about neighborhoods, prices, financing, and the buying process. Get expert advice from Arts District specialists.',
  keywords: [
    'buying in Midtown',
    'how to buy Arts District',
    'Vegas real estate tips',
    'Midtown buyer guide',
    'Arts District homes',
    'Las Vegas real estate process',
  ],
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/buyers-guide-midtown',
  },
}

export default function BuyersGuideMidtownPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: "Buyer's Guide", url: '/buyers-guide-midtown' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Buyer's Guide to Midtown Las Vegas
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl">
          Everything you need to know about buying property in Midtown Las Vegas. From 
          understanding the market to closing the deal, this comprehensive guide will help 
          you navigate the buying process with confidence.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12 max-w-4xl">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Reddit-backed buyer research guides
          </h2>
          <p className="text-slate-600 mb-4">
            Questions from r/vegaslocals and r/vegas — walkability, HOA fees, safety, First
            Friday living, and rent vs buy — with FAQ schema and Midtown-specific answers.
          </p>
          <Link href="/guides" className="text-slate-900 font-semibold hover:underline">
            View all buyer guides →
          </Link>
        </div>

        {/* Understanding the Market */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Understanding the Midtown Market
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Midtown's real estate market has shown consistent growth with 45% average 
              appreciation since 2015. The neighborhood's transformation from industrial zone 
              to cultural destination has driven strong demand for both owner-occupied and 
              investment properties.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Current Market Conditions
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              As of 2025, Midtown remains a competitive market with strong buyer interest. 
              Properties typically sell within 30-60 days, with well-priced listings receiving 
              multiple offers. The area's limited inventory and growing popularity contribute 
              to competitive conditions.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Price Ranges by Property Type
            </h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li><strong>Luxury Condos:</strong> $250,000 - $800,000</li>
              <li><strong>Condo-Hotel Units (English Residences):</strong> $250,000 - $600,000</li>
              <li><strong>Townhouses:</strong> $400,000 - $900,000</li>
              <li><strong>Single-Family Homes:</strong> $500,000 - $2,000,000+</li>
            </ul>
          </div>
        </section>

        {/* Budget & Pre-Approval */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Budget & Pre-Approval
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Getting pre-approved for a mortgage is the first step in your Midtown home buying 
              journey. Pre-approval shows sellers you're serious and puts you ahead of other 
              buyers who haven't taken this step.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Down Payment Requirements
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Down payment requirements vary by loan type:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li><strong>Conventional Loans:</strong> 5-20% down payment</li>
              <li><strong>FHA Loans:</strong> 3.5% down payment (for primary residence)</li>
              <li><strong>VA Loans:</strong> 0% down (for eligible veterans)</li>
              <li><strong>Investment Properties:</strong> Typically 20-25% down</li>
            </ul>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Additional Costs to Consider
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beyond the purchase price, budget for closing costs (typically 2-5% of purchase 
              price), home inspections, appraisals, and moving expenses. Condo purchases include{' '}
              <Link href="/guides/las-vegas-condo-hoa-fees" className="text-slate-900 font-semibold hover:underline">
                HOA fees
              </Link>{' '}
              ($50–$800+/month depending on building type) and possible special assessments — review
              the HOA budget and reserve study before you offer.
            </p>
          </div>
        </section>

        {/* Location Breakdown */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Location Breakdown: Micro-Neighborhoods in Midtown
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The English Residences Area
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Centered around The English Hotel at 921 S Main St, this area offers luxury 
                condo-hotel units with income potential. Walkable to{' '}
                <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                  Pepper Club
                </Link>{' '}
                and Midtown Plaza.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Arts Factory District
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Near the historic Arts Factory, this area features converted warehouses and 
                proximity to multiple galleries. Strong walkability and cultural amenities.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Midtown Plaza Vicinity
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Properties near{' '}
                <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                  Midtown Plaza
                </Link>{' '}
                offer easy access to dining, shopping, and community events. Central location 
                within the Arts District.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                First Friday Corridor
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Properties along the{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>{' '}
                event route offer prime access to monthly cultural celebrations and increased 
                foot traffic.
              </p>
            </div>
          </div>
        </section>

        {/* The Buying Process */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            The Buying Process in Midtown
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 1: Get Pre-Approved</h3>
              <p className="text-slate-600 leading-relaxed">
                Work with a lender to get pre-approved for a mortgage. This establishes your 
                budget and shows sellers you're a serious buyer.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 2: Find Your Agent</h3>
              <p className="text-slate-600 leading-relaxed">
                Partner with an agent who specializes in Midtown and the Arts District. 
                <Link href="/contact" className="text-slate-900 font-semibold hover:underline ml-1">
                  Dr. Jan Duffy
                </Link>{' '}
                has deep knowledge of the neighborhood and can guide you through the process.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 3: Property Search</h3>
              <p className="text-slate-600 leading-relaxed">
                Search available properties using{' '}
                <Link href="/search" className="text-slate-900 font-semibold hover:underline">
                  our property search
                </Link>{' '}
                or schedule personalized tours. Consider location, amenities, and investment 
                potential.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 4: Make an Offer</h3>
              <p className="text-slate-600 leading-relaxed">
                Your agent will help you craft a competitive offer based on market analysis, 
                comparable sales, and property condition. In competitive markets, consider 
                escalation clauses and flexible terms.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 5: Inspection & Due Diligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Conduct thorough inspections, review HOA documents (for condos), and verify 
                property details. This is your opportunity to identify issues and negotiate 
                repairs or credits.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Step 6: Closing</h3>
              <p className="text-slate-600 leading-relaxed">
                Finalize financing, complete final walkthrough, and close on your Midtown 
                property. The closing process typically takes 30-45 days from accepted offer.
              </p>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Financing Your Midtown Property
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Multiple financing options are available for Midtown properties. Conventional 
              loans work well for owner-occupied properties, while investment properties may 
              require larger down payments. Condo purchases require lender approval of the 
              HOA and building.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
              Special Considerations for Condo-Hotels
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The English Residences condo-hotel model may have unique financing requirements. 
              Lenders may view these as investment properties even if used as primary residence, 
              which can affect loan terms and down payment requirements.
            </p>
          </div>
        </section>

        {/* Making an Offer */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Making a Competitive Offer
          </h2>
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Strategies for Competitive Markets
            </h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li><strong>Pre-approval:</strong> Essential to show you're qualified</li>
              <li><strong>Escalation clauses:</strong> Automatically increase offer up to a maximum</li>
              <li><strong>Flexible closing:</strong> Accommodate seller's timeline when possible</li>
              <li><strong>Strong earnest money:</strong> Shows commitment to the transaction</li>
              <li><strong>Limit contingencies:</strong> Fewer contingencies make offers more attractive</li>
              <li><strong>Personal letters:</strong> Sometimes help in competitive situations</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Your agent will help you determine the right strategy based on market conditions, 
              property specifics, and seller motivations.
            </p>
          </div>
        </section>

        {/* Property Search */}
        <section className="mb-20">
          <RealScoutSearch priceMin="250000" priceMax="2000000" />
        </section>

        {/* Featured Properties */}
        <section className="mb-20">
          <RealScoutListings
            title="Available Homes in Midtown"
            description="Start your search with these featured properties"
            priceMin="250000"
            priceMax="2000000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO,TC"
            listingStatus="For Sale"
          />
        </section>

        <CalendlyBookingSection
          heading="Book Your Buyer Consultation"
          description="Meet Dr. Jan Duffy in person to discuss Midtown condos, English Residences, and your Arts District home search."
          className="px-0"
        />

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Midtown Home Search?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy to get started. Specializing in Midtown and Arts District 
            real estate with expert guidance through every step of the buying process.
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
      </div>
    </div>
  )
}

