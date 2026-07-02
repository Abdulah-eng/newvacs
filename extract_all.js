const cp = require('child_process');
const fs = require('fs');

const files = [
  '00.Grand Rounds Capstone Overview.docx',
  '01.Grand Rounds Capstone Model Answer.docx',
  '02.Grand Rounds Capstone Rubric and Answer Key.docx',
  '03.Grand Rounds Capstone Post Questions with Answer Key.docx'
];

files.forEach((f, i) => {
  const out = cp.execSync('node extract_docx.js "Week 6 Capstone/' + f + '"', {encoding: 'utf8'});
  fs.writeFileSync('cap_' + i + '.txt', out, 'utf8');
});
