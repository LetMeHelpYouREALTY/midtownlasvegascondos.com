/**
 * Generate SEO components using V0 API
 * Run: node scripts/generate-components.mjs seoImage
 */

import { v0 } from 'v0-sdk'

const prompts = {
  seoImage: `Create an SEO-optimized Next.js Image component for luxury real estate website.

TypeScript, Next.js 15, Tailwind CSS v4.
Component: SEOImage (default export)

Props:
- src: string
- alt: string (descriptive, keyword-rich)
- aspectRatio?: '4:3' | '16:9' | '1:1'
- className?: string
- priority?: boolean
- fill?: boolean

Generate complete component code only.`,

  seoLink: `Create SEO-optimized link component for Next.js 15.

TypeScript, Tailwind CSS v4.
Component: SEOLink (default export)

Props:
- href: string
- children: ReactNode (descriptive text)
- external?: boolean
- className?: string
- variant?: 'default' | 'underline' | 'button'

Generate complete component code only.`,

  seoHero: `Create modern hero section for luxury real estate.

TypeScript, Tailwind CSS v4, Next.js 15.
Component: SEOHero (default export)

Props:
- title: string (h1)
- subtitle?: string
- primaryCTA?: { text: string; href: string; external?: boolean }
- secondaryCTA?: { text: string; href: string; external?: boolean }
- height?: 'full' | 'large' | 'medium'

Generate complete component code only.`,

  featureCard: `Create feature card component for real estate.

TypeScript, Tailwind CSS v4.
Component: FeatureCard (default export)

Props:
- icon?: string | ReactNode
- title: string
- description: string
- link?: { href: string; text: string; external?: boolean }
- className?: string

Generate complete component code only.`,
}

async function generate(componentType) {
  if (!prompts[componentType]) {
    console.error(`Invalid type. Use: ${Object.keys(prompts).join(', ')}`)
    process.exit(1)
  }

  console.log(`Generating ${componentType}...\n`)

  try {
    const response = await v0.chats.create({
      system: 'Expert React/Next.js developer. Generate production-ready TypeScript components with SEO optimization. Use Tailwind CSS v4, Next.js 15 App Router.',
      message: prompts[componentType],
      modelConfiguration: {
        modelId: 'v0-1.5-md',
        imageGenerations: false,
        thinking: false,
      },
      responseMode: 'sync',
    })

    console.log(`✅ Generated: ${response.url}\n`)
    console.log('='.repeat(80))
    console.log(response.text)
    console.log('='.repeat(80))
    console.log(`\n💾 Save to: app/components/${componentType}.tsx`)

    return response
  } catch (error) {
    if (error.message?.includes('API key')) {
      console.error('\n❌ V0_API_KEY missing!')
      console.log('Set in .env.local: V0_API_KEY=your_key')
      console.log('Get key: https://v0.dev/settings\n')
    } else {
      console.error(`\n❌ Error: ${error.message}\n`)
    }
    process.exit(1)
  }
}

const type = process.argv[2]
if (!type) {
  console.log('Usage: node scripts/generate-components.mjs <type>')
  console.log(`Types: ${Object.keys(prompts).join(', ')}`)
  process.exit(1)
}

await generate(type)

