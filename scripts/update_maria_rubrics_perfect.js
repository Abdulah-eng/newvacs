const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '..', 'src', 'data', 'granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

const wed = rubrics['Week3_Patient_C_Wednesday'];
const thu = rubrics['Week3_Patient_C_Thursday'];

// 1. Wednesday updates
const wedDeductedIds = [
  '1C.1', '1C.2', '1C.3', '1C.4', '1C.10', '1E.21', '1E.27',
  '3D.1', '3D.2', '3D.3', '3D.5', '3D.6', '3D.7', '3D.8', '3D.9', '3D.11', '3D.12', '3D.13', '3D.14', '3D.15',
  '3E.1', '3E.2', '3E.4', '3E.6', '3E.7', '3E.8',
  '3F.3', '3F.4', '3F.8', '3F.10', '3F.11', '3F.12',
  '3G.1', '3G.2', '3G.3', '3G.4', '3G.5', '3G.6', '3G.7', '3G.8', '3G.9', '3G.10', '3G.11', '3G.12',
  '4B.1', '4B.2', '4B.3', '4B.4', '4B.5', '4B.6', '4B.7', '4B.8', '4B.9', '4B.10', '4B.11', '4B.12',
  '4C.3', '4C.4', '4C.5', '4C.7', '4C.8',
  '4D.2', '4D.4', '4D.6',
  '4E.1', '4E.2', '4E.3', '4E.4', '4E.5', '4E.6', '4E.7', '4E.8',
  '4F.1', '4F.2', '4F.3', '4F.4', '4F.5', '4F.6', '4F.7', '4F.8', '4F.9', '4F.10', '4F.11', '4F.12', '4F.13', '4F.14', '4F.15', '4F.16', '4F.17', '4F.18',
  '4G.1', '4G.2', '4G.3', '4G.4', '4G.5', '4G.6', '4G.7', '4G.8', '4G.9', '4G.10', '4G.11', '4G.12', '4G.13', '4G.14',
  '5A.4'
];

for (const it of wed) {
  if (wedDeductedIds.includes(it.id)) {
    it.zeroCredit = '—';
    it.halfCredit = '—';
    
    // Add full credit flexibility
    if (it.id === '1C.1') it.fullCredit = 'Lists asthma in PMH or problem list (award full credit even if noted in history or ACO diagnosis)';
    if (it.id === '1C.2') it.fullCredit = 'Documents childhood onset of asthma (diagnosed age 7 or in childhood)';
    if (it.id === '1C.3') it.fullCredit = 'Lists COPD in PMH or problem list';
    if (it.id === '1C.4') it.fullCredit = 'Documents COPD diagnosis duration (~8 years or several years)';
    if (it.id === '1C.10') it.fullCredit = 'Documents past surgical history (cholecystectomy / denies prior cardiothoracic surgeries)';
    if (it.id === '1E.21') it.fullCredit = 'Addresses medication affordability status (e.g., $20 copay for Trelegy, affordable)';
    if (it.id === '1E.27') it.fullCredit = 'Reconciles active prescription medications (Trelegy, albuterol, cetirizine, lisinopril, calcium/vit D; >=5 meds reconciled)';
    if (it.id === '3D.9') it.fullCredit = 'Structures OCS toxicity / stewardship as a distinct clinical consideration (does not require rigid numeric #4 ranking)';
    if (it.id === '3E.6') it.fullCredit = 'Assesses allergic rhinitis comorbidity (does not require rigid numeric #5 ranking)';
    if (it.id === '3F.8') it.fullCredit = 'Addresses bone health / osteopenia as a clinical consideration (does not require rigid numeric #6 ranking)';
    if (it.id === '3G.8') it.fullCredit = 'Addresses preventive care / vaccines as a clinical consideration (does not require rigid numeric #7 ranking)';
    if (it.id === '5A.4') it.fullCredit = 'Structures Monitoring and Follow-Up within Plan section (award full credit even if integrated into plan text)';
  }
}

// 2. Thursday updates
const thuDeductedIds = [
  '1C.1', '1C.2', '1C.12', '1D.8', '1D.9', '1G.1',
  '3D.9', '3E.2', '3E.6', '3F.1', '3F.2', '3F.3', '3F.4', '3F.6',
  '4C.1', '4C.2', '4C.3', '4C.4', '4C.7', '4C.8', '4C.9', '4C.10',
  '4E.1', '4E.2', '4E.3', '4E.4',
  '4F.1', '4F.2', '4F.5', '4F.6',
  '5B.3', '5B.4'
];

for (const it of thu) {
  if (thuDeductedIds.includes(it.id)) {
    it.zeroCredit = '—';
    it.halfCredit = '—';

    if (it.id === '1C.1') it.fullCredit = 'Lists asthma in PMH or problem list (award full credit even if noted in history or ACO diagnosis)';
    if (it.id === '1C.2') it.fullCredit = 'Lists COPD with duration (~8 years) in PMH or problem list';
    if (it.id === '1C.12') it.fullCredit = 'Documents childhood onset of asthma (diagnosed age 7 or childhood)';
    if (it.id === '1D.8') it.fullCredit = 'Documents denial of recreational or illicit drug use';
    if (it.id === '1D.9') it.fullCredit = 'Documents physical activity status (e.g. daily walking, 20-30 min, limited by dyspnea)';
    if (it.id === '1G.1') it.fullCredit = 'Documents patient motivation or goals to improve respiratory control and avoid exacerbations/prednisone';
    if (it.id === '3D.9') it.fullCredit = 'Addresses continued longitudinal monitoring of exacerbations and OCS bursts';
    if (it.id === '3E.2') it.fullCredit = 'Links corticosteroid bursts to long-term skeletal / osteopenia risk';
    if (it.id === '3E.6') it.fullCredit = 'Recommends bone health monitoring (e.g., screening DEXA scan, calcium/vit D)';
    if (it.id === '3F.1') it.fullCredit = 'Identifies preventive care / immunization gaps as a clinical problem';
    if (it.id === '3F.2') it.fullCredit = 'Addresses RSV vaccination gap as actionable item for chronic lung disease';
    if (it.id === '3F.3') it.fullCredit = 'Addresses Tdap booster overdue status (>10 years)';
    if (it.id === '3F.4') it.fullCredit = 'Discusses importance of vaccination in chronic airway disease management';
    if (it.id === '3F.6') it.fullCredit = 'Recommends preventive care and immunization optimization';
    if (it.id === '4C.9') it.fullCredit = 'Structures monitoring parameters within the Plan (dedicated subsection or integrated)';
    if (it.id === '4C.10') it.fullCredit = 'Monitoring plan addresses parameters tied to active problems (ACO, rhinitis, safety)';
    if (it.id === '4E.4') it.fullCredit = 'Integrates vaccine recommendations / preventive care into Plan';
    if (it.id === '4F.6') it.fullCredit = 'Follow-up plan is present within the Plan (dedicated subsection or integrated)';
    if (it.id === '5B.3') it.fullCredit = 'Clinically interprets ACT (14) and CAT (18) scores to guide therapy escalation';
    if (it.id === '5B.4') it.fullCredit = 'Plan contains concrete actionable detail (biologic drug/dose/regimen, follow-up timing)';
  }
}

// 3. Normalize section totals for both rubrics
function normalizeRubric(rub) {
  const sections = ['1', '2', '3', '4', '5'];
  const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };

  for (const s of sections) {
    const secItems = rub.filter(it => (it.section ? String(it.section) : it.id[0]) === s);
    const sum = secItems.reduce((acc, it) => acc + it.points, 0);
    const factor = targets[s] / sum;
    for (const it of secItems) {
      it.points = Math.round(it.points * factor * 1000) / 1000;
    }
    // Correct minor rounding difference on the last item of section
    const newSum = secItems.reduce((acc, it) => acc + it.points, 0);
    const diff = Math.round((targets[s] - newSum) * 1000) / 1000;
    if (Math.abs(diff) > 0.0001 && secItems.length > 0) {
      secItems[secItems.length - 1].points = Math.round((secItems[secItems.length - 1].points + diff) * 1000) / 1000;
    }
  }
}

normalizeRubric(wed);
normalizeRubric(thu);

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Successfully updated Maria Wednesday and Thursday rubrics in granular_rubrics.json!');

