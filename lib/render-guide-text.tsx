import Link from 'next/link'
import { Fragment } from 'react'
import type { ReactNode } from 'react'

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

function parseGuideText(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  const regex = new RegExp(LINK_PATTERN.source, 'g')
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, label, href] = match
    const isExternal = href.startsWith('http')
    parts.push(
      isExternal ? (
        <a
          key={`${keyPrefix}-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 font-semibold hover:underline"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`${keyPrefix}-${key++}`}
          href={href}
          className="text-slate-900 font-semibold hover:underline"
        >
          {label}
        </Link>
      ),
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

/** Renders guide paragraph text with markdown-style internal links. */
export function RenderGuideText({ text }: { text: string }) {
  return (
    <p className="text-slate-600 leading-relaxed mb-4">
      {parseGuideText(text, 'p').map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </p>
  )
}

/** Inline variant for list items and compact text. */
export function RenderGuideInline({ text }: { text: string }) {
  return (
    <>
      {parseGuideText(text, 'inline').map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  )
}
