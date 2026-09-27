'use client'

import { useState } from 'react'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

const SUBMIT_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${REAL_ESTATE_SITE.phone}.`

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          sourceUrl: window.location.href,
        }),
      })

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(SUBMIT_ERROR_MESSAGE)
        return
      }

      setStatus('success')
      setEmail('')
      setCompany('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setErrorMessage(SUBMIT_ERROR_MESSAGE)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-900"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading'
            ? 'Subscribing...'
            : status === 'success'
              ? 'Subscribed!'
              : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && errorMessage && (
        <p className="mt-3 text-sm text-red-700 text-center" role="alert">
          {errorMessage}
        </p>
      )}
      {status === 'success' && (
        <p className="mt-3 text-sm text-emerald-700 text-center">
          Thanks for subscribing! Watch your inbox for Midtown updates.
        </p>
      )}
    </div>
  )
}
