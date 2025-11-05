import { v0 } from 'v0-sdk'
import { NextRequest, NextResponse } from 'next/server'

const componentPrompts: Record<string, string> = {
  seoImage: `Create an SEO-optimized Next.js Image component for a luxury real estate website in Las Vegas Arts District.

Use Next.js Image from 'next/image', TypeScript, Tailwind CSS v4.
Component name: SEOImage (default export)

Props:
- src: string (required)
- alt: string (required) - descriptive, keyword-rich
- aspectRatio?: '4:3' | '16:9' | '1:1' | 'auto'
- className?: string
- priority?: boolean
- fill?: boolean

Generate complete TypeScript component code only.`,

  seoLink: `Create an SEO-optimized link component for Next.js 15 App Router.

Use Next.js Link for internal, anchor for external links.
Component name: SEOLink (default export)

Props:
- href: string (required)
- children: ReactNode (required) - descriptive text
- external?: boolean
- className?: string
- variant?: 'default' | 'underline' | 'button'

Generate complete TypeScript component code only.`,

  seoHero: `Create a modern hero section component for luxury real estate website.

Use Tailwind CSS v4, TypeScript, Next.js 15.
Component name: SEOHero (default export)

Props:
- title: string (h1)
- subtitle?: string
- primaryCTA?: { text: string; href: string; external?: boolean }
- secondaryCTA?: { text: string; href: string; external?: boolean }
- height?: 'full' | 'large' | 'medium'

Generate complete TypeScript component code only.`,

  featureCard: `Create a feature card component for real estate website.

Use Tailwind CSS v4, TypeScript.
Component name: FeatureCard (default export)

Props:
- icon?: string | ReactNode
- title: string
- description: string
- link?: { href: string; text: string; external?: boolean }
- className?: string

Generate complete TypeScript component code only.`,
}

export async function POST(request: NextRequest) {
  try {
    const { componentType } = await request.json()

    if (!componentType || !componentPrompts[componentType]) {
      return NextResponse.json(
        { 
          error: 'Invalid component type', 
          availableTypes: Object.keys(componentPrompts) 
        },
        { status: 400 },
      )
    }

    const response = await v0.chats.create({
      system:
        'You are an expert React/Next.js developer. Generate complete, production-ready TypeScript components with proper SEO optimization and accessibility. Use Tailwind CSS v4 and Next.js 15 App Router best practices. Export as default.',
      message: componentPrompts[componentType],
      modelConfiguration: {
        modelId: 'v0-1.5-md',
        imageGenerations: false,
        thinking: false,
      },
      responseMode: 'sync',
    })

    return NextResponse.json({
      success: true,
      componentType,
      chatId: response.id,
      url: response.url,
      code: response.text,
    })
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      if (
        errorMessage.includes('api key is required') ||
        errorMessage.includes('v0_api_key') ||
        errorMessage.includes('config.apikey')
      ) {
        return NextResponse.json(
          { 
            error: 'API_KEY_MISSING', 
            message: 'V0_API_KEY environment variable is required. Get your key from https://v0.dev/settings' 
          },
          { status: 401 },
        )
      }

      return NextResponse.json(
        { error: `Failed to generate component: ${error.message}` },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate component. Please try again.' },
      { status: 500 },
    )
  }
}
