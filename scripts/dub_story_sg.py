#!/usr/bin/env python3
"""Replace Imagine voices on 课文 clips with en-SG-LunaNeural.

Mei/Priya are pitched to 6–7. Ms Tan, Aunty, and PA stay adult Singapore female.
"""
from __future__ import annotations

import asyncio
import re
import shutil
import subprocess
import sys
from pathlib import Path

import edge_tts

ROOT = Path("/home/dt/sg-school-entry")
FFMPEG = "/home/dt/math-brilliant/node_modules/ffmpeg-static/ffmpeg"
WORK = Path("/tmp/sgdub-stories")
WORK.mkdir(parents=True, exist_ok=True)

CAST = {
    "mei": {
        "voice": "en-SG-LunaNeural",
        "rate": "+8%",
        "pitch_scale": 1.41,
        "tts_pitch": "+0Hz",
    },
    "priya": {
        "voice": "en-SG-LunaNeural",
        "rate": "+4%",
        "pitch_scale": 1.30,
        "tts_pitch": "+0Hz",
    },
    "auntie": {
        "voice": "en-SG-LunaNeural",
        "rate": "+6%",
        "pitch_scale": 1.16,
        "tts_pitch": "+10Hz",
    },
    "mstan": {
        "voice": "en-SG-LunaNeural",
        "rate": "-4%",
        "pitch_scale": 1.08,
        "tts_pitch": "+5Hz",
    },
    "pa": {
        "voice": "en-SG-LunaNeural",
        "rate": "-6%",
        "pitch_scale": 1.06,
        "tts_pitch": "+0Hz",
    },
}

# (speaker, line) in order — matches the filmed mouths.
CLIPS: list[dict] = [
    {
        "path": ROOT / "public/curriculum/stories/1.mp4",
        "audio_dir": "1",
        "lines": [
            ("mstan", "Good morning, class."),
            ("mei", "Good morning, Ms Tan."),
            ("priya", "Where do we line up?"),
            ("mei", "I am in Blue House."),
        ],
    },
    {
        "path": ROOT / "public/trial/a2-w0-setup.mp4",
        "lines": [
            ("mei", "Oh no! Where is my water bottle? I cannot find it."),
            ("priya", "Let's go to the Lost and Found."),
        ],
    },
    {
        "path": ROOT / "public/trial/a2-w0-counter.mp4",
        "lines": [
            ("auntie", "Is this your white water bottle with the pink flower?"),
            ("mei", "Yes, Aunty! That is my white water bottle!"),
            ("auntie", "Here you are. Please take it."),
            ("priya", "Wow, that's great!"),
            ("mei", "We found it!"),
            ("mei", "Thank you, Aunty!"),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/3.mp4",
        "audio_dir": "3",
        "lines": [
            ("mei", "Can I borrow a pencil, please?"),
            ("priya", "Yes. Here you are."),
            ("mei", "Thank you."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/5.mp4",
        "audio_dir": "5",
        "lines": [
            ("mstan", "Line up quickly."),
            ("mstan", "Do not run."),
            ("mstan", "Leave your bags."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/6.mp4",
        "audio_dir": "6",
        "lines": [
            ("mei", "Where are the picture books?"),
            ("mei", "I would like to borrow this."),
            ("mei", "When must I return it?"),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/13.mp4",
        "audio_dir": "13",
        "lines": [
            ("mei", "It leaked because I dropped it."),
            ("priya", "Let's go to the Lost and Found."),
            ("mei", "I will buy a new one."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/14.mp4",
        "audio_dir": "14",
        "lines": [
            ("mei", "How much is this workbook?"),
            ("mei", "I have ten dollars."),
            ("auntie", "Here is your change."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/16.mp4",
        "audio_dir": "16",
        "lines": [
            ("mei", "I would like chicken rice, please."),
            ("mei", "Is it spicy?"),
            ("priya", "Can we share a table?"),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/20.mp4",
        "audio_dir": "20",
        "lines": [
            ("mei", "We need a loaf of bread."),
            ("mei", "How much are the eggs?"),
            ("auntie", "Please pack them."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/31.mp4",
        "audio_dir": "31",
        "lines": [
            ("priya", "Would you like a biscuit?"),
            ("mei", "No, thank you."),
            ("priya", "Maybe later."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/56.mp4",
        "audio_dir": "56",
        "lines": [
            ("pa", "PE is cancelled."),
            ("pa", "Meet at the hall at 7:50."),
            ("pa", "Bring your water bottle."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/63.mp4",
        "audio_dir": "63",
        "lines": [
            ("mei", "I feel nervous."),
            ("priya", "Let's breathe slowly."),
            ("priya", "You are ready."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/4.mp4",
        "audio_dir": "4",
        "lines": [
            ("mei", "What do you think?"),
            ("priya", "I agree because it is fair."),
            ("mei", "Shall we try this?"),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/7.mp4",
        "audio_dir": "7",
        "lines": [
            ("mei", "I prefer basketball to art."),
            ("priya", "Why do you like it?"),
            ("mei", "Let's try both."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/8.mp4",
        "audio_dir": "8",
        "lines": [
            ("mstan", "Mei has been working hard."),
            ("mstan", "She still needs help with articles."),
            ("priya", "How can we practise at home?"),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/12.mp4",
        "audio_dir": "12",
        "lines": [
            ("mei", "Priya was faster than me."),
            ("mei", "Come on, Blue House!"),
            ("priya", "It was the best race."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/22.mp4",
        "audio_dir": "22",
        "lines": [
            ("mei", "Shall we go on Sunday?"),
            ("priya", "Why don't we take the MRT?"),
            ("mei", "Let's leave at nine."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/30.mp4",
        "audio_dir": "30",
        "lines": [
            ("priya", "Have you been here long?"),
            ("priya", "Come with me to the canteen."),
            ("priya", "You can sit here."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/38.mp4",
        "audio_dir": "38",
        "lines": [
            ("mei", "Which platform is it?"),
            ("pa", "Please mind the gap."),
            ("priya", "We alight at Bedok."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/42.mp4",
        "audio_dir": "42",
        "lines": [
            ("mei", "I have a sore throat."),
            ("priya", "You should rest."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/78.mp4",
        "audio_dir": "78",
        "lines": [
            ("pa", "Please mind the gap."),
            ("pa", "Please let passengers alight first."),
            ("pa", "Doors closing. Please stand clear."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/80.mp4",
        "audio_dir": "80",
        "lines": [
            ("pa", "PE is cancelled."),
            ("pa", "Please proceed to the hall at 7:50."),
            ("pa", "Bring your water bottle."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/81.mp4",
        "audio_dir": "81",
        "lines": [
            ("pa", "Please take a queue number."),
            ("pa", "Now serving A12."),
            ("pa", "Please wait to be called."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/84.mp4",
        "audio_dir": "84",
        "lines": [
            ("mei", "Water supply will be disrupted from 9 a.m. to 5 p.m."),
            ("priya", "Please store some water."),
            ("mei", "The lift is under maintenance."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/18.mp4",
        "audio_dir": "18",
        "lines": [
            ("mei", "We are going to visit Ah Ma."),
            ("mei", "First we clean the house."),
            ("mei", "Gong Xi Fa Cai."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/21.mp4",
        "audio_dir": "21",
        "lines": [
            ("mei", "Excuse me, the lift is not working."),
            ("auntie", "We have to take the stairs to the twelfth storey."),
            ("mei", "Our unit is 12-345."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/41.mp4",
        "audio_dir": "41",
        "lines": [
            ("mei", "We could hear the drums."),
            ("priya", "The flag went up."),
            ("mei", "It was unforgettable."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/43.mp4",
        "audio_dir": "43",
        "lines": [
            ("mstan", "Paper is recycled in the blue bin."),
            ("mei", "We should reduce waste."),
            ("priya", "Put cans here."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/45.mp4",
        "audio_dir": "45",
        "lines": [
            ("mei", "There are many lights."),
            ("priya", "The street looks beautiful."),
            ("mei", "We respect this festival."),
        ],
    },
    {
        "path": ROOT / "public/curriculum/stories/82.mp4",
        "audio_dir": "82",
        "lines": [
            ("auntie", "Please register at the counter."),
            ("auntie", "Please have your NRIC or appointment card ready."),
            ("pa", "Visiting hours are from 12 p.m. to 8 p.m."),
        ],
    },
]


def run(cmd: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def duration(path: Path) -> float:
    r = subprocess.run(
        [FFMPEG, "-i", str(path)], stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    m = re.search(r"Duration: (\d+):(\d+):(\d+\.\d+)", r.stderr.decode())
    if not m:
        return 0.0
    h, mi, s = m.groups()
    return int(h) * 3600 + int(mi) * 60 + float(s)


def speech_windows(video: Path) -> list[tuple[float, float]]:
    wav = WORK / "probe.wav"
    run([FFMPEG, "-y", "-i", str(video), "-vn", "-ac", "1", "-ar", "16000", str(wav)])
    r = subprocess.run(
        [
            FFMPEG,
            "-i",
            str(wav),
            "-af",
            "silencedetect=n=-32dB:d=0.20",
            "-f",
            "null",
            "-",
        ],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    log = r.stderr.decode()
    dur = duration(video)
    starts = [float(x) for x in re.findall(r"silence_start: ([0-9.]+)", log)]
    ends = [float(x) for x in re.findall(r"silence_end: ([0-9.]+)", log)]
    # invert silence to speech
    cursor = 0.0
    ei = 0
    si = 0
    speech: list[tuple[float, float]] = []
    events: list[tuple[float, str]] = []
    # rebuild from pairs
    # If file starts with silence_start 0, first speech is after first silence_end
    silences: list[tuple[float, float]] = []
    i = 0
    # parse in order
    for line in log.splitlines():
        if "silence_start:" in line:
            st = float(line.split("silence_start:")[1].split()[0])
            events.append((st, "s"))
        elif "silence_end:" in line:
            en = float(line.split("silence_end:")[1].split("|")[0].strip())
            events.append((en, "e"))
    # assume start is silence or speech
    t = 0.0
    in_sil = bool(events and events[0][1] == "s" and events[0][0] < 0.05)
    for et, kind in events:
        if in_sil and kind == "e":
            t = et
            in_sil = False
        elif (not in_sil) and kind == "s":
            if et - t >= 0.28:
                speech.append((max(0.0, t), min(dur, et)))
            in_sil = True
            t = et
    if not in_sil and dur - t >= 0.28:
        speech.append((max(0.0, t), dur))
    return speech


def trim_speech(src: Path, dest: Path) -> None:
    af = (
        "silenceremove=start_periods=1:start_duration=0.04:start_threshold=-34dB:"
        "stop_periods=-1:stop_duration=0.14:stop_threshold=-34dB:stop_silence=0.08,"
        "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo"
    )
    run([FFMPEG, "-y", "-i", str(src), "-af", af, str(dest)])


def fit_slot(src: Path, dest: Path, slot: float) -> None:
    dur = duration(src)
    if dur <= 0:
        raise RuntimeError(f"empty {src}")
    slot = max(slot, 0.35)
    ratio = dur / slot
    filters: list[str] = []
    if ratio > 1.03:
        tempo = min(ratio, 1.18)
        filters.append(f"atempo={tempo:.4f}")
    elif ratio < 0.88:
        tempo = max(ratio, 0.85)
        filters.append(f"atempo={tempo:.4f}")
    filters.append("apad")
    filters.append(f"atrim=0:{slot:.3f}")
    run([FFMPEG, "-y", "-i", str(src), "-af", ",".join(filters), str(dest)])


async def tts_to_wav(text: str, speaker: str, dest: Path) -> None:
    cfg = CAST[speaker]
    raw = dest.with_suffix(".raw.mp3")
    comm = edge_tts.Communicate(
        text, cfg["voice"], rate=cfg["rate"], pitch=cfg.get("tts_pitch", "+0Hz")
    )
    await comm.save(str(raw))
    scale = cfg["pitch_scale"]
    af = (
        f"rubberband=pitch={scale}:formant=shifted:pitchq=quality,"
        "aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo"
    )
    run([FFMPEG, "-y", "-i", str(raw), "-af", af, str(dest)])


def sequential_windows(n: int, target: float) -> list[tuple[float, float]]:
    # even slices with a short lead-in
    lead = 0.25
    usable = max(0.8, target - 0.45)
    each = usable / n
    gap = 0.12
    slot = max(0.4, each - gap)
    out = []
    t = lead
    for _ in range(n):
        out.append((t, min(target - 0.05, t + slot)))
        t += slot + gap
    return out


def pick_windows(speech: list[tuple[float, float]], n: int, target: float) -> list[tuple[float, float]]:
    if len(speech) == n:
        return speech
    return sequential_windows(n, target)


async def dub_one(clip: dict) -> None:
    video: Path = clip["path"]
    if not video.exists():
        print("skip missing", video)
        return
    target = duration(video)
    work = WORK / video.stem
    work.mkdir(parents=True, exist_ok=True)
    lines: list[tuple[str, str]] = clip["lines"]
    speech = speech_windows(video)
    windows = pick_windows(speech, len(lines), target)
    print(f"\n=== {video.name}  {target:.2f}s  mouths={len(speech)} lines={len(lines)} ===")
    parts = []
    for i, ((spk, text), (t0, t1)) in enumerate(zip(lines, windows)):
        raw = work / f"{i}_{spk}_raw.wav"
        trimmed = work / f"{i}_{spk}.wav"
        fitted = work / f"{i}_{spk}_fit.wav"
        await tts_to_wav(text, spk, raw)
        trim_speech(raw, trimmed)
        slot = max(0.35, t1 - t0)
        fit_slot(trimmed, fitted, slot)
        delayed = work / f"{i}_{spk}_d.wav"
        ms = int(t0 * 1000)
        run(
            [
                FFMPEG,
                "-y",
                "-i",
                str(fitted),
                "-af",
                f"adelay={ms}|{ms},apad=pad_dur={target:.3f},atrim=0:{target:.3f}",
                str(delayed),
            ]
        )
        parts.append(delayed)
        print(f"  {t0:5.2f}-{t1:5.2f}  {spk:6}  {text}")
        adir = clip.get("audio_dir")
        if adir is not None:
            mp3 = ROOT / "public" / "audio" / "stories" / f"{adir}-{i}.mp3"
            mp3.parent.mkdir(parents=True, exist_ok=True)
            run([FFMPEG, "-y", "-i", str(trimmed), "-q:a", "4", str(mp3)])

    mix = work / "mix.wav"
    if len(parts) == 1:
        run([FFMPEG, "-y", "-i", str(parts[0]), str(mix)])
    else:
        cmd = [FFMPEG, "-y"]
        for p in parts:
            cmd += ["-i", str(p)]
        weights = " ".join("1" for _ in parts)
        cmd += [
            "-filter_complex",
            f"amix=inputs={len(parts)}:duration=longest:dropout_transition=0:normalize=0:weights={weights},loudnorm=I=-16:LRA=11:TP=-1.5",
            str(mix),
        ]
        run(cmd)
    out = work / "out.mp4"
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(video),
            "-i",
            str(mix),
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
            "-shortest",
            "-movflags",
            "+faststart",
            str(out),
        ]
    )
    video.write_bytes(out.read_bytes())
    print("  wrote", video)


async def main() -> None:
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    for clip in CLIPS:
        if only and clip["path"].stem not in only and str(clip["path"]) not in only:
            continue
        await dub_one(clip)


if __name__ == "__main__":
    asyncio.run(main())
