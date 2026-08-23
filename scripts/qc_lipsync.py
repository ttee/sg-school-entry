#!/usr/bin/env python3
"""Director / producer QC: fail talking clips when mouths move on silence.

Reads studio/lipsync/shot-bible.json when the filename is listed.
Uses ffmpeg silencedetect plus a cheap mouth-band motion score
(left / centre / right lower face). No extra Python packages.

Exit 1 if any clip fails.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import dub_trial_sg_child as d

ROOT = d.ROOT
PUBLIC = d.PUBLIC
BIBLE = ROOT / "studio" / "lipsync" / "shot-bible.json"
REPORT = ROOT / "studio" / "lipsync" / "qc-report.md"

SILENCE_FAIL = 0.80  # sentence pauses in Imagine TTS are ~0.5–0.7s; 2s holes still fail
BEAT_SILENCE_FRAC = 0.60
TAIL_FAIL = 0.50
MOTION_THRESH = 6.5
FPS = 4
W, H = 96, 54


def ff(*args: str) -> subprocess.CompletedProcess:
    return subprocess.run(
        [d.FFMPEG, *args],
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )


def silence_ranges(video: Path) -> list[tuple[float, float]]:
    p = ff(
        "-i",
        str(video),
        "-af",
        "silencedetect=n=-35dB:d=0.12",
        "-f",
        "null",
        "-",
    )
    err = p.stderr.decode("utf-8", "replace")
    starts: list[float] = []
    ranges: list[tuple[float, float]] = []
    for line in err.splitlines():
        m = re.search(r"silence_start:\s*([0-9.]+)", line)
        if m:
            starts.append(float(m.group(1)))
            continue
        m = re.search(r"silence_end:\s*([0-9.]+)", line)
        if m and starts:
            ranges.append((starts.pop(0), float(m.group(1))))
    dur = d.duration(video)
    if starts:
        ranges.append((starts[0], dur))
    return ranges


def covered(ranges: list[tuple[float, float]], t0: float, t1: float) -> float:
    """Seconds of [t0,t1] that fall inside ranges."""
    total = 0.0
    for a, b in ranges:
        lo, hi = max(a, t0), min(b, t1)
        if hi > lo:
            total += hi - lo
    return total


def speaking_at(ranges: list[tuple[float, float]], t: float) -> bool:
    for a, b in ranges:
        if a <= t < b:
            return False
    return True


def gray_frames(video: Path) -> list[bytes]:
    p = ff(
        "-i",
        str(video),
        "-vf",
        f"fps={FPS},scale={W}:{H},format=gray",
        "-f",
        "rawvideo",
        "-",
    )
    raw = p.stdout
    n = W * H
    return [raw[i : i + n] for i in range(0, len(raw) - n + 1, n)]


def region_mean(frame: bytes, x0: int, x1: int, y0: int, y1: int) -> float:
    s = 0
    c = 0
    for y in range(y0, y1):
        row = y * W
        for x in range(x0, x1):
            s += frame[row + x]
            c += 1
    return s / c if c else 0.0


def region_diff(a: bytes, b: bytes, x0: int, x1: int, y0: int, y1: int) -> float:
    s = 0
    c = 0
    for y in range(y0, y1):
        row = y * W
        for x in range(x0, x1):
            s += abs(a[row + x] - b[row + x])
            c += 1
    return s / c if c else 0.0


def crops(layout: str) -> dict[str, tuple[int, int, int, int]]:
    """x0,x1,y0,y1 in the 96x54 gray frame. Mouth sits in the lower face."""
    y0, y1 = 28, 50
    if layout == "three":
        return {
            "mei": (4, 32, y0, y1),
            "auntie": (34, 62, y0, y1),
            "priya": (64, 92, y0, y1),
        }
    if layout == "two":
        return {
            "mei": (6, 44, y0, y1),
            "priya": (52, 90, y0, y1),
        }
    return {"all": (8, 88, 22, 50)}


def motion_timeline(
    frames: list[bytes], layout: str
) -> list[tuple[float, dict[str, float]]]:
    boxes = crops(layout)
    out: list[tuple[float, dict[str, float]]] = []
    for i, fr in enumerate(frames):
        t = i / FPS
        scores: dict[str, float] = {}
        prev = frames[i - 1] if i else fr
        for name, box in boxes.items():
            scores[name] = region_diff(prev, fr, *box)
        out.append((t, scores))
    return out


def qc_clip(video: Path, spec: dict | None) -> dict:
    dur = d.duration(video)
    sil = silence_ranges(video)
    layout = (spec or {}).get("layout", "wide")
    frames = gray_frames(video)
    motion = motion_timeline(frames, layout)
    fails: list[str] = []
    warns: list[str] = []

    # 1. Long silence in the body of the clip
    for a, b in sil:
        gap = b - a
        if a <= 0.22 and gap <= 0.30:
            continue
        if b >= dur - 0.08 and (dur - a) <= TAIL_FAIL and a > dur * 0.85:
            if dur - a > TAIL_FAIL:
                fails.append(f"silent tail {dur - a:.2f}s from {a:.2f}s")
            continue
        if gap >= SILENCE_FAIL and a > 0.15 and b < dur - 0.12:
            cuts = (spec or {}).get("cuts") or []
            near_cut = any(abs(((a + b) / 2) - c) < 0.45 for c in cuts)
            if near_cut:
                warns.append(f"cut {a:.2f}–{b:.2f}s ({gap:.2f}s)")
                continue
            # mouth moving in that gap?
            moving = []
            for t, scores in motion:
                if a <= t < b and max(scores.values() or [0]) >= MOTION_THRESH:
                    moving.append(t)
            if moving:
                fails.append(
                    f"MOUTH ON SILENCE {a:.2f}–{b:.2f}s ({gap:.2f}s). "
                    f"Mouth-band motion at {moving[0]:.2f}s."
                )
            else:
                warns.append(f"audio hole {a:.2f}–{b:.2f}s ({gap:.2f}s), little mouth motion")

    # 2. Shot-bible beats that must have speech
    for beat in (spec or {}).get("beats") or []:
        if not beat.get("must_speak"):
            continue
        t0, t1 = float(beat["t0"]), float(beat["t1"])
        span = max(t1 - t0, 0.01)
        quiet = covered(sil, t0, t1)
        frac = quiet / span
        if frac >= BEAT_SILENCE_FRAC:
            fails.append(
                f"{beat['who']} beat {t0:.2f}–{t1:.2f}s is {frac:.0%} silence "
                f"(need: {beat.get('line', '')!r})"
            )

    # 3. Tail
    if sil:
        last_a, last_b = sil[-1]
        if last_b >= dur - 0.05 and (dur - last_a) > TAIL_FAIL and last_a > 0.5:
            fails.append(f"silent tail {dur - last_a:.2f}s")

    return {
        "file": video.name,
        "duration": round(dur, 2),
        "silence": [(round(a, 2), round(b, 2)) for a, b in sil],
        "fails": fails,
        "warns": warns,
        "pass": not fails,
    }


def default_videos() -> list[Path]:
    names = [
        "a2-w0-setup.mp4",
        "a2-w0-counter.mp4",
        "a2-w1-ask.mp4",
        "a2-w1-form.mp4",
        "b1-w0-story.mp4",
        "b1-w0-form.mp4",
        "sec-w0-story.mp4",
        "sec-w0-form.mp4",
    ]
    return [PUBLIC / n for n in names if (PUBLIC / n).exists()]


def write_report(results: list[dict]) -> None:
    lines = ["# Lip-sync QC report", ""]
    failed = sum(1 for r in results if not r["pass"])
    lines.append(
        f"{len(results)} clips · {failed} fail · silence ≥ {SILENCE_FAIL:.2f}s with mouth motion is a fail."
    )
    lines.append("")
    for r in results:
        flag = "FAIL" if not r["pass"] else "PASS"
        lines.append(f"## {r['file']} — {flag} ({r['duration']}s)")
        if r["fails"]:
            for f in r["fails"]:
                lines.append(f"- **FAIL:** {f}")
        if r["warns"]:
            for w in r["warns"]:
                lines.append(f"- warn: {w}")
        if r["pass"] and not r["warns"]:
            lines.append("- no mouth-on-silence holes")
        lines.append("")
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    bible = json.loads(BIBLE.read_text(encoding="utf-8")) if BIBLE.exists() else {"clips": {}}
    paths = [Path(p) for p in sys.argv[1:]] or default_videos()
    results = []
    rc = 0
    for video in paths:
        if not video.exists():
            print(f"missing {video}", file=sys.stderr)
            rc = 1
            continue
        spec = bible.get("clips", {}).get(video.name)
        r = qc_clip(video, spec)
        results.append(r)
        mark = "PASS" if r["pass"] else "FAIL"
        print(f"{mark}  {video.name}")
        for f in r["fails"]:
            print(f"  FAIL  {f}")
            rc = 1
        for w in r["warns"]:
            print(f"  warn  {w}")
    write_report(results)
    print(f"\nreport {REPORT}")
    return rc


if __name__ == "__main__":
    raise SystemExit(main())
