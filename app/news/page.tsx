import Link from 'next/link'

export default function NewsPage() {
  const newsArticles = [
    {
      date: 'January 15, 2025',
      category: 'Development',
      title: 'Plaza Tower Set to Open in 2025',
      excerpt:
        'The highly anticipated Plaza Tower is on track to open later this year, bringing additional luxury residences and retail space to Midtown.',
      image: 'plaza-tower',
    },
    {
      date: 'January 10, 2025',
      category: 'Community',
      title: 'Midtown Run Club Celebrates One Year Anniversary',
      excerpt:
        'The popular Midtown Run Club marks its first year with over 200 regular members and plans to expand to additional weekly runs.',
      image: 'run-club',
    },
    {
      date: 'December 28, 2024',
      category: 'Arts & Culture',
      title: 'CNN Features Arts District as "Most Exciting Neighborhood"',
      excerpt:
        'National recognition continues as CNN highlights the Las Vegas Arts District as one of the most dynamic urban neighborhoods in America.',
      image: 'cnn-feature',
    },
    {
      date: 'December 15, 2024',
      category: 'Business',
      title: 'Three New Restaurants Opening in Midtown Plaza',
      excerpt:
        'The culinary scene continues to grow with three new locally-owned restaurants set to open in early 2025.',
      image: 'restaurants',
    },
    {
      date: 'November 30, 2024',
      category: 'Events',
      title: 'First Friday Sets Attendance Record',
      excerpt:
        'November\'s First Friday drew the largest crowd in the event\'s history, with an estimated 15,000 visitors celebrating art and community.',
      image: 'first-friday',
    },
    {
      date: 'November 15, 2024',
      category: 'Development',
      title: 'English Residences Now Available',
      excerpt:
        'The English Hotel announces the availability of luxury condo-hotel residences, offering owners the perfect blend of investment and lifestyle.',
      image: 'english-residences',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Midtown News
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Stay updated on the latest developments, events, and stories from 
            Las Vegas's most dynamic neighborhood.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From new restaurant openings and property developments to cultural milestones and community achievements, discover what's happening in Midtown.
          </p>
        </div>
      </section>

      {/* News Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg text-slate-600 space-y-4 mb-12">
          <p>
            Staying informed about Midtown developments, new business openings, cultural events, and real estate market trends helps current 
            and prospective residents make informed decisions about this rapidly evolving neighborhood. Our news section covers everything from 
            major infrastructure projects and new residential developments to gallery openings, restaurant debuts, and community initiatives that 
            shape Midtown's character. The Arts District's momentum shows no signs of slowing, with monthly announcements of new businesses, 
            cultural programming expansions, and real estate projects that continue positioning Midtown as Las Vegas's premier urban neighborhood.
          </p>
          <p>
            Recent headlines demonstrate the neighborhood's trajectory. The Plaza Tower's 2025 opening adds significant residential inventory and 
            retail space, expanding Midtown's footprint while maintaining its walkable scale. The Run Club's growth to over 200 members illustrates 
            community engagement beyond First Friday, creating year-round social infrastructure that strengthens neighborhood bonds. CNN's recognition 
            of the Arts District as "the most exciting neighborhood" validates what locals have known for years—Midtown offers authentic urban culture 
            that rivals established arts districts in larger cities.
          </p>
          <p>
            New restaurant announcements particularly excite residents and food enthusiasts. Midtown's culinary scene evolves constantly, with 
            chef-driven concepts, ethnic cuisines, and specialty cafes filling former warehouse spaces with innovative dining experiences. Unlike 
            the Strip's corporate restaurant groups, Midtown prioritizes locally-owned establishments operated by passionate owners who live in or 
            near the neighborhood. This local ownership creates authentic experiences and personal connections impossible at chain restaurants, while 
            supporting the independent businesses that define Midtown's character.
          </p>
          <p>
            For prospective residents and investors, monitoring Midtown news provides valuable market intelligence. First Friday attendance records 
            signal growing awareness and visitation, potentially supporting retail businesses and property values. New residential developments indicate 
            developer confidence and expanding inventory. Restaurant openings suggest economic vitality and consumer demand. English Residences 
            availability represents rare opportunities in the condo-hotel market. Collectively, these news items paint a picture of neighborhood health 
            and trajectory, helping buyers time purchases and understand whether Midtown's growth phase continues or stabilizes.
          </p>
          <p>
            Beyond real estate implications, Midtown news keeps residents connected to their community. Learn about upcoming First Friday themes, 
            discover new businesses before they officially open, follow infrastructure improvements that enhance walkability, and celebrate community 
            achievements like marathon participation or cultural recognition. This information transforms casual residents into engaged community members 
            who actively participate in shaping Midtown's future. Check this section regularly for updates, or contact Dr. Jan at (702) 500-1955 for 
            insider perspective on developments affecting property values and neighborhood character. The pace of change in Midtown means monthly 
            check-ins reveal new developments, while annual reviews showcase remarkable transformation that positions the neighborhood as one 
            of Las Vegas's fastest-appreciating real estate markets.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video md:aspect-auto bg-slate-700">
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Featured Image
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 w-fit">
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {newsArticles[0].title}
              </h2>
              <p className="text-white/80 text-sm mb-4">{newsArticles[0].date}</p>
              <p className="text-lg text-white/90 leading-relaxed">
                {newsArticles[0].excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                Article Image
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Midtown's Growth
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Dr. Jan to learn about investment and living opportunities in Las Vegas's most exciting neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Start Your Search
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

