import { CalendlyLink } from './calendly-link'

const CONTACT_CALENDLY_URL = 'https://calendly.com/drjanduffy/15min'

/** No forms on site — lead capture is a Calendly widget only. */
export function Newsletter() {
  return (
    <div className="flex justify-center">
      <CalendlyLink
        text="Schedule a Quick Call"
        variant="primary"
        url={CONTACT_CALENDLY_URL}
      />
    </div>
  )
}
