'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/70 backdrop-blur-sm border border-neutral-700/50 shadow-lg shadow-black/25 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Gambino Gold Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Gambino</span>{' '}
            <span className="text-yellow-500">Gold</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex lg:gap-10">
          <Link href="/utility-token-gaming" className="transition-colors hover:text-white">Platform</Link>
          <Link href="/dao-governance" className="transition-colors hover:text-white">DAO</Link>
          <Link href="/compliance" className="transition-colors hover:text-white">Compliance</Link>
          <Link href="/legal/whitepaper" className="transition-colors hover:text-white">Docs</Link>
          <Link href="/legal/terms" className="transition-colors hover:text-white">Legal</Link>
        </nav>

        {/* Desktop CTA (external stays <a>) */}
        <div className="hidden md:block">
          <a
            href="https://app.gambino.gold"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-yellow-500 bg-transparent px-6 py-2.5 text-sm font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/25"
          >
            <span className="relative z-10">Member Access</span>
            <div className="absolute inset-0 bg-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`h-6 w-6 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 space-y-1">
            <Link href="/utility-token-gaming" className="px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/30 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Platform Overview</Link>
            <Link href="/dao-governance" className="px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/30 rounded-lg" onClick={() => setMobileMenuOpen(false)}>DAO Governance</Link>
            <Link href="/compliance" className="px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/30 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Regulatory Compliance</Link>
            <Link href="/legal/whitepaper" className="px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/30 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
            <Link href="/legal/terms" className="px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-neutral-800/30 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Legal Documentation</Link>
          </nav>

          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-neutral-800">
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg border border-yellow-500 bg-transparent px-6 py-3 text-center text-sm font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              Member Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;