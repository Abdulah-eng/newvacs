const AdmZip = require('adm-zip');

function extractDocxTables(filePath) {
  try {
    const zip = new AdmZip(filePath);
    const xml = zip.readAsText('word/document.xml');
    
    // Find all table rows
    const rows = xml.match(/<w:tr[\s\S]*?<\/w:tr>/g);
    if (!rows) return;

    let items = [];
    for (const row of rows) {
      // Find all cells in this row
      const cells = row.match(/<w:tc[\s\S]*?<\/w:tc>/g);
      if (!cells) continue;

      const cellTexts = cells.map(cell => {
        // Find all text elements in the cell
        const texts = cell.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
        if (!texts) return '';
        return texts.map(t => t.replace(/<[^>]+>/g, '')).join('').trim();
      });

      // Filter rows that look like a rubric input
      // Typically: [ "4B.1", "Continue lisinopril...", "0.50", "States...", "States...", "Omits" ]
      if (cellTexts.length >= 6 && /^\d[A-Z]\.\d+$/.test(cellTexts[0])) {
        items.push({
          id: cellTexts[0],
          description: cellTexts[1],
          points: parseFloat(cellTexts[2]),
          fullCredit: cellTexts[3],
          halfCredit: cellTexts[4],
          zeroCredit: cellTexts[5]
        });
      }
    }

    console.log(`Found ${items.length} items`);
    if (items.length > 0) {
      console.log(items.slice(0, 3));
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

const file = process.argv[2] || "VACS Full Project Folder/Week 1 HTN + T2DM/Patient B/Patient B Tuesday.docx";
extractDocxTables(file);
