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
                and creative spaces showcasing local and international talent.
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
                offering diverse dining experiences.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Experience Midtown?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us today to learn more about living in Las Vegas's most dynamic neighborhood.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

