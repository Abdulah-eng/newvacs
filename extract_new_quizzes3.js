const fs = require('fs');
const mammoth = require('mammoth');

async function extract() {
  const weeks = [
    { file: 'quiz/Week 1 NAPLEX Quiz Questions.docx', out: 'src/data/quiz.js', num: 1, prefix: 'W1' },
    { file: 'quiz/Week 2 NAPLEX Quiz Questions.docx', out: 'src/data/quiz2.js', num: 2, prefix: 'W2' },
    { file: 'quiz/Week 3 NAPLEX Quiz Questions.docx', out: 'src/data/quiz3.js', num: 3, prefix: 'W3' },
    { file: 'quiz/Week 4 NAPLEX Quiz Questions.docx', out: 'src/data/quiz4.js', num: 4, prefix: 'W4' },
    { file: 'quiz/Week 5 NAPLEX Quiz Questions.docx', out: 'src/data/quiz5.js', num: 5, prefix: 'W5' },
  ];

  for (let w of weeks) {
    if (!fs.existsSync(w.file)) {
      console.log(`Missing ${w.file}`);
      continue;
    }
    const result = await mammoth.extractRawText({ path: w.file });
    const text = result.value;

    const items = [];
    
    const regex = /(?:Question ID:\s*(.+?))?\s*Disease State:\s*(.+?)\s*Topic:\s*(.+?)\s*Difficulty:\s*(.+?)\s*Question Type:\s*(.+?)\s*Question Stem:\s*([\s\S]*?)Answer Choices:\s*([\s\S]*?)Correct Answer[s]?:\s*([\s\S]*?)Rationale:\s*([\s\S]*?)(?=\d+\.\s+[A-Za-z ]+\s+Question\s+\d+|Question ID:|Disease State:|$)/gi;
    
    let m;
    let index = 0;
    while ((m = regex.exec(text)) !== null) {
      index++;
      const q = {};
      
      q.id = m[1] ? m[1].trim() : `${w.prefix}-Q${index}`;
      q.disease = m[2] ? m[2].trim() : 'General';
      q.concept_tag = m[3] ? m[3].trim().toLowerCase().replace(/[^a-z0-9]+/g, '_') : 'general';
      
      let typeRaw = m[5] ? m[5].trim().toLowerCase() : '';
      if (typeRaw.includes('single')) q.type = 'sba';
      else if (typeRaw.includes('select')) q.type = 'sata';
      else if (typeRaw.includes('combination') || typeRaw.includes('k-type')) q.type = 'ktype';
      else q.type = 'sba';

      q.stem = m[6] ? m[6].trim() : '';

      const optionsRaw = m[7] ? m[7].trim() : '';
      q.options = [];
      const optionLines = optionsRaw.split(/(?=[A-Z][\.\)])/);
      for (let line of optionLines) {
        line = line.trim();
        if (/^[A-Z][\.\)]/.test(line)) {
          const key = line.charAt(0).toLowerCase();
          const text = line.substring(2).trim();
          q.options.push({ key, text });
        }
      }

      const correctRaw = m[8] ? m[8].trim() : '';
      q.correct = [];
      const correctParts = correctRaw.split(/[,&\n\s]+/);
      for (let p of correctParts) {
        const mm = p.trim().match(/^[A-Z]/i);
        if (mm) q.correct.push(mm[0].toLowerCase());
      }
      
      // Make correct explicit
      let explicitCorrect = correctRaw.replace(/\n+/g, ' | ').trim();
      
      // Remove "Why the Incorrect Options Are Wrong:", "Source Support:", "QA Check:"
      let rationaleRaw = m[9] ? m[9].trim() : '';
      rationaleRaw = rationaleRaw.split(/Why the Incorrect Options Are Wrong:|Source Support:|QA Check:/i)[0].trim();

      q.rationale = `Correct Answer: ${explicitCorrect}\n\n${rationaleRaw}`;

      if (q.stem && q.options.length > 0) {
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
