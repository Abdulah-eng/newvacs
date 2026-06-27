-- =============================================================================
-- VACS — Virtual Ambulatory Care Simulator
-- Supabase PostgreSQL Schema — v1.0
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- =============================================================================

-- Enable UUID extension (already on by default in Supabase)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- 1. SCHOOLS (institutional customers / tenants)
-- =============================================================================
CREATE TABLE IF NOT EXISTS schools (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 2. PROFILES (extends Supabase auth.users)
-- Supabase auth handles password/email. This table stores role + school info.
-- =============================================================================
CREATE TABLE IF NOT EXISTS profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name     TEXT,
  email         TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'school_admin', 'content_reviewer', 'internal_admin', 'developer')),
  school_id     UUID REFERENCES schools(id) ON DELETE SET NULL,
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'invited')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-create profile row when a new auth user is created
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- =============================================================================
-- 3. COHORTS (groups of students assigned to a VACS run)
-- =============================================================================
CREATE TABLE IF NOT EXISTS cohorts (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  school_id     UUID REFERENCES schools(id) ON DELETE CASCADE,
  cohort_name   TEXT NOT NULL,
  start_date    DATE,
  end_date      DATE,
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Many-to-many: students belong to cohorts
CREATE TABLE IF NOT EXISTS cohort_members (
  cohort_id     UUID NOT NULL REFERENCES cohorts(id) ON DELETE CASCADE,
  user_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  enrolled_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (cohort_id, user_id)
);

-- =============================================================================
-- 4. WEEKS (the 5 weekly disease-state modules)
-- =============================================================================
CREATE TABLE IF NOT EXISTS weeks (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  week_number     INT NOT NULL CHECK (week_number BETWEEN 1 AND 5),
  title           TEXT NOT NULL,
  disease_states  TEXT[] NOT NULL,  -- e.g. ARRAY['Hypertension', 'Type 2 Diabetes']
  publish_status  TEXT NOT NULL DEFAULT 'draft' CHECK (publish_status IN ('draft', 'validated', 'published', 'archived')),
  cohort_id       UUID REFERENCES cohorts(id) ON DELETE SET NULL,  -- NULL = available to all cohorts
  available_from  TIMESTAMPTZ,  -- when the week becomes accessible to students
  guideline_links JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of { title, url, path, created_at }
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (week_number, cohort_id)
);

-- Note: We also require a storage bucket named 'guidelines' for PDF uploads.
-- INSERT INTO storage.buckets (id, name, public) VALUES ('guidelines', 'guidelines', true);

-- =============================================================================
-- 5. CONTENT PACKS (metadata for each week's uploaded clinical content)
-- =============================================================================
CREATE TABLE IF NOT EXISTS content_packs (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  week_id             UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  version             TEXT NOT NULL DEFAULT '1.0',
  validation_status   TEXT NOT NULL DEFAULT 'pending' CHECK (validation_status IN ('pending', 'passed', 'failed')),
  reviewer_id         UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reviewed_at         TIMESTAMPTZ,
  source_manifest     JSONB,   -- week_manifest.json contents
  quiz_blueprint      JSONB,   -- quiz_blueprint.json
  source_hierarchy    JSONB,   -- source_hierarchy.json
  validation_errors   JSONB,   -- array of error strings if failed
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 6. STUDENT WEEK PROGRESS (tracks per-student, per-week unlock state)
-- =============================================================================
CREATE TABLE IF NOT EXISTS student_week_progress (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id               UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id               UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  -- Day statuses: 'locked' | 'unlocked' | 'in_progress' | 'complete'
  mon_status            TEXT NOT NULL DEFAULT 'unlocked',
  tue_status            TEXT NOT NULL DEFAULT 'locked',
  wed_status            TEXT NOT NULL DEFAULT 'locked',
  thu_status            TEXT NOT NULL DEFAULT 'locked',
  fri_status            TEXT NOT NULL DEFAULT 'locked',
  weekly_complete       BOOLEAN NOT NULL DEFAULT FALSE,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, week_id)
);

-- =============================================================================
-- 7. QUIZ ATTEMPTS (Monday quiz — stores each attempt)
-- =============================================================================
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id         UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  attempt_number  INT NOT NULL DEFAULT 1,
  score           NUMERIC(5,2) NOT NULL,  -- 0.00 – 100.00
  passed          BOOLEAN NOT NULL DEFAULT FALSE,
  started_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  submitted_at    TIMESTAMPTZ
);

-- =============================================================================
-- 8. QUIZ QUESTION RESULTS (per-question breakdown for each attempt)
-- =============================================================================
CREATE TABLE IF NOT EXISTS quiz_question_results (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id      UUID NOT NULL REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id     TEXT NOT NULL,   -- matches question_id in content pack JSON
  question_text   TEXT,
  selected_answer TEXT,
  correct_answer  TEXT,
  is_correct      BOOLEAN NOT NULL DEFAULT FALSE,
  concept_tags    TEXT[],          -- e.g. ARRAY['HTN', 'first-line therapy']
  rationale       TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 9. PATIENT INTERVIEWS (AI interview sessions)
-- =============================================================================
CREATE TABLE IF NOT EXISTS patient_interviews (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id         UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  patient_id      TEXT NOT NULL,   -- 'patient_a' | 'patient_b' | 'patient_c'
  visit_day       TEXT NOT NULL CHECK (visit_day IN ('tue', 'wed', 'thu')),
  transcript      JSONB,           -- array of {role, content, timestamp} messages
  status          TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
  started_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at    TIMESTAMPTZ,
  UNIQUE (user_id, week_id, patient_id, visit_day)
);

-- =============================================================================
-- 10. HIDDEN INFO LOGS (tracks hidden information triggered or missed)
-- =============================================================================
CREATE TABLE IF NOT EXISTS hidden_info_logs (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  interview_id    UUID NOT NULL REFERENCES patient_interviews(id) ON DELETE CASCADE,
  hidden_info_id  TEXT NOT NULL,   -- matches id in Patient_*_Hidden_Info_Map.json
  discovered      BOOLEAN NOT NULL DEFAULT FALSE,
  trigger_question TEXT,           -- the student question that triggered disclosure
  missed          BOOLEAN NOT NULL DEFAULT FALSE,
  grading_impact  TEXT,            -- description of how it affected SOAP score
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 11. SOAP SUBMISSIONS (structured SOAP note per patient per day)
-- =============================================================================
CREATE TABLE IF NOT EXISTS soap_submissions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id         UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  patient_id      TEXT NOT NULL,
  visit_day       TEXT NOT NULL CHECK (visit_day IN ('tue', 'wed', 'thu')),
  interview_id    UUID REFERENCES patient_interviews(id) ON DELETE SET NULL,
  -- SOAP sections stored as text
  subjective      TEXT,
  objective       TEXT,
  assessment      TEXT,
  plan            TEXT,
  -- Plan sub-fields (structured)
  plan_pharmacologic      TEXT,
  plan_non_pharmacologic  TEXT,
  plan_monitoring         TEXT,
  plan_followup           TEXT,
  plan_counseling         TEXT,
  plan_referrals          TEXT,
  submitted_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, week_id, patient_id, visit_day)
);

-- =============================================================================
-- 12. SOAP GRADES (AI-generated scores and feedback per submission)
-- =============================================================================
CREATE TABLE IF NOT EXISTS soap_grades (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  soap_id           UUID NOT NULL REFERENCES soap_submissions(id) ON DELETE CASCADE UNIQUE,
  total_score       NUMERIC(5,2),           -- 0–100
  subjective_score  NUMERIC(5,2),           -- 0–20
  objective_score   NUMERIC(5,2),           -- 0–20
  assessment_score  NUMERIC(5,2),           -- 0–25
  plan_score        NUMERIC(5,2),           -- 0–30
  doc_quality_score NUMERIC(5,2),           -- 0–5
  missed_items      JSONB,                  -- array of {item, clinical_importance}
  unsafe_flags      JSONB,                  -- array of {recommendation, severity, explanation}
  strengths         TEXT,
  improvement_guidance TEXT,
  gold_standard_comparison TEXT,
  feedback_json     JSONB,                  -- full raw AI output for auditability
  graded_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 13. JOURNAL CLUB SUBMISSIONS (Friday responses)
-- =============================================================================
CREATE TABLE IF NOT EXISTS journal_club_submissions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id         UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  responses       JSONB NOT NULL,  -- {question_id: response_text, ...}
  submitted_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, week_id)
);

-- =============================================================================
-- 14. JOURNAL CLUB GRADES (AI-generated scores and feedback)
-- =============================================================================
CREATE TABLE IF NOT EXISTS journal_club_grades (
  id                          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id               UUID NOT NULL REFERENCES journal_club_submissions(id) ON DELETE CASCADE UNIQUE,
  total_score                 NUMERIC(5,2),   -- 0–100
  evidence_understanding_score NUMERIC(5,2),  -- 0–20
  patient_application_score   NUMERIC(5,2),   -- 0–25
  therapy_decision_score      NUMERIC(5,2),   -- 0–20
  monitoring_safety_score     NUMERIC(5,2),   -- 0–20
  organization_score          NUMERIC(5,2),   -- 0–15
  strengths                   TEXT,
  gaps                        TEXT,
  improvement_guidance        TEXT,
  feedback_json               JSONB,
  graded_at                   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 15. WEEKLY SUMMARIES (AI-generated after Friday completion)
-- =============================================================================
CREATE TABLE IF NOT EXISTS weekly_summaries (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  week_id           UUID NOT NULL REFERENCES weeks(id) ON DELETE CASCADE,
  summary_text      TEXT,
  score_rollup      JSONB,   -- {quiz_first, quiz_final, quiz_attempts, soap_scores: {...}, journal_score, overall}
  key_strengths     TEXT,
  reasoning_gaps    TEXT,
  missed_monitoring TEXT,
  missed_counseling TEXT,
  missed_hidden_info TEXT,
  guideline_review_topics TEXT,
  readiness_statement TEXT,
  recommendations   TEXT,
  generated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, week_id)
);

-- =============================================================================
-- 16. CUMULATIVE SUMMARIES (AI-generated after Week 5)
-- =============================================================================
CREATE TABLE IF NOT EXISTS cumulative_summaries (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id               UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  all_week_scores       JSONB,   -- array of weekly score rollups
  trend_data            JSONB,   -- quiz/SOAP/journal trends per week
  strongest_areas       TEXT,
  weakest_areas         TEXT,
  reasoning_gaps        TEXT,
  monitoring_gaps       TEXT,
  counseling_gaps       TEXT,
  interview_hidden_info_trend TEXT,
  improvement_statement TEXT,
  readiness_assessment  TEXT,
  final_recommendations TEXT,
  generated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 17. AI JOBS (tracks all AI requests for reliability and error review)
-- =============================================================================
CREATE TABLE IF NOT EXISTS ai_jobs (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_type        TEXT NOT NULL CHECK (job_type IN (
                    'soap_grading', 'journal_grading', 'weekly_summary',
                    'cumulative_summary', 'content_validation', 'patient_interview'
                  )),
  user_id         UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reference_id    UUID,    -- ID of the related submission/interview/etc.
  input_snapshot  JSONB,   -- Hashed or summarized input for debugging
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed', 'retrying')),
  error_message   TEXT,
  retry_count     INT NOT NULL DEFAULT 0,
  output_snapshot JSONB,   -- Raw AI response for auditability
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at    TIMESTAMPTZ
);

-- =============================================================================
-- 18. SCORE OVERRIDES (Internal Admin only — audit trail)
-- =============================================================================
CREATE TABLE IF NOT EXISTS score_overrides (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  override_type   TEXT NOT NULL CHECK (override_type IN ('soap', 'journal_club', 'quiz')),
  reference_id    UUID NOT NULL,  -- ID of soap_grades / journal_club_grades / quiz_attempts
  admin_id        UUID NOT NULL REFERENCES profiles(id) ON DELETE SET NULL,
  original_score  NUMERIC(5,2),
  override_score  NUMERIC(5,2),
  reason          TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- INDEXES for common query patterns
-- =============================================================================
CREATE INDEX idx_profiles_school_id ON profiles(school_id);
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_cohort_members_user_id ON cohort_members(user_id);
CREATE INDEX idx_cohort_members_cohort_id ON cohort_members(cohort_id);
CREATE INDEX idx_student_week_progress_user ON student_week_progress(user_id);
CREATE INDEX idx_student_week_progress_week ON student_week_progress(week_id);
CREATE INDEX idx_quiz_attempts_user_week ON quiz_attempts(user_id, week_id);
CREATE INDEX idx_quiz_question_results_attempt ON quiz_question_results(attempt_id);
CREATE INDEX idx_patient_interviews_user_week ON patient_interviews(user_id, week_id);
CREATE INDEX idx_hidden_info_logs_interview ON hidden_info_logs(interview_id);
CREATE INDEX idx_soap_submissions_user_week ON soap_submissions(user_id, week_id);
CREATE INDEX idx_journal_subs_user_week ON journal_club_submissions(user_id, week_id);
CREATE INDEX idx_ai_jobs_status ON ai_jobs(status);
CREATE INDEX idx_ai_jobs_user ON ai_jobs(user_id);

-- =============================================================================
-- AUTO-UPDATE updated_at TRIGGER
-- =============================================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_schools_updated_at BEFORE UPDATE ON schools FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_cohorts_updated_at BEFORE UPDATE ON cohorts FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_weeks_updated_at BEFORE UPDATE ON weeks FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_content_packs_updated_at BEFORE UPDATE ON content_packs FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER trg_swp_updated_at BEFORE UPDATE ON student_week_progress FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

-- =============================================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE cohorts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cohort_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE weeks ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_packs ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_week_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_question_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_interviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE hidden_info_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE soap_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE soap_grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_club_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_club_grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE cumulative_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE score_overrides ENABLE ROW LEVEL SECURITY;

-- Helper: get current user's role
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS TEXT AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Helper: is current user an admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT get_my_role() IN ('internal_admin', 'developer');
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ---- profiles ----
-- Users can read their own profile; admins can read all
CREATE POLICY "profiles_select" ON profiles FOR SELECT
  USING (id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');

-- Users can update their own profile
CREATE POLICY "profiles_update_own" ON profiles FOR UPDATE
  USING (id = auth.uid());

-- Only admins can insert (via invite flow) or update other profiles
CREATE POLICY "profiles_admin_all" ON profiles FOR ALL
  USING (is_admin());

-- ---- schools ----
CREATE POLICY "schools_select" ON schools FOR SELECT USING (TRUE); -- all authenticated users
CREATE POLICY "schools_admin_write" ON schools FOR ALL USING (is_admin());

-- ---- cohorts ----
CREATE POLICY "cohorts_select" ON cohorts FOR SELECT
  USING (
    is_admin()
    OR get_my_role() = 'school_admin'
    OR id IN (SELECT cohort_id FROM cohort_members WHERE user_id = auth.uid())
  );
CREATE POLICY "cohorts_admin_write" ON cohorts FOR ALL USING (is_admin());

-- ---- cohort_members ----
CREATE POLICY "cohort_members_select" ON cohort_members FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "cohort_members_admin_write" ON cohort_members FOR ALL USING (is_admin());

-- ---- weeks ----
CREATE POLICY "weeks_select_published" ON weeks FOR SELECT
  USING (publish_status = 'published' OR is_admin() OR get_my_role() IN ('school_admin', 'content_reviewer'));
CREATE POLICY "weeks_admin_write" ON weeks FOR ALL USING (is_admin());

-- ---- content_packs ----
CREATE POLICY "content_packs_select" ON content_packs FOR SELECT
  USING (is_admin() OR get_my_role() = 'content_reviewer');
CREATE POLICY "content_packs_write" ON content_packs FOR ALL
  USING (is_admin() OR get_my_role() = 'content_reviewer');

-- ---- student_week_progress ----
CREATE POLICY "swp_select_own" ON student_week_progress FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "swp_insert_own" ON student_week_progress FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "swp_update_own" ON student_week_progress FOR UPDATE
  USING (user_id = auth.uid() OR is_admin());

-- ---- quiz_attempts ----
CREATE POLICY "quiz_attempts_own" ON quiz_attempts FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "quiz_attempts_insert" ON quiz_attempts FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "quiz_attempts_admin_all" ON quiz_attempts FOR ALL USING (is_admin());

-- ---- quiz_question_results ----
CREATE POLICY "qqr_select" ON quiz_question_results FOR SELECT
  USING (
    attempt_id IN (SELECT id FROM quiz_attempts WHERE user_id = auth.uid())
    OR is_admin()
  );
CREATE POLICY "qqr_insert" ON quiz_question_results FOR INSERT
  WITH CHECK (
    attempt_id IN (SELECT id FROM quiz_attempts WHERE user_id = auth.uid())
  );

-- ---- patient_interviews ----
CREATE POLICY "interviews_own" ON patient_interviews FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "interviews_insert" ON patient_interviews FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "interviews_update_own" ON patient_interviews FOR UPDATE
  USING (user_id = auth.uid());

-- ---- hidden_info_logs ----
CREATE POLICY "hil_select" ON hidden_info_logs FOR SELECT
  USING (
    interview_id IN (SELECT id FROM patient_interviews WHERE user_id = auth.uid())
    OR is_admin()
  );
CREATE POLICY "hil_insert" ON hidden_info_logs FOR INSERT
  WITH CHECK (
    interview_id IN (SELECT id FROM patient_interviews WHERE user_id = auth.uid())
  );

-- ---- soap_submissions ----
CREATE POLICY "soap_sub_own" ON soap_submissions FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "soap_sub_insert" ON soap_submissions FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "soap_sub_admin_all" ON soap_submissions FOR ALL USING (is_admin());

-- ---- soap_grades ----
CREATE POLICY "soap_grades_own" ON soap_grades FOR SELECT
  USING (
    soap_id IN (SELECT id FROM soap_submissions WHERE user_id = auth.uid())
    OR is_admin()
  );
CREATE POLICY "soap_grades_admin_write" ON soap_grades FOR ALL USING (is_admin());

-- ---- journal_club_submissions ----
CREATE POLICY "jcs_own" ON journal_club_submissions FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "jcs_insert" ON journal_club_submissions FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- ---- journal_club_grades ----
CREATE POLICY "jcg_own" ON journal_club_grades FOR SELECT
  USING (
    submission_id IN (SELECT id FROM journal_club_submissions WHERE user_id = auth.uid())
    OR is_admin()
  );
CREATE POLICY "jcg_admin_write" ON journal_club_grades FOR ALL USING (is_admin());

-- ---- weekly_summaries ----
CREATE POLICY "ws_own" ON weekly_summaries FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "ws_admin_write" ON weekly_summaries FOR ALL USING (is_admin());

-- ---- cumulative_summaries ----
CREATE POLICY "cs_own" ON cumulative_summaries FOR SELECT
  USING (user_id = auth.uid() OR is_admin() OR get_my_role() = 'school_admin');
CREATE POLICY "cs_admin_write" ON cumulative_summaries FOR ALL USING (is_admin());

-- ---- ai_jobs ----
CREATE POLICY "ai_jobs_admin" ON ai_jobs FOR ALL USING (is_admin());
CREATE POLICY "ai_jobs_own_select" ON ai_jobs FOR SELECT USING (user_id = auth.uid());

-- ---- score_overrides ----
CREATE POLICY "overrides_admin" ON score_overrides FOR ALL USING (is_admin());

-- =============================================================================
-- SEED: Insert the 5 weeks (unpublished by default)
-- =============================================================================
INSERT INTO weeks (week_number, title, disease_states, publish_status) VALUES
  (1, 'Hypertension + Type 2 Diabetes',                    ARRAY['Hypertension', 'Type 2 Diabetes'],                     'draft'),
  (2, 'Hyperlipidemia + Chronic Kidney Disease',            ARRAY['Hyperlipidemia', 'Chronic Kidney Disease'],             'draft'),
  (3, 'Asthma + COPD',                                      ARRAY['Asthma', 'COPD'],                                       'draft'),
  (4, 'Heart Failure + Atrial Fibrillation + Anticoagulation', ARRAY['Heart Failure', 'Atrial Fibrillation', 'Anticoagulation'], 'draft'),
  (5, 'Depression + Anxiety + Tobacco Cessation',           ARRAY['Depression', 'Anxiety', 'Tobacco Cessation'],           'draft');
