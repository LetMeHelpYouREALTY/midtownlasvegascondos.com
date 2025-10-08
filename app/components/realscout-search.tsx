/// <reference path="../../global.d.ts" />

export function RealScoutSearch() {
  return (
    <div className="w-full">
      {/* @ts-expect-error - Custom element loaded via Cloudflare Worker */}
      <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
    </div>
  )
}

