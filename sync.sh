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

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
