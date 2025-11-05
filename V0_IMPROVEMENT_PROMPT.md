# V0 Design Improvement Prompt

Copy this prompt to v0.dev to generate improved components:

---

Create modern, SEO-optimized React components for a luxury real estate website in the Las Vegas Arts District using Next.js 15, TypeScript, and Tailwind CSS v4.

## Design Requirements

**Color Scheme:**
- Primary: Slate-900 to Slate-700 gradients (dark, sophisticated)
- Accent: White buttons on dark backgrounds
- Background: Clean white with subtle slate-50 sections
- Text: Slate-900 for headings, Slate-600 for body

**Typography:**
- Inter font (already loaded)
- Large, bold headings (h1: 5xl-7xl, h2: 4xl-5xl)
- Clear hierarchy with proper h1, h2, h3 structure for SEO

**Components Needed:**

### 1. SEO-Optimized Image Component
Replace placeholder divs with proper Next.js Image components:
- Use Next.js Image component with proper alt text
- Include descriptive, keyword-rich alt attributes
- Add loading="lazy" for performance
- Support aspect ratios: 4:3, 16:9, 1:1
- Include proper width/height or fill props
- Add aria-label for accessibility

Example use cases:
- "Level 2 electric vehicle charging station in Midtown Las Vegas Arts District"
- "The Pepper Club restaurant interior at The English Hotel"
- "Luxury English Residences condo-hotel unit interior"
- "Midtown Plaza shopping and dining district"

### 2. Enhanced Internal Link Component
Create a reusable SEO-friendly link component:
- Descriptive anchor text (not "click here" or "learn more")
- Proper semantic HTML
- Hover states with underline or color change
- Include rel="noopener noreferrer" for external links
- Support for both internal Next.js Links and external anchors
- Visual distinction between internal and external links

Example anchor texts:
- "Learn about the Las Vegas Arts District"
- "Explore English Residences condos"
- "Discover First Friday events"
- "View available Midtown properties"

### 3. Modern Page Layout Components

**Hero Section:**
- Full-screen or large hero with gradient overlay
- Centered content with h1 heading
- CTA buttons with clear hierarchy
- Mobile-responsive (stack on small screens)
- Proper semantic structure for SEO

**Content Sections:**
- Clear section spacing (py-20)
- Proper heading hierarchy (h2 for sections, h3 for subsections)
- Well-organized paragraphs with proper spacing
- Image + text grid layouts (md:grid-cols-2)
- Card-based layouts for features/benefits

**Feature Cards:**
- Clean white cards with subtle shadows
- Icon support (emoji or SVG)
- Title, description, and optional links
- Hover effects
- Responsive grid (md:grid-cols-3)

### 4. Image Gallery Component Enhancement
Improve existing ImageGallery component:
- Better thumbnail navigation
- Keyboard accessibility
- Proper ARIA labels
- SEO-friendly captions
- Lazy loading for performance

### 5. Neighborhood Page Template
Create a reusable template for neighborhood pages:
- Hero section with gradient background
- Image + content grid layout
- Feature cards section
- FAQ section
- CTA section
- Proper heading structure (h1 → h2 → h3)

## SEO Requirements

- Every page must have exactly one h1
- Proper heading hierarchy (h1 → h2 → h3)
- All images must have descriptive alt text
- All links must have descriptive anchor text
- Semantic HTML (article, section, nav)
- Proper meta descriptions (already handled in metadata)

## Technical Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4 (using @import "tailwindcss")
- Next.js Image component
- Radix UI components available
- Inter font family

## Design Style

- Modern, clean, luxury real estate aesthetic
- Professional but approachable
- Mobile-first responsive design
- Smooth transitions and hover effects
- Accessibility-compliant (WCAG 2.1)
- Fast loading (optimize images, lazy load)

## Content Context

Website is for Dr. Jan Duffy, a real estate agent specializing in Midtown Las Vegas condos in the Arts District. Target keywords: luxury condos, Arts District, Midtown Las Vegas, downtown Las Vegas, English Residences, condo-hotel.

Generate components that:
1. Improve visual appeal while maintaining SEO structure
2. Convert placeholder images to proper Next.js Image components
3. Enhance internal linking with descriptive anchor text
4. Create reusable, accessible components
5. Maintain the existing dark slate + white color scheme
6. Ensure proper heading hierarchy for SEO

---

**Copy to v0.dev → Share output for refinements**

