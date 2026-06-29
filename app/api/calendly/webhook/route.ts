import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { start } from 'workflow/api'
import type { CalendlyWebhookPayload } from '@/lib/calendly-types'
import { processCalendlyLead } from '@/workflows/calendly-lead'

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string,
): boolean {
  try {
    const hmac = crypto.createHmac('sha256', secret)
    const digest = hmac.update(payload).digest('base64')
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(digest),
    )
  } catch (error) {
    console.error('Error verifying webhook signature:', error)
    return false
  }
}

/**
 * POST handler — verify signature, then enqueue durable workflow (fast 200).
 */
export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text()
    const payload: CalendlyWebhookPayload = JSON.parse(rawBody)

    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY
    if (signingKey) {
      const signature = request.headers.get('calendly-webhook-signature')
      if (!signature) {
        return NextResponse.json(
          { error: 'Missing webhook signature' },
          { status: 401 },
        )
      }

      if (!verifyWebhookSignature(rawBody, signature, signingKey)) {
        return NextResponse.json(
          { error: 'Invalid webhook signature' },
          { status: 401 },
        )
      }
    }

    await start(processCalendlyLead, [payload])

    return NextResponse.json(
      { message: 'Webhook received; lead workflow started' },
      { status: 200 },
    )
  } catch (error) {
    console.error('[Calendly Webhook] Error:', error)
    return NextResponse.json(
      {
        error: 'Error processing webhook',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 200 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Calendly webhook endpoint is active (Vercel Workflow)',
    endpoint: '/api/calendly/webhook',
    method: 'POST',
    events: ['invitee.created', 'invitee.canceled'],
  })
}
