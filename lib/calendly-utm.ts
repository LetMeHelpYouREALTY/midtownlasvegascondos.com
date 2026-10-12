import { CALENDLY_CONSULTATION_URL } from '@/lib/calendly-config'

/** Seller listing consultation — home valuation / listing strategy (Ship #13). */
export const CALENDLY_LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation'

/** UTM source value Calendly sends on webhooks for bookings from this site. */
export const MIDTOWN_CALENDLY_UTM_SOURCE = 'midtownlasvegascondos.com'

export const MIDTOWN_CALENDLY_UTM_MEDIUM = 'website'

/** Follow Up Boss lead source for Midtown Calendly bookings. */
export const MIDTOWN_FUB_SOURCE = 'midtownlasvegascondos.com'

export function calendlyCampaignFromPathname(pathname: string): string {
  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  return trimmed.length > 0 ? trimmed : 'home'
}

export function appendCalendlyUtmParams(
  url: string,
  campaign: string,
): string {
  const parsed = new URL(url)
  parsed.searchParams.set('utm_source', MIDTOWN_CALENDLY_UTM_SOURCE)
  parsed.searchParams.set('utm_medium', MIDTOWN_CALENDLY_UTM_MEDIUM)
  parsed.searchParams.set('utm_campaign', campaign)
  return parsed.toString()
}

export function buildMidtownCalendlyUrl(campaign: string): string {
  return appendCalendlyUtmParams(CALENDLY_CONSULTATION_URL, campaign)
}

export function buildListingConsultationUrl(utmContent: string): string {
  const parsed = new URL(CALENDLY_LISTING_CONSULTATION_URL)
  parsed.searchParams.set('utm_source', MIDTOWN_CALENDLY_UTM_SOURCE)
  parsed.searchParams.set('utm_medium', MIDTOWN_CALENDLY_UTM_MEDIUM)
  parsed.searchParams.set('utm_content', utmContent)
  return parsed.toString()
}

export function calendlyWidgetUtm(campaign: string) {
  return {
    utmSource: MIDTOWN_CALENDLY_UTM_SOURCE,
    utmMedium: MIDTOWN_CALENDLY_UTM_MEDIUM,
    utmCampaign: campaign,
  }
}
