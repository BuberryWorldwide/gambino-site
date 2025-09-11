'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-300 backdrop-blur-xl ${
      isDark 
        ? 'border-neutral-800 bg-black/80' 
        : 'border-neutral-200 bg-white/80'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-sm border shadow-lg overflow-hidden ${
            isDark 
              ? 'bg-neutral-900/70 border-neutral-700/50 shadow-black/25' 
              : 'bg-neutral-100/70 border-neutral-300/50 shadow-black/10'
          }`}>
            <Image
              src="/logo.png"
              alt="Gambino Gold Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>Gambino</span>{' '}
            <span className="text-yellow-500">Gold</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden gap-8 text-sm md:flex lg:gap-10 ${
          isDark ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          <Link href="/utility-token-gaming" className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Platform</Link>
          <Link href="/dao-governance" className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>DAO</Link>
          <Link href="/compliance" className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Compliance</Link>
          <Link href="/legal/whitepaper" className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Docs</Link>
          <Link href="/legal/terms" className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Legal</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* CTA Button */}
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
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark 
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
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
        <div className={`md:hidden border-t backdrop-blur-xl ${
          isDark 
            ? 'border-neutral-800 bg-black/95' 
            : 'border-neutral-200 bg-white/95'
        }`}>
          <nav className="flex flex-col px-6 py-4 space-y-1">
            <Link href="/utility-token-gaming" className={`px-3 py-3 text-sm transition-colors rounded-lg ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`} onClick={() => setMobileMenuOpen(false)}>Platform Overview</Link>
            <Link href="/dao-governance" className={`px-3 py-3 text-sm transition-colors rounded-lg ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`} onClick={() => setMobileMenuOpen(false)}>DAO Governance</Link>
            <Link href="/compliance" className={`px-3 py-3 text-sm transition-colors rounded-lg ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`} onClick={() => setMobileMenuOpen(false)}>Regulatory Compliance</Link>
            <Link href="/legal/whitepaper" className={`px-3 py-3 text-sm transition-colors rounded-lg ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neut ral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`} onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
            <Link href="/legal/terms" className={`px-3 py-3 text-sm transition-colors rounded-lg ${
              isDark 
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`} onClick={() => setMobileMenuOpen(false)}>Legal Documentation</Link>
          </nav>

          {/* Mobile Actions */}
          <div className="px-6 pb-4 space-y-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-3 w-full px-3 py-3 text-sm rounded-lg transition-colors ${
                isDark 
                  ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {isDark ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>
            
            {/* Mobile CTA */}
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