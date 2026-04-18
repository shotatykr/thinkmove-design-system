#!/usr/bin/env bash
# thinkmove-design-system/sync.sh
# 本体モノレポ（projects/thinkmove.jp/）と LP本体から最新素材を取り込む

set -euo pipefail

MONOREPO="${THINKMOVE_MONOREPO:-$HOME/projects/thinkmove}"
LP_DIR="$MONOREPO/projects/thinkmove.jp"
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -d "$LP_DIR" ]; then
  echo "❌ thinkmove.jp not found at: $LP_DIR"
  echo "   Set THINKMOVE_MONOREPO env var to override."
  exit 1
fi

echo "🔄 Syncing from $LP_DIR + thinkmove.jp (live) ..."

# LP本体URL
BASE="https://thinkmove.jp"
TH="$BASE/wp-content/themes/swell_child/img"
UP="$BASE/wp-content/uploads"

# Canonical logo (LP公式、navy accent)
curl -fsSL "$UP/2024/11/thinkmovenotlogo_transparent.png" -o "$SELF_DIR/assets/logo.png"
echo "  ✓ assets/logo.png"

# LP screenshots (主要5点、モノレポから)
for shot in design-home-fullpage live-lp-hero live-lp-empathy lp-comparison-table lp-case-makuake-howma; do
  cp "$LP_DIR/screenshots/$shot.png" "$SELF_DIR/lp/screenshots/$shot.png"
done
echo "  ✓ lp/screenshots/*.png (5 files)"

# LP CSS (モノレポから)
cp "$LP_DIR/website-html/css/style.css" "$SELF_DIR/lp/css/style.css"
cp "$LP_DIR/website-html/lp-implementation/lp-cocreation.css" "$SELF_DIR/lp/css/lp-cocreation.css"
echo "  ✓ lp/css/{style,lp-cocreation}.css"

# LP content (モノレポから、20ページ)
for md in $(ls "$LP_DIR/website-content/" | grep -E '^[0-9]+_.*\.md$' | sort); do
  cp "$LP_DIR/website-content/$md" "$SELF_DIR/lp/content/$md"
done
echo "  ✓ lp/content/*.md (20 files)"

# Client logos (モノレポ + LPテーマ)
cp "$LP_DIR/assets/logos/collabit-logo.png" "$SELF_DIR/lp/logos/collabit-logo.png"
cp "$LP_DIR/assets/logos/makuake_logo.png" "$SELF_DIR/lp/logos/makuake_logo.png"
for f in freeweb-logo zigexn-logo; do
  curl -fsSL "$TH/clients/$f.png" -o "$SELF_DIR/lp/logos/$f.png"
done
echo "  ✓ lp/logos/*.png (4 clients)"

# Profile photos (LP本体から)
curl -fsSL "$UP/2024/11/IMG_3759.jpg" -o "$SELF_DIR/lp/profile/toyokura-shota.jpg"
curl -fsSL "$UP/2025/04/翔太プロフィール画像（オフィス背景）-1024x1024.png" -o "$SELF_DIR/lp/profile/toyokura-office.png"
echo "  ✓ lp/profile/toyokura-{shota,office}.{jpg,png}"

# Brand illustration (LP本体から)
curl -fsSL "$UP/2024/11/4.png" -o "$SELF_DIR/lp/brand/desk-scene.png"
echo "  ✓ lp/brand/desk-scene.png"

# 4コマ漫画 (LPテーマから)
for f in 4koma_comic_A 4koma_pattern_B 4koma_pattern_C 4koma_pattern_D 4koma_pattern_E; do
  curl -fsSL "$TH/manga/$f.webp" -o "$SELF_DIR/lp/manga/$f.webp"
done
echo "  ✓ lp/manga/4koma_*.webp (5 files)"

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
