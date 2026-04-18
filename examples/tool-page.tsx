'use client';

import { useState, useMemo } from 'react';
import { getCtr, CTR_BY_POSITION } from '@/lib/ctr-data';
import AuthorSection from '@/components/AuthorSection';
import RelatedArticles from '@/components/RelatedArticles';
import ExpertInsight from '@/components/ExpertInsight';
import RelatedLessons from '@/components/RelatedLessons';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function CtrSimulator() {
  const [currentPosition, setCurrentPosition] = useState(10);
  const [targetPosition, setTargetPosition] = useState(3);
  const [searchVolume, setSearchVolume] = useState(5000);

  const result = useMemo(() => {
    const currentCtr = getCtr(currentPosition);
    const targetCtr = getCtr(targetPosition);
    const currentClicks = Math.round((searchVolume * currentCtr) / 100);
    const targetClicks = Math.round((searchVolume * targetCtr) / 100);
    const diffMonthly = targetClicks - currentClicks;
    const diffYearly = diffMonthly * 12;
    return { currentCtr, targetCtr, currentClicks, targetClicks, diffMonthly, diffYearly };
  }, [currentPosition, targetPosition, searchVolume]);

  function handleNumberInput(
    value: string,
    setter: (v: number) => void,
    min: number,
    max: number,
  ) {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setter(Math.max(min, Math.min(max, num)));
    }
  }

  const shareText = encodeURIComponent(
    `検索順位を${currentPosition}位→${targetPosition}位に改善すると、月間+${result.diffMonthly.toLocaleString()}クリックの改善余地！\n\n▶ https://tools.thinkmove.jp/ctr-simulator\n\n#SEOクリック数シミュレーター #ThinkMove`,
  );

  return (
    <div className="min-h-screen" style={{ background: 'var(--tm-bg)', color: 'var(--tm-text)' }}>
      <SiteHeader variant="inner" backHref="/#tools" backLabel="← ツール一覧" />

      <div style={{ background: 'linear-gradient(180deg, var(--tm-primary-50) 0%, var(--tm-bg) 100%)' }}>
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center">
          <span className="tm-eyebrow">SEO TOOL</span>
          <h1 className="mt-4 text-[1.75rem] sm:text-[2.25rem] font-bold mb-3" style={{ letterSpacing: '-0.005em', lineHeight: 1.3 }}>SEOクリック数シミュレーター</h1>
          <p className="text-[14px] sm:text-[15px] max-w-2xl mx-auto" style={{ color: 'var(--tm-text-secondary)', lineHeight: 1.75 }}>
            検索順位と月間検索ボリュームから、推定クリック数をリアルタイムで算出します。
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8">

        {/* Input Section */}
        <div className="card p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold mb-6">条件を設定</h2>

          <div className="space-y-6">
            {/* Current Position */}
            <div>
              <label className="tm-label">
                現在の検索順位
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={currentPosition}
                  onChange={(e) => setCurrentPosition(Number(e.target.value))}
                  className="flex-1 h-2 rounded-lg cursor-pointer"
                  style={{ accentColor: 'var(--tm-primary)' }}
                />
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={currentPosition}
                    onChange={(e) => handleNumberInput(e.target.value, setCurrentPosition, 1, 50)}
                    className="tm-input w-16 text-center px-2 py-1 text-sm"
                  />
                  <span className="text-sm text-gray-500">位</span>
                </div>
              </div>
            </div>

            {/* Target Position */}
            <div>
              <label className="tm-label">
                目標の検索順位
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={targetPosition}
                  onChange={(e) => setTargetPosition(Number(e.target.value))}
                  className="flex-1 h-2 rounded-lg cursor-pointer"
                  style={{ accentColor: 'var(--tm-primary)' }}
                />
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={targetPosition}
                    onChange={(e) => handleNumberInput(e.target.value, setTargetPosition, 1, 50)}
                    className="tm-input w-16 text-center px-2 py-1 text-sm"
                  />
                  <span className="text-sm text-gray-500">位</span>
                </div>
              </div>
            </div>

            {/* Search Volume */}
            <div>
              <label className="tm-label">
                月間検索ボリューム
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={100}
                  max={100000}
                  step={100}
                  value={searchVolume}
                  onChange={(e) => setSearchVolume(Number(e.target.value))}
                  className="flex-1 h-2 rounded-lg cursor-pointer"
                  style={{ accentColor: 'var(--tm-primary)' }}
                />
                <input
                  type="number"
                  min={100}
                  max={100000}
                  step={100}
                  value={searchVolume}
                  onChange={(e) =>
                    handleNumberInput(e.target.value, setSearchVolume, 100, 100000)
                  }
                  className="tm-input w-24 text-center px-2 py-1 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Current */}
          <div className="card p-6">
            <p className="text-sm font-semibold text-gray-500 mb-1">現在の推定</p>
            <p className="text-3xl font-bold" style={{ color: 'var(--tm-text)' }}>
              月間 {result.currentClicks.toLocaleString()}{' '}
              <span className="text-lg font-normal">クリック</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {currentPosition}位 / CTR: {result.currentCtr.toFixed(2)}%
            </p>
          </div>

          {/* Target */}
          <div className="card p-6">
            <p className="text-sm font-semibold text-gray-500 mb-1">目標達成時</p>
            <p className="text-3xl font-bold" style={{ color: 'var(--tm-cta)' }}>
              月間 {result.targetClicks.toLocaleString()}{' '}
              <span className="text-lg font-normal">クリック</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {targetPosition}位 / CTR: {result.targetCtr.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Diff Card */}
        <div
          className="card p-6 sm:p-8 mb-8 text-center"
          style={{ border: '2px solid var(--tm-cta)' }}
        >
          <p className="text-sm font-semibold text-gray-500 mb-2">改善による増加見込み</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--tm-cta)' }}>
                +{result.diffMonthly.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">月間クリック</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--tm-primary)' }}>
                +{result.diffYearly.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">年間クリック</p>
            </div>
          </div>
        </div>

        {/* CTR Table */}
        <div className="card p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">順位別CTR一覧（1位〜20位）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 font-semibold text-gray-600">順位</th>
                  <th className="text-right py-2 px-3 font-semibold text-gray-600">CTR</th>
                  <th className="text-right py-2 px-3 font-semibold text-gray-600">
                    推定月間クリック
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(CTR_BY_POSITION).map(([pos, ctr]) => {
                  const position = Number(pos);
                  const clicks = Math.round((searchVolume * ctr) / 100);
                  const isCurrent = position === currentPosition;
                  const isTarget = position === targetPosition;

                  let rowStyle: React.CSSProperties = {};
                  if (isCurrent && isTarget) {
                    rowStyle = {
                      background:
                        'linear-gradient(90deg, rgba(237,137,54,0.12) 0%, rgba(0,163,129,0.12) 100%)',
                    };
                  } else if (isCurrent) {
                    rowStyle = { background: 'rgba(237,137,54,0.10)' };
                  } else if (isTarget) {
                    rowStyle = { background: 'rgba(0,163,129,0.10)' };
                  }

                  return (
                    <tr
                      key={position}
                      className="border-b border-gray-100"
                      style={rowStyle}
                    >
                      <td className="py-2 px-3 font-medium">
                        {position}位
                        {isCurrent && (
                          <span
                            className="ml-2 text-xs font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(237,137,54,0.2)', color: 'var(--tm-accent)' }}
                          >
                            現在
                          </span>
                        )}
                        {isTarget && (
                          <span
                            className="ml-2 text-xs font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(0,163,129,0.2)', color: 'var(--tm-cta)' }}
                          >
                            目標
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3 text-right">{ctr.toFixed(2)}%</td>
                      <td className="py-2 px-3 text-right font-medium">
                        {clicks.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Share & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-colors"
            style={{ background: '#1DA1F2' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Xでシェアする
          </a>
          <a
            href="https://thinkmove.jp/lp/co-creation/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-colors"
            style={{ background: 'var(--tm-cta)' }}
          >
            SEO戦略の改善を相談する
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Data Source Section */}
        <div className="card p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold mb-4">CTRデータの出典と計算ロジック</h2>
          <dl className="space-y-3 text-sm text-gray-700">
            <div>
              <dt className="font-semibold">データソース（2025年後半の複数調査を統合）</dt>
              <dd className="mt-0.5 text-gray-600 space-y-1">
                <p>本ツールでは、AI Overviews普及後の最新CTRデータを採用しています。以下の主要調査から中央値を算出しています。</p>
                <ul className="list-disc pl-5 space-y-0.5 text-gray-500">
                  <li>GrowthSRC 2025 — 200,000以上のキーワードを分析（2024-2025比較）</li>
                  <li>First Page Sage — 2025年12月更新</li>
                  <li>seoClarity 2025 — 1,200万キーワード・7.5億インプレッション</li>
                  <li>Advanced Web Ranking Q3 2025</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">AI Overviewsの影響</dt>
              <dd className="mt-0.5 text-gray-600">
                2025年時点で、AI Overviewsは米国デスクトップクエリの30%以上に表示されています（Seer Interactive調査）。AI Overviewsが表示されるクエリでは、オーガニックCTRが平均61%低下するという報告があります。本ツールのCTRはAIOあり/なしを含む全体平均値です。
              </dd>
            </div>
            <div>
              <dt className="font-semibold">2023年データとの比較</dt>
              <dd className="mt-0.5 text-gray-600">
                1位のCTRは28%（2023年）→ 19%（2025年）と32%低下（GrowthSRC調査）。2位は20.8% → 12.6%と39%低下しています。一方、Advanced Web Ranking Q3 2025のレポートでは、6-10位のCTRが前年同期比で増加傾向にあることが示されており、上位のクリック減少分が中位に分散していることが示唆されています。
              </dd>
            </div>
            <div>
              <dt className="font-semibold">計算式</dt>
              <dd className="mt-0.5 text-gray-600">
                月間クリック数 = 月間検索ボリューム × CTR(順位) / 100
              </dd>
            </div>
            <div>
              <dt className="font-semibold">注意事項</dt>
              <dd className="mt-0.5 text-gray-600">
                CTRはキーワードの種類（ブランド/一般）・業界・AI Overviewsの表示有無・SERP機能（強調スニペット、ナレッジパネル等）により大幅に変動します。あくまで目安値としてご活用ください。
              </dd>
            </div>
          </dl>
        </div>

        {/* Trend Analysis Section */}
        <div className="card p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold mb-4">AI Overviews時代の順位別CTR傾向と対策</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold mb-1">1-3位: 依然として最重要だが、CTRは大幅低下</h3>
              <p className="text-gray-600">
                1-3位で全クリックの約41%を獲得。しかしAI Overviews登場前と比較して、1位のCTRは32%低下（28% → 19%）しています。AI Overviewsに引用されるコンテンツ（AIO被引用）は+35%のCTRボーナスがあるため、上位表示に加えてLLMO対策が重要になっています。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">4-10位: クリック分散化の恩恵あり</h3>
              <p className="text-gray-600">
                AI Overviewsの影響で上位のCTRが低下した一方、Advanced Web Ranking Q3 2025のレポートでは6-10位のCTRに増加傾向が確認されています。ユーザーがAI回答で概要を理解した上で、より詳細な情報を求めて下位の結果もクリックする傾向が強まっていると考えられます。この順位帯ではタイトルタグの差別化がより重要です。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">11-20位: 1ページ目への押し上げが最優先</h3>
              <p className="text-gray-600">
                CTR 1%以下。2ページ目からのCTR低下は依然として劇的です。コンテンツの質的改善・内部リンク強化・E-E-A-Tシグナルの向上により、1ページ目への順位押し上げが最優先の施策となります。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">ロングテールクエリ: CTR維持の鍵</h3>
              <p className="text-gray-600">
                4語以上のロングテールクエリは、AI Overviews後もCTRが安定しています（Advanced Web Ranking Q3 2025）。検索意図が明確なクエリでは、従来通り上位表示の価値が高い状態が続いています。
              </p>
            </div>
          </div>
        </div>

        <ExpertInsight
          intro="CTRデータの読み方と活用法について、SEOコンサルティングの現場で得た実務的な視点を共有します。"
          insights={[
            {
              label: 'CTRは「フェーズ」で見るべき指標が変わる',
              text: 'SEO KPIは4フェーズで管理すべきです。立ち上げ期（0-6ヶ月）はインデックス率と順位分布、拡大期（6-12ヶ月）は非ブランドKW流入数、改善期（12ヶ月〜）にようやくCTR改善率が主要KPIになります。CTRシミュレーターは改善期以降のフェーズで最も威力を発揮します。',
              source: { title: 'SEO KPIの正しい選び方｜フェーズ別に追うべき指標', url: 'https://thinkmove.jp/blog/seo-kpi/' },
            },
            {
              label: '325名調査：AI Overviewsの影響はKnowクエリに集中',
              text: 'マーケター325名を対象としたシンクムーブの独自調査では、AI Overviewsの影響は情報収集型（Know）クエリに顕著で、約8割が「調べものが済むことがある」と回答。一方、購買意図（Buy）クエリへの影響は限定的です。CTRシミュレーションの際は、対象キーワードの検索意図を考慮することが重要です。',
              source: { title: 'マーケター325名に聞いたAI Overviewsの影響（Commerce Pick）', url: 'https://www.commercepick.com/archives/67423' },
            },
            {
              label: '検索1位のCTRは39.8%、1位→2位で+74.5%の差',
              text: 'First Page Sageのデータでは、オーガニック検索1位のCTRは39.8%。1位と2位の間には74.5%ものクリック差があります。また、1位は10位と比較して10倍のクリックを獲得します。順位改善のインパクトは上位ほど劇的に大きくなることを、このシミュレーターで体感してください。',
              source: { title: '2026 SEO Statistics（AIOSEO）', url: 'https://aioseo.com/seo-statistics/' },
            },
            {
              label: '60%の検索がゼロクリックで終了する時代',
              text: 'AI OverviewsやFeatured Snippetsの普及により、全検索の60%がクリックなしで終了しています。つまり、CTRシミュレーターで算出した数値は「クリックが発生するクエリ」における推定値です。情報収集型クエリほどゼロクリック率が高いため、トランザクショナルなキーワードでの順位改善がROI最大化の鍵になります。',
              source: { title: '2026 SEO Statistics（AIOSEO）', url: 'https://aioseo.com/seo-statistics/' },
            },
          ]}
        />

        <RelatedArticles articles={[
          {
            title: 'SEO KPIの正しい選び方｜フェーズ別に追うべき指標と、9割が間違える落とし穴',
            url: 'https://thinkmove.jp/blog/seo-kpi/',
            description: 'CTRがどのフェーズで重要なKPIになるかを解説。クリック数シミュレーションの結果を戦略に活かす考え方。',
          },
          {
            title: 'AI検索時代のSEO評価は「広義のオーガニック」でまとめて見るべきだと感じた理由',
            url: 'https://thinkmove.jp/blog/organic-cpa-agenda/',
            description: '検索順位とクリック数の関係を、AI検索という新しい文脈で再考察。CTRデータの読み方が変わる。',
          },
        ]} />

        {/* Author Section */}
        <AuthorSection />

        {/* FAQ */}
        <div className="card p-6 sm:p-8 mb-6 mt-6">
          <h2 className="text-lg font-bold mb-4">よくある質問</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                このツールのCTRデータは正確ですか？
              </h3>
              <p className="text-gray-600">
                GrowthSRC・First Page Sage・seoClarity・Advanced Web Rankingなど、2025年後半の複数の大規模調査データを統合した中央値を採用しています。AI Overviewsの表示有無・キーワード種類（ブランド/一般）・SERP機能の有無により実際のCTRは変動するため、参考値としてご活用ください。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                AI Overviewsが表示されるとCTRはどう変わりますか？
              </h3>
              <p className="text-gray-600">
                Seer Interactiveの2025年調査によると、AI Overviewsが表示されるクエリではオーガニックCTRが平均61%低下します。ただし、AI Overviewsに引用されたサイトは+35%のCTRボーナスを得るため、LLMO対策がますます重要になっています。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                検索ボリュームが分からない場合は？
              </h3>
              <p className="text-gray-600">
                Google キーワードプランナー（無料）やAhrefs、Ubersuggestなどのツールで確認できます。Google広告アカウントがあればキーワードプランナーが最も手軽です。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                このシミュレーションをクライアント提案に使っても良いですか？
              </h3>
              <p className="text-gray-600">
                はい。出典（GrowthSRC 2025 / First Page Sage 2025 / seoClarity 2025等）を明記の上、参考値としてご活用ください。順位改善によるインパクトを数値で示す際の説得材料としてお使いいただけます。
              </p>
            </div>
          </div>
        </div>
      </main>

      <RelatedLessons lessons={[
        { href: '/learn/07-ctr-analytics', number: 7, title: 'CTRで成果を測る — 上司を納得させるレポート術', description: 'CTRの読み方とシミュレーションで成果を数値で語る' },
        { href: '/learn/ai/03-ai-input-design', number: 3, title: 'AIに読ませるインプット設計', description: 'CTRデータをAIに分析させる方法を学ぶ' },
      ]} />

      <SiteFooter />
    </div>
  );
}
