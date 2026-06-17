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

const results = [];
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Robust matching for title and description inside metadata export
  // Matches "title: <content>" or 'title: <content>' or `title: <content>`
  const titleMatch = content.match(/title:\s*(?:"([^"]+)"|'([^']+)'|`([^`]+)`)/i);
  const descMatch = content.match(/description:\s*(?:"([^"]+)"|'([^']+)'|`([^`]+)`)/i);
  
  let title = 'NONE';
  if (titleMatch) {
    title = (titleMatch[1] || titleMatch[2] || titleMatch[3] || '').trim();
  }
  
  let desc = 'NONE';
  if (descMatch) {
    desc = (descMatch[1] || descMatch[2] || descMatch[3] || '').trim();
  }
  
  results.push({
    file: path.relative(appDir, file),
    title,
    desc
  });
}

// Print results
results.forEach(r => {
  console.log(`File: ${r.file}`);
  console.log(`  Title: ${r.title}`);
  console.log(`  Desc:  ${r.desc}\n`);
});

// Check for duplicates
const descCounts = {};
results.forEach(r => {
  if (r.desc !== 'NONE') {
    descCounts[r.desc] = descCounts[r.desc] || [];
    descCounts[r.desc].push(r.file);
  }
});

console.log("--- Duplicate Meta Descriptions Check ---");
let duplicatesFound = false;
for (const [desc, files] of Object.entries(descCounts)) {
  if (files.length > 1) {
    console.log(`Duplicate description found (${files.length} pages): "${desc}"`);
    files.forEach(f => console.log(`  - ${f}`));
    duplicatesFound = true;
  }
}
if (!duplicatesFound) {
  console.log("No duplicate meta descriptions found!");
}
