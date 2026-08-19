#!/usr/bin/env python3
"""
Translate teacherNotes while preserving English quotes and proper names.
"""

import re

def translate_note(note):
    """Translate teacher note to English"""
    if not note:
        return note
    
    # Protect English single-quoted strings from translation
    protected_strings = []
    def protect_quotes(match):
        protected_strings.append(match.group(0))
        return f"__PROTECTED_{len(protected_strings)-1}__"
    
    note = re.sub(r"'[^']*'", protect_quotes, note)
    
    # Direct phrase-by-phrase translations
    translations = [
        ("确认 Zoom 设置正常。", "Check that Zoom settings are working."),
        ("孩子和家长都在镜头前。", "Both child and parent are on camera."),
        ("调整摄像头，让孩子的脸清晰可见。", "Adjust the camera so the child's face is clearly visible."),
        ("对家长说：「", "Tell the parent: '"),
        ("」", "'"),
        ("告诉孩子：「", "Tell the child: '"),
        ("今天我们只修正一个问题，不会贪多。", "Today we'll fix just one issue, we won't try to do too much."),
        ("提醒家长可以在旁边观摩，但请让孩子自己开口。", "Remind the parent they can observe from the side, but let the child speak themselves."),
        
        ("拿出一个水瓶（或在屏幕上展示图片）。", "Take out a water bottle (or show a picture on screen)."),
        ("指着瓶子问孩子：", "Point at the bottle and ask the child: "),
        ("引导孩子说", "Guide the child to say"),
        ("然后说：", "Then say: "),
        ("让孩子回答", "Have the child answer"),
        ("重复 2-3 次，", "Repeat 2-3 times "),
        ("让孩子熟悉", "to help the child get familiar with"),
        ("的搭配。", " patterns."),
        ("如果孩子说不完整，", "If the child doesn't say the complete sentence, "),
        ("教师补全句子让孩子跟读。", "teacher completes the sentence and has the child repeat."),
        
        ("在屏幕上或白板上写下错误句子：", "Write the incorrect sentences on screen or whiteboard: "),
        ("和", " and "),
        ("问孩子：", "Ask the child: "),
        ("这两句话对吗？", "Are these two sentences correct?"),
        ("等孩子思考后，", "After the child thinks, "),
        ("圈出错误部分", "circle the incorrect parts"),
        ("解释：", "Explain: "),
        ("去上学坐公交是习惯用法，说", "going to school by bus is an idiom, we say"),
        ("不加", " without"),
        ("职业身份前要加", "professions need"),
        ("所以是", " so it's"),
        ("改正后写：", "Write the corrections: "),
        ("让孩子跟读改正后的句子", "Have the child repeat the corrected sentences"),
        ("3 次。", " 3 times."),
        
        ("教师说一句，孩子跟读一句。", "Teacher says one sentence, child repeats one sentence."),
        ("每句重复 2 次。", "Each sentence repeated 2 times."),
        ("共 6-8 句短对话，", "Total 6-8 short dialogues, "),
        ("场景是办公室和教室。", "scenes are office and classroom."),
        ("包括那对关于瓶子的句子。", "Include those sentences about the bottle."),
        ("句子见下方【跟读句子】列表。", "See sentences in the spoken lines list below."),
        ("注意语调：", "Watch intonation: "),
        ("疑问句结尾上扬，", "questions rise at the end, "),
        ("陈述句平稳。", "statements stay level."),
        ("如果孩子某句卡住，", "If the child gets stuck on a sentence, "),
        ("教师拆分成小块再跟读。", "teacher breaks it into small chunks and has them repeat."),
        
        ("给孩子 3 个开放提示，", "Give the child 3 open-ended prompts, "),
        ("让孩子自己说完整句子，", "have the child say complete sentences themselves, "),
        ("不给选择题。", "don't give multiple choice."),
        ("家长可以用手机录像。", "Parent can record with their phone."),
        ("第一个提示：", "First prompt: "),
        ("第二个提示：", "Second prompt: "),
        ("第三个提示：", "Third prompt: "),
        ("期待输出：", "Expected output: "),
        ("或", " or "),
        ("如果孩子卡住，", "If the child gets stuck, "),
        ("教师给一个词提示（比如说", "teacher gives a word prompt (such as"),
        ("），", "), "),
        ("但不说完整句子。", "but don't say the complete sentence."),
        
        ("打开 /learn 页面，", "Open the /learn page, "),
        ("给孩子看试学周作业入口。", "show the child the trial week homework entry point."),
        ("这周的作业在这里，", "This week's homework is here, "),
        ("完成后系统会自动批改选择题，", "after you finish, the system will auto-grade the multiple choice, "),
        ("写作部分会有 AI 反馈。", "the writing section will have AI feedback."),
        ("孩子完成作业后，", "After the child finishes homework, "),
        ("我们会在微信群里同步进度。", "we'll sync progress in the WeChat group."),
        ("如果有问题随时联系。", "Feel free to contact us if there are any questions."),
        ("不提「小班课」等销售话术。", "Don't mention 'small group classes' or other sales talk."),
        
        ("做一个动作（比如写字），", "Do an action (such as writing), "),
        ("写下错误：", "Write the errors: "),
        ("指出缺少", "Point out the missing"),
        ("动词要加", "verb needs to add"),
        ("改正：", "Correct: "),
        
        ("孩子", "child"),
        ("教师", "teacher"),
        ("家长", "parent"),
    ]
    
    for chinese, english in translations:
        note = note.replace(chinese, english)
    
    # Restore protected strings
    for i, protected in enumerate(protected_strings):
        note = note.replace(f"__PROTECTED_{i}__", protected)
    
    return note

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and replace teacherNotes
    # Pattern: teacherNotes: "...",
    # Need to handle multiline and escaped quotes
    
    pattern = r'teacherNotes: "([^"]*(?:\\"[^"]*)*)"'
    
    def replace_note(match):
        original = match.group(1)
        # Unescape the string
        unescaped = original.replace('\\"', '"')
        translated = translate_note(unescaped)
        # Re-escape
        escaped = translated.replace('"', '\\"')
        return f'teacherNotes: "{escaped}"'
    
    content = re.sub(pattern, replace_note, content)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Teacher notes translated")

if __name__ == "__main__":
    main()
