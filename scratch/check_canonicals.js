const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileList);
    } else if (name.endsWith('page.tsx')) {
      fileList.push(name);
    }
  }
  return fileList;
}

const appDir = path.resolve('app');
const files = getFiles(appDir);

const mismatches = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const canonicalMatch = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/i);
  
  if (canonicalMatch) {
    const canonicalVal = canonicalMatch[1].trim();
    const relPath = path.relative(appDir, file);
    const expectedRoute = relPath
      .replace(/\\/g, '/')
      .replace(/\/page\.tsx$/, '')
      .replace(/^page\.tsx$/, '');
      
    const expectedCanonical = `https://spacehr.net/${expectedRoute}`.replace(/\/+$/, '');
    const cleanCanonical = canonicalVal.replace(/\/+$/, '');
    
    if (cleanCanonical !== expectedCanonical) {
      mismatches.push({
        file: relPath,
        found: canonicalVal,
        expected: expectedCanonical
      });
    }
  }
}

console.log(`Checked ${files.length} files.`);
if (mismatches.length > 0) {
  console.log("\n--- CANONICAL MISMATCHES ---");
  mismatches.forEach(m => {
    console.log(`File: ${m.file}`);
    console.log(`  Found:    ${m.found}`);
    console.log(`  Expected: ${m.expected}\n`);
  });
} else {
  console.log("All canonical tags are correct!");
}
