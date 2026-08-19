#!/usr/bin/env python3
"""
Translate lesson plan Chinese content to English.
This script processes the lesson plans file and translates:
- titles
- fossil descriptions
- section names
- durations
- teacherNotes
"""

import re
import sys

# Translation dictionaries
SECTION_NAMES = {
    "课前": "Prep",
    "热身": "Warm-up",
    "高频错误": "High-frequency error",
    "化石": "High-frequency error",
    "示范": "I do",
    "跟读": "Echo",
    "带练": "We do",
    "开口": "Speak",
    "练习": "Practice",
    "收口": "Close",
}

def translate_duration(chinese_duration):
    """Convert '2 分钟' to '2 min'"""
    return re.sub(r'(\d+)\s*分钟', r'\1 min', chinese_duration)

def translate_title(title):
    """Translate bilingual titles, keep English parts"""
    # If it's already mostly English with a Chinese prefix, translate the Chinese part
    # Examples to handle:
    # "办公室的瓶子 — Is this your bottle?" -> "The bottle in the office — Is this your bottle?"
    # "现在进行时 — What are you doing?" -> "Present continuous — What are you doing?"
    
    translations = {
        "办公室的瓶子": "The bottle in the office",
        "现在进行时": "Present continuous",
        "可数与不可数": "Countable and uncountable",
        "过去简单式": "Past simple",
        "将来式": "Future tense",
        "情态动词": "Modal verbs",
        "比较级": "Comparatives",
        "最高级": "Superlatives",
        "现在完成时": "Present perfect",
        "被动语态": "Passive voice",
        "条件句": "Conditionals",
        "间接引语": "Reported speech",
    }
    
    for chinese, english in translations.items():
        if chinese in title:
            title = title.replace(chinese, english)
    
    return title

def translate_fossil(fossil):
    """Translate fossil/error descriptions to English"""
    if not fossil:
        return fossil
    
    # Keep the error examples but translate descriptions
    fossil = fossil.replace("零冠词与定冠词：", "Articles: ")
    fossil = fossil.replace("高频错误：", "High-frequency error: ")
    fossil = fossil.replace("化石错误：", "High-frequency error: ")
    fossil = fossil.replace("常见错误：", "Common error: ")
    
    return fossil

def translate_teacher_notes(notes):
    """Translate teacher notes to English"""
    # This is complex - for now, return as-is and we'll handle manually
    # or with more sophisticated translation
    return notes

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Translate section names in quoted strings
    for chinese, english in SECTION_NAMES.items():
        # Match "name": "课前", style
        content = re.sub(
            f'(name":\\s*")({chinese})(")',
            f'\\1{english}\\3',
            content
        )
    
    # Translate durations
    content = re.sub(r'(\d+)\s*分钟', r'\1 min', content)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Phase 1 complete: section names and durations translated")
    print("Phase 2: Manual translation of titles, fossils, and teacherNotes required")

if __name__ == "__main__":
    main()
