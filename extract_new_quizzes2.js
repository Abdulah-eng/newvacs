const fs = require('fs');
const mammoth = require('mammoth');

async function extract() {
  const weeks = [
    { file: 'c:/projects/newvacs/quiz/Week 1 NAPLEX Quiz Questions.docx', out: 'c:/projects/newvacs/src/data/quiz.js', num: 1, prefix: 'W1' },
    { file: 'c:/projects/newvacs/quiz/Week 2 NAPLEX Quiz Questions.docx', out: 'c:/projects/newvacs/src/data/quiz2.js', num: 2, prefix: 'W2' },
    { file: 'c:/projects/newvacs/quiz/Week 3 NAPLEX Quiz Questions.docx', out: 'c:/projects/newvacs/src/data/quiz3.js', num: 3, prefix: 'W3' },
    { file: 'c:/projects/newvacs/quiz/Week 4 NAPLEX Quiz Questions.docx', out: 'c:/projects/newvacs/src/data/quiz4.js', num: 4, prefix: 'W4' },
    { file: 'c:/projects/newvacs/quiz/Week 5 NAPLEX Quiz Questions.docx', out: 'c:/projects/newvacs/src/data/quiz5.js', num: 5, prefix: 'W5' },
  ];

  for (let w of weeks) {
    if (!fs.existsSync(w.file)) {
      console.log(`Missing ${w.file}`);
      continue;
    }
    const result = await mammoth.extractRawText({ path: w.file });
    const text = result.value;

    const items = [];
    const blocks = text.split(/Disease State:/i).slice(1);
    
    blocks.forEach((blockRaw, index) => {
      let block = 'Disease State:' + blockRaw;
      
      const q = {};
      
      const idMatch = blockRaw.match(/Question ID:\s*([^\n]+)/i) || text.substring(0, text.indexOf(blockRaw)).match(/Question ID:\s*([^\n]+)$/i);
      q.id = idMatch ? idMatch[1].trim() : `${w.prefix}-Q${index + 1}`;

      const diseaseMatch = block.match(/Disease State:\s*(.+?)(?:Topic:|Difficulty:|Question|$)/i);
      q.disease = diseaseMatch ? diseaseMatch[1].trim() : 'General';

      const topicMatch = block.match(/Topic:\s*(.+?)(?:Difficulty:|Question|$)/i);
      q.concept_tag = topicMatch ? topicMatch[1].trim().toLowerCase().replace(/\s+/g, '_') : 'general';

      const typeMatch = block.match(/Question Type:\s*(.+?)(?:Question Stem:|$)/i);
      let typeRaw = typeMatch ? typeMatch[1].trim().toLowerCase() : '';
      if (typeRaw.includes('single')) q.type = 'sba';
      else if (typeRaw.includes('select')) q.type = 'sata';
      else if (typeRaw.includes('combination') || typeRaw.includes('k-type')) q.type = 'ktype';
      else q.type = 'sba';

      const stemMatch = block.match(/Question Stem:\s*([\s\S]*?)Answer Choices:/i);
      q.stem = stemMatch ? stemMatch[1].trim() : '';

      const optionsMatch = block.match(/Answer Choices:\s*([\s\S]*?)Correct Answer[s]?:/i);
      const optionsRaw = optionsMatch ? optionsMatch[1].trim() : '';
      
      q.options = [];
      const optionLines = optionsRaw.split(/(?=[A-Z][\.\)])/); // Split by Capital letter followed by dot or paren
      for (let line of optionLines) {
        line = line.trim();
        if (/^[A-Z][\.\)]/.test(line)) {
          const key = line.charAt(0).toLowerCase();
          const text = line.substring(2).trim();
          q.options.push({ key, text });
        }
      }

      const correctMatch = block.match(/Correct Answer[s]?:\s*([\s\S]*?)Rationale:/i);
      const correctRaw = correctMatch ? correctMatch[1].trim() : '';
      
      q.correct = [];
      const correctParts = correctRaw.split(/[,&\n]+/);
      for (let p of correctParts) {
        const m = p.trim().match(/^[A-Z]/);
        if (m) q.correct.push(m[0].toLowerCase());
      }

      const rationaleMatch = block.match(/Rationale:\s*([\s\S]*?)(Why the Incorrect Options Are Wrong:|Source Support:|QA Check:|$)/i);
      let rationaleRaw = rationaleMatch ? rationaleMatch[1].trim() : '';
      
      let explicitCorrect = correctRaw.replace(/\n+/g, ' | ').trim();
      q.rationale = `Correct Answer: ${explicitCorrect}\n\n${rationaleRaw}`;

      if (q.stem && q.options.length > 0) {
        items.push(q);
      } else {
        console.log(`Dropped index ${index} in Week ${w.num}. Stem: ${!!q.stem}, Options: ${q.options.length}`);
      }
    });

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
