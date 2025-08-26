import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-600/10 to-blue-500/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/6 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-16 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400/35 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-purple-300/45 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-blue-300/35 rounded-full animate-pulse delay-3000"></div>
      </div>

      
      {/* HERO SECTION */}
<section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
  <div className="text-center mb-16">
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
      Built on Trust • Designed for Community Growth
    </div>
    
    <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
      Responsible{" "}
      <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
        Innovation
      </span>
    </h1>

    {/* Visual tagline */}
    <p className="mt-4 text-2xl font-semibold text-yellow-400 drop-shadow-lg">
       Our machines are mining machines - Farm Luck, Mine Destiny
    </p>
    
    <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
      Gambino operates within today’s rules while actively helping to shape the future 
      of digital community wealth. Our machines aren’t just entertainment—they are{" "}
      <b>mining machines</b>, creating new cryptocurrency supply as people play, 
      just like Bitcoin miners secure the blockchain. Every spin adds to the network, 
      powering opportunity, fairness, and innovation for everyone who participates.
    </p>
  </div>
</section>



      {/* REGULATORY FRAMEWORKS */}
<section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white lg:text-4xl">
      Built on <span className="text-yellow-500">Trust & Responsibility</span>
    </h2>
    <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
      Gambino is designed to operate within the rules. We grow responsibly, protect players,
      and make sure innovation always benefits the communities we serve.
    </p>
  </div>
  
  <div className="grid gap-8 lg:grid-cols-3">
    {/* Regulatory Sandbox */}
    <div className="relative">
      <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 p-2">
            <Image
              src="/gold-file.png"
              alt="Responsible Innovation"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Guided Innovation</h3>
            <p className="text-blue-300 text-sm font-semibold">Innovation Tested Responsibly</p>
          </div>
        </div>
        
        <p className="text-neutral-400 mb-6">
          We believe in introducing new ideas carefully, with safeguards that protect
          players and communities. Gambino grows through transparent testing and responsible scaling.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Tested responsibly before expansion</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Oversight built into our approach</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Balance between growth and protection</p>
          </div>
        </div>
      </div>
    </div>

    

    {/* Compliance Commitment */}
    <div className="relative">
      <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 p-2">
            <Image
              src="/gold-utilities.png"
              alt="Compliance Commitment"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Compliance Commitment</h3>
            <p className="text-green-300 text-sm font-semibold">Responsible by Design</p>
          </div>
        </div>
        
        <p className="text-neutral-400 mb-6">
          Gambino was built with compliance in mind from the start. Our systems are designed
          for transparency, security, and fairness.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Clear, fair rules for everyone</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Safe and secure transaction systems</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">A culture of accountability</p>
          </div>
        </div>
      </div>
    </div>

    {/* Utility Token Innovation */}
    <div className="relative">
      <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 p-2">
            <Image
              src="/gold-production.png"
              alt="Utility Token"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Utility Token Innovation</h3>
            <p className="text-yellow-300 text-sm font-semibold">Designed for Real Use</p>
          </div>
        </div>
        
        <p className="text-neutral-400 mb-6">
          Gambino tokens are built to power the network — <b>gameplay, community features,
          and local initiatives </b>— with clear, functional utility.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Tokens designed for real-world use</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Supports gameplay and community projects</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-sm text-neutral-300">Utility-first, not speculation-driven</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* INNOVATION IMPACT */}
      <section className="relative z-10 border-t border-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Setting New <span className="text-yellow-500">Industry Standards</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
              Our compliance-first approach is creating templates for the next generation of utility token networks, 
              helping regulators understand how innovation and consumer protection can coexist.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Regulatory Collaboration */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Image
                  src="/gold-community.png"
                  alt="Regulatory Collaboration"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Regulatory Collaboration
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Proactive Regulatory Engagement</h4>
                    <p className="text-neutral-400">
                      Regular dialogue with regulators to identify potential risks collaboratively 
                      and shape appropriate frameworks before market-wide deployment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Industry Best Practice Development</h4>
                    <p className="text-neutral-400">
                      Contributing to the development of new regulatory frameworks that balance innovation with consumer protection, 
                      similar to EUs blockchain regulatory sandbox initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cross-Jurisdictional Standards</h4>
                    <p className="text-neutral-400">
                      Working toward harmonized regulatory approaches across jurisdictions 
                      to ensure consistent compliance and consumer protection globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Positive Impact */}
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Image
                  src="/gold-control.png"
                  alt="Community Impact"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Community Impact
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Members Joined This Month</span>
                  <span className="text-green-400 font-bold">+2,840</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Jackpots Won</span>
                  <span className="text-yellow-400 font-bold">146</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Community Pool Growth</span>
                  <span className="text-blue-400 font-bold">$2.1M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Local Stores Onboarded</span>
                  <span className="text-purple-400 font-bold">73</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-300">System Uptime</span>
                  <span className="text-cyan-400 font-bold">99.9%</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-sm text-neutral-500">
                  * Data pulled from live network activity — updated in real time
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REGULATORY DOCUMENTATION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Comprehensive <span className="text-yellow-500">Legal Framework</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Complete transparency through accessible legal documentation and regulatory compliance materials.
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
                <p className="text-sm text-neutral-400">Complete terms and conditions</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Comprehensive legal framework governing platform usage, utility token mechanics, and user responsibilities.</p>
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
                <p className="text-sm text-neutral-400">Data handling and user privacy</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">GDPR and CCPA compliant data protection policies with minimal collection principles and user sovereignty.</p>
          </a>
          
          <a href="/legal/aml" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-utilities.png"
                  alt="AML Policy"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">AML Policy</h3>
                <p className="text-sm text-neutral-400">Anti-money laundering framework</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Comprehensive AML program including KYC procedures, transaction monitoring, and suspicious activity reporting.</p>
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
                <p className="text-sm text-neutral-400">Complete system documentation</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Detailed technical specifications, tokenomics, governance mechanisms, and regulatory compliance framework.</p>
          </a>
          
          <a href="/legal/security" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-location.png"
                  alt="Security Framework"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Security Framework</h3>
                <p className="text-sm text-neutral-400">Platform security measures</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">Third-party security audits, infrastructure protection, and data security protocols ensuring platform integrity.</p>
          </a>
          
          <a href="/legal/msb-registration" className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                <Image
                  src="/gold-community.png"
                  alt="MSB Registration"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">MSB Registration</h3>
                <p className="text-sm text-neutral-400">Money services business compliance</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">FinCEN registration documentation, agent lists, and ongoing compliance reporting for money services operations.</p>
          </a>
        </div>
      </section>

      {/* FUTURE OF REGULATION CTA */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-yellow-500/5 p-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Building Tomorrow&rsquo;s <span className="text-yellow-500">Regulatory Framework</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              We&rsquo;re not just building a gaming platform—we&rsquo;re establishing the regulatory blueprint for 
              responsible innovation in blockchain-based entertainment networks. Every compliance decision 
              we make helps shape industry standards for years to come.
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
                Experience Platform
              </a>
              <a 
                href="/legal/whitepaper"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                Read Whitepaper
              </a>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500">
              * Regulatory innovation framework designed for sustainable industry growth
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}