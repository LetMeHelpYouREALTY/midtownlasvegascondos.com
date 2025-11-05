#!/usr/bin/env tsx
/**
 * Script to generate SEO-optimized components using V0 API
 * Run: pnpm tsx scripts/generate-seo-components.ts
 */

import { v0 } from 'v0-sdk'

const componentPrompts = {
  image: `Create an SEO-optimized Next.js Image component for a luxury real estate website in Las Vegas Arts District.

Requirements:
- Use Next.js Image component from 'next/image'
- TypeScript with proper types
- Descriptive, keyword-rich alt text prop (required)
- Support aspect ratios: 4:3, 16:9, 1:1 via props
- Add loading="lazy" for performance (optional prop)
- Include proper width/height or fill props
- Add aria-label for accessibility
- Use Tailwind CSS v4 classes
- Component name: SEOImage
- Export as default

Props interface:
- src: string (required)
- alt: string (required) - descriptive, keyword-rich
- aspectRatio?: '4:3' | '16:9' | '1:1' | 'auto'
- className?: string
- priority?: boolean
- fill?: boolean
- width?: number
- height?: number

Example usage:
<SEOImage 
  src="/images/english-hotel.jpg"
  alt="The English Hotel boutique luxury hotel exterior in Las Vegas Arts District at 921 S Main Street with modern industrial design"
  aspectRatio="4:3"
/>

Generate the complete, production-ready component code only.`,

  link: `Create an SEO-optimized internal link component for Next.js 15 App Router.

Requirements:
- Use Next.js Link from 'next/link' for internal links
- Use anchor tag for external links with proper rel attributes
- Descriptive anchor text (children prop) - never use "click here"
- Proper hover states with underline or color change
- Include rel="noopener noreferrer" for external links
- Visual distinction between link types
- TypeScript with proper types
- Tailwind CSS v4 styling
- Component name: SEOLink
- Export as default

Props interface:
- href: string (required)
- children: ReactNode (required) - descriptive anchor text
- external?: boolean (default: false)
- className?: string
- variant?: 'default' | 'underline' | 'button'

Internal links should use Next.js Link. External links should use anchor tag.

Example usage:
<SEOLink href="/neighborhood/arts-district" variant="underline">
  Learn about the Las Vegas Arts District
</SEOLink>

Generate the complete, production-ready component code only.`,

  hero: `Create a modern, SEO-friendly hero section component for a luxury real estate website.

Requirements:
- Full-screen or configurable height hero
- Gradient overlay (bg-gradient-to-br from-slate-900 to-slate-700)
- Centered content with proper semantic h1 heading
- Optional subtitle paragraph
- CTA buttons with clear hierarchy (primary and secondary)
- Mobile-responsive (flex-col on small screens, flex-row on larger)
- Proper semantic structure for SEO
- TypeScript + Tailwind CSS v4
- Component name: SEOHero
- Export as default

Props interface:
- title: string (required) - goes in h1
- subtitle?: string
- primaryCTA?: { text: string; href: string; external?: boolean }
- secondaryCTA?: { text: string; href: string; external?: boolean }
- backgroundImage?: string
- height?: 'full' | 'large' | 'medium' (default: 'full')

Generate the complete, production-ready component code only.`,

  featureCard: `Create a modern feature card component for real estate website.

Requirements:
- Clean white cards with subtle shadow (shadow-sm)
- Icon support (string emoji or ReactNode)
- Title (h3), description (p), and optional link
- Hover effects (shadow-lg on hover)
- Responsive grid ready
- TypeScript + Tailwind CSS v4
- Component name: FeatureCard
- Export as default

Props interface:
- icon?: string | ReactNode
- title: string (required)
- description: string (required)
- link?: { href: string; text: string; external?: boolean }
- className?: string

Generate the complete, production-ready component code only.`,
}

async function generateComponent(componentType: keyof typeof componentPrompts) {
  console.log(`\n🚀 Generating ${componentType} component...`)
  
  try {
    const response = await v0.chats.create({
      system:
        'You are an expert React/Next.js developer. Generate complete, production-ready TypeScript components with proper SEO optimization, accessibility, and modern design. Always include proper TypeScript types, Tailwind CSS v4 classes, and Next.js 15 App Router best practices. Export components as default exports.',
      message: componentPrompts[componentType],
      modelConfiguration: {
        modelId: 'v0-1.5-md',
        imageGenerations: false,
        thinking: false,
      },
      responseMode: 'sync',
    })

    console.log(`✅ Generated ${componentType} component`)
    console.log(`📝 Chat ID: ${response.id}`)
    console.log(`🔗 View on v0.dev: ${response.url}`)
    console.log('\n--- Component Code ---\n')
    console.log(response.text)
    console.log('\n--- End Component Code ---\n')

    return {
      componentType,
      chatId: response.id,
      url: response.url,
      code: response.text,
    }
  } catch (error) {
    console.error(`❌ Error generating ${componentType}:`, error)
    throw error
  }
}

async function main() {
  const args = process.argv.slice(2)
  const componentType = args[0] as keyof typeof componentPrompts

  if (!componentType || !componentPrompts[componentType]) {
    console.log('Usage: pnpm tsx scripts/generate-seo-components.ts <componentType>')
    console.log('\nAvailable component types:')
    Object.keys(componentPrompts).forEach((type) => {
      console.log(`  - ${type}`)
    })
    process.exit(1)
  }

  try {
    await generateComponent(componentType)
  } catch (error) {
    console.error('Failed to generate component:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export { generateComponent, componentPrompts }

