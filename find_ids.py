import re
import glob

for f in glob.glob('c:/projects/newvacs/src/data/*.js'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    matches = re.findall(r'id:\s*[\'"]([^\'"]+-(?:tue|wed|thu))[\'"]', content)
    if matches: print(f, matches)
