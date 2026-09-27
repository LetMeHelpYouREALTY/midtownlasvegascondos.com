import type { CalendlyWebhookPayload } from '@/lib/calendly-types'
import {
  isMidtownCalendlyBooking,
  verifyCalendlyWebhookSignature,
} from '@/lib/calendly-webhook'

export type CalendlyWebhookHandlerResult =
  | { status: 401; body: { error: string } }
  | { status: 200; body: { ignored: true } }
  | { status: 200; body: { message: string } }
  | { status: 200; body: { error: string } }

export type CalendlyWebhookHandlerDeps = {
  signingKey: string | undefined
  nowUnixSeconds?: number
  startWorkflow: (payload: CalendlyWebhookPayload) => Promise<unknown>
}

export async function handleCalendlyWebhookPost(
  rawBody: string,
  signatureHeader: string | null,
  deps: CalendlyWebhookHandlerDeps,
): Promise<CalendlyWebhookHandlerResult> {
  const { signingKey, startWorkflow } = deps
  const nowUnixSeconds =
    deps.nowUnixSeconds ?? Math.floor(Date.now() / 1000)

  if (!signingKey) {
    return { status: 401, body: { error: 'Webhook signing is not configured' } }
  }

  if (
    !verifyCalendlyWebhookSignature(
      rawBody,
      signatureHeader,
      signingKey,
      nowUnixSeconds,
    )
  ) {
    return { status: 401, body: { error: 'Invalid webhook signature' } }
  }

  let webhook: CalendlyWebhookPayload
  try {
    webhook = JSON.parse(rawBody) as CalendlyWebhookPayload
  } catch {
    return { status: 200, body: { error: 'Error processing webhook' } }
  }

  if (!isMidtownCalendlyBooking(webhook)) {
    return { status: 200, body: { ignored: true } }
  }

  await startWorkflow(webhook)

  return {
    status: 200,
    body: { message: 'Webhook received; lead workflow started' },
  }
}
