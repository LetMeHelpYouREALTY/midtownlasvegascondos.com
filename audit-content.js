const fs = require('fs');
const path = require('path');

// Pages to audit
const pages = [
  { path: 'app/page.tsx', name: 'Homepage' },
  { path: 'app/search/page.tsx', name: 'Search' },
  { path: 'app/contact/page.tsx', name: 'Contact' },
  { path: 'app/about/page.tsx', name: 'About' },
  { path: 'app/faq/page.tsx', name: 'FAQ' },
  { path: 'app/events/page.tsx', name: 'Events' },
  { path: 'app/news/page.tsx', name: 'News' },
  { path: 'app/neighborhood/english-residences/page.tsx', name: 'English Residences' },
  { path: 'app/neighborhood/midtown-plaza/page.tsx', name: 'Midtown Plaza' },
  { path: 'app/neighborhood/english-hotel/page.tsx', name: 'English Hotel' },
  { path: 'app/neighborhood/pepper-club/page.tsx', name: 'Pepper Club' },
  { path: 'app/neighborhood/arts-district/page.tsx', name: 'Arts District' },
  { path: 'app/neighborhood/first-fridays/page.tsx', name: 'First Fridays' },
  { path: 'app/neighborhood/ev-program/page.tsx', name: 'EV Program' },
  { path: 'app/neighborhood/run-club/page.tsx', name: 'Run Club' },
];

console.log('='.repeat(80));
console.log('CONTENT AUDIT REPORT');
console.log('='.repeat(80));
console.log('');

const results = [];

pages.forEach((page) => {
  const filePath = path.join(process.cwd(), page.path);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${page.name}: File not found`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Count headings
  const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
  const h2Count = (content.match(/<h2[^>]*>/g) || []).length;
  const h3Count = (content.match(/<h3[^>]*>/g) || []).length;
  const h4Count = (content.match(/<h4[^>]*>/g) || []).length;
  const totalSubHeadings = h2Count + h3Count + h4Count;

  // Extract text content (rough estimate - excludes imports, JSX attributes, etc.)
  // Remove imports, exports, comments
  let textContent = content
    .replace(/import\s+.*from.*;/g, '')
    .replace(/export\s+.*;/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '')
    .replace(/<\/?[^>]+(>|$)/g, ' ') // Remove HTML tags
    .replace(/className=["'][^"']*["']/g, '')
    .replace(/href=["'][^"']*["']/g, '')
    .replace(/\{[^}]*\}/g, ' ') // Remove JSX expressions
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words (rough estimate)
  const wordCount = textContent.split(/\s+/).filter((word) => word.length > 0).length;

  const h1Status = h1Count === 1 ? '✅' : `❌ (${h1Count})`;
  const h2h3Status = totalSubHeadings >= 3 ? '✅' : `❌ (${totalSubHeadings})`;
  const wordStatus = wordCount >= 500 ? '✅' : `❌ (${wordCount})`;

  const result = {
    name: page.name,
    h1: { count: h1Count, status: h1Count === 1, emoji: h1Status },
    h2: { count: h2Count },
    h3: { count: h3Count },
    h4: { count: h4Count },
    totalSubHeadings: { count: totalSubHeadings, status: totalSubHeadings >= 3, emoji: h2h3Status },
    words: { count: wordCount, status: wordCount >= 500, emoji: wordStatus },
    allPassed: h1Count === 1 && totalSubHeadings >= 3 && wordCount >= 500,
  };

  results.push(result);

  console.log(`${page.name}`);
  console.log(`${'─'.repeat(page.name.length)}`);
  console.log(`  H1 Tags: ${h1Status} ${h1Count} (should be 1)`);
  console.log(`  H2 Tags: ${h2Count}`);
  console.log(`  H3 Tags: ${h3Count}`);
  console.log(`  H4 Tags: ${h4Count}`);
  console.log(`  H2+H3+H4: ${h2h3Status} ${totalSubHeadings} (should be >= 3)`);
  console.log(`  Word Count: ${wordStatus} ~${wordCount} words (should be >= 500)`);
  console.log('');
});

console.log('='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log('');

const passed = results.filter((r) => r.allPassed).length;
const failed = results.length - passed;

console.log(`Total Pages: ${results.length}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log('');

if (failed > 0) {
  console.log('Pages needing fixes:');
  results
    .filter((r) => !r.allPassed)
    .forEach((r) => {
      const issues = [];
      if (!r.h1.status) issues.push(`H1: ${r.h1.count} (need 1)`);
      if (!r.totalSubHeadings.status)
        issues.push(`H2/H3: ${r.totalSubHeadings.count} (need >= 3)`);
      if (!r.words.status) issues.push(`Words: ${r.words.count} (need >= 500)`);
      console.log(`  - ${r.name}: ${issues.join(', ')}`);
    });
}

console.log('');
console.log('='.repeat(80));

