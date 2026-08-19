#!/usr/bin/env python3
"""
Translate remaining common Chinese phrases.
"""

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Translations for remaining common phrases - longer phrases first
    translations = [
        ('今天教中学', 'Today teaching secondary'),
        ('对应申请', 'corresponds to application for'),
        ('对应前一级', 'corresponds to the previous level'),
        ('需熟悉', 'need to be familiar with'),
        ('前一级', 'previous level'),
        ('纠正格式', 'correct format'),
        ('今天我们学', 'Today we learn'),
        ('答不出', 'can\'t answer'),
        ('下常见混淆', 'common confusion below'),
        ('孩子口头', 'child verbally'),
        ('化石焦点', 'High-frequency error focus'),
        ('中学数学', 'secondary math'),
        ('学习目标', 'Learning objective'),
        ('手机拍照', 'take photo with phone'),
        ('出算式', 'write equation'),
        ('独立做', 'do independently'),
        ('在白板上', 'on the whiteboard'),
        ('白板上', 'on whiteboard'),
        ('白板', 'whiteboard'),
        ('在白板', 'on whiteboard'),
        ('这对吗', 'Is this correct'),
        ('我们学', 'we learn'),
        ('一道', 'one'),
        
        # Common phrases and words
        ('正确', 'correct'),
        ('完整', 'complete'),
        ('算式', 'equation'),
        ('可以', 'can'),
        ('完成', 'complete'),
        ('数学', 'math'),
        ('方程', 'equation'),
        ('继续', 'continue'),
        ('已教', 'already taught'),
        ('然后', 'then'),
        ('所以', 'so'),
        ('对应', 'corresponds to'),
        ('样本', 'sample'),
        ('回答', 'answer'),
        ('比如', 'such as'),
        ('词', 'word'),
        ('应该', 'should'),
        ('例子', 'example'),
        ('欢迎', 'welcome'),
        ('今天', 'today'),
        ('因为', 'because'),
        ('全', 'all'),
        ('申请', 'application'),
        ('入学', 'admission'),
        ('方法', 'method'),
        ('选项', 'option'),
        ('播放', 'play'),
        ('共', 'total'),
        ('关键', 'key'),
        ('口头', 'verbally'),
        
        # Short common words
        ('再', 'again'),
        ('道', ''),  # counter for problems
        ('不', 'not'),
        ('出', 'out'),
        ('下', 'below'),
        ('明', 'clear'),
        ('只', 'only'),
        ('这', 'this'),
        ('要', 'need'),
        ('二', 'two'),
        ('一', 'one'),
        ('在', 'at'),
        ('把', ''),
        ('他', 'they'),
        ('如', 'like'),
        ('每', 'each'),
        ('而', 'and'),
        ('错', 'wrong'),
        ('于', 'at'),
        ('答', 'answer'),
        ('教', 'teach'),
        ('式', 'formula'),
        ('三', 'three'),
        ('那', 'that'),
        ('上', 'above'),
        
        # Remaining punctuation
        ('、', ', '),
    ]
    
    for chinese, english in translations:
        content = content.replace(chinese, english)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Remaining phrases translated")

if __name__ == "__main__":
    main()
