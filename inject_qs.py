import re
import glob
import json
import os

patient_mapping = {}

# 1. Parse week*.js to find patient mappings
for f in glob.glob('c:/projects/newvacs/src/data/week*.js'):
    week_match = re.search(r'week(\d)', os.path.basename(f))
    if not week_match: continue
    week_num = week_match.group(1)
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # match { key: "A", id: "robert_j", name: ... }
    for match in re.finditer(r'key:\s*[\'"]([A-C])[\'"].*?id:\s*[\'"]([^\'"]+)[\'"]', content):
        letter = match.group(1)
        pat_id = match.group(2)
        patient_mapping[f"Week {week_num} Patient {letter}"] = pat_id

print("Patient Mapping:", patient_mapping)

with open('guiding_questions.json', 'r') as f:
    qs = json.load(f)

# 2. Map word doc paths to internal IDs
# Word docs look like:
# "C:\projects\newvacs\VACS Full Project Folder\Week 1 HTN + T2DM\Patient A\Patient A Tuesday.docx"
# "C:\projects\newvacs\VACS Full Project Folder\Week 2 HLD + CKD\Patient A\Patient A Tuesday.docx"

updates = {} # id -> questions

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
        
        # In week 2-5, the internal IDs might have `w2-` prefixed if the ID in week2.js doesn't.
        # Let's handle prefixing when we do the replacement.
        
        updates[(week_num, pat_id, day_short)] = questions

print("Updates to apply:", list(updates.keys()))

# 3. Apply updates to the JS files
for f in glob.glob('c:/projects/newvacs/src/data/*.js'):
    if 'week' in os.path.basename(f) and not 'patientsW' in os.path.basename(f):
        continue
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original_content = content
    
    for (week_num, pat_id, day_short), questions in updates.items():
        # The internal ID in the file could be `pat_id-day_short` or `wX-pat_id-day_short`
        # E.g. `w2-michael_t-tue` or `maria-tue`
        
        search_id_pattern = rf"id:\s*['\"](?:w{week_num}-)?{pat_id}-{day_short}['\"]"
        
        # We need to find the object with this ID, and replace its GUIDING_QUESTIONS array
        # Regex to find: id: 'w2-michael-tue', ... GUIDING_QUESTIONS: [...]
        # This is hard because there could be nested brackets.
        
        # Let's split by the search pattern
        parts = re.split(search_id_pattern, content)
        if len(parts) == 2:
            # We found the ID! The GUIDING_QUESTIONS will be in parts[1].
            # Find the next `GUIDING_QUESTIONS: [` and its closing bracket.
            
            match = re.search(r'GUIDING_QUESTIONS:\s*\[(.*?)\]', parts[1], flags=re.DOTALL)
            if match:
                qs_str = ',\n    '.join([f"'{q.replace('\"', '').replace('\'', '\\\'')}'" for q in questions])
                replacement = f"GUIDING_QUESTIONS: [\n    {qs_str}\n  ]"
                
                parts[1] = parts[1][:match.start()] + replacement + parts[1][match.end():]
                content = parts[0] + re.search(search_id_pattern, content).group(0) + parts[1]
                print(f"Updated {f} for {pat_id}-{day_short}")
        elif len(parts) > 2:
            print(f"WARNING: Multiple matches for {pat_id}-{day_short} in {f}")
            
    if content != original_content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Saved {f}")

print("All done!")
