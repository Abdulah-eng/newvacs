import re
import glob
import json
import os

patient_mapping = {}

for f in glob.glob('c:/projects/newvacs/src/data/week*.js'):
    week_match = re.search(r'week(\d)', os.path.basename(f))
    if not week_match: continue
    week_num = week_match.group(1)
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    for match in re.finditer(r'key:\s*[\'"]([A-C])[\'"].*?id:\s*[\'"]([^\'"]+)[\'"]', content):
        letter = match.group(1)
        pat_id = match.group(2)
        patient_mapping[f"Week {week_num} Patient {letter}"] = pat_id

with open('guiding_questions.json', 'r') as f:
    qs = json.load(f)

updates = {} 
for path, questions in qs.items():
    if not questions: continue
    
    week_match = re.search(r'Week (\d)', path)
    if not week_match: continue
    week_num = week_match.group(1)
    
    pat_match = re.search(r'Patient ([A-C])', path)
    if not pat_match: continue
    pat_letter = pat_match.group(1)
    
    day_short = 'tue'
    if 'Wednesday' in path: day_short = 'wed'
    elif 'Thursday' in path: day_short = 'thu'
    
    key = f"Week {week_num} Patient {pat_letter}"
    if key in patient_mapping:
        pat_id = patient_mapping[key]
        updates[(week_num, pat_id, day_short)] = questions

for f in glob.glob('c:/projects/newvacs/src/data/*.js'):
    if 'week' in os.path.basename(f) and not 'patientsW' in os.path.basename(f):
        continue
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original_content = content
    
    for (week_num, pat_id, day_short), questions in updates.items():
        search_id_pattern = rf"id:\s*['\"](?:w{week_num}-)?{pat_id}-{day_short}['\"]"
        parts = re.split(search_id_pattern, content)
        
        if len(parts) == 2:
            match = re.search(r'GUIDING_QUESTIONS:\s*\[(.*?)\]', parts[1], flags=re.DOTALL)
            qs_str = ',\n    '.join([f"'{q.replace('\"', '').replace('\'', '\\\'')}'" for q in questions])
            replacement = f"GUIDING_QUESTIONS: [\n    {qs_str}\n  ]"
            
            if match:
                parts[1] = parts[1][:match.start()] + replacement + parts[1][match.end():]
                content = parts[0] + re.search(search_id_pattern, content).group(0) + parts[1]
                print(f"Updated {f} for {pat_id}-{day_short} (replaced)")
            else:
                insert_match = re.search(r'\n\s*INTERVIEW_KNOWLEDGE:', parts[1])
                if not insert_match:
                    insert_match = re.search(r'\n\s*PLAN_SECTIONS:', parts[1])
                if insert_match:
                    parts[1] = parts[1][:insert_match.start()] + f",\n  {replacement}" + parts[1][insert_match.start():]
                    content = parts[0] + re.search(search_id_pattern, content).group(0) + parts[1]
                    print(f"Updated {f} for {pat_id}-{day_short} (inserted)")
                else:
                    print(f"Failed to find insertion point for {pat_id}-{day_short}")

    if content != original_content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Saved {f}")

print("All done!")
