/** Serialize JSON-LD for inline script tags (escape `<` per Google/HTML safety). */
export function stringifyJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
