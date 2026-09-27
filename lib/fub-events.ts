const SITE_SOURCE = 'midtownlasvegascondos.com'
const FUB_EVENTS_URL = 'https://api.followupboss.com/v1/events'

export type FubEventType =
  | 'General Inquiry'
  | 'Seller Inquiry'
  | 'Property Inquiry'
  | 'Registration'

export type FubPersonInput = {
  firstName: string
  lastName?: string
  email?: string
  phone?: string
  tags?: string[]
}

export type SubmitFubEventInput = {
  type: FubEventType
  message: string
  description: string
  sourceUrl?: string
  person: FubPersonInput
}

export type SubmitFubEventResult =
  | { ok: true }
  | { ok: false; httpStatus: 503 | 502; error: string }

export function getFubAuthHeader(apiKey: string): string {
  const encoded = Buffer.from(`${apiKey}:`).toString('base64')
  return `Basic ${encoded}`
}

export function buildFubEventBody(input: SubmitFubEventInput) {
  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type: input.type,
    message: input.message,
    description: input.description,
    sourceUrl: input.sourceUrl,
    person: {
      firstName: input.person.firstName,
      lastName: input.person.lastName ?? '',
      emails: input.person.email ? [{ value: input.person.email }] : [],
      phones: input.person.phone ? [{ value: input.person.phone }] : [],
      tags: [SITE_SOURCE, ...(input.person.tags ?? [])],
    },
  }
}

export async function submitFubEvent(
  input: SubmitFubEventInput,
  options?: {
    apiKey?: string | null
    fetchImpl?: typeof fetch
  },
): Promise<SubmitFubEventResult> {
  const apiKey = options?.apiKey ?? process.env.FOLLOW_UP_BOSS_API_KEY ?? null
  if (!apiKey) {
    return {
      ok: false,
      httpStatus: 503,
      error: 'Follow Up Boss is not configured',
    }
  }

  const fetchImpl = options?.fetchImpl ?? fetch

  try {
    const response = await fetchImpl(FUB_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: getFubAuthHeader(apiKey),
        'Content-Type': 'application/json',
        'X-System': SITE_SOURCE,
      },
      body: JSON.stringify(buildFubEventBody(input)),
    })

    if (
      response.status !== 200 &&
      response.status !== 201 &&
      response.status !== 204
    ) {
      console.error('[FUB] Event API responded with status:', response.status)
      return {
        ok: false,
        httpStatus: 502,
        error: 'Follow Up Boss rejected the event',
      }
    }

    return { ok: true }
  } catch (error) {
    console.error('[FUB] Event API request failed:', error)
    return {
      ok: false,
      httpStatus: 502,
      error: 'Follow Up Boss request failed',
    }
  }
}

export function validateLeadIdentity(fields: {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}): string | null {
  const firstName = fields.firstName?.trim() ?? ''
  const email = fields.email?.trim() ?? ''
  const phone = fields.phone?.trim() ?? ''

  const hasEmail = email.length > 0 && email.includes('@')
  const hasPhone = phone.length > 0
  const hasName = firstName.length > 0

  if (hasName && (hasEmail || hasPhone)) {
    return null
  }
  if (!hasName && hasEmail) {
    return null
  }
  if (!hasName && hasPhone) {
    return null
  }

  return 'Name and email or phone are required'
}
