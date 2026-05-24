# Slide Tastes — ThinkMove Deck Style Patterns

ThinkMove の資料制作で使う「資料テイスト」の正本。
`examples/slides/` が単発のレイアウト型だとしたら、このディレクトリは **資料全体の空気・情報密度・ロゴ位置・使いどころ** を決めるためのリファレンス。

## 目的

- 毎回テイストが揺れる問題を減らす
- GPT-image2 / imagegen を使う前提で、資料構造とブランド制約を固定する
- `theme/design.json` と `worldview/voice.md` を、実際の提案資料・研修資料・診断資料に落とす
- プレビューは `imagegen` で生成し、公式ロゴだけ後処理で合成する

## 5 Patterns

| Pattern | 主用途 | 情報密度 | ロゴ位置 | 向いている資料 |
| --- | --- | --- | --- | --- |
| [`quiet-proposal.md`](patterns/quiet-proposal.md) | 提案・会社紹介 | 中〜高 | 右上 | 営業資料、支援提案、会社紹介 |
| [`diagnostic-cockpit.md`](patterns/diagnostic-cockpit.md) | 診断・監査・レポート | 高 | 右上 | GSC/GA4分析、SEO診断、LLMO監査 |
| [`evidence-case.md`](patterns/evidence-case.md) | 事例・成果報告 | 中〜高 | 右上 | 顧客事例、改善報告、社内共有 |
| [`workshop-guide.md`](patterns/workshop-guide.md) | 研修・ワークショップ | 中 | 右上 | AI研修、実務ガイド、演習資料 |
| [`keynote-narrative.md`](patterns/keynote-narrative.md) | LT・セミナー・思想整理 | 低〜中 | 右上または章扉右下 | 登壇資料、コンセプト資料、導入章 |

## Preview

Few-shot 正本: [`few-shot.md`](few-shot.md)

| Pattern | Preview |
| --- | --- |
| Quiet Proposal | [`previews/quiet-proposal.png`](previews/quiet-proposal.png) |
| Diagnostic Cockpit | [`previews/diagnostic-cockpit.png`](previews/diagnostic-cockpit.png) |
| Evidence Case | [`previews/evidence-case.png`](previews/evidence-case.png) |
| Workshop Guide | [`previews/workshop-guide.png`](previews/workshop-guide.png) |
| Keynote Narrative | [`previews/keynote-narrative.png`](previews/keynote-narrative.png) |

一覧確認: [`contact-sheet.png`](contact-sheet.png)

## 共通ルール

### 1. ロゴ

- 通常スライドは右上を第一候補にする
- 表紙・章扉は構図に応じて右下も許可する
- ロゴは本文より前に主張させない。余白込みで「署名」として置く
- 背景が暗いときは、ロゴの背面に白または `bg` の小さな余白を置く

### 2. 情報密度

- 提案書・診断資料は、1枚1メッセージだけに絞りすぎない
- ただし、1枚の主論点は必ず1つにする
- 数字、根拠、次の一手が同居する状態を標準にする
- 「余白がある」ことと「情報が薄い」ことを混同しない

### 3. GPT-image2 / imagegen

- 画像生成・画像編集が必要なときは必ず `imagegen` を使う
- このディレクトリの preview は、GPT-image2 / imagegen 生成物を正とする
- ロゴは生成させず、`assets/logo.png` を後処理で合成する
- 文字、表、KPIを画像内に入れる場合は、生成後に必ず目視QAする
- 生成元プロンプトは [`prompts/prompt-set.md`](prompts/prompt-set.md) に残す

### 4. 禁止

- 毎回違う配色・装飾へ寄せる
- オレンジをCTAや広い背景に使う
- 文字量を減らしすぎて、判断材料が残らない
- 「AI時代においては」「重要です」で締める
- ロゴを忘れる

## 使い方

1. [`few-shot.md`](few-shot.md) を読み、Diagnostic Cockpit / Workshop Guide を基準にする
2. 資料の目的から pattern を選ぶ
3. 選んだ `patterns/*.md` を読む
4. 必要なら `examples/slides/*.md` のレイアウト型と組み合わせる
5. `theme/design.json` の色・radius・shadow を守る
6. 最後に `contact-sheet.png` と見比べ、別ブランド化していないか確認する

## Regenerate Previews

1. [`prompts/prompt-set.md`](prompts/prompt-set.md) を元に `imagegen` で5枚生成する
2. 生成画像を `examples/slide-tastes/raw/gpt-image2/*.png` に置く
3. 公式ロゴと一覧画像を生成する

```bash
python3 examples/slide-tastes/scripts/compose_gpt_image2_outputs.py
```

生成物:

- `examples/slide-tastes/previews/*.png`
- `examples/slide-tastes/contact-sheet.png`

PPTX 化:

```bash
NODE_PATH=/path/to/node_modules node examples/slide-tastes/scripts/build_pptx.js
```

生成物:

- `examples/slide-tastes/thinkmove-slide-taste-patterns.pptx`
