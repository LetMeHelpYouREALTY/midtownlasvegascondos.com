import Image from 'next/image'
import {
  AGENT_PHOTO_ALT,
  AGENT_PHOTO_HEIGHT,
  AGENT_PHOTO_WIDTH,
  getAgentPhotoUrl,
} from '@/lib/agent-photo'

type AgentProfilePhotoProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  priority?: boolean
}

const SIZE_MAP = {
  sm: { box: 'w-16 h-16', px: 64 },
  md: { box: 'w-48 h-48 md:w-56 md:h-56', px: 224 },
  lg: { box: 'w-64 h-64 md:w-80 md:h-80', px: 320 },
} as const

export function AgentProfilePhoto({
  size = 'md',
  className = '',
  priority = false,
}: AgentProfilePhotoProps) {
  const { box, px } = SIZE_MAP[size]
  const src = getAgentPhotoUrl()
  const isExternal = src.startsWith('http')

  return (
    <div
      className={`relative ${box} rounded-full overflow-hidden border-4 border-slate-200 shadow-lg bg-slate-100 ${className}`}
    >
      <Image
        src={src}
        alt={AGENT_PHOTO_ALT}
        fill
        className="object-cover object-top"
        quality={85}
        priority={priority}
        sizes={`${px}px`}
        {...(isExternal ? { unoptimized: false } : {})}
      />
    </div>
  )
}
