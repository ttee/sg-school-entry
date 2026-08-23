#!/usr/bin/env python3
"""Re-dub trial talking clips so speech fills the mouth movement.

Short lines were padded with silence while mouths kept moving.
This writes longer Standard Singapore English and slows slightly
if needed, instead of leaving a dead tail.
"""
from __future__ import annotations

import asyncio
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import dub_trial_sg_child as d

PUBLIC = d.PUBLIC
WORK = d.WORK

# Longer lines: fill ~95% of each shot. Grammar stays standard SG English.
SHOTS: list[tuple[str, list[tuple[str, str]]]] = [
    (
        "a2-w0-setup.mp4",
        [
            ("mei", "Oh no! Where is my water bottle? I cannot find it."),
            ("priya", "Let's go to the Lost and Found. Aunty Tan can help."),
        ],
    ),
    (
        "a2-w0-counter.mp4",
        [
            ("auntie", "Is this your white bottle with the pink flower?"),
            ("mei", "Yes! That is mine. Thank you so much, Aunty Tan."),
        ],
    ),
    (
        "a2-w1-ask.mp4",
        [
            (
                "priya",
                "Mei, good morning. What time do you wake up every Monday morning for school?",
            ),
        ],
    ),
    (
        "a2-w1-form.mp4",
        [
            (
                "mei",
                "I wake up at six fifteen every Monday. My little sister Jia wakes later, because she goes to kindergarten.",
            ),
        ],
    ),
    (
        "b1-w0-story.mp4",
        [
            (
                "priya",
                "Just ask one question every lesson. That is how you get better here.",
            ),
        ],
    ),
    (
        "b1-w0-form.mp4",
        [
            (
                "mei",
                "I have been here for six months. I came last year, and I still study here.",
            ),
        ],
    ),
    (
        "sec-w0-story.mp4",
        [
            ("aisha", "The chicken rice looks really good today."),
            ("wei", "Yes. Let's sit by the window."),
        ],
    ),
    (
        "sec-w0-form.mp4",
        [
            (
                "wei",
                "Although I was nervous in the paper, I tried my best and I finished every question.",
            ),
        ],
    ),
]


def fill_to_duration(src: Path, dest: Path, target: float) -> None:
    """Keep speech covering the shot. Prefer more words; only tiny pad at the end."""
    dur = d.duration(src)
    if dur <= 0:
        raise RuntimeError(f"empty audio {src}")
    head = 0.16
    usable = max(target - head - 0.08, 0.5)
    ratio = dur / usable  # >1 means too long
    filters: list[str] = []
    if ratio > 1.16:
        raise RuntimeError(
            f"{src.name} speech {dur:.2f}s into {usable:.2f}s slot (ratio {ratio:.2f}). Cut a few words."
        )
    if ratio > 1.02:
        tempo = min(ratio, 1.12)
        filters.append(f"atempo={tempo:.4f}")
        dur = dur / tempo
    elif ratio < 0.94:
        tempo = max(ratio, 0.86)
        filters.append(f"atempo={tempo:.4f}")
        dur = dur / tempo
    filters.append(f"adelay={int(head * 1000)}|{int(head * 1000)}")
    filters.append("apad")
    filters.append(f"atrim=0:{target:.3f}")
    filters.append("loudnorm=I=-16:TP=-1.5:LRA=11")
    d.run(
        [
            d.FFMPEG,
            "-y",
            "-i",
            str(src),
            "-af",
            ",".join(filters),
            str(dest),
        ]
    )
    out_d = d.duration(dest)
    speech = min(dur + head, target)
    silent_tail = max(0.0, target - speech)
    print(f"    speech~{speech:.2f}s / {target:.2f}s  silent-tail {silent_tail:.2f}s")
    if silent_tail > 1.2:
        raise RuntimeError(
            f"{src.name} still has {silent_tail:.2f}s of silence. Add more words."
        )


async def redub(name: str, lines: list[tuple[str, str]]) -> None:
    src = PUBLIC / name
    print(f"\n=== {name} ===")
    target = d.duration(src)
    print(f"  video {target:.2f}s")
    silent = WORK / f"silent_{name}"
    d.run(
        [
            d.FFMPEG,
            "-y",
            "-i",
            str(src),
            "-map",
            "0:v:0",
            "-c:v",
            "copy",
            "-an",
            str(silent),
        ]
    )
    dialogue = await d.build_dialogue(lines, Path(name).stem, gap=0.14)
    fitted = WORK / f"fill_{Path(name).stem}.wav"
    fill_to_duration(dialogue, fitted, target)
    tmp = WORK / f"out_{name}"
    d.run(
        [
            d.FFMPEG,
            "-y",
            "-i",
            str(silent),
            "-i",
            str(fitted),
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
            "-t",
            f"{target:.3f}",
            "-movflags",
            "+faststart",
            str(tmp),
        ]
    )
    shutil.copyfile(tmp, src)
    print(f"  wrote {src}")


async def main() -> None:
    for name, lines in SHOTS:
        await redub(name, lines)
    # Keep weike week-0 in sync with recast trial faces.
    shutil.copyfile(PUBLIC / "a2-w0-setup.mp4", d.ROOT / "public" / "video" / "a2-w0.mp4")
    shutil.copyfile(PUBLIC / "b1-w0-story.mp4", d.ROOT / "public" / "video" / "b1-w0.mp4")
    print("\nDone.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except Exception as e:
        print(e, file=sys.stderr)
        raise
