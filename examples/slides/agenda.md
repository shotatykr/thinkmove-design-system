---
name: agenda
purpose: 目次・全体像
when_to_use: 資料冒頭、長いセクションの章扉、提案書の全体像提示
---

# Agenda

## 構造

```
[Eyebrow: AGENDA]

H2: 今日お話しすること

────────────────────

01  [短い節題]
    1行の補足

02  [短い節題]
    1行の補足

03  [短い節題]
    1行の補足

────────────────────
```

## ルール

- **5項目以下**（情報密度を保つ、「白の余白」原則）
- 番号は 01, 02, 03 形式（左端、tabular-nums）
- 節題は **漢字主体・体言止め or 動詞の現在形**
- 各項目に1行補足（誰でも分かる説明、長くしない）
- 「〜について」「〜とは」は禁止（worldview voice §3）

## tokens

| 要素 | 値 |
|------|----|
| eyebrow | `tm-eyebrow` クラス（11px、letter-spacing 0.18em、`color.cta-dark`） |
| H2 | `color.text`、font-weight 700、letter-spacing -0.005em |
| 番号 | `tm-number-highlight` クラス、`color.ink`、font-size 24px |
| 節題 | `color.text`、font-size 18px、font-weight 600 |
| 補足 | `color.text-body`、font-size 14px |
| 区切り線 | `color.border` の hairline |
| 余白 | 項目間 32px |

## 良い例

> AGENDA
>
> ## 今日お話しすること
>
> ────────────
>
> **01**　現状の整理
> 　　マーケ施策が回っていても止まっている理由
>
> **02**　第三の選択肢
> 　　採用でも外注でもない伴走の形
>
> **03**　共創型R&Dの中身
> 　　判断の型・関与の深さ・文脈の蓄積
>
> ────────────

## 悪い例

- ❌ 「01 SEOについて、02 コンテンツについて」 — 動詞止まり、「について」禁則違反
- ❌ 7項目以上のリスト — 情報過多、聴衆が記憶できない
- ❌ アイコン＋カラフル背景の派手な agenda — worldview §8.1 と齟齬
