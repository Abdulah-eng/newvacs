export const CAPSTONE_TOPIC_MASH = {
  id: 'capstone-mash-resmetirom',
  title: 'Resmetirom (Rezdiffra) in MASH',
  
  assignmentGuide: {
    overview: 'This is your final Capstone assignment. You will write a Grand Rounds manuscript evaluating a new drug.',
    deliverable: 'One .docx manuscript, uploaded to the VACS site.',
    formatting: 'Arial 11-point, single-spaced, 1-inch margins, AMA numbered citations, a references page at the end, no page limit.',
    audience: 'A pharmacy department Grand Rounds (students, pharmacists, faculty).',
    requiredArticles: [
      { citation: 'MAESTRO-NASH (Efficacy trial)', link: '#' },
      { citation: 'MAESTRO-NAFLD-1 (Safety trial)', link: '#' },
      { citation: 'AASLD Practice Guidance', link: '#' }
    ],
    requiredSections: [
      { number: 1, title: 'Disease State Background' },
      { number: 2, title: 'Pharmacology' },
      { number: 3, title: 'Pivotal Efficacy Trial' },
      { number: 4, title: 'Safety Trial' },
      { number: 5, title: 'Clinical Implementation' },
      { number: 6, title: 'Place in Therapy and Formulary Recommendation' },
      { number: 7, title: 'Patient Counseling and Ambulatory Care Pharmacy Application' }
    ]
  },

  // Mock rubric - wait for real rubric from content authors
  rubric: {
    totalPoints: 100,
    sections: [
      {
        id: '1', title: 'Disease State Background', points: 10,
        inputs: [
          { id: '1.1', text: 'Define MASH accurately', pts: 5, fullCredit: 'Accurate definition', halfCredit: 'Partial definition', zeroCredit: 'Missing or incorrect' },
          { id: '1.2', text: 'Discuss epidemiology', pts: 5, fullCredit: 'Accurate epidemiology', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '2', title: 'Pharmacology', points: 10,
        inputs: [
          { id: '2.1', text: 'Mechanism of action', pts: 10, fullCredit: 'Accurate MOA', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '3', title: 'Pivotal Efficacy Trial (MAESTRO-NASH)', points: 25,
        inputs: [
          { id: '3.1', text: 'Study design and population', pts: 10, fullCredit: 'Accurate details', halfCredit: 'Partial', zeroCredit: 'Missing' },
          { id: '3.2', text: 'Primary endpoints and results', pts: 15, fullCredit: 'Accurate details', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '4', title: 'Safety Trial (MAESTRO-NAFLD-1)', points: 15,
        inputs: [
          { id: '4.1', text: 'Safety endpoints and results', pts: 15, fullCredit: 'Accurate details', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '5', title: 'Clinical Implementation (AASLD Guidance)', points: 15,
        inputs: [
          { id: '5.1', text: 'Guideline recommendations', pts: 15, fullCredit: 'Accurate details', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '6', title: 'Place in Therapy and Formulary Recommendation', points: 10,
        inputs: [
          { id: '6.1', text: 'Clear recommendation supported by evidence', pts: 10, fullCredit: 'Strong justification', halfCredit: 'Weak justification', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '7', title: 'Patient Counseling and Ambulatory Care Application', points: 10,
        inputs: [
          { id: '7.1', text: 'Counseling points', pts: 10, fullCredit: 'Accurate counseling', halfCredit: 'Partial', zeroCredit: 'Missing' }
        ]
      },
      {
        id: '8', title: 'Presentation Quality', points: 5,
        inputs: [
          { id: '8.1', text: 'Formatting, organization, and citations', pts: 5, fullCredit: 'Excellent', halfCredit: 'Adequate', zeroCredit: 'Poor' }
        ]
      }
    ]
  },

  // Mock discussion questions
  discussionQuestions: [
    {
      id: 'q1',
      question: 'How would your recommendation change if the patient had severe renal impairment?',
      modelAnswer: 'Resmetirom has not been studied in severe renal impairment, so caution or alternative therapy may be warranted depending on the clinical context.',
      conceptsTested: ['Renal dosing', 'Clinical judgment'],
      difficulty: 'Medium'
    },
    {
      id: 'q2',
      question: 'Can you elaborate on the long-term safety concerns based on the mechanism of action?',
      modelAnswer: 'As a thyroid hormone receptor beta agonist, long-term cardiovascular or bone density effects should be monitored, although the beta selectivity aims to minimize these.',
      conceptsTested: ['Mechanism of action', 'Long-term safety'],
      difficulty: 'Hard'
    }
  ]
};
