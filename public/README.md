# Public Assets Folder

## 📁 Directory Structure

```
public/
├── images/
│   ├── logos/          # Logo files (SVG/PNG)
│   ├── hero/           # Homepage hero images
│   ├── properties/     # Property photos
│   └── gallery/        # Arts District gallery
├── videos/             # Video files
├── plans/              # Floor plans (PDF/JPG)
├── file.svg           # Existing file icon
├── globe.svg          # Existing globe icon
└── ...
```

## 🎨 How to Add Assets

### 1. Logos
Place logo files in `/images/logos/`:
- `midtown-logo.svg` - Main logo
- `midtown-logo-white.svg` - White version for dark backgrounds  
- `favicon.ico` - Browser favicon

### 2. Property Photos
Organize by property in `/images/properties/`:
- `english-residences/` - Condo photos
- `english-hotel/` - Hotel photos
- `midtown-plaza/` - Plaza photos
- `pepper-club/` - Restaurant photos

### 3. Videos
Place video files in `/videos/`:
- `hero-background.mp4` - Homepage background video
- `property-tour.mp4` - Property walkthrough

### 4. Floor Plans
Place in `/plans/`:
- `studio-floorplan.pdf` & `.jpg`
- `1bed-floorplan.pdf` & `.jpg`
- `2bed-floorplan.pdf` & `.jpg`

## 📝 File Naming Conventions

- Use lowercase
- Use hyphens for spaces: `my-image.jpg`
- Be descriptive: `english-residences-living-room.jpg`
- Optimize before uploading (under 200KB for web)

## ✅ Getting Official Assets

Since you work with Midtown Vegas, contact your partner representative to obtain:

1. **Official Logo Package** - Vector files and usage guidelines
2. **Professional Photography** - High-resolution property photos
3. **Marketing Videos** - Branded video content
4. **Floor Plans** - Architectural drawings and documents
5. **Brand Guidelines** - Colors, fonts, and style rules

## 🚀 After Adding Assets

1. Place files in appropriate folders
2. Update components to use real paths
3. Test locally: `pnpm dev`
4. Commit changes: `git add public && git commit -m "Add property assets"`
5. Push to production: `git push`

Your assets will automatically be optimized and served from Vercel's CDN!

