# VACS — Virtual Ambulatory Care Simulator (MVP)

An educational ambulatory-care EMR simulation for pharmacy (APPE) students.
Students review a sparse chart, **interview a simulated patient** to uncover
hidden history, document findings, assess, build a guideline-based plan, draft a
SOAP note, and (for preceptors) review gold-standard reasoning.

Built for the three Week 1 **Maria Gonzalez** encounters (Tuesday initial visit,
Wednesday 3-month follow-up, Thursday 6-month follow-up).

## Run locally

```bash
npm install
npm run dev      # local dev server (Vite prints the URL, usually http://localhost:5173)
```

Production build / preview:

```bash
npm run build
npm run preview
```

Requires Node 18+ (developed on Node 22).

## The learning loop

Review chart → Interview patient → Document subjective findings → Assess problems
→ Build plan → Draft SOAP note → Review preceptor rationale.

- **Hidden facts** (nonadherence, OTC ibuprofen, poor home-BP technique, infrequent
  glucose checks, diet, fears) never appear in the visible chart. They are only
  revealed by asking in the **Patient Interview** or by unlocking **Preceptor View**.
- All student work **autosaves to `localStorage`, keyed by case id** (`vacs::<id>`).
- **Reset** clears the current case. **Preceptor View** unlock code: `PRECEPTOR`.

## Project structure

```
src/
  App.jsx                     # view state machine: landing → dashboard → simulation
  main.jsx, index.css
  data/cases.js               # ALL case content (3 cases) — the source of truth
  lib/
    storage.js                # localStorage wrapper + case status
    interviewEngine.js        # rule-based standardized-patient (keyword match)
    soapGenerator.js          # deterministic SOAP draft from student inputs
    iconMap.js                # icon-name strings → lucide components; flag/alert styles
  components/
    LandingPage.jsx  CaseDashboard.jsx  SimulationShell.jsx
    ChartTabs.jsx             # Snapshot, Objective, Medications, Allergies, Vitals, Labs, Problem List
    SubjectiveTab.jsx  PatientInterviewTab.jsx  AssessmentTab.jsx  PlanTab.jsx
    ExtraTabs.jsx            # Guiding Questions + Counseling
    SOAPNoteTab.jsx  PreceptorView.jsx  ui.jsx
```

## Adding future cases

All clinical content lives in **`src/data/cases.js`**. To add a case:

1. Copy an existing case object (e.g. `caseTue`), give it a unique `id`.
2. Fill in the same top-level keys: `PATIENT`, `ENCOUNTER`, `VITALS`, `LABS`,
   `ALERTS`, `PROBLEMS`, `ALLERGIES`, `MEDICATIONS`, `IMMUNIZATIONS`,
   `SUBJECTIVE_DOCUMENTED`, `OBJECTIVE_EXTRA`, `INTERVIEW_FIELDS`,
   `INTERVIEW_KNOWLEDGE`, `ASSESSMENT_CARDS`, `PLAN_SECTIONS`, `PLAN_FREETEXT`,
   `GUIDING_QUESTIONS`, `COUNSELING`, `PRECEPTOR`, `INTERVIEW_SYSTEM_PROMPT`.
3. Add it to the `CASES` array at the bottom of the file. It will appear on the
   dashboard automatically.

Icons are stored as **strings** (e.g. `"HeartPulse"`) and colors as **hex without
`#`** (e.g. `"0d9488"`) so case data stays JSON-safe and can move to a database
or API later — swap `lib/storage.js` and import the data from your backend.

The interview engine is rule-based for this MVP. Each `INTERVIEW_KNOWLEDGE` entry
is `{ id, topic, field, keywords[], response }`; `field` links a revealed topic to
the matching `INTERVIEW_FIELDS` documentation box (drives the "discovered" tag).
`INTERVIEW_SYSTEM_PROMPT` is already structured so it can later be sent to an LLM.

## Assumptions made

- Only the two guideline **PDFs** were provided in this session; the referenced
  `PPMHealth.jsx`, `ppm-health-case-input-prompt.md`, Patient A `.docx` files, and
  teaching summaries were not present. All clinical content was built from the
  detailed case text in the build prompt and kept consistent with the AHA/ACC and
  ADA guideline logic described there. Generated values (e.g. specific lab/vital
  figures) follow the prompt; adjust any in `src/data/cases.js` as preferred.
- Built with **Vite + React + Tailwind** (JSX) per the established workflow, rather
  than Next.js, since no server/runtime features are needed for the MVP.
- `localStorage` is used for persistence (works in real local dev / deployment).
```
