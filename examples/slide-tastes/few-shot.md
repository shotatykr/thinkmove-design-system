# Slide Taste Few-shot

ThinkMove の資料生成で、AI が最初に見るべき few-shot 正本。
単なる見た目の例ではなく、`worldview/core.md` の「冷静な共感」を **実務資料としてどう見せるか** を固定する。

## Worldview In Slides

資料の世界観は、以下の一文で扱う。

> **実務密度のある冷静な共感。**

「静か」「上品」「余白がある」だけでは足りない。
ThinkMove の資料は、読む人の判断が前に進むために、数字、手順、保留、次の一手まで見える必要がある。

## Primary Few-shot

まずこの2枚を基準にする。

| Status | Pattern | Preview | Why |
| --- | --- | --- | --- |
| Strong | Diagnostic Cockpit | [`previews/diagnostic-cockpit.png`](previews/diagnostic-cockpit.png) | KPI、優先度、次アクションが同時に見える。情報量があり、実務判断に使える |
| Strong | Workshop Guide | [`previews/workshop-guide.png`](previews/workshop-guide.png) | 手順、演習欄、講師メモがあり、翌日の実務に落ちる |

この2枚が、ThinkMove slide taste の中心。
他のパターンも、迷ったらこの2枚の情報密度と業務感に寄せる。

連続資料の参照デッキは [`../../references/slide-fewshots/ai-management-loop.md`](../../references/slide-fewshots/ai-management-loop.md) を正とする。

## Secondary Few-shot

以下はそのまま正解ではなく、用途に応じて寄せる。

| Pattern | Preview | Adjustment |
| --- | --- | --- |
| Quiet Proposal | [`previews/quiet-proposal.png`](previews/quiet-proposal.png) | Workshop Guide 寄りに、支援範囲・進行・判断材料を増やす |
| Evidence Case | [`previews/evidence-case.png`](previews/evidence-case.png) | Diagnostic Cockpit 寄りに、期間・対象・変化・次アクションを足す |
| Keynote Narrative | [`previews/keynote-narrative.png`](previews/keynote-narrative.png) | 思想だけで終わらせず、問い・材料・行動の3点を入れる |

## What Good Looks Like

- 右上に公式ロゴがある
- 見た瞬間に、資料の用途が分かる
- 余白はあるが、情報が薄くない
- KPI、手順、判断材料、保留、次の一手のどれかがある
- 1枚の主論点は1つ。ただし判断材料は複数ある
- Teal は前進・次アクションに使う
- Orange は1点だけの変化・注意・強調に使う
- カードは shadow-as-border。太線で囲いすぎない
- 文字は大きく、短く、実務に使える

## What To Avoid

- きれいだが判断材料がない
- 余白を増やしすぎて、薄いポスターになる
- 抽象コピーだけで終わる
- ロゴを左に置く、または忘れる
- 毎回違う配色や装飾に寄せる
- AIっぽい締め文にする
- Orange をCTAや広い背景に使う
- HTML/CSS のスクリーンショット風に見える
- GPT-image2 にロゴを描かせる

## Generation Prompt Add-on

GPT-image2 / imagegen で資料プレビューを生成するときは、必ず以下をプロンプトに混ぜる。

```text
Use the ThinkMove slide-taste few-shot direction.
The strongest references are Diagnostic Cockpit and Workshop Guide:
high practical density, decision-ready information, visible steps/KPIs/actions,
calm empathy, restrained consulting deck polish, top-right official-logo area.
Do not make a thin inspirational poster. Do not make an HTML/CSS screenshot.
Keep the top-right corner calm for the real ThinkMove logo, but do not draw the logo.
```

## QA Rubric

5点満点で確認する。

| Score | Criterion |
| --- | --- |
| 1 | 右上ロゴの余白が確保されている |
| 1 | 情報密度が Workshop Guide / Diagnostic Cockpit に近い |
| 1 | 判断材料がある。数字、手順、保留、次の一手のいずれか |
| 1 | ThinkMove palette を守っている。白/navy/gray/teal中心、orangeは限定 |
| 1 | 3秒で「何のための資料か」が分かる |

3点以下なら再生成。
4点でも、情報密度が薄ければ再生成。

## Current Direction

今後の生成方針:

- Proposal 系は、きれいな会社紹介より **判断材料付きの提案書** に寄せる
- Case 系は、成果の雰囲気より **証拠と再現手順** に寄せる
- Keynote 系は、思想の余白を残しながら **問い・材料・行動** を入れる
- Training / Diagnostic 系は現状の勝ち筋として維持する
