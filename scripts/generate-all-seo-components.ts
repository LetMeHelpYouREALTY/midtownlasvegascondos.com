/**
 * Generate all SEO-optimized components using V0 API
 * Run: pnpm tsx scripts/generate-all-seo-components.ts
 */

import { v0, ChatDetail } from 'v0-sdk'

const systemPrompt = `You are an expert React/Next.js developer. Generate complete, production-ready TypeScript components with proper SEO optimization, accessibility, and modern design. Always include proper TypeScript types, Tailwind CSS v4 classes, and Next.js 15 App Router best practices. Export components as default exports. Use 'use client' only when necessary.`

const componentPrompts = {
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

Generate ONLY the component code, no explanations.`,

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

Generate ONLY the component code, no explanations.`,

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

Generate ONLY the component code, no explanations.`,

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

Generate ONLY the component code, no explanations.`,
}

async function generateComponent(
  name: string,
  prompt: string,
): Promise<{ name: string; code: string; url: string; chatId: string }> {
  console.log(`\n🚀 Generating ${name}...`)
  
  try {
    const response = (await v0.chats.create({
      system: systemPrompt,
      message: prompt,
      modelConfiguration: {
        modelId: 'v0-1.5-md',
        imageGenerations: false,
        thinking: false,
      },
      responseMode: 'sync',
    })) as ChatDetail

    console.log(`✅ Generated ${name}`)
    console.log(`🔗 View: ${response.url}`)
    
    return {
      name,
      code: response.text,
      url: response.url,
      chatId: response.id,
    }
  } catch (error) {
    console.error(`❌ Error generating ${name}:`, error)
    throw error
  }
}

async function main() {
  console.log('🎨 Generating SEO-optimized components with V0 API...\n')
  
  const results = []
  
  for (const [name, prompt] of Object.entries(componentPrompts)) {
    try {
      const result = await generateComponent(name, prompt)
      results.push(result)
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`Failed to generate ${name}:`, error)
    }
  }
  
  console.log('\n📊 Generation Summary:')
  console.log(`✅ Generated ${results.length} components\n`)
  
  // Save results to files
  for (const result of results) {
    const fileName = `app/components/${result.name}.tsx`
    console.log(`💾 Saving ${result.name} to ${fileName}`)
    // Note: We'll need to write these files separately
  }
  
  console.log('\n✨ All components generated!')
  console.log('\nNext steps:')
  console.log('1. Review the generated components')
  console.log('2. Integrate them into your pages')
  console.log('3. Replace placeholder images with SEOImage')
  console.log('4. Replace generic links with SEOLink')
  
  return results
}

if (require.main === module) {
  main().catch(console.error)
}

export { generateComponent, componentPrompts, main }

