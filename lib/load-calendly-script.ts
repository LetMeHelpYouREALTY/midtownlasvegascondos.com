import { CALENDLY_SCRIPT_URL, CALENDLY_STYLES_URL } from '@/lib/calendly-config'

/** Inject Calendly widget.js once and announce `calendly-script-loaded`. */
export function loadCalendlyScript(): void {
  if (typeof window === 'undefined') return
  if (document.getElementById('calendly-widget-script') || window.Calendly) {
    if (window.Calendly) {
      window.dispatchEvent(new Event('calendly-script-loaded'))
    }
    return
  }

  if (!document.querySelector(`link[href="${CALENDLY_STYLES_URL}"]`)) {
    const stylesheet = document.createElement('link')
    stylesheet.rel = 'stylesheet'
    stylesheet.href = CALENDLY_STYLES_URL
    document.head.appendChild(stylesheet)
  }

  const script = document.createElement('script')
  script.id = 'calendly-widget-script'
  script.src = CALENDLY_SCRIPT_URL
  script.async = true
  script.onload = () => {
    window.dispatchEvent(new Event('calendly-script-loaded'))
  }
  document.body.appendChild(script)
}
