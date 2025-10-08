// Script to extract and download images from Midtown Vegas site
// Run this in your browser console on midtownvegas.com

console.log('🔍 Extracting Midtown Vegas images...');

// Get all images on the page
const allImages = Array.from(document.querySelectorAll('img'));

// Filter for actual content images (not cookies, icons, etc.)
const contentImages = allImages.filter(img => {
  const src = img.src || img.dataset.src || '';
  return src.includes('midtownvegas.com/wp-content/uploads/') && 
         !src.includes('cookie') &&
         img.width > 100; // Filter out small icons
});

console.log(`✅ Found ${contentImages.length} content images`);

// Extract clean URLs
const imageUrls = contentImages.map(img => {
  let url = img.src || img.dataset.src || '';
  
  // If it's a ShortPixel URL, extract the original
  if (url.includes('shortpixel.ai')) {
    const match = url.match(/https:\/\/midtownvegas\.com\/[^\s'"]+/);
    if (match) {
      url = match[0];
    }
  }
  
  return {
    url: url,
    alt: img.alt || '',
    width: img.naturalWidth,
    height: img.naturalHeight
  };
});

// Display results
console.log('\n📋 Image URLs:');
imageUrls.forEach((img, i) => {
  console.log(`\n${i + 1}. ${img.alt || 'Image'}`);
  console.log(`   URL: ${img.url}`);
  console.log(`   Size: ${img.width}x${img.height}`);
});

// Create downloadable JSON
const dataStr = JSON.stringify(imageUrls, null, 2);
const dataBlob = new Blob([dataStr], { type: 'application/json' });
const url = URL.createObjectURL(dataBlob);
const link = document.createElement('a');
link.href = url;
link.download = 'midtown-images.json';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

console.log('\n✅ Downloaded midtown-images.json with all image URLs');
console.log('📝 Now you can use these URLs to download the images');

// Also copy to clipboard if possible
if (navigator.clipboard) {
  navigator.clipboard.writeText(dataStr).then(() => {
    console.log('📋 Image data copied to clipboard!');
  });
}

return imageUrls;

