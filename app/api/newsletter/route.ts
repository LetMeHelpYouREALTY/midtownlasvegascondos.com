import { NextRequest, NextResponse } from 'next/server'
import { submitFubEvent, validateLeadIdentity } from '@/lib/fub-events'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

export async function POST(request: NextRequest) {
  let body: Record<string, unknown> = {}

  try {
    const parsed = await request.json()
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      body = parsed as Record<string, unknown>
    }
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (Object.keys(body).length === 0) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const honeypot =
    typeof body.company === 'string' ? body.company.trim() : ''
  if (honeypot) {
    return NextResponse.json({ success: true })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const firstName =
    typeof body.firstName === 'string' ? body.firstName.trim() : 'Newsletter'
  const lastName =
    typeof body.lastName === 'string' ? body.lastName.trim() : 'Subscriber'

  const validationError = validateLeadIdentity({
    firstName,
    email,
  })
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  if (!process.env.FOLLOW_UP_BOSS_API_KEY) {
    console.error(
      '[Newsletter] FOLLOW_UP_BOSS_API_KEY is not set — cannot submit to Follow Up Boss',
    )
    return NextResponse.json(
      { error: 'Lead capture is temporarily unavailable' },
      { status: 503 },
    )
  }

  const sourceUrl =
    typeof body.sourceUrl === 'string' && body.sourceUrl.trim()
      ? body.sourceUrl.trim()
      : request.headers.get('referer') ?? REAL_ESTATE_SITE.url

  const result = await submitFubEvent({
    type: 'Registration',
    description: 'Newsletter signup form',
    message: `Newsletter signup: ${email}`,
    sourceUrl,
    person: {
      firstName,
      lastName,
      email,
      tags: ['Newsletter'],
    },
  })

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.httpStatus },
    )
  }

  return NextResponse.json({ success: true })
}
