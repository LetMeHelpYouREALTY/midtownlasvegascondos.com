import Link from 'next/link'
import { CalendlyLink } from '@/app/components/calendly-link'
import { Breadcrumb } from '@/app/components/breadcrumb'
import { PageFAQSchema } from '@/app/components/page-faq-schema'
import { RealScoutSection } from '@/app/components/realscout-section'
import { SitePersonaBanner } from '@/app/components/site-persona-banner'
import { AgentByline } from '@/app/components/agent-byline'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import type { MidtownBreadcrumb, MidtownFAQ, MidtownSection } from '@/lib/midtown-content/types'

type PersonaBannerVariant = 'neighborhood' | 'event' | 'news'

type MidtownContentPageProps = {
  h1: string
  heroSubtitle?: string
  breadcrumbs: MidtownBreadcrumb[]
  sections: MidtownSection[]
  faqs?: MidtownFAQ[]
  relatedLinks?: { name: string; href: string }[]
  featuredLinks?: { name: string; href: string; description: string }[]
  schema?: React.ReactNode
  showAuthor?: boolean
  showPersonaBanner?: boolean
  personaBannerVariant?: PersonaBannerVariant
  listingsTitle?: string
  listingsDescription?: string
}

export function MidtownContentPage({
  h1,
  heroSubtitle,
  breadcrumbs,
  sections,
  faqs = [],
  relatedLinks = [],
  featuredLinks = [],
  schema,
  showAuthor = true,
  showPersonaBanner = true,
  personaBannerVariant = 'neighborhood',
  listingsTitle,
  listingsDescription,
}: MidtownContentPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {schema}
      {faqs.length > 0 && <PageFAQSchema faqs={faqs} />}

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-3">
            {REAL_ESTATE_SITE.shortName}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{h1}</h1>
          {heroSubtitle && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{heroSubtitle}</p>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbs} />

        {showPersonaBanner && <SitePersonaBanner variant={personaBannerVariant} />}

        {showAuthor && <AgentByline />}

        <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.heading}</h2>
              )}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {featuredLinks.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Buyer Guides for Midtown</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-5 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-slate-900 mb-1">{link.name}</h3>
                  <p className="text-sm text-slate-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedLinks.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Related Pages</h2>
            <ul className="space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-900 font-semibold hover:underline">
                    {link.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <RealScoutSection
        listingsTitle={listingsTitle}
        listingsDescription={listingsDescription}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Live in the Heart of Midtown</h2>
          <p className="text-xl text-white/90 mb-8">
            Walk to First Friday, dining, and Arts District culture. Contact {REAL_ESTATE_SITE.agentName} at {REAL_ESTATE_SITE.brokerage}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
            <a
              href={REAL_ESTATE_SITE.phoneTel}
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call {REAL_ESTATE_SITE.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">
            {REAL_ESTATE_SITE.agentName} • {REAL_ESTATE_SITE.brokerage} • License {REAL_ESTATE_SITE.license}
          </p>
        </div>
      </section>
    </div>
  )
}
