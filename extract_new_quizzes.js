const fs = require('fs');
const mammoth = require('mammoth');

async function extract() {
  const weeks = [
    { file: 'quiz/Week 1 NAPLEX Quiz Questions.docx', out: 'src/data/quiz.js', num: 1 },
    { file: 'quiz/Week 2 NAPLEX Quiz Questions.docx', out: 'src/data/quiz2.js', num: 2 },
    { file: 'quiz/Week 3 NAPLEX Quiz Questions.docx', out: 'src/data/quiz3.js', num: 3 },
    { file: 'quiz/Week 4 NAPLEX Quiz Questions.docx', out: 'src/data/quiz4.js', num: 4 },
    { file: 'quiz/Week 5 NAPLEX Quiz Questions.docx', out: 'src/data/quiz5.js', num: 5 },
  ];

  for (let w of weeks) {
    if (!fs.existsSync(w.file)) {
      console.log(`Missing ${w.file}`);
      continue;
    }
    const result = await mammoth.extractRawText({ path: w.file });
    const text = result.value;

    const items = [];
    const blocks = text.split(/Question ID:/i).slice(1);
    
    for (let block of blocks) {
      block = 'Question ID:' + block;
      
      const q = {};
      
      const idMatch = block.match(/Question ID:\s*(.+)/i);
      q.id = idMatch ? idMatch[1].trim() : '';

      const diseaseMatch = block.match(/Disease State:\s*(.+)/i);
      q.disease = diseaseMatch ? diseaseMatch[1].trim() : '';

      const topicMatch = block.match(/Topic:\s*(.+)/i);
      q.concept_tag = topicMatch ? topicMatch[1].trim().toLowerCase().replace(/\s+/g, '_') : '';

      const typeMatch = block.match(/Question Type:\s*(.+)/i);
      let typeRaw = typeMatch ? typeMatch[1].trim().toLowerCase() : '';
      if (typeRaw.includes('single')) q.type = 'sba';
      else if (typeRaw.includes('select-all')) q.type = 'sata';
      else if (typeRaw.includes('k-type') || typeRaw.includes('combination')) q.type = 'ktype';
      else q.type = 'sba';

      const stemMatch = block.match(/Question Stem:\s*([\s\S]*?)Answer Choices:/i);
      q.stem = stemMatch ? stemMatch[1].trim() : '';

      const optionsMatch = block.match(/Answer Choices:\s*([\s\S]*?)Correct Answer:/i);
      const optionsRaw = optionsMatch ? optionsMatch[1].trim() : '';
      
      q.options = [];
      const optionLines = optionsRaw.split(/\n+/);
      for (let line of optionLines) {
        line = line.trim();
        if (/^[A-Z][\.\)]/.test(line)) {
          const key = line.charAt(0).toLowerCase();
          const text = line.substring(2).trim();
          q.options.push({ key, text });
        }
      }

      const correctMatch = block.match(/Correct Answer:\s*([\s\S]*?)Rationale:/i);
      const correctRaw = correctMatch ? correctMatch[1].trim() : '';
      
      q.correct = [];
      const correctParts = correctRaw.split(/[,&\n]+/);
      for (let p of correctParts) {
        const m = p.trim().match(/^[A-Z]/);
        if (m) q.correct.push(m[0].toLowerCase());
      }

      // If it's K-type, sometimes the correct answer is just "B", which corresponds to "A and C".
      // We will just keep it as the single letter of the option that is correct.
      // But wait! If it's a SATA, correct answer could be "A, B, C". 
      // The logic `correctRaw.split(/[,&\n]+/)` handles multiple letters.

      const rationaleMatch = block.match(/Rationale:\s*([\s\S]*?)(Why the Incorrect Options Are Wrong:|Source Support:|QA Check:|$)/i);
      let rationaleRaw = rationaleMatch ? rationaleMatch[1].trim() : '';
      
      // PREPEND correct answer explicitly
      let explicitCorrect = correctRaw.replace(/\n+/g, ' | ').trim();
      q.rationale = `Correct Answer: ${explicitCorrect}\n\n${rationaleRaw}`;

      if (q.id && q.stem && q.options.length > 0) {
        items.push(q);
      }
    }

    console.log(`Parsed ${items.length} items from ${w.file}`);
    
    // Write out JS
    let outContent = `// Week ${w.num} Monday quiz\n\n`;
    outContent += `export const PASS_THRESHOLD = 90;\n\n`;
    outContent += `export const QUIZ_ITEMS = ${JSON.stringify(items, null, 2)};\n`;

    fs.writeFileSync(w.out, outContent);
    console.log(`Wrote ${w.out}`);
  }
}

extract().catch(console.error);
