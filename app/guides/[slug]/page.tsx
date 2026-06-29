import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RedditAeoGuidePage } from '@/app/components/reddit-aeo-guide-page'
import { getAllGuideSlugs, getGuideBySlug } from '@/lib/reddit-aeo-topics'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

type GuidePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}

  const canonicalUrl = `${REAL_ESTATE_SITE.url}/guides/${guide.slug}`

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: guide.ogTitle,
      description: guide.ogDescription,
      url: canonicalUrl,
      type: 'article',
    },
  }
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  return <RedditAeoGuidePage guide={guide} />
}
