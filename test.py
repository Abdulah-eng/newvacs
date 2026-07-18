import re
content = open('c:/projects/newvacs/src/data/patientsW3.js', encoding='utf-8').read()
pat = r"id:\s*['\"](?:w3-)?sarah_t-tue['\"]"
print(re.findall(pat, content))
