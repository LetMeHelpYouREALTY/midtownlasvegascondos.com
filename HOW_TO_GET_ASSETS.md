# How to Get Assets from Midtown Vegas Partnership

## 🎯 You Need These Assets

Since you work with Midtown Vegas, here's your action plan to get the logos, photos, videos, and plans you need.

---

## 📞 Step 1: Contact Your Midtown Vegas Partner

### Who to Contact:
Call **(725) 705-7975** and ask for:
- **Marketing Department** - For logos, photos, videos
- **Sales/Leasing Team** - For floor plans and property specs
- **Brand Manager** - For usage guidelines

### What to Say:
> "Hi, I'm working on midtownlasvegascondos.com and need official assets. Can you provide:
> - Logo files (SVG/PNG)
> - Professional property photography
> - Marketing videos if available
> - English Residences floor plans
> - Brand guidelines"

### Alternative Contact:
- Visit in person: **921 S Main St, Las Vegas, NV 89101**
- Check if they have a marketing/press kit available
- Ask if there's a partner portal or asset library

---

## 📁 Step 2: What to Request Specifically

### Logos & Branding
```
✓ Midtown logo (SVG format preferred)
✓ White/inverse logo version
✓ Favicon (32x32px, 16x16px)
✓ Brand colors (hex codes)
✓ Font specifications
✓ Logo usage guidelines
```

### Photography
```
✓ English Residences interior photos (10-15)
✓ English Residences exterior photos (5)
✓ The English Hotel photos (10)
✓ The Pepper Club restaurant photos (5-10)
✓ Midtown Plaza photos (5)
✓ Arts District street scenes (10)
✓ First Friday event photos (5)
```

### Videos
```
✓ Homepage hero/background video
✓ Property tour video (if available)
✓ Neighborhood overview video (if available)
```

### Floor Plans & Documents
```
✓ Studio floor plan (PDF & JPG)
✓ 1-bedroom floor plan (PDF & JPG)
✓ 2-bedroom floor plan (PDF & JPG)
✓ Penthouse floor plan (PDF & JPG)
✓ Building amenities brochure
✓ Site map
✓ Investment prospectus (if applicable)
```

---

## 💻 Step 3: Download Assets from Their Website

### From midtownvegas.com:

#### Logo
1. Right-click on logo in header
2. "Inspect Element"
3. Find `<img>` or `<svg>` tag
4. Copy image URL
5. Visit URL and save file

**Better**: Ask them directly for high-res version

#### Images
Check these pages for photos:
- https://midtownvegas.com/ (homepage hero)
- Property-specific pages
- Gallery sections

**Note**: Don't just save web-optimized versions. Ask for original high-resolution files.

---

## 📥 Step 4: Organize Assets on Your Computer

Create this folder structure:
```
Desktop/Midtown_Assets/
├── logos/
│   ├── midtown-logo.svg
│   ├── midtown-logo-white.svg
│   └── favicon.ico
├── photos/
│   ├── english-residences/
│   ├── english-hotel/
│   ├── pepper-club/
│   └── arts-district/
├── videos/
│   └── hero-background.mp4
└── plans/
    ├── studio-floorplan.pdf
    ├── 1bed-floorplan.pdf
    └── 2bed-floorplan.pdf
```

---

## 🚀 Step 5: Add to Your Website

### Method 1: Manual Upload (Easy)

1. **Copy files** from your organized folder to project:
   ```
   Desktop/Midtown_Assets/logos/ → C:\Users\geneb\midtownlasvegascondos.com\public\images\logos\
   ```

2. **Update Logo** in `app/components/header.tsx`:
   ```typescript
   // Line 35-37, replace with:
   <Link href="/" className="flex items-center">
     <Image 
       src="/images/logos/midtown-logo.svg" 
       alt="Midtown" 
       width={200} 
       height={50} 
     />
   </Link>
   ```

3. **Test locally**:
   ```bash
   pnpm dev
   ```
   Open http://localhost:3000 and check if logo appears

4. **Commit and deploy**:
   ```bash
   git add public
   git commit -m "Add official Midtown logos and assets"
   git push
   ```

### Method 2: Bulk Upload

1. Open VS Code in your project
2. Drag folders from Desktop into appropriate `public/` directories
3. VS Code will copy them automatically
4. Commit and push

---

## 🎨 Step 6: Update Components with Real Images

### Homepage Hero
Edit `app/page.tsx` around line 10:

Before:
```typescript
<div className="absolute inset-0 bg-black/40" />
```

After:
```typescript
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
```

### English Residences Gallery
Edit `app/neighborhood/english-residences/gallery/page.tsx`:

Replace empty `src:` values with:
```typescript
const propertyImages = [
  {
    src: '/images/properties/english-residences/living-room-1.jpg',
    alt: 'Modern living room with floor-to-ceiling windows',
    caption: 'Spacious living areas with stunning city views',
  },
  // ... add more
]
```

---

## ✅ Quick Win Checklist

### Day 1: Logo & Branding
- [ ] Contact Midtown Vegas at (725) 705-7975
- [ ] Request logo package
- [ ] Add logo to `/public/images/logos/`
- [ ] Update header component
- [ ] Test and deploy

### Day 2: Photography
- [ ] Get property photos from partner
- [ ] Optimize images (use tinypng.com)
- [ ] Add to `/public/images/properties/`
- [ ] Update gallery components
- [ ] Test and deploy

### Day 3: Floor Plans
- [ ] Get floor plans from sales team
- [ ] Add PDFs and JPGs to `/public/plans/`
- [ ] Update floor plan viewer
- [ ] Test download functionality
- [ ] Deploy

### Day 4: Videos
- [ ] Get video files
- [ ] Compress if needed (under 10MB)
- [ ] Add to `/public/videos/`
- [ ] Update homepage hero
- [ ] Deploy

---

## 🆘 Troubleshooting

### "I can't reach anyone at Midtown Vegas"
- Try visiting in person during business hours (M-F, 9am-5pm)
- Look for email contacts on midtownvegas.com
- Check if there's a press/media section on their website

### "They won't give me the assets"
- Explain you're building a partner site for real estate listings
- Show them your existing site (midtownlasvegascondos.com)
- Ask what approval process they need

### "The files are too large"
- Use tinypng.com to compress images
- Use handbrake.fr to compress videos
- Ask for web-optimized versions

### "I don't know how to add them to the site"
- Follow Step 5 above exactly
- Or send me the files and I'll help integrate them
- The infrastructure is ready - just drop files in `/public/`

---

## 📞 Need Help?

The website structure is 100% ready for your assets. Just:
1. Get the files from Midtown Vegas
2. Copy them into the `/public/` folders
3. Update the image paths in components
4. Push to deploy

Everything is set up - you just need the actual files!

**Your site is live and working perfectly - adding professional assets will make it shine! 🌟**

