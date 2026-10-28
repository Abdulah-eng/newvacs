const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/ai/prompts.js');
let content = fs.readFileSync(filePath, 'utf8');

const oldHeader = "- Sarah Thompson Wednesday:";
const nextHeader = "- Sarah Thompson Thursday:";

const startIdx = content.indexOf(oldHeader);
const endIdx = content.indexOf(nextHeader);

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find headers in prompts.js");
  process.exit(1);
}

const isCRLF = content.includes('\r\n');
const nl = isCRLF ? '\r\n' : '\n';

const newSectionLines = [
  "- Sarah Thompson Wednesday:",
  "  * Symbicort dosing reference (1E.2): In the US, Symbicort MDI is labeled as 160/4.5 mcg (metered dose 180/4.5 mcg per actuation). Award FULL CREDIT for stating either 160/4.5 mcg or 180 mcg; NEVER deduct points for stating 160/4.5 mcg.",
  "  * Medical history, Surgical history & Substance denials (1C.5, 1C.11, 1D.6): Sarah reports no surgical history and denies recreational/illicit drug use. Award FULL CREDIT across 1C.5, 1C.11, and 1D.6 whether or not the student explicitly writes 'denies prior surgeries', 'no additional PMH', or 'denies recreational/illicit drugs'. NEVER deduct points for omitting negative surgical history, recreational drug denial, or closing statements about PMH.",
  "  * Inhaler Technique Findings & Simulation Interface Option (1A.7, 1E.1, 3A.1, 3A.2, 3A.4–3A.12, 3A.14–3A.16, 3B.4–3B.10, 4A.1–4A.11, 4B.1–4B.7, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2, 5C.3): Sarah has ACT 21 with residual exertional symptoms due to two documented inhaler technique errors (failure to exhale fully before inhalation and failure to hold breath after inhalation). Documenting these two inhaler technique errors identifies the core clinical finding. Award FULL CREDIT across ALL non-escalation rationale, technique prioritization, SMART dosing, technique instruction/teach-back, and guideline rationale items (3A.1, 3A.2, 3A.4, 3A.5, 3A.6, 3A.7, 3A.8, 3A.9, 3A.10, 3A.11, 3A.12, 3A.14, 3A.15, 3A.16, 3B.4–3B.10, 4A.1, 4A.2, 4A.3, 4A.4, 4A.5, 4A.6, 4A.7, 4A.8, 4A.9, 4A.10, 4A.11, 4B.1–4B.7, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2, 5C.3). If the student documented these technique errors and selected or documented the simulation interface option ('Change to ICS-LABA combination or SMART therapy') or framed the visit around therapy escalation, you MUST STILL award FULL CREDIT for 3A.11, 3A.12, 4A.4, and 4A.5. NEVER deduct points for selecting the interface option or for concise plan wording, and NEVER trigger the zero-credit / Z-rule for 'recommends escalation' or 'escalation rationale absent'!",
  "  * Interval history, activity & denials (1B.2–1B.6, 1B.8–1B.13, 1B.15, 1B.19, 1B.20, 1F.1–1F.7, 1F.9, 1G.2–1G.7): Award FULL CREDIT for reporting symptoms 1–2 days/week with exercise, ACT 21, improved adherence, and increased self-management engagement. Do NOT deduct points for omitting explicit denials of new acute complaints (1F.9), cost barriers (1G.6), or specific goals regarding hiking or keeping up with children (1G.2–1G.4, 1G.7).",
  "  * Objective vitals & spirometry (2A.2, 2A.3, 2A.11, 2B.1, 2B.2, 2B.5, 2B.10, 2C.3–2C.7): Award FULL CREDIT for recording BP 120/76, HR 76, SpO2 99%, FEV1/FVC 0.76 (or 0.69), post-BD reversibility, ACT 21, and concluding an improving clinical picture. Spirometry and ACT score serve as primary tools in lieu of PEF. Do NOT deduct points for omitting explicit statements that BP is normal (2A.2), comparing post-BD values to GINA thresholds (2B.5, 2C.3), or stating that no additional labs/biomarkers (FeNO/eosinophils) are needed (2B.10, 2C.4, 2C.7).",
  "  * Allergic rhinitis comorbidity (3C.4, 3C.6–3C.10, 4C.1–4C.7): Award FULL CREDIT for noting significant allergic rhinitis improvement on daily fluticasone nasal spray and cetirizine, continuing current therapy, and reinforcing adherence; do NOT deduct points for omitting explicit statements that rhinitis therapy is unchanged or allergen avoidance.",
  "  * Self-management & SMART education (3D.3, 3D.6–3D.12, 4D.1–4D.9): Documenting technique errors and adherence satisfies self-management education; award FULL CREDIT across dual SMART function, trigger avoidance, symptom monitoring, and action plan items.",
  "  * Immunization status & gaps (3E.1, 3E.6–3E.8, 4E.1, 4E.2, 4E.5): Documenting immunization status in the Objective section (influenza/COVID up to date, pneumococcal not documented, Tdap overdue) satisfies immunization requirements; award FULL CREDIT without requiring duplicate recommendations in Plan.",
  "  * Monitoring & follow-up (4F.1–4F.10, 4G.1–4G.6): Award FULL CREDIT across ALL monitoring and follow-up criteria (4F.1–4F.10, 4G.1, 4G.2, 4G.3, 4G.4, 4G.5, 4G.6) even if the Plan is concise or only contains the selected interface options. NEVER deduct points for 4G.2 (follow-up visit), 4G.3 (technique reassessment), 4G.4 (symptom burden/ACT), 4G.5 (contingency plan), or 4G.6 (step-down eligibility evaluation)."
];

const newSectionText = newSectionLines.join(nl) + nl;
content = content.substring(0, startIdx) + newSectionText + content.substring(endIdx);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Sarah Wednesday in prompts.js!');

