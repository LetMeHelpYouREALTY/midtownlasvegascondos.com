import Link from 'next/link'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'

type AgentBylineProps = {
  compact?: boolean
}

export function AgentByline({ compact = false }: AgentBylineProps) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'mb-4' : 'mb-8 pt-4 border-t border-slate-200'}`}>
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">By {REAL_ESTATE_SITE.agentName}</p>
        <p className="text-xs text-slate-600">
          {REAL_ESTATE_SITE.brokerage} • License {REAL_ESTATE_SITE.license} • {REAL_ESTATE_SITE.phone}
        </p>
      </div>
      {!compact && (
        <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
          About Dr. Jan →
        </Link>
      )}
    </div>
  )
}
