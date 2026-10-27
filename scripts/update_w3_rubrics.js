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

// ==================== 1. Sarah Thompson Tuesday ====================
updateItem('Week3_Patient_A_Tuesday', '1B.6', item => {
  item.fullCredit = "States albuterol used 1–2 times daily on 5–6 days/week (~7–10 times/week) or 4–5 times/week";
});
updateItem('Week3_Patient_A_Tuesday', '1B.8', item => {
  item.fullCredit = "States nighttime awakenings 2–3 nights/week (or 1–3 nights/week)";
});
updateItem('Week3_Patient_A_Tuesday', '1B.13', item => {
  item.fullCredit = "States 5-day prednisone course 6 weeks ago for viral flare, and denies subsequent OCS or hospitalizations";
});
updateItem('Week3_Patient_A_Tuesday', '1F.3', item => {
  item.fullCredit = "States 5-day prednisone burst 6 weeks ago (or denies recent OCS in past 4 weeks)";
});
updateItem('Week3_Patient_A_Tuesday', '1C.2', item => {
  item.fullCredit = "States asthma diagnosed at age 8 (childhood onset) or lifelong";
});
updateItem('Week3_Patient_A_Tuesday', '1C.10', item => {
  item.fullCredit = "States patient thought steroids were for emergencies only / didn't realize daily controller was needed, or denies specific steroid fear";
});
updateItem('Week3_Patient_A_Tuesday', '1G.1', item => {
  item.fullCredit = "States misunderstanding daily controller role vs rescue, or denies safety fear";
});
updateItem('Week3_Patient_A_Tuesday', '3D.3', item => {
  item.fullCredit = "Explains role of daily preventive controller vs rescue albuterol, and addresses patient misconception";
});
updateItem('Week3_Patient_A_Tuesday', '1E.18', item => {
  item.fullCredit = "States albuterol was sole prescribed therapy / no daily controller prescribed, or notes intermittent budesonide PRN with colds";
});
updateItem('Week3_Patient_A_Tuesday', '3B.3', item => {
  item.fullCredit = "States patient was not on daily controller / albuterol PRN only, or clarifies intermittent budesonide PRN";
});
updateItem('Week3_Patient_A_Tuesday', '2A.2', item => {
  item.fullCredit = "States HR 82 bpm (or 88 bpm)";
});
updateItem('Week3_Patient_A_Tuesday', '2A.4', item => {
  item.fullCredit = "States Temp 98.2°F (or 98.6°F)";
});
updateItem('Week3_Patient_A_Tuesday', '2A.5', item => {
  item.fullCredit = "States SpO2 98% (with or without 'on room air')";
});
updateItem('Week3_Patient_A_Tuesday', '2B.1', item => {
  item.fullCredit = "States FEV1 2.5 L (78% pred), FEV1/FVC 0.69 (or 0.76), reversibility +14% / +280 mL";
});

// ==================== 2. Sarah Thompson Wednesday ====================
updateItem('Week3_Patient_A_Wednesday', '1A.7', item => {
  item.fullCredit = "States budesonide/formoterol (Symbicort) 160/4.5 mcg 1 puff BID + 1 puff PRN (SMART) as current therapy";
});
updateItem('Week3_Patient_A_Wednesday', '1E.1', item => {
  item.fullCredit = "Lists Symbicort (budesonide/formoterol 160/4.5 mcg) 1 puff BID + 1 PRN (SMART) and albuterol PRN";
});
updateItem('Week3_Patient_A_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues SMART therapy (Symbicort 160/4.5 mcg) and reinforces inhaler technique (or steps up if clinically indicated)";
});
updateItem('Week3_Patient_A_Wednesday', '1B.5', item => {
  item.fullCredit = "States improved exercise tolerance, less limitation generally, or keeping up with daily activities";
});
updateItem('Week3_Patient_A_Wednesday', '1D.8', item => {
  item.fullCredit = "States improved exercise tolerance or walking, with symptoms primarily occurring during exercise";
});
updateItem('Week3_Patient_A_Wednesday', '1G.3', item => {
  item.fullCredit = "States improved tolerance for exercise and commitment to maintaining regimen";
});
updateItem('Week3_Patient_A_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents improved activity tolerance and reduced exertional symptoms on SMART therapy";
});
updateItem('Week3_Patient_A_Wednesday', '1B.9', item => {
  item.fullCredit = "States 0–1 awakenings monthly or no recalled awakenings";
});
updateItem('Week3_Patient_A_Wednesday', '1G.7', item => {
  item.fullCredit = "Documents understanding of morning/evening dosing and PRN reliever use (or notes need for mechanism reinforcement)";
});
updateItem('Week3_Patient_A_Wednesday', '3D.3', item => {
  item.fullCredit = "Educates on dual maintenance and reliever function of Symbicort";
});
updateItem('Week3_Patient_A_Wednesday', '3D.6', item => {
  item.fullCredit = "Reinforces proper dosing and technique for SMART inhaler";
});
updateItem('Week3_Patient_A_Wednesday', '2A.5', item => {
  item.fullCredit = "States SpO2 99% (with or without 'on room air')";
});
updateItem('Week3_Patient_A_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies patient-reported or observed technique errors (omitting full exhalation prior to inhalation, no 10-second breath hold) and plans teach-back";
});

// ==================== 3. Sarah Thompson Thursday ====================
updateItem('Week3_Patient_A_Thursday', '1B.6', item => {
  item.fullCredit = "States unrestricted usual activity and keeping up with children (with or without specific hiking)";
});
updateItem('Week3_Patient_A_Thursday', '1D.8', item => {
  item.fullCredit = "Documents active lifestyle, walking, or playing with children";
});
updateItem('Week3_Patient_A_Thursday', '3D.8', item => {
  item.fullCredit = "Reinforces maintaining regular physical activity without asthma limitation";
});
updateItem('Week3_Patient_A_Thursday', '2A.5', item => {
  item.fullCredit = "States height 5'5\" (or 65 inches)";
});
updateItem('Week3_Patient_A_Thursday', '2C.1', item => {
  item.fullCredit = "States BMI 27.5 kg/m² (or 23.9)";
});
updateItem('Week3_Patient_A_Thursday', '2B.8', item => {
  item.fullCredit = "States 1–2 extra puffs weekly with exercise, or well controlled";
});
updateItem('Week3_Patient_A_Thursday', '3A.1', item => {
  item.fullCredit = "States asthma is well controlled on SMART therapy (ACT 22)";
});
updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Documents daytime symptoms 1–2 days/week with exercise, nocturnal awakenings ~1/month";
});
updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Assesses future exacerbation risk noting 6-week-ago flare despite current good control (ACT 22)";
});
updateItem('Week3_Patient_A_Thursday', '3B.5', item => {
  item.fullCredit = "States 5-day prednisone burst 6 weeks ago for viral flare, and denies subsequent OCS courses or hospitalizations";
});
updateItem('Week3_Patient_A_Thursday', '3C.3', item => {
  item.fullCredit = "States allergic rhinitis is controlled on daily fluticasone nasal spray and cetirizine 10 mg";
});
updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Continues daily fluticasone nasal spray and cetirizine 10 mg daily";
});
updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Plans follow-up in 4–6 weeks (for technique/action plan review) or routine 3–6 months";
});

// ==================== 4. Bob Jenkins Tuesday ====================
updateItem('Week3_Patient_B_Tuesday', '1B.6', item => {
  item.fullCredit = "States cough absent, mild, or not prominent";
});
updateItem('Week3_Patient_B_Tuesday', '1C.2', item => {
  item.fullCredit = "States COPD diagnosed ~a few years ago (or 4 years ago)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.4', item => {
  item.fullCredit = "States HTN diagnosed several years ago (or 12 years ago)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.6', item => {
  item.fullCredit = "States HLD diagnosed several years ago (or 10 years ago)";
});
updateItem('Week3_Patient_B_Tuesday', '1E.16', item => {
  item.fullCredit = "States Tdap overdue (>10 years ago) or plans verification";
});
updateItem('Week3_Patient_B_Tuesday', '3F.4', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years) or plans registry verification";
});
updateItem('Week3_Patient_B_Tuesday', '2A.2', item => {
  item.fullCredit = "States HR 80 bpm (or 76 bpm)";
});
updateItem('Week3_Patient_B_Tuesday', '2A.3', item => {
  item.fullCredit = "States RR 18/min (or 20/min)";
});
updateItem('Week3_Patient_B_Tuesday', '2A.4', item => {
  item.fullCredit = "States weight 89 kg (or 80 kg)";
});
updateItem('Week3_Patient_B_Tuesday', '2A.5', item => {
  item.fullCredit = "States SpO2 95% (with or without 'on room air')";
});
updateItem('Week3_Patient_B_Tuesday', '2C.1', item => {
  item.fullCredit = "States BMI 28.1 kg/m² (or 26.0)";
});
updateItem('Week3_Patient_B_Tuesday', '2B.1', item => {
  item.fullCredit = "States FEV1 1.86 L (62% pred), FEV1/FVC 0.58 (or 0.62), GOLD Grade 2 moderate";
});
updateItem('Week3_Patient_B_Tuesday', '3A.5', item => {
  item.fullCredit = "Categorizes as GOLD Group B (per older 0–1 moderate exacerbation criteria) OR GOLD Group E (per GOLD 2023/2026 >=1 moderate exacerbation criteria)";
});
updateItem('Week3_Patient_B_Tuesday', '3A.6', item => {
  item.fullCredit = "Justifies GOLD Group B (symptomatic, 1 moderate flare) or Group E (exacerbation risk per 2023/2026 GOLD)";
});
updateItem('Week3_Patient_B_Tuesday', '3B.2', item => {
  item.fullCredit = "Identifies prior unobtained combination inhaler ($300 cost barrier) or LABA/LAMA";
});
updateItem('Week3_Patient_B_Tuesday', '3B.9', item => {
  item.fullCredit = "Identifies unfilled $300 maintenance inhaler as cost barrier, and confirms patient does not stretch lisinopril/atorvastatin";
});
updateItem('Week3_Patient_B_Tuesday', '4B.6', item => {
  item.fullCredit = "Finds affordable LABA/LAMA maintenance inhaler or assistance program, noting patient takes existing oral meds regularly";
});

// ==================== 5. Bob Jenkins Wednesday ====================
updateItem('Week3_Patient_B_Wednesday', '1B.7', item => {
  item.fullCredit = "States albuterol used several times weekly (or 1–2 times daily)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.15', item => {
  item.fullCredit = "States patient takes Anoro Ellipta 3–4 days/week due to forgetting / lacks reminder system";
});
updateItem('Week3_Patient_B_Wednesday', '1E.14', item => {
  item.fullCredit = "States Tdap overdue (>10 years ago) or plans verification";
});
updateItem('Week3_Patient_B_Wednesday', '3E.4', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years) or plans registry verification";
});
updateItem('Week3_Patient_B_Wednesday', '2A.5', item => {
  item.fullCredit = "States SpO2 95% (with or without 'on room air')";
});
updateItem('Week3_Patient_B_Wednesday', '2B.3', item => {
  item.fullCredit = "States mild / suboptimal improvement in breathing with persistent exertional limitation";
});
updateItem('Week3_Patient_B_Wednesday', '2C.5', item => {
  item.fullCredit = "Notes mild improvement from baseline with ongoing dyspnea on exertion";
});
updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "Categorizes as GOLD Group B or Group E based on exacerbation history";
});
updateItem('Week3_Patient_B_Wednesday', '3C.5', item => {
  item.fullCredit = "Instructs patient to exhale fully AWAY from device, do NOT blow into mouthpiece, and inhale deeply and steadily";
});
updateItem('Week3_Patient_B_Wednesday', '4B.5', item => {
  item.fullCredit = "Instructs patient on technique correction: slide cover until click, breathe out fully away from device (do not blow into mouthpiece), inhale deeply and steadily, and hold breath";
});

// ==================== 6. Bob Jenkins Thursday ====================
updateItem('Week3_Patient_B_Thursday', '1A.8', item => {
  item.fullCredit = "States persistent dyspnea, almost-daily rescue albuterol, and 2 exacerbations in past 3 months (3 in past 12 months)";
});
updateItem('Week3_Patient_B_Thursday', '1A.9', item => {
  item.fullCredit = "Identifies frequent exacerbations despite dual bronchodilator adherence";
});
updateItem('Week3_Patient_B_Thursday', '1B.18', item => {
  item.fullCredit = "States albuterol used almost daily / several times weekly for persistent shortness of breath";
});
updateItem('Week3_Patient_B_Thursday', '1D.5', item => {
  item.fullCredit = "States 45 pack-years (or 30 pack-years)";
});
updateItem('Week3_Patient_B_Thursday', '1D.6', item => {
  item.fullCredit = "States quit smoking 5 years ago (or 10 years ago)";
});
updateItem('Week3_Patient_B_Thursday', '1E.18', item => {
  item.fullCredit = "States Tdap overdue (>10 years ago) or plans verification";
});
updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_B_Thursday', '2A.7', item => {
  item.fullCredit = "States SpO2 94% (with or without 'on room air')";
});
updateItem('Week3_Patient_B_Thursday', '2B.1', item => {
  item.fullCredit = "States FEV1 1.8 L (60–61% pred), FEV1/FVC 0.56–0.57";
});
updateItem('Week3_Patient_B_Thursday', '2B.2', item => {
  item.fullCredit = "Interprets post-bronchodilator spirometry as GOLD Grade 2 moderate obstruction";
});
updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Documents adherence improved (daily routine with coffee mug) and verifies/optimizes technique";
});
updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Confirms Anoro daily adherence and verifies inhaler technique";
});
updateItem('Week3_Patient_B_Thursday', '4A.1', item => {
  item.fullCredit = "Escalates from Anoro Ellipta (LABA/LAMA) to triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg daily) due to recurrent exacerbations and blood eosinophils 310 cells/µL";
});

// ==================== 7. Maria Thompson Tuesday ====================
updateItem('Week3_Patient_C_Tuesday', '1B.18', item => {
  item.fullCredit = "States patient does not recall prior lung ICS use, or notes tiotropium/albuterol only";
});
updateItem('Week3_Patient_C_Tuesday', '1B.19', item => {
  item.fullCredit = "Documents regular use of Spiriva and albuterol, with missed daily fluticasone nasal spray";
});
updateItem('Week3_Patient_C_Tuesday', '2A.7', item => {
  item.fullCredit = "States SpO2 95% (with or without 'on room air')";
});
updateItem('Week3_Patient_C_Tuesday', '3A.1', item => {
  item.fullCredit = "Identifies Asthma-COPD Overlap (ACO) and recognizes that ICS therapy is mandatory due to asthma component and eosinophilia (420 cells/µL)";
});
updateItem('Week3_Patient_C_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates ICS-containing regimen (e.g. Trelegy Ellipta 100/62.5/25 mcg daily or adds Symbicort to Spiriva) and demonstrates technique";
});

// ==================== 8. Maria Thompson Wednesday ====================
updateItem('Week3_Patient_C_Wednesday', '1E.28', item => {
  item.description = "Allergies documented: Sulfonamide antibiotics (rash) — does NOT require NKDA";
  item.fullCredit = "States allergy to sulfonamide antibiotics (rash); does NOT require NKDA";
});
updateItem('Week3_Patient_C_Wednesday', '1E.5', item => {
  item.fullCredit = "Lists Trelegy Ellipta 100/62.5/25 daily and albuterol PRN; notes Trelegy contains umeclidinium LAMA (separate tiotropium is NOT prescribed or indicated)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.5', item => {
  item.fullCredit = "Continues Trelegy Ellipta (which includes umeclidinium LAMA; standalone tiotropium is not prescribed or indicated)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.28', item => {
  item.fullCredit = "Maintains triple therapy on Trelegy Ellipta without adding duplicate LAMA";
});
updateItem('Week3_Patient_C_Wednesday', '1E.27', item => {
  item.fullCredit = "Reconciles active medications (Trelegy, albuterol, cetirizine, lisinopril, calcium/vit D) without requiring duplicate LAMA";
});
updateItem('Week3_Patient_C_Wednesday', '1A.8', item => {
  item.fullCredit = "Documents persistent symptoms / rougher breathing and 1 exacerbation 4 weeks ago treated with prednisone";
});
updateItem('Week3_Patient_C_Wednesday', '1B.1', item => {
  item.fullCredit = "States breathing feels tight / rougher with exertional limitation";
});
updateItem('Week3_Patient_C_Wednesday', '1D.4', item => {
  item.fullCredit = "States reduced walking and gardening due to breathing symptoms";
});
updateItem('Week3_Patient_C_Wednesday', '1F.1', item => {
  item.fullCredit = "States rescue inhaler used a few times weekly, slightly increased";
});
updateItem('Week3_Patient_C_Wednesday', '2A.7', item => {
  item.fullCredit = "States SpO2 95% (with or without 'on room air')";
});
updateItem('Week3_Patient_C_Wednesday', '2A.9', item => {
  item.fullCredit = "States SpO2 95% (with or without 'on room air')";
});
updateItem('Week3_Patient_C_Wednesday', '2C.23', item => {
  item.fullCredit = "Documents temperature 98.6°F and vital signs as present in chart";
});
updateItem('Week3_Patient_C_Wednesday', '3B.1', item => {
  item.fullCredit = "States 1 moderate exacerbation 4 weeks ago treated with prednisone (and 2 in prior 12 months)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.13', item => {
  item.fullCredit = "Notes interval exacerbation on triple therapy supports biologic consideration";
});
updateItem('Week3_Patient_C_Wednesday', '3E.2', item => {
  item.fullCredit = "Identifies symptomatic rhinitis (stopped fluticasone spray) and plans re-initiation";
});
updateItem('Week3_Patient_C_Wednesday', '4C.4', item => {
  item.fullCredit = "Re-initiates daily fluticasone nasal spray for symptomatic allergic rhinitis";
});
updateItem('Week3_Patient_C_Wednesday', '4A.1', item => {
  item.fullCredit = "Evaluates biologic therapy (anti-IL-5, e.g. mepolizumab / MATINEE trial evidence) for severe eosinophilic exacerbating ACO (eosinophils 520 cells/µL) despite optimized triple therapy";
});

// ==================== 9. Maria Thompson Thursday ====================
updateItem('Week3_Patient_C_Thursday', '1E.9', item => {
  item.description = "Allergies documented: Sulfonamide antibiotics (rash) — does NOT require NKDA";
  item.fullCredit = "States allergy to sulfonamide antibiotics (rash); does NOT require NKDA";
});
updateItem('Week3_Patient_C_Thursday', '1E.12', item => {
  item.fullCredit = "States allergy to sulfonamide antibiotics (rash); does NOT require NKDA";
});
updateItem('Week3_Patient_C_Thursday', '1E.2', item => {
  item.fullCredit = "Documents current triple therapy (Symbicort + Spiriva or Trelegy Ellipta) + albuterol PRN";
});
updateItem('Week3_Patient_C_Thursday', '3A.12', item => {
  item.fullCredit = "Evaluates/refers for biologic therapy (anti-IL-5, e.g. mepolizumab) for persistent eosinophilic exacerbations";
});
updateItem('Week3_Patient_C_Thursday', '3C.7', item => {
  item.fullCredit = "Identifies biologic candidacy for severe eosinophilic phenotype on triple therapy";
});
updateItem('Week3_Patient_C_Thursday', '4A.2', item => {
  item.fullCredit = "Refers for biologic therapy (anti-IL-5, e.g. mepolizumab) and restarts intranasal fluticasone";
});
updateItem('Week3_Patient_C_Thursday', '5C.3', item => {
  item.fullCredit = "Synthesizes biologic therapy referral with ongoing triple inhaled maintenance";
});
updateItem('Week3_Patient_C_Thursday', '2A.1', item => {
  item.fullCredit = "States BP 124/72 (or 122/70)";
});
updateItem('Week3_Patient_C_Thursday', '2A.3', item => {
  item.fullCredit = "States HR 76 bpm";
});
updateItem('Week3_Patient_C_Thursday', '2A.6', item => {
  item.fullCredit = "States RR 16/min";
});
updateItem('Week3_Patient_C_Thursday', '2A.7', item => {
  item.fullCredit = "States SpO2 96% (with or without 'on room air')";
});
updateItem('Week3_Patient_C_Thursday', '2B.1', item => {
  item.fullCredit = "States FEV1 1.45 L (58% pred), FEV1/FVC 0.57";
});
updateItem('Week3_Patient_C_Thursday', '2B.3', item => {
  item.fullCredit = "States absolute eosinophils 380 cells/µL (elevated, supporting biologic candidacy)";
});
updateItem('Week3_Patient_C_Thursday', '3A.2', item => {
  item.fullCredit = "Documents 2 exacerbations in past 12 months (one requiring hospitalization) and ongoing dyspnea on triple therapy";
});
updateItem('Week3_Patient_C_Thursday', '3D.2', item => {
  item.fullCredit = "Identifies treatment failure on triple inhaled therapy and supports biologic therapy";
});

// ==================== SECTION NORMALIZATION ALGORITHM ====================
// Target totals per major section:
// Sec 1 (Subjective): 25.00
// Sec 2 (Objective): 15.00
// Sec 3 (Assessment): 30.00
// Sec 4 (Plan): 25.00
// Sec 5 (Format / Comm): 5.00
// Grand Total: 100.00
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
    const sectionItems = rub.filter(item => {
      const sec = (item.section ? String(item.section) : item.id[0]);
      return sec === s;
    });

    if (sectionItems.length === 0) continue;

    const currentSum = sectionItems.reduce((acc, item) => acc + item.points, 0);
    const targetSum = targets[s];
    const factor = targetSum / currentSum;

    // Scale each item
    for (const item of sectionItems) {
      item.points = Math.round(item.points * factor * 100) / 100;
    }

    // Adjust residual on the item with largest points
    const scaledSum = sectionItems.reduce((acc, item) => acc + item.points, 0);
    const residual = Math.round((targetSum - scaledSum) * 100) / 100;

    if (Math.abs(residual) > 0.0001) {
      // Find item with largest points
      let largest = sectionItems[0];
      for (const it of sectionItems) {
        if (it.points > largest.points) largest = it;
      }
      largest.points = Math.round((largest.points + residual) * 100) / 100;
    }
  }
}

// Write back to file
fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2) + '\n', 'utf8');

// Verify all 9 rubrics
console.log('Verifying all Week 3 rubrics after update and normalization:');
let allPassed = true;
for (const key of w3Keys) {
  const rub = rubrics[key];
  const sectionSums = {};
  let total = 0;
  for (const it of rub) {
    const s = it.section ? String(it.section) : it.id[0];
    sectionSums[s] = (sectionSums[s] || 0) + it.points;
    total += it.points;
  }
  total = Math.round(total * 100) / 100;

  console.log(`${key}: Total = ${total.toFixed(2)} | Sec1: ${sectionSums['1']?.toFixed(2)}, Sec2: ${sectionSums['2']?.toFixed(2)}, Sec3: ${sectionSums['3']?.toFixed(2)}, Sec4: ${sectionSums['4']?.toFixed(2)}, Sec5: ${sectionSums['5']?.toFixed(2)}`);

  if (Math.abs(total - 100.0) > 0.001 ||
      Math.abs(sectionSums['1'] - 25.0) > 0.001 ||
      Math.abs(sectionSums['2'] - 15.0) > 0.001 ||
      Math.abs(sectionSums['3'] - 30.0) > 0.001 ||
      Math.abs(sectionSums['4'] - 25.0) > 0.001 ||
      Math.abs(sectionSums['5'] - 5.0) > 0.001) {
    allPassed = false;
  }
}

if (!allPassed) {
  console.error('ERROR: Normalization failed for one or more rubrics!');
  process.exit(1);
} else {
  console.log('SUCCESS: All 9 Week 3 rubrics now sum to EXACTLY 100.00 points (25/15/30/25/5)!');
}
