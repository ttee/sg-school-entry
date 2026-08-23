# A2 Lost and Found — lip-sync pack

Audio first. Then animate **one still + one wav**. Do not generate video from a text prompt and dub later.

Voices are locked: `en-SG-LunaNeural`, Mei/Priya pitched to 6–7, Aunty pitched down. Grammar is standard Singapore English.

## How to shoot

1. Open Kling, Hedra, or another tool that takes **image + audio**.
2. For each clip below: drop the still, drop the wav (or mp3), paste the video prompt.
3. Duration = the audio length. Do not pad to 10 seconds.
4. One speaker per clip. Concat in order with ffmpeg when all seven files are back.

```bash
# after you have 01.mp4 … 07.mp4 at the same size and fps
ffmpeg -f concat -safe 0 -i list.txt -c copy a2-w0-lipsync.mp4
```

Corridor concat: `01` + `02` → replace `public/trial/a2-w0-setup.mp4`  
Office concat: `03` + `04` + `05` + `06` + `07` → replace `public/trial/a2-w0-counter.mp4`

Do not overlay two mouths in one generation. If you want Mei and Priya at the same time, generate `06` and `07` separately and mix in the editor.

## Clips

### 01 — Mei, corridor
- Still: `stills/mei-setup.jpg`
- Audio: `audio/01-mei-setup.wav`
- TTS: Oh no! Where is my water bottle? I cannot find it.
- Prompt: Mei, a 6-year-old Singapore primary girl with a short black bob and pink backpack, chest-up in a school corridor, talking to camera with realistic lip sync, clear mouth shapes for P B M, worried face, small head movement, painterly cartoon, one speaker only.

### 02 — Priya, corridor
- Still: `stills/priya-setup.jpg`
- Audio: `audio/02-priya-setup.wav`
- TTS: Let's go to the Lost and Found. OK.
- Prompt: Priya, a 6-year-old Singapore primary girl with a long black ponytail and blue backpack, chest-up in a school corridor, talking to camera with realistic lip sync, clear enunciation, kind face, small nod, painterly cartoon, one speaker only.

### 03 — Aunty Tan, office
- Still: `stills/auntie-office.jpg`
- Audio: `audio/03-auntie-ask.wav`
- TTS: Is this your white water bottle with the pink flower?
- Prompt: Aunty Tan, motherly Singapore school staff, curly grey hair, glasses, pink polo, chest-up at the Lost and Found counter, holding a white water bottle with a pink flower, talking to camera with realistic lip sync, clear mouth shapes for P B M, warm high motherly voice, painterly cartoon, one speaker only.

### 04 — Mei, office
- Still: `stills/mei-office.jpg`
- Audio: `audio/04-mei-mine.wav`
- TTS: Yes, Aunty! That is my white water bottle!
- Prompt: Mei, short black bob, pink backpack, navy pinafore, chest-up at the Lost and Found counter, talking to camera with realistic lip sync, clear mouth shapes, excited smile, small nod, painterly cartoon, one speaker only.

### 05 — Aunty Tan, office (handoff — her mouth is still moving)
- Still: `stills/auntie-office.jpg`
- Audio: `audio/05-auntie-here.wav`
- TTS: Here you are. Please take it.
- Prompt: Aunty Tan, motherly Singapore school staff, chest-up at the Lost and Found counter, holding out the white water bottle, talking to camera with realistic lip sync, warm high motherly voice, painterly cartoon, one speaker only.

### 06 — Priya, office
- Still: `stills/priya-office.jpg`
- Audio: `audio/06-priya-found.wav`
- TTS: Wow, that's great!
- Prompt: Priya, long black ponytail, blue backpack, chest-up at the Lost and Found counter, talking with realistic lip sync, clear mouth shapes, happy face, small clap or hand gesture, painterly cartoon, one speaker only.

### 07 — Mei, office
- Still: `stills/mei-office.jpg`
- Audio: `audio/07-mei-found.wav`
- TTS: We found it!
- Prompt: Mei, short black bob, pink backpack, chest-up at the Lost and Found counter, talking with realistic lip sync, happy face, small excited gesture, painterly cartoon, one speaker only.

### 08 — Mei, office
- Still: `stills/mei-office.jpg`
- Audio: `audio/08-mei-thanks.wav`
- TTS: Thank you, Aunty!
- Prompt: Mei, short black bob, pink backpack, chest-up at the Lost and Found counter, talking to camera with realistic lip sync, clear mouth shapes, grateful smile, small nod, painterly cartoon, one speaker only.

Shoot 06 then 07 in order: Priya says "Wow, that's great!" first; Mei says "We found it!" next. Do not skip 05 — Aunty's mouth is still moving on the handoff.

## Lesson targets (keep these words)

Is this your…? / my white water bottle / Here you are. / We found it! / Thank you, Aunty!

## Rebuild audio

```bash
python3 scripts/export_lipsync_pack.py
```
