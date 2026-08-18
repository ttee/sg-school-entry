#!/bin/bash
set -e

# WeChat-safe video generation for ESL micro-lessons
# Using edge-tts (British English) + ffmpeg + system CJK fonts

EDGE_TTS="$HOME/.local/bin/edge-tts"
VOICE="en-GB-LibbyNeural"  # British English female voice
OUTPUT_DIR="public/video"
TEMP_DIR="/tmp/lesson-videos"

mkdir -p "$OUTPUT_DIR"
mkdir -p "$TEMP_DIR"

# Lesson scripts with English speech + 简体中文 captions
# Each lesson: Hook (error) → Why (中文) → Form → 跟读 → Close

generate_video() {
    local level=$1
    local week=$2
    local title=$3
    local script=$4
    local caption=$5
    
    local filename="${level}-w${week}.mp4"
    local audio_file="$TEMP_DIR/${level}-w${week}.mp3"
    local output_file="$OUTPUT_DIR/$filename"
    
    echo "Generating $filename..."
    
    # Write script to temp file for TTS
    local script_file="$TEMP_DIR/${level}-w${week}.txt"
    echo "$script" > "$script_file"
    
    # Generate TTS audio
    $EDGE_TTS --voice "$VOICE" --file "$script_file" --write-media "$audio_file"
    
    # Get audio duration
    duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$audio_file")
    
    # Create video with studio-branded slides + burnt-in subtitles
    # Cream background (#FFFBF5), ink text, simple typography
    ffmpeg -f lavfi -i color=c=0xFFFBF5:s=1280x720:d=$duration -i "$audio_file" \
        -vf "drawtext=fontfile=/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc:text='$title':fontcolor=0x1A1A1A:fontsize=42:x=(w-text_w)/2:y=80,\
             drawtext=fontfile=/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc:text='$caption':fontcolor=0x1A1A1A:fontsize=24:x=(w-text_w)/2:y=(h-text_h-60):borderw=2:bordercolor=0xFFFBF5" \
        -c:v libx264 -preset veryfast -crf 28 -c:a aac -b:a 64k -movflags +faststart -y "$output_file"
    
    # Cleanup temp audio
    rm -f "$audio_file"
    
    echo "✓ Created $filename ($(du -h "$output_file" | cut -f1))"
}

# A2-W0: Articles
generate_video "a2" "0" "A2-W0: Articles a/an/the" \
"Many Chinese students say: I go to school by the bus. Or: I am student. This happens because Chinese has no articles. In English, we need articles with countable nouns. Use 'a' or 'an' for one thing: a bus, an apple. Use 'the' for a specific thing: the bus I take every day. Use zero article for categories: by bus, on Monday. Let's practice. Repeat after me: I go to school by bus. She is a student. This week, your homework will catch this error. Fix this one thing." \
"中文没有冠词，孩子会说 I go to school by the bus 或 I am student。"

# A2-W1: 3sg -s + at/in/on
generate_video "a2" "1" "A2-W1: Third person -s" \
"Many Chinese students say: She wake up at seven. Or: I go school in Monday. This happens because Chinese verbs don't change form. In English, add -s for he, she, it in present simple: She wakes up. He plays. It works. Also, use 'at' for clock times, 'in' for morning or evening, 'on' for days. Let's practice. Repeat after me: She wakes up at seven. I go to school on Monday. This week, your speaking and writing will focus on this. Fix this one thing." \
"中文动词不变形，孩子会说 she wake up 或 I go school in Monday。"

# A2-W2: Present simple vs continuous
generate_video "a2" "2" "A2-W2: Present simple vs continuous" \
"Many Chinese students say: I am going to school every day. Or: I like swimming now. This happens because Chinese uses time words, not verb forms. In English, use present simple for habits: I go to school every day. Use present continuous for now: I am swimming now. Also, like and enjoy take -ing: I like swimming. Let's practice. Repeat after me: I go to school every day. I am swimming now. I like reading books. This week, fix this one thing." \
"进行时被当成"正在学英语的标记"，孩子会说 I am going to school every day。"

# A2-W3: Past simple
generate_video "a2" "3" "A2-W3: Past simple tense" \
"Many Chinese students say: Yesterday I go to the park. Or: I use to live in Beijing. This happens because Chinese uses time words, not verb changes. In English, use past simple for finished actions: Yesterday I went. Last week we visited. For old habits, use 'used to': I used to live in Beijing. Let's practice. Repeat after me: Yesterday I went to the park. I used to play basketball. Last Sunday we had a picnic. This week, fix this one thing." \
"中文靠时间词不靠动词变形，孩子会说 yesterday I go 或 I use to live。"

# B1-W0: Present perfect vs past simple
generate_video "b1" "0" "B1-W0: Present perfect vs past" \
"Many Chinese students say: I have went yesterday. Or: I am here for six months. This happens because Chinese 了 doesn't match English present perfect. Use present perfect for a situation that still matters now: I have been here for six months. I have visited that museum. Use past simple for finished time: I went yesterday. Let's practice. Repeat after me: I have been here for six months. I went to the museum yesterday. Have you ever tried chicken rice? This week, fix this one thing." \
"中文 了 不等于现在完成，孩子会说 I have went yesterday 或 I am here for 6 months。"

# B1-W1: Present perfect experience + comparatives
generate_video "b1" "1" "B1-W1: Have you ever + comparatives" \
"Many Chinese students say: Have you go to Gardens by the Bay? Or: It was impressive than I expected. This happens because Chinese comparisons mix up with English. Use present perfect for experience: Have you ever been to...? Have you visited...? Use more or -er for comparing: more impressive, bigger, better. Let's practice. Repeat after me: Have you ever been to Sentosa? Gardens by the Bay is more impressive than I expected. This week, your writing will focus on this." \
"比较级漏 more；经历体和过去时搅在一起，孩子会说 Have you go。"

# B1-W2: 2nd conditional + gerund/infinitive
generate_video "b1" "2" "B1-W2: If + would, suggest + -ing" \
"Many Chinese students say: If the school change the rule, students will be happy. Or: I suggest to use phones for research. This happens because Chinese doesn't change verb forms in if-sentences. Use second conditional for imagined changes: If the school changed, students would be happy. Also, suggest takes -ing, want takes to: I suggest using. I want to use. Let's practice. Repeat after me: If we had more time, I would explore. I suggest bringing your own bag. I want to learn more. Fix this one thing." \
"中文条件句不变形；suggest to use 是典型高频错误，应该是 suggest using。"

# B1-W3: Passive + should/ought to
generate_video "b1" "3" "B1-W3: Passive voice + should" \
"Many Chinese students say: We recycle the bottles. Or: Students must bringing their own bags. This happens because Chinese uses active voice more. In English, use passive when the action is more important: Plastic is recycled. The bins are collected on Monday. Use should or ought to for advice: We should recycle more. Students ought to bring reusable bags. Let's practice. Repeat after me: Plastic is recycled in the blue bin. We should reduce food waste. Students ought to turn off the lights. This week, fix this one thing." \
"中文少用被动，孩子会说 we recycle the bottles 而写不出 are recycled。"

echo "✓ All 8 videos generated!"
echo "Total size: $(du -sh $OUTPUT_DIR | cut -f1)"
