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
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated on the latest developments, events, and stories from 
            Las Vegas's most dynamic neighborhood.
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
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Dr. Jan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

