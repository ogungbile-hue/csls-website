const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace bg-white/ with bg-foreground/
  content = content.replace(/\bbg-white\//g, 'bg-foreground/');
  
  // Replace border-white/ with border-foreground/
  content = content.replace(/\bborder-white\//g, 'border-foreground/');
  
  // Replace text-white/ with text-foreground/
  content = content.replace(/\btext-white\//g, 'text-foreground/');
  
  // Replace text-white with text-foreground (if not followed by /)
  content = content.replace(/\btext-white(?!\/)/g, 'text-foreground');
  
  // Replace exact bg-black with bg-background (if not followed by /)
  content = content.replace(/\bbg-black(?!\/)/g, 'bg-background');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
console.log('Done!');
