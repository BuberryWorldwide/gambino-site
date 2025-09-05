import Image from 'next/image'

export default function PlatformPage() {
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

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            Gambino Gold Platform • Infrastructure as a Service
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            Gambino Gold{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
            Infrastructure-as-a-service platform enabling venues to operate community-focused 
            cryptocurrency mining through Gambino Gold tokens. Building community wealth 
            with blockchain transparency.
          </p>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
            What the Platform <span className="text-yellow-500">Provides</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Comprehensive infrastructure for venues to participate in community-benefiting cryptocurrency operations.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gambino Gold Token System */}
          <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/30 to-neutral-950/80 backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 p-2">
                <Image
                  src="/gold-production.png"
                  alt="Gambino Gold"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Gambino Gold Token System</h3>
                <p className="text-yellow-300 text-sm font-semibold">Community Mining & Value Creation</p>
              </div>
            </div>
            
            <p className="text-neutral-400 mb-6">
              Our platform centers around Gambino Gold tokens, which serve as the foundation for 
              community mining operations. Tokens represent utility value, enable governance 
              participation, and facilitate transparent community wealth distribution.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Community mining participation tokens</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Governance and decision-making rights</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Local community benefit allocation</p>
              </div>
            </div>
          </div>

          {/* Mining Infrastructure */}
          <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-neutral-950/80 backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 p-2">
                <Image
                  src="/gold-utilities.png"
                  alt="Mining Infrastructure"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mining Infrastructure</h3>
                <p className="text-blue-300 text-sm font-semibold">Blockchain-Based Operations</p>
              </div>
            </div>
            
            <p className="text-neutral-400 mb-6">
              We provide the underlying infrastructure that enables venues to participate in 
              cryptocurrency mining operations. Our blockchain-based systems ensure transparency, 
              regulatory compliance, and automated community benefit distribution.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Blockchain transaction processing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Automated compliance monitoring</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-sm text-neutral-300">Community wealth tracking systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
            Platform <span className="text-green-400">Value</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            How our infrastructure creates value for communities, venues, and participants.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Community Wealth */}
          <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/10">
              <Image
                src="/gold-community.png"
                alt="Community Wealth"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Community Wealth Building</h3>
            <p className="text-neutral-400 mb-4">
              Mining operations generate value that stays in the local community through 
              automated allocation to projects, initiatives, and governance participants.
            </p>
            <p className="text-green-400 text-sm font-semibold">Transparent • Automated • Local</p>
          </div>

          {/* Token Value */}
          <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/10">
              <Image
                src="/gold-file.png"
                alt="Token Value"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Token Value Creation</h3>
            <p className="text-neutral-400 mb-4">
              Gambino Gold tokens gain utility value through community participation, 
              governance rights, and the growing network of venues and participants.
            </p>
            <p className="text-yellow-400 text-sm font-semibold">Utility-Driven • Network Effect • Sustainable</p>
          </div>

          {/* Venue Benefits */}
          <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-neutral-950/80 backdrop-blur-sm p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10">
              <Image
                src="/gold-location.png"
                alt="Venue Benefits"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Venue Integration</h3>
            <p className="text-neutral-400 mb-4">
              Venues become part of a transparent, community-benefiting network while 
              maintaining compliance and accessing new revenue opportunities.
            </p>
            <p className="text-purple-400 text-sm font-semibold">Compliant • Profitable • Community-Focused</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
            Platform <span className="text-red-400">Boundaries</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Clear service boundaries that define our infrastructure provider role.
          </p>
        </div>
        
        <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-neutral-950/80 backdrop-blur-sm p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-bold text-white mb-2">No Hardware Ownership</h3>
              <p className="text-sm text-neutral-400">We provide software infrastructure, not physical equipment</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-white mb-2">No Venue Operations</h3>
              <p className="text-sm text-neutral-400">We don&apos;t run or manage physical locations</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-white mb-2">No Revenue Collection</h3>
              <p className="text-sm text-neutral-400">We don&apos;t handle venue proceeds or customer payments</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-bold text-white mb-2">No Operational Control</h3>
              <p className="text-sm text-neutral-400">We don&apos;t control venue operations or outcomes</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
            <p className="text-neutral-400">
              <strong className="text-white">We Provide:</strong> Infrastructure-as-a-service for blockchain-based 
              community mining operations using Gambino Gold tokens.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN ECONOMICS OVERVIEW */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
            Gambino Gold <span className="text-yellow-500">Economics</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            How our token system creates sustainable value for community participants.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Token Utility */}
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6">Token Utility & Purpose</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Primary Function</span>
                <span className="text-yellow-400 font-semibold">Community Mining Access</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Governance Rights</span>
                <span className="text-yellow-400 font-semibold">DAO Participation</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span className="text-neutral-300">Community Benefits</span>
                <span className="text-yellow-400 font-semibold">Local Project Funding</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-neutral-300">Value Model</span>
                <span className="text-yellow-400 font-semibold">Utility-Based Growth</span>
              </div>
            </div>
          </div>

          {/* Value Creation */}
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6">Community Value Creation</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">🌱 Network Growth</h4>
                <p className="text-neutral-400 text-sm">More venues and participants increase token utility and community benefits</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">💰 Wealth Distribution</h4>
                <p className="text-neutral-400 text-sm">Mining operations generate ongoing funding for local community projects</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">🗳️ Governance Value</h4>
                <p className="text-neutral-400 text-sm">Token holders participate in decisions about fund allocation and network direction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-neutral-950/80 p-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Ready to Join the <span className="text-yellow-500">Gambino Gold</span> Network?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Experience community-focused cryptocurrency mining through our infrastructure platform. 
              Build local wealth while participating in transparent, blockchain-based operations.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="https://app.gambino.gold"
                className="rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 font-semibold text-black hover:brightness-110 transition-all duration-300"
              >
                Access Platform
              </a>
              <a 
                href="/dao-governance"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                Learn About Community Governance
              </a>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500">
              * Infrastructure platform for community-focused cryptocurrency mining operations
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}