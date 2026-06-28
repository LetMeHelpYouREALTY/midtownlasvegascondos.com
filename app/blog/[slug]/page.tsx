import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '../../components/breadcrumb'
import { ArticleSchema } from '../../components/article-schema'
import { RealScoutSection } from '../../components/realscout-section'

// This will be populated with actual blog posts
const blogPosts: Record<string, {
  title: string
  date: string
  category: string
  content: string
}> = {}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Midtown Las Vegas Blog`,
    description: post.content.substring(0, 160),
    alternates: {
      canonical: `https://www.midtownlasvegascondos.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        <ArticleSchema
          headline={post.title}
          description={post.content.substring(0, 160)}
          datePublished={post.date}
          url={`https://www.midtownlasvegascondos.com/blog/${slug}`}
          author={{
            name: 'Dr. Jan Duffy',
            url: 'https://www.midtownlasvegascondos.com/about',
          }}
        />
        
        <article>
          <div className="mb-8">
            <span className="text-sm text-slate-500 mb-2 block">{post.date}</span>
            <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>
            {/* Author Byline for E-E-A-T */}
            <div className="flex items-center gap-3 mb-6 pt-4 border-t border-slate-200">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">By Dr. Jan Duffy</p>
                <p className="text-xs text-slate-600">
                  Real Estate Agent • 30+ Years Experience • Midtown Las Vegas Specialist
                </p>
              </div>
              <Link
                href="/about"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="text-slate-900 font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>

      <RealScoutSection />
    </div>
  )
}

