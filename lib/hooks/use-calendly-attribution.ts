'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import {
  buildMidtownCalendlyUrl,
  calendlyCampaignFromPathname,
  calendlyWidgetUtm,
} from '@/lib/calendly-utm'

export function useCalendlyAttribution(campaignOverride?: string) {
  const pathname = usePathname()

  return useMemo(() => {
    const campaign =
      campaignOverride ?? calendlyCampaignFromPathname(pathname ?? '/')
    return {
      campaign,
      url: buildMidtownCalendlyUrl(campaign),
      utm: calendlyWidgetUtm(campaign),
    }
  }, [campaignOverride, pathname])
}
