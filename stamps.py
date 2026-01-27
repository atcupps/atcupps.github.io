import webbrowser
import os

raw = input("Enter raw stamp string, including quotation marks and brackets.\n> ")

# parse raw input to get 2-D array of 1s and 0s
stamp = eval(raw[1:-1])
header = '''<svg width="128" height="128" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="1" fill="#F30000"/>'''
rects = []
footer = '</svg>'

# initial reading in
def not_corner(x, y) -> bool:
    if (x, y) == (0, 0) or (x, y) == (15, 0) or (x, y) == (0, 15) or (x, y) == (15, 15):
        return False
    return True

for y, line in enumerate(stamp):
    for x, pixel in enumerate(line):
        if not_corner(x, y) and pixel == 0:
            rects.append(f'<rect x="{x}" y="{y}" width="1" height="1" fill="black"/>')

# get file name
name = input("Enter the name for this stamp. Don't include '.svg' or any path.\n> ")
filepath = f"images/stamps/{name}.svg"

# write to file
with open(filepath, "w") as file:
    file.write(header)
    file.writelines(rects)
    file.write(footer)
    file.close()

# open in browser
full_path = os.path.realpath(filepath)
url = f"file://{full_path}"
webbrowser.open_new_tab(url)

# proceed?
proceed = input("Proceed? y/n\n> ").lower()
if proceed != 'y':
    exit(0)

# block corners?
block_tl = input("Block out top-left? y/n\n> ").lower()
if block_tl == 'y':
    rects.append('<rect x="0" y="0" width="1" height="1" fill="black"/>')
block_tr = input("Block out top-right? y/n\n> ").lower()
if block_tr == 'y':
    rects.append('<rect x="15" y="0" width="1" height="1" fill="black"/>')
block_bl = input("Block out bottom-left? y/n\n> ").lower()
if block_bl == 'y':
    rects.append('<rect x="0" y="15" width="1" height="1" fill="black"/>')
block_br = input("Block out bottom-right? y/n\n> ").lower()
if block_br == 'y':
    rects.append('<rect x="15" y="15" width="1" height="1" fill="black"/>')

# write to file
with open(filepath, "w") as file:
    file.write(header)
    file.writelines(rects)
    file.write(footer)
    file.close()

# open in browser
full_path = os.path.realpath(filepath)
url = f"file://{full_path}"
webbrowser.open_new_tab(url)

# approve?
approved = input("Approve and write to index.html? (y/n)\n> ").lower()
if approved != 'y':
    exit(0)

# date
date = input("Enter date in M/D/YYYY format.\n> ")

# write to index.html
result = []
with open('index.html', 'r') as file:
    for line in file:
        if line.strip() != "<!-- STAMPS END -->":
            result.append(line)
        else:
            result.append('                <div class="stamp-and-label">\n')
            result.append('                    <div class="stamp">\n')
            result.append(f'                        <img src="{filepath}" width="100%" height="100%" />\n')
            result.append('                    </div>\n')
            result.append('                    <span>\n')
            result.append(f'                        {name} <br> {date}\n')
            result.append('                    </span>\n')
            result.append('                </div>\n')
            result.append('                <!-- STAMPS END -->\n')
    
    file.close()

with open('index.html', 'w') as file:
    file.writelines(result)
    file.close()

# show in browser
full_path = os.path.realpath('index.html')
url = f"file://{full_path}"
webbrowser.open_new_tab(url)