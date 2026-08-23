#!/usr/bin/env python3
"""TTS for 课文 target lines: en-SG-LunaNeural, slow enough to follow."""
from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
VOICE = "en-SG-LunaNeural"
RATE = "-8%"


async def one(text: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    comm = edge_tts.Communicate(text, VOICE, rate=RATE)
    await comm.save(str(dest))


async def main() -> None:
    jobs = json.loads(Path(sys.argv[1]).read_text())
    sem = asyncio.Semaphore(3)

    async def run(job: dict) -> None:
        dest = ROOT / job["file"]
        async with sem:
            print(job["file"], job["text"][:60], flush=True)
            await one(job["text"], dest)

    await asyncio.gather(*(run(j) for j in jobs))


if __name__ == "__main__":
    asyncio.run(main())
