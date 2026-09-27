import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  buildFubEventBody,
  getFubAuthHeader,
  submitFubEvent,
} from './fub-events'

describe('fub-events', () => {
  it('builds Basic auth header from API key', () => {
    const header = getFubAuthHeader('test_key_123')
    assert.equal(header, `Basic ${Buffer.from('test_key_123:').toString('base64')}`)
  })

  it('posts Registration event with site source and tags', async () => {
    let capturedUrl = ''
    let capturedInit: RequestInit | undefined

    const mockFetch: typeof fetch = async (url, init) => {
      capturedUrl = String(url)
      capturedInit = init
      return new Response(null, { status: 201 })
    }

    const result = await submitFubEvent(
      {
        type: 'Registration',
        message: 'Newsletter signup: user@example.com',
        description: 'Newsletter signup form',
        sourceUrl: 'https://www.midtownlasvegascondos.com/',
        person: {
          firstName: 'Newsletter',
          lastName: 'Subscriber',
          email: 'user@example.com',
          tags: ['Newsletter'],
        },
      },
      { apiKey: 'mock_api_key', fetchImpl: mockFetch },
    )

    assert.equal(result.ok, true)
    assert.equal(capturedUrl, 'https://api.followupboss.com/v1/events')
    assert.equal(capturedInit?.method, 'POST')

    const headers = capturedInit?.headers as Record<string, string>
    assert.equal(
      headers.Authorization,
      getFubAuthHeader('mock_api_key'),
    )
    assert.equal(headers['X-System'], 'midtownlasvegascondos.com')

    const payload = JSON.parse(String(capturedInit?.body))
    assert.equal(payload.source, 'midtownlasvegascondos.com')
    assert.equal(payload.type, 'Registration')
    assert.deepEqual(payload.person.tags, [
      'midtownlasvegascondos.com',
      'Newsletter',
    ])
  })

  it('returns 503 when API key is missing', async () => {
    const result = await submitFubEvent(
      {
        type: 'Registration',
        message: 'test',
        description: 'test',
        person: { firstName: 'A', email: 'a@b.com' },
      },
      { apiKey: null, fetchImpl: fetch },
    )
    assert.equal(result.ok, false)
    if (!result.ok) {
      assert.equal(result.httpStatus, 503)
    }
  })

  it('buildFubEventBody includes person emails', () => {
    const body = buildFubEventBody({
      type: 'General Inquiry',
      message: 'Hello',
      description: 'Contact form',
      person: { firstName: 'Jan', email: 'jan@example.com' },
    })
    assert.deepEqual(body.person.emails, [{ value: 'jan@example.com' }])
  })
})
