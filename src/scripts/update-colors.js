/**
 * Nipix Technology Color Update Script
 * This script replaces all old color codes with new Nipix color palette
 */

const fs = require('fs');
const path = require('path');

// Color mapping: old → new
const COLOR_MAP = {
  '#0A66C2': '#004AAD',  // Old Primary Blue → New Primary Blue
  '#003C78': '#002D6E',  // Old Deep Blue → New Primary Blue Dark
  '#E8F3FF': '#E6F0FF',  // Old Light Blue Tint → New Primary Blue Light
};

/**
 * Replace colors in a file
 */
function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  Object.entries(COLOR_MAP).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor.replace('#', '\\#'), 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, newColor);
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
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
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
console.log('🎨 Starting Nipix Color System Update...\n');
console.log('Color Mappings:');
Object.entries(COLOR_MAP).forEach(([old, newColor]) => {
  console.log(`  ${old} → ${newColor}`);
});
console.log('\n');

const rootDir = process.cwd();
const updatedCount = processDirectory(rootDir);

console.log(`\n✅ Complete! Updated ${updatedCount} files.`);
