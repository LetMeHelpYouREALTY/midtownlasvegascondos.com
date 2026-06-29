import Link from 'next/link'
import { NAV_LABELS, REAL_ESTATE_SITE } from '@/lib/site-persona'
import { AgentProfilePhoto } from '@/app/components/agent-profile-photo'

type AgentBylineProps = {
  compact?: boolean
}

export function AgentByline({ compact = false }: AgentBylineProps) {
  return (
    <div className={`flex items-center gap-4 ${compact ? 'mb-4' : 'mb-8 pt-4 border-t border-slate-200'}`}>
      <AgentProfilePhoto size="sm" className="border-2 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900">
          {REAL_ESTATE_SITE.agentName}, {REAL_ESTATE_SITE.agentTitle}
        </p>
        <p className="text-xs text-slate-600">
          {REAL_ESTATE_SITE.brokerage} · License {REAL_ESTATE_SITE.license} · {REAL_ESTATE_SITE.phone}
        </p>
        {!compact && (
          <p className="text-xs text-slate-500 mt-1 italic">
            {REAL_ESTATE_SITE.yearsExperience} years guiding Las Vegas buyers — Midtown & Arts District specialist
          </p>
        )}
      </div>
      {!compact && (
        <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">
          {NAV_LABELS.aboutAgent} →
        </Link>
      )}
    </div>
  )
}
