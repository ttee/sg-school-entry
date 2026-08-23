#!/usr/bin/env python3
"""Export one-speaker TTS wavs for A2 Lost and Found lip-sync.

Audio first, then animate each still with that wav in Kling / Hedra.
Do not dub after image_to_video.
"""
from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import dub_trial_sg_child as d

PACK = d.ROOT / "studio" / "lipsync" / "a2-w0"
AUDIO = PACK / "audio"

# One speaker per clip. Slow, clear, standard Singapore English.
CLIPS: list[dict] = [
    {
        "id": "01-mei-setup",
        "speaker": "mei",
        "still": "stills/mei-setup.jpg",
        "text": "Oh no! Where is my water bottle? I cannot find it.",
        "scene": "corridor",
        "prompt": (
            "Mei, a 6-year-old Singapore primary girl with a short black bob "
            "and pink backpack, chest-up in a school corridor, talking to camera "
            "with realistic lip sync, clear mouth shapes for P B M, worried face, "
            "small head movement, painterly cartoon, one speaker only."
        ),
    },
    {
        "id": "02-priya-setup",
        "speaker": "priya",
        "still": "stills/priya-setup.jpg",
        "text": "Let's go to the Lost and Found.",
        "scene": "corridor",
        "prompt": (
            "Priya, a 6-year-old Singapore primary girl with a long black ponytail "
            "and blue backpack, chest-up in a school corridor, talking to camera "
            "with realistic lip sync, clear enunciation, kind face, small nod, "
            "painterly cartoon, one speaker only."
        ),
    },
    {
        "id": "03-auntie-ask",
        "speaker": "auntie",
        "still": "stills/auntie-office.jpg",
        "text": "Is this your white water bottle with the pink flower?",
        "scene": "office",
        "prompt": (
            "Aunty Tan, motherly Singapore school staff, curly grey hair, glasses, "
            "pink polo, chest-up at the Lost and Found counter, holding a white "
            "water bottle with a pink flower, talking to camera with realistic lip sync, "
            "clear mouth shapes for P B M, warm high motherly voice, painterly cartoon, "
            "one speaker only."
        ),
    },
    {
        "id": "04-mei-mine",
        "speaker": "mei",
        "still": "stills/mei-office.jpg",
        "text": "Yes, Aunty! That is my white water bottle!",
        "scene": "office",
        "prompt": (
            "Mei, short black bob, pink backpack, navy pinafore, chest-up at the "
            "Lost and Found counter, talking to camera with realistic lip sync, "
            "clear mouth shapes, excited smile, small nod, painterly cartoon, "
            "one speaker only."
        ),
    },
    {
        "id": "05-auntie-here",
        "speaker": "auntie",
        "still": "stills/auntie-office.jpg",
        "text": "Here you are. Please take it.",
        "scene": "office",
        "prompt": (
            "Aunty Tan, motherly Singapore school staff, chest-up at the Lost and "
            "Found counter, holding out the white water bottle, talking to camera "
            "with realistic lip sync, warm high motherly voice, painterly cartoon, "
            "one speaker only."
        ),
    },
    {
        "id": "06-priya-found",
        "speaker": "priya",
        "still": "stills/priya-office.jpg",
        "text": "We found it!",
        "scene": "office",
        "prompt": (
            "Priya, long black ponytail, blue backpack, chest-up at the Lost and "
            "Found counter, talking with realistic lip sync, clear mouth shapes, "
            "happy face, small clap or hand gesture, painterly cartoon, one speaker only."
        ),
    },
    {
        "id": "07-mei-found",
        "speaker": "mei",
        "still": "stills/mei-office.jpg",
        "text": "We found it!",
        "scene": "office",
        "prompt": (
            "Mei, short black bob, pink backpack, chest-up at the Lost and Found "
            "counter, talking with realistic lip sync, happy face, small excited "
            "gesture, painterly cartoon, one speaker only."
        ),
    },
    {
        "id": "08-mei-thanks",
        "speaker": "mei",
        "still": "stills/mei-office.jpg",
        "text": "Thank you, Aunty!",
        "scene": "office",
        "prompt": (
            "Mei, short black bob, pink backpack, chest-up at the Lost and Found "
            "counter, talking to camera with realistic lip sync, clear mouth shapes, "
            "grateful smile, small nod, painterly cartoon, one speaker only."
        ),
    },
]


def trim_speech(src: Path, dest: Path) -> None:
    af = (
        "silenceremove=start_periods=1:start_duration=0.04:start_threshold=-34dB:"
        "stop_periods=-1:stop_duration=0.14:stop_threshold=-34dB:stop_silence=0.08,"
        "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo"
    )
    d.run([d.FFMPEG, "-y", "-i", str(src), "-af", af, str(dest)])


def to_mp3(src: Path, dest: Path) -> None:
    d.run(
        [
            d.FFMPEG,
            "-y",
            "-i",
            str(src),
            "-codec:a",
            "libmp3lame",
            "-q:a",
            "2",
            str(dest),
        ]
    )


async def main() -> None:
    AUDIO.mkdir(parents=True, exist_ok=True)
    out_clips = []
    for c in CLIPS:
        raw = AUDIO / f"{c['id']}.raw.wav"
        wav = AUDIO / f"{c['id']}.wav"
        mp3 = AUDIO / f"{c['id']}.mp3"
        print(f"TTS {c['speaker']}: {c['text']}")
        await d.tts_to_wav(c["text"], c["speaker"], raw)
        trim_speech(raw, wav)
        raw.unlink(missing_ok=True)
        to_mp3(wav, mp3)
        dur = d.duration(wav)
        print(f"  {dur:.2f}s -> {wav.name}")
        out_clips.append(
            {
                **{k: c[k] for k in ("id", "speaker", "still", "text", "scene", "prompt")},
                "wav": f"audio/{c['id']}.wav",
                "mp3": f"audio/{c['id']}.mp3",
                "duration_s": round(dur, 2),
            }
        )
    (PACK / "clips.json").write_text(
        json.dumps({"lesson": "A2 Lost and Found", "clips": out_clips}, indent=2)
        + "\n",
        encoding="utf-8",
    )
    print(f"wrote {PACK / 'clips.json'}")


if __name__ == "__main__":
    asyncio.run(main())
