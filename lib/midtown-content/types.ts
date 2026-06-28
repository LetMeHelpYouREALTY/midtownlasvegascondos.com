export type MidtownFAQ = {
  question: string
  answer: string
}

export type MidtownSection = {
  heading?: string
  paragraphs: string[]
}

export type MidtownBreadcrumb = {
  name: string
  url: string
}

export type MidtownEvent = {
  slug: string
  title: string
  description: string
  keywords: string[]
  categories: string[]
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: {
    name: string
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
  }
  sections: MidtownSection[]
  faqs: MidtownFAQ[]
  relatedLinks?: { name: string; href: string }[]
  /** Actual event organizer — not this real estate site */
  organizerName?: string
  organizerUrl?: string
}

export type MidtownNewsArticle = {
  slug: string
  title: string
  description: string
  keywords: string[]
  datePublished: string
  category: string
  sections: MidtownSection[]
  faqs: MidtownFAQ[]
  relatedLinks?: { name: string; href: string }[]
}

export type MidtownCategory = {
  slug: string
  title: string
  description: string
  keywords: string[]
  h1: string
  heroSubtitle: string
  sections: MidtownSection[]
  faqs: MidtownFAQ[]
  featuredLinks: { name: string; href: string; description: string }[]
}
