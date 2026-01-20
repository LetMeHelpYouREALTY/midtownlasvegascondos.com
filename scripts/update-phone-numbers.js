// Script to update phone numbers from 500-1955 to 500-1980
// Run with: node scripts/update-phone-numbers.js

const fs = require('fs');
const path = require('path');

const phonePatterns = [
  { old: '500-1955', new: '500-1980' },
  { old: '5001955', new: '5001980' },
  { old: '7025001955', new: '7025001980' },
  { old: '702-500-1955', new: '702-500-1980' },
];

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  phonePatterns.forEach(({ old, new: newVal }) => {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old, 'g'), newVal);
      updated = true;
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.git')) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const appDir = path.join(__dirname, '../app');
const componentDir = path.join(__dirname, '../components');
const files = [...walkDir(appDir), ...walkDir(componentDir)];

let updatedCount = 0;
files.forEach(file => {
  if (updateFile(file)) {
    updatedCount++;
  }
});

console.log(`\nUpdated ${updatedCount} files.`);
