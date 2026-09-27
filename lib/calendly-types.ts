/** Calendly webhook payload types (shared by API route + Workflow SDK) */

export type CalendlyEvent = 'invitee.created' | 'invitee.canceled'

export type CalendlyTracking = {
  utm_campaign?: string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_content?: string | null
  utm_term?: string | null
  salesforce_uuid?: string | null
}

/** Invitee resource nested under the top-level webhook `payload` field. */
export type CalendlyInviteePayload = {
  uri: string
  email: string
  name: string
  first_name?: string | null
  last_name?: string | null
  status?: 'active' | 'canceled'
  timezone?: string | null
  event?: string
  created_at?: string
  updated_at?: string
  canceled?: boolean
  rescheduled?: boolean
  text_reminder_number?: string | null
  questions_and_answers?: Array<{
    question: string
    answer: string
    position?: number
  }>
  tracking?: CalendlyTracking | null
  cancel_url?: string
  reschedule_url?: string
  cancellation?: {
    canceled_by?: string
    reason?: string | null
    canceler_type?: 'host' | 'invitee'
    created_at?: string
  }
  old_invitee?: string | null
  new_invitee?: string | null
  scheduled_event?: {
    start_time?: string
    end_time?: string
  }
}

export type CalendlyWebhookPayload = {
  event: CalendlyEvent
  created_at: string
  created_by?: string
  payload: CalendlyInviteePayload
}
