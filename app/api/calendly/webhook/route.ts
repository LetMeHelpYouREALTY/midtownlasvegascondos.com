import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Calendly webhook event types
type CalendlyEvent = 'invitee.created' | 'invitee.canceled'

interface CalendlyWebhookPayload {
  event: CalendlyEvent
  invitee: {
    uri: string
    name: string
    email: string
    text_reminder_number?: string
    timezone: string
    event: string
    created_at: string
    updated_at: string
    canceled: boolean
    canceler_name?: string
    cancel_reason?: string
    canceled_at?: string
    rescheduled: boolean
    old_invitee?: string
    new_invitee?: string
    payment?: {
      external_id: string
      provider: string
      amount: number
      currency: string
      terms: string
      successful: boolean
    }
    questions_and_answers?: Array<{
      question: string
      answer: string
    }>
    tracking?: {
      utm_campaign?: string
      utm_source?: string
      utm_medium?: string
      utm_content?: string
      utm_term?: string
      salesforce_uuid?: string
    }
    text_reminder_number?: string
  }
  created_at: string
  updated_at: string
  time: string
  timezone: string
  location?: {
    type: string
    location: string
  }
  canceled: boolean
  canceler_name?: string
  cancel_reason?: string
  canceled_at?: string
  cancel_url: string
  reschedule_url: string
  rescheduled: boolean
  old_invitee?: string
  new_invitee?: string
  invitee_scheduled_by?: string
}

/**
 * Verify Calendly webhook signature (optional but recommended)
 * Set CALENDLY_WEBHOOK_SIGNING_KEY in your environment variables
 */
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
 * Process webhook event and trigger automations
 */
async function processWebhookEvent(payload: CalendlyWebhookPayload) {
  const { event, invitee } = payload

  console.log(`[Calendly Webhook] Event: ${event}`, {
    invitee: invitee.email,
    name: invitee.name,
    canceled: invitee.canceled,
    rescheduled: invitee.rescheduled,
    time: payload.time,
  })

  // Handle different event types
  switch (event) {
    case 'invitee.created':
      await handleInviteeCreated(payload)
      break

    case 'invitee.canceled':
      await handleInviteeCanceled(payload)
      break

    default:
      console.warn(`[Calendly Webhook] Unknown event type: ${event}`)
  }
}

/**
 * Handle when an invitee schedules an event
 */
async function handleInviteeCreated(payload: CalendlyWebhookPayload) {
  const { invitee, time, timezone, location } = payload

  // Check if this is a rescheduled event
  if (invitee.rescheduled) {
    console.log(
      `[Calendly] Rescheduled event for ${invitee.email} - Old: ${invitee.old_invitee}, New: ${invitee.new_invitee}`,
    )
    // Handle rescheduling logic here
    // You might want to update existing records, send notifications, etc.
  } else {
    console.log(
      `[Calendly] New event scheduled for ${invitee.email} at ${time}`,
    )
    // Handle new scheduling logic here
    // Examples:
    // - Send confirmation email
    // - Create CRM record
    // - Add to calendar
    // - Send notification to team
    // - Update database
  }

  // Extract useful data
  const eventData = {
    inviteeEmail: invitee.email,
    inviteeName: invitee.name,
    scheduledTime: time,
    timezone: timezone,
    location: location?.location || 'Virtual',
    phone: invitee.text_reminder_number,
    questions: invitee.questions_and_answers,
    tracking: invitee.tracking,
    cancelUrl: payload.cancel_url,
    rescheduleUrl: payload.reschedule_url,
  }

  // TODO: Add your automation logic here
  // Examples:
  // - Send welcome email
  // - Create lead in CRM (Salesforce, HubSpot, etc.)
  // - Add to email marketing list
  // - Send Slack/Discord notification
  // - Update internal database
  // - Trigger Zapier webhook
  // - Send SMS reminder

  return eventData
}

/**
 * Handle when an invitee cancels an event
 */
async function handleInviteeCanceled(payload: CalendlyWebhookPayload) {
  const { invitee, cancel_reason, canceled_at } = payload

  console.log(
    `[Calendly] Event canceled by ${invitee.canceler_name || invitee.email}`,
    {
      reason: cancel_reason,
      canceledAt: canceled_at,
    },
  )

  // Extract useful data
  const cancelData = {
    inviteeEmail: invitee.email,
    inviteeName: invitee.name,
    canceledBy: invitee.canceler_name || invitee.email,
    cancelReason: cancel_reason,
    canceledAt: canceled_at,
    wasRescheduled: invitee.rescheduled,
  }

  // TODO: Add your automation logic here
  // Examples:
  // - Send cancellation confirmation email
  // - Update CRM record
  // - Free up calendar slot
  // - Send notification to team
  // - Update database
  // - Trigger follow-up automation

  return cancelData
}

/**
 * POST handler for Calendly webhooks
 */
export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text()
    const payload: CalendlyWebhookPayload = JSON.parse(rawBody)

    // Verify webhook signature if signing key is configured
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY
    if (signingKey) {
      const signature = request.headers.get('calendly-webhook-signature')
      if (!signature) {
        console.warn('[Calendly Webhook] Missing signature header')
        return NextResponse.json(
          { error: 'Missing webhook signature' },
          { status: 401 },
        )
      }

      const isValid = verifyWebhookSignature(rawBody, signature, signingKey)
      if (!isValid) {
        console.error('[Calendly Webhook] Invalid signature')
        return NextResponse.json(
          { error: 'Invalid webhook signature' },
          { status: 401 },
        )
      }
    }

    // Process the webhook event
    await processWebhookEvent(payload)

    // Return 200 OK to acknowledge receipt
    return NextResponse.json(
      { message: 'Webhook received and processed' },
      { status: 200 },
    )
  } catch (error) {
    console.error('[Calendly Webhook] Error processing webhook:', error)

    // Return 200 to prevent Calendly from retrying
    // (You may want to change this to 500 if you want retries)
    return NextResponse.json(
      {
        error: 'Error processing webhook',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 200 },
    )
  }
}

// Handle GET requests (for webhook verification/testing)
export async function GET() {
  return NextResponse.json({
    message: 'Calendly webhook endpoint is active',
    endpoint: '/api/calendly/webhook',
    method: 'POST',
    events: ['invitee.created', 'invitee.canceled'],
  })
}
