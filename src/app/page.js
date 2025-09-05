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
      
 {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Welcoming badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-4 py-2 text-sm text-yellow-400">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            Community-Powered Mining Network
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">
            <span className="text-white">Mining Infrastructure</span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              That Works for Everyone
            </span>
          </h1>
          
          <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Gambino Gold connects venues with mining infrastructure and token holders with mining access. 
            Building sustainable community wealth through transparent, distributed cryptocurrency operations.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/utility-token-gaming"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              <span className="relative z-10">Learn How It Works</span>
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-yellow-500/50 bg-transparent px-8 py-4 text-lg font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10 hover:border-yellow-500"
            >
              Access Network
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - DUAL AUDIENCE */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Two Ways to <span className="text-yellow-500">Participate</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Whether you&apos;re a venue looking to host or a token holder seeking access, 
            our network creates value for your community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Venues */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 hover:border-yellow-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Venues</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Transform your space into a revenue-generating mining operation. We provide the technology, 
              compliance framework, and ongoing support to help your business participate in the crypto economy.
            </p>
            <ul className="space-y-3 text-neutral-400 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete infrastructure setup and management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Regulatory compliance and transparent operations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Community benefit programs and local impact</span>
              </li>
            </ul>
            <a 
              href="/compliance" 
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
            >
              Learn About Hosting
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* For Token Holders */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 hover:border-yellow-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Token Holders</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Use your Gambino Gold utility tokens to access distributed mining capacity across our network. 
              Participate in community-focused mining operations with full transparency.
            </p>
            <ul className="space-y-3 text-neutral-400 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Access to distributed mining network capacity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Transparent operations and real-time reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Community governance and decision making</span>
              </li>
            </ul>
            <a 
              href="/dao-governance" 
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
            >
              Join the Network
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST & VALUES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Built on <span className="text-yellow-500">Trust & Transparency</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Regulatory Compliant</h3>
              <p className="text-neutral-400 text-sm">
                Full compliance framework ensuring legitimate, transparent operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Focused</h3>
              <p className="text-neutral-400 text-sm">
                Every operation designed to benefit local communities and participants
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Built with Care</h3>
              <p className="text-neutral-400 text-sm">
                Thoughtfully designed infrastructure that prioritizes simplicity and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Network?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Whether you&apos;re looking to license our infrastructure technology or access the network with utility tokens, 
            we&apos;re here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/utility-token-gaming"
              className="rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-3 font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              Explore Platform
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-yellow-500 bg-transparent px-8 py-3 font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10"
            >
              Access Network
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}