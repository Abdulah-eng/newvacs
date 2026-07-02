const fs = require('fs');
const modelAnswer = fs.readFileSync('cap_1.txt', 'utf8');
const rubric = fs.readFileSync('cap_2.txt', 'utf8');

const output = `// This file contains the private model answer and granular rubric for AI calibration.
// Do NOT export this to the client-side bundle.

export const CAPSTONE_MODEL_ANSWER = \`${modelAnswer.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

export const CAPSTONE_GRANULAR_RUBRIC = \`${rubric.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
`;

fs.writeFileSync('src/data/server/capstoneKeys.js', output);
console.log('capstoneKeys.js created successfully.');
