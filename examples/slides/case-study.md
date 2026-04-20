---
name: case-study
purpose: 事例紹介の3段構造
when_to_use: 顧客事例、過去案件の説明、Before/After 物語
---

# Case Study

## 構造（3段、上から下へ）

```
┌──────────────────────────────────────┐
│  ① CLAIM   (顧客の課題、1行で断言)      │
│  ────────                             │
│  「マーケ施策は回っているのに、         │
│    成果が伸びない」                     │
├──────────────────────────────────────┤
│  ② EVIDENCE (数値・固有名詞)            │
│  ────────                             │
│  ・SEO流入 月間XX,XXX                 │
│  ・CV率 X.X% → Y.Y%                  │
│  ・ツール: HubSpot / GSC              │
├──────────────────────────────────────┤
│  ③ ACTION  (打った手、1〜3項目)         │
│  ────────                             │
│  → トップページ改修                    │
│  → メール設計                         │
│  → 計測環境整備                       │
└──────────────────────────────────────┘
```

## tokens

| 要素 | 値 |
|------|----|
| ① CLAIM 背景 | `color.bg-alt` |
| ① CLAIM 文字 | `color.ink`、font-size 24px、font-weight 700 |
| ② EVIDENCE 背景 | `color.bg`（白） |
| ② 数値ハイライト | `tm-number-highlight` クラス（`color.ink`、tabular-nums） |
| ③ ACTION 背景 | `color.cta-light` |
| ③ 矢印（→） | `color.cta` |
| 区切り線 | `color.border`（hairline） |
| 全体 radius | `radius.lg` |
| shadow | `shadow.md` |

## 必須要件（worldview §10「著者特定テスト」）

- ② EVIDENCE に **数値が最低2つ** ある
- ② または ③ に **固有名詞**（ツール名、施策名）がある
- 全体を読んで「この事例、豊藏が書いた」と分かる解像度

## 良い例

> ① 「事例コンテンツが社内に溜まっているのに、商談で使われていない」
>
> ② Makuake 様の場合：BtoB事例 30本 / 営業資料化率 0% / 商談シナリオ未整備
>
> ③ → 事例コンテンツの構造化（claim/evidence/action 3段）
> → 営業同行ヒアリング（隔週、計4回）
> → HubSpot deal stage 紐付け

## 悪い例

- ❌ 「ある企業様で大幅な改善を実現しました」 — 数値・固有名詞ゼロ
- ❌ 「PV が伸びました」だけ — claim と action が薄い、3段構造が機能していない
- ❌ ロゴだけ並べて事例とする — worldview §11.2 で課題視されている弱いパターン
