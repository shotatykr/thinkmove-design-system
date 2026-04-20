# ThinkMove Design System

シンクムーブ株式会社（[thinkmove.jp](https://thinkmove.jp)）のブランド世界観とデザインシステムの公開リファレンス。AIデザインツール（Claude Design / Pencil / Figma AI 等）・社内レビュー・全デザイン判断の根拠。

- **事業**: 1-2人マーケティングチーム向け「インハウスマーケティング共創支援」（SEO × AI）
- **プロダクト**: [tools.thinkmove.jp](https://tools.thinkmove.jp) — SEO/マーケ支援ツール群

---

## 🤖 AI tools はここから

**最初に [AGENTS.md](AGENTS.md) を読む。** 読み込み順とタスク別の必要ファイルが書いてある。フル ingestion でも ~33KB に収まるよう設計されている。

| タスク | 読むべきもの |
|--------|------------|
| 色・余白・radius を知りたい | [`theme/design.json`](theme/design.json) |
| ブランドの気分・コピートーン | [`worldview/core.md`](worldview/core.md) |
| コンサル提案スライドを作る | [`examples/`](examples/) + 上記2つ |
| 詳細な適用ルール | [`AGENTS.md`](AGENTS.md) |

---

## 🧠 世界観の一文

> # **「判断が止まっている場所に、隣に座って、問いを一緒に整える人」**

詳細は [`worldview/core.md`](worldview/core.md) を参照。観察元は [thinkmove.jp](https://thinkmove.jp) の現物通読（2026-04-18、創業者本人による言語化）。

### 思想と実装の分離

| 分類 | ソース |
|------|--------|
| 気分・レトリック・人格・言葉 | [`worldview/core.md`](worldview/core.md) — 固定する |
| 色・余白・shadow・radius | [`theme/globals.css`](theme/globals.css) / [`theme/design.json`](theme/design.json) — 進化する |
| コピー禁則・著者特定テスト | [`worldview/voice.md`](worldview/voice.md) |
| スライドレイアウト型 | [`examples/`](examples/) |

---

## リポジトリ構成

```
thinkmove-design-system/
├── AGENTS.md                # AI tool 向け entry point（読み順・適用ルール）
├── README.md                # このファイル（人間向け）
├── .claudeignore            # AI ingestion 除外設定
├── LICENSE
│
├── theme/                   # 機械可読トークン（実装の正）
│   ├── globals.css          # CSS変数 + 主要コンポーネント
│   └── design.json          # W3C Design Tokens 形式
│
├── worldview/               # 思想の正
│   ├── core.md              # 世界観 v3（観察元: thinkmove.jp）
│   └── voice.md             # コピーtone・造語・do/don't
│
├── examples/                # コンサル資料の型
│   ├── README.md
│   └── slides/              # title-slide / two-column / quote-card / case-study / agenda
│
├── assets/                  # 画像（manifest 付き）
│   ├── README.md            # AI 向け semantic manifest
│   ├── logo.png             # 公式ロゴ（navy accent、canonical）
│   ├── logos/               # 支援先クライアントロゴ
│   ├── manga/               # 4コマ漫画
│   └── profile/             # 代表ポートレート
│
├── lp/                      # thinkmove.jp の scaffolding（参照用）
│   ├── content/             # LPコピー実例（9 markdown）
│   └── css/style.css        # SWELL子テーマ全体
│
└── sync.sh                  # 内部モノレポから再同期（要 pandoc）
```

---

## 視覚言語の核（詳細は worldview §8）

- **配色**: 白70% / Navy 15% / Gray 10% / Teal 4% / Orange 1%
- **CTA**: 必ず teal（`color.cta`）。orange を CTA に使うのは禁止
- **shadow-as-border**（Vercel流）: 太い border ではなく微かな浮きで境界を示す
- **radius 4段スケール**: sm 8 / md 12 / lg 16 / xl 20
- **動きは意味があるときだけ**: parallax/autoplay/blink/bounce 禁止

---

## 注記

### Orange アクセントについて

- `--tm-accent`（orange `#f97316`）は **限定ハイライト専用**。広面禁止、CTA 禁止
- 現状の比率目安は 1%。これを超えたら worldview 違反

### `lp/css/style.css` の負債

`lp/` 配下の SWELL子テーマ CSS には旧トークン（`#ED8936` 等）が残存しており、`theme/` の v2 トークンとは齟齬がある。**`theme/` が実装の正**。`lp/` はあくまで thinkmove.jp の現物 scaffolding として保持しているだけで、ブランド適用の根拠にはしない。

### Content について

`lp/content/` には thinkmove.jp からクロールした 9 ページを Markdown 変換して収録。`sync.sh` で再取得可能（要 `pandoc`）。

---

## 同期

このリポは **参照用のスナップショット**。真のソースは内部モノレポ:

| 公開リポ側 | 内部モノレポ側（source of truth） |
|----------|---------------------------------|
| `worldview/core.md` | `knowledge/strategy/brand-worldview-v3.md` |
| `theme/globals.css` | `projects/thinkmove-tools/app/globals.css` の `:root` 抽出 |
| `lp/` | `projects/thinkmove.jp/` + thinkmove.jp ライブクロール |

`./sync.sh` で再同期。

---

© 2026 ThinkMove Inc. / @shotatykr — ライセンスは [LICENSE](LICENSE) 参照。
