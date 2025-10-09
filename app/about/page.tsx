import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Midtown Las Vegas | Arts District History & Community',
  description: 'Discover the story of Midtown, the walkable neighborhood north of Charleston in the heart of the Las Vegas Arts District. From industrial hub to cultural center.',
  keywords: 'Midtown Las Vegas history, Arts District transformation, 18b Arts District, walkable Las Vegas, downtown Las Vegas community',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Midtown
          </h1>
          <p className="text-xl text-white/90">
            Discover the story of Las Vegas's most exciting neighborhood
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            The Heart of the Arts District
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Midtown Las Vegas represents a unique blend of urban living and cultural vibrancy. 
            Located just north of Charleston Boulevard in the heart of the Las Vegas Arts District, 
            Midtown has emerged as the city's premier destination for those seeking an authentic, 
            walkable neighborhood experience.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
            Our Vision
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We believe in creating spaces where art, culture, and community converge. Midtown 
            is more than just a place to live—it's a lifestyle centered around creativity, 
            connection, and authentic experiences.
          </p>
          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            Since 2015, Midtown has experienced remarkable transformation, with property values increasing an average of 45% 
            as urban revitalization efforts converted former industrial warehouses into sought-after residential and commercial 
            destinations. This growth reflects Las Vegas's evolution beyond its entertainment reputation, proving the city offers 
            world-class cultural amenities and authentic urban living. The neighborhood now attracts creative professionals, young 
            families, empty-nesters seeking walkable communities, and investors recognizing the area's appreciation potential and 
            cultural significance.
          </p>
          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            What began as a grassroots artist movement in the late 1990s has matured into a thriving mixed-use neighborhood where 
            residents enjoy morning coffee at local roasters, afternoon gallery visits, evening dinners at chef-driven restaurants, 
            and monthly First Friday celebrations that draw over 10,000 visitors. Unlike typical Las Vegas developments focused on 
            tourists, Midtown serves locals first—creating genuine community rather than manufactured experience. This authenticity 
            resonates with people seeking substance over spectacle, community over crowds.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
            What Makes Midtown Special
          </h2>
          <ul className="space-y-4 text-lg text-slate-600">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-slate-900 mr-3 flex-shrink-0 mt-1"
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
              <span>
                <strong>Walkable Community:</strong> Everything you need is within walking 
                distance—galleries, restaurants, cafes, and entertainment.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-slate-900 mr-3 flex-shrink-0 mt-1"
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
              <span>
                <strong>Vibrant Arts Scene:</strong> Home to numerous galleries, studios, 
                and creative spaces showcasing local and international talent. Discover the{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  18b Arts District
                </Link>.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-slate-900 mr-3 flex-shrink-0 mt-1"
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
              <span>
                <strong>Culinary Excellence:</strong> Locally-owned restaurants and cafes 
                offering diverse dining experiences. Visit{' '}
                <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                  The Pepper Club
                </Link>{' '}
                or explore{' '}
                <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                  Midtown Plaza
                </Link>.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-slate-900 mr-3 flex-shrink-0 mt-1"
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
              <span>
                <strong>Community Events:</strong> Regular events like First Friday bring 
                the neighborhood together in celebration of art and culture.
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
            Join the Community
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Whether you're looking to invest in luxury condominiums, explore the vibrant 
            arts scene, or simply experience authentic Las Vegas culture, Midtown welcomes 
            you. Discover what makes this neighborhood the most exciting address in the city.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Midtown?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Dr. Jan today to learn more about living in Las Vegas's most dynamic neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Start Your Search
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

