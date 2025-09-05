import Image from 'next/image'

export default function Home() {
  return (
     <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Standardized Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating particles - consistent with homepage */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-300/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-amber-400/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-yellow-500/50 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300/50 rounded-full animate-pulse delay-1500"></div>
        
        {/* Mid-section particles */}
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-yellow-500/45 rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-3/4 right-32 w-2 h-2 bg-amber-400/55 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-1/4 left-2/3 w-2.5 h-2.5 bg-yellow-300/50 rounded-full animate-pulse delay-3500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-2/3 right-16 w-3 h-3 bg-amber-500/45 rounded-full animate-pulse delay-2800"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-500/55 rounded-full animate-pulse delay-800"></div>

        {/* Floating sparkles */}
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-200/70 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-amber-200/70 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-16 right-1/2 w-1 h-1 bg-yellow-100/80 rounded-full animate-ping" style={{animationDuration: '3.5s', animationDelay: '2.1s'}}></div>
      </div>

      {/* Background geometric shapes - consistent with homepage */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-xl"></div>
        
        {/* Grid pattern - consistent opacity */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-amber-400/15 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-20 h-20 border-2 border-yellow-300/12 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* Moving lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
      </div>
      
      {/* HERO SECTION - FOCUSED & CLEAR */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Trust indicator */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-2 text-sm text-green-400">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Infrastructure Provider • Regulatory Compliant • Community Focused
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">
            <span className="text-white">Cryptocurrency Mining</span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>
          
          <p className="text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide compliance technology that transforms venue hardware into 
            transparent, community-benefiting cryptocurrency mining operations.
          </p>
          
          {/* Clear, focused CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-6">
            <a
              href="https://app.gambino.gold"
              className="rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 text-lg font-semibold text-black hover:brightness-110 transition-all duration-300 shadow-lg shadow-yellow-500/25"
            >
              Access Platform
            </a>
            <a
              href="/legal/whitepaper"
              className="rounded-lg border border-neutral-600 px-8 py-4 text-lg font-semibold hover:border-yellow-500/50 transition-all duration-300"
            >
              Read Documentation
            </a>
          </div>
          
          <p className="text-sm text-neutral-500">
            Infrastructure service provider • Not a machine operator or venue owner
          </p>
        </div>
      </section>

      {/* WHAT WE DO - SIMPLIFIED 3-CARD LAYOUT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What We <span className="text-yellow-500">Provide</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Three core infrastructure services for compliant cryptocurrency mining operations.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mining Technology */}
          <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10">
              <Image
                src="/gold-production.png"
                alt="Mining Technology"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Mining Technology</h3>
            <p className="text-neutral-400 mb-6">
              Proof-of-luck mining software that converts traditional hardware into 
              transparent cryptocurrency mining operations.
            </p>
            
            <a href="/utility-token-gaming" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
              Learn More →
            </a>
          </div>

          {/* Compliance Tools */}
          <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/10">
              <Image
                src="/gold-utilities.png"
                alt="Compliance Tools"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Compliance Systems</h3>
            <p className="text-neutral-400 mb-6">
              Automated regulatory reporting and transparent audit trails for 
              complete compliance cooperation.
            </p>
            
            <a href="/compliance" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
              Learn More →
            </a>
          </div>

          {/* Community Management */}
          <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/10">
              <Image
                src="/gold-file.png"
                alt="Community Systems"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Community Systems</h3>
            <p className="text-neutral-400 mb-6">
              Automated allocation of mining rewards to local projects and 
              community governance initiatives.
            </p>
            
            <a href="/dao-governance" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - SIMPLE 3-STEP PROCESS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It <span className="text-yellow-500">Works</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Simple process for venues to integrate our cryptocurrency mining infrastructure.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Integration</h3>
            <p className="text-neutral-400 text-lg">
              Venues install our mining infrastructure software on existing hardware systems.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 text-2xl font-bold text-white">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Operation</h3>
            <p className="text-neutral-400 text-lg">
              Community participants engage with proof-of-luck mining protocols creating transparent activity.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 text-2xl font-bold text-white">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Distribution</h3>
            <p className="text-neutral-400 text-lg">
              Mining rewards automatically flow to community projects and local initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - SIMPLE METRICS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for <span className="text-yellow-500">Trust & Transparency</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Our infrastructure operates with complete regulatory transparency and community focus.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-neutral-400">States with Regulatory Dialogue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-neutral-400">Transaction Transparency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.1M</div>
              <div className="text-neutral-400">Community Benefit Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">$0</div>
              <div className="text-neutral-400">Regulatory Violations</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - CLEAN & FOCUSED */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white lg:text-5xl mb-6">
          Ready to Get <span className="text-yellow-500">Started</span>?
        </h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Transform your venue into a community-benefiting cryptocurrency mining operation 
          with our compliant infrastructure technology.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a 
            href="https://app.gambino.gold"
            className="rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 text-lg font-semibold text-black hover:brightness-110 transition-all duration-300"
          >
            Access Platform
          </a>
          <a 
            href="/utility-token-gaming"
            className="rounded-lg border border-neutral-600 px-8 py-4 text-lg font-semibold hover:border-yellow-500/50 transition-all duration-300"
          >
            Learn About Our Services
          </a>
        </div>
        
        <p className="mt-6 text-sm text-neutral-500">
          Infrastructure service provider for venue-based cryptocurrency mining operations
        </p>
      </section>

    </main>
  )
}