#!/usr/bin/env python3
"""Place A2 office (Lost and Found) lines on the mouth-beat timeline.

The counter clip mouths in five turns, not Auntie-then-Mei. Sequential
TTS also left ~1s of silence after every sentence, so mouths kept moving
on dead air. This trims that padding and drops each line into its window.
"""
from __future__ import annotations

import asyncio
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import dub_trial_sg_child as d

# (start, end, speaker, text) — times from 0.5s frame read of a2-w0-counter.mp4
# W0 targets: Is this your…?; a/an/the; this/that; your/mine; Thank you, Aunty.
BEATS: list[tuple[float, float, str, str]] = [
    (
        0.16,
        2.70,
        "auntie",
        "Is this your white water bottle with the pink flower?",
    ),
    (2.76, 5.30, "mei", "Yes, Aunty! That is my white water bottle!"),
    # Aunty still mouths while she hands the bottle over.
    (5.38, 7.16, "auntie", "Here you are. Please take it."),
    (7.18, 8.70, "priya", "Wow, that's great!"),
    (8.54, 10.02, "mei", "We found it!"),
    (10.08, 11.50, "mei", "Thank you, Aunty!"),
]


def trim_speech(src: Path, dest: Path) -> None:
    """Drop lead/trail silence and collapse long gaps from punctuation."""
    af = (
        "silenceremove=start_periods=1:start_duration=0.04:start_threshold=-34dB:"
        "stop_periods=-1:stop_duration=0.14:stop_threshold=-34dB:stop_silence=0.07,"
        "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo"
    )
    d.run([d.FFMPEG, "-y", "-i", str(src), "-af", af, str(dest)])


def fit_slot(src: Path, dest: Path, slot: float) -> None:
    dur = d.duration(src)
    if dur <= 0:
        raise RuntimeError(f"empty {src}")
    if slot < 0.4:
        raise RuntimeError(f"slot too short {slot:.2f}s")
    ratio = dur / slot
    filters: list[str] = []
    if ratio > 1.22:
        raise RuntimeError(
            f"{src.name} {dur:.2f}s into {slot:.2f}s slot (ratio {ratio:.2f}). Cut words."
        )
    if ratio > 1.03:
        tempo = min(ratio, 1.20)
        filters.append(f"atempo={tempo:.4f}")
        dur = dur / tempo
    elif ratio < 0.90:
        tempo = max(ratio, 0.86)
        filters.append(f"atempo={tempo:.4f}")
        dur = dur / tempo
    filters.append("apad")
    filters.append(f"atrim=0:{slot:.3f}")
    d.run([d.FFMPEG, "-y", "-i", str(src), "-af", ",".join(filters), str(dest)])
    print(f"    fit {d.duration(dest):.2f}s / {slot:.2f}s  (src {dur:.2f}s speech)")


async def mix_beats(beats: list[tuple[float, float, str, str]], target: float) -> Path:
    work = d.WORK / "office_timed"
    work.mkdir(parents=True, exist_ok=True)
    fitted: list[Path] = []
    starts: list[float] = []
    for i, (start, end, speaker, text) in enumerate(beats):
        if end <= start:
            raise RuntimeError(f"bad window {start}-{end}")
        raw = work / f"{i}_{speaker}_raw.wav"
        trimmed = work / f"{i}_{speaker}_trim.wav"
        slot = work / f"{i}_{speaker}_slot.wav"
        print(f"  {start:5.2f}-{end:5.2f}  {speaker:7s}  {text}")
        await d.tts_to_wav(text, speaker, raw)
        trim_speech(raw, trimmed)
        print(f"    tts {d.duration(raw):.2f}s  trim {d.duration(trimmed):.2f}s")
        fit_slot(trimmed, slot, end - start)
        fitted.append(slot)
        starts.append(start)

    cmd: list[str] = [d.FFMPEG, "-y"]
    for p in fitted:
        cmd += ["-i", str(p)]
    n = len(fitted)
    parts: list[str] = []
    overlapping = set()
    for i, (s1, e1, _, _) in enumerate(beats):
        for j, (s2, e2, _, _) in enumerate(beats):
            if i < j and s1 < e2 and s2 < e1:
                overlapping.add(i)
                overlapping.add(j)
    for i, start in enumerate(starts):
        ms = int(round(start * 1000))
        vol = "volume=0.88," if i in overlapping else ""
        parts.append(
            f"[{i}]{vol}adelay={ms}|{ms},apad,atrim=0:{target:.3f}[a{i}]"
        )
    mix_in = "".join(f"[a{i}]" for i in range(n))
    parts.append(
        f"{mix_in}amix=inputs={n}:dropout_transition=0:normalize=0,"
        f"loudnorm=I=-16:TP=-1.5:LRA=11[out]"
    )
    mixed = work / "office_mix.wav"
    cmd += ["-filter_complex", ";".join(parts), "-map", "[out]", str(mixed)]
    d.run(cmd)
    print(f"  mix {d.duration(mixed):.2f}s")
    return mixed


async def main() -> None:
    src = d.PUBLIC / "a2-w0-counter.mp4"
    target = d.duration(src)
    print(f"=== a2-w0-counter.mp4  {target:.2f}s ===")
    bak = d.WORK / "a2-w0-counter.before-timed.mp4"
    if not bak.exists():
        shutil.copyfile(src, bak)
        print(f"  backup {bak}")
    mixed = await mix_beats(BEATS, target)
    silent = d.WORK / "silent_a2-w0-counter.mp4"
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
    tmp = d.WORK / "out_a2-w0-counter.mp4"
    d.run(
        [
            d.FFMPEG,
            "-y",
            "-i",
            str(silent),
            "-i",
            str(mixed),
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
    print(f"  wrote {src} ({d.duration(src):.2f}s)")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except Exception as e:
        print(e, file=sys.stderr)
        raise
