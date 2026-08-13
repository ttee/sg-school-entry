#!/usr/bin/env python3
"""
Generate illustrated story videos for ESL micro-lessons
Replaces beige title-card videos with character-driven scenes
"""

import asyncio
import json
import os
import subprocess
import sys
from pathlib import Path
from typing import List, Dict, Tuple

# Add ~/.local/bin to PATH for edge-tts
os.environ['PATH'] = os.path.expanduser('~/.local/bin') + ':' + os.environ['PATH']

# Constants
FONT_PATH = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
OUTPUT_DIR = Path("public/video")
STORYBOARD_DIR = Path("scripts/storyboard")
TEMP_DIR = Path("/tmp/lesson-videos")

# Ensure directories exist
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
STORYBOARD_DIR.mkdir(parents=True, exist_ok=True)
TEMP_DIR.mkdir(parents=True, exist_ok=True)

# Voice mapping (Singapore English - clear school English, not full Singlish)
# Using en-SG-LunaNeural with rate/pitch adjustments to differentiate characters
VOICES = {
    "narrator": {"voice": "en-SG-LunaNeural", "rate": "-22%", "pitch": "+0Hz"},
    "mei": {"voice": "en-SG-LunaNeural", "rate": "-28%", "pitch": "+12Hz"},  # Child-like, higher
    "priya": {"voice": "en-SG-LunaNeural", "rate": "-24%", "pitch": "-4Hz"},  # Slightly different
    "ms_tan": {"voice": "en-SG-LunaNeural", "rate": "-20%", "pitch": "-2Hz"},  # Teacher, mature
    "lin_mum": {"voice": "en-SG-LunaNeural", "rate": "-22%", "pitch": "-6Hz"},  # Adult female
    "wei": {"voice": "en-SG-LunaNeural", "rate": "-26%", "pitch": "+10Hz"},  # Boy child
    "ah_gong": {"voice": "en-SG-LunaNeural", "rate": "-18%", "pitch": "-8Hz"},  # Elderly male
    "chen_wei": {"voice": "en-SG-LunaNeural", "rate": "-26%", "pitch": "+8Hz"},  # Boy
    "siti": {"voice": "en-SG-LunaNeural", "rate": "-24%", "pitch": "-2Hz"},  # Girl
}

# Optional: Mandarin character name introductions (standalone beats at film start)
# Example: 「她叫美。」before the English story begins
# Only used if explicitly added to scene dialogue
MANDARIN_VOICE = "zh-CN-XiaoyiNeural"


class Scene:
    """A single scene in a story video"""
    def __init__(self, description: str, dialogue: List[Tuple[str, str, str]], 
                 chinese_caption: str, duration: float = None):
        """
        Args:
            description: Visual description for image generation
            dialogue: List of (speaker, voice_key, text) tuples
            chinese_caption: Chinese subtitle for this scene
            duration: Optional fixed duration (auto-calculated if None)
        """
        self.description = description
        self.dialogue = dialogue
        self.chinese_caption = chinese_caption
        self.duration = duration


# Story definitions for each week
STORIES = {
    "a2-w0": {
        "title": "A2-W0: Articles",
        "location": "School Canteen",
        "scenes": [
            Scene(
                description="Singapore school canteen interior, illustrated gouache style. Mei (11-year-old East Asian girl, short black bob, white blouse and navy pinafore, backpack, nervous expression) stands at counter with Priya (11-year-old South Asian girl, ponytail, same uniform, confident smile, holding green tray). Food display with chicken rice visible. Cream and teal color scheme, children's book illustration style.",
                dialogue=[
                    ("narrator", "narrator", "Mei and Priya are at the canteen."),
                    ("mei", "mei", "I want the chicken rice."),
                    ("priya", "priya", "First, take a tray. You mean: I want chicken rice."),
                ],
                chinese_caption='梅说"我要the鸡饭"，但这是第一次提到，不该用the。'
            ),
            Scene(
                description="Canteen counter with fruit basket, illustrated. Apple and banana visible. Speech bubbles showing 'an apple' and 'a banana'. Simple, clear children's book style.",
                dialogue=[
                    ("priya", "priya", "Use a if the next word starts with a consonant sound. Use an if it starts with a vowel sound."),
                    ("narrator", "narrator", "An apple. A banana. It's the sound, not the letter."),
                ],
                chinese_caption='下个词是元音发音用an，辅音发音用a。看发音不看字母。'
            ),
            Scene(
                description="Two trays side by side, illustrated. Left tray labeled 'a tray' (first time), right tray with arrow labeled 'the tray' (now specific). Visual comparison, cream and teal colors.",
                dialogue=[
                    ("priya", "priya", "Is it specific? Both of us know which one? Use the. First time mentioning? Use a or an."),
                    ("narrator", "narrator", "A tray when you first mention it. The tray when we both know which one."),
                ],
                chinese_caption='特指（双方都知道）用the。首次提到用a或an。'
            ),
            Scene(
                description="Bus stop with Mei waiting, illustrated gouache style. Bus approaching in background. Speech bubble: 'by bus' (no article). Morning light.",
                dialogue=[
                    ("mei", "mei", "I go to school by bus."),
                    ("priya", "priya", "Good! No article for transport: by bus, by train."),
                ],
                chinese_caption='交通方式不用冠词：by bus, by MRT, by train。'
            ),
            Scene(
                description="School hallway, illustrated. Mei confident, pointing to herself. Speech bubble: 'I am a student'. Priya gives thumbs up. Homework card visible in corner.",
                dialogue=[
                    ("mei", "mei", "I am a student! I go to school by bus!"),
                    ("narrator", "narrator", "This week, your homework will practice articles. One step at a time."),
                ],
                chinese_caption='本周作业：练习冠词a/an/the和零冠词。一步一步来。'
            ),
        ]
    },
    
    "a2-w1": {
        "title": "A2-W1: Third Person -s",
        "location": "Morning at Home",
        "scenes": [
            Scene(
                description="Kitchen morning scene, illustrated gouache style. Lin's mum (30s, ponytail, casual clothes) holds a note that says 'She wake up at 6:30'. Lin (11, short hair, pajamas) looks at it. Clock shows 6:30. Warm morning light.",
                dialogue=[
                    ("narrator", "narrator", "Lin's mum wrote a note about her daughter's routine."),
                    ("lin_mum", "lin_mum", "Oh! I wrote: She wake up at 6:30. That's wrong!"),
                    ("narrator", "narrator", "Add -s for he, she, it in present simple."),
                ],
                chinese_caption="中文动词不变形，英文第三人称要加-s。"
            ),
            Scene(
                description="Whiteboard showing conjugation table, illustrated. 'I wake up / She wakes up / He wakes up' with -s highlighted in teal. Clear children's book style.",
                dialogue=[
                    ("lin_mum", "lin_mum", "She wakes up at 6:30."),
                    ("narrator", "narrator", "Remember: add -s for he, she, it. She wakes. He plays. It works."),
                ],
                chinese_caption="正确：She wakes up at 6:30. 第三人称动词加-s。"
            ),
            Scene(
                description="Calendar and clock illustration. Calendar shows 'Monday' circled, clock shows morning. Text labels: 'at 6:30', 'on Monday', 'in the morning'.",
                dialogue=[
                    ("narrator", "narrator", "Also remember: at for times, in for morning or evening, on for days."),
                    ("lin_mum", "lin_mum", "She wakes up at 6:30 on Monday."),
                ],
                chinese_caption="时间前用at，日期前用on，早晚用in。"
            ),
            Scene(
                description="MRT station platform, illustrated. Lin with school bag, waiting for train. Speech bubble: 'I go to school on Monday.'",
                dialogue=[
                    ("narrator", "narrator", "Let's practice."),
                    ("lin_mum", "lin_mum", "I go to school on Monday. In the morning."),
                ],
                chinese_caption="练习：on Monday, in the morning, at 7 o'clock。"
            ),
            Scene(
                description="Homework card. Text: 'This week: 3rd person -s + at/in/on' with examples.",
                dialogue=[
                    ("narrator", "narrator", "This week's homework catches this error. Fix this one thing."),
                ],
                chinese_caption="本周作业：第三人称-s和时间介词。"
            ),
        ]
    },
    
    "a2-w2": {
        "title": "A2-W2: Present Simple vs Continuous",
        "location": "Art Class",
        "scenes": [
            Scene(
                description="Art classroom, illustrated gouache style. Wei (11, boy, short black hair, white shirt, navy shorts) at easel painting. Ms Tan (teacher, teal blouse, glasses, friendly) nearby. Other students painting in background.",
                dialogue=[
                    ("narrator", "narrator", "Wei is in art class."),
                    ("wei", "wei", "Ms Tan, I am going to school every day!"),
                    ("ms_tan", "ms_tan", "Almost! You GO every day. That's a habit."),
                ],
                chinese_caption='Wei说"我am going每天"。习惯用一般现在时。'
            ),
            Scene(
                description="Whiteboard showing two columns: 'Habits: I go every day' and 'Now: I am painting now'. Illustrations of calendar vs clock.",
                dialogue=[
                    ("ms_tan", "ms_tan", "Use present simple for habits. Use present continuous for actions happening now."),
                    ("narrator", "narrator", "Present simple: habits, facts. Present continuous: now, temporary."),
                ],
                chinese_caption="习惯用go，正在做用am going。"
            ),
            Scene(
                description="Close-up of Wei painting a Merlion, illustrated. Brush in motion, paint on canvas. Speech bubble: 'I am making a Merlion NOW.'",
                dialogue=[
                    ("ms_tan", "ms_tan", "What are you doing right now?"),
                    ("wei", "wei", "I am making a Merlion now!"),
                    ("narrator", "narrator", "Good! 'Am making' shows it's happening now."),
                ],
                chinese_caption="现在正在做：I am making a Merlion。"
            ),
            Scene(
                description="Wei showing finished artwork to Ms Tan, both smiling. Speech bubble: 'I like making art.'",
                dialogue=[
                    ("wei", "wei", "I like making art!"),
                    ("ms_tan", "ms_tan", "Perfect! 'Like' takes -ing form: like making, enjoy swimming."),
                ],
                chinese_caption="like和enjoy后面用动词-ing形式。"
            ),
            Scene(
                description="Homework card with examples: 'I go every day. I am studying now. I like reading.'",
                dialogue=[
                    ("narrator", "narrator", "This week: practice simple versus continuous. Fix this one thing."),
                ],
                chinese_caption="本周作业：一般现在时vs现在进行时。"
            ),
        ]
    },
    
    "a2-w3": {
        "title": "A2-W3: Past Simple",
        "location": "Ah Ma's Flat",
        "scenes": [
            Scene(
                description="Elderly flat interior, illustrated gouache style. Wei visiting grandparents' flat. Ah Gong (grandfather, 70s, white hair, polo shirt) in armchair. Family photos on wall. Warm afternoon light.",
                dialogue=[
                    ("narrator", "narrator", "Wei is visiting his grandfather."),
                    ("wei", "wei", "Yesterday I go to East Coast Park!"),
                    ("ah_gong", "ah_gong", "You mean: Yesterday I went. The action is finished."),
                ],
                chinese_caption='Wei说"昨天我go"。过去的事用went。'
            ),
            Scene(
                description="Whiteboard showing timeline: 'Yesterday' arrow pointing to 'went', 'Last week' arrow to 'visited'. Past tense forms highlighted.",
                dialogue=[
                    ("ah_gong", "ah_gong", "Yesterday we visited the park. Last week you came here."),
                    ("narrator", "narrator", "Use past simple for finished actions. Yesterday I went. Last week we visited."),
                ],
                chinese_caption="过去的事用过去时：went, visited, came。"
            ),
            Scene(
                description="Old taxi photograph on wall, illustrated. Ah Gong pointing to photo of himself as younger man next to taxi. Nostalgic warm tones.",
                dialogue=[
                    ("ah_gong", "ah_gong", "I used to drive a taxi. Now I'm retired."),
                    ("narrator", "narrator", "Use 'used to' for old habits that stopped."),
                ],
                chinese_caption="过去的习惯用used to：I used to drive。"
            ),
            Scene(
                description="Wei nodding, practicing. Speech bubbles: 'I went yesterday. I used to play basketball.'",
                dialogue=[
                    ("wei", "wei", "I went to the park yesterday. I used to play basketball."),
                    ("ah_gong", "ah_gong", "Excellent! Past simple for finished actions, used to for old habits."),
                ],
                chinese_caption="练习：Yesterday I went. I used to play。"
            ),
            Scene(
                description="Homework card: 'This week: Past simple tense' with examples.",
                dialogue=[
                    ("narrator", "narrator", "This week's homework: past simple. Fix this one thing."),
                ],
                chinese_caption="本周作业：过去时。"
            ),
        ]
    },
    
    "b1-w0": {
        "title": "B1-W0: Present Perfect vs Past",
        "location": "School Notice Board",
        "scenes": [
            Scene(
                description="School notice board area, illustrated gouache style. Chen Wei (12, boy, glasses, uniform) and Siti (12, girl, hijab, uniform) looking at board. Announcements and flyers visible.",
                dialogue=[
                    ("narrator", "narrator", "Chen Wei and Siti are at the notice board."),
                    ("chen_wei", "chen_wei", "I have went to the library yesterday."),
                    ("siti", "siti", "Not quite! You WENT yesterday. 'Yesterday' is finished time."),
                ],
                chinese_caption='陈伟说"我have went昨天"。昨天用went。'
            ),
            Scene(
                description="Whiteboard with two columns: 'Present Perfect: I have been here for 6 months' and 'Past Simple: I went yesterday'. Timeline illustrations.",
                dialogue=[
                    ("siti", "siti", "Use present perfect when time connects to now. Use past simple for finished time."),
                    ("narrator", "narrator", "Present perfect: still relevant. Past simple: finished and gone."),
                ],
                chinese_caption="现在完成时：与现在有关。过去时：已结束。"
            ),
            Scene(
                description="Calendar showing 6 months marked, illustrated. Arrow from 'February' to 'now August'. Speech bubble: 'I have been here for 6 months.'",
                dialogue=[
                    ("chen_wei", "chen_wei", "I have been here for six months."),
                    ("narrator", "narrator", "Good! The six months continue to now, so use present perfect."),
                ],
                chinese_caption="还在继续用现在完成时：I have been here for 6 months。"
            ),
            Scene(
                description="Museum exterior illustration. Siti asking question with speech bubble: 'Have you ever tried chicken rice?'",
                dialogue=[
                    ("siti", "siti", "Have you ever visited the National Museum?"),
                    ("chen_wei", "chen_wei", "Yes, I have been there twice!"),
                ],
                chinese_caption="经历用Have you ever：Have you ever tried...?"
            ),
            Scene(
                description="Homework card: 'Present perfect vs past simple' with timeline.",
                dialogue=[
                    ("narrator", "narrator", "This week: present perfect versus past. Fix this one thing."),
                ],
                chinese_caption="本周作业：现在完成时vs过去时。"
            ),
        ]
    },
    
    "b1-w1": {
        "title": "B1-W1: Have You Ever + Comparatives",
        "location": "Gardens by the Bay",
        "scenes": [
            Scene(
                description="Gardens by the Bay Supertrees, illustrated gouache style. Chen Wei and Siti walking together, looking up at the tall tree structures. Tourists in background. Sunny day, vibrant greens.",
                dialogue=[
                    ("narrator", "narrator", "Chen Wei and Siti are at Gardens by the Bay."),
                    ("chen_wei", "chen_wei", "Have you go to Sentosa?"),
                    ("siti", "siti", "You mean: Have you ever BEEN to Sentosa?"),
                ],
                chinese_caption='陈伟说"Have you go"。应该是Have you ever been。'
            ),
            Scene(
                description="Whiteboard showing 'Have you ever been...?' structure with checkboxes for yes/no. Example locations listed.",
                dialogue=[
                    ("siti", "siti", "For life experience, use: Have you ever been...? Have you ever tried...?"),
                    ("narrator", "narrator", "Present perfect for experience questions. Use 'been', not 'go'."),
                ],
                chinese_caption="经历用Have you ever been，不是Have you go。"
            ),
            Scene(
                description="Side-by-side comparison illustration: Sentosa beach vs Supertrees. Arrows showing 'impressive → more impressive'. Comparison visual.",
                dialogue=[
                    ("chen_wei", "chen_wei", "Gardens by the Bay is impressive than Sentosa!"),
                    ("siti", "siti", "Almost! MORE impressive. Long adjectives need 'more'."),
                ],
                chinese_caption="长形容词用more：more impressive, more beautiful。"
            ),
            Scene(
                description="Chen Wei with correct speech bubble: 'Gardens by the Bay is more impressive than I expected!' Siti giving thumbs up.",
                dialogue=[
                    ("chen_wei", "chen_wei", "Gardens by the Bay is more impressive than I expected!"),
                    ("narrator", "narrator", "Perfect! More impressive. Bigger. Better. Add -er for short words, more for long ones."),
                ],
                chinese_caption="比较级：短词加-er，长词加more。"
            ),
            Scene(
                description="Homework card: 'Have you ever + comparatives' with examples.",
                dialogue=[
                    ("narrator", "narrator", "This week: Have you ever questions and comparatives."),
                ],
                chinese_caption="本周作业：Have you ever和比较级。"
            ),
        ]
    },
    
    "b1-w2": {
        "title": "B1-W2: Second Conditional + Gerunds",
        "location": "School Lockers",
        "scenes": [
            Scene(
                description="School locker area, illustrated gouache style. Students at lockers. Debate poster on wall: 'Should students use phones?' Siti and Chen Wei discussing.",
                dialogue=[
                    ("narrator", "narrator", "Students are debating school phone rules."),
                    ("chen_wei", "chen_wei", "If the school change the rule, students will be happy!"),
                    ("siti", "siti", "You mean: If the school CHANGED, students WOULD be happy."),
                ],
                chinese_caption='陈伟说"If the school change"。假设用changed和would。'
            ),
            Scene(
                description="Whiteboard showing second conditional structure: 'If + past, would + verb'. Example: 'If we had more time, I would explore more.' Arrows connecting parts.",
                dialogue=[
                    ("siti", "siti", "Second conditional is for imagining. If + past, would + verb."),
                    ("narrator", "narrator", "If the school changed... If we had... These are imagined situations."),
                ],
                chinese_caption="第二条件句：If + 过去时, would + 动词。"
            ),
            Scene(
                description="Students using phones for research, illustrated. Speech bubble showing correct/incorrect: 'I suggest using' vs 'I suggest to use' with checkmark and X.",
                dialogue=[
                    ("chen_wei", "chen_wei", "I suggest to use phones for research."),
                    ("siti", "siti", "Close! I suggest USING. 'Suggest' takes -ing, not 'to'."),
                ],
                chinese_caption="suggest后面用-ing：I suggest using, 不是to use。"
            ),
            Scene(
                description="Comparison chart: 'suggest + -ing' vs 'want + to'. Visual examples with both verbs.",
                dialogue=[
                    ("narrator", "narrator", "Suggest takes -ing. Want takes to. I suggest using. I want to use."),
                    ("chen_wei", "chen_wei", "I want to learn more! I suggest bringing our own devices."),
                ],
                chinese_caption="suggest用-ing，want用to。"
            ),
            Scene(
                description="Homework card: 'Second conditional + gerunds/infinitives'.",
                dialogue=[
                    ("narrator", "narrator", "This week: If + would, and suggest versus want."),
                ],
                chinese_caption="本周作业：第二条件句和动名词。"
            ),
        ]
    },
    
    "b1-w3": {
        "title": "B1-W3: Passive Voice + Should",
        "location": "Recycling Area",
        "scenes": [
            Scene(
                description="School recycling area, illustrated gouache style. Blue, green, and brown bins labeled. Siti and Chen Wei sorting recycling. Posters about sustainability on wall.",
                dialogue=[
                    ("narrator", "narrator", "Siti and Chen Wei are learning about recycling."),
                    ("chen_wei", "chen_wei", "We recycle the bottles every Monday."),
                    ("siti", "siti", "You can also say: The bottles ARE recycled every Monday."),
                ],
                chinese_caption='陈伟说"我们回收瓶子"。也可以用被动语态。'
            ),
            Scene(
                description="Whiteboard showing active vs passive: 'We recycle bottles' → 'Bottles are recycled'. Arrow showing transformation. Be + past participle highlighted.",
                dialogue=[
                    ("siti", "siti", "Use passive when the action is more important than who does it."),
                    ("narrator", "narrator", "Passive voice: be + past participle. Plastic is recycled. Bins are collected."),
                ],
                chinese_caption="被动语态：be + 过去分词。Bottles are recycled。"
            ),
            Scene(
                description="Recycling process diagram, illustrated. Bottles → bin → truck → recycling center. Each step labeled with passive: 'collected', 'sorted', 'recycled'.",
                dialogue=[
                    ("chen_wei", "chen_wei", "The bins are collected on Monday. The plastic is sorted at the center."),
                    ("narrator", "narrator", "Perfect! Use passive to describe processes and systems."),
                ],
                chinese_caption="过程用被动：are collected, are sorted, are recycled。"
            ),
            Scene(
                description="Advice poster on wall: 'We should reduce waste. Students ought to bring reusable bags.' Icons of reusable items.",
                dialogue=[
                    ("siti", "siti", "We should recycle more. Students ought to bring reusable bags."),
                    ("narrator", "narrator", "Use should and ought to for advice and recommendations."),
                ],
                chinese_caption="建议用should和ought to。"
            ),
            Scene(
                description="Homework card: 'Passive voice + should/ought to' with examples.",
                dialogue=[
                    ("narrator", "narrator", "This week: passive voice and giving advice. Fix this one thing."),
                ],
                chinese_caption="本周作业：被动语态和建议。"
            ),
        ]
    },
}


async def generate_tts_audio(text: str, voice_config: dict, output_path: Path) -> float:
    """Generate TTS audio using edge-tts with rate/pitch and return duration in seconds
    
    Args:
        text: Complete sentence/phrase to synthesize (no mid-sentence splicing)
        voice_config: Dict with 'voice', 'rate', 'pitch' keys
        output_path: Where to save the audio
    
    Returns:
        Duration in seconds
    """
    import edge_tts
    
    communicate = edge_tts.Communicate(
        text, 
        voice_config["voice"],
        rate=voice_config.get("rate", "+0%"),
        pitch=voice_config.get("pitch", "+0Hz")
    )
    await communicate.save(str(output_path))
    
    # Get duration using ffprobe
    result = subprocess.run(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
         '-of', 'default=noprint_wrappers=1:nokey=1', str(output_path)],
        capture_output=True, text=True
    )
    duration = float(result.stdout.strip())
    return duration


async def generate_scene_audio(scene: Scene, scene_num: int, temp_dir: Path) -> Tuple[Path, float, List[Tuple[float, float, str]]]:
    """Generate audio for a scene with multiple speakers and crossfades
    
    Returns:
        audio_path: Path to concatenated audio file
        total_duration: Total duration in seconds
        timing: List of (start_time, end_time, chinese_caption) for subtitles
    """
    audio_segments = []
    timings = []
    current_time = 0.0
    
    for i, (speaker, voice_key, text) in enumerate(scene.dialogue):
        segment_path = temp_dir / f"scene{scene_num}_seg{i}.mp3"
        duration = await generate_tts_audio(text, VOICES[voice_key], segment_path)
        audio_segments.append(segment_path)
        timings.append((current_time, current_time + duration, scene.chinese_caption))
        current_time += duration
    
    # Concatenate audio segments with crossfades for smooth transitions
    if len(audio_segments) == 1:
        # Single segment, just copy it
        output_audio = temp_dir / f"scene{scene_num}_audio.mp3"
        subprocess.run(['cp', str(audio_segments[0]), str(output_audio)], check=True)
    else:
        # Multiple segments: use ffmpeg concat with crossfade (50ms)
        # For simplicity, use concat demuxer with a tiny silence gap
        concat_file = temp_dir / f"scene{scene_num}_concat.txt"
        with open(concat_file, 'w') as f:
            for seg in audio_segments:
                f.write(f"file '{seg}'\n")
        
        output_audio = temp_dir / f"scene{scene_num}_audio.mp3"
        # Concat with audio filter for smooth transitions
        subprocess.run([
            'ffmpeg', '-f', 'concat', '-safe', '0', '-i', str(concat_file),
            '-af', 'apad=pad_dur=0.05',  # Add tiny padding between segments
            '-c:a', 'libmp3lame', '-b:a', '128k',
            '-y', str(output_audio)
        ], check=True, capture_output=True)
    
    # Cleanup segment files
    for seg in audio_segments:
        seg.unlink()
    
    return output_audio, current_time, timings


def create_subtitle_file(timings: List[Tuple[float, float, str]], output_path: Path):
    """Create SRT subtitle file"""
    with open(output_path, 'w', encoding='utf-8') as f:
        for i, (start, end, text) in enumerate(timings, 1):
            start_tc = format_timecode(start)
            end_tc = format_timecode(end)
            f.write(f"{i}\n{start_tc} --> {end_tc}\n{text}\n\n")


def format_timecode(seconds: float) -> str:
    """Format seconds as SRT timecode HH:MM:SS,mmm"""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    millis = int((seconds % 1) * 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{millis:03d}"


async def generate_video(week_id: str, story_data: Dict, temp_dir: Path):
    """Generate a complete story video"""
    print(f"\n{'='*60}")
    print(f"Generating {week_id}: {story_data['title']}")
    print(f"{'='*60}")
    
    output_file = OUTPUT_DIR / f"{week_id}.mp4"
    scenes = story_data['scenes']
    
    # Generate placeholder scene images (simple colored backgrounds with text)
    # In production, these would be generated with proper illustration tools
    scene_images = []
    for i, scene in enumerate(scenes):
        img_path = STORYBOARD_DIR / f"{week_id}_scene{i}.png"
        create_placeholder_scene_image(scene, img_path, i, story_data['location'])
        scene_images.append(img_path)
    
    # Generate audio for all scenes
    print(f"Generating audio for {len(scenes)} scenes...")
    scene_data = []
    all_timings = []
    current_video_time = 0.0
    
    for i, scene in enumerate(scenes):
        audio_path, duration, timings = await generate_scene_audio(scene, i, temp_dir)
        
        # Adjust timings for concatenated video
        adjusted_timings = [(current_video_time + start, current_video_time + end, text) 
                           for start, end, text in timings]
        all_timings.extend(adjusted_timings)
        
        scene_data.append({
            'image': scene_images[i],
            'audio': audio_path,
            'duration': duration
        })
        current_video_time += duration
    
    # Create subtitle file
    subtitle_file = temp_dir / f"{week_id}.srt"
    create_subtitle_file(all_timings, subtitle_file)
    
    # Generate video using ffmpeg
    print(f"Composing video...")
    compose_video(scene_data, subtitle_file, output_file, temp_dir)
    
    # Get file size
    size_mb = output_file.stat().st_size / (1024 * 1024)
    duration_str = f"{current_video_time:.1f}s"
    print(f"✓ Created {week_id}.mp4 ({size_mb:.2f} MB, {duration_str})")


def create_placeholder_scene_image(scene: Scene, output_path: Path, scene_num: int, location: str):
    """Create a placeholder scene image with description text
    
    In production, this would use proper image generation.
    For now, creates illustrated-style colored backgrounds with key text.
    """
    from PIL import Image, ImageDraw, ImageFont
    
    # Color palette: cream, ink, teal (as specified)
    colors = {
        'cream': '#FFFBF5',
        'ink': '#1A1A1A',
        'teal': '#2A9D8F',
        'soft_teal': '#B8E1DB',
    }
    
    # Alternate background colors for visual variety
    bg_colors = ['#FFFBF5', '#F4F1E8', '#E8F4F1', '#FFF8E7']
    bg_color = bg_colors[scene_num % len(bg_colors)]
    
    img = Image.new('RGB', (1280, 720), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fall back to default
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
        text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20)
    except:
        title_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Draw location badge
    draw.rectangle([(40, 40), (400, 100)], fill=colors['teal'])
    draw.text((220, 70), location, fill='white', font=text_font, anchor='mm')
    
    # Draw scene number
    draw.ellipse([(1160, 40), (1240, 120)], fill=colors['soft_teal'])
    draw.text((1200, 80), str(scene_num + 1), fill=colors['ink'], font=title_font, anchor='mm')
    
    # Extract key dialogue or description
    if scene.dialogue:
        # Get first significant dialogue line
        for speaker, voice, text in scene.dialogue:
            if speaker != "narrator" and len(text) > 10:
                # Draw speech bubble effect
                bubble_y = 300
                padding = 40
                
                # Wrap text
                words = text.split()
                lines = []
                current_line = []
                for word in words:
                    current_line.append(word)
                    test_line = ' '.join(current_line)
                    bbox = draw.textbbox((0, 0), test_line, font=text_font)
                    if bbox[2] - bbox[0] > 1000:
                        current_line.pop()
                        lines.append(' '.join(current_line))
                        current_line = [word]
                if current_line:
                    lines.append(' '.join(current_line))
                
                # Draw bubble background
                bubble_height = len(lines) * 40 + padding * 2
                draw.rounded_rectangle(
                    [(120, bubble_y), (1160, bubble_y + bubble_height)],
                    radius=20,
                    fill='white',
                    outline=colors['ink'],
                    width=3
                )
                
                # Draw text
                y_offset = bubble_y + padding
                for line in lines:
                    draw.text((640, y_offset), line, fill=colors['ink'], font=text_font, anchor='mm')
                    y_offset += 40
                
                # Draw speaker label
                draw.text((180, bubble_y - 10), f"— {speaker.title()}", 
                         fill=colors['teal'], font=small_font, anchor='lm')
                break
    
    # Draw Chinese caption at bottom
    # Note: This will show as boxes without proper CJK font in PIL
    # But ffmpeg will render it properly with libass
    caption_text = scene.chinese_caption[:60] + "..." if len(scene.chinese_caption) > 60 else scene.chinese_caption
    draw.rectangle([(0, 640), (1280, 720)], fill='#00000088')
    
    img.save(output_path)


def compose_video(scene_data: List[Dict], subtitle_file: Path, output_file: Path, temp_dir: Path):
    """Compose final video from scenes with audio and subtitles"""
    
    # Create concat file for video segments
    video_segments = []
    
    for i, scene in enumerate(scene_data):
        # Create video segment from image + audio with Ken Burns zoom effect
        segment_output = temp_dir / f"segment_{i}.mp4"
        
        # Ken Burns effect: slow zoom in
        zoom_filter = f"scale=1280*1.1:-1,zoompan=z='min(zoom+0.0005,1.1)':d={scene['duration']*30}:s=1280x720:fps=30"
        
        subprocess.run([
            'ffmpeg',
            '-loop', '1',
            '-i', str(scene['image']),
            '-i', str(scene['audio']),
            '-vf', zoom_filter,
            '-c:v', 'libx264',
            '-t', str(scene['duration']),
            '-pix_fmt', 'yuv420p',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-shortest',
            '-y',
            str(segment_output)
        ], check=True, capture_output=True)
        
        video_segments.append(segment_output)
    
    # Concatenate video segments
    concat_list = temp_dir / 'concat_list.txt'
    with open(concat_list, 'w') as f:
        for seg in video_segments:
            f.write(f"file '{seg}'\n")
    
    temp_video = temp_dir / 'concatenated.mp4'
    subprocess.run([
        'ffmpeg',
        '-f', 'concat',
        '-safe', '0',
        '-i', str(concat_list),
        '-c', 'copy',
        '-y',
        str(temp_video)
    ], check=True, capture_output=True)
    
    # Burn in Chinese subtitles using libass
    subprocess.run([
        'ffmpeg',
        '-i', str(temp_video),
        '-vf', f"subtitles={subtitle_file}:force_style='FontName=Noto Sans CJK SC,FontSize=24,PrimaryColour=&HFFFFFF,OutlineColour=&H000000,BorderStyle=1,Outline=2,Shadow=1,MarginV=20'",
        '-c:v', 'libx264',
        '-preset', 'medium',
        '-crf', '23',
        '-c:a', 'copy',
        '-movflags', '+faststart',
        '-y',
        str(output_file)
    ], check=True, capture_output=True)
    
    # Cleanup temp files
    for seg in video_segments:
        seg.unlink()
    temp_video.unlink()


async def main():
    """Generate all story videos"""
    print("=" * 60)
    print("GENERATING ILLUSTRATED STORY VIDEOS")
    print("=" * 60)
    print(f"Font: {FONT_PATH}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Storyboard: {STORYBOARD_DIR}")
    
    # Generate all videos
    for week_id in ['a2-w0', 'a2-w1', 'a2-w2', 'a2-w3', 
                     'b1-w0', 'b1-w1', 'b1-w2', 'b1-w3']:
        video_temp_dir = TEMP_DIR / week_id
        video_temp_dir.mkdir(exist_ok=True)
        
        await generate_video(week_id, STORIES[week_id], video_temp_dir)
        
        # Cleanup temp directory
        for file in video_temp_dir.iterdir():
            file.unlink()
        video_temp_dir.rmdir()
    
    print("\n" + "=" * 60)
    print("✓ ALL 8 VIDEOS GENERATED!")
    print("=" * 60)
    
    # Show total size
    total_size = sum(f.stat().st_size for f in OUTPUT_DIR.glob("*.mp4")) / (1024 * 1024)
    print(f"Total size: {total_size:.2f} MB")
    print(f"Videos: {OUTPUT_DIR}")
    print(f"Storyboards: {STORYBOARD_DIR}")


if __name__ == '__main__':
    asyncio.run(main())
