import Link from 'next/link';
import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="mt-8" style={{ background: 'var(--tm-primary-dark)' }}>
      <div className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Company info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/toyokura-profile.png"
                  alt="豊藏翔太"
                  width={36}
                  height={36}
                  className="rounded-full object-cover ring-2 ring-white/10"
                />
                <span className="font-bold text-white/90">シンクムーブ株式会社</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                1-2人マーケティングチームのSEO × AI共創支援
              </p>
            </div>

            {/* Site links */}
            <div>
              <h4 className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-3">コンテンツ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-white/75 hover:text-white transition-colors">ツール一覧</Link></li>
                <li><Link href="/learn" className="text-white/75 hover:text-white transition-colors">SEO実践講座</Link></li>
                <li><Link href="/learn/ai" className="text-white/75 hover:text-white transition-colors">AI活用講座</Link></li>
                <li><Link href="/survey" className="text-white/75 hover:text-white transition-colors">アンケート</Link></li>
                <li><Link href="/all-lessons" className="text-white/75 hover:text-white transition-colors">全レッスン一覧</Link></li>
                <li><a href="https://thinkmove.jp/lp/co-creation/" className="text-white/75 hover:text-white transition-colors">サービス紹介</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-3">資料</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://thinkmove.jp/download/" className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    無料DL
                  </a>
                </li>
              </ul>
            </div>

            {/* External links */}
            <div>
              <h4 className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-3">リンク</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://thinkmove.jp" className="text-white/75 hover:text-white transition-colors">thinkmove.jp</a></li>
                <li><a href="https://thinkmove.jp/blog/" className="text-white/75 hover:text-white transition-colors">ブログ</a></li>
                <li><a href="https://thinkmove.jp/contact" className="text-white/75 hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 text-xs text-white/55 text-center">
            © {new Date().getFullYear()} シンクムーブ株式会社
          </div>
        </div>
      </div>
    </footer>
  );
}
