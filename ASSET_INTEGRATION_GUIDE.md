# Asset Integration Guide - Midtown Las Vegas Condos

## 📋 Required Assets from midtownvegas.com

Since you work with Midtown Vegas, you'll need to obtain these assets through your partnership channels.

## 🎨 Logo Files Needed

### Primary Logo
- **Location on site**: Header navigation
- **File format**: SVG (preferred) or PNG with transparent background
- **Sizes needed**: 
  - Full logo: 200px width (header)
  - Mobile logo: 150px width
  - Favicon: 32x32px, 16x16px

**Where to save**: `/public/images/logos/`
- `midtown-logo.svg` or `midtown-logo.png`
- `midtown-logo-white.svg` (for dark backgrounds)

### How to Add:
Update `app/components/header.tsx` line 35-37:
```typescript
<Link href="/" className="flex items-center">
  <Image src="/images/logos/midtown-logo.svg" alt="Midtown" width={200} height={50} />
</Link>
```

---

## 🎥 Video Assets

### Hero Video (Homepage)
- **Purpose**: Background video for hero section
- **Format**: MP4 (H.264 codec)
- **Recommended specs**:
  - Resolution: 1920x1080 (1080p)
  - Bitrate: 5-8 Mbps
  - File size: Under 10MB for web performance
  - Duration: 10-20 seconds (looping)

**Where to save**: `/public/videos/hero-background.mp4`

### Property Tour Videos
- **Purpose**: Virtual tours of English Residences
- **Format**: MP4
- **Where to save**: `/public/videos/property-tours/`

### How to Add Homepage Video:
Update `app/page.tsx` hero section (around line 10):
```typescript
<section className="relative h-screen flex items-center justify-center">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero-background.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/40" />
  {/* Rest of hero content */}
</section>
```

---

## 🏢 Property Images

### Homepage Hero Images
- **Dimensions**: 1920x1080px minimum
- **Format**: JPG (optimized) or WebP
- **Where to save**: `/public/images/hero/`

### English Residences
- Interior photos (bedroom, living room, kitchen, bathroom)
- Exterior building shots
- Amenity photos
- **Where to save**: `/public/images/properties/english-residences/`

### Midtown Plaza
- Plaza photos
- Restaurant exteriors
- Outdoor seating areas
- **Where to save**: `/public/images/properties/midtown-plaza/`

### The English Hotel
- Lobby photos
- Room photos
- Pepper Club restaurant
- **Where to save**: `/public/images/properties/english-hotel/`

### Arts District
- Street scenes
- Gallery photos
- First Friday events
- **Where to save**: `/public/images/gallery/arts-district/`

---

## 📐 Floor Plans & Documents

### English Residences Floor Plans
- **Format**: PDF (downloadable) and JPG (web display)
- **Files needed**:
  - Studio floor plan
  - 1-bedroom floor plan
  - 2-bedroom floor plan
  - Penthouse floor plan

**Where to save**: `/public/plans/english-residences/`
- `studio-floorplan.pdf` & `studio-floorplan.jpg`
- `1bed-floorplan.pdf` & `1bed-floorplan.jpg`
- `2bed-floorplan.pdf` & `2bed-floorplan.jpg`
- `penthouse-floorplan.pdf` & `penthouse-floorplan.jpg`

### Building Plans
- Site map
- Amenity layouts
- Parking diagrams

**Where to save**: `/public/plans/building/`

---

## 🚀 Quick Integration Steps

### Step 1: Get Assets from Midtown Vegas Partnership
Contact your Midtown Vegas partner contact and request:
1. Official logo files (SVG/PNG)
2. Professional photography (high-res)
3. Marketing videos (if available)
4. Floor plans and property documents
5. Brand guidelines (colors, fonts, usage rules)

### Step 2: Optimize Images
Before uploading, optimize all images:
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target file sizes:
  - Hero images: Under 200KB
  - Gallery images: Under 100KB
  - Thumbnails: Under 50KB

### Step 3: Add to Project
1. Place files in appropriate `/public/` directories
2. Update component files with proper paths
3. Test on local development server
4. Commit and push to production

### Step 4: Update Image Placeholders
Search for "Image" or "Photo" placeholders in these files:
- `app/page.tsx` (homepage)
- `app/neighborhood/english-residences/page.tsx`
- `app/neighborhood/english-hotel/page.tsx`
- `app/neighborhood/midtown-plaza/page.tsx`
- All other neighborhood pages

Replace placeholder divs with:
```typescript
import Image from 'next/image'

<Image
  src="/images/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

---

## 📝 Asset Checklist

### Logos
- [ ] Main logo (SVG/PNG)
- [ ] White logo variant
- [ ] Favicon (32x32, 16x16)

### Photography
- [ ] Homepage hero images (3-5)
- [ ] English Residences interior (10+)
- [ ] English Residences exterior (5+)
- [ ] English Hotel photos (10+)
- [ ] Pepper Club restaurant (5+)
- [ ] Midtown Plaza (5+)
- [ ] Arts District scenes (10+)
- [ ] First Friday events (5+)

### Videos
- [ ] Homepage hero video
- [ ] Property tour video
- [ ] Neighborhood overview video

### Documents
- [ ] Floor plans (all unit types)
- [ ] Site map
- [ ] Amenity brochure
- [ ] Investment prospectus (if applicable)

### Marketing Materials
- [ ] Brand guidelines
- [ ] Color palette
- [ ] Typography specifications
- [ ] Logo usage rules

---

## 🎨 Using Next.js Image Component

Always use Next.js Image component for optimal performance:

```typescript
import Image from 'next/image'

// For static images
<Image
  src="/images/hero/main.jpg"
  alt="Midtown Las Vegas Condos"
  width={1920}
  height={1080}
  priority // Use for above-the-fold images
  className="object-cover"
/>

// For responsive images
<div className="relative aspect-video">
  <Image
    src="/images/property.jpg"
    alt="Property view"
    fill
    className="object-cover rounded-lg"
  />
</div>
```

---

## 🔗 Social Media Icons

Update social links in:
- `app/components/header.tsx` (lines 82-130)
- `app/components/footer.tsx` (lines 103-137)

Replace placeholder URLs with actual social media accounts:
```typescript
<a href="https://instagram.com/YOUR_ACCOUNT" />
<a href="https://facebook.com/YOUR_PAGE" />
<a href="https://tiktok.com/@YOUR_ACCOUNT" />
```

---

## 📧 Contact Your Midtown Vegas Partner

To obtain these assets, contact:
- **Marketing Department** for logos, photos, videos
- **Sales Department** for floor plans, property docs
- **Brand Manager** for usage guidelines

Mention you're building the midtownlasvegascondos.com website and need official assets.

---

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format when possible
2. **Lazy Loading**: Next.js Image handles this automatically
3. **CDN**: Vercel automatically serves images from CDN
4. **Responsive Images**: Use fill prop for responsive containers
5. **Priority Loading**: Use priority prop for above-fold images

---

## 🆘 Need Help?

If you need assistance integrating assets:
1. Place files in `/public/` directories as specified
2. Update the image paths in components
3. Run `pnpm dev` to test locally
4. Commit and push to deploy

The site structure is ready—just add your assets!

