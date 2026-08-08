const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Load .env.local
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[key] = value;
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function resetSubmissions() {
  console.log('Fetching ALL soap_submissions...');

  const { data: submissions, error } = await supabase
    .from('soap_submissions')
    .select('id, user_id, week_id, patient_id, visit_day');

  if (error) {
    console.error('Error fetching submissions:', error);
    return;
  }

  console.log(`Total soap_submissions in DB: ${submissions.length}`);
  submissions.forEach(s => console.log(` - ID: ${s.id}, Week: ${s.week_id}, Patient: ${s.patient_id}, Day: ${s.visit_day}, User: ${s.user_id}`));

  if (submissions.length === 0) {
    console.log('No submissions found in DB.');
  } else {
    const submissionIds = submissions.map(s => s.id);

    // 1. Delete grades
    const { data: deletedGrades, error: gradeErr } = await supabase
      .from('soap_grades')
      .delete()
      .in('soap_id', submissionIds)
      .select();

    if (gradeErr) {
      console.error('Error deleting grades:', gradeErr);
    } else {
      console.log(`Deleted ${deletedGrades ? deletedGrades.length : 0} soap_grades records.`);
    }

    // 2. Delete submissions
    const { data: deletedSubs, error: subErr } = await supabase
      .from('soap_submissions')
      .delete()
      .in('id', submissionIds)
      .select();

    if (subErr) {
      console.error('Error deleting submissions:', subErr);
    } else {
      console.log(`Deleted ${deletedSubs ? deletedSubs.length : 0} soap_submissions records.`);
    }
  }

  // 3. Reset student_week_progress
  const { data: deletedProgress, error: progErr } = await supabase
    .from('student_week_progress')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000')
    .select();
    
  if (progErr) {
    console.log('Note on student_week_progress delete:', progErr.message);
  } else {
    console.log(`Reset ${deletedProgress ? deletedProgress.length : 0} student_week_progress records.`);
  }

  console.log('SUCCESS: All submissions, grades, and progress records have been reset for all students!');
}

resetSubmissions();
