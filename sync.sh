#!/usr/bin/env bash
# thinkmove-design-system/sync.sh
# 本体モノレポ（projects/thinkmove.jp/）から最新のLP素材を取り込む

set -euo pipefail

MONOREPO="${THINKMOVE_MONOREPO:-$HOME/projects/thinkmove}"
LP_DIR="$MONOREPO/projects/thinkmove.jp"
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -d "$LP_DIR" ]; then
  echo "❌ thinkmove.jp not found at: $LP_DIR"
  echo "   Set THINKMOVE_MONOREPO env var to override."
  exit 1
fi

echo "🔄 Syncing from $LP_DIR ..."

# Company logos (本体モノレポの tools 側と LP 側で共通)
cp "$MONOREPO/projects/thinkmove-tools/public/logo-dark.png" "$SELF_DIR/assets/logo-dark.png"
cp "$MONOREPO/projects/thinkmove-tools/public/logo-white.png" "$SELF_DIR/assets/logo-white.png"
echo "  ✓ assets/logo-{dark,white}.png"

# LP screenshots (主要5点)
for shot in design-home-fullpage live-lp-hero live-lp-empathy lp-comparison-table lp-case-makuake-howma; do
  cp "$LP_DIR/screenshots/$shot.png" "$SELF_DIR/lp/screenshots/$shot.png"
  echo "  ✓ lp/screenshots/$shot.png"
done

# LP CSS
cp "$LP_DIR/website-html/css/style.css" "$SELF_DIR/lp/css/style.css"
cp "$LP_DIR/website-html/lp-implementation/lp-cocreation.css" "$SELF_DIR/lp/css/lp-cocreation.css"
echo "  ✓ lp/css/{style,lp-cocreation}.css"

# LP content (core copy)
for md in 01_top 02_about 03_consultation 09_philosophy; do
  cp "$LP_DIR/website-content/$md.md" "$SELF_DIR/lp/content/$md.md"
  echo "  ✓ lp/content/$md.md"
done

# Client logos
cp "$LP_DIR/assets/logos/collabit-logo.png" "$SELF_DIR/lp/logos/collabit-logo.png"
cp "$LP_DIR/assets/logos/makuake_logo.png" "$SELF_DIR/lp/logos/makuake_logo.png"
echo "  ✓ lp/logos/{collabit,makuake}-logo.png"

# LP本体から直接取得（WordPress media + SWELL子テーマ）
BASE="https://thinkmove.jp"
TH="$BASE/wp-content/themes/swell_child/img"
UP="$BASE/wp-content/uploads"

# Profile photos (2種類)
curl -fsSL "$UP/2024/11/IMG_3759.jpg" -o "$SELF_DIR/lp/profile/toyokura-shota.jpg"
curl -fsSL "$UP/2025/04/翔太プロフィール画像（オフィス背景）-1024x1024.png" -o "$SELF_DIR/lp/profile/toyokura-office.png"
echo "  ✓ lp/profile/toyokura-{shota,office}.{jpg,png}"

# Brand assets
mkdir -p "$SELF_DIR/lp/brand"
curl -fsSL "$UP/2024/11/thinkmovenotlogo_transparent.png" -o "$SELF_DIR/lp/brand/logo-transparent.png"
curl -fsSL "$UP/2024/11/4.png" -o "$SELF_DIR/lp/brand/desk-scene.png"
echo "  ✓ lp/brand/{logo-transparent,desk-scene}.png"

# 4コマ漫画 (SWELL子テーマから)
mkdir -p "$SELF_DIR/lp/manga"
for f in 4koma_comic_A 4koma_pattern_B 4koma_pattern_C 4koma_pattern_D 4koma_pattern_E; do
  curl -fsSL "$TH/manga/$f.webp" -o "$SELF_DIR/lp/manga/$f.webp"
done
echo "  ✓ lp/manga/4koma_{comic_A,pattern_B-E}.webp"

# 追加クライアントロゴ (SWELL子テーマから)
for f in freeweb-logo zigexn-logo; do
  curl -fsSL "$TH/clients/$f.png" -o "$SELF_DIR/lp/logos/$f.png"
done
echo "  ✓ lp/logos/{freeweb,zigexn}-logo.png"

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
