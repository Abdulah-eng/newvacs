const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function extractDocx(filePath) {
  try {
    const zip = new AdmZip(filePath);
    const xml = zip.readAsText('word/document.xml');
    
    // A very simple regex to extract text from <w:t> tags
    const matches = xml.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
    if (!matches) {
      console.log('No text found');
      return;
    }
    
    const text = matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
    fs.writeFileSync('prd_extracted_text.txt', text, 'utf8');
    console.log('Extraction complete. Saved to prd_extracted_text.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

const filePath = process.argv[2];
if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}
extractDocx(filePath);
