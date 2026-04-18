import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { NEWS, getLabelStyle } from '@/lib/news';

interface Tool {
  href: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
}

const diagnosticTools = [
  { href: '/ai-readiness', title: 'AI活用度診断', subtitle: 'AIの実力がわかる', description: '20問で組織のAI活用レベルを5軸で診断。職種不問。次にやるべき施策がわかる。', duration: '3分', badge: 'NEW', preview: '/icons/ai-level-A.png' },
  { href: '/marketing-maturity', title: 'インハウスマーケター成熟度診断', subtitle: '組織の現在地がわかる', description: '20問でマーケ内製化レベルを5段階評価。レーダーチャートで可視化。', duration: '3分', badge: '', preview: '/preview-maturity.png' },
  { href: '/seo-scorer', title: 'SEO × LLMO診断ツール', subtitle: 'サイトの現在地がわかる', description: 'URLを入力するだけ。SEO+AI引用適性を10秒で診断。', duration: '10秒', badge: '', preview: '/preview-scorer.png' },
  { href: '/seo-type', title: 'SEO戦略タイプ診断', subtitle: '自分の現在地がわかる', description: '10問であなたのSEO戦略タイプを5パターンから診断。', duration: '2分', badge: '', preview: '/preview-type.png' },
];

const utilityTools: Tool[] = [
  { href: '/ctr-simulator', title: 'SEOクリック数シミュレーター', description: '「3位→1位でクリック何件増える？」を数値で即答。上司への報告・施策の優先順位づけに。', badge: '', badgeColor: '' },
  { href: '/serp-preview', title: 'SERPプレビュー＆タイトル評価', description: '公開前にGoogle検索結果での見え方を確認。タイトルの切れ・印象を事前チェック。', badge: '', badgeColor: '' },
  { href: '/seo-estimate', title: 'SEO見積もりシミュレーター', description: '外注の見積もりが適正か、3問で判断。業界相場と比較して高い・安いがわかる。', badge: '', badgeColor: '' },
  { href: '/meta-generator', title: 'メタディスクリプション自動生成', description: 'タイトルを入れるだけ。AIが3案出すので選ぶだけ。毎回ゼロから考える手間がなくなる。', badge: '', badgeColor: '' },
  { href: '/keyword-intent', title: 'キーワード検索意図分類', description: 'キーワードをまとめて貼るだけ。「情報収集？購入検討？」をAIが一括仕分け。', badge: '', badgeColor: '' },
  { href: '/utm-generator', title: 'UTMパラメータジェネレーター', description: 'GA4対応の流入トラッキングURLをGUIで生成＋ワンクリックコピー。プリセット6種。', badge: 'NEW', badgeColor: '' },
  { href: '/x-post-checker', title: 'X投稿最適化チェッカー', description: '投稿文をペーストするだけ。文字数・フック・CTA・数値を一括スコアリング。', badge: 'NEW', badgeColor: '' },
  { href: '/ogp-preview', title: 'OGPプレビューツール', description: 'URLを入れるだけ。X・Facebook・LinkedInのシェアカードを一度にプレビュー。', badge: 'NEW', badgeColor: '' },
  { href: '/seo-vs-ads', title: 'SEO vs 広告 ROI比較計算機', description: 'SEO月額と広告CPCから損益分岐点・3年累積コスト差を算出。上司への説明に。', badge: 'NEW', badgeColor: '' },
  { href: '/eeat-checklist', title: 'E-E-A-T自己診断チェックリスト', description: '4軸24項目でAI引用される条件を数値化。改善優先度TOP3を即提示。', badge: 'NEW', badgeColor: '' },
  { href: '/content-compare', title: '競合コンテンツ比較ツール', description: 'URL2-4本を横並び比較。文字数・見出し・数値密度・リンク数を一括可視化。', badge: 'NEW', badgeColor: '' },
];

const courses = [
  { href: '/learn', title: 'AI × SEO実践講座', sub: 'SEOをこれから始める / 体系的に学び直したい方へ', desc: 'SEOの基本からCTR分析、月次運用設計まで。', badge: '全12レッスン 無料', img: '/banner-seo-course.png', badgeClass: 'bg-emerald-50 text-emerald-700' },
  { href: '/learn/ai', title: 'AI活用講座', sub: 'AIをマーケ業務に使いこなしたい方へ', desc: 'プロンプト設計からLLMO/GEO戦略、業務自動化まで。', badge: '全12レッスン 無料', img: '/banner-ai-course.png', badgeClass: 'bg-blue-50 text-blue-700' },
  { href: '/learn/content', title: 'コンテンツマーケティング実践講座', sub: '広告費ゼロでリードを呼ぶ仕組みを作りたい方へ', desc: 'ペルソナ設計からリード獲得、ROI証明まで。', badge: '全12レッスン 無料', img: '/banner-content-course.png', badgeClass: 'bg-amber-50 text-amber-700' },
  { href: '/learn/claude-code', title: 'Claude Code実践講座', sub: 'AIをチャットから「実行環境」に変えたい方へ', desc: 'CLAUDE.md設計・MCP連携・Hooks自動化まで。', badge: 'NEW 全12レッスン 無料', img: null, badgeClass: 'text-[#c96442]', badgeStyle: { background: '#fef3ee' } },
];

function IconBuilding() { return (<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="6" y="6" width="20" height="22" rx="2" /><line x1="6" y1="14" x2="26" y2="14" /><line x1="16" y1="6" x2="16" y2="28" /><rect x="10" y="8" width="3" height="3" rx="0.5" /><rect x="19" y="8" width="3" height="3" rx="0.5" /><rect x="10" y="17" width="3" height="3" rx="0.5" /><rect x="19" y="17" width="3" height="3" rx="0.5" /><rect x="13" y="22" width="6" height="6" rx="1" /></svg>); }
function IconPerson() { return (<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="16" cy="10" r="5" /><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" /></svg>); }
function IconRefresh() { return (<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M6 16a10 10 0 0117.07-7.07L26 12" /><polyline points="26 6 26 12 20 12" /><path d="M26 16a10 10 0 01-17.07 7.07L6 20" /><polyline points="6 26 6 20 12 20" /></svg>); }

const targetPersonas = [
  { icon: 'building' as const, label: 'BtoB事業会社のマーケ担当', desc: '1-2人チームでSEOもAIも回したい' },
  { icon: 'person' as const, label: '社内で1人のWeb担当', desc: '相談相手がいない、何から始めればいいかわからない' },
  { icon: 'refresh' as const, label: 'SEOを外注→内製化したい方', desc: '依存を減らして自走できるチームを作りたい' },
];

function PersonaIcon({ type }: { type: 'building' | 'person' | 'refresh' }) {
  switch (type) { case 'building': return <IconBuilding />; case 'person': return <IconPerson />; case 'refresh': return <IconRefresh />; }
}

const painPoints = [
  '施策を打っても、何が効いているのか社内に説明できない',
  'AIツールを試したが、日常業務に定着しない',
  'SEOの全体像がわからないまま、部分的に手を出している',
  '外注先の提案が正しいか判断できない',
  '「とりあえずブログを書く」以外の戦略が見えない',
];

const stats = [
  { num: '20+', label: 'SEO支援実績' },
  { num: '325', label: '調査対象マーケター' },
  { num: '48', label: '実践レッスン' },
  { num: '10', label: '無料ツール' },
];

function UtilityCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} className="card p-6 flex flex-col gap-3 group">
      <h3 className="font-semibold text-[14px] leading-snug group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>{tool.title}</h3>
      <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--tm-text-secondary)' }}>{tool.description}</p>
      <div className="mt-auto pt-2 text-[12px] font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--tm-text-tertiary)' }}>
        <span className="group-hover:text-[var(--tm-cta)] transition-colors">使う</span>
        <span className="group-hover:text-[var(--tm-cta)] transition-colors">→</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--tm-bg)' }}>
      <SiteHeader />

      {/* ══════════════════════════════════════════════════
           HERO — cinematic, Apple-inspired, image below
           ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '112px', paddingBottom: '80px' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(13,148,136,0.08), transparent 70%)' }}
        />
        <div className="mx-auto max-w-5xl px-6 text-center relative">
          <span className="tm-eyebrow">AI × SEO × INHOUSE MARKETING</span>
          <h1 className="mt-7 text-[2.25rem] sm:text-[3.5rem] font-bold" style={{ letterSpacing: '-0.01em', lineHeight: 1.22, color: 'var(--tm-text)' }}>
            判断する、<br className="sm:hidden" />あなたのための<br />
            <span style={{ color: 'var(--tm-cta)' }}>AIマーケティング</span>。
          </h1>
          <p className="mt-8 text-[16px] sm:text-[18px] max-w-2xl mx-auto" style={{ color: 'var(--tm-text-body)', lineHeight: 1.7, letterSpacing: '-0.005em' }}>
            1-2人でもSEO×AIを回せる、実務派のための場所。<br />
            診断・講座・ツールすべて無料。会員登録も不要。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/tmi" className="btn-cta btn-pill">まず5分で診断する →</Link>
            <Link href="/learn" className="btn-ghost btn-pill">講座を見る</Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[12px] font-medium" style={{ color: 'var(--tm-text-secondary)', letterSpacing: '0.02em' }}>
            <span>✓ 登録不要</span>
            <span>✓ 完全無料</span>
            <span>✓ 48レッスン + 5診断 + 5ツール</span>
          </div>
          <div className="mt-14 flex justify-center">
            <Image
              src="/hero-main.png"
              alt="SEO × AIツールで課題を可視化するイラスト"
              width={480}
              height={360}
              className="w-[280px] sm:w-[420px] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <main>
        {/* ══════════════════════════════════════════════════
             STATS — minimal authority row
             ══════════════════════════════════════════════════ */}
        <section className="py-12 border-y" style={{ borderColor: 'var(--tm-border)', background: 'var(--tm-bg-tint)' }}>
          <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[2rem] sm:text-[2.5rem] font-bold tabular-nums" style={{ color: 'var(--tm-ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div className="mt-2 text-[10.5px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'var(--tm-text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             PERSONA — who it's for
             ══════════════════════════════════════════════════ */}
        <section className="section-pad">
          <div className="mx-auto max-w-5xl px-6 tm-scroll-fade">
            <div className="text-center mb-16">
              <span className="tm-eyebrow">WHO IT&apos;S FOR</span>
              <h2 className="mt-4 text-[1.875rem] sm:text-[2.5rem] font-bold" style={{ letterSpacing: '-0.005em', lineHeight: 1.35 }}>
                「1-2人で回す」マーケターの<br className="hidden sm:block" />ためのプラットフォーム
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {targetPersonas.map((p) => (
                <div key={p.label} className="text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl" style={{ background: 'var(--tm-cta-light)', color: 'var(--tm-primary)' }}>
                    <PersonaIcon type={p.icon} />
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>{p.label}</h3>
                  <p className="text-[13px]" style={{ color: 'var(--tm-text-secondary)', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             PAIN POINTS — cleaner, no orange
             ══════════════════════════════════════════════════ */}
        <section className="section-pad section-tint">
          <div className="mx-auto max-w-3xl px-6 tm-scroll-fade">
            <div className="text-center mb-14">
              <span className="tm-eyebrow">PROBLEM</span>
              <h2 className="mt-4 text-[1.875rem] sm:text-[2.25rem] font-bold" style={{ letterSpacing: '-0.005em', lineHeight: 1.35 }}>
                心当たりはありませんか？
              </h2>
            </div>
            <div className="space-y-2.5">
              {painPoints.map((point, i) => (
                <div key={point} className="flex items-start gap-5 bg-white rounded-xl px-6 py-5" style={{ boxShadow: 'var(--tm-ring)' }}>
                  <span className="text-[13px] font-bold tabular-nums shrink-0 pt-0.5" style={{ color: 'var(--tm-text-tertiary)', letterSpacing: '0.05em' }}>{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[15px]" style={{ color: 'var(--tm-text-body)', lineHeight: 1.65 }}>{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-[15px] font-semibold" style={{ color: 'var(--tm-ink)' }}>
                この課題を <span className="mark-green">3ステップ</span> で解決します
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             STEP 01 — DIAGNOSE
             ══════════════════════════════════════════════════ */}
        <section id="tools" className="section-pad">
          <div className="mx-auto max-w-6xl px-6 tm-scroll-fade">
            <div className="mb-14 max-w-3xl">
              <span className="tm-eyebrow">STEP 01 — DIAGNOSE</span>
              <h2 className="mt-4 text-[2rem] sm:text-[2.75rem] font-bold" style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                まず、<span style={{ color: 'var(--tm-cta)' }}>現在地</span>を知る。
              </h2>
              <p className="mt-6 text-[16px] sm:text-[17px] max-w-xl" style={{ color: 'var(--tm-text-body)', lineHeight: 1.7 }}>
                診断ツールで自社の強み・弱みを数値化。次にやるべき施策が明確になります。
              </p>
            </div>

            {/* Flagship: TMI */}
            <Link
              href="/tmi"
              className="card-elevated overflow-hidden flex flex-col sm:flex-row group mb-10 transition-transform hover:-translate-y-0.5"
              style={{ borderRadius: '20px' }}
            >
              <div
                className="sm:w-[44%] p-10 sm:p-12 flex flex-col justify-between text-white relative"
                style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)', minHeight: '260px' }}
              >
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.16em] text-white/60 uppercase mb-5">総合診断</span>
                  <h3 className="text-[1.75rem] sm:text-[2rem] font-bold text-white mb-4" style={{ letterSpacing: '-0.005em', lineHeight: 1.2 }}>TMI診断</h3>
                  <p className="text-[13.5px] text-white/70 leading-relaxed">25問で5軸のマーケ力を可視化。<br />まずはここから。</p>
                </div>
                <div className="mt-8 flex items-center gap-2.5 text-[11.5px] text-white/50 font-medium">
                  <span>所要 5分</span>
                  <span className="text-white/30">·</span>
                  <span>無料・匿名</span>
                </div>
              </div>
              <div className="sm:w-[56%] p-10 sm:p-12 flex flex-col justify-center bg-white">
                <p className="text-[14.5px] leading-[1.8] mb-6" style={{ color: 'var(--tm-text-body)' }}>
                  判断の自律性・KPIの接続性・コンテンツの複利性・AI活用の深度・戦略の不可逆性を診断。AI時代のマーケター必須の5軸で、あなたの位置を測ります。
                </p>
                <div className="text-[13.5px] font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all" style={{ color: 'var(--tm-cta)' }}>
                  診断を始める <span>→</span>
                </div>
              </div>
            </Link>

            {/* Individual diagnostics grid */}
            <div className="flex items-baseline justify-between mb-6">
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--tm-text-secondary)' }}>または個別に診断する</div>
              <span className="text-[11px]" style={{ color: 'var(--tm-text-tertiary)' }}>4種類</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {diagnosticTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="card overflow-hidden flex flex-col group">
                  <div className="aspect-square flex items-center justify-center p-6" style={{ background: 'var(--tm-bg-alt)' }}>
                    <Image src={tool.preview} alt={tool.title} width={200} height={200} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      {tool.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">{tool.badge}</span>}
                      <span className="text-[11px]" style={{ color: 'var(--tm-text-secondary)' }}>{tool.duration}</span>
                    </div>
                    <h3 className="font-semibold text-[13.5px] leading-tight group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.005em' }}>{tool.title}</h3>
                    <p className="text-[11.5px] leading-relaxed" style={{ color: 'var(--tm-text-secondary)' }}>{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Soft bridge CTA */}
            <div className="mt-8 card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[13.5px]" style={{ color: 'var(--tm-text-body)' }}>
                <strong style={{ color: 'var(--tm-text)' }}>診断で見つかった課題、どう解決する？</strong>
                <span className="hidden sm:inline ml-1" style={{ color: 'var(--tm-text-secondary)' }}>同じ悩みを持つ企業の改善事例をご紹介。</span>
              </p>
              <a href="https://thinkmove.jp/lp/co-creation/#case" target="_blank" rel="noopener" className="btn-cta btn-pill shrink-0 text-[13px] !py-2.5 !px-6">事例を見る →</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             STEP 02 — LEARN
             ══════════════════════════════════════════════════ */}
        <section className="section-pad section-tint">
          <div className="mx-auto max-w-6xl px-6 tm-scroll-fade">
            <div className="mb-14 max-w-3xl">
              <span className="tm-eyebrow">STEP 02 — LEARN</span>
              <h2 className="mt-4 text-[2rem] sm:text-[2.75rem] font-bold" style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                体系的に、<span style={{ color: 'var(--tm-cta)' }}>手を動かして</span>学ぶ。
              </h2>
              <p className="mt-6 text-[16px] sm:text-[17px] max-w-xl" style={{ color: 'var(--tm-text-body)', lineHeight: 1.7 }}>
                SEO×AIを全48レッスンで体系的に。ツールで手を動かしながら、判断の型が身につきます。
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {courses.map((c) => (
                <Link key={c.href} href={c.href} className="card overflow-hidden group" style={{ borderRadius: '16px' }}>
                  <div
                    className="relative"
                    style={{
                      aspectRatio: '1120 / 475',
                      background: c.img ? 'transparent' : 'linear-gradient(135deg, #fef3ee 0%, #fde8db 100%)',
                    }}
                  >
                    {c.img ? (
                      <Image src={c.img} alt={c.title} fill className="object-contain" sizes="(max-width: 640px) 100vw, 50vw" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl font-mono" style={{ color: '#c96442' }}>&gt;_</div>
                    )}
                  </div>
                  <div className="p-6">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${c.badgeClass}`}
                      style={c.badgeStyle}
                    >
                      {c.badge}
                    </span>
                    <h3 className="font-semibold text-[18px] mt-3 mb-1 group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.02em' }}>{c.title}</h3>
                    <p className="text-[11.5px] mb-2" style={{ color: 'var(--tm-text-secondary)' }}>{c.sub}</p>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--tm-text-body)' }}>{c.desc}</p>
                    <div className="mt-5 text-[13px] font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all" style={{ color: 'var(--tm-cta)' }}>
                      講座を見る <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             STEP 03 — APPLY (Tools)
             ══════════════════════════════════════════════════ */}
        <section className="section-pad">
          <div className="mx-auto max-w-6xl px-6 tm-scroll-fade">
            <div className="mb-14 max-w-3xl">
              <span className="tm-eyebrow">STEP 03 — APPLY</span>
              <h2 className="mt-4 text-[2rem] sm:text-[2.75rem] font-bold" style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                実務で、<span style={{ color: 'var(--tm-cta)' }}>今すぐ使う</span>。
              </h2>
              <p className="mt-6 text-[16px] sm:text-[17px] max-w-xl" style={{ color: 'var(--tm-text-body)', lineHeight: 1.7 }}>
                シミュレーション・プレビュー・AI生成。判断の速度を上げる5つのツール。
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {utilityTools.map((tool) => (<UtilityCard key={tool.href} tool={tool} />))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             UPDATES — minimal news strip
             ══════════════════════════════════════════════════ */}
        <section className="py-12 border-y" style={{ borderColor: 'var(--tm-border)' }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="tm-eyebrow">UPDATES</span>
              <Link href="/news" className="text-[12px] font-semibold" style={{ color: 'var(--tm-cta)' }}>すべて見る →</Link>
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--tm-border)' }}>
              {NEWS.slice(0, 5).map((entry) => {
                const style = getLabelStyle(entry.label);
                const inner = (
                  <div className="flex items-center gap-4 py-3.5 group">
                    <time className="text-[12px] tabular-nums shrink-0 w-20" style={{ color: 'var(--tm-text-secondary)' }}>{entry.date}</time>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${style.bg} ${style.text}`}>{entry.label}</span>
                    <span className={`text-[14px] ${entry.href ? 'group-hover:text-[var(--tm-cta)] transition-colors' : ''}`} style={{ color: 'var(--tm-text-body)' }}>{entry.title}</span>
                  </div>
                );
                return entry.href ? <Link key={entry.date + entry.title} href={entry.href}>{inner}</Link> : <div key={entry.date + entry.title}>{inner}</div>;
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             BLOG
             ══════════════════════════════════════════════════ */}
        <section className="section-pad">
          <div className="mx-auto max-w-6xl px-6 tm-scroll-fade">
            <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="tm-eyebrow">BLOG</span>
                <h2 className="mt-3 text-[1.75rem] sm:text-[2rem] font-bold" style={{ letterSpacing: '-0.005em', lineHeight: 1.3 }}>ThinkMoveブログ</h2>
                <p className="mt-2 text-[14px]" style={{ color: 'var(--tm-text-secondary)' }}>AI × SEOの最新情報・実践ノウハウ</p>
              </div>
              <a href="https://thinkmove.jp/blog/" target="_blank" rel="noopener noreferrer" className="text-[12.5px] font-semibold" style={{ color: 'var(--tm-cta)' }}>すべて見る →</a>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <a href="https://thinkmove.jp/blog/organic-cpa-agenda/" target="_blank" rel="noopener noreferrer" className="card p-6 flex flex-col gap-3 group">
                <h3 className="font-semibold text-[14.5px] group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em', lineHeight: 1.5 }}>AI検索時代のSEO評価は「広義のオーガニック」で見るべき</h3>
                <p className="text-[12.5px] leading-relaxed flex-1" style={{ color: 'var(--tm-text-secondary)' }}>AI Overviews時代のSEO成果指標をどう設計するか。</p>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--tm-cta)' }}>読む →</span>
              </a>
              <a href="https://thinkmove.jp/blog/seo-kpi/" target="_blank" rel="noopener noreferrer" className="card p-6 flex flex-col gap-3 group">
                <h3 className="font-semibold text-[14.5px] group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em', lineHeight: 1.5 }}>SEO KPIの正しい選び方｜フェーズ別に追うべき指標</h3>
                <p className="text-[12.5px] leading-relaxed flex-1" style={{ color: 'var(--tm-text-secondary)' }}>立ち上げ期・成長期・成熟期で追うKPIは変わる。</p>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--tm-cta)' }}>読む →</span>
              </a>
              <a href="https://thinkmove.jp/blog/" target="_blank" rel="noopener noreferrer" className="card p-6 flex flex-col gap-3 group items-start justify-center" style={{ background: 'var(--tm-bg-alt)' }}>
                <p className="font-semibold text-[14.5px]" style={{ color: 'var(--tm-ink)' }}>ブログ一覧を見る</p>
                <p className="text-[12.5px]" style={{ color: 'var(--tm-text-secondary)' }}>AI × SEOの実践知を随時更新</p>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--tm-cta)' }}>thinkmove.jp/blog →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             DOWNLOADS
             ══════════════════════════════════════════════════ */}
        <section className="section-pad section-tint">
          <div className="mx-auto max-w-6xl px-6 tm-scroll-fade">
            <div className="mb-12 text-center">
              <span className="tm-eyebrow">FREE DOWNLOADS</span>
              <h2 className="mt-4 text-[1.75rem] sm:text-[2rem] font-bold" style={{ letterSpacing: '-0.005em', lineHeight: 1.3 }}>無料ダウンロード資料</h2>
              <p className="mt-3 text-[14px]" style={{ color: 'var(--tm-text-secondary)' }}>メールアドレスだけで即ダウンロード</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <a href="https://share-na2.hsforms.com/1kXRPNXstSj6DEYK1tmTtqg40efxf" target="_blank" rel="noopener" className="card overflow-hidden flex flex-col group" style={{ borderRadius: '16px' }}>
                <img src="https://thinkmove.jp/wp-content/uploads/2026/03/banner_v3_1200x900-768x576.png" alt="AI×SEO実務ガイド" className="w-full h-auto" loading="lazy" />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 self-start">人気</span>
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--tm-primary)' }}>少人数でも回せるAI×SEO運用の型がわかる</p>
                  <h3 className="font-semibold text-[14px] group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>1-2人マーケターチームのためのAI×SEO実務ガイド</h3>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold mt-auto pt-2 group-hover:gap-2.5 transition-all" style={{ color: 'var(--tm-cta)' }}>
                    無料で手に入れる <span>→</span>
                  </div>
                </div>
              </a>
              <a href="https://share-na2.hsforms.com/16Jl_GUqUTCWzpV8Xc1AFGw40efxf" target="_blank" rel="noopener" className="card overflow-hidden flex flex-col group" style={{ borderRadius: '16px' }}>
                <img src="https://thinkmove.jp/wp-content/uploads/2026/03/seminar_banner_v2_1200x900-768x576.png" alt="2026年検索レポート" className="w-full h-auto" loading="lazy" />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 self-start">レポート</span>
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--tm-primary)' }}>自社SEOに影響する検索トレンドを把握</p>
                  <h3 className="font-semibold text-[14px] group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>2026年検索で何が起きているか</h3>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold mt-auto pt-2 group-hover:gap-2.5 transition-all" style={{ color: 'var(--tm-cta)' }}>
                    無料で手に入れる <span>→</span>
                  </div>
                </div>
              </a>
              <a href="https://share-na2.hsforms.com/18dPGMXqoSaC51_-C6iXuXg40efxf" target="_blank" rel="noopener" className="card overflow-hidden flex flex-col group" style={{ borderRadius: '16px' }}>
                <img src="https://thinkmove.jp/wp-content/uploads/2026/03/service_banner_v2_1200x900-768x576.png" alt="サービス資料" className="w-full h-auto" loading="lazy" />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 self-start">サービス資料</span>
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--tm-primary)' }}>共創支援の進め方と費用感がわかる</p>
                  <h3 className="font-semibold text-[14px] group-hover:text-[var(--tm-cta)] transition-colors" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>シンクムーブ サービス資料</h3>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold mt-auto pt-2 group-hover:gap-2.5 transition-all" style={{ color: 'var(--tm-cta)' }}>
                    無料で手に入れる <span>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             FAQ
             ══════════════════════════════════════════════════ */}
        <section className="section-pad">
          <div className="mx-auto max-w-3xl px-6 tm-scroll-fade">
            <div className="mb-12 text-center">
              <span className="tm-eyebrow">FAQ</span>
              <h2 className="mt-4 text-[1.75rem] sm:text-[2rem] font-bold" style={{ letterSpacing: '-0.005em', lineHeight: 1.3 }}>よくある質問</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: '本当にすべて無料ですか？', a: 'はい。ツール・講座・アンケートすべて無料でご利用いただけます。会員登録も不要です。' },
                { q: '会員登録やログインは必要ですか？', a: 'いいえ。すべてのコンテンツは登録なしで今すぐご利用いただけます。資料ダウンロードのみメールアドレスをお願いしています。' },
                { q: '1レッスンは何分で終わりますか？仕事の合間にできますか？', a: '1レッスンあたり5〜10分で読めます。全48レッスンでも各コース3〜4時間。昼休みや移動中にも進められます。' },
                { q: '法人で10人以上のチームで使えますか？', a: 'もちろんです。チーム全員でご利用ください。研修導入をご検討の場合はお気軽にご相談ください。' },
              ].map(({ q, a }) => (
                <details key={q} className="group rounded-xl overflow-hidden" style={{ boxShadow: 'var(--tm-ring)' }} open>
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-[14.5px] font-semibold bg-white hover:bg-gray-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden" style={{ color: 'var(--tm-text)', letterSpacing: '-0.01em' }}>
                    {q}
                    <svg className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </summary>
                  <div className="px-6 pb-5 text-[13.5px] leading-relaxed bg-white" style={{ color: 'var(--tm-text-secondary)' }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             SERVICE CTA
             ══════════════════════════════════════════════════ */}
        <section className="section-pad-sm">
          <div className="mx-auto max-w-5xl px-6">
            <div
              className="rounded-[20px] p-10 sm:p-14 text-white overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #0f2440 0%, #1e3a5f 100%)' }}
            >
              <div aria-hidden className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-[0.06] bg-white" />
              <div aria-hidden className="absolute -bottom-14 -left-14 w-36 h-36 rounded-full opacity-[0.04] bg-white" />
              <div className="flex flex-col sm:flex-row items-center gap-10 relative">
                <div className="shrink-0">
                  <Image src="/toyokura-profile.png" alt="豊藏翔太" width={96} height={96} className="rounded-full ring-2 ring-white/20 object-cover" />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#5eead4' }}>CO-CREATION SERVICE</span>
                  <h2 className="text-[1.5rem] sm:text-[2rem] font-bold mb-5 text-white" style={{ letterSpacing: '-0.005em', lineHeight: 1.4 }}>
                    ツールで分かった課題、<br className="hidden sm:inline" /><span style={{ color: '#5eead4' }}>一緒に解決</span>しませんか？
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-7 justify-center sm:justify-start">
                    <span className="text-[11.5px] font-medium text-white/85 bg-white/10 rounded-full px-3 py-1.5">週1回の定例</span>
                    <span className="text-[11.5px] font-medium text-white/85 bg-white/10 rounded-full px-3 py-1.5">判断の伴走</span>
                    <span className="text-[11.5px] font-medium text-white/85 bg-white/10 rounded-full px-3 py-1.5">月4社限定</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="https://thinkmove.jp/lp/co-creation/"
                      className="inline-flex items-center gap-2 text-[13.5px] font-semibold px-6 py-3 rounded-full bg-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                      style={{ color: '#0f2440' }}
                    >
                      サービスの詳細を見る <span>→</span>
                    </a>
                    <a
                      href="https://thinkmove.jp/lp/co-creation/#case"
                      className="text-[13px] font-medium text-white/80 hover:text-white transition-colors"
                    >
                      導入事例を見る →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             NEWSLETTER
             ══════════════════════════════════════════════════ */}
        <section className="pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="card p-10" style={{ borderRadius: '20px', boxShadow: 'var(--tm-shadow-md)' }}>
              <span className="tm-eyebrow">NEWSLETTER</span>
              <h2 className="mt-4 text-[1.375rem] font-bold mb-3" style={{ color: 'var(--tm-text)', letterSpacing: '-0.005em', lineHeight: 1.4 }}>新ツール・レッスンの公開時にお知らせ</h2>
              <p className="text-[13.5px] mb-7" style={{ color: 'var(--tm-text-secondary)', lineHeight: 1.75 }}>
                メールアドレスだけでOK。広告なし・売り込みなし。<br />
                更新があった時だけ届きます（月1-2回）。いつでも解除可能。
              </p>
              <a href="https://share-na2.hsforms.com/14SdUZhghR5CplNt-ZHK5Uw40efxf" target="_blank" rel="noopener" className="btn-primary btn-pill inline-flex text-[13px]">
                更新通知を受け取る
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
