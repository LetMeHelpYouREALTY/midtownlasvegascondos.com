import crypto from 'crypto'
import type { CalendlyWebhookPayload } from '@/lib/calendly-types'
import { MIDTOWN_CALENDLY_UTM_SOURCE } from '@/lib/calendly-utm'

export const CALENDLY_WEBHOOK_REPLAY_TOLERANCE_SECONDS = 180

export type CalendlySignatureParts = {
  timestamp: string
  signatureHex: string
}

export function parseCalendlyWebhookSignature(
  header: string,
): CalendlySignatureParts | null {
  const parts: Record<string, string> = {}

  for (const segment of header.split(',')) {
    const eqIndex = segment.indexOf('=')
    if (eqIndex === -1) continue
    const key = segment.slice(0, eqIndex).trim()
    const value = segment.slice(eqIndex + 1).trim()
    if (key) parts[key] = value
  }

  const timestamp = parts.t
  const signatureHex = parts.v1
  if (!timestamp || !signatureHex) return null

  return { timestamp, signatureHex }
}

export function verifyCalendlyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  signingKey: string,
  nowUnixSeconds: number = Math.floor(Date.now() / 1000),
): boolean {
  if (!signatureHeader) return false

  const parsed = parseCalendlyWebhookSignature(signatureHeader)
  if (!parsed) return false

  const timestampSeconds = Number(parsed.timestamp)
  if (!Number.isFinite(timestampSeconds)) return false

  if (
    Math.abs(nowUnixSeconds - timestampSeconds) >
    CALENDLY_WEBHOOK_REPLAY_TOLERANCE_SECONDS
  ) {
    return false
  }

  const expectedHex = crypto
    .createHmac('sha256', signingKey)
    .update(`${parsed.timestamp}.${rawBody}`)
    .digest('hex')

  const expectedBuffer = Buffer.from(expectedHex, 'utf8')
  const receivedBuffer = Buffer.from(parsed.signatureHex, 'utf8')

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false
  }

  return crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
}

export function isMidtownCalendlyBooking(
  webhook: CalendlyWebhookPayload,
): boolean {
  return webhook.payload.tracking?.utm_source === MIDTOWN_CALENDLY_UTM_SOURCE
}

export function signCalendlyWebhookPayload(
  rawBody: string,
  signingKey: string,
  timestampUnixSeconds: number,
): string {
  const timestamp = String(timestampUnixSeconds)
  const signatureHex = crypto
    .createHmac('sha256', signingKey)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex')

  return `t=${timestamp},v1=${signatureHex}`
}
