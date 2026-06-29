/** Dr. Jan Duffy — Calendly booking (single source of truth for all widgets) */

export const CALENDLY_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/in-person-real-estate-consultation'

export const CALENDLY_BADGE = {
  url: CALENDLY_CONSULTATION_URL,
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

export const CALENDLY_INLINE_DEFAULTS = {
  minWidth: '320px',
  height: '700px',
} as const

export const CALENDLY_SCRIPT_URL =
  'https://assets.calendly.com/assets/external/widget.js'

export const CALENDLY_STYLES_URL =
  'https://assets.calendly.com/assets/external/widget.css'
