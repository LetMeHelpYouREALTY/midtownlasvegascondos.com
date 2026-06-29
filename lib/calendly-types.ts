/** Calendly webhook payload types (shared by API route + Workflow SDK) */

export type CalendlyEvent = 'invitee.created' | 'invitee.canceled'

export type CalendlyWebhookPayload = {
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
}
