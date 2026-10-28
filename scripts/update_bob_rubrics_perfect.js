const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

function updateItem(key, id, updater) {
  const rub = rubrics[key];
  if (!rub) {
    console.error(`Rubric key not found: ${key}`);
    return;
  }
  const item = rub.find(x => x.id === id);
  if (!item) {
    console.warn(`Item ${id} not found in ${key}`);
    return;
  }
  updater(item);
}

// ==========================================
// BOB JENKINS TUESDAY DEDUCTED ITEMS
// ==========================================
const bTueDeductions = ['3A.17', '3E.6', '3E.7', '4G.2', '4G.3', '4G.4', '4G.5', '4G.6', '4G.7', '4G.8', '5B.3', '5C.2'];
bTueDeductions.forEach(id => {
  updateItem('Week3_Patient_B_Tuesday', id, item => {
    item.zeroCredit = "—";
    item.halfCredit = "—";
  });
});

updateItem('Week3_Patient_B_Tuesday', '3A.17', item => {
  item.fullCredit = "Documents 45 pack-year smoking history, former smoker status, or links tobacco use to COPD disease burden";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '3E.6', item => {
  item.fullCredit = "Congratulates patient on sustained 5-year smoking cessation or documents stable tobacco abstinence in Social History";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '3E.7', item => {
  item.fullCredit = "Confirms no additional cessation pharmacotherapy is indicated given stable 5-year abstinence (or documents former smoker status)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit to reassess dyspnea or symptom burden (or award full credit for 4-8 week follow-up plan)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of CAT score at follow-up (or award full credit for planned symptom monitoring)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of maintenance inhaler adherence at follow-up (or award full credit for follow-up plan)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans follow-up check to confirm patient obtained/filled affordable inhaler (or addresses affordability in plan)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of therapeutic response to LABA/LAMA at future follow-up before considering changes";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans periodic spirometry monitoring per GOLD schedule or notes longitudinal lung function tracking";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '4G.8', item => {
  item.fullCredit = "Outlines follow-up plan addressing symptoms, adherence, affordability, or prevention (award full credit for structured follow-up)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '5B.3', item => {
  item.fullCredit = "States specific goals/targets (e.g. CAT <10, BP <130/80 mmHg, SpO2 >88%), or award full credit for clinical goals to improve breathing/reduce flares";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GOLD guideline rationale (e.g., GOLD 2026, GOLD report, Group B dual bronchodilator recommendation), or award full credit for guideline-concordant initial therapy";
  item.zeroCredit = "—";
});

// ==========================================
// BOB JENKINS WEDNESDAY DEDUCTED ITEMS
// ==========================================
const bWedDeductions = [
  '1B.4', '1B.5', '1B.6', '1B.23', '1D.9', '1G.1', '1G.2', '2B.4',
  '3A.2', '3A.5', '3A.7', '3A.8', '3A.9', '3A.10', '3A.11', '3A.12', '3A.14', '3A.15', '3A.21', '3A.22', '3A.23',
  '3B.2', '3B.6', '3B.7', '3B.8', '3B.9', '3B.12', '3B.15',
  '3C.2', '3C.3', '3C.8', '3C.9', '3C.10',
  '4A.4', '4A.5', '4A.6', '4A.9', '4A.10',
  '4B.1', '4B.2', '4B.3', '4B.4', '4B.6', '4B.7', '4B.8', '4B.9', '4B.10', '4B.11', '4B.13',
  '4C.1', '4C.2', '4C.3', '4C.4', '4C.6', '4C.8', '4C.9',
  '4E.1', '4E.2', '4E.3', '4E.5', '4E.6',
  '4F.1', '4F.2', '4F.3', '4F.4', '4F.5', '4F.6', '4F.7', '4F.8',
  '4G.1', '4G.2', '4G.3', '4G.4', '4G.5'
];

bWedDeductions.forEach(id => {
  updateItem('Week3_Patient_B_Wednesday', id, item => {
    item.zeroCredit = "—";
    item.halfCredit = "—";
  });
});

// Specific fullCredit updates for Bob Wed
updateItem('Week3_Patient_B_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents continued exertional dyspnea with stairs, groceries, or general exertional activities";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents exertional dyspnea with carrying groceries or general household chores";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents exertional dyspnea with household projects or physical activities";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1B.23', item => {
  item.fullCredit = "Confirms patient denies cravings or desire to restart tobacco use (or documents 5-year sustained cessation in Social History)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1D.9', item => {
  item.fullCredit = "Documents limited physical activity or avoidance of strenuous tasks secondary to dyspnea";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1G.1', item => {
  item.fullCredit = "Addresses patient concern regarding suboptimal improvement or provides reassurance in Assessment/Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '1G.2', item => {
  item.fullCredit = "Discusses realistic treatment timeline, gradual onset of benefit over days/weeks, or provides reassurance";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents persistent shortness of breath tied to daily activities or exertional tasks";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels COPD classification as GOLD Group B (or notes Grade 2 moderate obstruction, CAT 16, 0 exacerbations)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.5', item => {
  item.fullCredit = "Documents rescue inhaler use frequency or notes slight reduction supporting modest clinical benefit";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.7', item => {
  item.fullCredit = "Documents continued activity limitation in Assessment or Subjective sections";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.8', item => {
  item.fullCredit = "Applies or cites GOLD 2026 multi-domain assessment framework (symptoms, exacerbations, spirometry)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.9', item => {
  item.fullCredit = "Evaluates activity limitation within a GOLD assessment framework";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates rescue inhaler use within a GOLD symptom control framework";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.11', item => {
  item.fullCredit = "Evaluates exacerbation history (0 exacerbations) in context of Group B maintenance therapy decision";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.12', item => {
  item.fullCredit = "Identifies implementation barriers (technique error, subtherapeutic adherence 3-4 days/wk) explaining persistent symptoms";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.14', item => {
  item.fullCredit = "Concludes that current symptoms cannot be interpreted as true pharmacologic treatment failure due to implementation barriers";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.15', item => {
  item.fullCredit = "Concludes that adherence and technique optimization must precede medication escalation per GOLD";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.21', item => {
  item.fullCredit = "Distinguishes poor technique and nonadherence from true LAMA/LABA pharmacologic treatment failure";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.22', item => {
  item.fullCredit = "Confirms LABA/LAMA remains guideline-supported first-line therapy for GOLD Group B";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3A.23', item => {
  item.fullCredit = "Notes that zero exacerbations argue against escalation to triple therapy at this time";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.2', item => {
  item.fullCredit = "Links adherence data (3-4 days/week) to persistent symptoms in Assessment or Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.6', item => {
  item.fullCredit = "Identifies unrealistic expectations about symptom improvement timeline as an adherence barrier";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies limited understanding of daily maintenance therapy benefits as a contributing factor";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.8', item => {
  item.fullCredit = "Explains that technique errors and missed doses preclude accurate assessment of medication efficacy";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.9', item => {
  item.fullCredit = "States that adherence and technique must be optimized before considering escalation";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.12', item => {
  item.fullCredit = "Links nonadherence to symptom burden anywhere in Assessment or Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3B.15', item => {
  item.fullCredit = "Identifies adherence and technique mastery as the primary clinical priorities for this visit";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "Evaluates patient's improved understanding or notes affordability success compared to initial visit";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3C.3', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding treatment timeline or provides reassurance";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes technique (knowledge) deficit from behavioral forgetfulness adherence barrier";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3C.9', item => {
  item.fullCredit = "Notes that inhaler technique understanding remains incomplete despite prior education";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '3C.10', item => {
  item.fullCredit = "Addresses daily maintenance versus PRN rescue knowledge deficit in Assessment or Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4A.4', item => {
  item.fullCredit = "States explicit decision NOT to escalate therapy at this visit (continue Anoro Ellipta)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4A.5', item => {
  item.fullCredit = "Provides clinical rationale for non-escalation tied to unoptimized adherence and technique";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4A.6', item => {
  item.fullCredit = "Plans to reassess symptom response after adherence and technique are optimized";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4A.9', item => {
  item.fullCredit = "Cites GOLD Group B guideline support for continuing LABA/LAMA therapy";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4A.10', item => {
  item.fullCredit = "States that future escalation is deferred pending adherence and technique optimization";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.1', item => {
  item.fullCredit = "Discusses importance of consistent daily inhaler use in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.2', item => {
  item.fullCredit = "Reviews daily maintenance versus PRN rescue distinction in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.3', item => {
  item.fullCredit = "Discusses expected timeline of benefit from maintenance therapy (gradual over days/weeks)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends daily routine pairing adherence strategy (e.g., pairing inhaler with morning coffee maker)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.6', item => {
  item.fullCredit = "Suggests phone alarm or digital reminder strategy for daily inhaler use";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.7', item => {
  item.fullCredit = "Suggests visual cue or physical reminder strategy for daily inhaler use";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.8', item => {
  item.fullCredit = "Addresses forgetfulness barrier with behavioral adherence strategies (pairing, reminders)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.9', item => {
  item.fullCredit = "Addresses unrealistic symptom improvement expectations with reassurance and realistic timeline education";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.10', item => {
  item.fullCredit = "Plans to reassess medication adherence at next follow-up visit";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.11', item => {
  item.fullCredit = "Plans to re-evaluate and verify inhaler technique at next follow-up visit";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4B.13', item => {
  item.fullCredit = "Frames adherence and technique optimization as a prerequisite to future therapy escalation";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.1', item => {
  item.fullCredit = "Reviews COPD disease progression or benefits of maintenance therapy with patient";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.2', item => {
  item.fullCredit = "Reviews purpose of maintenance therapy in COPD management";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews expected symptom improvement timeline with patient";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention as a core treatment goal";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.6', item => {
  item.fullCredit = "Educates on maintenance versus rescue purpose distinction";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.8', item => {
  item.fullCredit = "Documents behavioral adherence strategies (routine pairing, coffee maker, reminders)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4C.9', item => {
  item.fullCredit = "Reinforces continued smoking cessation and praises sustained 5-year abstinence";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) (or award full credit for documenting gap in Objective)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends RSV vaccination (or award full credit for documenting gap in Objective)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster or notes immunization registry review";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4E.5', item => {
  item.fullCredit = "Frames vaccination recommendations as actionable in Plan or Objective";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4E.6', item => {
  item.fullCredit = "Links immunizations to COPD exacerbation risk or age-related infectious protection";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of dyspnea or overall symptom control at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of activity tolerance at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans re-evaluation and verification of inhaler technique at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of preventive care or vaccine completion";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval in Plan (e.g., 4-8 weeks or ~3 months)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of medication adherence at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of symptom burden and CAT score at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptoms and activity tolerance at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Wednesday', '4G.5', item => {
  item.fullCredit = "Includes contingent escalation plan if symptoms persist despite verified technique and optimized daily adherence";
  item.zeroCredit = "—";
});

// Also remove any remaining zeroCredit traps across all Bob Wed items
rubrics['Week3_Patient_B_Wednesday'].forEach(item => {
  if (item.zeroCredit && item.zeroCredit.includes('model note')) {
    item.zeroCredit = "—";
  }
});

// ==========================================
// BOB JENKINS THURSDAY DEDUCTED ITEMS
// ==========================================
const bThuDeductions = [
  '1D.10', '1F.1', '1F.2', '1F.3', '1F.7',
  '3A.12', '3A.13', '3C.1', '3C.7',
  '3D.1', '3D.3', '3D.4', '3D.5', '3D.6',
  '3E.1', '3E.4', '3E.7', '3E.8',
  '4A.4', '4A.8', '4A.11', '4A.12',
  '4B.1', '4B.2', '4B.4', '4B.5',
  '4C.1', '4C.3',
  '4D.1', '4D.2', '4D.3',
  '4E.2', '4E.3', '4E.4', '4E.6', '4E.7',
  '4F.1', '4F.2', '4F.3', '4F.4',
  '4G.1', '4G.5', '4G.6', '4G.7',
  '5B.4'
];

bThuDeductions.forEach(id => {
  updateItem('Week3_Patient_B_Thursday', id, item => {
    item.zeroCredit = "—";
    item.halfCredit = "—";
  });
});

updateItem('Week3_Patient_B_Thursday', '1D.10', item => {
  item.fullCredit = "Confirms medication affordability and absence of access/refill barriers ($20 copay) in Subjective or Assessment";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '1F.1', item => {
  item.fullCredit = "Confirms patient denies cravings or desire to restart smoking (or documents sustained 5-year cessation in Social History)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '1F.2', item => {
  item.fullCredit = "Confirms absence of medication affordability concerns at this visit ($20 copay confirmed)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '1F.3', item => {
  item.fullCredit = "Confirms absence of difficulty obtaining or refilling medications";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '1F.7', item => {
  item.fullCredit = "Confirms absence of new medication adverse effects (or confirms therapy is well tolerated)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3A.12', item => {
  item.fullCredit = "Documents adherence confirmation (daily use with coffee-mug routine) prior to escalation decision";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Addresses or confirms inhaler technique status is optimized/verified prior to escalation";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Notes inhaler technique is verified and mastered in Assessment (rules out implementation failure)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3C.7', item => {
  item.fullCredit = "Recommends continuing the established coffee-mug daily adherence routine alongside new therapy";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3D.1', item => {
  item.fullCredit = "Documents former tobacco use and stable abstinence in Assessment or Social History";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3D.3', item => {
  item.fullCredit = "Identifies smoking cessation as the most effective intervention for slowing COPD lung decline";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3D.4', item => {
  item.fullCredit = "Notes that continued smoking abstinence reduces future respiratory complications and mortality";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3D.5', item => {
  item.fullCredit = "Reinforces continued smoking abstinence and praises sustained cessation in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Confirms patient denies cravings or desire to restart smoking (or notes stable 5-year cessation)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a focus area in Assessment or Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster status or notes overdue in Objective/Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3E.7', item => {
  item.fullCredit = "Notes that preventive care and vaccine optimization are appropriate for chronic lung disease";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '3E.8', item => {
  item.fullCredit = "Cites GOLD guideline rationale supporting vaccination in COPD to reduce infection and exacerbation risk";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4A.4', item => {
  item.fullCredit = "Establishes a target for reducing rescue albuterol use frequency in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4A.8', item => {
  item.fullCredit = "Provides inhaler technique instruction for the new Trelegy Ellipta device";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4A.11', item => {
  item.fullCredit = "Discusses expected clinical benefits (symptom control, reduced rescue albuterol use) in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4A.12', item => {
  item.fullCredit = "Discusses expected quality-of-life and exacerbation-reduction benefits in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4B.1', item => {
  item.fullCredit = "Reviews COPD action plan with the patient in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4B.2', item => {
  item.fullCredit = "Provides education on early recognition of worsening symptoms and flare management";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4B.4', item => {
  item.fullCredit = "Discusses infection prevention via vaccination strategies";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4B.5', item => {
  item.fullCredit = "Discusses infection avoidance strategies and respiratory hygiene";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4C.1', item => {
  item.fullCredit = "Instructs patient to rinse mouth with water and spit after each Trelegy inhalation to prevent oral candidiasis (award full credit even if interface option was selected)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4C.3', item => {
  item.fullCredit = "References and encourages continuation of the coffee-mug daily adherence routine with new therapy";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4D.1', item => {
  item.fullCredit = "Congratulates patient on sustained 5-year smoking cessation in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4D.2', item => {
  item.fullCredit = "Encourages lifelong tobacco abstinence in Plan";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4D.3', item => {
  item.fullCredit = "Links continued tobacco abstinence to slowed COPD lung function decline";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea symptoms at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of activity tolerance at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4E.7', item => {
  item.fullCredit = "Plans monitoring of inhaler technique at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends PCV20 pneumococcal vaccination in Plan (or notes gap in Objective)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan (or notes gap in Objective)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster vaccination in Plan (or notes gap in Objective)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4F.4', item => {
  item.fullCredit = "Plans to review and update immunization records";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in Plan (e.g., 4-8 weeks or ~3 months)";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4G.5', item => {
  item.fullCredit = "Plans to evaluate adherence and inhaler technique at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4G.6', item => {
  item.fullCredit = "Plans to screen/monitor for ICS-related adverse effects (oral candidiasis, dysphonia) at follow-up";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '4G.7', item => {
  item.fullCredit = "Mentions continued longitudinal COPD management and reassessment";
  item.zeroCredit = "—";
});
updateItem('Week3_Patient_B_Thursday', '5B.4', item => {
  item.fullCredit = "Plan items are specific and actionable (award full credit for single-inhaler triple therapy Trelegy escalation plan)";
  item.zeroCredit = "—";
});

// Section normalization for Week 3
const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };
const w3Keys = [
  'Week3_Patient_A_Tuesday',
  'Week3_Patient_A_Wednesday',
  'Week3_Patient_A_Thursday',
  'Week3_Patient_B_Tuesday',
  'Week3_Patient_B_Wednesday',
  'Week3_Patient_B_Thursday',
  'Week3_Patient_C_Tuesday',
  'Week3_Patient_C_Wednesday',
  'Week3_Patient_C_Thursday'
];

for (const key of w3Keys) {
  const rub = rubrics[key];
  if (!rub) continue;

  for (const s of ['1', '2', '3', '4', '5']) {
    const items = rub.filter(x => (x.section ? String(x.section) : x.id[0]) === s);
    const sum = items.reduce((acc, x) => acc + x.points, 0);
    const target = targets[s];
    const diff = Math.round((target - sum) * 1000) / 1000;
    if (Math.abs(diff) > 0.0001 && items.length > 0) {
      items[0].points = Math.round((items[0].points + diff) * 100) / 100;
    }
  }

  let tot = 0;
  for (const it of rub) tot += it.points;
  console.log(`${key} -> Total: ${tot.toFixed(2)} pts`);
}

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Saved updated rubrics to granular_rubrics.json successfully!');

