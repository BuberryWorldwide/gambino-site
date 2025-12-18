'use client';

// src/app/components/Footer.js
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t ${isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-neutral-50'}`}>
      <div className={`mx-auto grid max-w-7xl gap-8 px-6 py-16 text-sm lg:grid-cols-5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-sm border shadow-lg overflow-hidden ${isDark ? 'bg-neutral-900/70 border-neutral-700/50 shadow-black/25' : 'bg-white border-neutral-300 shadow-neutral-200/50'}`}>
              <Image
                src="/logo.png"
                alt="Gambino Gold Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className={`font-bold text-lg ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`}>Gambino Gold</div>
          </div>
          <p className={`max-w-md leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            Building sustainable community wealth through compliant blockchain technology,
            transparent governance, and innovative utility token frameworks.
          </p>

          {/* Compliance badges - muted, professional */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${isDark ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-600'}`}>
              Software Infrastructure
            </div>
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${isDark ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-600'}`}>
              Utility Tokens
            </div>
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${isDark ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-600'}`}>
              18+ Only
            </div>
          </div>

        </div>

        {/* Platform */}
        <div>
          <div className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Platform</div>
          <ul className="space-y-3">
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/platform">How It Works</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/dao-governance">DAO Governance</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/leaderboard">Leaderboards</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/whitepaper#tokenomics">Tokenomics</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/whitepaper#roadmap">Roadmap</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Resources</div>
          <ul className="space-y-3">
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/whitepaper">Whitepaper</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/developers">Developer Docs</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/partners">Partner Program</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/support">Support Center</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/community">Community</a></li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <div className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Legal</div>
          <ul className="space-y-3">
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/terms">Terms of Service</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/privacy">Privacy Policy</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/compliance">Regulatory Compliance</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/aml">AML Policy</a></li>
            <li><a className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`} href="/legal/security">Security</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t px-6 py-6 ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
        <div className={`mx-auto max-w-7xl flex flex-col gap-4 text-xs lg:flex-row lg:items-center lg:justify-between ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <div>© {new Date().getFullYear()} Gambino Gold, Inc. All rights reserved.</div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
                Regulated Entity
              </span>
              <span className="flex items-center gap-1">
                <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
                Utility Tokens Only
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`mx-auto max-w-7xl mt-4 pt-4 border-t text-center ${isDark ? 'border-neutral-900' : 'border-neutral-200'}`}>
          <p className={`text-xs ${isDark ? 'text-neutral-600' : 'text-neutral-500'}`}>
            * <strong>18+ only at licensed partner venues.</strong> Gambino Gold provides software infrastructure only—all money transmission handled by licensed financial entities. Utility tokens enable governance and network access—not investment products. Not gambling or securities. See <a href="/legal/terms" className={`underline ${isDark ? 'hover:text-neutral-400' : 'hover:text-neutral-700'}`}>Terms</a> and <a href="/compliance" className={`underline ${isDark ? 'hover:text-neutral-400' : 'hover:text-neutral-700'}`}>Compliance</a>.
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-neutral-600' : 'text-neutral-500'}`}>
            Gambino Gold does not control or operate secondary token markets.
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-neutral-600' : 'text-neutral-500'}`}>
            Account holders are network participants. Participation services provided by licensed operators and venues.
          </p>
        </div>
      </div>
    </footer>
  );
}