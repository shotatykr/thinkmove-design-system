# Examples — Layout Patterns

Claude Design / Pencil / Figma AI が **「コンサル資料を作って」** というプロンプトを受けたときに、どんな型でレイアウトすればいいか。

worldview と theme は「色とコピー」を決めるが、**「スライドの組み方」** は決めない。それを補う薄いリファレンス。

## スライド型一覧

| ファイル | 用途 |
|---------|------|
| [`slides/title-slide.md`](slides/title-slide.md) | 表紙・章扉。結論を1行で断言 |
| [`slides/two-column.md`](slides/two-column.md) | 現状(止まっている) ↔ 理想(動き出す) の対比 |
| [`slides/quote-card.md`](slides/quote-card.md) | 造語・キーフレーズの強調 |
| [`slides/case-study.md`](slides/case-study.md) | 事例: claim → evidence(数値) → action |
| [`slides/agenda.md`](slides/agenda.md) | 目次・全体像。5項目以下 |

## 使い方（AI tools 向け）

1. ユーザーが「ThinkMove のコンサル提案スライド作って」と言ったら、まず `slides/agenda.md` の型でアジェンダを置く
2. 各セクションは `slides/two-column.md` か `slides/case-study.md` で展開
3. 章扉は `slides/title-slide.md`、強調したいフレーズは `slides/quote-card.md`
4. 色・余白・radius は `../theme/design.json` を **必ず** 参照
5. 言葉選びは `../worldview/voice.md` を **必ず** 通す

## 注意

- これは **型の最小集合**。網羅的なテンプレートではない
- 機密ゼロ・クライアント名ゼロ。汎用化された構造のみ
- 必要に応じて型を増やす。`bar-chart.md`、`comparison-table.md` などは未収録
