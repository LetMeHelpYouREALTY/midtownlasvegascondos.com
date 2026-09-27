import { NextRequest, NextResponse } from 'next/server'
import { start } from 'workflow/api'
import { handleCalendlyWebhookPost } from '@/lib/calendly-webhook-handler'
import { processCalendlyLead } from '@/workflows/calendly-lead'

/**
 * POST handler — verify signature, filter by Midtown UTM, enqueue workflow.
 */
export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text()
    const signatureHeader = request.headers.get('calendly-webhook-signature')

    const result = await handleCalendlyWebhookPost(rawBody, signatureHeader, {
      signingKey: process.env.CALENDLY_WEBHOOK_SIGNING_KEY,
      startWorkflow: async (payload) => {
        await start(processCalendlyLead, [payload])
      },
    })

    return NextResponse.json(result.body, { status: result.status })
  } catch (error) {
    console.error('[Calendly Webhook] Error:', error)
    return NextResponse.json(
      { error: 'Error processing webhook' },
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
