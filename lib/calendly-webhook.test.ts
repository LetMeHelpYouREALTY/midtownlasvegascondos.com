import assert from 'node:assert/strict'
import { describe, it, mock } from 'node:test'
import type { CalendlyWebhookPayload } from '@/lib/calendly-types'
import { handleCalendlyWebhookPost } from '@/lib/calendly-webhook-handler'
import {
  isMidtownCalendlyBooking,
  signCalendlyWebhookPayload,
  verifyCalendlyWebhookSignature,
} from '@/lib/calendly-webhook'
import { MIDTOWN_CALENDLY_UTM_SOURCE } from '@/lib/calendly-utm'

const SIGNING_KEY = 'test-signing-key'

function sampleWebhook(utmSource: string | null): CalendlyWebhookPayload {
  return {
    event: 'invitee.created',
    created_at: '2026-01-01T12:00:00.000000Z',
    created_by: 'https://api.calendly.com/users/test',
    payload: {
      uri: 'https://api.calendly.com/scheduled_events/evt/invitees/inv',
      email: 'lead@example.com',
      name: 'Test Lead',
      status: 'active',
      tracking: {
        utm_source: utmSource,
        utm_medium: 'website',
        utm_campaign: 'home',
      },
    },
  }
}

describe('verifyCalendlyWebhookSignature', () => {
  const rawBody = JSON.stringify(sampleWebhook(MIDTOWN_CALENDLY_UTM_SOURCE))
  const now = 1_700_000_000

  it('accepts a valid signature', () => {
    const header = signCalendlyWebhookPayload(rawBody, SIGNING_KEY, now)
    assert.equal(
      verifyCalendlyWebhookSignature(rawBody, header, SIGNING_KEY, now),
      true,
    )
  })

  it('rejects a tampered body', () => {
    const header = signCalendlyWebhookPayload(rawBody, SIGNING_KEY, now)
    const tampered = rawBody.replace('lead@example.com', 'other@example.com')
    assert.equal(
      verifyCalendlyWebhookSignature(tampered, header, SIGNING_KEY, now),
      false,
    )
  })

  it('rejects a stale timestamp', () => {
    const header = signCalendlyWebhookPayload(rawBody, SIGNING_KEY, now)
    assert.equal(
      verifyCalendlyWebhookSignature(
        rawBody,
        header,
        SIGNING_KEY,
        now + 181,
      ),
      false,
    )
  })
})

describe('isMidtownCalendlyBooking', () => {
  it('matches Midtown utm_source on payload.tracking', () => {
    assert.equal(
      isMidtownCalendlyBooking(sampleWebhook(MIDTOWN_CALENDLY_UTM_SOURCE)),
      true,
    )
  })

  it('ignores other sites', () => {
    assert.equal(isMidtownCalendlyBooking(sampleWebhook('other-site.com')), false)
  })
})

describe('handleCalendlyWebhookPost', () => {
  const now = 1_700_000_000

  it('returns ignored for non-Midtown utm without starting workflow', async () => {
    const body = JSON.stringify(sampleWebhook('other-site.com'))
    const header = signCalendlyWebhookPayload(body, SIGNING_KEY, now)
    const startWorkflow = mock.fn(async () => undefined)

    const result = await handleCalendlyWebhookPost(body, header, {
      signingKey: SIGNING_KEY,
      nowUnixSeconds: now,
      startWorkflow,
    })

    assert.deepEqual(result, { status: 200, body: { ignored: true } })
    assert.equal(startWorkflow.mock.calls.length, 0)
  })

  it('starts workflow for Midtown utm', async () => {
    const payload = sampleWebhook(MIDTOWN_CALENDLY_UTM_SOURCE)
    const body = JSON.stringify(payload)
    const header = signCalendlyWebhookPayload(body, SIGNING_KEY, now)
    const startWorkflow = mock.fn(async () => undefined)

    const result = await handleCalendlyWebhookPost(body, header, {
      signingKey: SIGNING_KEY,
      nowUnixSeconds: now,
      startWorkflow,
    })

    assert.equal(result.status, 200)
    assert.deepEqual(result.body, {
      message: 'Webhook received; lead workflow started',
    })
    assert.equal(startWorkflow.mock.calls.length, 1)
    const firstCall = startWorkflow.mock.calls[0]
    assert.ok(firstCall)
    assert.deepEqual(firstCall.arguments[0], payload)
  })
})
