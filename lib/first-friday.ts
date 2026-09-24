/**
 * First Friday runs the first Friday of every month, 5–11 PM, in the 18b Arts District.
 * Dates are computed so event copy and Event schema never go stale.
 */

const TIME_ZONE = 'America/Los_Angeles'

export type FirstFridayDate = {
  /** e.g. "Friday, October 2, 2026" */
  label: string
  startDate: string
  endDate: string
}

function laParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value)
  return { year: get('year'), month: get('month'), day: get('day') }
}

function laOffset(date: Date): string {
  const name = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    timeZoneName: 'shortOffset',
  })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')?.value
  const hours = Number(name?.replace('GMT', '') || '-8')
  const sign = hours < 0 ? '-' : '+'
  return `${sign}${String(Math.abs(hours)).padStart(2, '0')}:00`
}

function firstFridayOf(year: number, month: number): number {
  const weekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay()
  return 1 + ((5 - weekday + 7) % 7)
}

export function getUpcomingFirstFridays(count: number, from: Date = new Date()): FirstFridayDate[] {
  const today = laParts(from)
  const results: FirstFridayDate[] = []
  let { year, month } = today

  while (results.length < count) {
    const day = firstFridayOf(year, month)
    const isFuture =
      year > today.year ||
      (year === today.year && month > today.month) ||
      (year === today.year && month === today.month && day >= today.day)

    if (isFuture) {
      const pad = (n: number) => String(n).padStart(2, '0')
      const noonUtc = new Date(Date.UTC(year, month - 1, day, 19))
      const offset = laOffset(noonUtc)
      const ymd = `${year}-${pad(month)}-${pad(day)}`
      results.push({
        label: new Intl.DateTimeFormat('en-US', {
          timeZone: 'UTC',
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(noonUtc),
        startDate: `${ymd}T17:00:00${offset}`,
        endDate: `${ymd}T23:00:00${offset}`,
      })
    }

    month += 1
    if (month > 12) {
      month = 1
      year += 1
    }
  }

  return results
}
