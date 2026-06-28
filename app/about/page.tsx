import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendlyLink } from '../components/calendly-link'
import { Breadcrumb } from '../components/breadcrumb'
import { PersonaIntro } from '../components/persona-intro'

export const metadata: Metadata = {
  title: 'About Walkable Midtown | Arts District Community for Locals',
  description:
    'How Midtown became Las Vegas\'s walkable cultural core — First Friday, 18b galleries, and local life at 921 S Main St. For buyers who choose neighborhood over commute.',
  keywords: 'Midtown Las Vegas history, Arts District transformation, 18b Arts District, walkable Las Vegas, downtown Las Vegas community',
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Midtown Las Vegas Condos',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/about',
  },
  openGraph: {
    title: 'About Midtown Las Vegas | Arts District History',
    description: 'Discover the story of Midtown, the walkable neighborhood in the heart of the Las Vegas Arts District.',
    type: 'website',
    url: 'https://www.midtownlasvegascondos.com/about',
  },
}

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PersonaIntro
            subtitle="Midtown is where Las Vegas locals trade freeway commutes for gallery walks — this is the neighborhood story behind that choice."
            className="text-left mb-8"
          />
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
        <Breadcrumb items={breadcrumbItems} />
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
            and monthly{' '}
            <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
              First Friday
            </Link>
            {' '}celebrations that draw over 10,000 visitors. Unlike typical Las Vegas developments focused on 
            tourists, Midtown serves locals first—creating genuine community rather than manufactured experience. This authenticity 
            resonates with people seeking substance over spectacle, community over crowds.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Evolution of Midtown</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Midtown's transformation from industrial zone to cultural destination represents one of Las Vegas's most successful 
                examples of urban revitalization. The process began organically, as artists and creative entrepreneurs discovered 
                affordable space in abandoned warehouses. What started as individual studios and galleries gradually coalesced into 
                a cohesive arts district, attracting visitors and eventually residents who appreciated the neighborhood's unique character.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The establishment of{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}in 2002 marked a turning point, transforming the neighborhood from a quiet creative enclave into a monthly 
                cultural destination. This event's success demonstrated the area's potential, attracting investment and development 
                that would eventually include residential projects. Today, Midtown represents the successful integration of arts, 
                commerce, and residential living, creating a model for urban development that other cities seek to emulate.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community and Culture</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Midtown's community distinguishes itself through genuine connection and shared values. Unlike neighborhoods defined 
                solely by geography, Midtown residents share a commitment to creativity, sustainability, and authentic urban living. 
                This common ground creates strong social bonds, whether through monthly{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}celebrations, gallery openings, or casual encounters at local cafes and restaurants.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The neighborhood's cultural programming extends beyond First Friday, with year-round events including gallery walks, 
                performance series, and community festivals. The{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Las Vegas Arts District
                </Link>
                {' '}organization works to support local artists and businesses, while residents actively participate in shaping the 
                neighborhood's future through community meetings and collaborative initiatives. This participatory approach ensures 
                that Midtown continues to evolve in ways that preserve its essential character while welcoming new residents and 
                businesses.
              </p>
            </div>
          </div>

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
                <strong>Community Events:</strong> Regular events like{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>{' '}
                bring the neighborhood together in celebration of art and culture.
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
            The Future of Midtown
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Looking ahead, Midtown continues evolving with new residential developments, expanded cultural programming, 
            and infrastructure improvements that enhance walkability and sustainability. This ongoing development ensures 
            Midtown remains dynamic while preserving the authentic character that makes it special. For residents and investors, 
            this means a neighborhood that grows smarter, not just bigger—maintaining cultural identity while improving quality 
            of life for everyone who calls Midtown home.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Choosing where to live shapes daily life in profound ways. Midtown offers something increasingly rare: genuine 
            walkability combined with cultural richness and community connection. Instead of hours commuting from suburban 
            developments, residents walk to work, dinner, and entertainment while building relationships with local business 
            owners. This lifestyle appeals to professionals tired of car-dependent living, empty-nesters seeking vibrant retirement 
            alternatives, and young creatives drawn to the neighborhood's artistic energy. The investment case extends beyond lifestyle 
            to financial performance, with properties consistently appreciating ahead of Las Vegas averages.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Upcoming Developments</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                The Plaza Tower, scheduled to open in 2025, represents the next phase of Midtown's residential growth. This 
                development will bring additional luxury units to the neighborhood while maintaining the area's artistic character. 
                Planned infrastructure improvements include enhanced walkability, expanded public transportation access, and sustainability 
                initiatives that align with the neighborhood's values.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Future developments continue to emphasize the integration of residential and commercial spaces, ensuring that new 
                projects contribute to rather than detract from Midtown's walkable character. The neighborhood's master plan prioritizes 
                cultural amenities, green spaces, and community gathering areas, recognizing that these elements are essential to 
                Midtown's identity and appeal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sustainable Growth</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Midtown's growth strategy focuses on sustainability in multiple dimensions. Environmentally, the neighborhood promotes 
                walkability and reduced car dependence, with initiatives like the{' '}
                <Link href="/neighborhood/ev-program" className="text-slate-900 font-semibold hover:underline">
                  EV Vehicle Program
                </Link>
                {' '}supporting electric vehicle adoption. Socially, development emphasizes community engagement and preservation of 
                local character. Economically, growth benefits both existing residents and new arrivals, with property appreciation 
                balanced by affordable housing initiatives.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The neighborhood's commitment to sustainable growth ensures that Midtown remains attractive to both residents and 
                investors. By maintaining its authentic character while welcoming new development, Midtown creates a model for urban 
                revitalization that other neighborhoods seek to replicate. This balanced approach supports continued appreciation 
                while preserving the qualities that make Midtown special.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Investment</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Ongoing investment in Midtown's cultural infrastructure ensures the neighborhood remains a vibrant arts destination. 
                The Arts District organization continues to support local artists and galleries, while new performance venues and 
                cultural spaces expand programming options. These investments attract visitors, support local businesses, and enhance 
                the quality of life for residents.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Community members actively participate in shaping Midtown's future through neighborhood associations, arts organizations, 
                and business groups. This participatory approach ensures that development serves the community's interests while 
                welcoming new ideas and perspectives. The result is a neighborhood that evolves organically, maintaining its essential 
                character while adapting to new opportunities and challenges.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
            Join the Community
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Whether you're looking to invest in luxury condominiums, explore the vibrant 
            arts scene, or simply experience authentic Las Vegas culture, Midtown welcomes 
            you. Discover what makes this neighborhood the most exciting address in the city.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Prospective Residents</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                If you're considering making Midtown your home, start by exploring the neighborhood during{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}or a weekend gallery walk. Visit local restaurants, chat with gallery owners, and experience the community's 
                energy firsthand. Dr. Jan Duffy specializes in Midtown properties and can provide personalized tours, market insights, 
                and guidance through the entire buying process.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Consider what type of property best matches your lifestyle. Are you seeking a low-maintenance condo with walkable 
                access to galleries and restaurants? Interested in the unique{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  condo-hotel ownership
                </Link>
                {' '}model that generates rental income? Need more space in a townhouse or single-family home? Each option offers 
                different benefits, and Dr. Jan can help you understand which aligns best with your priorities and budget.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Investors</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Midtown offers compelling investment opportunities, with property values appreciating consistently and rental demand 
                supported by the neighborhood's cultural amenities. The{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  English Residences
                </Link>
                {' '}condo-hotel model provides an innovative approach to real estate investment, combining personal use with income 
                generation. Traditional condos and single-family homes also offer strong rental potential, given the neighborhood's 
                appeal to professionals and creatives.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Dr. Jan Duffy provides comprehensive investment analysis, including market trends, rental income projections, and 
                property comparison reports. She understands the unique aspects of Midtown real estate, from HOA considerations to 
                condo-hotel management agreements, ensuring investors make informed decisions. Her expertise extends to financing 
                options, tax implications, and long-term appreciation potential.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h3>
              
              {/* Dr. Jan Duffy Photo */}
              <div className="flex justify-center my-6">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-200 shadow-lg bg-slate-100">
                  <Image
                    src="/images/midtown/dr-jan-duffy.png"
                    alt="Dr. Jan Duffy, Midtown Las Vegas real estate specialist with 30+ years of experience"
                    fill
                    className="object-cover"
                    quality={75}
                    sizes="(max-width: 768px) 192px, 224px"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <p className="text-base text-slate-600 leading-relaxed mb-3">
                Ready to explore Midtown? Contact Dr. Jan Duffy at (702) 500-1980 or{' '}
                <Link href="/contact" className="text-slate-900 font-semibold hover:underline">
                  schedule a consultation
                </Link>
                {' '}to discuss your real estate goals. Whether you're buying, selling, or investing, Dr. Jan provides personalized 
                service tailored to your unique needs. She offers property tours, market analysis, and expert guidance throughout 
                the entire process.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                For those interested in learning more about Midtown before committing to a purchase, consider attending{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}or exploring the{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Arts District
                </Link>
                {' '}on your own. The neighborhood's walkable character makes it easy to experience the area's culture, dining, and 
                community firsthand. Many prospective residents find that spending time in Midtown confirms their decision to make 
                it their home.
              </p>
            </div>
          </div>
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
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
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

