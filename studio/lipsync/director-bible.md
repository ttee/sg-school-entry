# Director / producer bible — trial talking clips

Later notes do not cancel earlier ones. If a new line is more natural, keep it **and** still cover every mouth beat.

## Cast (locked)

| Who | Face | Voice |
|-----|------|--------|
| Mei | Short black bob, pink bag, navy pinafore. Lock: `a2-w1-form.jpg` | en-SG-LunaNeural, 6–7 (`pitch_scale` 1.41) |
| Priya | Ponytail, blue bag, same pinafore. Lock: `a2-w1-ask.jpg` | same engine, a little lower (1.30) |
| Aunty Tan | Curly grey hair, glasses, pink polo | same engine, **motherly and higher** (1.16), not pitched down old |

Standard Singapore English. No lah/ah. Write **Aunty**.

## How we shoot

1. Write the line.
2. TTS that line with the locked voice.
3. Animate **that one person, chest-up**, to **that wav**.
4. Cut. Two people at once = two clips overlaid.

Do not generate a wide shot, then stick speech on top.

## Office scene (merged)

Mouth windows from the current counter animation. Speech must cover all of them.

| Time | Mouth | Line |
|------|--------|------|
| 0.2–2.7s | Aunty | Is this your white water bottle with the pink flower? |
| 2.8–5.3s | Mei | Yes, Aunty! That is my white water bottle! |
| 5.4–7.2s | Aunty (handoff) | Here you are. Please take it. |
| 7.2–8.7s | Mei **and** Priya | We found it! |
| 8.5–10s | Mei alone | Thank you, Aunty! |

Corridor:

| Time | Mouth | Line |
|------|--------|------|
| first half | Mei | Oh no! Where is my water bottle? I cannot find it. |
| second half | Priya | Let's go to the Lost and Found. OK. |

## QC — fail the clip if

1. A mouth is moving and audio is silent for more than **0.40s**.
2. A `must_speak` beat in `shot-bible.json` is more than half silence.
3. Speech runs more than **0.50s** with no mouth motion in that speaker’s region.
4. Silent tail after the last word is more than **0.50s**.
5. Two named speakers in one generated file (except an intentional overlay of the same line).

Run:

```bash
python3 scripts/qc_lipsync.py
python3 scripts/qc_lipsync.py public/trial/a2-w0-counter.mp4
```

Exit code 1 = fail. Report: `studio/lipsync/qc-report.md`.
