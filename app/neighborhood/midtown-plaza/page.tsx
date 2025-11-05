import Link from 'next/link'
import { RealScoutSearch } from '@/app/components/realscout-search'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { PageFAQ } from '@/app/components/page-faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Midtown Plaza Las Vegas | Shopping, Dining & Entertainment',
  description: 'The heart of Midtown - walkable access to local restaurants, shops, and Arts District culture. Find homes near Midtown Plaza. Call (702) 500-1955.',
  keywords: 'Midtown Plaza Las Vegas, Arts District shopping, downtown Las Vegas dining, walkable Las Vegas neighborhood',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/midtown-plaza',
  },
}

export default function MidtownPlazaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Midtown Plaza
          </h1>
          <p className="text-xl text-white/90 mb-8">
            The heart of Midtown - dining, shopping, and entertainment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Your Neighborhood Hub
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Midtown Plaza serves as the central gathering place for the neighborhood, 
              offering a curated mix of local businesses, restaurants, and community spaces. 
              This is where Midtown comes together.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The Plaza's businesses reflect the Arts District's independent spirit. Locally-owned restaurants serve everything from 
              artisan coffee and fresh pastries for breakfast to craft cocktails and chef-driven dinners. Retail shops offer curated 
              selections you won't find in corporate chains—vintage clothing boutiques, contemporary art galleries doubling as retail 
              spaces, specialty food markets featuring local producers, and home goods stores emphasizing sustainable, handcrafted items. 
              Many businesses participate in First Friday events, extending hours and hosting special promotions that integrate the Plaza 
              into the Arts District's monthly celebration.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              For Midtown residents, the Plaza provides essential conveniences within walking distance. Need groceries? The specialty market 
              stocks fresh produce and pantry staples. Want fresh flowers? The local florist creates custom arrangements. Looking for a 
              gift? Artisan shops offer unique options impossible to find at conventional malls. This walkable access to daily needs—without 
              requiring car trips to distant strip malls—represents a fundamental lifestyle shift that Midtown residents consistently cite 
              as transformative. Parking is available with both street spaces and nearby lots, though many Plaza visitors arrive on foot from 
              surrounding condos and apartments, creating the pedestrian-oriented streetscape that defines authentic urban neighborhoods.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The Plaza also serves as a social hub where neighbors encounter each other organically during daily routines. Unlike suburban 
              communities where residents only meet through scheduled events, Midtown's walkability creates spontaneous social interactions— 
              running into neighbors at the coffee shop, chatting with friends while browsing the farmer's market, or joining impromptu 
              gatherings on Plaza patios. This casual community building contributes to the strong neighborly bonds that make Midtown feel 
              like a village within Las Vegas's urban landscape. For potential residents evaluating different areas, proximity to Midtown 
              Plaza translates to both convenience and community connection. Living near the Plaza means daily errands become pleasant 
              neighborhood walks rather than car-dependent chores, fundamentally improving quality of life in ways suburban residents rarely 
              experience. This walkable convenience, combined with the Plaza's locally-owned character and community atmosphere, exemplifies 
            why buyers increasingly prioritize Midtown properties despite often-higher per-square-foot costs compared to generic Las Vegas 
            developments. The Plaza continues evolving with new restaurant openings, retail additions, and seasonal events that keep 
            the commercial district fresh and engaging, ensuring residents always discover something new even after years of neighborhood 
            familiarity. First Friday participation showcases this dynamism, with Plaza businesses hosting special events, extending hours, and creating 
            unique promotions that integrate shopping and dining with Arts District's monthly celebration.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Locally-owned restaurants and cafes',
                'Unique retail shops and boutiques',
                'Community event spaces',
                'Outdoor seating and gathering areas',
                'Easy walkability to all Midtown attractions',
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
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg" role="img" aria-label="Midtown Plaza shopping and dining district in Las Vegas Arts District with walkable streets, local restaurants, and unique retail shops">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Midtown Plaza
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Dining',
              description:
                'From casual cafes to upscale restaurants, enjoy a diverse culinary scene featuring local favorites and innovative cuisine.',
            },
            {
              title: 'Shopping',
              description:
                'Discover unique boutiques and shops offering everything from local art to artisan goods.',
            },
            {
              title: 'Community',
              description:
                'Regular events, markets, and gatherings make Midtown Plaza the social heart of the neighborhood.',
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

      {/* Available Listings Near Plaza */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Homes Near Midtown Plaza"
            description="Walk to restaurants, shops, and entertainment from these properties"
            priceMin="200000"
            priceMax="1000000"
            sortOrder="PRICE_LOW"
            propertyTypes=",CONDO,SFR"
            limit="9"
          />
        </div>
      </section>

      {/* Property Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Find Homes Near Midtown Plaza
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Search all available properties in walking distance
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
            title="Midtown Plaza FAQ"
            faqs={[
              {
                question: 'What businesses are in Midtown Plaza?',
                answer:
                  'Midtown Plaza is home to locally-owned restaurants, unique retail shops, cafes, and community spaces. It serves as the central hub for the neighborhood with new businesses regularly opening.',
              },
              {
                question: 'Is parking available near Midtown Plaza?',
                answer:
                  'Yes! Street parking is available throughout Midtown, and many residential properties near the Plaza include assigned parking. First Friday events may have busier parking, but the neighborhood is very walkable.',
              },
              {
                question: 'How far is Midtown Plaza from the Strip?',
                answer:
                  'Midtown Plaza is approximately 2-3 miles from the Las Vegas Strip, about a 10-minute drive or rideshare. Many residents appreciate being close enough to work on the Strip but living in a walkable neighborhood.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Live Near Midtown Plaza
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the vibrant heart of the Arts District with walkable access to restaurants, shops, and entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Find Your Home
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

