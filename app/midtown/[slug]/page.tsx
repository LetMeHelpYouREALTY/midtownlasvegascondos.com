import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MidtownContentPage } from '@/app/components/midtown-content-page'
import { getAllCategorySlugs, getCategoryBySlug } from '@/lib/midtown-content/categories-data'
import { SITE_URL } from '@/lib/midtown-content/constants'

type CategoryPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Page Not Found' }

  return {
    title: category.title,
    description: category.description,
    keywords: category.keywords,
    authors: [{ name: 'Dr. Jan Duffy' }],
    alternates: { canonical: `${SITE_URL}/midtown/${slug}` },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${SITE_URL}/midtown/${slug}`,
      type: 'website',
    },
  }
}

export default async function MidtownCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Neighborhood', url: '/neighborhood' },
    { name: category.h1, url: `/midtown/${slug}` },
  ]

  return (
    <MidtownContentPage
      h1={category.h1}
      heroSubtitle={category.heroSubtitle}
      breadcrumbs={breadcrumbs}
      sections={category.sections}
      faqs={category.faqs}
      featuredLinks={category.featuredLinks}
      listingsTitle={`${category.h1} — Available Properties`}
      listingsDescription={category.description}
      personaBannerVariant="neighborhood"
      showAuthor
    />
  )
}
