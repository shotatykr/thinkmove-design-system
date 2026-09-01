# ThinkMove資料生成プロンプト

このファイルは、ThinkMoveのデザインシステムをGitHub上の正本として参照し、Codex / Claude Codeから資料を作るための共通入口です。

## 毎回の短い依頼

次回からは、基本的にこれだけでよい。

```text
content.mdからシンクムーブの資料を作って。
https://github.com/shotatykr/thinkmove-design-system の
AGENTS.mdとslides/README.mdを入口に、必要なガイド・Few-shot・assetsを参照してください。
画像生成を使い、公式ロゴ等は正本を後処理で合成し、全ページをQAしてください。
```

## AI agent向け実行手順

上記の依頼を受けたAI agentは、以下を実行する。

### 1. デザインシステムを取得する

優先順位：

1. GitHub connectorから`shotatykr/thinkmove-design-system`を読める場合は、それを使う
2. 作業リポジトリにsubmoduleまたはclone済みのコピーがある場合は、それを使い、可能なら最新版へ更新する
3. どちらもない場合は、公開リポジトリを一時ディレクトリへshallow cloneする

```bash
git clone --depth 1 https://github.com/shotatykr/thinkmove-design-system.git <temporary-directory>/thinkmove-design-system
```

GitHubにもネットワークにもアクセスできない場合、ブランドルールを推測して制作を続けず、参照できなかったことを報告する。

### 2. 必須ファイルを読む

次の順番で完全に読む。

1. `AGENTS.md`
2. `slides/README.md`
3. `slides/production-guide.md`
4. `slides/image-policy.md`
5. `theme/design.json`
6. `worldview/core.md`
7. `worldview/voice.md`
8. `examples/slide-tastes/few-shot.md`
9. `references/slide-fewshots/ai-management-loop.md`
10. `assets/README.md`
11. 出力前に`slides/qa-checklist.md`

### 3. 画像アセットをローカル化する

GitHub connectorで文章を読めても、imagegenへ渡す参照画像にはローカルパスが必要になる。

- 必要な`assets/`だけを作業用一時ディレクトリへ取得する
- ロゴは`assets/logo.png`を唯一のcanonicalとして扱う
- 人物写真、顧客ロゴ、図解は`assets/README.md`から用途を確認する
- GitHub URLを参照画像パスとしてimagegenへ直接渡さない
- 一時取得した画像は成果物と混同しない

### 4. 資料を設計する

制作前に、内部的に次を定義する。

- Audience：誰が読むか
- Job：資料が果たす仕事
- Decision：相手に何を決めてほしいか
- Takeaway：中心結論
- Evidence：必要な根拠

先にスライドタイトルだけでストーリーを作り、その後に本文とビジュアルを設計する。

### 5. 画像生成と合成

- imagegenは表紙、章扉、概念シーン、挿絵、既存Few-shotに沿ったビジュアルの叩き台へ使う
- ロゴ、正確な数字、グラフ、顧客名、実在UIをimagegenに描かせない
- 右上に公式ロゴ用の余白を確保する
- imagegen出力後、正確な文字・数字・公式ロゴを後処理で合成する
- 実画面を示す場合は、似たUIを生成せず実際のスクリーンショットを使う
- 同じ生成画像を複数ページで使い回さない

### 6. 出力とQA

推奨出力：

- `slides/`：各ページの最終画像
- `final.pptx`：PowerPoint
- `contact-sheet.png`：全ページ一覧
- 必要に応じて`final.pdf`

完成後：

1. 全ページをレンダリングする
2. `slides/qa-checklist.md`を通す
3. 文字化け、誤字、数値不一致、重なり、切れ、ロゴ、出典を目視確認する
4. 不合格ページを修正または再生成する
5. 最終形式を再レンダリングして確認する

## 詳細版の依頼テンプレート

```text
content.mdをもとに、ThinkMoveのサービス資料を作成してください。

GitHub上の正本：
https://github.com/shotatykr/thinkmove-design-system

AGENTS.mdとslides/README.mdを入口として、指示された関連ファイルを完全に読んでください。
GitHub connectorで読めない画像アセットは、一時ディレクトリへcloneまたは取得してください。

- 読み手：［役職・部署・前提知識］
- 目的：［提案／承認／分析報告／研修／登壇］
- 相手に決めてほしいこと：［判断事項］
- 中心結論：［結論。未定ならcontent.mdから導出］
- 利用場面：［口頭説明／会議配布／単独閲覧］
- 想定時間：［分］
- 出力形式：［PPTX／Google Slides／HTML／PDF］

制作要件：

1. Audience / Job / Decision / Takeaway / Evidenceを定義する
2. 先にスライドタイトルだけでストーリーを作る
3. 1枚1メッセージ、結論型タイトルにする
4. 事実・解釈・提案を分ける
5. 数字には比較対象、期間、母数、意味を添える
6. theme/design.jsonと既存Few-shotを守る
7. 画像はslides/image-policy.mdに従う
8. ロゴは生成せず、assets/logo.pngを右上へ後処理で合成する
9. 根拠のないデータ、引用、事例を作らない
10. 最後は冒頭の問いへの答えと次のアクションで閉じる
11. 全ページをレンダリングし、slides/qa-checklist.mdで検品する

読み手が状況を理解するだけでなく、
何を判断し、誰が何から動くかまで分かる状態にしてください。
```
