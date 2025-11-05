import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/first-fridays',
  },
}

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

      {/* First Friday Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Your First Friday Guide</h2>
          <div className="prose prose-lg text-slate-600 space-y-6">
            <p>
              First Friday transforms the Arts District into Las Vegas's largest monthly street festival, attracting over 10,000 
              visitors who explore 30+ galleries, enjoy live music on multiple stages, browse artisan markets, and experience the 
              neighborhood's creative energy concentrated into one spectacular evening. The event runs from 5 PM to 11 PM on the first 
              Friday of every month, rain or shine, creating a reliable cultural anchor for the Midtown community.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-6">What to Expect</h3>
            <p>
              Arrive between 5-6 PM to beat crowds and secure parking. Many galleries open earlier for serious collectors and early 
              birds. Between 7-9 PM, the event peaks with maximum energy—streets fill with people, musicians perform, food trucks serve 
              dinner, and galleries host artist meet-and-greets. After 9 PM, crowds thin slightly, making it easier to have deeper 
              conversations with gallery owners about artwork. Some venues stay open past official closing, extending the party for 
              dedicated attendees.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-6">Parking and Transportation</h3>
            <p>
              Street parking fills quickly after 6 PM, but several strategies work well: arrive early and park near Midtown Plaza, 
              use paid lots along Casino Center Boulevard, or rideshare to avoid parking stress entirely. Many Midtown residents host 
              friends who walk from their condos—one significant advantage of living in the Arts District. The event is entirely 
              walkable once you arrive, with everything concentrated in roughly 18 blocks.
            </p>
            <p>
              Living in Midtown means First Friday becomes your monthly neighborhood party rather than a destination event. Residents 
              enjoy the convenience of walking to galleries, ducking home to refresh, and experiencing the energy without transportation 
              hassles. This represents the ultimate urban living advantage—world-class cultural events literally outside your door.
            </p>
            <p>
              First-time visitors should start at the Arts District information booth near Main Street and Charleston to grab an event 
              map showing all participating galleries, food vendors, and performance stages. Come with comfortable walking shoes, bring 
              cash for artisan vendors (though most galleries and food trucks accept cards), and don't hesitate to engage with artists 
              and gallery owners—they're passionate about sharing their work and stories. The event is family-friendly earlier in the 
              evening, though crowds and atmosphere become more adult-oriented after 9 PM. Consider purchasing art during First Friday 
              to support local artists and acquire unique pieces that remind you of Las Vegas's creative soul beyond the Strip's 
              commercial galleries.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Event Highlights
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
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Find Your Arts District Home
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

