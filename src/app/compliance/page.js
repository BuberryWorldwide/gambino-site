import Image from 'next/image'

export default function Page() {
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
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-200/70 rounded-full animate-ping" style={{animationDuration: &apos;3s&apos;, animationDelay: &apos;0.5s&apos;}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-amber-200/70 rounded-full animate-ping" style={{animationDuration: &apos;2.5s&apos;, animationDelay: &apos;1.2s&apos;}}></div>
        <div className="absolute bottom-16 right-1/2 w-1 h-1 bg-yellow-100/80 rounded-full animate-ping" style={{animationDuration: &apos;3.5s&apos;, animationDelay: &apos;2.1s&apos;}}></div>
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
            backgroundSize: &apos;80px 80px&apos;
          }}></div>
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: &apos;25s&apos;}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-amber-400/15 rounded-full animate-ping" style={{animationDuration: &apos;5s&apos;}}></div>
        <div className="absolute top-3/4 left-2/3 w-20 h-20 border-2 border-yellow-300/12 rounded-lg rotate-12 animate-pulse" style={{animationDuration: &apos;6s&apos;}}></div>
        
        {/* Moving lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
      </div>

      
      {/* HERO SECTION - SERVICE PROVIDER FOCUS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Infrastructure Provider • Regulatory Cooperation • Community Focus
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            Compliance{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>

          {/* Updated tagline */}
          <p className="mt-4 text-2xl font-semibold text-yellow-400 drop-shadow-lg">
            Service Provider for Cryptocurrency Mining Operations
          </p>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
            Gambino provides regulatory compliance technology and infrastructure services for 
            venue-based cryptocurrency mining operations. We enable transparent, auditable 
            community wealth generation through proof-of-luck mining protocols that operate 
            within existing legal frameworks while building tomorrow&apos;s regulatory standards.
          </p>
        </div>
      </section>

      {/* SERVICE PROVIDER MODEL */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            <span className="text-blue-500">Service Provider</span> Compliance Model
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Clear legal separation between infrastructure providers and venue operators, 
            designed for regulatory transparency and compliance cooperation.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Infrastructure Technology Services */}
          <div className="relative">
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 p-2">
                  <Image
                    src="/gold-production.png"
                    alt="Infrastructure Services"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Infrastructure Technology</h3>
                  <p className="text-blue-300 text-sm font-semibold">Mining Protocol Implementation</p>
                </div>
              </div>
              
              <p className="text-neutral-400 mb-6">
                We provide cryptocurrency mining infrastructure software and services to venues. 
                Our proof-of-luck mining protocols convert traditional hardware into transparent, 
                auditable cryptocurrency mining operations with full regulatory compliance.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Mining protocol software licensing</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Technical implementation support</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Ongoing system maintenance services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Reporting Services */}
          <div className="relative">
            <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 p-2">
                  <Image
                    src="/gold-utilities.png"
                    alt="Compliance Services"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Compliance Services</h3>
                  <p className="text-green-300 text-sm font-semibold">Regulatory Cooperation Tools</p>
                </div>
              </div>
              
              <p className="text-neutral-400 mb-6">
                Automated compliance documentation, regulatory reporting systems, and audit trail 
                generation. Every mining operation, token creation, and community allocation is 
                tracked for complete transparency and regulatory cooperation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Real-time transaction monitoring</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Automated regulatory reporting</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Tax compliance documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Allocation Management */}
          <div className="relative">
            <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 p-2">
                  <Image
                    src="/gold-file.png"
                    alt="Community Management"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Community Management</h3>
                  <p className="text-yellow-300 text-sm font-semibold">Wealth Distribution Systems</p>
                </div>
              </div>
              
              <p className="text-neutral-400 mb-6">
                Community benefit allocation tracking and governance systems. Mining rewards are 
                automatically distributed to community projects, local initiatives, and governance 
                participants with complete transparency and audit trails.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Community fund tracking systems</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Local project funding automation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-neutral-300">Governance participation tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DON&apos;T DO - CLEAR BOUNDARIES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Service Provider <span className="text-red-400">Boundaries</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Clear legal separation between our infrastructure services and venue operations.
          </p>
        </div>
        
        <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-neutral-950/80 backdrop-blur-sm p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-bold text-white mb-2">Don&apos;t Own Hardware</h3>
              <p className="text-sm text-neutral-400">We don&apos;t own or operate physical mining machines</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">🎰</span>
              </div>
              <h3 className="font-bold text-white mb-2">Don&apos;t Control Results</h3>
              <p className="text-sm text-neutral-400">We don&apos;t control mining outcomes or operation results</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-white mb-2">Don&apos;t Operate Venues</h3>
              <p className="text-sm text-neutral-400">We don&apos;t run or manage entertainment venues or facilities</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-white mb-2">Don&apos;t Take Revenue</h3>
              <p className="text-sm text-neutral-400">We don&apos;t take mining proceeds or venue operational revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY COOPERATION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Built for <span className="text-yellow-500">Regulatory Cooperation</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Our compliance infrastructure is designed from the ground up to support regulatory 
            authorities, enable transparent oversight, and facilitate lawful cryptocurrency mining operations.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Regulatory Features */}
          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Image
                  src="/gold-utilities.png"
                  alt="Regulatory Features"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Regulatory Transparency Features
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Complete Transaction Logging</h4>
                    <p className="mt-1 text-neutral-400 text-sm">All mining activity, token creation, and fund movements recorded on blockchain</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Automated Compliance Reporting</h4>
                    <p className="mt-1 text-neutral-400 text-sm">Real-time generation of regulatory reports and tax documentation</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Regulatory Authority Cooperation</h4>
                    <p className="mt-1 text-neutral-400 text-sm">Proactive engagement with regulators and response to lawful requests</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mining Exemption Alignment</h4>
                    <p className="mt-1 text-neutral-400 text-sm">Operations structured to qualify for digital asset mining business exemptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Compliance Metrics */}
          <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Image
                src="/gold-control.png"
                alt="Compliance Metrics"
                width={24}
                height={24}
                className="object-contain"
              />
              Compliance Metrics & Impact
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                <span className="text-neutral-300">States with Active Regulatory Dialogue</span>
                <span className="text-blue-400 font-bold">7</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                <span className="text-neutral-300">Transaction Transparency Rate</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                <span className="text-neutral-300">Regulatory Violations to Date</span>
                <span className="text-yellow-400 font-bold">$0</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                <span className="text-neutral-300">Venue Partner Compliance Score</span>
                <span className="text-purple-400 font-bold">98.7%</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-neutral-300">Community Benefit Allocation</span>
                <span className="text-cyan-400 font-bold">$2.1M</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-800">
              <p className="text-sm text-neutral-500">
                * Regulatory innovation framework designed for sustainable industry growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL FRAMEWORK */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Comprehensive <span className="text-yellow-500">Legal Framework</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Complete legal documentation supporting our service provider model and regulatory compliance approach.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="/legal/terms" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-yellow-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-file.png"
                  alt="Terms of Service"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Terms of Service</h3>
                <p className="text-sm text-neutral-400">Service provider framework</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Legal framework defining our infrastructure service relationship with venues, utility token mechanics, and compliance responsibilities.</p>
          </a>
          
          <a href="/legal/privacy" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-control.png"
                  alt="Privacy Policy"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Privacy Policy</h3>
                <p className="text-sm text-neutral-400">Data protection framework</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Comprehensive data protection policies ensuring user privacy while maintaining regulatory transparency and compliance cooperation.</p>
          </a>
          
          <a href="/legal/whitepaper" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-production.png"
                  alt="Technical Whitepaper"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">Technical Whitepaper</h3>
                <p className="text-sm text-neutral-400">Infrastructure documentation</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Complete technical specifications for our mining infrastructure technology, compliance systems, and community allocation mechanisms.</p>
          </a>
          
          <a href="/legal/disclosures" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-location.png"
                  alt="Legal Disclosures"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Legal Disclosures</h3>
                <p className="text-sm text-neutral-400">Risk and regulatory notices</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Important legal disclosures, regulatory uncertainty notices, and compliance responsibility frameworks for all stakeholders.</p>
          </a>
          
          <a href="/legal/security" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-utilities.png"
                  alt="Security Framework"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">Security Framework</h3>
                <p className="text-sm text-neutral-400">Infrastructure protection</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Security protocols, audit procedures, and infrastructure protection measures ensuring safe and compliant mining operations.</p>
          </a>
          
          <a href="/legal/aml" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-community.png"
                  alt="AML Compliance"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">AML Policy</h3>
                <p className="text-sm text-neutral-400">Anti-money laundering framework</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Anti-money laundering policies, know-your-customer procedures, and financial crime prevention measures for our service infrastructure.</p>
          </a>
        </div>
      </section>

      {/* REGULATORY INNOVATION CTA */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-yellow-500/5 p-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Leading Tomorrow&apos;s <span className="text-yellow-500">Regulatory Standards</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Our infrastructure sets the standard for responsible blockchain innovation. We deliver 
              the compliance framework that enables transparent community systems while providing 
              regulators with the comprehensive data they need for evidence-based policy development.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">7</div>
                <div className="text-neutral-400">States with Active Regulatory Dialogue</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-neutral-400">Transaction Transparency Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">$0</div>
                <div className="text-neutral-400">Regulatory Violations to Date</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="https://app.gambino.gold"
                className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-semibold text-white hover:brightness-110 transition-all duration-300"
              >
                Access Infrastructure Platform
              </a>
              <a 
                href="/legal/whitepaper"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                Technical Documentation
              </a>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500">
              * Infrastructure service provider for venue-based cryptocurrency mining operations
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}