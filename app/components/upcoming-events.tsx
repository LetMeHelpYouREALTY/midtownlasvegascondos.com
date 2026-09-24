import Link from 'next/link'
import { getUpcomingFirstFridays } from '@/lib/first-friday'

export function UpcomingEvents() {
  const dates = getUpcomingFirstFridays(2)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {dates.map((date) => (
        <div
          key={date.startDate}
          className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">First Friday Las Vegas</h3>
          <div className="space-y-1 text-slate-600">
            <p>
              <span className="font-semibold">Date:</span> {date.label}
            </p>
            <p>
              <span className="font-semibold">Time:</span> 5:00 PM – 11:00 PM
            </p>
            <p>
              <span className="font-semibold">Where:</span> 18b Arts District, a short walk from Midtown
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Confirm the schedule with the First Friday Foundation before you go.
          </p>
        </div>
      ))}
      <div className="md:col-span-2 text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/neighborhood/first-fridays"
          className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          First Friday Guide for Buyers
        </Link>
        <Link
          href="/events"
          className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
        >
          View All Events
        </Link>
      </div>
    </div>
  )
}
