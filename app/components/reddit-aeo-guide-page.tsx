import Link from 'next/link'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { CalendlyLink } from '@/app/components/calendly-link'
import { RealScoutSection } from '@/app/components/realscout-section'
import { PageFAQ } from '@/app/components/page-faq'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { RedditCitationSchema } from '@/app/components/reddit-citation-schema'
import { RenderGuideInline, RenderGuideText } from '@/lib/render-guide-text'
import {
  getGuideBySlug,
  type GuideContentBlock,
  type RedditAeoGuide,
} from '@/lib/reddit-aeo-topics'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

function GuideBlock({ block }: { block: GuideContentBlock }) {
  switch (block.type) {
    case 'p':
      return <RenderGuideText text={block.text} />
    case 'ul':
      return (
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal list-inside text-slate-600 space-y-3 mb-6">
          {block.items.map((item) => (
            <li key={item}>
              <RenderGuideInline text={item} />
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-slate-200 text-left">
            <thead>
              <tr className="bg-slate-100">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border border-slate-200 px-4 py-3 font-semibold text-slate-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {block.rows.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell) => (
                    <td key={cell} className="border border-slate-200 px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'reddit':
      return (
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          {block.before}
          <a
            href={block.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 font-semibold hover:underline"
          >
            {block.subreddit}
          </a>
          {block.after}
        </p>
      )
    default: {
      const _exhaustive: never = block
      return _exhaustive
    }
  }
}

function RelatedGuides({ slugs }: { slugs: string[] }) {
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is RedditAeoGuide => g !== undefined)

  if (guides.length === 0) return null

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Related buyer guides</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
            >
              <span className="font-semibold text-slate-900">{guide.h1}</span>
              <p className="text-sm text-slate-600 mt-1">{guide.cardSummary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function RedditSourcesList({ sources }: { sources: RedditAeoGuide['redditSources'] }) {
  return (
    <section className="mb-16 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Community research sources
      </h2>
      <p className="text-slate-600 mb-4 text-sm">
        This guide synthesizes recurring questions from Las Vegas Reddit communities.
        Dr. Jan Duffy adds local MLS expertise — not official Midtown marketing copy.
      </p>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-medium hover:underline"
            >
              {source.subreddit}: {source.topic}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

interface RedditAeoGuidePageProps {
  guide: RedditAeoGuide
}

export function RedditAeoGuidePage({ guide }: RedditAeoGuidePageProps) {
  const canonicalUrl = `${REAL_ESTATE_SITE.url}/guides/${guide.slug}`
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Buyer Guides', url: '/guides' },
    { name: guide.h1, url: `/guides/${guide.slug}` },
  ]

  return (
    <>
      <RedditCitationSchema
        headline={guide.h1}
        description={guide.metaDescription}
        url={canonicalUrl}
        datePublished={guide.datePublished}
        redditSources={guide.redditSources}
      />
      <PageFAQSchema faqs={guide.faqs} />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">{guide.h1}</h1>

          <div className="aeo-quick-answer bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Quick answer:</strong> {guide.quickAnswer}
            </p>
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
              {section.blocks.map((block, i) => (
                <GuideBlock key={`${section.heading}-${i}`} block={block} />
              ))}
            </section>
          ))}

          {guide.relatedGuideSlugs && guide.relatedGuideSlugs.length > 0 && (
            <RelatedGuides slugs={guide.relatedGuideSlugs} />
          )}

          <RedditSourcesList sources={guide.redditSources} />

          <section className="mb-16 py-12 bg-slate-50 rounded-xl px-6">
            <PageFAQ faqs={guide.faqs} title={`${guide.h1} — FAQs`} />
          </section>

          <div className="text-center">
            <CalendlyLink text={guide.calendlyText} variant="primary" />
          </div>
        </div>

        <RealScoutSection
          listingsTitle={guide.realScoutTitle}
          listingsDescription={guide.realScoutDescription}
          propertyTypes={guide.realScoutPropertyTypes}
          className="bg-white"
        />
      </div>
    </>
  )
}
