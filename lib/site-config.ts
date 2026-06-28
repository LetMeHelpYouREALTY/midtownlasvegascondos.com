/** Site identity — midtownlasvegascondos.com (Local Urbanist persona) */
export const siteConfig = {
  baseUrl: 'https://www.midtownlasvegascondos.com',
  siteName: 'Midtown Las Vegas Condos',
  tagline: 'Walkable Arts District Living',
  persona: 'local-urbanist' as const,
  personaLabel: 'The Local Urbanist',
  personaDescription:
    'Las Vegas locals and creatives choosing walkable Arts District life over suburban commutes — galleries, First Friday, and neighborhood culture on foot.',
  phone: '(702) 500-1980',
  phoneTel: '+17025001980',
  email: 'DrJanSells@MidtownLasVegasCondos.com',
  address: {
    street: '921 South Main Street',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89101',
    full: '921 South Main Street, Las Vegas, NV 89101',
  },
  agent: {
    name: 'Dr. Jan Duffy',
    license: 'S.0197614.LLC',
    brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
  hours: 'Sun-Thu: 9 am – 5 pm · Fri-Sat: Closed',
  walkScore: 86,
} as const

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.baseUrl}${normalized}`
}
