#!/usr/bin/env python3
"""
Translate math-specific terms and remaining common phrases.
"""

def main():
    input_file = "/workspace/app/learn/plans/[level]/[weekNumber]/page.tsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Math-specific and remaining translations - longer phrases first
    translations = [
        # Long phrases
        ('当且仅当它们', 'if and only if they'),
        ('同形同大小', 'same shape and same size'),
        ('同形不同大小', 'same shape different size'),
        ('不同形状不能', 'different shapes cannot'),
        ('面积相等不一定', 'same area does not necessarily mean'),
        ('缩放比例为', 'scale factor of'),
        ('对应角相等', 'corresponding angles equal'),
        ('对应边成比例', 'corresponding sides in proportion'),
        ('整数边长', 'integer side lengths'),
        ('整数缩放比例', 'integer scale factors'),
        ('三角形性质', 'triangle properties'),
        ('全等图形', 'congruent figures'),
        ('相似图形', 'similar figures'),
        ('特殊相似图形', 'special similar figures'),
        ('同形状', 'same shape'),
        ('面积相等', 'same area'),
        ('对应角', 'corresponding angles'),
        ('对应边', 'corresponding sides'),
        ('边长', 'side length'),
        ('三角形', 'triangle'),
        ('特例', 'special case'),
        ('性质', 'properties'),
        ('大小不同', 'different sizes'),
        ('大小可不同', 'sizes may differ'),
        ('但大小', 'but size'),
        ('不能', 'cannot'),
        ('同形', 'same shape'),
        ('不同', 'different'),
        ('相等', 'equal'),
        ('比例', 'ratio'),
        ('缩放', 'scale'),
        ('面积', 'area'),
        ('整数', 'integer'),
        ('特殊', 'special'),
        ('它们', 'they'),
        ('一定', 'definitely'),
        ('相似', 'similar'),
        ('全等', 'congruent'),
        ('大小', 'size'),
        
        # More common remaining terms
        ('画简单图形', 'draw simple figures'),
        ('她一起做', 'work together'),
        ('说出每一步', 'say each step'),
        ('他/她', 'they'),
        ('她', 'they'),
        ('卡住时', 'when stuck'),
        ('不给完整', 'don\'t give complete'),
        ('给提示', 'give prompts'),
        ('播放', 'play'),
        ('示范', 'model'),
        ('一起做', 'work together'),
        ('说出', 'say'),
        ('卡住', 'stuck'),
        ('完整', 'complete'),
        ('简单', 'simple'),
        ('图形', 'figure'),
        ('同', 'same'),
        ('不能', 'cannot'),
        ('可', 'may'),
        ('当', 'when'),
        ('且', 'and'),
        ('仅', 'only'),
        ('它', 'it'),
        ('们', ''),  # plural marker
        ('一', 'one'),
        ('等', 'etc'),
    ]
    
    for chinese, english in translations:
        content = content.replace(chinese, english)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Math terms and remaining phrases translated")

if __name__ == "__main__":
    main()
