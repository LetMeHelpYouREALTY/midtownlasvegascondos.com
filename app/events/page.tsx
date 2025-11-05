import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Events Calendar | First Friday & More',
  description: 'Discover events in Midtown and the Arts District: First Friday, art walks, Book Festival, Las Vegas Marathon, and more. Live where it happens!',
  keywords: 'Midtown Las Vegas events, First Friday Las Vegas, Arts District events, Las Vegas Book Festival, Las Vegas Marathon, Arts District calendar',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/events',
  },
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
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Stay in the know with what's happening in Midtown. From art walks and food 
            festivals to pop-up markets and live performances, there's always something 
            exciting to discover.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Monthly First Fridays, weekly run clubs, annual book festivals, and seasonal celebrations make Midtown Las Vegas's most culturally active neighborhood.
          </p>
        </div>
      </section>

      {/* Event Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">The Midtown Event Experience</h2>
          <div className="prose prose-lg text-slate-600 space-y-6">
            <p>
              Midtown's event calendar reflects the neighborhood's unique blend of art, culture, and community engagement. Unlike entertainment 
              districts focused purely on tourist attractions, Midtown events serve locals first—creating authentic gatherings that prioritize 
              community connection over commercial spectacle. This philosophy manifests in First Friday's grassroots atmosphere, the Run Club's 
              inclusive culture, and seasonal celebrations that genuinely bring neighbors together rather than simply extracting tourist dollars.
            </p>
            <p>
              The events transform how residents experience their neighborhood. First Friday converts quiet streets into vibrant festivals monthly. 
              The Run Club provides built-in fitness structure and social connections. The Book Festival celebrates literacy and learning. The Las 
              Vegas Marathon showcases the city to runners nationwide. These regular gatherings create rhythm and anticipation—residents mark calendars, 
              plan around events, and incorporate them into lifestyle routines. This predictable cultural programming distinguishes Midtown from typical 
              residential neighborhoods where community events feel sporadic or forced.
            </p>
            <p>
              For prospective residents evaluating Midtown, the event calendar demonstrates neighborhood vitality and community strength. Active event 
              participation indicates resident investment in the area's success, while diverse programming suggests the neighborhood accommodates varied 
              interests and demographics. When visiting Midtown, attend events to observe community dynamics, meet residents who can share authentic 
              perspectives, and experience the energy that makes the Arts District special. These real-world interactions provide invaluable insight 
              beyond property tours and listing photos, helping you determine whether Midtown's community culture aligns with your social preferences 
              and lifestyle expectations.
            </p>
            <p>
              Living in Midtown means events become convenient neighborhood activities rather than destination excursions requiring planning and 
              transportation. Residents walk to First Friday instead of fighting traffic, join Run Club without dawn drives across town, and explore 
              the Book Festival steps from home. This convenience dramatically increases event participation, creating the high engagement that makes 
              Midtown's community so vibrant. For event enthusiasts who currently drive hours to attend cultural programming, the walkable convenience 
              represents lifestyle transformation worth the higher per-square-foot real estate costs. The events also drive property values—homes near 
              First Friday enjoy premium pricing due to location desirability, while Run Club routes passing properties demonstrate walkability that 
              attracts health-conscious buyers. Understanding the event calendar helps evaluate specific properties for how they experience Midtown's 
              cultural programming, whether located at the energetic center near Main Street or quieter edges offering more residential tranquility. Event proximity 
              influences daily living patterns significantly.
            </p>
          </div>
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

