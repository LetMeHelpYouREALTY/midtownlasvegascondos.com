/**
 * CLI script to generate SEO components using V0 API
 * Usage: pnpm tsx scripts/generate-seo-components-cli.ts <componentType>
 * 
 * Component types: seoImage, seoLink, seoHero, featureCard
 */

import { v0, ChatDetail } from 'v0-sdk'

const componentPrompts: Record<string, string> = {
  seoImage: `Create an SEO-optimized Next.js Image component for a luxury real estate website in Las Vegas Arts District.

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

Generate the complete, production-ready component code only.`,

  seoLink: `Create an SEO-optimized internal link component for Next.js 15 App Router.

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

Generate the complete, production-ready component code only.`,

  seoHero: `Create a modern, SEO-friendly hero section component for a luxury real estate website.

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

async function generateComponent(componentType: string) {
  if (!componentPrompts[componentType]) {
    console.error(`❌ Invalid component type: ${componentType}`)
    console.log('\nAvailable types:')
    Object.keys(componentPrompts).forEach((type) => {
      console.log(`  - ${type}`)
    })
    process.exit(1)
  }

  console.log(`\n🚀 Generating ${componentType} component...\n`)

  try {
    const response = (await v0.chats.create({
      system:
        'You are an expert React/Next.js developer. Generate complete, production-ready TypeScript components with proper SEO optimization, accessibility, and modern design. Always include proper TypeScript types, Tailwind CSS v4 classes, and Next.js 15 App Router best practices. Export components as default exports.',
      message: componentPrompts[componentType],
      modelConfiguration: {
        modelId: 'v0-1.5-md',
        imageGenerations: false,
        thinking: false,
      },
      responseMode: 'sync',
    })) as ChatDetail

    console.log(`✅ Successfully generated ${componentType}`)
    console.log(`📝 Chat ID: ${response.id}`)
    console.log(`🔗 View on v0.dev: ${response.url}`)
    console.log('\n' + '='.repeat(80))
    console.log('COMPONENT CODE:')
    console.log('='.repeat(80))
    console.log(response.text)
    console.log('='.repeat(80))
    console.log('\n💡 Copy the code above and save it to:')
    console.log(`   app/components/${componentType}.tsx`)

    return {
      componentType,
      chatId: response.id,
      url: response.url,
      code: response.text,
    }
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      if (
        errorMessage.includes('api key is required') ||
        errorMessage.includes('v0_api_key') ||
        errorMessage.includes('config.apikey')
      ) {
        console.error('\n❌ V0_API_KEY is missing!')
        console.log('\nSet it in your .env.local file:')
        console.log('  V0_API_KEY=your_key_here')
        console.log('\nGet your API key from: https://v0.dev/settings')
        process.exit(1)
      }

      console.error(`\n❌ Error: ${error.message}`)
      process.exit(1)
    }

    console.error('\n❌ Unknown error occurred')
    process.exit(1)
  }
}

async function main() {
  const args = process.argv.slice(2)
  const componentType = args[0]

  if (!componentType) {
    console.log('Usage: pnpm tsx scripts/generate-seo-components-cli.ts <componentType>\n')
    console.log('Available component types:')
    Object.keys(componentPrompts).forEach((type) => {
      console.log(`  - ${type}`)
    })
    console.log('\nExample:')
    console.log('  pnpm tsx scripts/generate-seo-components-cli.ts seoImage')
    process.exit(1)
  }

  await generateComponent(componentType)
}

if (require.main === module) {
  main()
}

export { generateComponent, componentPrompts }

