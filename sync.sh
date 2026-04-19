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

# LP CSS (live本体から = SWELL子テーマ)
curl -fsSL "$BASE/wp-content/themes/swell_child/style.css" -o "$SELF_DIR/lp/css/style.css"
echo "  ✓ lp/css/style.css (live swell_child/style.css)"

# LP content (live本体から、9ページ) — 要 pandoc: brew install pandoc
# 核レベルのHTMLクリーン（div/span/figure unwrap、style/script除去、a簡素化）
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
# <style>/<script> block removal
c = re.sub(r'<style\b[^>]*>.*?</style>', '', c, flags=re.DOTALL|re.I)
c = re.sub(r'<script\b[^>]*>.*?</script>', '', c, flags=re.DOTALL|re.I)
# Structural tags unwrap
structural = r'(?:div|span|figure|figcaption|section|article|header|footer|nav|main|aside|colgroup|col)'
c = re.sub(rf'</?{structural}\b[^>]*>', '', c)
# <a> simplify to href-only
def sa(m):
  h = re.search(r'href=\"([^\"]*)\"', m.group(0))
  return f'<a href=\"{h.group(1)}\">' if h else ''
c = re.sub(r'<a\s+[^>]*>', sa, c)
# Table/list attrs strip
for tag in ['table','thead','tbody','tfoot','tr','th','td','p','ul','ol','li','blockquote']:
  c = re.sub(rf'<{tag}\s+[^>]*>', f'<{tag}>', c)
# img/svg/iframe removal
c = re.sub(r'<(?:img|svg|iframe|embed|source|picture)\b[^>]*/?>', '', c)
c = re.sub(r'<svg\b[^>]*>.*?</svg>', '', c, flags=re.DOTALL)
# Markdown image syntax removal
c = re.sub(r'!\[[^\]]*\]\([^)]*\)', '', c)
# Line break & blank line normalize
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

# Client logos (モノレポ + LPテーマ)
cp "$LP_DIR/assets/logos/collabit-logo.png" "$SELF_DIR/lp/logos/collabit-logo.png"
cp "$LP_DIR/assets/logos/makuake_logo.png" "$SELF_DIR/lp/logos/makuake_logo.png"
for f in freeweb-logo zigexn-logo; do
  curl -fsSL "$TH/clients/$f.png" -o "$SELF_DIR/lp/logos/$f.png"
done
echo "  ✓ lp/logos/*.png (4 clients)"

# Profile photo (1 portrait only for media-text demo)
curl -fsSL "$UP/2024/11/IMG_3759.jpg" -o "$SELF_DIR/lp/profile/toyokura-shota.jpg"
echo "  ✓ lp/profile/toyokura-shota.jpg"

# Brand illustration (LP本体から)
curl -fsSL "$UP/2024/11/4.png" -o "$SELF_DIR/lp/brand/desk-scene.png"
echo "  ✓ lp/brand/desk-scene.png"

# 4コマ漫画 (carousel demo 用3枚のみ、LPテーマから)
for f in 4koma_comic_A 4koma_pattern_B 4koma_pattern_C; do
  curl -fsSL "$TH/manga/$f.webp" -o "$SELF_DIR/lp/manga/$f.webp"
done
echo "  ✓ lp/manga/4koma_*.webp (3 files)"

echo ""
echo "✅ Sync complete. Review with: git diff"
echo "   Commit & push: git add -A && git commit -m 'sync from monorepo' && git push"
