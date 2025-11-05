import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/english-hotel',
  },
}

export default function EnglishHotelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The English Hotel
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Boutique luxury in the heart of the Arts District
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              A Unique Hospitality Experience
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The English Hotel offers an intimate boutique experience in the most exciting 
              neighborhood in Las Vegas. With thoughtfully designed rooms, exceptional service, 
              and a prime location, it's the perfect base for exploring Midtown and the 
              Arts District.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Boutique accommodations with modern amenities',
                'Walking distance to galleries, restaurants, and entertainment',
                'The Pepper Club restaurant on-site',
                'Personalized concierge services',
                'Unique design reflecting Arts District character',
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
              href="/contact"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Book Your Stay
            </Link>
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg" role="img" aria-label="The English Hotel boutique luxury hotel exterior in Las Vegas Arts District at 921 S Main Street with modern industrial design">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              The English Hotel
            </div>
          </div>
        </div>

        {/* Hotel Experience */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Boutique Difference</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Unlike the mega-resorts dominating the Las Vegas Strip, The English Hotel offers an intimate boutique experience with 
            personalized service, distinctive design, and genuine connection to local culture. Each room reflects contemporary elegance 
            with custom furnishings, locally-curated artwork, luxury bedding, and spa-inspired bathrooms. The hotel eschews generic chain 
            aesthetics in favor of a sophisticated urban vibe that mirrors the Arts District's creative character—think industrial-chic 
            details, curated art pieces, and design elements celebrating Midtown's warehouse heritage.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Guest services emphasize quality over quantity. The 24/7 concierge provides personalized recommendations for Arts District 
            galleries, neighborhood restaurants, and First Friday experiences that guidebooks miss. The Pepper Club restaurant serves 
            hotel guests and local residents alike, creating a neighborhood gathering spot that exemplifies the hotel's integration 
            into the community. This approach resonates with travelers seeking authentic Las Vegas experiences beyond slot machines and 
            buffets—people who want to discover the city's creative soul.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The hotel's location at 921 S Main Street provides unmatched access to Midtown's attractions. Walk to 30+ art galleries, 
            discover chef-driven restaurants, attend monthly First Friday celebrations, and explore the neighborhood's creative energy—all 
            without requiring a car. For visitors considering relocating to Las Vegas or investing in English Residences condo-hotels, 
            staying at The English Hotel offers perfect introduction to Arts District living. Experience the walkability, meet neighborhood 
            regulars, and discover whether Midtown's urban lifestyle matches your preferences. Many English Residences owners first 
            discovered the property by staying at the hotel and falling in love with the neighborhood. Book a stay to test-drive Midtown 
            living before committing to real estate purchase—wake up in the Arts District, explore galleries and restaurants on foot, 
            experience First Friday if timing aligns, and genuinely evaluate whether urban Las Vegas living matches your expectations. 
            This try-before-you-buy approach provides invaluable perspective that virtual tours and property visits cannot replicate. The English 
            Hotel serves as showcase for the neighborhood's potential, offering immersive introduction to Arts District living that helps visitors 
            make informed decisions about whether Midtown's urban energy, cultural programming, and walkable lifestyle align with their long-term 
            residential preferences and investment goals. The hotel's boutique scale ensures personalized attention impossible at large resorts.
          </p>
        </div>

        {/* Amenities */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: '🛏️',
              title: 'Luxury Rooms',
              description:
                'Thoughtfully designed spaces with premium furnishings, high-speed WiFi, and modern conveniences.',
            },
            {
              icon: '🍽️',
              title: 'The Pepper Club',
              description:
                'Award-winning restaurant and bar serving innovative cuisine with locally-sourced ingredients.',
            },
            {
              icon: '🎨',
              title: 'Arts District Access',
              description:
                'Prime location puts you steps away from galleries, First Friday, and cultural events.',
            },
          ].map((amenity) => (
            <div key={amenity.title} className="text-center">
              <div className="text-5xl mb-4">{amenity.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {amenity.title}
              </h3>
              <p className="text-slate-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ownership Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">
                Own a Piece of The English Hotel
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The English Residences offer a unique opportunity to own luxury condo-hotel 
                units within The English Hotel. Enjoy personal use when you want, and generate 
                income when you're away through our professional hotel management program.
              </p>
              <Link
                href="/neighborhood/english-residences"
                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Learn About Residences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Book Your Midtown Experience
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're visiting for a weekend or considering making Midtown your home, 
            The English Hotel is your gateway to the Arts District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book Your Stay
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

