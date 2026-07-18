import os
import docx
import json
import re

base_dir = r"C:\projects\newvacs\VACS Full Project Folder"
output = {}

for root, _, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.docx') and 'Patient' in f and ('Tuesday' in f or 'Wednesday' in f or 'Thursday' in f):
            path = os.path.join(root, f)
            try:
                doc = docx.Document(path)
            except:
                continue
            
            questions = []
            capture_next = False
            
            for p in doc.paragraphs:
                text = p.text.strip()
                if not text: continue
                
                if capture_next:
                    q_text = text.strip('"\'')
                    if q_text and not q_text.lower().startswith('expected') and len(q_text) > 10:
                        questions.append(q_text)
                    capture_next = False
                    continue
                
                # Match "Question 1", "Question 2", etc.
                if re.match(r'^Question\s*\d+$', text, re.IGNORECASE):
                    capture_next = True
                elif re.match(r'^Question\s*\d+\s*[:-]', text, re.IGNORECASE):
                    # Sometimes it's "Question 1: What..."
                    parts = re.split(r'[:-]', text, 1)
                    if len(parts) > 1:
                        q_text = parts[1].strip(' \t\n\r"\'')
                        if len(q_text) > 10:
                            questions.append(q_text)
            output[path] = questions

with open('guiding_questions.json', 'w') as f:
    json.dump(output, f, indent=2)
print('Done!')
