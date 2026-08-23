#!/usr/bin/env python3
"""Dub trial cartoons with Singapore English + age-appropriate voices.

Girls Mei and Priya: en-SG-LunaNeural, then pitch-shifted to a 6–7-year-old range.
Aunty Tan: same SG female, pitched down (adult staff).
Wei / teacher: en-SG-WayneNeural (teen / adult male).
Aisha: en-SG-LunaNeural, teen (not child-shifted).

Grammar is Standard Singapore English: no lah/ah/one particles.
"""
from __future__ import annotations

import asyncio
import subprocess
import sys
from pathlib import Path

import edge_tts

FFMPEG = (
    "/mnt/c/Users/DT/AppData/Local/Microsoft/WinGet/Packages/"
    "Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/"
    "ffmpeg-9.0-full_build/bin/ffmpeg.exe"
)
FFPROBE = (
    "/mnt/c/Users/DT/AppData/Local/Microsoft/WinGet/Packages/"
    "Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/"
    "ffmpeg-9.0-full_build/bin/ffprobe.exe"
)

ROOT = Path("/home/dt/sg-school-entry")
PUBLIC = ROOT / "public" / "trial"
SESSION_VID = Path(
    "/home/dt/.grok/sessions/%2Fhome%2Fdt/01a01e3b-0ace-73a2-bdd8-52e6d3a05ac3/videos"
)
WORK = Path("/tmp/sgdub")
WORK.mkdir(parents=True, exist_ok=True)

# Locked SG voices. Girls are 6–7 after rubberband pitch-up.
CAST = {
    # rubberband pitch is a frequency SCALE, not semitones. 2^(st/12).
    # +6 st ≈ 1.41 (6–7 girl); +4.5 st ≈ 1.30; −2.5 st ≈ 0.87
    "mei": {
        "voice": "en-SG-LunaNeural",
        "rate": "+8%",
        "pitch_scale": 1.41,  # 6–7 year old girl
    },
    "priya": {
        "voice": "en-SG-LunaNeural",
        "rate": "+4%",
        "pitch_scale": 1.30,  # 6–7, a little lower than Mei
    },
    "auntie": {
        "voice": "en-SG-LunaNeural",
        "rate": "-4%",
        "pitch_scale": 0.87,  # older staff aunty
    },
    "wei": {
        "voice": "en-SG-WayneNeural",
        "rate": "+4%",
        "pitch_scale": 1.09,  # teenage boy
    },
    "aisha": {
        "voice": "en-SG-LunaNeural",
        "rate": "+2%",
        "pitch_scale": 1.06,  # teenage girl
    },
    "teacher": {
        "voice": "en-SG-WayneNeural",
        "rate": "-4%",
        "pitch_scale": 1.00,  # adult male teacher
    },
}


def run(cmd: list[str], check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, check=check, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def duration(path: Path) -> float:
    out = run(
        [
            FFPROBE,
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ]
    )
    return float(out.stdout.decode().strip())


async def tts_to_wav(text: str, speaker: str, dest: Path) -> None:
    cfg = CAST[speaker]
    raw_mp3 = dest.with_suffix(".raw.mp3")
    comm = edge_tts.Communicate(text, cfg["voice"], rate=cfg["rate"], pitch="+0Hz")
    await comm.save(str(raw_mp3))
    scale = cfg["pitch_scale"]
    # formant=shifted: smaller vocal tract with higher pitch (child, not chipmunk adult)
    af = (
        f"rubberband=pitch={scale}:formant=shifted:pitchq=quality,"
        "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo"
    )
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(raw_mp3),
            "-af",
            af,
            str(dest),
        ]
    )


def silence_wav(dest: Path, seconds: float) -> None:
    run(
        [
            FFMPEG,
            "-y",
            "-f",
            "lavfi",
            "-i",
            "anullsrc=r=48000:cl=stereo",
            "-t",
            f"{seconds:.3f}",
            str(dest),
        ]
    )


def concat_wavs(parts: list[Path], dest: Path) -> None:
    lst = dest.with_suffix(".txt")
    lst.write_text("".join(f"file '{p}'\n" for p in parts), encoding="utf-8")
    run(
        [
            FFMPEG,
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(lst),
            "-c",
            "pcm_s16le",
            str(dest),
        ]
    )


def fit_to_duration(src: Path, dest: Path, target: float) -> None:
    dur = duration(src)
    if dur <= 0:
        raise RuntimeError(f"empty audio {src}")
    # Never chop a line off. Child pace stays natural; only a light squeeze.
    ratio = dur / target
    if ratio > 1.15:
        raise RuntimeError(
            f"{src.name} dialogue is {dur:.2f}s but the shot is {target:.2f}s "
            f"(ratio {ratio:.2f}). Shorten the lines."
        )
    filters = []
    if ratio > 1.02:
        filters.append(f"atempo={min(ratio, 1.12):.4f}")
        filters.append("apad")
        filters.append(f"atrim=0:{target:.3f}")
    elif ratio < 0.92:
        pad = target - dur
        head = min(0.35, pad * 0.25)
        filters.append(f"adelay={int(head * 1000)}|{int(head * 1000)}")
        filters.append("apad")
        filters.append(f"atrim=0:{target:.3f}")
    else:
        filters.append("apad")
        filters.append(f"atrim=0:{target:.3f}")
    filters.append("loudnorm=I=-16:TP=-1.5:LRA=11")
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(src),
            "-af",
            ",".join(filters),
            str(dest),
        ]
    )


def mux(video: Path, audio: Path, dest: Path) -> None:
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(video),
            "-i",
            str(audio),
            "-map",
            "0:v:0",
            "-map",
            "1:a:0",
            "-c:v",
            "copy",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-ac",
            "2",
            "-ar",
            "48000",
            "-shortest",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def concat_mp4(parts: list[Path], dest: Path) -> None:
    lst = WORK / f"{dest.stem}.concat.txt"
    lst.write_text("".join(f"file '{p}'\n" for p in parts), encoding="utf-8")
    run(
        [
            FFMPEG,
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(lst),
            "-c",
            "copy",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


async def build_dialogue(lines: list[tuple[str, str]], stem: str, gap: float = 0.28) -> Path:
    parts: list[Path] = []
    sil = WORK / f"{stem}_gap.wav"
    silence_wav(sil, gap)
    for i, (speaker, text) in enumerate(lines):
        wav = WORK / f"{stem}_{i}_{speaker}.wav"
        print(f"  TTS {speaker}: {text}")
        await tts_to_wav(text, speaker, wav)
        print(f"    {duration(wav):.2f}s")
        if i:
            parts.append(sil)
        parts.append(wav)
    out = WORK / f"{stem}_dialogue.wav"
    concat_wavs(parts, out)
    print(f"  dialogue {stem}: {duration(out):.2f}s")
    return out


async def dub_shot(
    video: Path, lines: list[tuple[str, str]], stem: str, dest: Path
) -> None:
    print(f"\n=== {stem}  ({video.name}) ===")
    target = duration(video)
    print(f"  video {target:.2f}s")
    dialogue = await build_dialogue(lines, stem)
    fitted = WORK / f"{stem}_fitted.wav"
    fit_to_duration(dialogue, fitted, target)
    print(f"  fitted {duration(fitted):.2f}s")
    mux(video, fitted, dest)
    print(f"  wrote {dest} ({duration(dest):.2f}s)")


async def main() -> None:
    # Scene 1 corridor
    s27 = WORK / "s27.mp4"
    await dub_shot(
        SESSION_VID / "27.mp4",
        [
            (
                "mei",
                "Oh no! Where is my water bottle? I put it in my bag this morning!",
            ),
            (
                "priya",
                "Mei, what happened? Are you looking for your white bottle with the pink flower?",
            ),
        ],
        "s27",
        s27,
    )

    s28 = WORK / "s28.mp4"
    await dub_shot(
        SESSION_VID / "28.mp4",
        [
            ("priya", "I have an idea! Let's go to the Lost and Found."),
            ("mei", "Okay! Let's go quickly!"),
        ],
        "s28",
        s28,
    )

    setup = PUBLIC / "a2-w0-setup.mp4"
    concat_mp4([s27, s28], setup)
    print(f"SETUP {duration(setup):.2f}s -> {setup}")

    # Scene 2 counter
    s29 = WORK / "s29.mp4"
    await dub_shot(
        SESSION_VID / "29.mp4",
        [
            ("auntie", "Hello, girls. Can I help you?"),
            ("mei", "Hello, Aunty. I lost my water bottle."),
            (
                "priya",
                "It is white, with a pink flower. Can we check here, please?",
            ),
        ],
        "s29",
        s29,
    )

    s30 = WORK / "s30.mp4"
    await dub_shot(
        SESSION_VID / "30.mp4",
        [
            (
                "auntie",
                "Is this your bottle? White, with a pink flower, and the name Tan Mei?",
            ),
            ("mei", "Yes! That is mine! Thank you, Aunty Tan!"),
        ],
        "s30",
        s30,
    )

    s31 = WORK / "s31.mp4"
    await dub_shot(
        SESSION_VID / "31.mp4",
        [
            ("auntie", "Here you go. Remember to zip your bag next time."),
            ("mei", "Yes, Aunty. Thank you very much!"),
            ("priya", "Friends help each other. Go to Lost and Found!"),
        ],
        "s31",
        s31,
    )

    counter = PUBLIC / "a2-w0-counter.mp4"
    concat_mp4([s29, s30, s31], counter)
    print(f"COUNTER {duration(counter):.2f}s -> {counter}")

    singles = [
        (
            "a2-w1-ask.mp4",
            [("priya", "What time do you wake up?")],
            "a2w1ask",
        ),
        (
            "a2-w1-form.mp4",
            [("mei", "I wake up at six fifteen. My sister wakes later.")],
            "a2w1form",
        ),
        (
            "b1-w0-story.mp4",
            [("priya", "Just ask one question every lesson.")],
            "b1story",
        ),
        (
            "b1-w0-form.mp4",
            [("mei", "I have been here for six months. I came last year.")],
            "b1form",
        ),
        (
            "sec-w0-story.mp4",
            [
                ("aisha", "The chicken rice looks good."),
                ("wei", "Yes. Let's sit by the window."),
            ],
            "secstory",
        ),
        (
            "sec-w0-form.mp4",
            [("wei", "Although I was nervous, I tried.")],
            "secform",
        ),
    ]
    for name, lines, stem in singles:
        src = PUBLIC / name
        bak = WORK / f"src_{name}"
        bak.write_bytes(src.read_bytes())
        await dub_shot(bak, lines, stem, src)

    print("\nDone.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except subprocess.CalledProcessError as e:
        sys.stderr.write(e.stderr.decode()[-4000:] if e.stderr else str(e))
        raise
