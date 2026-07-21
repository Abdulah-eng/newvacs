const fs = require('fs');
const Anthropic = require('@anthropic-ai/sdk');

async function test() {
  try {
    const env = fs.readFileSync('.env.local', 'utf8');
    const key = env.match(/ANTHROPIC_API_KEY=(.*)/)[1].trim();
    const client = new Anthropic({ apiKey: key });

    const { buildSoapGradingPrompt } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/lib/ai/prompts.js');
    const granularRubricsStr = fs.readFileSync('./src/data/granular_rubrics.json', 'utf8');
    const granularRubrics = JSON.parse(granularRubricsStr);

    const rubricKey = Object.keys(granularRubrics)[0];

    const studentSoap = "Patient is doing well. BP 120/80. Plan: continue meds.";
    const hiddenInfoLog = [];
    const granularRubric = granularRubrics[rubricKey];
    const patientName = "Test Patient";
    const visitDay = 1;

    const systemPrompt = buildSoapGradingPrompt({
      studentSoap,
      hiddenInfoLog,
      granularRubric,
      patientName,
      visitDay
    });

    console.log("Sending to Anthropic... (this may take a while for Thinking models)");
    const response = await client.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 8192,
      system: systemPrompt + '\n\nIMPORTANT: You must respond ONLY with a valid JSON object. Do not include markdown code blocks, conversational text, or explanations before or after the JSON.',
      messages: [{ role: 'user', content: 'Grade the provided SOAP note based on the rubric and source set.' }],
    }, {
      headers: {
        'anthropic-beta': 'max-tokens-3-5-sonnet-2024-07-15'
      }
    });

    let text = response.content.find(b => b.type === 'text')?.text || '';
    
    // check if truncated
    console.log("Response stop_reason:", response.stop_reason);
    console.log("Text length:", text.length);
    console.log("Ends with:", text.slice(-20));

  } catch (e) {
    console.error('ERROR:', e.message, e);
  }
}
test();
