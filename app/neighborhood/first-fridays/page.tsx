import Link from 'next/link'

export default function FirstFridaysPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            First Friday Las Vegas
          </h1>
          <p className="text-xl text-white/90 mb-8">
            The Arts District's legendary monthly celebration
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-white font-semibold">
              Every First Friday of the Month | 5:00 PM - 11:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Las Vegas's Largest Monthly Art Event
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          Founded in 2002 by Cindy Funkhouser, First Friday has grown into one of the most 
          anticipated events in Las Vegas. On the first Friday of every month, the Arts 
          District transforms into a vibrant street festival celebrating art, music, food, 
          and community.
        </p>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Art Galleries',
                description: 'Over 30 galleries open their doors with new exhibitions, artist meet-and-greets, and special showings.',
              },
              {
                icon: '🎵',
                title: 'Live Music',
                description: 'Multiple stages featuring local bands, DJs, and performers throughout the district.',
              },
              {
                icon: '🍔',
                title: 'Food & Drink',
                description: 'Food trucks, restaurant specials, and craft cocktails from local establishments.',
              },
              {
                icon: '🛍️',
                title: 'Artisan Market',
                description: 'Shop from local artists, crafters, and vendors offering unique handmade goods.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Visitors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Tips for First-Time Visitors
        </h2>
        <div className="space-y-6">
          {[
            {
              title: 'Arrive Early',
              description: 'The event starts at 5 PM, but arriving early helps you beat the crowds and find parking easier.',
            },
            {
              title: 'Wear Comfortable Shoes',
              description: 'You\'ll be doing a lot of walking! The Arts District spans 18 blocks, so comfortable footwear is essential.',
            },
            {
              title: 'Bring Cash',
              description: 'While many vendors accept cards, cash is king at the artisan market and with some food trucks.',
            },
            {
              title: 'Stay Hydrated',
              description: 'Las Vegas weather can be extreme. Bring water, especially during summer months.',
            },
            {
              title: 'Support Local',
              description: 'First Friday is all about community. Consider purchasing from local artists and businesses.',
            },
            {
              title: 'Check the Schedule',
              description: 'Some galleries have special events or artist talks at specific times. Plan accordingly!',
            },
          ].map((tip) => (
            <div key={tip.title} className="flex items-start bg-slate-50 rounded-lg p-6">
              <svg
                className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-slate-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting There */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Getting There
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Parking</h3>
              <p className="text-white/80">
                Street parking and several lots available. Arrive early for best options.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold mb-3">Public Transit</h3>
              <p className="text-white/80">
                Multiple bus routes serve the Arts District. Check RTC Southern Nevada for schedules.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚶</div>
              <h3 className="text-xl font-bold mb-3">Walk from Midtown</h3>
              <p className="text-white/80">
                Live in Midtown? You're already here! Everything is within walking distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Live Where First Friday Happens
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Imagine having Las Vegas's best monthly event right outside your door. 
            Discover luxury living in the heart of the Arts District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

