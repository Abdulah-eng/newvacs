import sys
filepath = 'src/data/patientsW5.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
target = 'export const W5_CASES = [sarahTue, sarahWed, sarahThu]'
if target not in content:
    print('Target not found')
    sys.exit(1)

with open('jessica.txt', 'r', encoding='utf-8') as f:
    jessica = f.read()
with open('david.txt', 'r', encoding='utf-8') as f:
    david = f.read()
new_export = 'export const W5_CASES = [sarahTue, sarahWed, sarahThu, jessicaTue, jessicaWed, jessicaThu, davidTue, davidWed, davidThu]\nexport const W5_RUBRICS = {}\n'
full_addition = jessica + '\n\n' + david + '\n\n' + new_export
new_content = content.replace(target, full_addition)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Successfully updated patientsW5.js! New length:', len(new_content))
