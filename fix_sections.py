#!/usr/bin/env python3
import re

input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Section name translations
replacements = [
    ('name: "课前",', 'name: "Prep",'),
    ('name: "热身",', 'name: "Warm-up",'),
    ('name: "高频错误",', 'name: "High-frequency error",'),
    ('name: "化石",', 'name: "High-frequency error",'),
    ('name: "示范",', 'name: "I do",'),
    ('name: "跟读",', 'name: "Echo",'),
    ('name: "带练",', 'name: "We do",'),
    ('name: "开口",', 'name: "Speak",'),
    ('name: "练习",', 'name: "Practice",'),
    ('name: "收口",', 'name: "Close",'),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(input_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Section names translated")
