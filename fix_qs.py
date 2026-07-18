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
        # In week 2-5, the internal IDs might have `w2-` prefixed if the ID in week2.js doesn't.
        # But we don't know if the file uses prefix or not. We'll handle it.
        updates[(week_num, pat_id, day_short)] = questions

for f in glob.glob('c:/projects/newvacs/src/data/*.js'):
    if 'week' in os.path.basename(f) and not 'patientsW' in os.path.basename(f):
        continue
    if os.path.basename(f) not in ['cases.js', 'patientsBC.js', 'patientsW2.js', 'patientsW3.js', 'patientsW4.js', 'patientsW5.js']:
        continue
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original_content = content
    
    # Split content by "makeCase({" or similar to process each case individually
    # Actually, splitting by `id: 'something'` is easier.
    # Let's find all case blocks.
    parts = re.split(r"(id:\s*['\"][a-zA-Z0-9_-]+['\"])", content)
    # parts[0] is everything before the first id
    # parts[1] is the first id
    # parts[2] is the body of the first case
    # parts[3] is the second id, etc.
    
    for i in range(1, len(parts), 2):
        id_str = parts[i]
        body = parts[i+1]
        
        # Extract the actual ID
        actual_id = re.search(r"['\"]([a-zA-Z0-9_-]+)['\"]", id_str).group(1)
        
        # Determine week_num, pat_id, day_short from actual_id
        # Examples: "maria-tue", "w3-sarah_t-wed"
        m = re.match(r"(?:w(\d)-)?(.*)-(tue|wed|thu)", actual_id)
        if not m:
            continue
        week_num = m.group(1)
        pat_id = m.group(2)
        day_short = m.group(3)
        
        if not week_num:
            # For Week 1, the file is cases.js or patientsBC.js, week_num is '1'
            week_num = '1'
            
        key = (week_num, pat_id, day_short)
        
        if key in updates:
            questions = updates[key]
            qs_str = ',\n    '.join([f"'{q.replace('\"', '').replace('\'', '\\\'')}'" for q in questions])
            replacement = f"GUIDING_QUESTIONS: [\n    {qs_str}\n  ]"
            
            # Remove any existing GUIDING_QUESTIONS block in this body
            body = re.sub(r'GUIDING_QUESTIONS:\s*\[.*?\](,\n|\n|,)', '', body, flags=re.DOTALL)
            
            # Now insert it
            insert_match = re.search(r'\n\s*INTERVIEW_KNOWLEDGE:', body)
            if not insert_match:
                insert_match = re.search(r'\n\s*PLAN_SECTIONS:', body)
                
            if insert_match:
                body = body[:insert_match.start()] + f",\n  {replacement},\n" + body[insert_match.start():]
                # clean up double commas if any
                body = body.replace(',\n,\n', ',\n')
                parts[i+1] = body
                print(f"Updated {f} for {actual_id}")
            else:
                print(f"Could not find insertion point in {actual_id}")
                
    new_content = "".join(parts)
    if new_content != original_content:
        # clean up any stray double commas
        new_content = new_content.replace('],,\n', '],\n').replace('],\n,\n', '],\n')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Saved {f}")

print("All done!")
