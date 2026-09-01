# ThinkMove Slide System

ThinkMoveの提案資料・分析報告・研修・登壇資料を、AIツールが一貫した品質で制作するための入口です。

目的は「ThinkMoveっぽい見た目」を作ることではありません。

> 複雑な状況を、重要な論点、判断材料、叩き台、次の一歩へ変換する。

## AI tools向け読み込み順

スライド制作時は、次を順番に読む。

1. [`../AGENTS.md`](../AGENTS.md)
2. [`../worldview/core.md`](../worldview/core.md)
3. [`../worldview/voice.md`](../worldview/voice.md)
4. [`../theme/design.json`](../theme/design.json)
5. [`production-guide.md`](production-guide.md)
6. [`../examples/slide-tastes/few-shot.md`](../examples/slide-tastes/few-shot.md)
7. [`../references/slide-fewshots/ai-management-loop.md`](../references/slide-fewshots/ai-management-loop.md)
8. 画像を使う場合は[`image-policy.md`](image-policy.md)と[`../assets/README.md`](../assets/README.md)
9. 出力前に[`qa-checklist.md`](qa-checklist.md)

依頼時のテンプレートは[`prompt.md`](prompt.md)を使う。

## 30秒版

- 1枚1メッセージ。ただし判断材料は薄くしない
- タイトルはテーマ名ではなく、読み手が持ち帰る結論を書く
- 事実・解釈・提案を分ける
- 数字、手順、保留、次の一手のいずれかを見せる
- 白/navy/gray中心。tealは前進、orangeは限定強調
- ロゴは右上。生成AIに描かせず`assets/logo.png`を合成する
- 最後は「何を決めるか」「誰が何をするか」で閉じる
- 全ページをレンダリングし、目視QAする

## 正本の分担

| 判断 | 正本 |
|---|---|
| 世界観・人格 | `worldview/core.md` |
| コピー | `worldview/voice.md` |
| 色・書体・radius・shadow | `theme/design.json` |
| スライドの論理・情報設計 | `slides/production-guide.md` |
| 完成形の見た目 | `examples/slide-tastes/`、`references/slide-fewshots/` |
| ロゴ・写真・図解 | `assets/` |
| 検品 | `slides/qa-checklist.md` |

