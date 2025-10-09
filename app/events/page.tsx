import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Events Calendar | First Friday & More',
  description: 'Discover events in Midtown and the Arts District: First Friday, art walks, Book Festival, Las Vegas Marathon, and more. Live where it happens!',
  keywords: 'Midtown Las Vegas events, First Friday Las Vegas, Arts District events, Las Vegas Book Festival, Las Vegas Marathon, Arts District calendar',
}

export default function EventsPage() {
  const events = [
    {
      title: 'First Friday',
      date: 'First Friday of Every Month',
      time: '5:00 PM - 11:00 PM',
      description:
        'Experience the monthly celebration of art, culture, and community. First Friday transforms the Arts District into a vibrant street festival.',
      category: 'Monthly',
      link: '/neighborhood/first-fridays',
    },
    {
      title: 'The Las Vegas Book Festival',
      date: 'Saturday, October 18th, 2025',
      time: '10:00 AM - 6:00 PM',
      description:
        'A celebration of literature featuring author talks, book signings, and literary workshops for all ages.',
      category: 'Annual',
    },
    {
      title: '2025 Las Vegas Marathon',
      date: 'Sunday, October 26th, 2025',
      time: '5:00 AM - 2:00 PM',
      description:
        'Run through the heart of Las Vegas including the vibrant Arts District. Multiple race distances available.',
      category: 'Annual',
    },
    {
      title: 'Arts District Gallery Walk',
      date: 'Every Saturday',
      time: '6:00 PM - 9:00 PM',
      description:
        'Explore the local galleries featuring works from emerging and established artists. Meet the artists and enjoy complimentary refreshments.',
      category: 'Weekly',
    },
    {
      title: 'Midtown Run Club',
      date: 'Tuesdays & Thursdays',
      time: '6:30 AM',
      description:
        'Join fellow runners for a community run through Midtown and the Arts District. All paces welcome.',
      category: 'Weekly',
      link: '/neighborhood/run-club',
    },
    {
      title: 'Makers Market',
      date: 'Last Sunday of Every Month',
      time: '9:00 AM - 3:00 PM',
      description:
        'Shop local artisans, crafters, and food vendors at this monthly outdoor market.',
      category: 'Monthly',
    },
  ]

  const categories = ['All', 'Weekly', 'Monthly', 'Annual']

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Events in Midtown
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay in the know with what's happening in Midtown. From art walks and food 
            festivals to pop-up markets and live performances, there's always something 
            exciting to discover.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                Event Image
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full mb-3">
                  {event.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {event.link ? (
                    <Link href={event.link} className="hover:underline">
                      {event.title}
                    </Link>
                  ) : (
                    event.title
                  )}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-slate-600">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-slate-600">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                </div>
                <p className="text-slate-600">
                  {event.description}
                  {event.link && (
                    <>
                      {' '}
                      <Link href={event.link} className="text-slate-900 font-semibold hover:underline">
                        Learn more →
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Midtown Events Year-Round
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Live in the heart of the action. Contact Dr. Jan to find your perfect home in Midtown.
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

