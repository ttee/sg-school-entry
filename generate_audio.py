#!/usr/bin/env python3
"""
Generate listening audio files for sg-school-entry app.
Uses edge-tts with Singapore/British English voices.
"""
import asyncio
import edge_tts
import os
from pathlib import Path

# Output directory
OUTPUT_DIR = Path("public/audio")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Voice configuration
# Using Singapore English voices where available, British English as fallback
FEMALE_VOICE = "en-GB-SoniaNeural"  # British female (clear, professional)
MALE_VOICE = "en-GB-RyanNeural"     # British male
TEACHER_VOICE = "en-GB-LibbyNeural"  # British female (authoritative)
STUDENT_VOICE = "en-GB-MaisieNeural" # British young female

# Audio configurations for each listening section
AUDIO_CONFIGS = [
    {
        "filename": "a2-w0-listening.mp3",
        "dialogue": [
            ("Ms Tan", TEACHER_VOICE, "Good morning, class. Tomorrow is Tuesday, so let me remind you about your timetable. You start with English at eight o'clock, then Maths at nine fifteen. Break is at ten thirty. After break you have Science with Mr Lim in the lab. Don't forget your lab coat! Lunch is at twelve thirty in the canteen. In the afternoon you have PE outside, so bring your water bottle and sports shoes. School finishes at two forty-five. Any questions?"),
            ("Student", STUDENT_VOICE, "Do we need our Maths homework tomorrow?"),
            ("Ms Tan", TEACHER_VOICE, "Yes, please bring your Maths workbook. And remember, Thursday is Drama Club for those who signed up. See you tomorrow!"),
        ]
    },
    {
        "filename": "a2-w1-listening.mp3",
        "dialogue": [
            ("Sarah", FEMALE_VOICE, "Hey Jun Wei, do you wake up early on weekdays?"),
            ("Jun Wei", MALE_VOICE, "Yes, I have to! I wake up at six fifteen because my school is quite far. What about you?"),
            ("Sarah", FEMALE_VOICE, "I'm lucky – I wake up at seven because I live near my school. I just walk for ten minutes."),
            ("Jun Wei", MALE_VOICE, "That's nice! I take the bus for thirty minutes every morning. The bus is always full."),
            ("Sarah", FEMALE_VOICE, "Do you have time for breakfast?"),
            ("Jun Wei", MALE_VOICE, "Not really. I usually eat bread on the bus! But on weekends I wake up late, around nine or ten. Then my mum makes a big breakfast for the family."),
            ("Sarah", FEMALE_VOICE, "Weekends are the best! I always sleep until eight thirty on Saturdays. No school, no alarm clock!"),
        ]
    },
    {
        "filename": "a2-w2-listening.mp3",
        "dialogue": [
            ("Mr Krishnan", MALE_VOICE, "Good morning, everyone! Listen carefully. Next Friday is our School Sports Day. We will meet at the stadium at eight in the morning. Don't be late! You must wear your PE kit – that's your house T-shirt, shorts, and sports shoes. Bring a water bottle and a cap because it will be sunny."),
            ("Mr Krishnan", MALE_VOICE, "There are four events. First is the hundred-metre sprint at nine o'clock. Then we have long jump, relay race, and finally the fun obstacle course. Parents can watch from the stand."),
            ("Mr Krishnan", MALE_VOICE, "After all the events, we will have a prize-giving ceremony at twelve thirty. The principal will give medals to the winners. Remember, the most important thing is to try your best and have fun!"),
            ("Mr Krishnan", MALE_VOICE, "If it rains heavily, Sports Day will move to next Monday. Check the school website on Friday morning. Any questions? No? Okay, start warming up!"),
        ]
    },
    {
        "filename": "a2-w3-listening.mp3",
        "dialogue": [
            ("Mum", FEMALE_VOICE, "Wei, do you want to go to MacRitchie Reservoir this Sunday?"),
            ("Wei", STUDENT_VOICE, "Yes! Can we bring Xiao Hui?"),
            ("Mum", FEMALE_VOICE, "Good idea. I'll ask your aunt. We can have a picnic by the water."),
            ("Wei", STUDENT_VOICE, "Great! I'll bring my football. Can Ah Ma and Ah Gong come too?"),
            ("Mum", FEMALE_VOICE, "Ah Gong said he's a bit tired for a long walk, but maybe we can visit them for dinner after the reservoir."),
            ("Wei", STUDENT_VOICE, "Perfect! I'll tell Xiao Hui. She loves the playground there."),
            ("Mum", FEMALE_VOICE, "Okay. Let's meet at the reservoir car park at ten in the morning. Tell Xiao Hui to bring a hat because it's sunny this week."),
            ("Wei", STUDENT_VOICE, "Should I bring snacks?"),
            ("Mum", FEMALE_VOICE, "I'll pack sandwiches and fruit. You can bring some biscuits if you want. Don't forget your water bottle!"),
        ]
    },
    {
        "filename": "b1-w0-listening.mp3",
        "dialogue": [
            ("Ms Lim", TEACHER_VOICE, "Good morning, everyone, and welcome to Ang Mo Kio Secondary School. I'm Ms Lim, your Year Head. I know some of you are feeling nervous, especially if this is your first time in an English-medium school. That's completely normal."),
            ("Ms Lim", TEACHER_VOICE, "Let me explain how we can support you. Every morning, student leaders stand at the notice board near the canteen. If you have questions about the day's schedule, just ask them. They're here to help."),
            ("Ms Lim", TEACHER_VOICE, "There are also lunchtime study sessions in the library on Tuesdays and Thursdays. A teacher will be there to answer questions in a smaller, quieter group. You don't need to sign up – just come along."),
            ("Ms Lim", TEACHER_VOICE, "Remember, all your teachers know that some of you are still building confidence in English. Don't be afraid to ask someone to repeat something or explain it differently. Asking questions is a sign of a good learner, not a weak one."),
            ("Ms Lim", TEACHER_VOICE, "Finally, CCA sign-ups are next week. Joining a CCA is a great way to practise English in a relaxed setting and make friends. Good luck, and remember – we're all here to help you succeed!"),
        ]
    },
    {
        "filename": "b1-w1-listening.mp3",
        "dialogue": [
            ("Guide", FEMALE_VOICE, "Good afternoon, everyone, and welcome to the Sentosa Heritage Trail. My name is Janice and I'll be your guide today. Before we start, let me give you some important information."),
            ("Guide", FEMALE_VOICE, "The trail takes about ninety minutes to complete, and we'll walk about two kilometres. Please stay with the group and listen carefully at each stop. We'll visit six historical sites, including the old fort and the underground tunnels."),
            ("Guide", FEMALE_VOICE, "It's quite sunny today, so make sure you drink water regularly. We'll take a short break at the halfway point near the cannon display. If you need the restroom, that's the best time to go."),
            ("Guide", FEMALE_VOICE, "Please don't touch any of the historical structures or artefacts. They are very old and we need to preserve them for future generations. You can take photos, but no flash photography inside the tunnels, please."),
            ("Guide", FEMALE_VOICE, "Our trail starts at Fort Siloso and ends at the beach. When we finish, you'll have free time to explore or have lunch at the food court nearby. Any questions before we begin? No? Great, let's go!"),
        ]
    },
    {
        "filename": "b1-w2-listening.mp3",
        "dialogue": [
            ("Ethan", MALE_VOICE, "Hey Priya, have you tried that new app for Science revision? I think it's called QuizMaster or something."),
            ("Priya", FEMALE_VOICE, "Oh, you mean EduQuiz? Yeah, I downloaded it last week. It's actually really helpful! You can choose your subject and level, then it gives you practice questions."),
            ("Ethan", MALE_VOICE, "Does it cost money?"),
            ("Priya", FEMALE_VOICE, "No, the basic version is free. There's a premium version with more questions, but I think the free one is enough for us."),
            ("Ethan", MALE_VOICE, "Cool. I'm terrible at remembering the Periodic Table. Does it have flashcards?"),
            ("Priya", FEMALE_VOICE, "Yes! And you can make your own flashcards too. I made a set for Maths formulas. You can also share sets with classmates."),
            ("Ethan", MALE_VOICE, "That's useful. How much time do you spend on it?"),
            ("Priya", FEMALE_VOICE, "Maybe twenty minutes a day? I usually do a quick quiz on the MRT on my way home. It's better than scrolling through social media."),
            ("Ethan", MALE_VOICE, "True! I'll download it tonight. Thanks for the recommendation!"),
            ("Priya", FEMALE_VOICE, "No problem. Let me know if you want to join a study group on the app – we can compete on scores."),
        ]
    },
    {
        "filename": "b1-w3-listening.mp3",
        "dialogue": [
            ("Announcer", TEACHER_VOICE, "Attention all students. This is a reminder from the Eco Club about our Green Week, which starts next Monday."),
            ("Announcer", TEACHER_VOICE, "On Monday and Tuesday, we are collecting old newspapers, magazines, and cardboard boxes. Please bring them to the collection point outside the General Office. Make sure the paper is clean and dry – no food stains, please."),
            ("Announcer", TEACHER_VOICE, "On Wednesday, we're holding a Switch Off challenge. All classrooms should turn off lights and air-conditioning during recess to save electricity. The class that saves the most energy will win a prize."),
            ("Announcer", TEACHER_VOICE, "Thursday is our Reusable Bag Day. Instead of using plastic bags at the canteen, bring your own container or bag. The canteen stallholders have agreed to give a ten-cent discount if you bring your own container."),
            ("Announcer", TEACHER_VOICE, "Finally, on Friday, the Eco Club will give a short presentation during assembly about reducing food waste. We'll share some surprising facts and tips."),
            ("Announcer", TEACHER_VOICE, "Let's work together to make our school greener! If you have questions, see any Eco Club member. Thank you."),
        ]
    },
]

async def generate_audio_with_pauses(dialogue, output_path):
    """Generate audio for a dialogue with natural pauses between speakers."""
    print(f"Generating {output_path}...")
    
    # Generate individual audio segments
    temp_files = []
    for i, (speaker, voice, text) in enumerate(dialogue):
        temp_file = f"/tmp/segment_{i}.mp3"
        temp_files.append(temp_file)
        
        print(f"  - {speaker}: {text[:50]}...")
        communicate = edge_tts.Communicate(text, voice, rate="+0%")
        await communicate.save(temp_file)
    
    # If single speaker, just use that file
    if len(temp_files) == 1:
        os.rename(temp_files[0], output_path)
        print(f"✓ Created {output_path}")
        return
    
    # For multiple speakers, concatenate with ffmpeg
    try:
        import subprocess
        
        # Create concat file for ffmpeg
        concat_file = "/tmp/concat_list.txt"
        with open(concat_file, "w") as f:
            for temp_file in temp_files:
                f.write(f"file '{temp_file}'\n")
                # Add a 0.5 second silence between speakers
                silence_file = "/tmp/silence.mp3"
                if not os.path.exists(silence_file):
                    subprocess.run([
                        "ffmpeg", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono",
                        "-t", "0.5", "-q:a", "9", "-acodec", "libmp3lame", silence_file
                    ], capture_output=True)
                f.write(f"file '{silence_file}'\n")
        
        # Concatenate using ffmpeg
        subprocess.run([
            "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_file,
            "-c", "copy", output_path
        ], capture_output=True, check=True)
        
        # Clean up temp files
        for temp_file in temp_files:
            if os.path.exists(temp_file):
                os.remove(temp_file)
        if os.path.exists(concat_file):
            os.remove(concat_file)
        
        print(f"✓ Created {output_path}")
        
    except Exception as e:
        print(f"  Warning: Could not concatenate with ffmpeg ({e}), using first segment only")
        # Fallback: just use the first segment
        if os.path.exists(temp_files[0]):
            os.rename(temp_files[0], output_path)

async def main():
    """Generate all listening audio files."""
    print("Starting audio generation...\n")
    
    for config in AUDIO_CONFIGS:
        output_path = OUTPUT_DIR / config["filename"]
        await generate_audio_with_pauses(config["dialogue"], str(output_path))
        print()
    
    print("All audio files generated successfully!")
    print(f"Output directory: {OUTPUT_DIR.absolute()}")

if __name__ == "__main__":
    asyncio.run(main())
