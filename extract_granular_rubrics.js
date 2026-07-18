const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ROOT_DIR = "VACS Full Project Folder";
const OUTPUT_FILE = "src/data/granular_rubrics.json";

let allRubrics = {};

function processDirectory(dirPath, currentWeek) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      let week = currentWeek;
      if (file.startsWith('Week ')) {
        week = file.split(' ')[1]; // "1", "2", "6"
      }
      processDirectory(fullPath, week);
    } else if (file.endsWith('.docx') && !file.startsWith('~')) {
      extractTables(fullPath, currentWeek, file.replace('.docx', ''));
    }
  }
}

function extractTables(filePath, week, baseName) {
  try {
    const zip = new AdmZip(filePath);
    const xmlEntry = zip.getEntry('word/document.xml');
    if (!xmlEntry) return;

    const xml = xmlEntry.getData().toString('utf8');
    const rows = xml.match(/<w:tr[\s\S]*?<\/w:tr>/g);
    if (!rows) return;

    let items = [];
    for (const row of rows) {
      const cells = row.match(/<w:tc[\s\S]*?<\/w:tc>/g);
      if (!cells) continue;

      const cellTexts = cells.map(cell => {
        const texts = cell.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
        if (!texts) return '';
        return texts.map(t => t.replace(/<[^>]+>/g, '')).join('').trim();
      });

      if (cellTexts.length >= 6 && /^\d[A-Z]\.\d+$/.test(cellTexts[0])) {
        items.push({
          id: cellTexts[0],
          description: cellTexts[1],
          points: parseFloat(cellTexts[2]) || 0,
          fullCredit: cellTexts[3],
          halfCredit: cellTexts[4],
          zeroCredit: cellTexts[5]
        });
      }
    }

    if (items.length > 0) {
      const key = `Week${week}_${baseName.replace(/\s+/g, '_')}`;
      allRubrics[key] = items;
      console.log(`Extracted ${items.length} inputs for ${key}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

console.log("Starting extraction...");
processDirectory(ROOT_DIR, "Unknown");

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allRubrics, null, 2));
console.log(`Successfully wrote ${Object.keys(allRubrics).length} rubrics to ${OUTPUT_FILE}`);
