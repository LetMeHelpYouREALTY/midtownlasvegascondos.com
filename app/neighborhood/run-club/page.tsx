import Link from 'next/link'
import { Metadata } from 'next'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { RealScoutSection } from '@/app/components/realscout-section'

export const metadata: Metadata = {
  title: 'Midtown Run Club | Community Running Group in Arts District',
  description:
    'Join the Midtown Run Club for weekly group runs through the Las Vegas Arts District. Tuesdays and Thursdays at 6:30 PM. All fitness levels welcome. Build community while staying active in Midtown.',
  keywords: [
    'Midtown Run Club',
    'Las Vegas running group',
    'Arts District running',
    'community fitness Las Vegas',
    'Midtown Las Vegas activities',
    'group runs Las Vegas',
  ],
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/neighborhood/run-club',
  },
}

export default function RunClubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Midtown Run Club
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Run with your neighbors, explore the Arts District
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-white font-semibold">
              Tuesdays & Thursdays at 6:30 AM
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Your Community Running Group
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          Started in 2024, the Midtown Run Club has grown to over 200 regular members who 
          meet twice weekly to run through the Arts District and surrounding neighborhoods. 
          All paces are welcome—from beginners to experienced marathoners.
        </p>
        <div className="max-w-3xl mx-auto text-left mt-12">
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Running in Midtown offers unique advantages beyond typical suburban routes. The Arts District's urban grid provides varied scenery 
            every run—passing colorful murals, gallery windows displaying contemporary art, and local cafes beginning morning service. Unlike 
            monotonous loops through residential subdivisions, Midtown routes change character block by block, maintaining engagement through 
            visual variety. Early morning runs encounter delivery trucks supplying restaurants, artists heading to studios, and other runners 
            exploring the neighborhood's energetic awakening.
          </p>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            The community aspect distinguishes Midtown Run Club from solo training. Regular members form genuine friendships, supporting each 
            other's fitness goals while socializing during post-run coffee at nearby cafes. The group maintains an inclusive culture where 
            experienced marathoners pace beginners, faster runners circle back to encourage slower members, and everyone celebrates personal 
            improvements rather than competitive achievements. This supportive environment helps newcomers build running habits while providing 
            experienced runners with training partners and social motivation.
          </p>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Routes vary weekly, exploring different Arts District areas and occasional ventures to nearby neighborhoods. Summer runs start 
            earlier to avoid desert heat, while winter allows later starts with comfortable temperatures. The club occasionally organizes 
            special events including{' '}
            <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
              First Friday
            </Link>
            {' '}fun runs where participants stop at galleries, charity fundraising runs supporting local 
            causes, and social runs ending at neighborhood restaurants for group breakfast. For Midtown residents, the Run Club provides built-in 
            fitness structure, social connection, and deeper neighborhood exploration—discovering hidden murals, new business openings, and 
            Arts District corners you might otherwise miss.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Urban Running Advantages</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                Running in Midtown offers unique advantages beyond typical suburban routes. The{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Arts District's
                </Link>
                {' '}urban grid provides varied scenery 
                every run—passing colorful murals, gallery windows displaying contemporary art, and local cafes beginning morning service. Unlike 
                monotonous loops through residential subdivisions, Midtown routes change character block by block, maintaining engagement through 
                visual variety. Early morning runs encounter delivery trucks supplying restaurants, artists heading to studios, and other runners 
                exploring the neighborhood's energetic awakening.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The neighborhood's walkable character makes running especially enjoyable, with well-maintained sidewalks, minimal traffic during 
                early morning hours, and interesting architecture and street art that provide visual interest throughout the run. This urban 
                environment creates a dynamic running experience that keeps routes interesting even after running them multiple times. The variety 
                of routes available means runners can explore different parts of the Arts District while maintaining their fitness routine.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community and Social Connection</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                The community aspect distinguishes Midtown Run Club from solo training. Regular members form genuine friendships, supporting each 
                other's fitness goals while socializing during post-run coffee at nearby cafes. The group maintains an inclusive culture where 
                experienced marathoners pace beginners, faster runners circle back to encourage slower members, and everyone celebrates personal 
                improvements rather than competitive achievements. This supportive environment helps newcomers build running habits while providing 
                experienced runners with training partners and social motivation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The club welcomes visitors considering Midtown living—join a run to experience 
                the neighborhood's walkability firsthand, meet residents who can share authentic perspectives about Arts District life, and discover 
                whether the community vibe matches your expectations. Many current Midtown residents first encountered the neighborhood through Run Club, 
                fell in love with the energy and people, and eventually purchased properties to become permanent community members. Running provides 
                unique neighborhood perspective—experiencing streets during quiet morning hours, witnessing the transformation from sleeping 
                residential area to bustling cultural center, and literally covering more ground than walking tours allow.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Special Events and Activities</h3>
              <p className="text-lg text-slate-600 mb-3 leading-relaxed">
                The club occasionally organizes special events that combine running with community engagement. First Friday fun runs allow participants 
                to explore galleries while maintaining their fitness routine, creating a unique way to experience the monthly{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  Arts District celebration
                </Link>
                . Charity fundraising runs support local causes while bringing the running community together for meaningful purposes. Social runs 
                ending at neighborhood restaurants for group breakfast create opportunities for deeper connection beyond the running itself.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                These special events enhance the club's community-building role while providing variety to the regular running schedule. They also 
                demonstrate how fitness and community engagement can intersect in Midtown, creating a model for how active lifestyles contribute to 
                neighborhood vitality. For residents, these events provide additional reasons to participate in the club, while for visitors, they 
                offer unique ways to experience the Arts District's community culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Weekly Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                day: 'Tuesday',
                time: '6:30 AM',
                distance: '3-5 miles',
                description:
                  'Easy-paced social run through the Arts District. Perfect for beginners or as a recovery run.',
              },
              {
                day: 'Thursday',
                time: '6:30 AM',
                distance: '5-8 miles',
                description:
                  'Tempo run with optional faster pace groups. Great for building endurance and speed.',
              },
            ].map((run) => (
              <div
                key={run.day}
                className="bg-white rounded-lg p-8 shadow-sm border border-slate-200"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {run.day}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {run.time}
                  </span>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full">
                    {run.distance}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{run.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Point */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Where We Meet
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We gather at Midtown Plaza every Tuesday and Thursday morning. Look for the 
              group near the main entrance—you can't miss us!
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-2">Meeting Point</h3>
              <p className="text-slate-600 mb-4">
                Midtown Plaza<br />
                921 S Main St<br />
                Las Vegas, NV 89101
              </p>
              <p className="text-sm text-slate-500">
                Free street parking available on nearby streets. Arrive 10 minutes early 
                for warm-up and introductions.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-slate-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Run Club Photo
            </div>
          </div>
        </div>
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
                icon: '👋',
                title: 'All Levels Welcome',
                description: 'Whether you\'re new to running or training for a marathon, there\'s a place for you.',
              },
              {
                icon: '🏃',
                title: 'Multiple Pace Groups',
                description: 'We split into pace groups so everyone runs with people at their speed.',
              },
              {
                icon: '☕',
                title: 'Post-Run Coffee',
                description: 'Stick around after the run for coffee and conversation at a local cafe.',
              },
              {
                icon: '📅',
                title: 'Special Events',
                description: 'Monthly longer runs, group race entries, and social events throughout the year.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
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

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Why Join?
        </h2>
        <div className="space-y-6">
          {[
            {
              title: 'Build Community',
              description: 'Meet your neighbors and make lasting friendships with fellow Midtown residents.',
            },
            {
              title: 'Stay Accountable',
              description: 'Having a regular running group helps you stick to your fitness goals.',
            },
            {
              title: 'Explore the Neighborhood',
              description: 'Discover new routes and hidden gems in the Arts District and downtown Las Vegas.',
            },
            {
              title: 'Improve Your Running',
              description: 'Learn from experienced runners and push yourself to new personal bests.',
            },
            {
              title: 'Start Your Day Right',
              description: 'Morning runs energize you for the day ahead and clear your mind.',
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start bg-slate-50 rounded-lg p-6"
            >
              <svg
                className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1"
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
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RealScoutListings
            title="Live Near the Run Club"
            description="Find your home in walkable Midtown Las Vegas"
            priceMin="250000"
            priceMax="2000000"
            sortOrder="NEWEST"
            propertyTypes=",SFR,CONDO,TC"
            listingStatus="For Sale"
          />
        </div>
      </section>

      <RealScoutSection showListings={false} searchTitle="Find Your Home Near Midtown Run Club" />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us This Week
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            No sign-up required—just show up and run! Follow us on social media for updates, 
            route changes, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Get More Info
            </Link>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

