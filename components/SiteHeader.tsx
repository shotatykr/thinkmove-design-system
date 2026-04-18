'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SiteHeaderProps {
  variant?: 'default' | 'inner';
  backHref?: string;
  backLabel?: string;
}

const navLinks = [
  { label: '学ぶ', href: '/learn', internal: true },
  { label: '全レッスン', href: '/all-lessons', internal: true },
  { label: 'ツール', href: '/#tools', internal: true },
  { label: 'TMI診断', href: '/tmi', internal: true },
  { label: 'サービス', href: 'https://thinkmove.jp/lp/co-creation/', internal: false },
];

export default function SiteHeader({
  variant = 'default',
  backHref = '/',
  backLabel = '← ツール一覧',
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 px-5 py-3.5 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.78)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: scrolled ? 'saturate(180%) blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(24px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(10, 22, 40, 0.06)' : 'none',
      }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          {variant === 'inner' && (
            <>
              <Link
                href={backHref}
                className="text-gray-500 hover:text-[var(--tm-ink)] hover:bg-gray-50 rounded-md px-2.5 py-1.5 text-sm transition-all"
              >
                {backLabel}
              </Link>
              <span className="text-gray-200">|</span>
            </>
          )}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="ThinkMove"
              width={140}
              height={28}
              className="h-6 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const cls = "text-[13px] font-medium text-gray-600 hover:text-[var(--tm-ink)] rounded-md px-3 py-2 transition-colors";
            return link.internal ? (
              <Link key={link.href} href={link.href} className={cls}>{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} className={cls}>{link.label}</a>
            );
          })}
          <a
            href="/tmi"
            className="ml-4 text-[13px] font-semibold px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ background: 'var(--tm-cta)', color: 'white' }}
          >
            無料で始める
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          {menuOpen ? (
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-2 border-t border-gray-100">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const cls = "text-sm text-gray-600 hover:text-[var(--tm-text)] hover:bg-gray-100 rounded-lg px-3 py-2.5 transition-all";
              return link.internal ? (
                <Link key={link.href} href={link.href} className={cls} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} className={cls} onClick={() => setMenuOpen(false)}>{link.label}</a>
              );
            })}
            <a
              href="/tmi"
              className="mt-2 text-sm font-semibold text-center px-4 py-2.5 rounded-lg transition-all"
              style={{ background: 'var(--tm-cta)', color: 'white' }}
            >
              無料で始める
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
