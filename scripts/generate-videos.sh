#!/bin/bash
# DEPRECATED: This script generated beige title-card videos with single-voice narration.
# 
# Replaced by generate-story-videos.py (August 2026) which generates illustrated
# story videos with:
#   - Multi-voice British English TTS (Libby, Maisie, Sonia)
#   - Character-driven scenes (Mei, Priya, Ms Tan, etc.)
#   - Readable 简体中文 captions using correct font path
#   - Multiple illustrated scenes per video (5-8 per week)
#   - Proper pedagogy: story first, rule second (vs grammar lecture)
#
# The old approach had fatal flaws:
#   - Wrong font path (/usr/share/fonts/truetype/noto/ instead of /opentype/)
#   - Chinese text rendered as tofu boxes (□□□)
#   - Static cream background (no characters, no scenes)
#   - Grammar dump format rejected by parents paying CEQ fees
#
# To regenerate videos:
#   python3 scripts/generate-story-videos.py
#
# Storyboard images are saved in scripts/storyboard/ for reference and iteration.
# Videos are overwritten in place at public/video/*.mp4.

echo "This script is deprecated. Use: python3 scripts/generate-story-videos.py"
exit 1
