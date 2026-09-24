import Image from 'next/image'
import Link from 'next/link'
import { AGENT_PHOTO_ALT, getAgentPhotoUrl } from '@/lib/agent-photo'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

type SiteLogoProps = {
  variant?: 'header' | 'footer'
}

const SIZE = {
  header: 40,
  footer: 56,
} as const

/** Wordmark plus Dr. Jan's portrait. Shared by the header and footer on every page. */
export function SiteLogo({ variant = 'header' }: SiteLogoProps) {
  const onDark = variant === 'footer'
  const px = SIZE[variant]

  return (
    <Link href="/" className="flex items-center gap-2.5 min-w-0">
      <Image
        src={getAgentPhotoUrl()}
        alt={AGENT_PHOTO_ALT}
        width={px}
        height={px}
        priority={variant === 'header'}
        className="shrink-0 rounded-full"
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`truncate font-bold tracking-tight ${
            onDark ? 'text-sm text-white sm:text-base' : 'text-[13px] text-slate-900 sm:text-base'
          }`}
        >
          {REAL_ESTATE_SITE.logoTitle}
        </span>
        <span
          className={`truncate text-xs font-medium ${onDark ? 'text-amber-200' : 'text-amber-800'}`}
        >
          {REAL_ESTATE_SITE.logoLine}
        </span>
      </span>
    </Link>
  )
}
