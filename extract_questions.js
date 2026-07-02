const fs = require('fs');

const text = fs.readFileSync('cap_3.txt', 'utf8');

const questions = [];
const qBlocks = text.split('═══════════════════════════════════════ QUESTION').slice(1);

qBlocks.forEach((block, idx) => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l);
  const titleLine = lines[0];
  const questionType = titleLine.match(/\[(.*?)\]/)[1];
  
  let i = 1;
  let questionText = '';
  while (i < lines.length && !lines[i].startsWith('A. ') && !lines[i].startsWith('I. ') && !lines[i].startsWith('CORRECT')) {
    questionText += lines[i] + ' ';
    i++;
  }
  
  const options = [];
  while (i < lines.length && !lines[i].startsWith('CORRECT')) {
    options.push(lines[i]);
    i++;
  }
  
  let correctAnswer = '';
  if (i < lines.length && lines[i].startsWith('CORRECT')) {
    correctAnswer = lines[i].replace('CORRECT ANSWER:', '').replace('CORRECT ANSWERS:', '').trim();
    i++;
  }

  const scriptBlocks = block.split('--- SCRIPTED FEEDBACK');
  const scripts = {};
  for (let j = 1; j < scriptBlocks.length; j++) {
    const sBlock = scriptBlocks[j].trim();
    const conditionMatch = sBlock.match(/— Student (.*):/);
    if (!conditionMatch) continue;
    const condition = conditionMatch[1].trim();
    const content = sBlock.substring(sBlock.indexOf(':') + 1).trim();
    scripts[condition] = content;
  }

  questions.push({
    id: 'q' + (idx + 1),
    question: questionText.trim(),
    type: questionType,
    options: options,
    correctAnswer: correctAnswer,
    feedback: scripts
  });
});

fs.writeFileSync('cap_questions.json', JSON.stringify(questions, null, 2));
console.log('Done');
