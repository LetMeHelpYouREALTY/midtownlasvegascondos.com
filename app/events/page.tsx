import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Events Calendar | First Friday & More',
  description: 'Discover events in Midtown and the Arts District: First Friday, art walks, Book Festival, Las Vegas Marathon, and more. Live where it happens!',
  keywords: 'Midtown Las Vegas events, First Friday Las Vegas, Arts District events, Las Vegas Book Festival, Las Vegas Marathon, Arts District calendar',
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/events',
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
          <div className="prose prose-lg text-slate-600 space-y-6 mb-12">
            <p>
              Midtown's event calendar reflects the neighborhood's vibrant cultural character. From the monthly{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              {' '}celebration that draws over 10,000 visitors to weekly{' '}
              <Link href="/neighborhood/run-club" className="text-slate-900 font-semibold hover:underline">
                running clubs
              </Link>
              {' '}and gallery walks, Midtown offers year-round activities that build community and showcase local talent. These events 
              create opportunities for residents to connect with neighbors, support local businesses, and experience the Arts District's 
              creative energy firsthand.
            </p>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Monthly Celebrations</h3>
              <p className="mb-3">
                {' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}stands as Midtown's signature event, transforming the Arts District into a monthly street festival. This celebration 
                began in 2002 and has grown into the largest monthly art event in the Southwest. Gallery openings, live music, food trucks, 
                street performers, and interactive art installations create a festive atmosphere that attracts visitors from across Las Vegas 
                and beyond. The event demonstrates Midtown's collaborative spirit, with galleries, restaurants, and businesses working together 
                to create an unforgettable experience.
              </p>
              <p>
                Beyond{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                , the Makers Market on the last Sunday of each month provides another regular gathering opportunity. This outdoor market 
                features local artisans, crafters, and food vendors, creating a space for community commerce and connection. These monthly 
                events create rhythm and anticipation in the neighborhood, giving residents and visitors regular reasons to gather and 
                celebrate.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Weekly Activities</h3>
              <p className="mb-3">
                Weekly events provide ongoing opportunities for community engagement. The{' '}
                <Link href="/neighborhood/run-club" className="text-slate-900 font-semibold hover:underline">
                  Midtown Run Club
                </Link>
                {' '}meets Tuesdays and Thursdays at 6:30 AM, offering residents a chance to stay active while building relationships with 
                neighbors. The group has grown to over 200 members, demonstrating the neighborhood's commitment to health and wellness. 
                Saturday evening gallery walks provide another weekly tradition, with galleries opening their doors for special exhibitions 
                and artist meet-and-greets.
              </p>
              <p>
                These weekly activities create structure and routine in the neighborhood, helping residents build consistent connections 
                with their community. Unlike one-time events, weekly gatherings allow relationships to develop over time, creating deeper 
                social bonds. This regular programming contributes to Midtown's sense of community, distinguishing it from neighborhoods 
                where residents rarely interact beyond their immediate neighbors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Annual Festivals and Special Events</h3>
              <p className="mb-3">
                Annual events bring additional excitement to Midtown's calendar. The Las Vegas Book Festival, held each October, celebrates 
                literature with author talks, book signings, and literary workshops. The Las Vegas Marathon route includes the Arts District, 
                allowing runners to experience Midtown's vibrant streets while participating in this city-wide event. These annual celebrations 
                provide special moments that draw attention to Midtown while creating memorable experiences for residents and visitors.
              </p>
              <p>
                Special events throughout the year add variety to Midtown's programming. Pop-up markets, food festivals, and cultural 
                celebrations create unexpected opportunities for community gathering. These events often emerge organically from neighborhood 
                initiatives, demonstrating Midtown's grassroots character and resident-driven community building.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Participating in Midtown Events</h3>
              <p className="mb-3">
                Participating in Midtown events is as simple as showing up. Most events are free and open to the public, requiring no 
                advance registration or tickets. The{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}street festival, for example, welcomes everyone to stroll through the Arts District, visit galleries, enjoy food 
                trucks, and experience live entertainment. The casual, inclusive atmosphere makes it easy for newcomers to feel comfortable 
                and engaged.
              </p>
              <p>
                For those interested in more active participation, opportunities exist to volunteer, perform, or showcase work. Artists 
                can contact galleries about exhibition opportunities, musicians can reach out to event organizers about performance slots, 
                and community members can volunteer with event coordination. This participatory culture distinguishes Midtown from 
                spectator-focused entertainment districts, creating genuine community engagement.
              </p>
            </div>
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
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400" role="img" aria-label={`${event.title} event in Midtown Las Vegas Arts District`}>
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
                        Explore Arts District events →
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

