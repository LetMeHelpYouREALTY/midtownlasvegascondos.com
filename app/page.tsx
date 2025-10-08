import Link from 'next/link'
import Image from 'next/image'
import { Newsletter } from './components/newsletter'
import { UpcomingEvents } from './components/upcoming-events'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet me
            <br />
            in Midtown.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover luxury living in the heart of Las Vegas Arts District
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#residences"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Explore Residences
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Midtown at the Arts District */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Midtown at the Arts District
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Say hello to the most rapidly evolving cultural center in the heart of Las Vegas. 
            This is where you can enjoy a walkable neighborhood with art galleries and privately 
            owned restaurants and now residences at Midtown.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {['Shop', 'Dine', 'Live', 'Stay', 'Events'].map((category) => (
            <Link
              key={category}
              href={`#${category.toLowerCase()}`}
              className="aspect-square bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg flex items-center justify-center group"
            >
              <span className="text-2xl font-semibold text-slate-900 group-hover:scale-110 transition-transform">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Where is Midtown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                The Arts District <span className="italic">North of Charleston</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Where is Midtown?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Emerging is Midtown, the new neighborhood just north of Charleston, offering 
                the perfect homebase to fully experience the Las Vegas Arts District.
              </p>
            </div>
            <div className="aspect-video bg-slate-200 rounded-lg">
              {/* Map or image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey of Transformation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Constantly Evolving but Always True to Itself
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Journey of Transformation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From its origins as an industrial hub to the art center of Sin City, change is 
            baked into the Arts District identity. Witness the transformation of a neighborhood 
            that continues to redefine art, design and culture.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
          <div className="space-y-12">
            {[
              { year: '1997', event: 'Wes Myles opens the Arts Factory' },
              { year: '1999', event: 'Mayor Oscar Goodman elected' },
              { year: '2002', event: 'Renamed the Las Vegas Arts District', event2: 'Cindy Funkhouser founds First Friday' },
              { year: '2009', event: '18b Arts District sign installed on Casino Center Blvd.' },
              { year: '2014', event: 'Anthony Bourdain highlights Makers & Finders on "Parts Unknown"' },
              { year: '2016', event: 'Majestic Repertory Theatre Opens' },
              { year: '2022', event: 'The English Hotel Opens', event2: 'The Pepper Club Opens' },
              { year: '2024', event: 'CNN called the Arts District "the most exciting neighborhood" in Las Vegas' },
              { year: '2025', event: 'The Plaza Tower will open' },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{item.year}</div>
                    <p className="text-slate-600">{item.event}</p>
                    {item.event2 && <p className="text-slate-600 mt-2">{item.event2}</p>}
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay in the know with what's happening in Midtown. From art walks and food 
              festivals to pop-up markets and live performances, there's always something 
              exciting to discover.
            </p>
          </div>
          <UpcomingEvents />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get the latest Midtown happenings in your inbox
          </h2>
          <Newsletter />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600">
                921 S Main St<br />
                Las Vegas, NV 89101
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">
                <a href="tel:7025001955" className="hover:text-slate-900 transition-colors">
                  (702) 500-1955
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:DrJanSells@MidtownLasVegasCondos.com" className="hover:text-slate-900 transition-colors">
                  DrJanSells@MidtownLasVegasCondos.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600">
                Mon-Fri: 9 am – 5 pm<br />
                Sat/Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
