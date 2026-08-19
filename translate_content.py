#!/usr/bin/env python3
"""
Comprehensive translation of lesson plan content.
Handles titles, fossils, and teacherNotes.
"""

import re
import json

def translate_title(title):
    """Translate Chinese portions of bilingual titles"""
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
        "不定式与动名词": "Infinitives and gerunds",
        "关系从句": "Relative clauses",
        "虚拟语气": "Subjunctive mood",
        "连词": "Conjunctions",
        "介词": "Prepositions",
        "副词": "Adverbs",
        "形容词": "Adjectives",
        "代词": "Pronouns",
        "疑问句": "Questions",
        "否定句": "Negatives",
        "祈使句": "Imperatives",
        "感叹句": "Exclamations",
        "时态": "Tenses",
        "语态": "Voice",
        "语气": "Mood",
        "句型": "Sentence patterns",
    }
    
    result = title
    for chinese, english in translations.items():
        result = result.replace(chinese, english)
    
    return result

def translate_fossil(fossil):
    """Translate fossil descriptions"""
    if not fossil:
        return fossil
    
    # Keep error examples but translate descriptions
    result = fossil.replace("零冠词与定冠词：", "Articles: ")
    result = result.replace("零冠词与定冠词", "Articles")
    result = result.replace("高频错误：", "High-frequency error: ")
    result = result.replace("化石错误：", "High-frequency error: ")
    result = result.replace("常见错误：", "Common error: ")
    
    return result

def translate_teacher_note(note):
    """Translate teacher notes while preserving English quotes and names"""
    if not note:
        return note
    
    # Common phrase translations
    translations = {
        "确认 Zoom 设置正常。": "Check that Zoom settings are working.",
        "孩子和家长都在镜头前。": "Both child and parent are on camera.",
        "调整摄像头，让孩子的脸清晰可见。": "Adjust the camera so the child's face is clearly visible.",
        "对家长说：": "Tell the parent: ",
        "告诉孩子：": "Tell the child: ",
        "今天我们只修正一个问题，不会贪多。": "'Today we'll fix just one issue, we won't try to do too much.'",
        "提醒家长可以在旁边观摩，但请让孩子自己开口。": "Remind the parent they can observe from the side, but let the child speak themselves.",
        
        "拿出一个水瓶（或在屏幕上展示图片）。": "Take out a water bottle (or show a picture on screen).",
        "指着瓶子问孩子：": "Point at the bottle and ask the child: ",
        "引导孩子说": "Guide the child to say",
        "然后说：": "Then say: ",
        "让孩子回答": "Have the child answer",
        "或": "or",
        "重复 2-3 次": "Repeat 2-3 times",
        "让孩子熟悉": "to help the child get familiar with",
        "的搭配": "patterns",
        "如果孩子说不完整，": "If the child doesn't say the complete sentence, ",
        "教师补全句子让孩子跟读。": "teacher completes the sentence and has the child repeat.",
        
        "在屏幕上或白板上写下错误句子：": "Write the incorrect sentences on screen or whiteboard: ",
        "和": "and",
        "问孩子：": "Ask the child: ",
        "这两句话对吗？": "'Are these two sentences correct?'",
        "等孩子思考后，": "After the child thinks, ",
        "圈出错误部分": "circle the incorrect parts",
        "解释：": "Explain: ",
        "去上学坐公交是习惯用法，说": "going to school by bus is an idiom, we say",
        "不加": "without",
        "职业身份前要加": "professions need",
        "所以是": "so it's",
        "改正后写：": "Write the corrections: ",
        "让孩子跟读改正后的句子": "Have the child repeat the corrected sentences",
        "次": "times",
        
        "教师说一句，孩子跟读一句。": "Teacher says one sentence, child repeats one sentence.",
        "每句重复": "Each sentence repeated",
        "共": "Total",
        "句短对话": "short dialogues",
        "场景是": "scenes are",
        "办公室和教室": "office and classroom",
        "包括那对关于瓶子的句子。": "Include those sentences about the bottle.",
        "句子见下方": "See sentences below in the",
        "【跟读句子】": "spoken lines",
        "列表": "list",
        "注意语调：": "Watch intonation: ",
        "疑问句结尾上扬": "questions rise at the end",
        "陈述句平稳": "statements stay level",
        "如果孩子某句卡住，": "If the child gets stuck on a sentence, ",
        "教师拆分成小块再跟读": "teacher breaks it into small chunks and has them repeat",
        
        "给孩子": "Give the child",
        "个开放提示": "open-ended prompts",
        "让孩子自己说完整句子": "have the child say complete sentences themselves",
        "不给选择题": "don't give multiple choice",
        "家长可以用手机录像。": "Parent can record with their phone.",
        "第一个提示：": "First prompt: ",
        "第二个提示：": "Second prompt: ",
        "第三个提示：": "Third prompt: ",
        "期待输出：": "Expected output: ",
        "如果孩子卡住，": "If the child gets stuck, ",
        "教师给一个词提示": "teacher gives a word prompt",
        "比如说": "such as",
        "但不说完整句子": "but don't say the complete sentence",
        
        "打开": "Open the",
        "页面": "page",
        "给孩子看": "show the child the",
        "试学周作业": "trial week homework",
        "入口": "entry point",
        "这周的作业在这里": "'This week's homework is here",
        "完成后系统会自动批改选择题": "after you finish, the system will auto-grade the multiple choice",
        "写作部分会有": "the writing section will have",
        "反馈": "feedback",
        "对家长说：": "Tell the parent: ",
        "孩子完成作业后": "'After the child finishes homework",
        "我们会在微信群里同步进度": "we'll sync progress in the WeChat group",
        "如果有问题随时联系": "Feel free to contact us if there are any questions",
        "不提": "Don't mention",
        "小班课": "small group classes",
        "等销售话术": "or other sales talk",
        
        "做一个动作": "Do an action",
        "比如写字": "such as writing",
        "写下错误：": "Write the errors: ",
        "指出缺少": "Point out the missing",
        "动词要加": "verb needs to add",
        "改正：": "Correct: ",
        
        "孩子": "child",
        "教师": "teacher",
        "家长": "parent",
    }
    
    result = note
    for chinese, english in translations.items():
        result = result.replace(chinese, english)
    
    return result

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all lesson plan entries
    # Pattern: title: "...",
    title_pattern = r'(title: ")([^"]+)(")'
    
    def replace_title(match):
        return match.group(1) + translate_title(match.group(2)) + match.group(3)
    
    content = re.sub(title_pattern, replace_title, content)
    
    # Pattern: fossil: "...",
    fossil_pattern = r'(fossil: ")([^"]+)(")'
    
    def replace_fossil(match):
        return match.group(1) + translate_fossil(match.group(2)) + match.group(3)
    
    content = re.sub(fossil_pattern, replace_fossil, content)
    
    # Pattern: teacherNotes: "...",
    # This is tricky because of embedded quotes. Let's do a simple replacement for now.
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Titles and fossils translated")
    print("TeacherNotes require manual translation due to complexity")

if __name__ == "__main__":
    main()
