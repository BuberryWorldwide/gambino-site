import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Background effects similar to homepage */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/8 to-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/10 to-yellow-500/6 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-amber-400/35 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-300/45 rounded-full animate-pulse delay-2000"></div>
      </div>

      <Nav />
      
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            Mining Luck Through Play
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            Utility Token{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Gaming
            </span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
            Gambino reimagines gaming as <strong>crypto mining with purpose</strong>. Cash converts into stable credits for gameplay, 
            while jackpots release scarce GAMBINO tokens. Every play burns supply, strengthens scarcity, and drives long-term value.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            How It <span className="text-yellow-500">Works</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Entertainment that builds wealth — for players, communities, and the network itself.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="relative">
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8 text-center">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 border-2 border-blue-500/20">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cash to Credits</h3>
              <p className="text-neutral-400">
                Deposit cash to receive <strong>USD-pegged credits</strong>. These stable credits ensure consistent gameplay 
                without the volatility of crypto markets.
              </p>
            </div>
            {/* Connecting arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg className="w-8 h-8 text-yellow-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8 text-center">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 border-2 border-yellow-500/20">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Play & Mine</h3>
              <p className="text-neutral-400">
                Each play burns tokens from the network supply. <strong>Lucky wins</strong> release scarce GAMBINO tokens, 
                creating value through scarcity and entertainment.
              </p>
            </div>
            {/* Connecting arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg className="w-8 h-8 text-yellow-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8 text-center">
            <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border-2 border-green-500/20">
              <span className="text-2xl font-bold text-green-400">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Wealth</h3>
            <p className="text-neutral-400">
              Network effects drive token value while <strong>funding local projects</strong>. Every transaction strengthens 
              both individual holdings and community prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="relative z-10 border-t border-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Not Gambling. <span className="text-yellow-500">Not Speculation.</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
              Gambino operates under a <strong>utility token framework</strong>, designed for entertainment 
              and community building, not financial speculation.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-utilities.png"
                  alt="Utility Tokens"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Utility Tokens</h3>
              <p className="text-sm text-neutral-400">Provide network access, not investment returns</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-control.png"
                  alt="Stable Credits"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Stable Credits</h3>
              <p className="text-sm text-neutral-400">USD-pegged for consistent gameplay experience</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-file.png"
                  alt="Regulatory Compliant"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Regulatory Compliant</h3>
              <p className="text-sm text-neutral-400">Built within legal frameworks from day one</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-community.png"
                  alt="Community Focus"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Community Focus</h3>
              <p className="text-sm text-neutral-400">Revenue flows to local good causes and projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOKENOMICS BREAKDOWN */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Token <span className="text-yellow-500">Economics</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            A deflationary model where every play strengthens scarcity and network value.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6">Supply Mechanics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Token Burns per Play</span>
                <span className="text-yellow-400 font-semibold">Variable</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Jackpot Token Release</span>
                <span className="text-yellow-400 font-semibold">Scarce</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Community Fund</span>
                <span className="text-yellow-400 font-semibold">15%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-neutral-300">Network Effect</span>
                <span className="text-green-400 font-semibold">Deflationary</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6">Value Creation</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">🔥 Token Burns</h4>
                <p className="text-neutral-400 text-sm">Every play burns tokens from circulation, creating scarcity</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">💰 Network Growth</h4>
                <p className="text-neutral-400 text-sm">More players = more burns = increased token value</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">🏘️ Community Impact</h4>
                <p className="text-neutral-400 text-sm">Local funding creates real-world utility and adoption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-neutral-950 p-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Ready to Start <span className="text-yellow-500">Mining Luck</span>?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join the utility token gaming revolution. Entertainment that builds wealth, 
              strengthens communities, and rewards the lucky.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="https://app.gambino.gold"
                className="rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black hover:brightness-110 transition-all duration-300"
              >
                Launch Platform
              </a>
              <a 
                href="/dao-governance"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                Learn About DAO
              </a>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500">
              * Utility token network for entertainment. Not gambling or financial advice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}