#!/usr/bin/env bash
# thinkmove-design-system/sync.sh
# 本体モノレポ（projects/thinkmove-tools/）から最新のデザインシステム資産を取り込む

set -euo pipefail

MONOREPO="${THINKMOVE_MONOREPO:-$HOME/projects/thinkmove}"
TOOLS_DIR="$MONOREPO/projects/thinkmove-tools"
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -d "$TOOLS_DIR" ]; then
  echo "❌ thinkmove-tools not found at: $TOOLS_DIR"
  echo "   Set THINKMOVE_MONOREPO env var to override."
  exit 1
fi

echo "🔄 Syncing from $TOOLS_DIR ..."

# Tokens
cp "$TOOLS_DIR/app/globals.css" "$SELF_DIR/tokens/globals.css"
echo "  ✓ tokens/globals.css"

# Components
for comp in SiteHeader SiteFooter ScoreGauge; do
  cp "$TOOLS_DIR/components/$comp.tsx" "$SELF_DIR/components/$comp.tsx"
  echo "  ✓ components/$comp.tsx"
done

# Examples
cp "$TOOLS_DIR/app/page.tsx" "$SELF_DIR/examples/home-page.tsx"
cp "$TOOLS_DIR/app/ctr-simulator/page.tsx" "$SELF_DIR/examples/tool-page.tsx"
echo "  ✓ examples/{home,tool}-page.tsx"

# Assets
cp "$TOOLS_DIR/public/logo-dark.png" "$SELF_DIR/assets/logo-dark.png"
cp "$TOOLS_DIR/public/logo-white.png" "$SELF_DIR/assets/logo-white.png"
echo "  ✓ assets/logo-{dark,white}.png"

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
