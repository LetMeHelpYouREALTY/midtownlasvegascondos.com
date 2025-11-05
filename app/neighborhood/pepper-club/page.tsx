import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/pepper-club',
  },
}

export default function PepperClubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-900 to-red-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Pepper Club
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Award-winning dining in the heart of Midtown
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Restaurant Image
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Innovative Cuisine, Local Flavors
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The Pepper Club brings elevated dining to the Arts District with a menu that 
              celebrates seasonal ingredients and creative culinary techniques. Located in 
              The English Hotel, we're more than a restaurant—we're a neighborhood gathering place.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you're joining us for weekend brunch, a business lunch, or an intimate 
              dinner, our team is dedicated to providing an exceptional dining experience in 
              a warm, inviting atmosphere.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Chef Todd English's Culinary Vision</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            The Pepper Club represents Chef Todd English's interpretation of modern American cuisine with global influences, 
            focusing on seasonal ingredients and innovative techniques. The menu changes regularly to showcase peak-season produce, 
            sustainable proteins, and creative preparations that surprise while remaining approachable. Signature dishes might include 
            wood-fired steaks with house-made steak sauce variations, fresh pasta with locally-sourced ingredients when available, 
            and creative vegetable preparations that elevate produce beyond side-dish status.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            The restaurant's design reflects Midtown's industrial-chic aesthetic with exposed brick, contemporary art pieces, and 
            intimate lighting that creates sophisticated ambiance without pretension. The space features a central bar perfect for 
            cocktails and casual dining, intimate booth seating for date nights, and larger tables accommodating groups. English 
            Residences owners enjoy priority reservations and exclusive menu previews, integrating the restaurant into the condo-hotel 
            ownership experience.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Beyond regular dinner service, The Pepper Club hosts special events including wine dinners pairing exceptional vintages 
            with multi-course tasting menus, seasonal celebrations highlighting holiday traditions, and occasionally, cooking 
            demonstrations where Chef English or team members share techniques. Private dining options accommodate celebrations, 
            business meetings, or intimate gatherings with customized menus. The restaurant serves as a neighborhood gathering spot 
            where Arts District residents celebrate special occasions, entertain visitors, or simply enjoy exceptional food steps 
            from home. Reservations recommended, especially during First Friday weekends when the entire neighborhood comes alive.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            The Pepper Club's cocktail program deserves special mention, featuring creative libations crafted by skilled mixologists 
            using house-made syrups, fresh herbs, and premium spirits. The bar serves as a social hub where neighborhood regulars 
            mix with hotel guests and Arts District visitors, creating the convivial atmosphere that defines Midtown dining. Happy 
            hour specials and seasonal cocktail menus keep the offerings fresh while maintaining signature drinks that have become 
            neighborhood favorites. For English Residences owners, the restaurant provides the convenience of world-class dining 
            without leaving the building—yet another advantage of the condo-hotel lifestyle that combines luxury residence with 
            hotel amenities.
          </p>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Menu Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Brunch',
                time: 'Saturday & Sunday, 9AM - 2PM',
                description:
                  'Start your weekend with our signature brunch featuring classics with a twist, bottomless mimosas, and live music.',
              },
              {
                title: 'Dinner',
                time: 'Tuesday - Sunday, 5PM - 10PM',
                description:
                  'Explore our seasonal dinner menu featuring locally-sourced ingredients and innovative preparations.',
              },
              {
                title: 'Cocktails',
                time: 'Daily, 5PM - Late',
                description:
                  'Our craft cocktail program features creative libations using house-made ingredients and premium spirits.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-slate-200"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-amber-600 mb-4">
                  {item.time}
                </p>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Perfect Setting
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our space reflects the creative spirit of the Arts District with thoughtful 
              design, local artwork, and an atmosphere that's equally suited for intimate 
              conversations and lively gatherings.
            </p>
            <ul className="space-y-3">
              {[
                'Indoor and outdoor seating',
                'Private dining room for events',
                'Full bar with craft cocktails',
                'Rotating local art exhibitions',
                'Live music on weekends',
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0"
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
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Interior Image
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Host Your Event
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our private dining room and event spaces are perfect for celebrations, corporate 
            gatherings, and special occasions. Let our team create a memorable experience 
            for you and your guests.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Inquire About Events
          </Link>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Visit The Pepper Club
          </h2>
          <p className="text-xl text-white/90 mb-8">
            921 S Main St, Las Vegas, NV 89101<br />
            Inside The English Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Call for Reservations
            </a>
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Nearby Homes
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

