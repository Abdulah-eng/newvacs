const fs = require('fs');
const path = require('path');
const rubrics = require('../src/data/granular_rubrics.json');

const NAME_MAPPING = {
  'Week1': {
    'A': 'Maria Gonzalez',
    'B': 'James Wilson',
    'C': 'Linda Martinez'
  },
  'Week2': {
    'A': 'Michael Turner',
    'B': 'Angela Rodriguez',
    'C': 'David Chen'
  },
  'Week3': {
    'A': 'Sarah Thompson',
    'B': 'Robert "Bob" Jenkins',
    'C': 'Maria Thompson'
  },
  'Week4': {
    'A': 'Michael Thompson',
    'B': 'Angela Brooks',
    'C': 'Robert Jenkins'
  },
  'Week5': {
    'A': 'Sarah Mitchell',
    'B': 'Jessica Ramirez',
    'C': 'David Carter'
  }
};

function getSection(id) {
  if (id.startsWith('1')) return 'Subjective';
  if (id.startsWith('2')) return 'Objective';
  if (id.startsWith('3')) return 'Assessment';
  if (id.startsWith('4')) return 'Plan';
  return 'General';
}

function escapeCsvField(field) {
  if (field === null || field === undefined) return '';
  const stringified = String(field).trim();
  if (stringified.includes('"') || stringified.includes(',') || stringified.includes('\n') || stringified.includes('\r')) {
    return '"' + stringified.replace(/"/g, '""') + '"';
  }
  return stringified;
}

// Prepare CSV columns
const csvRows = [
  ['Week', 'Patient Name', 'Visit Day', 'Section', 'Item ID', 'Description', 'Points', 'Full Credit Criteria', 'Half Credit Criteria', 'Zero Credit Criteria'].map(escapeCsvField).join(',')
];

const mdRows = [
  '# VACS SOAP Note Grading Rubrics Master List',
  '',
  'This document contains the complete set of criteria, points, and grading expectations used by the AI model to grade SOAP notes across all weeks and patients in the VACS platform.',
  ''
];

// Iterate through the rubrics keys in a sorted order
const keys = Object.keys(rubrics);

// Let's sort keys logically: Week 1 to 6, Patient A to C, Day Tuesday to Thursday
function parseKey(key) {
  if (key.startsWith('Week6_')) {
    return { weekNum: 6, patientLetter: 'Capstone', dayName: 'Capstone', originalKey: key };
  }
  const match = key.match(/^Week(\d+)_Patient_([A-C])_(Tuesday|Wednesday|Thursday)$/);
  if (match) {
    return {
      weekNum: parseInt(match[1]),
      patientLetter: match[2],
      dayName: match[3],
      originalKey: key
    };
  }
  return { weekNum: 99, patientLetter: 'Unknown', dayName: 'Unknown', originalKey: key };
}

const parsedKeys = keys.map(parseKey).sort((a, b) => {
  if (a.weekNum !== b.weekNum) return a.weekNum - b.weekNum;
  if (a.patientLetter !== b.patientLetter) return a.patientLetter.localeCompare(b.patientLetter);
  const dayOrder = { 'Tuesday': 1, 'Wednesday': 2, 'Thursday': 3, 'Capstone': 4 };
  return (dayOrder[a.dayName] || 99) - (dayOrder[b.dayName] || 99);
});

let currentWeekNum = null;
let currentPatientName = null;

parsedKeys.forEach(({ weekNum, patientLetter, dayName, originalKey }) => {
  const items = rubrics[originalKey];
  const weekStr = `Week ${weekNum}`;
  let patientName = '';

  if (weekNum === 6) {
    patientName = 'Grand Rounds Capstone Case';
  } else {
    patientName = NAME_MAPPING[`Week${weekNum}`]?.[patientLetter] || `Patient ${patientLetter}`;
  }

  // Markdown grouping headers
  if (weekNum !== currentWeekNum) {
    currentWeekNum = weekNum;
    mdRows.push(`\n## Week ${weekNum} - ${weekNum === 6 ? 'Capstone' : 'Ambulatory Care'}`);
  }

  mdRows.push(`\n### ${patientName} (${dayName} Visit)`);
  mdRows.push('| ID | Section | Description | Points | Full Credit | Half Credit | Zero Credit |');
  mdRows.push('|---|---|---|---|---|---|---|');

  items.forEach(item => {
    const section = getSection(item.id);
    
    // Add to CSV
    csvRows.push([
      weekStr,
      patientName,
      dayName,
      section,
      item.id,
      item.description,
      item.points,
      item.fullCredit,
      item.halfCredit,
      item.zeroCredit
    ].map(escapeCsvField).join(','));

    // Add to Markdown table
    const mdDesc = String(item.description).replace(/\|/g, '\\|').replace(/\n/g, ' ');
    const mdFull = String(item.fullCredit).replace(/\|/g, '\\|').replace(/\n/g, ' ');
    const mdHalf = String(item.halfCredit).replace(/\|/g, '\\|').replace(/\n/g, ' ');
    const mdZero = String(item.zeroCredit).replace(/\|/g, '\\|').replace(/\n/g, ' ');
    
    mdRows.push(`| ${item.id} | ${section} | ${mdDesc} | ${item.points} | ${mdFull} | ${mdHalf} | ${mdZero} |`);
  });
});

// Write CSV
fs.writeFileSync(path.join(__dirname, '../VACS_Grading_Rubric_Master.csv'), csvRows.join('\n'), 'utf8');
console.log('Successfully generated CSV: VACS_Grading_Rubric_Master.csv');

// Write Markdown
fs.writeFileSync(path.join(__dirname, '../VACS_Grading_Rubric_Master.md'), mdRows.join('\n'), 'utf8');
console.log('Successfully generated Markdown: VACS_Grading_Rubric_Master.md');
