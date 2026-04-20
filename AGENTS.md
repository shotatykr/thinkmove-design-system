# AGENTS.md — AI tool entry point

このリポジトリは **AIデザインツール**（Claude Design / Pencil / Figma AI / Claude Code など）が ThinkMove のブランドを理解し、コードベース・スライド・LP・ビジュアルに **自動適用** するためのリファレンス。

人間向けの解説は [README.md](README.md) を参照。**このファイルは AI agent が最初に読むことを想定**している。

---

## 読み込み順（必須 → 任意）

| 順 | ファイル | サイズ目安 | 役割 |
|----|---------|-----------|------|
| 1 | **AGENTS.md**（これ） | 3KB | 全体マップ |
| 2 | **[worldview/core.md](worldview/core.md)** | 11KB | 気分・レトリック・人格・色の意味 |
| 3 | **[theme/design.json](theme/design.json)** | 3KB | 機械可読トークン（color/radius/shadow/motion） |
| 4 | **[theme/globals.css](theme/globals.css)** | 5KB | CSS実装（変数定義 + 主要コンポーネント） |
| 5 | **[worldview/voice.md](worldview/voice.md)** | 3KB | コピー禁則・著者特定テスト（コピー生成時のみ） |
| 6 | **[examples/](examples/)** | 5KB | スライド型5種（資料生成時のみ） |
| 7 | **[assets/README.md](assets/README.md)** | 3KB | 画像 manifest（画像参照時のみ） |

**フル ingestion でも ~33KB**。

---

## タスク別 必須ファイル

| タスク | 読むべき最小集合 |
|--------|----------------|
| 「ブランドカラーは？」 | `theme/design.json` のみ |
| Hero / LP セクション生成 | `theme/design.json` + `theme/globals.css` + `worldview/core.md` §8 |
| コンサル提案スライド | `examples/` + `theme/design.json` + `worldview/voice.md` |
| ブログ・記事の本文 | `worldview/core.md` + `worldview/voice.md` |
| ロゴ・画像配置 | `assets/README.md` + `worldview/core.md` §8.3-8.5 |
| 4コマ漫画風イラスト | `assets/manga/` + `worldview/core.md` §8.4 |

---

## 適用ルール（厳守）

### Color
- **CTA は必ず `color.cta`（teal #0d9488）**。`color.accent`（orange）を CTA に使うのは禁止
- 比率目安: 白70% / Navy 15% / Gray 10% / Teal 4% / Orange 1%
- Orange は **限定ハイライトのみ**。広面の塗りつぶし禁止

### Layout
- **shadow-as-border**（Vercel流）: 太い border line ではなく、`shadow.sm` 等で境界を示す
- **radius は4段スケール**: sm 8 / md 12 / lg 16 / xl 20

### Motion
- 許可: fade-in / fade-up / hover浮き / count-up
- 禁止: parallax / autoplay / blink / bounce / 派手なローディング
- `prefers-reduced-motion: reduce` 対応必須

### Copy
- AI臭文末（「〜と言えるでしょう」「〜が重要です」）は **絶対禁止**
- 「N個の理由」「〜について」型タイトル禁止
- 否定→差し出し / 止まる→動き出す / 関係性で価値定義 のいずれかを必ず1つ使う

---

## 無視してよいファイル

| パス | 理由 |
|------|------|
| `lp/` | 既存 thinkmove.jp の scaffolding 参照。ブランド適用には **不要**。`.claudeignore` で除外済 |
| `assets/manga/`, `assets/profile/` の画像本体 | manifest（`assets/README.md`）だけで意味が分かるよう設計済 |

---

## 更新履歴

- 2026-04-20: 初版（README から worldview を分離、theme/ と examples/ を新設）
