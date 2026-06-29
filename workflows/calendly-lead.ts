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

async function createLeadFromBooking(payload: CalendlyWebhookPayload) {
  'use step'

  const { invitee, time } = payload

  if (!invitee.email?.includes('@')) {
    throw new FatalError('Invalid invitee email')
  }

  const result = await createContactFromCalendly({
    name: invitee.name,
    email: invitee.email,
    phone: invitee.text_reminder_number,
    scheduledTime: time,
    questions: invitee.questions_and_answers,
    tracking: invitee.tracking,
  })

  if (!result.success) {
    throw new Error(result.error ?? 'Follow Up Boss contact creation failed')
  }

  return {
    event: payload.event,
    email: invitee.email,
    rescheduled: invitee.rescheduled,
    fubSuccess: true,
  }
}

async function recordCancellation(payload: CalendlyWebhookPayload) {
  'use step'

  const { invitee, cancel_reason, canceled_at } = payload
  const note = `Appointment canceled${cancel_reason ? ` - Reason: ${cancel_reason}` : ''}${canceled_at ? ` on ${canceled_at}` : ''}${invitee.rescheduled ? ' (Rescheduled)' : ''}`

  const result = await addNoteToContact(invitee.email, note)

  if (!result.success) {
    throw new Error(result.error ?? 'Follow Up Boss note failed')
  }

  return {
    event: payload.event,
    email: invitee.email,
    fubSuccess: true,
  }
}
