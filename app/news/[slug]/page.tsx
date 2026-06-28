import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MidtownContentPage } from '@/app/components/midtown-content-page'
import { ArticleSchema } from '@/app/components/article-schema'
import { getAllNewsSlugs, getNewsBySlug } from '@/lib/midtown-content/news-data'
import { SITE_URL } from '@/lib/midtown-content/constants'

type NewsPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsBySlug(slug)
  if (!article) return { title: 'Article Not Found' }

  return {
    title: `${article.title} | Midtown Las Vegas News`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: 'Dr. Jan Duffy' }],
    alternates: { canonical: `${SITE_URL}/news/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/news/${slug}`,
      type: 'article',
      publishedTime: article.datePublished,
    },
  }
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params
  const article = getNewsBySlug(slug)
  if (!article) notFound()

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'News', url: '/news' },
    { name: article.title, url: `/news/${slug}` },
  ]

  return (
    <>
      <ArticleSchema
        headline={article.title}
        description={article.description}
        datePublished={article.datePublished}
        url={`${SITE_URL}/news/${slug}`}
        author={{
          name: 'Dr. Jan Duffy',
          url: `${SITE_URL}/about`,
        }}
      />
      <MidtownContentPage
        h1={article.title}
        heroSubtitle={`${article.category} • ${article.datePublished}`}
        breadcrumbs={breadcrumbs}
        sections={article.sections}
        faqs={article.faqs}
        relatedLinks={article.relatedLinks}
        showAuthor
        listingsTitle="Midtown & Arts District Properties"
        listingsDescription="Browse condos and residences near the news you read — live where Midtown is growing."
      />
    </>
  )
}
