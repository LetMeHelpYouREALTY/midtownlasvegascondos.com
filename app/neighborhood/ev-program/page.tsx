import Link from 'next/link'

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
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              EV Charging Image
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

