/**
 * Generate SEO components via API endpoint
 * Usage: node scripts/generate-via-api.js <componentType>
 */

const componentTypes = ['seoImage', 'seoLink', 'seoHero', 'featureCard']

async function generateComponent(componentType) {
  if (!componentTypes.includes(componentType)) {
    console.error(`❌ Invalid component type: ${componentType}`)
    console.log('\nAvailable types:')
    componentTypes.forEach((type) => {
      console.log(`  - ${type}`)
    })
    process.exit(1)
  }

  console.log(`\n🚀 Generating ${componentType} component via API...\n`)

  try {
    const response = await fetch('http://localhost:3000/api/generate-seo-components', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ componentType }),
    })

    const data = await response.json()

    if (!response.ok) {
      if (data.error === 'API_KEY_MISSING') {
        console.error('\n❌ V0_API_KEY is missing!')
        console.log('\nSet it in your .env.local file:')
        console.log('  V0_API_KEY=your_key_here')
        console.log('\nGet your API key from: https://v0.dev/settings')
        console.log('\nThen restart your dev server: pnpm dev')
      } else {
        console.error(`\n❌ Error: ${data.error || data.message}`)
      }
      process.exit(1)
    }

    console.log(`✅ Successfully generated ${componentType}`)
    console.log(`📝 Chat ID: ${data.chatId}`)
    console.log(`🔗 View on v0.dev: ${data.url}`)
    console.log('\n' + '='.repeat(80))
    console.log('COMPONENT CODE:')
    console.log('='.repeat(80))
    console.log(data.code)
    console.log('='.repeat(80))
    console.log('\n💡 Next steps:')
    console.log(`   1. Copy the code above`)
    console.log(`   2. Save it to: app/components/${componentType}.tsx`)
    console.log(`   3. Update your pages to use the new component`)

    return data
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`)
    console.log('\nMake sure your dev server is running: pnpm dev')
    process.exit(1)
  }
}

const componentType = process.argv[2]

if (!componentType) {
  console.log('Usage: node scripts/generate-via-api.js <componentType>\n')
  console.log('Available component types:')
  componentTypes.forEach((type) => {
    console.log(`  - ${type}`)
  })
  console.log('\nExample:')
  console.log('  node scripts/generate-via-api.js seoImage')
  console.log('\nNote: Make sure your dev server is running (pnpm dev)')
  process.exit(1)
}

generateComponent(componentType)

