#!/usr/bin/env python3
"""
Translate the most common Chinese phrases found in lesson plans.
"""

import re

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # High-frequency translations - order matters! Do longer phrases first
    translations = [
        # Multi-character common phrases first
        ('这是化石错误', 'This is a high-frequency error'),
        ('期待答案', 'Expected answer'),
        ('不用计算器', 'without calculator'),
        ('打开屏幕共享', 'Open screen share'),
        ('写出推理步骤', 'Write out reasoning steps'),
        ('数学卷型', 'math paper format'),
        ('标记为', 'mark as'),
        ('微课例题', 'BoardWeike example'),
        ('高频错误', 'High-frequency error'),
        ('关键问题', 'Key questions'),
        ('在屏幕上', 'On screen'),
        ('例题', 'example problem'),
        ('周已完成', 'week completed'),
        
        # Common verbs and phrases
        ('不教', "don't teach"),
        ('只教', 'only teach'),
        ('如果', 'If'),
        ('答案', 'answer'),
        ('内容', 'content'),
        ('步骤', 'steps'),
        ('强调', 'emphasize'),
        ('引导', 'guide'),
        ('不是', 'not'),
        ('问', 'ask'),
        ('等', 'wait'),
        ('练习', 'practice'),
        ('重点', 'focus'),
        ('小时', 'hour'),
        ('总结', 'summary'),
        ('写', 'write'),
        ('再写', 'write again'),
        ('题目', 'problem'),
        ('指出', 'point out'),
        ('用', 'use'),
        ('微课', 'BoardWeike'),
        ('提醒', 'remind'),
        ('规则', 'rule'),
        ('的推理', ' reasoning'),
        ('例如', 'For example'),
        ('次', 'times'),
        ('是', 'is'),
        ('给', 'give'),
        ('官方', 'official'),
        ('错误', 'error'),
        ('周', 'week'),
        ('一句', 'one sentence'),
        ('有', 'has'),
        ('的', ''),  # Possessive particle, often can be omitted
        ('题', 'problem'),
        ('第', 'Week'),  # When used as ordinal
        
        # Chinese punctuation
        ('，', ', '),
        ('。', '. '),
        ('：', ': '),
        ('；', '; '),
        ('！', '! '),
        ('？', '? '),
    ]
    
    for chinese, english in translations:
        content = content.replace(chinese, english)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Common phrases translated")

if __name__ == "__main__":
    main()
