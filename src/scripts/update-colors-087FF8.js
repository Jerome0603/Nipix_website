/**
 * Nipix Technology Color Update Script - #087FF8 Palette
 * This script replaces all old color codes with new #087FF8-based palette
 */

const fs = require('fs');
const path = require('path');

// Comprehensive color mapping: old → new
const COLOR_MAP = {
  // Old Primary Blues → New Primary Blue
  '#0A66C2': '#087FF8',
  '#004AAD': '#087FF8',
  
  // Old Deep Blues → New Primary Blue Dark
  '#003C78': '#065FCC',
  '#002D6E': '#065FCC',
  '#003B78': '#065FCC',
  
  // Old Light Blues → New Primary Blue Light
  '#E8F3FF': '#D9EBFF',
  '#E6F0FF': '#D9EBFF',
  
  // Additional mappings for consistency
  '#0066FF': '#0CA2FF',  // Accent Blue
  '#78A9FF': '#72C7FF',  // Accent Blue Light
};

// Additional text replacements for border/hover states
const TEXT_REPLACEMENTS = [
  // Focus ring colors
  { from: 'focus:ring-[#0A66C2]', to: 'focus:ring-[#5BB0FF]' },
  { from: 'focus:ring-[#004AAD]', to: 'focus:ring-[#5BB0FF]' },
  { from: 'focus:border-[#0A66C2]', to: 'focus:border-[#087FF8]' },
  { from: 'focus:border-[#004AAD]', to: 'focus:border-[#087FF8]' },
  
  // Ring colors
  { from: 'ring-[#0A66C2]', to: 'ring-[#5BB0FF]' },
  { from: 'ring-[#004AAD]', to: 'ring-[#5BB0FF]' },
];

/**
 * Replace colors in a file
 */
function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace hex colors
  Object.entries(COLOR_MAP).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor.replace('#', '\\#'), 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, newColor);
      modified = true;
    }
  });
  
  // Replace text patterns
  TEXT_REPLACEMENTS.forEach(({ from, to }) => {
    if (content.includes(from)) {
      content = content.replaceAll(from, to);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
    return true;
  }
  
  return false;
}

/**
 * Process all files in a directory recursively
 */
function processDirectory(dir, extensions = ['.tsx', '.ts', '.css', '.jsx', '.js']) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    // Skip certain directories
    if (file === 'node_modules' || file === '.git' || file === 'scripts' || file === 'styles') {
      return;
    }
    
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.')) {
      updatedCount += processDirectory(filePath, extensions);
    } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
      if (replaceColorsInFile(filePath)) {
        updatedCount++;
      }
    }
  });
  
  return updatedCount;
}

// Run the script
console.log('🎨 Starting Nipix Color System Update to #087FF8 Palette...\n');
console.log('Color Mappings:');
Object.entries(COLOR_MAP).forEach(([old, newColor]) => {
  console.log(`  ${old} → ${newColor}`);
});
console.log('\n');

const rootDir = process.cwd();
const updatedCount = processDirectory(rootDir);

console.log(`\n✅ Complete! Updated ${updatedCount} files with new #087FF8 palette.`);
console.log('\n📋 Next Steps:');
console.log('  1. Review the changes');
console.log('  2. Test all pages for visual consistency');
console.log('  3. Verify button states, hover effects, and focus rings');
console.log('  4. Check mobile responsiveness\n');
