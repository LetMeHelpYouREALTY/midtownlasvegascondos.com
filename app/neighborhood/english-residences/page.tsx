import Link from 'next/link'

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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join our webinar to discover the unique opportunity of owning an English Residence.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

