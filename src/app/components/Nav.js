// src/app/components/Nav.js
import Image from 'next/image'

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo area with actual logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/70 backdrop-blur-sm border border-neutral-700/50 shadow-lg shadow-black/25 overflow-hidden">

            {/* Replace 'logo.png' with your actual logo file name */}
            <Image
              src="/logo.png"
              alt="Gambino Gold Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <a href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Gambino</span> <span className="text-yellow-500">Gold</span>
          </a>
        </div>
        
        {/* Navigation Menu */}
        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex lg:gap-10">
          <a href="/utility-token-gaming" className="transition-colors hover:text-white">Platform</a>
          <a href="/dao-governance" className="transition-colors hover:text-white">DAO</a>
          <a href="/compliance" className="transition-colors hover:text-white">Compliance</a>
          <a href="/leaderboard" className="transition-colors hover:text-white">Leaderboard</a>
          <a href="/legal/whitepaper" className="transition-colors hover:text-white">Docs</a>
          <a href="/legal/terms" className="transition-colors hover:text-white">Legal</a>
        </nav>
        
        {/* CTA Button */}
        <a
          href="https://app.gambino.gold"
          className="group relative overflow-hidden rounded-lg border border-yellow-500 bg-transparent px-6 py-2.5 text-sm font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/25"
        >
          <span className="relative z-10">Member Access</span>
          <div className="absolute inset-0 bg-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </a>
      </div>
      
      {/* Mobile menu - can be expanded later */}
      <div className="border-t border-neutral-800 bg-black/90 px-6 py-4 md:hidden">
        <nav className="flex flex-col gap-4 text-sm text-neutral-300">
          <a href="/utility-token-gaming" className="transition-colors hover:text-white">Platform Overview</a>
          <a href="/dao-governance" className="transition-colors hover:text-white">DAO Governance</a>
          <a href="#compliance" className="transition-colors hover:text-white">Regulatory Compliance</a>
          <a href="/legal/terms" className="transition-colors hover:text-white">Legal Documentation</a>
        </nav>
      </div>
    </header>
  );
}