# How to Download Images from Midtown Vegas

## Method 1: Browser Console Script (Easiest)

### Step 1: Open midtownvegas.com
1. Go to https://midtownvegas.com in Chrome/Edge
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Click the "Console" tab

### Step 2: Run the Extraction Script
Copy and paste this into the console:

```javascript
// Extract all Midtown Vegas images
const allImages = Array.from(document.querySelectorAll('img'));
const contentImages = allImages.filter(img => {
  const src = img.src || img.dataset.src || '';
  return src.includes('midtownvegas.com/wp-content/uploads/');
});

console.log('Found', contentImages.length, 'images:');
contentImages.forEach((img, i) => {
  let url = img.src;
  // Remove ShortPixel wrapper
  if (url.includes('shortpixel.ai')) {
    const match = url.match(/https:\/\/midtownvegas\.com\/[^\s'"]+/);
    if (match) url = match[0];
  }
  console.log(`${i+1}. ${url}`);
});
```

### Step 3: Download Images
For each URL printed:
1. Copy the URL
2. Open in new tab
3. Right-click → "Save image as..."
4. Save to: `C:\Users\geneb\midtownlasvegascondos.com\public\images\`

---

## Method 2: Direct URLs (From Your Console)

Based on your console output, the images are at ShortPixel URLs. Here's how to get the originals:

### Example ShortPixel URL:
```
https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1000,h_568/https://midtownvegas.com/wp-content/uploads/2024/01/image.jpg
```

### Extract Original:
The part after the last `/` before `https://midtownvegas.com` is the actual image:
```
https://midtownvegas.com/wp-content/uploads/2024/01/image.jpg
```

---

## Method 3: Automated Download (PowerShell)

### Step 1: Create image list file
Create `images.txt` with URLs (one per line):
```
https://midtownvegas.com/wp-content/uploads/2024/01/hero-image.jpg
https://midtownvegas.com/wp-content/uploads/2024/01/property-1.jpg
```

### Step 2: Run PowerShell script
```powershell
# Navigate to project
cd C:\Users\geneb\midtownlasvegascondos.com\public\images

# Download each image
Get-Content ..\..\scripts\images.txt | ForEach-Object {
    $url = $_
    $filename = Split-Path $url -Leaf
    Invoke-WebRequest -Uri $url -OutFile "hero\$filename"
    Write-Host "Downloaded: $filename"
}
```

---

## Method 4: Browser Extension

### Option A: Image Downloader Extension
1. Install "Download All Images" extension for Chrome
2. Go to midtownvegas.com
3. Click extension icon
4. Filter by size (>100KB for quality images)
5. Batch download

### Option B: Save Complete Page
1. Go to midtownvegas.com
2. Ctrl+S → "Save As" → "Webpage, Complete"
3. This saves all images to a folder
4. Navigate to the saved folder
5. Copy images you need

---

## What to Download

### Priority Images:
1. **Homepage hero** - Large banner image
2. **English Residences** - Interior/exterior photos
3. **Midtown Plaza** - Plaza photos
4. **The Pepper Club** - Restaurant photos
5. **Arts District** - Street scenes, First Friday

### Where to Save:
```
public/
├── images/
│   ├── hero/              ← Homepage backgrounds
│   ├── logos/             ← Midtown logo
│   ├── properties/
│   │   ├── english-residences/  ← Condo photos
│   │   ├── english-hotel/       ← Hotel photos
│   │   └── pepper-club/         ← Restaurant photos
│   └── gallery/
│       └── arts-district/       ← Arts District photos
```

---

## After Downloading

### 1. Optimize Images
- Use https://tinypng.com to compress
- Target: Under 200KB per image
- Convert to WebP if possible

### 2. Update Your Site
Edit `app/page.tsx` to add the first hero image:
```typescript
<Image
  src="/images/hero/main-building.jpg"
  alt="Midtown Las Vegas"
  fill
  className="object-cover"
  priority
/>
```

### 3. Commit and Deploy
```bash
git add public/images
git commit -m "Add Midtown Vegas property images"
git push
```

---

## Quick Test

To verify you have the right images:
1. Download one image
2. Place in `public/images/test.jpg`
3. Visit your local site: http://localhost:3000
4. Open console and type:
```javascript
let img = new Image();
img.src = '/images/test.jpg';
img.onload = () => console.log('✅ Image works!', img.width, 'x', img.height);
img.onerror = () => console.log('❌ Image failed to load');
```

---

## Contact Midtown Vegas Directly

**Best option:** Since you work with them, call and ask for the marketing asset package:

**Phone:** (725) 705-7975  
**Address:** 921 S Main St, Las Vegas, NV 89101

Ask for:
- "Marketing asset package for partner websites"
- High-resolution originals (not web-optimized)
- Official logos and brand guidelines
- Floor plans and property documents

They'll likely have a Dropbox/Google Drive link with everything ready!

