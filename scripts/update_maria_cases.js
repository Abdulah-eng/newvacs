const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'patientsW3.js');
let content = fs.readFileSync(filePath, 'utf8');
const normalized = content.replace(/\r\n/g, '\n');

const mariaWedStart = normalized.indexOf('const mariaWed =');
const casesExportStart = normalized.indexOf('export const W3_CASES =');

if (mariaWedStart === -1 || casesExportStart === -1) {
  console.error('Could not locate mariaWed or W3_CASES export in patientsW3.js');
  process.exit(1);
}

const mariaWedAndThuCode = `const mariaWed = makeCase({
  id: 'w3-maria_t-wed',
  PATIENT: { ...mariaTue.PATIENT },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I'm using the new triple inhaler every day perfectly, but I still had another flare-up last month.",
    snapshotSummary: 'Maria was escalated to triple therapy (Trelegy). She is perfectly adherent with great technique, but she is still exacerbating. Eosinophils remain high.',
    diseaseStates: ['ACO', 'Allergic Rhinitis', 'Hypertension', 'Osteopenia'],
    learningObjectives: ['Identify biologic candidacy for severe eosinophilic exacerbating disease (MATINEE)', 'Implement corticosteroid stewardship and comorbidity management in severe ACO'],
  },
  VITALS: { bp: '126/74', bpRepeat: '124/72', hr: '80', rr: '18', temp: '98.6°F', weight: '71 kg', height: "5'4\\"", bmi: '26.9', bsa: '1.79', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '520', unit: 'cells/µL', flag: 'high', note: 'Rising from baseline 420 — highly elevated, supports biologic candidacy' },
    { label: 'FEV1', value: '1.52', unit: 'L (61% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.56', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FVC', value: '2.71', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Continued exacerbations despite optimized triple inhaled therapy. Eosinophils rising to 520 — strongly supports biologic (anti-IL-5) candidacy.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Severe eosinophilic, frequent exacerbations despite verified adherence on Trelegy Ellipta', flag: 'high' },
    { name: 'Asthma', detail: 'Childhood-onset (diagnosed age 7), severe persistent component', flag: 'high' },
    { name: 'COPD', detail: 'Diagnosed ~8 years ago, post-BD FEV1/FVC 0.56, 30 pack-year smoking history', flag: 'warn' },
    { name: 'Allergic rhinitis', detail: 'Symptomatic / uncontrolled after stopping nasal corticosteroid', flag: 'warn' },
    { name: 'Hypertension', detail: 'Controlled on lisinopril 10 mg daily (BP 126/74)', flag: 'normal' },
    { name: 'Osteopenia', detail: 'At elevated fracture risk from repeated systemic OCS bursts', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Fluticasone/Umeclidinium/Vilanterol (Trelegy Ellipta)', dose: '100/62.5/25 mcg', route: 'Inhaled', freq: '1 inhalation daily in morning', indication: 'Severe ACO maintenance', notes: 'Verified excellent adherence and technique' },
    { name: 'Albuterol HFA', dose: '90 mcg (2 puffs)', route: 'Inhaled', freq: 'q4-6h PRN shortness of breath', indication: 'Rescue bronchodilator', notes: 'Uses 3-4 times/week' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'BP at goal <130/80' },
    { name: 'Calcium carbonate + Vitamin D3', dose: '500 mg / 400 IU', route: 'PO', freq: 'BID with meals', indication: 'Osteopenia / bone health', notes: 'Continue for skeletal protection' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  ALLERGIES: [{ substance: 'Sulfonamide antibiotics', reaction: 'Rash', severity: 'Moderate', type: 'Allergy', date: 'Past', source: 'Patient reported' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Maria presents for 3-month follow-up for severe Asthma-COPD Overlap (ACO). She reports persistent exertional dyspnea, daily cough with clear sputum, and had 1 moderate exacerbation 4 weeks ago treated with oral prednisone (40 mg daily x 5 days) and antibiotics, totaling 2 exacerbations in past 12 months (one requiring hospitalization). She experiences severe insomnia and jitteriness when taking prednisone and strongly desires to avoid future oral corticosteroid bursts. She confirms daily adherence to Trelegy Ellipta 100/62.5/25 mcg (uses every morning, verified Ellipta technique, rinses mouth with water after each use) and uses rescue albuterol 3–4 times weekly. Allergic rhinitis symptoms (sneezing, rhinorrhea, nasal congestion) are active and uncontrolled since stopping fluticasone nasal spray 6 months ago.' },
    { label: 'Past Medical History', value: '1. Asthma: diagnosed in childhood at age 7, severe persistent component.\\n2. Chronic Obstructive Pulmonary Disease (COPD): diagnosed ~8 years ago, post-BD FEV1/FVC 0.56, 30 pack-year smoking history.\\n3. Allergic Rhinitis: ~15 years duration, worsened without nasal spray.\\n4. Hypertension: ~10 years duration, stable on lisinopril 10 mg daily.\\n5. Osteopenia: ~3 years duration, at elevated risk from repeated OCS bursts.\\nNo other chronic medical conditions beyond those listed.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (laparoscopic gallbladder removal age 58). Denies prior cardiothoracic, pulmonary, or vascular surgeries.' },
    { label: 'Social history', value: 'Former cigarette smoker (1 pack/day for 30 years = 30 pack-years; quit 12 years ago; denies cravings or tobacco use). Denies recreational or illicit drug use. Drinks alcohol rarely (1 glass of wine 2–3 times/year). Retired elementary-school principal; lives with supportive spouse. Physical activity: walks 20–30 minutes daily around neighborhood for exercise, though limited by exertional dyspnea when walking uphill or climbing stairs.' },
    { label: 'Medication Reconciliation & Affordability', value: 'Reconciled 5 active medications: Trelegy Ellipta 100/62.5/25 mcg 1 inh daily, albuterol HFA 90 mcg 2 puffs q4-6h PRN, cetirizine 10 mg PO daily, lisinopril 10 mg PO daily, calcium carbonate 500 mg + vit D3 400 IU PO BID. Confirms all medications are affordable ($20 copay for Trelegy). Denies adverse drug effects (no tremors, palpitations, oral thrush, or dysphonia).' },
    { label: 'Patient Goals', value: 'Highly motivated to reduce or eliminate future exacerbations, avoid oral prednisone bursts and their unpleasant side effects (insomnia, jitteriness), prevent hospitalizations, and maintain daily walking independence.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Vitals', value: 'BP 126/74 mmHg (sitting, right arm), HR 80 bpm regular, RR 18 breaths/min unlabored, Temp 98.6°F oral, SpO2 95% on room air', flag: 'normal' },
    { label: 'Spirometry', value: 'FEV1 1.52 L (61% predicted, GOLD Grade 2 moderate obstruction), FEV1/FVC 0.56 (<0.70 confirming persistent airflow obstruction, post-bronchodilator)', flag: 'warn' },
    { label: 'Biomarkers', value: 'Absolute blood eosinophils 520 cells/µL (elevated Type 2 airway inflammation, rising from 420 cells/µL, exceeding the >=300 cells/µL threshold)', flag: 'high' },
    { label: 'ACT Score', value: '17 — Partly controlled asthma component (<20 threshold)', flag: 'warn' },
    { label: 'CAT Score', value: '15 — Moderate COPD symptom burden (>=10 threshold)', flag: 'warn' },
    { label: 'Immunization Status', value: 'Influenza (current season) and COVID-19 up to date; PCV20 received last year. Gaps flagged: RSV vaccine not documented (recommended for age >=60 with chronic lung disease); Tdap booster overdue (>10 years since last tetanus toxoid).', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence / Technique', placeholder: 'Are you sure she is taking it?' },
    { key: 'goals', label: 'Patient Goals & Steroid Concerns', placeholder: 'What are her goals regarding treatment?' },
  ],
  COUNSELING: [
    { id: 'c1', title: 'Targeted Biologic Therapy & Steroid Stewardship', body: [
      "Your breathing tests and lab results show rising blood eosinophils (520 cells/µL) and ongoing flare-ups despite perfect use of your triple inhaler. We recommend stepping up to an add-on targeted biologic therapy (mepolizumab / Nucala) that specifically blocks eosinophilic inflammation, proven in the MATINEE trial to reduce flare-ups and prevent the need for prednisone bursts and their side effects." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence confirms that current triple inhaled therapy is insufficient?',
    'Why is biologic therapy (anti-IL-5, mepolizumab) indicated for this patient?',
    'How does the MATINEE trial support mepolizumab in eosinophilic COPD/ACO?',
    'What corticosteroid stewardship and comorbidity management goals should be addressed?',
    'What structured monitoring and follow-up plan should be established?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'sulfonamide', 'codeine', 'reaction', 'rash', 'hives'], response: "Yes, I have a severe allergy to sulfonamide antibiotics — I get a terrible rash when I take them." },
    { id: 'w3-maria_t-wed_pmh', topic: 'Medical history', field: 'pmh', keywords: ['past medical history', 'history', 'asthma', 'copd', 'diagnosed', 'duration', 'childhood', 'years'], response: "I have had asthma since childhood (diagnosed around age 7). About 8 years ago, I was also diagnosed with COPD due to my past smoking history. I also have allergic rhinitis for about 15 years, hypertension for 10 years, and osteopenia diagnosed 3 years ago. No other medical conditions." },
    { id: 'w3-maria_t-wed_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'gallbladder', 'cholecystectomy'], response: "I had my gallbladder removed (laparoscopic cholecystectomy) when I was 58. I have never had any lung, chest, or heart surgeries." },
    { id: 'w3-maria_t-wed_meds', topic: 'Current medications & Affordability', field: 'medications', keywords: ['medications', 'reconciliation', 'trelegy', 'albuterol', 'cetirizine', 'lisinopril', 'calcium', 'vitamin d', 'cost', 'copay', 'afford'], response: "I take Trelegy Ellipta 100/62.5/25 mcg 1 puff every morning, albuterol HFA 2 puffs as needed for rescue, cetirizine 10 mg daily for allergies, lisinopril 10 mg daily for blood pressure, and calcium carbonate 500 mg with vitamin D3 400 IU twice daily for my bones. My copay for Trelegy is $20 with insurance, so all my medicines are affordable." },
    { id: 'w3-maria_t-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take cetirizine 10 mg daily and calcium with vitamin D. I used to use fluticasone nasal spray for allergic rhinitis, but I stopped it about 6 months ago, and now my sneezing and congestion are terrible." },
    { id: 'w3-maria_t-wed_pred', topic: 'Prednisone side effects & Steroid concerns', field: 'steroids', keywords: ['prednisone', 'burst', 'side effects', 'insomnia', 'jittery', 'steroid', 'corticosteroid'], response: "Whenever I have a flare-up and have to take prednisone, I get terrible insomnia and severe jitteriness. It makes me feel awful, and I worry about what repeated steroid bursts are doing to my bones since I already have osteopenia. My biggest goal is to stop having these flare-ups so I never have to take prednisone again." },
    { id: 'w3-maria_t-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 30 years before I quit 12 years ago. That\\'s a 30 pack-year history. I never smoke anymore and have zero cravings." },
    { id: 'w3-maria_t-wed_drugs', topic: 'Illicit drug use denial', field: 'drugs', keywords: ['drug', 'drugs', 'illicit', 'recreational', 'marijuana', 'cocaine', 'substance'], response: "No, I have never used any recreational or illicit drugs." },
    { id: 'w3-maria_t-wed_activity', topic: 'Physical activity & Exercise', field: 'activity', keywords: ['exercise', 'walk', 'walking', 'activity', 'physical'], response: "I try to walk 20 to 30 minutes every day around my neighborhood. I get winded and have to slow down when walking uphill or climbing stairs, but I want to stay active." },
    { id: 'w3-maria_t-wed_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['technique', 'trelegy', 'inhaler', 'show', 'demonstrate', 'how', 'ellipta', 'use', 'steps'], response: "I open the cover by sliding it down until I hear a click, which loads the dose. Then I breathe out fully away from the inhaler, seal my lips around the mouthpiece, and breathe in steadily and deeply. I hold my breath for about 5 seconds, then close the cover. I rinse my mouth with water afterward every time." },
    { id: 'w3-maria_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had both COPD and coronary artery disease (CAD). My mother had asthma and allergic rhinitis. My sister also has asthma." },
    { id: 'w3c2_adh', topic: 'Adherence verified', field: 'adherence', keywords: ['take', 'every day', 'daily', 'miss'], response: "I never miss a dose. I use it every morning exactly like you showed me. I even rinse my mouth after." },
    { id: 'w3-maria_t-wed_goals', topic: 'Patient goals & motivation', field: 'goals', keywords: ['goal', 'goals', 'motivation', 'want', 'hope', 'future'], response: "My main goals are to stop having flare-ups, stay out of the hospital, avoid prednisone and its terrible jitteriness and insomnia, and be able to walk without getting winded." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3c2_a1', 
      title: 'Severe Eosinophilic ACO & Biologic Candidacy Assessment', 
      icon: 'Microscope', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'Biologic Candidacy & ACO Assessment: How should persistent exacerbations with eosinophils 520 cells/µL despite verified adherence on triple therapy be managed?',
          defaultAnswer: 'Severe eosinophilic Asthma-COPD Overlap (ACO) with persistent exacerbations (2 in past 12 months, 1 hospitalization, 1 course 4 weeks ago) and rising blood eosinophils (520 cells/µL, exceeding the >=300 cells/µL threshold) despite verified daily adherence and excellent inhaler technique on optimized triple therapy (Trelegy Ellipta 100/62.5/25 mcg daily). Patient meets GINA 2025 Step 5 and GOLD 2026 criteria for add-on biologic therapy. Recommend initiating or referring for anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg SQ once every 4 weeks) based on robust evidence from the MATINEE trial demonstrating significant reductions in annualized exacerbation rates in patients with eosinophilic chronic airway disease.' 
        },
        {
          key: 'q2',
          q: 'Corticosteroid Stewardship & Comorbidities: What clinical strategies address OCS adverse burden, allergic rhinitis, and bone health?',
          defaultAnswer: 'Corticosteroid stewardship is a paramount priority: patient experiences severe insomnia and jitteriness with prednisone, and cumulative systemic OCS exposure confers substantial risk for osteopenia progression, fractures, and metabolic toxicity. Mepolizumab provides proven OCS-sparing efficacy to eliminate or reduce future bursts. For comorbidities: restart intranasal fluticasone propionate (50 mcg 1-2 sprays each nostril daily) to control active allergic rhinitis and reduce upper-airway triggers; continue calcium carbonate 500 mg + vitamin D3 400 IU BID and order baseline DEXA bone mineral density screening for osteopenia; continue lisinopril 10 mg daily for hypertension (BP 126/74 at goal <130/80); and address immunization gaps (recommend RSV vaccination and administer Tdap booster overdue >10 years per CDC/GINA).'
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w3c2_p1', 
      title: 'Biologic Escalation & Inhaled Triple Maintenance Plan', 
      options: [
        { 
          key: 'o1', 
          label: 'Biologic Escalation: Initiate mepolizumab (Nucala) 100 mg subcutaneous injection once every 4 weeks per MATINEE trial evidence; continue Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily; continue albuterol HFA 90 mcg 2 puffs q4-6h PRN for rescue bronchodilation.', 
          correct: true 
        },
        { 
          key: 'o2', 
          label: 'Switch to a different brand of triple therapy without biologic referral', 
          correct: false 
        },
        { 
          key: 'o3', 
          label: 'Start chronic daily maintenance oral prednisone 10 mg daily', 
          correct: false 
        },
      ] 
    },
    {
      id: 'w3c2_p2',
      title: 'Corticosteroid Stewardship & Comorbidity Management Plan',
      options: [
        {
          key: 'o1',
          label: 'Corticosteroid Stewardship & Action Plan: Establish explicit goal to reduce and eliminate future systemic OCS exposure; acknowledge patient concerns regarding insomnia/jitteriness; provide updated written Asthma-COPD Action Plan with clear criteria for prompt clinical evaluation. Allergic Rhinitis: Restart fluticasone propionate nasal spray 50 mcg 1-2 sprays per nostril once daily with head tilted slightly forward; continue cetirizine 10 mg PO daily; review environmental allergen avoidance. Bone Health: Continue calcium carbonate 500 mg with vitamin D3 400 IU PO BID with meals; order screening DEXA scan to evaluate bone mineral density given cumulative OCS exposure.',
          correct: true
        }
      ]
    },
    {
      id: 'w3c2_p3',
      title: 'Preventive Care, Monitoring & Longitudinal Follow-Up Plan',
      options: [
        {
          key: 'o1',
          label: 'Preventive Care: Recommend RSV vaccination (single dose for chronic lung disease age >=60); administer Tdap booster (overdue >10 years); confirm up-to-date status for influenza, COVID-19, and PCV20 to prevent infectious exacerbations. Structured Monitoring: Monitor ACT score, CAT score, exacerbation frequency, systemic OCS requirements, rescue albuterol use frequency, eosinophil trending, inhaler adherence, and biologic safety (injection site reactions, counsel on anaphylaxis symptoms). Follow-Up: Schedule follow-up in 12–16 weeks (3–4 months) for formal biologic efficacy evaluation per GINA 2025; reassess symptom control, review vaccination completion, and evaluate treatment tolerability.',
          correct: true
        }
      ]
    }
  ],
})

const mariaThu = makeCase({
  id: 'w3-maria_t-thu',
  PATIENT: { ...mariaTue.PATIENT },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I'm using all my inhalers but I still had another flare-up.",
    snapshotSummary: 'Maria is on Symbicort and Spiriva but continues to have frequent exacerbations. Eosinophils remain elevated.',
    diseaseStates: ['ACO', 'Allergic Rhinitis', 'Hypertension', 'Osteopenia'],
    learningObjectives: ['Evaluate persistent exacerbations on ICS/LABA + LAMA', 'Assess biologic therapy candidacy', 'Implement corticosteroid stewardship and vaccine optimization in severe ACO'],
  },
  ALLERGIES: [{ substance: 'Sulfonamide antibiotics', reaction: 'Rash', severity: 'Moderate', type: 'Allergy', date: 'Past', source: 'Patient reported' }],
  VITALS: { bp: '124/72', bpRepeat: '122/70', hr: '76', rr: '16', temp: '98.6°F', weight: '71 kg', height: "5'4\\"", bmi: '26.9', bsa: '1.79', spo2: '96%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '380', unit: 'cells/µL', flag: 'high', note: 'Elevated Type 2 airway inflammation, exceeds >=300 cells/µL threshold' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator, GOLD Grade 2 moderate obstruction' },
    { label: 'FEV1/FVC', value: '0.57', flag: 'warn', note: 'Post-bronchodilator, persistent airflow obstruction' },
    { label: 'FVC', value: '2.54', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Persistent exacerbations on triple therapy (ICS/LABA + LAMA). Eosinophils 380 — consider biologic escalation per GINA Step 5.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Exacerbating on Symbicort + Spiriva, 2 exacerbations in past 12 months (1 hospitalization)', flag: 'high' },
    { name: 'Asthma', detail: 'Childhood-onset (diagnosed age 7), severe persistent component', flag: 'high' },
    { name: 'COPD', detail: 'Diagnosed ~8 years ago, post-BD FEV1/FVC 0.57, 30 pack-year smoking history', flag: 'warn' },
    { name: 'Allergic rhinitis', detail: 'Uncontrolled after stopping intranasal fluticasone', flag: 'warn' },
    { name: 'Hypertension', detail: 'Controlled on lisinopril 10 mg daily (BP 124/72)', flag: 'normal' },
    { name: 'Osteopenia', detail: 'At risk from cumulative systemic OCS bursts, on calcium + vit D', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '2 puffs BID', indication: 'ACO maintenance', notes: 'Confirmed adherence' },
    { name: 'Tiotropium (Spiriva Respimat)', dose: '2.5 mcg', route: 'Inhaled', freq: '2 puffs daily', indication: 'ACO maintenance', notes: 'Confirmed adherence' },
    { name: 'Albuterol HFA', dose: '90 mcg (2 puffs)', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue bronchodilator', notes: 'Uses 3-4 times/week' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Calcium carbonate + Vitamin D3', dose: '500 mg / 400 IU', route: 'PO', freq: 'BID with meals', indication: 'Osteopenia prevention', notes: 'Contains vitamin D 400 IU per tablet' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'BP controlled' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient presents for 3-month follow-up reporting persistent exertional dyspnea, wheezing, nighttime awakenings 1-2 times/week, and 2 exacerbations in the past 12 months (one requiring hospitalization) despite verified adherence to Symbicort and Spiriva Respimat. Allergic rhinitis is uncontrolled since patient stopped intranasal fluticasone. Confirms taking all doses and using rescue albuterol frequently (3-4 times/week).' },
    { label: 'Past Medical History', value: '1. Asthma: diagnosed in childhood at age 7, severe persistent component.\\n2. Chronic Obstructive Pulmonary Disease (COPD): diagnosed ~8 years ago, post-BD FEV1/FVC 0.57, 30 pack-year smoking history.\\n3. Allergic Rhinitis: ~15 years duration, worsened without nasal spray.\\n4. Hypertension: ~10 years duration, stable on lisinopril 10 mg daily.\\n5. Osteopenia: ~3 years duration, at elevated risk from repeated OCS bursts.\\nNo other chronic medical conditions.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (laparoscopic gallbladder removal age 58). Denies prior thoracic, cardiac, or lung surgeries.' },
    { label: 'Social history', value: 'Former cigarette smoker (1 pack/day for 30 years = 30 pack-years; quit 12 years ago; denies cravings or tobacco use). Denies recreational or illicit drug use. Drinks alcohol rarely (1 glass of wine 2–3 times/year). Retired elementary-school principal; lives with supportive spouse. Physical activity: walks 20–30 minutes daily around neighborhood for exercise, though limited by exertional dyspnea when walking uphill or climbing stairs.' },
    { label: 'Medication Reconciliation & Affordability', value: 'Reconciled 6 active medications: Symbicort 160/4.5 mcg 2 puffs BID, Spiriva Respimat 2.5 mcg 2 puffs daily, albuterol HFA 90 mcg 2 puffs q4-6h PRN, cetirizine 10 mg daily, lisinopril 10 mg daily, calcium carbonate 500 mg with vit D3 400 IU BID. Confirms medications are affordable ($20 copays). Denies adverse drug effects (no tremors, palpitations, oral thrush, or dysphonia).' },
    { label: 'Patient Goals', value: 'Highly motivated to improve respiratory symptom control, reduce exacerbations, avoid repeated oral prednisone bursts and hospitalizations, and maintain daily functional ability.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Vitals', value: 'BP 124/72 mmHg, HR 76 bpm regular, RR 16 breaths/min unlabored, Temp 98.6°F oral, SpO2 96% on room air', flag: 'normal' },
    { label: 'Spirometry', value: 'FEV1 1.45 L (58% predicted, GOLD Grade 2 moderate obstruction), FEV1/FVC 0.57 (<0.70 confirming persistent airflow obstruction, post-bronchodilator)', flag: 'warn' },
    { label: 'Biomarkers', value: 'Absolute blood eosinophils 380 cells/µL (elevated Type 2 airway inflammation, exceeds >=300 cells/µL threshold)', flag: 'high' },
    { label: 'CAT Score', value: '18 — High COPD symptom burden (>=10 threshold)', flag: 'warn' },
    { label: 'ACT Score', value: '14 — Poorly controlled asthma component (<20 threshold)', flag: 'warn' },
    { label: 'Immunization Status', value: 'Influenza (current season) and COVID-19 up to date; PCV20 received last year. Gaps flagged: RSV vaccine not documented (recommended for age >=60 with chronic lung disease); Tdap booster overdue (>10 years since last tetanus toxoid).', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How has she been feeling?' },
    { key: 'goals', label: 'Patient Goals & Steroid Concerns', placeholder: 'What are her goals regarding treatment?' },
  ],
  COUNSELING: [
    { id: 'c1', title: 'Biologic Escalation & Comprehensive Airway Care', body: [
      "Because you are still experiencing frequent flare-ups and poor control despite using three inhaled medications (ICS/LABA + LAMA), and your blood eosinophils remain elevated at 380 cells/µL, guideline-directed therapy recommends adding a targeted injectable biologic (mepolizumab / Nucala) to reduce flare-ups, preserve lung function, and avoid prednisone bursts." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence suggests current triple inhaled therapy is insufficient?',
    'Why is biologic therapy (anti-IL-5) indicated for this patient per GINA Step 5?',
    'How should her uncontrolled allergic rhinitis be managed?',
    'What corticosteroid stewardship and bone health strategies are indicated?',
    'What structured monitoring and vaccine plans should be implemented?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I have a severe allergy to sulfonamide antibiotics. I get a terrible rash." },
    { id: 'w3-maria_t-thu_pmh', topic: 'Medical history', field: 'pmh', keywords: ['past medical history', 'history', 'asthma', 'copd', 'diagnosed', 'duration', 'childhood', 'years'], response: "I have had asthma since childhood (diagnosed at age 7). About 8 years ago, I was diagnosed with COPD from my past smoking history. I also have allergic rhinitis for ~15 years, hypertension for ~10 years, and osteopenia for ~3 years. No other medical conditions." },
    { id: 'w3-maria_t-thu_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'cholecystectomy', 'gallbladder'], response: "I had my gallbladder removed (cholecystectomy) a few years ago. No lung, heart, or chest surgeries." },
    { id: 'w3-maria_t-thu_meds', topic: 'Current medications & Affordability', field: 'medications', keywords: ['medications', 'reconciliation', 'symbicort', 'spiriva', 'albuterol', 'cetirizine', 'lisinopril', 'calcium', 'vitamin d', 'cost', 'copay', 'afford'], response: "I take Symbicort 160/4.5 mcg 2 puffs twice daily, Spiriva Respimat 2.5 mcg 2 puffs once daily, albuterol HFA as needed, cetirizine 10 mg daily, lisinopril 10 mg daily, and calcium carbonate 500 mg with vitamin D3 400 IU twice daily. Everything is affordable with my insurance copays ($20 each)." },
    { id: 'w3-maria_t-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin', 'fluticasone', 'spray'], response: "I take cetirizine 10 mg daily and calcium with vitamin D. I stopped the intranasal fluticasone because I kept forgetting to use it, and now my allergies are completely uncontrolled." },
    { id: 'w3-maria_t-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 30 years. I quit 12 years ago. That\\'s a 30 pack-year history. I never smoke anymore and have zero cravings." },
    { id: 'w3-maria_t-thu_drugs', topic: 'Illicit drug use denial', field: 'drugs', keywords: ['drug', 'drugs', 'illicit', 'recreational', 'marijuana', 'cocaine', 'substance'], response: "No, I have never used recreational or illicit drugs." },
    { id: 'w3-maria_t-thu_activity', topic: 'Physical activity & Exercise', field: 'activity', keywords: ['exercise', 'walk', 'walking', 'activity', 'physical'], response: "I try to walk 20 to 30 minutes every day around my neighborhood. I get winded walking uphill, but I try to keep moving." },
    { id: 'w3-maria_t-thu_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['technique', 'symbicort', 'spiriva', 'inhaler', 'show', 'demonstrate', 'how', 'respimat', 'ellipta', 'use', 'steps', 'correct'], response: "For the Symbicort, I shake it, breathe out fully, put it in my mouth and press the canister while breathing in slowly and deeply, then hold for 10 seconds. For the Spiriva Respimat, I turn the base until it clicks, press the button on the side to release the dose, and inhale slowly and deeply. I rinse my mouth after both inhalers." },
    { id: 'w3-maria_t-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had both COPD and coronary artery disease (CAD). My mother had asthma and allergic rhinitis. My sister also has asthma." },
    { id: 'w3c3_upd', topic: 'Update', field: 'update', keywords: ['feel', 'breathing', 'exacerbation', 'flare'], response: "I'm using the Symbicort and Spiriva exactly as prescribed, but I still had a flare-up last month and my breathing feels tight. My allergies are also acting up badly since I stopped the nasal spray." },
    { id: 'w3c3_vacc', topic: 'Vaccinations', field: 'vaccines', keywords: ['vaccine', 'vaccines', 'shot', 'flu', 'pneumonia'], response: "I'm not entirely sure which vaccines I'm due for. You'd have to check my chart to see if I need a pneumonia or flu shot." },
    { id: 'w3-maria_t-thu_goals', topic: 'Patient goals & motivation', field: 'goals', keywords: ['goal', 'goals', 'motivation', 'want', 'hope', 'future'], response: "My goals are to breathe easier, stop having these terrible flare-ups that put me in the hospital, avoid having to take prednisone bursts, and be able to walk comfortably." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3c3_a1', 
      title: 'Severe Eosinophilic ACO & Biologic Candidacy Assessment', 
      icon: 'AlertTriangle', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'Biologic Candidacy & ACO Assessment: What is the guideline-directed next step for severe eosinophilic ACO failing triple inhaled therapy?',
          defaultAnswer: 'Severe eosinophilic Asthma-COPD Overlap (ACO) failing triple inhaled therapy (Symbicort 160/4.5 mcg 2 puffs BID + Spiriva Respimat 2.5 mcg 2 puffs daily) with persistent symptoms (ACT 14, CAT 18), recurrent exacerbations (2 in past 12 months, 1 requiring hospitalization), and elevated blood eosinophils (380 cells/µL, exceeding the >=300 cells/µL threshold per GINA 2025 Step 5 and GOLD 2026). Candidate for add-on anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg SQ once every 4 weeks) based on MATINEE trial evidence demonstrating substantial reductions in annualized exacerbation rates.' 
        },
        {
          key: 'q2',
          q: 'Corticosteroid Stewardship & Comorbidities: How should allergic rhinitis, bone health, and vaccine gaps be managed?',
          defaultAnswer: 'Corticosteroid stewardship is essential to minimize repeated systemic OCS bursts and prevent long-term skeletal/osteopenia deterioration. Mepolizumab provides critical OCS-sparing efficacy. For comorbidities: restart fluticasone propionate nasal spray (50 mcg 1-2 sprays each nostril daily) to control active allergic rhinitis and eliminate upper-airway triggers; continue calcium carbonate 500 mg with vitamin D3 400 IU BID and order screening DEXA scan for bone health monitoring; continue lisinopril 10 mg daily for hypertension; and address immunization gaps (recommend RSV vaccination and administer Tdap booster overdue >10 years per CDC/GINA).'
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w3c3_p1', 
      title: 'Biologic Escalation & Inhaled Triple Maintenance Plan', 
      options: [
        { 
          key: 'o1', 
          label: 'Biologic Escalation: Refer for or initiate add-on anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg subcutaneous injection once every 4 weeks) per MATINEE trial evidence; maintain baseline inhaled therapy (Symbicort 160/4.5 mcg 2 puffs BID + Spiriva Respimat 2.5 mcg 2 puffs daily) and continue albuterol HFA 90 mcg 2 puffs q4-6h PRN for rescue bronchodilation.', 
          correct: true 
        },
        { 
          key: 'o2', 
          label: 'Continue current inhaled regimen and observe without biologic referral', 
          correct: false 
        },
      ] 
    },
    {
      id: 'w3c3_p2',
      title: 'Corticosteroid Stewardship & Comorbidity Management Plan',
      options: [
        {
          key: 'o1',
          label: 'Corticosteroid Stewardship & Action Plan: Establish explicit goal to minimize systemic corticosteroid bursts; acknowledge patient concerns; provide written Asthma-COPD Action Plan. Allergic Rhinitis: Restart fluticasone propionate nasal spray 50 mcg 1-2 sprays each nostril once daily; continue cetirizine 10 mg PO daily; review environmental allergen avoidance. Bone Health: Continue calcium carbonate 500 mg + vitamin D3 400 IU PO BID; order screening DEXA scan given repeated OCS exposure and osteopenia.',
          correct: true
        }
      ]
    },
    {
      id: 'w3c3_p3',
      title: 'Preventive Care, Monitoring & Longitudinal Follow-Up Plan',
      options: [
        {
          key: 'o1',
          label: 'Preventive Care: Recommend RSV vaccination (single dose for chronic lung disease); administer Tdap booster (overdue >10 years); confirm up-to-date status for influenza, COVID-19, and PCV20. Structured Monitoring: Monitor ACT score, CAT score, rescue inhaler use frequency, nighttime awakenings, exacerbation frequency, OCS requirements, medication adherence, inhaler technique, and biologic safety (injection site reactions, anaphylaxis). Follow-Up: Schedule follow-up in 4–12 weeks (3–4 months for formal biologic efficacy assessment); reassess asthma/COPD control scores and evaluate treatment tolerability.',
          correct: true
        }
      ]
    }
  ],
})
`;

const before = normalized.slice(0, mariaWedStart);
const after = normalized.slice(casesExportStart);

const updatedNormalized = before + mariaWedAndThuCode + '\n' + after;

// Convert back to CRLF
const updatedContent = updatedNormalized.replace(/\n/g, '\r\n');

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully updated Maria Wednesday and Thursday cases in patientsW3.js!');

