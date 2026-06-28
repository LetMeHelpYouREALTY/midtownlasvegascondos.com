import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumb } from '../components/breadcrumb'
import { RealScoutSection } from '../components/realscout-section'

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Blog | Real Estate News & Insights',
  description:
    'Stay informed about Midtown Las Vegas real estate, market updates, neighborhood news, and investment insights. Expert advice from Arts District specialists.',
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/blog',
  },
}

// Blog posts will be added here
const blogPosts: Array<{
  slug: string
  title: string
  description: string
  date: string
  category: string
}> = []

export default function BlogPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Midtown Las Vegas Blog
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl">
          Stay informed about Midtown real estate, market updates, neighborhood news, and 
          investment insights from Arts District specialists.
        </p>

        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-600 mb-4">
              Blog posts coming soon!
            </p>
            <p className="text-slate-600 mb-8">
              Check back for market updates, neighborhood insights, and real estate tips.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6">
                    <span className="text-sm text-slate-500 mb-2 block">{post.date}</span>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full inline-block mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{post.title}</h2>
                    <p className="text-slate-600 mb-4">{post.description}</p>
                    <span className="text-slate-900 font-semibold hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>

      <RealScoutSection
        listingsTitle="Midtown Real Estate Listings"
        listingsDescription="While you wait for new blog posts, browse current Arts District properties."
      />
    </div>
  )
}

