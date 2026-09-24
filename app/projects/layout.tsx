import type { Metadata } from 'next'

/** Internal v0 builder tool — not buyer content, keep it out of search. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
