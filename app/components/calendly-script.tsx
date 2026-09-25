'use client'

import { useEffect } from 'react'
import { loadCalendlyScript } from '@/lib/load-calendly-script'
import { scheduleDeferredLoad } from '@/lib/schedule-deferred-load'

/** Load Calendly after interaction so the badge script stays off the first paint. */
export function CalendlyScript() {
  useEffect(() => scheduleDeferredLoad(() => loadCalendlyScript()), [])
  return null
}
