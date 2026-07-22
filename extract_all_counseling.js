const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || 'REDACTED';

async function generateCounseling(text) {
  const prompt = `You are a clinical pharmacy preceptor. Based on the following student grading rubric excerpt for an ambulatory care encounter, generate a Javascript array representing 1-2 key counseling/patient-education topics the student should cover.
Format your output EXACTLY as this Javascript string, with NO markdown formatting, NO backticks, and NO other text:

  COUNSELING: [
    { id: 'auto_gen_1', title: 'Short Topic Title', body: [
      "Conversational sentence 1.",
      "Conversational sentence 2." ] }
  ],
  GUIDING_QUESTIONS:

Make the tone encouraging and conversational, like you are giving the student an example of what to say to the patient.

Source text:
` + text.substring(0, 3000);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  if (!data.content) {
    console.error("API Error", data);
    return null;
  }
  let out = data.content[0].text.trim();
  if (out.startsWith('```')) {
    out = out.replace(/^```(javascript)?/, '').replace(/```$/, '').trim();
  }
  return out;
}

function extractDocx(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const zip = new AdmZip(filePath);
    const xml = zip.readAsText('word/document.xml');
    const matches = xml.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
    if (!matches) return null;
    const text = matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
    
    const planMatch = text.match(/PLAN[\s\S]*?(?:SECTION 13|SECTION 14|Grading Principle|$)/i);
    if (planMatch) return planMatch[0];
    
    const paMatch = text.match(/Preferred Answer[\s\S]*?(?:SECTION|$)/gi);
    if (paMatch) return paMatch.join(' ');
    
    return text.substring(0, 4000);
  } catch (err) {
    return null;
  }
}

const weeks = [
  { id: 3, folder: 'Week 3 Asthma + COPD' },
  { id: 4, folder: 'Week 4 HF + AFib + Anticoagulation' },
  { id: 5, folder: 'Week 5 Depression + Anxiety + Tobacco Cessation' },
];

const days = ['Tuesday', 'Wednesday', 'Thursday'];
const pats = ['A', 'B', 'C'];
const dayMap = { 'Tuesday': 'tue', 'Wednesday': 'wed', 'Thursday': 'thu' };

async function run() {
  for (const week of weeks) {
    const jsFile = 'src/data/patientsW' + week.id + '.js';
    let content = fs.readFileSync(jsFile, 'utf8');
    const blocks = content.split('makeCase({');
    const newBlocks = [];
    
    for (const block of blocks) {
      if (!block.includes("id: 'w" + week.id + "-")) {
        newBlocks.push(block);
        continue;
      }
      
      const idMatch = block.match(/id:\s*'w\d+-([^-]+)-([^']+)'/);
      if (!idMatch) {
        newBlocks.push(block);
        continue;
      }
      
      const patName = idMatch[1];
      const patDayStr = idMatch[2];
      
      let docText = null;
      for (const p of pats) {
        const docName = 'Patient ' + p + ' ' + Object.keys(dayMap).find(k => dayMap[k] === patDayStr) + '.docx';
        const fPath = path.join(week.folder, 'Patient ' + p, docName);
        if (fs.existsSync(fPath)) {
          const peek = extractDocx(fPath) || "";
          if (peek.toLowerCase().includes(patName.split('_')[0].toLowerCase())) {
            console.log("Found doc for", patName, patDayStr, "at", fPath);
            docText = peek;
            break;
          }
        }
      }
      
      if (docText) {
        if (!block.includes('COUNSELING:')) {
          console.log('Generating counseling for', patName, patDayStr);
          const gen = await generateCounseling(docText);
          if (gen && gen.includes('COUNSELING:')) {
            const planIdx = block.indexOf('PLAN_SECTIONS:');
            if (planIdx !== -1) {
              const gqIdx = block.indexOf('GUIDING_QUESTIONS:', planIdx);
              if (gqIdx !== -1) {
                const modified = block.substring(0, gqIdx) + gen + '\\n  ' + block.substring(gqIdx + 'GUIDING_QUESTIONS:'.length);
                newBlocks.push(modified);
                continue;
              }
            }
          }
        } else {
           console.log("Already has counseling", patName, patDayStr);
        }
      } else {
        console.log("No doc found for", patName, patDayStr);
      }
      
      newBlocks.push(block);
    }
    
    fs.writeFileSync(jsFile, newBlocks.join('makeCase({'));
    console.log("Updated", jsFile);
  }
}

run();
