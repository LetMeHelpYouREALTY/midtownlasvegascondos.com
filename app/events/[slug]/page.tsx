import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MidtownContentPage } from '@/app/components/midtown-content-page'
import { EventSchema } from '@/app/components/event-schema'
import { getAllEventSlugs, getEventBySlug } from '@/lib/midtown-content/events-data'
import { SITE_URL } from '@/lib/midtown-content/constants'

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Event Not Found' }

  return {
    title: event.title,
    description: event.description,
    keywords: event.keywords,
    authors: [{ name: 'Dr. Jan Duffy' }],
    alternates: { canonical: `${SITE_URL}/events/${slug}` },
    openGraph: {
      title: event.title,
      description: event.description,
      url: `${SITE_URL}/events/${slug}`,
      type: 'website',
    },
  }
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
    { name: event.title.split('|')[0].trim(), url: `/events/${slug}` },
  ]

  return (
    <MidtownContentPage
      h1={event.title.split('|')[0].trim()}
      heroSubtitle={`${event.startTime} – ${event.endTime} • ${event.location.name}`}
      breadcrumbs={breadcrumbs}
      sections={[
        {
          paragraphs: [
            `Categories: ${event.categories.join(' • ')}`,
            `Date: ${event.startTime} – ${event.endTime}`,
            `Location: ${event.location.streetAddress ? `${event.location.streetAddress}, ` : ''}${event.location.addressLocality}, ${event.location.addressRegion} ${event.location.postalCode ?? ''}`.trim(),
          ],
        },
        ...event.sections,
      ]}
      faqs={event.faqs}
      relatedLinks={event.relatedLinks}
      schema={
        <EventSchema
          name={event.title.split('|')[0].trim()}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          location={{
            name: event.location.name,
            address: {
              streetAddress: event.location.streetAddress,
              addressLocality: event.location.addressLocality,
              addressRegion: event.location.addressRegion,
              postalCode: event.location.postalCode,
              addressCountry: 'US',
            },
          }}
          organizer={{ name: 'Midtown Las Vegas' }}
          url={`${SITE_URL}/events/${slug}`}
        />
      }
    />
  )
}
