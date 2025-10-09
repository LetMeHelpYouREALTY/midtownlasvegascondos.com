import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Midtown Las Vegas Real Estate Expert',
  description:
    'Contact Dr. Jan Duffy for Midtown Las Vegas condos and homes. Call (702) 500-1955 or email DrJanSells@MidtownLasVegasCondos.com. Schedule your personal tour today!',
  keywords:
    'Dr. Jan Duffy realtor, Midtown Las Vegas real estate agent, Arts District realtor, downtown Las Vegas condos agent',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

