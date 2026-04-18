> **URL**: https://thinkmove.jp/lp/ai/
> **Fetched**: 2026-04-19

---

<div class="lp-content__postContent post_content">

<style>
:root {
  --lp-main: #044d78;
  --lp-main-light: rgba(4, 77, 120, 0.08);
  --lp-dark: #1A365D;
  --lp-bg-light: #F7FAFC;
  --lp-bg-white: #fdfdfd;
  --lp-cta: #00a381;
  --lp-teal: #319795;
  --lp-text: #2D3748;
  --lp-text-light: #718096;
  --lp-border: #E2E8F0;
  --lp-radius: 8px;
}
.post_content h2,.post_content h3,.post_content h4 {
  background: none !important; border: none !important;
  padding: 0 !important; color: inherit !important;
}
.post_content h2::before,.post_content h2::after,
.post_content h3::before,.post_content h3::after { display: none !important; }

.lp-ai-inner { max-width: 1100px; margin: 0 auto; }
.lp-ai-section-ttl {
  text-align: center; font-size: 1.75rem; font-weight: 900;
  line-height: 1.5; margin-bottom: 48px; letter-spacing: 0.02em; color: var(--lp-text);
}
.lp-ai-section-ttl .accent { color: var(--lp-main); }
.lp-ai-section-ttl .accent-green { color: var(--lp-teal); }
.lp-ai-bottom-msg {
  background: var(--lp-dark); color: #fff; border-radius: var(--lp-radius);
  padding: 24px 32px; text-align: center; font-size: 1.05rem; font-weight: 700; margin-top: 40px;
}
.lp-ai-bottom-msg .accent-green { color: var(--lp-teal); }
.lp-ai-cta-btn {
  display: inline-block; background: var(--lp-cta); color: #fff !important;
  padding: 18px 48px; border-radius: 80px; font-size: 1.05rem; font-weight: 700;
  text-decoration: none !important; transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(0, 163, 129, 0.3);
}
.lp-ai-cta-btn:hover {
  background: #008d6f; transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 163, 129, 0.4); color: #fff !important;
}
.lp-ai-cta-note { font-size: 0.85rem; opacity: 0.5; margin-top: 12px; text-align: center; }

/* HERO */
.lp-ai-hero {
  background: linear-gradient(135deg, rgba(26,54,93,0.94) 0%, rgba(4,77,120,0.92) 100%) !important;
  position: relative; overflow: hidden;
}
.lp-ai-hero::after {
  content: ''; position: absolute; top: -20%; right: -10%; width: 50%; height: 140%;
  background: linear-gradient(135deg,
    transparent 40%, rgba(49,151,149,0.08) 40%, rgba(49,151,149,0.08) 42%, transparent 42%,
    transparent 46%, rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.03) 47%, transparent 47%);
  pointer-events: none; z-index: 0;
}
.lp-ai-hero .swell-block-fullWide__inner { position: relative; z-index: 1; }
.lp-ai-hero-content { text-align: center; color: #fff; padding: 40px 0 20px; }
.lp-ai-hero-eyebrow {
  font-size: 0.8rem; letter-spacing: 0.2em; opacity: 0.6; margin-bottom: 32px;
  display: inline-flex; align-items: center; gap: 12px;
}
.lp-ai-hero-eyebrow::before,.lp-ai-hero-eyebrow::after {
  content: ''; width: 32px; height: 1px; background: rgba(255,255,255,0.4);
}
.lp-ai-hero-title {
  font-size: 3rem; font-weight: 900; line-height: 1.4; margin-bottom: 28px; color: #fff !important;
}
.lp-ai-hero-title .highlight {
  background: linear-gradient(transparent 55%, rgba(49, 151, 149, 0.5) 55%); padding: 0 6px;
}
.lp-ai-hero-subtitle {
  font-size: 1.15rem; opacity: 0.85; line-height: 1.8; margin-bottom: 40px;
  color: #fff !important; font-weight: 500;
}
.lp-ai-hero .lp-ai-cta-btn {
  padding: 22px 56px; font-size: 1.15rem; box-shadow: 0 6px 24px rgba(0, 163, 129, 0.4);
}
/* ツールバッジ */
.lp-ai-hero-tools {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
  margin-bottom: 36px; max-width: 700px; margin-left: auto; margin-right: auto;
}
.lp-ai-hero-tools span {
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  color: #fff; font-size: 0.8rem; font-weight: 600;
  padding: 5px 14px; border-radius: 20px; white-space: nowrap;
}

/* 課題カード */
.lp-ai-pain-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 32px;
}
.lp-ai-pain-card {
  background: #fff; border: 1px solid var(--lp-border); border-radius: var(--lp-radius); padding: 28px 24px;
}
.lp-ai-pain-num { font-size: 1.8rem; font-weight: 900; color: var(--lp-main); opacity: 0.2; line-height: 1; margin-bottom: 12px; }
.lp-ai-pain-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; color: var(--lp-text); }
.lp-ai-pain-card p { font-size: 0.9rem; line-height: 1.7; color: var(--lp-text-light); margin: 0; }

/* ツールグリッド */
.lp-ai-tools-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;
}
.lp-ai-tool-card {
  background: #fff; border: 1px solid var(--lp-border); border-radius: 12px;
  padding: 24px 16px; text-align: center; transition: border-color 0.3s, box-shadow 0.3s;
}
.lp-ai-tool-card:hover { border-color: var(--lp-main); box-shadow: 0 4px 16px rgba(4,77,120,0.06); }
.lp-ai-tool-name { font-size: 1rem; font-weight: 800; margin-bottom: 6px; color: var(--lp-text); }
.lp-ai-tool-cat {
  font-size: 0.65rem; font-weight: 700; color: var(--lp-teal); letter-spacing: 0.1em;
  margin-bottom: 8px; text-transform: uppercase;
}
.lp-ai-tool-desc { font-size: 0.8rem; color: var(--lp-text-light); line-height: 1.5; }

/* カリキュラム */
.lp-ai-curriculum-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 32px;
}
.lp-ai-curriculum-card {
  background: #fff; border: 1px solid var(--lp-border); border-radius: 16px; padding: 28px 24px;
}
.lp-ai-curriculum-num {
  display: inline-block; background: var(--lp-main); color: #fff;
  font-size: 0.7rem; font-weight: 700; padding: 3px 14px; border-radius: 20px;
  letter-spacing: 0.1em; margin-bottom: 12px;
}
.lp-ai-curriculum-name {
  font-size: 1.1rem; font-weight: 800; margin-bottom: 12px;
  padding-left: 12px; border-left: 3px solid var(--lp-main);
}
.lp-ai-curriculum-list { list-style: none; padding: 0; margin: 0; }
.lp-ai-curriculum-list li {
  font-size: 0.85rem; padding: 5px 0 5px 20px; position: relative;
  line-height: 1.5; color: var(--lp-text-light);
}
.lp-ai-curriculum-list li::before {
  content: ''; position: absolute; left: 0; top: 10px; width: 10px; height: 10px;
  background: #0d9488; border-radius: 2px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' fill='white'/%3E%3C/svg%3E");
  background-size: 8px; background-position: center; background-repeat: no-repeat;
}
.lp-ai-curriculum-tools {
  display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;
}
.lp-ai-curriculum-tools span {
  background: var(--lp-main-light); color: var(--lp-main);
  font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 12px;
}

/* Before/After */
.lp-ai-ba-grid {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: stretch; margin-bottom: 32px;
}
.lp-ai-ba-card { background: #fff; border-radius: 16px; padding: 32px 24px; }
.lp-ai-ba-card.before { border: 2px solid var(--lp-border); }
.lp-ai-ba-card.after { border: 2px solid var(--lp-teal); box-shadow: 0 4px 20px rgba(49,151,149,0.08); }
.lp-ai-ba-label {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  padding: 3px 14px; border-radius: 20px; letter-spacing: 0.1em; margin-bottom: 16px;
}
.lp-ai-ba-card.before .lp-ai-ba-label { background: var(--lp-border); color: var(--lp-text-light); }
.lp-ai-ba-card.after .lp-ai-ba-label { background: var(--lp-teal); color: #fff; }
.lp-ai-ba-list { list-style: none; padding: 0; margin: 0; }
.lp-ai-ba-list li {
  font-size: 0.9rem; padding: 8px 0; border-bottom: 1px solid var(--lp-border);
  display: flex; justify-content: space-between;
}
.lp-ai-ba-list li:last-child { border-bottom: none; }
.lp-ai-ba-list .task { color: var(--lp-text); }
.lp-ai-ba-list .time { font-weight: 700; white-space: nowrap; margin-left: 12px; }
.lp-ai-ba-card.before .time { color: var(--lp-text-light); }
.lp-ai-ba-card.after .time { color: var(--lp-teal); }
.lp-ai-ba-arrow { display: flex; align-items: center; font-size: 2rem; color: var(--lp-text-light); opacity: 0.4; }

/* 料金 */
.lp-ai-pricing-card {
  background: #fff; border: 2px solid var(--lp-main); border-radius: 16px;
  padding: 48px 40px; max-width: 560px; margin: 0 auto 32px; text-align: center;
  box-shadow: 0 8px 32px rgba(4, 77, 120, 0.08);
}
.lp-ai-pricing-name { font-size: 1.3rem; font-weight: 900; margin-bottom: 4px; }
.lp-ai-pricing-target { font-size: 0.8rem; color: var(--lp-text-light); margin-bottom: 20px; }
.lp-ai-pricing-amount { font-size: 3rem; font-weight: 900; color: var(--lp-main); line-height: 1; margin-bottom: 4px; }
.lp-ai-pricing-amount .unit { font-size: 1rem; font-weight: 700; }
.lp-ai-pricing-tax { font-size: 0.75rem; color: var(--lp-text-light); margin-bottom: 24px; }
.lp-ai-pricing-divider { height: 1px; background: var(--lp-border); margin: 0 -4px 24px; }
.lp-ai-pricing-features { list-style: none; padding: 0; margin: 0; text-align: left; }
.lp-ai-pricing-features li {
  font-size: 0.9rem; padding: 6px 0 6px 24px; position: relative; line-height: 1.6;
}
.lp-ai-pricing-features li::before {
  content: ''; position: absolute; left: 0; top: 12px; width: 14px; height: 14px;
  background: #0d9488; border-radius: 3px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' fill='white'/%3E%3C/svg%3E");
  background-size: 10px; background-position: center; background-repeat: no-repeat;
}
.lp-ai-pricing-context {
  text-align: center; font-size: 0.85rem; color: var(--lp-text-light); margin-top: 16px; line-height: 1.7;
}

/* Final CTA */
.lp-ai-final-cta { text-align: center; color: #fff; padding: 20px 0; }
.lp-ai-final-cta-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 16px; line-height: 1.5; }
.lp-ai-final-cta-desc { font-size: 1rem; opacity: 0.8; margin-bottom: 40px; line-height: 1.8; }
.lp-ai-final-cta .lp-ai-cta-btn { padding: 22px 56px; font-size: 1.15rem; }
.lp-ai-final-cta .lp-ai-cta-note { color: rgba(255,255,255,0.4); }

/* Responsive */
@media (max-width: 959px) {
  .lp-ai-hero-title { font-size: 2.2rem; }
  .lp-ai-pain-grid { grid-template-columns: 1fr; }
  .lp-ai-tools-grid { grid-template-columns: repeat(3, 1fr); }
  .lp-ai-curriculum-grid { grid-template-columns: 1fr; }
  .lp-ai-ba-grid { grid-template-columns: 1fr; }
  .lp-ai-ba-arrow { justify-content: center; transform: rotate(90deg); padding: 8px 0; }
}
@media (max-width: 599px) {
  .lp-ai-hero-title { font-size: 1.8rem; }
  .lp-ai-hero-subtitle { font-size: 1rem; }
  .lp-ai-section-ttl { font-size: 1.4rem; }
  .lp-ai-tools-grid { grid-template-columns: repeat(2, 1fr); }
  .lp-ai-pricing-card { padding: 32px 20px; }
  .lp-ai-final-cta-title { font-size: 1.4rem; }
}

/* ── PC/SP改行制御 ── */
.sp-br { display: none; }
@media (max-width: 599px) {
  .pc-br { display: none; }
  .sp-br { display: inline; }
}
</style>

<div class="lp-ai-hero-content">

AI TRAINING & IMPLEMENTATION

<div class="lp-ai-hero-tools">

ChatGPTClaudeClaude CodeGemini PerplexityManusGenSparkNotebookLM Cursorv0DifyGamma Napkin AIMidjourneySunoFelo

AIツールは、もう\

16個以上。\
\
全部教えます。

ChatGPT、Claude、Gemini、Perplexity、Manus、GenSpark、Claude Code……\
マーケティング業務に使えるAIツールの選び方・使い分け・実装まで、\
SEO×AIの専門家が直接レクチャーします。

<a href="https://share-na2.hsforms.com/18dPGMXqoSaC51_-C6iXuXg40efxf" class="lp-ai-cta-btn">無料相談で「何から始めるべきか」を整理する</a>

無料 / オンライン / 30分 / 営業なし

※ 月3社限定

<div class="lp-ai-inner">

AIツールが増えすぎて、\
\

何から手をつければいいかわからない。

<div class="lp-ai-pain-grid">

<div class="lp-ai-pain-card">

<div class="lp-ai-pain-num">

01

<div class="lp-ai-pain-title">

ChatGPTしか使ったことがない

Claude、Gemini、Perplexity……名前は聞くけど、違いがわからない。「とりあえずChatGPT」で止まっている。実はもっと向いているツールがあるかもしれないのに。

<div class="lp-ai-pain-card">

<div class="lp-ai-pain-num">

02

<div class="lp-ai-pain-title">

Manus、GenSpark、Claude Code……何ができるの？

X（Twitter）で「すごい」と流れてくるツールを試したい。でも使い方がわからない。無料プランで少し触って、そのまま放置。

<div class="lp-ai-pain-card">

<div class="lp-ai-pain-num">

03

<div class="lp-ai-pain-title">

AIで記事を書いたけど、検索で上がらない

ChatGPTで記事を量産したのに順位は上がらない。「AIに書かせればSEOもOK」じゃなかった。何が間違っていたのかもわからない。

<div class="lp-ai-pain-card">

<div class="lp-ai-pain-num">

04

<div class="lp-ai-pain-title">

研修を受けたけど、結局使いこなせていない

「プロンプトのコツ」は習った。でも自分の業務にどう組み込めばいいかがわからない。知識はあるのに、業務が変わっていない。

<div class="lp-ai-bottom-msg">

問題は「知らない」ことじゃない。\
<span class="accent-green">「自分の業務に、どのツールを、どう使えばいいか」がわからないこと。 </span>

<div class="lp-ai-inner">

対応ツール

一覧\
\

すべて実務で使い込んだ上で、最適な組み合わせを設計します。

<div class="lp-ai-tools-grid">

対話AI ChatGPT 文章生成・壁打ち・翻訳。最も汎用的なAI。GPTs活用も 対話AI Claude 長文分析・構成設計・レビュー。記事制作との相性が抜群 対話AI Gemini Google連携・スプレッドシート・Gmail統合。Google業務を加速 コーディング Claude Code ターミナルから直接コード生成。LP制作・自動化スクリプトに コーディング Cursor AIエディタ。コード補完・リファクタ・デバッグを自動化 UI生成 v0 プロンプトからUI/ページを自動生成。プロトタイプ作成に AI検索 Perplexity ソース付きAI検索。リサーチ・競合調査・ファクトチェックに AI検索 GenSpark マルチソース横断検索。比較分析・市場調査に強い AI検索 Felo 多言語AI検索。海外情報のリサーチ・翻訳調査に AIエージェント Manus 自律型AIエージェント。複雑なリサーチ・資料作成を自動実行 ドキュメント NotebookLM Google製。PDF・議事録・資料を読み込んで分析・要約・Q&A ワークフロー Dify ノーコードAIワークフロー構築。定型業務の自動化に プレゼン Gamma プロンプトからスライド自動生成。提案書・社内資料に 図解 Napkin AI テキストから図解・インフォグラフィックを自動生成 画像生成 Midjourney 高品質なAI画像生成。SNS素材・ブログアイキャッチに 音楽生成 Suno AIで楽曲生成。動画BGM・ポッドキャストOPに

<div class="lp-ai-bottom-msg">

新しいツールは毎週のように登場します。\
<span class="accent-green">すべて実務で検証した上で、あなたの業務に最適な組み合わせを設計します。 </span>

<div class="lp-ai-inner">

研修

カリキュラム

<div class="lp-ai-curriculum-grid">

<div class="lp-ai-curriculum-card">

<div class="lp-ai-curriculum-num">

MODULE 01

<div class="lp-ai-curriculum-name">

AI基礎 × ツール選定

- ChatGPT / Claude / Gemini の違いと使い分け
- Perplexity / GenSpark / Felo でリサーチ力を10倍に
- Manus / Dify で業務の自動化を体験
- あなたの業務に最適なツールの組み合わせを設計

<div class="lp-ai-curriculum-tools">

ChatGPTClaudeGeminiPerplexityGenSparkFeloManusDify

<div class="lp-ai-curriculum-card">

<div class="lp-ai-curriculum-num">

MODULE 02

<div class="lp-ai-curriculum-name">

AI × コンテンツ制作

- SEOに強いAI記事の書き方（ChatGPTに丸投げではダメな理由）
- Claude で構成案を設計し、品質を担保する方法
- Gamma / Napkin AI で提案書・スライドを高速作成
- Midjourney でSNS素材・アイキャッチを自作

<div class="lp-ai-curriculum-tools">

ChatGPTClaudeGammaNapkin AIMidjourney

<div class="lp-ai-curriculum-card">

<div class="lp-ai-curriculum-num">

MODULE 03

<div class="lp-ai-curriculum-name">

AI × 分析・リサーチ

- NotebookLM で議事録・PDF・資料を瞬時に分析
- Perplexity × GenSpark で競合調査を自動化
- GA4 / GSCデータのAI分析フロー構築
- ChatGPT Advanced Data Analysis で数値レポート自動生成

<div class="lp-ai-curriculum-tools">

NotebookLMPerplexityGenSparkChatGPT

<div class="lp-ai-curriculum-card">

<div class="lp-ai-curriculum-num">

MODULE 04

<div class="lp-ai-curriculum-name">

AI × 開発・自動化

- Claude Code でLP・ページを爆速作成（非エンジニアでも）
- Cursor で既存コードの修正・改善を自動化
- v0 でUIプロトタイプを5分で生成
- Dify でノーコードAIワークフローを構築

<div class="lp-ai-curriculum-tools">

Claude CodeCursorv0Dify

<div class="lp-ai-bottom-msg">

すべてのモジュールは、\
<span class="accent-green">あなたの実際の業務データを使って、ハンズオンで進めます。 </span>

<div class="lp-ai-inner">

研修後の

Before / After

<div class="lp-ai-ba-grid">

<div class="lp-ai-ba-card before">

<div class="lp-ai-ba-label">

BEFORE

- SEO記事1本
  8時間
- 競合リサーチ
  3時間
- 分析レポート
  5時間
- 提案書作成
  4時間
- SNS投稿（10本）
  3時間
- 合計
  23時間/週

<div class="lp-ai-ba-arrow">

→

<div class="lp-ai-ba-card after">

<div class="lp-ai-ba-label">

AFTER

- SEO記事1本 <span class="small">（Claude）</span>
  2時間
- 競合リサーチ <span class="small">（Perplexity + GenSpark）</span>
  30分
- 分析レポート <span class="small">（NotebookLM + ChatGPT）</span>
  1時間
- 提案書作成 <span class="small">（Gamma）</span>
  30分
- SNS投稿 <span class="small">（ChatGPT + Midjourney）</span>
  30分
- 合計
  4.5時間/週

<div class="lp-ai-bottom-msg">

週23時間 → 4.5時間。\
<span class="accent-green">浮いた18.5時間を、戦略と意思決定に使える。 </span>

<div class="lp-ai-inner">

料金

<div class="lp-ai-pricing-card">

<div class="lp-ai-pricing-name">

AI活用研修

<div class="lp-ai-pricing-target">

マーケティング業務にAIを実装したい方向け

<div class="lp-ai-pricing-amount">

都度見積

<div class="lp-ai-pricing-tax">

税別

<div class="lp-ai-pricing-divider">

- **SEO×AIの専門家が直接レクチャー**
- あなたの実際の業務データを使ったハンズオン
- 16以上のAIツールから最適な組み合わせを設計
- プロンプトテンプレート・業務フローを納品
- 導入後1ヶ月のフォローアップ

※ 研修内容・期間・人数に応じて個別にお見積りします。\
※ 継続的な伴走支援をご希望の場合は、<a href="/lp/co-creation/" style="color: var(--lp-main); font-weight: 700;">共創支援プラン</a>もご検討ください。

<div style="text-align: center; margin-top: 40px;">

<a href="https://share-na2.hsforms.com/18dPGMXqoSaC51_-C6iXuXg40efxf" class="lp-ai-cta-btn">無料相談で研修内容を相談する</a>

無料 / オンライン / 営業なし

## よくあるご質問

**Q**　一般的なAI研修と何が違いますか？

**A**　2つの違いがあります。①ChatGPTだけでなく16以上のツールを横断的にカバーし、業務に最適な組み合わせを設計します。②マーケティング×SEOの専門家が教えるため、「AIで書いたけど検索で上がらない」を防ぐ実践的な研修です。

**Q**　非エンジニアでもClaude CodeやCursorを使えますか？

**A**　はい。コードを書く必要はありません。Claude Codeは自然言語で指示するだけでLP制作や自動化スクリプトを生成できます。マーケターが「自分でページを作れる」「自動化できる」ようになるのがゴールです。

**Q**　研修はオンラインですか？期間はどれくらいですか？

**A**　オンライン・対面どちらも対応可能です。基本プログラムは全4モジュール（各2時間）ですが、必要なモジュールだけの受講も可能です。業務に合わせてカスタマイズしますので、まずはご相談ください。

**Q**　ツールの有料プラン費用は含まれますか？

**A**　各AIツールのサブスクリプション費用は含まれません。ただし、どのツールにいくら投資すべきかの優先順位設計も研修に含まれています。無料プランで十分なもの・有料にすべきものを切り分けます。

**Q**　SEOコンサルや共創支援との違いは？

**A**　AI活用研修は「AIツールの使い方と業務への実装」に特化したスポット型の支援です。[SEOコンサル](/lp/seo/)はSEO戦略の継続支援、[共創支援](/lp/co-creation/)はマーケティング全体の判断・推進支援です。研修後に継続伴走が必要な場合は、他プランへの移行も可能です。

ChatGPTだけで止まっていませんか。\
\
もっと使えるツールが、こんなにある。

ChatGPT、Claude、Gemini、Perplexity、Manus、GenSpark、Claude Code……\
あなたの業務に最適なAIツールの組み合わせを、一緒に見つけましょう。

<a href="https://share-na2.hsforms.com/18dPGMXqoSaC51_-C6iXuXg40efxf" class="lp-ai-cta-btn">無料相談で「何から始めるべきか」を整理する</a>

無料 / オンライン / 30分 / 営業なし

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>
