import Link from 'next/link'
import { RealScoutSearch } from '@/app/components/realscout-search'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { PageFAQ } from '@/app/components/page-faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The English Residences | Luxury Condo-Hotels in Midtown Las Vegas',
  description: 'Own a piece of The English Hotel. Luxury condo-hotel units in the Arts District. Stay when you want, earn when you\'re away. Call Dr. Jan at (702) 500-1955.',
  keywords: 'English Residences, Midtown Las Vegas condos, Arts District condos, condo-hotel Las Vegas, luxury condos downtown Las Vegas, investment property Las Vegas',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/english-residences',
  },
}

export default function EnglishResidencesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The English Residences
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Now Available - Own a piece of the city's most intriguing address
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Stay when you want, earn when you're away
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Fully owned condo hotels, seamlessly managed within The English Hotel's 
              collection of rooms. Experience the perfect blend of luxury ownership and 
              investment opportunity in the heart of Midtown.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The English Residences represent a revolutionary approach to Las Vegas real estate ownership. Unlike traditional 
              condominiums where your unit sits empty while you're away, condo-hotel ownership allows you to generate revenue 
              through The English Hotel's professional management program. When you're not using your residence, it becomes 
              part of the hotel's luxury room inventory, generating rental income with zero effort on your part. This innovative 
              model has become increasingly popular among investors, part-time residents, and anyone seeking flexible urban living 
              with financial benefits.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Each residence features contemporary design, high-end appliances, spa-inspired bathrooms, and floor-to-ceiling windows 
              showcasing Arts District views. Owners enjoy exclusive access to The Pepper Club restaurant, priority reservations, 
              24/7 concierge services, and professional housekeeping. The building's prime location at 921 S Main Street places you 
              steps from First Friday, Midtown Plaza's dining scene, and over 30 art galleries, creating an unmatched urban lifestyle 
              that combines luxury hotel amenities with true property ownership.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Prime location in Las Vegas Arts District',
                'Professional hotel management',
                'Revenue sharing program',
                'Luxury amenities and finishes',
                'Flexible ownership options',
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
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Register for Webinar
            </Link>
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Residence Image
            </div>
          </div>
        </div>

        {/* Investment Details */}
        <div className="bg-slate-50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Condo-Hotel Advantage</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Traditional condo ownership means your unit sits vacant whenever you're away, costing you money in HOA fees, utilities, 
            and property taxes without generating any income. The English Residences solve this problem through revenue sharing. 
            When you're not in residence, your unit joins the hotel's rental pool, professionally marketed and managed by experienced 
            hospitality staff. You receive a share of the rental revenue proportional to your unit's usage in the rental program.
          </p>
          <p className="text-slate-600 leading-relaxed">
            This arrangement provides the best of both worlds: a luxury urban residence for personal use, plus passive income that 
            can offset ownership costs. Many owners report that rental revenue covers 50-80% of their annual HOA fees and property 
            taxes. Additionally, because your unit is part of a hotel operation, you may qualify for favorable tax treatment as an 
            investment property. Consult with your tax advisor about potential deductions for depreciation, operating expenses, and 
            management fees. The English Hotel handles all guest services, maintenance, and reservations—you simply enjoy your home 
            when you want it and collect revenue when you don't.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Financing options for condo-hotel purchases have evolved significantly, with several lenders now specializing in these unique 
            properties. While traditional mortgages may require higher down payments (typically 20-30%), the income potential and tax advantages 
            often make The English Residences a compelling investment compared to traditional vacation properties or rental condos. Contact Dr. Jan 
            to discuss current financing options, estimated income projections, and how condo-hotel ownership fits into your real estate portfolio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Investment Opportunity',
              description:
                'Generate income when you\'re not using your residence through our professional hotel management program.',
            },
            {
              title: 'Luxury Living',
              description:
                'High-end finishes, modern amenities, and access to hotel services create an unparalleled living experience.',
            },
            {
              title: 'Prime Location',
              description:
                'Walk to galleries, restaurants, and entertainment in the heart of the Arts District.',
              link: '/neighborhood/arts-district',
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.link ? (
                  <>
                    Walk to galleries, restaurants, and entertainment in the heart of the{' '}
                    <Link href={feature.link} className="text-slate-900 font-semibold hover:underline">
                      Arts District
                    </Link>.
                  </>
                ) : (
                  feature.description
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Condo Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Available English Residences & Midtown Condos"
            description="Browse luxury condo-hotel units and condominiums in the Arts District"
            priceMin="250000"
            priceMax="1500000"
            sortOrder="PRICE_LOW"
            propertyTypes=",CONDO"
            limit="9"
          />
        </div>
      </section>

      {/* Property Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Search All Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find your perfect home in Midtown and the Arts District
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <PageFAQ
            title="English Residences FAQ"
            faqs={[
              {
                question: 'What makes The English Residences different from regular condos?',
                answer:
                  'The English Residences are condo-hotel units with professional hotel management. You can use your unit when you want and generate rental income when you\'re away. Regular condos don\'t offer this built-in income opportunity.',
              },
              {
                question: 'What are the monthly costs of ownership?',
                answer:
                  'Costs include your mortgage (if financed), HOA fees, property taxes, and insurance. However, rental income when you\'re not using the unit can offset these costs. Contact Dr. Jan at (702) 500-1955 for specific estimates.',
              },
              {
                question: 'How is this different from a timeshare?',
                answer:
                  'You own 100% of your unit with a traditional deed - it\'s real property ownership. You can sell it, rent it, or pass it to heirs. Timeshares are different ownership structures with limited usage rights.',
              },
              {
                question: 'What amenities do residents have access to?',
                answer:
                  'Residents enjoy hotel amenities including The Pepper Club restaurant, concierge services, housekeeping options, and priority access to hotel facilities. You also get the walkability of the entire Arts District.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Own an English Residence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our webinar to discover the unique opportunity of owning a luxury condo-hotel in the heart of Midtown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

