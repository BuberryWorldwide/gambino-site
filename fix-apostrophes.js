const fs = require('fs');
const path = require('path');

// Files that need fixing based on your error output
const filesToFix = [
  './src/app/compliance/page.js',
  './src/app/dao-governance/page.js',
  './src/app/legal/disclosures/page.js'
];

function fixApostrophesInFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split into lines for processing
    const lines = content.split('\n');
    let modified = false;
    
    // Process each line
    const fixedLines = lines.map((line, index) => {
      // Skip lines that are comments or contain JavaScript code patterns
      if (line.trim().startsWith('//') || 
          line.trim().startsWith('/*') || 
          line.includes('import ') ||
          line.includes('export ') ||
          line.includes('const ') ||
          line.includes('let ') ||
          line.includes('var ') ||
          line.includes('function ') ||
          line.includes('=>')) {
        return line;
      }
      
      // Look for unescaped apostrophes in JSX content
      // This regex finds apostrophes that are not already escaped and are within JSX text
      const apostropheRegex = /(?<!&[a-z]*|&#?\w*)'(?![a-z]*;)/g;
      
      if (apostropheRegex.test(line)) {
        modified = true;
        console.log(`  Line ${index + 1}: Found unescaped apostrophe`);
        return line.replace(apostropheRegex, '&apos;');
      }
      
      return line;
    });
    
    if (modified) {
      // Write the fixed content back to the file
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`  ✅ Fixed apostrophes in ${filePath}`);
    } else {
      console.log(`  ℹ️  No unescaped apostrophes found in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Alternative function that's more conservative - only fixes apostrophes in obvious JSX text
function fixApostrophesConservative(filePath) {
  try {
    console.log(`Processing (conservative): ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // More targeted replacement - only within JSX text content
    // This looks for apostrophes between > and < (JSX text content)
    const jsxTextRegex = />(.*?)'(.*?)</g;
    
    const fixedContent = content.replace(jsxTextRegex, (match, before, after) => {
      if (before.includes('&apos;') || after.includes('&apos;')) {
        return match; // Already escaped
      }
      modified = true;
      return `>${before}&apos;${after}<`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`  ✅ Fixed apostrophes in ${filePath}`);
    } else {
      console.log(`  ℹ️  No unescaped apostrophes found in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🔧 Starting apostrophe fix script...\n');

// Check if files exist
const existingFiles = filesToFix.filter(file => fs.existsSync(file));
const missingFiles = filesToFix.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.log('⚠️  Warning: These files were not found:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
  console.log();
}

if (existingFiles.length === 0) {
  console.log('❌ No files found to process. Please check your file paths.');
  process.exit(1);
}

// Ask user which method to use
const args = process.argv.slice(2);
const useConservative = args.includes('--conservative');

console.log(`Using ${useConservative ? 'conservative' : 'standard'} method...\n`);

// Process each file
existingFiles.forEach(file => {
  if (useConservative) {
    fixApostrophesConservative(file);
  } else {
    fixApostrophesInFile(file);
  }
});

console.log('\n✨ Script completed!');
console.log('💡 Tip: Run your Next.js build again to see if the errors are resolved.');
console.log('💡 If you still have issues, try running with: node fix-apostrophes.js --conservative');
