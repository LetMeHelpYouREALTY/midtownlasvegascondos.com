import { CalendlyInlineWidget } from '@/app/components/calendly-inline-widget'
import { CalendlyLink } from '@/app/components/calendly-link'

type CalendlyBookingSectionProps = {
  heading?: string
  description?: string
  showPopupFallback?: boolean
  popupText?: string
  className?: string
}

export function CalendlyBookingSection({
  heading = 'Schedule Your In-Person Consultation',
  description = 'Book a personalized consultation with Dr. Jan Duffy at the Nevada Real Estate Group office or a Midtown property tour. Choose a time that works for you.',
  showPopupFallback = true,
  popupText = 'Schedule time with me',
  className = '',
}: CalendlyBookingSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{heading}</h2>
        <p className="text-lg text-slate-600 mb-8 text-center max-w-2xl mx-auto">{description}</p>
        <CalendlyInlineWidget className="mx-auto max-w-3xl" />
        {showPopupFallback && (
          <p className="text-center mt-6 text-sm text-slate-600">
            Prefer a popup?{' '}
            <CalendlyLink text={popupText} variant="link" className="text-slate-900" />
          </p>
        )}
      </div>
    </section>
  )
}
