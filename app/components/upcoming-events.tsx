import Link from 'next/link'

const events = [
  {
    title: 'The Las Vegas Book Festival',
    date: 'Saturday, October 18th',
    startTime: '12:00 am',
    endTime: '12:00 am',
  },
  {
    title: '2025 Las Vegas Marathon',
    date: 'Sunday, October 26th',
    startTime: '5:00 am',
    endTime: '12:00 am',
  },
]

export function UpcomingEvents() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
          <div className="space-y-1 text-slate-600">
            <p>
              <span className="font-semibold">Start Date:</span> {event.date} @ {event.startTime}
            </p>
            <p>
              <span className="font-semibold">End Date:</span> {event.date} @ {event.endTime}
            </p>
          </div>
        </div>
      ))}
      <div className="md:col-span-2 text-center mt-8">
        <Link
          href="/events"
          className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          View All Events
        </Link>
      </div>
    </div>
  )
}

