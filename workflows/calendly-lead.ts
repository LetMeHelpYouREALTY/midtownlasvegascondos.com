import { FatalError } from 'workflow'
import {
  addNoteToContact,
  createContactFromCalendly,
} from '@/lib/follow-up-boss'
import type { CalendlyWebhookPayload } from '@/lib/calendly-types'

/**
 * Durable lead pipeline: Calendly booking → Follow Up Boss CRM.
 * Retries FUB API calls automatically; survives deploys and timeouts.
 */
export async function processCalendlyLead(payload: CalendlyWebhookPayload) {
  'use workflow'

  switch (payload.event) {
    case 'invitee.created':
      return createLeadFromBooking(payload)
    case 'invitee.canceled':
      return recordCancellation(payload)
    default: {
      const event: never = payload.event
      throw new FatalError(`Unsupported Calendly event: ${event}`)
    }
  }
}

async function createLeadFromBooking(webhook: CalendlyWebhookPayload) {
  'use step'

  const invitee = webhook.payload
  const scheduledTime =
    invitee.scheduled_event?.start_time ?? webhook.created_at

  if (!invitee.email?.includes('@')) {
    throw new FatalError('Invalid invitee email')
  }

  const result = await createContactFromCalendly({
    name: invitee.name,
    email: invitee.email,
    phone: invitee.text_reminder_number ?? undefined,
    scheduledTime,
    questions: invitee.questions_and_answers,
    tracking: invitee.tracking ?? undefined,
  })

  if (!result.success) {
    throw new Error(result.error ?? 'Follow Up Boss contact creation failed')
  }

  return {
    event: webhook.event,
    email: invitee.email,
    rescheduled: invitee.rescheduled,
    fubSuccess: true,
  }
}

async function recordCancellation(webhook: CalendlyWebhookPayload) {
  'use step'

  const invitee = webhook.payload
  const cancellation = invitee.cancellation
  const note = `Appointment canceled${
    cancellation?.reason ? ` - Reason: ${cancellation.reason}` : ''
  }${cancellation?.created_at ? ` on ${cancellation.created_at}` : ''}${
    invitee.rescheduled ? ' (Rescheduled)' : ''
  }`

  const result = await addNoteToContact(invitee.email, note)

  if (!result.success) {
    throw new Error(result.error ?? 'Follow Up Boss note failed')
  }

  return {
    event: webhook.event,
    email: invitee.email,
    fubSuccess: true,
  }
}
