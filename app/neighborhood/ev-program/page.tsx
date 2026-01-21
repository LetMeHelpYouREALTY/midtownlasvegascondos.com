import Link from 'next/link'
import { Metadata } from 'next'
import { RealScoutListings } from '@/app/components/realscout-listings'

export const metadata: Metadata = {
  title: 'EV Vehicle Program | Electric Vehicle Charging in Midtown Las Vegas',
  description:
    'Midtown Las Vegas offers Level 2 electric vehicle charging stations for residents. Sustainable living meets luxury in the Arts District. Charge your EV while you live, work, and play in Midtown.',
  keywords: [
    'EV charging Las Vegas',
    'electric vehicle Midtown',
    'Arts District EV charging',
    'Level 2 charging station',
    'sustainable Las Vegas living',
    'EV program Midtown',
  ],
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/neighborhood/ev-program',
  },
}

export default function EVProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-900 to-teal-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            EV Vehicle Program
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Sustainable transportation for Midtown residents
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Drive Green in the Arts District
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          As part of Midtown's commitment to sustainability, we're proud to offer comprehensive 
          electric vehicle charging infrastructure and incentives for residents who choose 
          eco-friendly transportation.
        </p>
        <div className="max-w-3xl mx-auto text-left mt-12">
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Midtown's EV Program addresses a fundamental challenge of urban electric vehicle ownership: reliable, convenient charging 
            infrastructure. While suburban homeowners install garage chargers easily, urban condo residents traditionally face limited 
            charging access. Midtown solves this through strategically placed Level 2 charging stations in residential parking areas, 
            ensuring electric vehicle ownership remains practical for apartment and condo residents who lack private garages.
          </p>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            The program extends beyond infrastructure to comprehensive support. Residents receive charging credits that offset electricity 
            costs, making EV ownership more economical. Reserved EV parking spots eliminate the frustration of finding available chargers, 
            while the mobile app allows scheduling charging sessions and monitoring status remotely. This integrated approach removes barriers 
            that often discourage urban residents from adopting electric vehicles despite environmental and financial benefits.
          </p>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Beyond individual benefits, the EV Program contributes to broader sustainability goals. Reducing vehicular emissions in dense 
            urban neighborhoods improves air quality for all residents, while normalized electric vehicle adoption demonstrates environmental 
            leadership. The program aligns with Nevada's renewable energy initiatives and Las Vegas's efforts to position itself as a 
            forward-thinking city beyond entertainment stereotypes. For environmentally-conscious buyers evaluating Midtown properties, the 
            EV infrastructure represents tangible commitment to sustainability rather than mere marketing rhetoric.
          </p>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            As electric vehicle technology evolves and adoption accelerates, Midtown's early infrastructure investment positions the neighborhood 
            advantageously. Properties with EV charging access command premium values as more buyers prioritize green transportation. The{' '}
            <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
              English Residences
            </Link>
            {' '}and newer Midtown developments include EV charging as standard amenity rather than afterthought, future-proofing properties 
            for changing transportation preferences. For residents, this means enjoying cutting-edge amenities today while benefiting from forward-thinking 
            planning that enhances property values tomorrow.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Charging Infrastructure and Technology</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                Midtown's EV Program addresses a fundamental challenge of urban electric vehicle ownership: reliable, convenient charging 
                infrastructure. While suburban homeowners install garage chargers easily, urban condo residents traditionally face limited 
                charging access. Midtown solves this through strategically placed Level 2 charging stations in residential parking areas, 
                ensuring electric vehicle ownership remains practical for apartment and condo residents who lack private garages.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The program extends beyond infrastructure to comprehensive support. Residents receive charging credits that offset electricity 
                costs, making EV ownership more economical. Reserved EV parking spots eliminate the frustration of finding available chargers, 
                while the mobile app allows scheduling charging sessions and monitoring status remotely. This integrated approach removes barriers 
                that often discourage urban residents from adopting electric vehicles despite environmental and financial benefits.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Environmental Impact and Sustainability</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                Beyond individual benefits, the EV Program contributes to broader sustainability goals. Reducing vehicular emissions in dense 
                urban neighborhoods improves air quality for all residents, while normalized electric vehicle adoption demonstrates environmental 
                leadership. The program aligns with Nevada's renewable energy initiatives and Las Vegas's efforts to position itself as a 
                forward-thinking city beyond entertainment stereotypes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                For environmentally-conscious buyers evaluating Midtown properties, the EV infrastructure represents tangible commitment to 
                sustainability rather than mere marketing rhetoric. The comprehensive sustainability approach extends to solar panel integration on 
                newer buildings, energy-efficient HVAC systems in residential developments, and water conservation initiatives that collectively 
                reduce environmental impact while lowering resident utility costs. This resonates with buyers prioritizing environmental 
                responsibility and recognizing that green amenities enhance property values as sustainability becomes mainstream expectation 
                rather than luxury add-on.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Property Value and Future-Proofing</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                When evaluating Midtown properties, verify EV charging availability and capacity—buildings with robust infrastructure attract 
                environmentally-conscious buyers and command higher resale values as electric vehicles become mainstream. The EV Program exemplifies 
                Midtown's forward-thinking approach to urban development—anticipating future resident needs and implementing solutions before they 
                become critical rather than retrofitting infrastructure after demand exceeds capacity.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The English Residences and newer Midtown developments include EV charging as standard amenity rather than afterthought, 
                future-proofing properties for changing transportation preferences. For residents, this means enjoying cutting-edge amenities 
                today while benefiting from forward-thinking planning that enhances property values tomorrow. Dr. Jan can provide specific details 
                about EV amenities in different Midtown buildings, helping you find properties aligned with your sustainability priorities and 
                transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Level 2 Charging Stations',
                description:
                  'Multiple Level 2 charging stations throughout Midtown properties with convenient access for residents.',
              },
              {
                icon: '🔌',
                title: 'Reserved Parking',
                description:
                  'Dedicated EV parking spots with charging stations for resident use, ensuring you always have a place to charge.',
              },
              {
                icon: '💰',
                title: 'Resident Incentives',
                description:
                  'Special incentives for residents who purchase or lease electric vehicles, including charging credits.',
              },
              {
                icon: '🌱',
                title: 'Sustainability Commitment',
                description:
                  'Part of our broader initiative to reduce carbon footprint and promote environmental responsibility.',
              },
              {
                icon: '📱',
                title: 'Smart App Access',
                description:
                  'Monitor charging status, reserve charging spots, and track your usage through our mobile app.',
              },
              {
                icon: '🚗',
                title: 'Multiple EV Support',
                description:
                  'Compatible with all major electric vehicle brands including Tesla, Rivian, Lucid, and more.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Why Go Electric in Midtown?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-6">
              {[
                {
                  title: 'Perfect for Urban Living',
                  description:
                    'With most amenities within walking distance, an EV is ideal for occasional trips while reducing emissions.',
                },
                {
                  title: 'Cost Savings',
                  description:
                    'Lower fuel costs, reduced maintenance, and potential tax incentives make EVs financially smart.',
                },
                {
                  title: 'Convenient Charging',
                  description:
                    'Charge overnight at home and wake up to a full battery every morning.',
                },
                {
                  title: 'Future-Ready',
                  description:
                    'Join the sustainable transportation revolution and be part of the solution.',
                },
              ].map((benefit) => (
                <li key={benefit.title} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg" role="img" aria-label="Level 2 electric vehicle charging station in Midtown Las Vegas Arts District with modern charging infrastructure for residents">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Electric Vehicle Charging Station
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Making an Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '20+', label: 'Charging Stations' },
              { number: '100+', label: 'EV Resident Owners' },
              { number: '50%', label: 'Emissions Reduction Goal' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured EV-Friendly Properties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="EV-Friendly Homes in Midtown"
            description="Find properties with electric vehicle charging infrastructure"
            priceMin="250000"
            priceMax="2000000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO,TC"
            listingStatus="For Sale"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the EV Revolution in Midtown
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Interested in learning more about our EV program and sustainability initiatives? 
            Contact Dr. Jan for details on incentives and charging infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Find EV-Friendly Homes
            </a>
            <a
              href="tel:7025001980"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1980
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

