#!/usr/bin/env bash
# thinkmove-design-system/sync.sh
# 内部モノレポ + thinkmove.jp ライブから authority files / 素材を取り込む

set -euo pipefail

MONOREPO="${THINKMOVE_MONOREPO:-$HOME/projects/thinkmove}"
LP_DIR="$MONOREPO/projects/thinkmove.jp"
WORLDVIEW_SRC="$MONOREPO/knowledge/strategy/brand-worldview-v3.md"
TOOLS_CSS_SRC="$MONOREPO/projects/thinkmove-tools/app/globals.css"
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -d "$LP_DIR" ]; then
  echo "❌ thinkmove.jp not found at: $LP_DIR"
  echo "   Set THINKMOVE_MONOREPO env var to override."
  exit 1
fi

# ディレクトリ準備
mkdir -p \
  "$SELF_DIR/assets/logos" \
  "$SELF_DIR/assets/profile" \
  "$SELF_DIR/assets/manga" \
  "$SELF_DIR/lp/css" \
  "$SELF_DIR/lp/content" \
  "$SELF_DIR/theme" \
  "$SELF_DIR/worldview"

echo "🔄 Syncing from monorepo + thinkmove.jp (live) ..."

BASE="https://thinkmove.jp"
TH="$BASE/wp-content/themes/swell_child/img"
UP="$BASE/wp-content/uploads"

# ── Authority: worldview core (思想の正) ──
if [ -f "$WORLDVIEW_SRC" ]; then
  cp "$WORLDVIEW_SRC" "$SELF_DIR/worldview/core.md"
  # 内部参照を公開リポ用に書き換え
  sed -i '' \
    -e 's|projects/thinkmove-tools/app/globals.css|../theme/globals.css|g' \
    -e 's|^\*\*前版\*\*:.*$||' \
    "$SELF_DIR/worldview/core.md"
  echo "  ✓ worldview/core.md (from $WORLDVIEW_SRC)"
else
  echo "  ⚠ worldview source not found: $WORLDVIEW_SRC"
fi

# ── Authority: theme tokens (実装の正) ──
# tools/app/globals.css から :root と主要部分を抽出するのは sed で困難なため、
# theme/globals.css は手作り維持。tools 側の更新時は手動で同期。
echo "  ⓘ theme/globals.css は手動維持（tools/app/globals.css から抽出）"

# ── LP scaffolding: canonical logo ──
curl -fsSL "$UP/2024/11/thinkmovenotlogo_transparent.png" -o "$SELF_DIR/assets/logo.png"
echo "  ✓ assets/logo.png"

# ── LP scaffolding: SWELL子テーマ CSS (旧トークン残存、参照のみ) ──
curl -fsSL "$BASE/wp-content/themes/swell_child/style.css" -o "$SELF_DIR/lp/css/style.css"
echo "  ✓ lp/css/style.css (live swell_child)"

# ── LP scaffolding: content (9ページ、HTMLクリーン版) ──
if command -v pandoc >/dev/null 2>&1; then
  declare -A CONTENT_PAGES=(
    [top]="/"
    [company]="/company/"
    [company-profile]="/company/profile/"
    [case-howma]="/case/howma/"
    [case-makuake]="/case/makuake/"
    [case-customer-voice]="/case/customer-voice/"
    [lp-co-creation]="/lp/co-creation/"
    [blog-judgment-as-a-service]="/blog/judgment-as-a-service/"
    [blog-2026-seo]="/blog/2026-seo/"
  )

  for key in "${!CONTENT_PAGES[@]}"; do
    url="$BASE${CONTENT_PAGES[$key]}"
    html=$(curl -sL "$url")
    md=$(echo "$html" | pandoc -f html -t gfm --wrap=none 2>/dev/null | python3 -c "
import sys, re
c = sys.stdin.read()
c = re.sub(r'<style\b[^>]*>.*?</style>', '', c, flags=re.DOTALL|re.I)
c = re.sub(r'<script\b[^>]*>.*?</script>', '', c, flags=re.DOTALL|re.I)
structural = r'(?:div|span|figure|figcaption|section|article|header|footer|nav|main|aside|colgroup|col)'
c = re.sub(rf'</?{structural}\b[^>]*>', '', c)
def sa(m):
  h = re.search(r'href=\"([^\"]*)\"', m.group(0))
  return f'<a href=\"{h.group(1)}\">' if h else ''
c = re.sub(r'<a\s+[^>]*>', sa, c)
for tag in ['table','thead','tbody','tfoot','tr','th','td','p','ul','ol','li','blockquote']:
  c = re.sub(rf'<{tag}\s+[^>]*>', f'<{tag}>', c)
c = re.sub(r'<(?:img|svg|iframe|embed|source|picture)\b[^>]*/?>', '', c)
c = re.sub(r'<svg\b[^>]*>.*?</svg>', '', c, flags=re.DOTALL)
c = re.sub(r'!\[[^\]]*\]\([^)]*\)', '', c)
c = re.sub(r'\\\n', '\n', c)
c = re.sub(r'\n\s*\n\s*(\n\s*)+', '\n\n', c)
c = re.sub(r'<a\s+href=\"[^\"]*\">\s*</a>', '', c)
c = '\n'.join(l.rstrip() for l in c.split('\n'))
sys.stdout.write(c.strip())
")
    {
      printf "> **URL**: %s\n> **Fetched**: %s\n\n---\n\n" "$url" "$(date +%Y-%m-%d)"
      echo "$md"
    } > "$SELF_DIR/lp/content/${key}.md"
  done
  echo "  ✓ lp/content/*.md (9 files, cleaned)"
else
  echo "  ⚠ pandoc not found — skipping content sync. Install: brew install pandoc"
fi

# ── Brand assets: client logos (4社) ──
for src in collabit-logo makuake_logo; do
  if [ -f "$LP_DIR/assets/logos/${src}.png" ]; then
    cp "$LP_DIR/assets/logos/${src}.png" "$SELF_DIR/assets/logos/${src}.png"
  fi
done
for f in freeweb-logo zigexn-logo; do
  curl -fsSL "$TH/clients/$f.png" -o "$SELF_DIR/assets/logos/$f.png"
done
echo "  ✓ assets/logos/*.png (4 clients)"

# ── Brand assets: profile portrait (media-text demo) ──
curl -fsSL "$UP/2024/11/IMG_3759.jpg" -o "$SELF_DIR/assets/profile/toyokura-shota.jpg"
echo "  ✓ assets/profile/toyokura-shota.jpg"

# ── Brand assets: 4コマ漫画 (carousel demo 用3枚) ──
for f in 4koma_comic_A 4koma_pattern_B 4koma_pattern_C; do
  curl -fsSL "$TH/manga/$f.webp" -o "$SELF_DIR/assets/manga/$f.webp"
done
echo "  ✓ assets/manga/4koma_*.webp (3 files)"

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
