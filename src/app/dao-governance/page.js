
import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/10 to-amber-500/6 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-16 left-20 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-3 h-3 bg-blue-400/35 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-yellow-300/45 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse delay-1500"></div>
      </div>

      
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            Democratic • Transparent • Merit-Based
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            Proof-of-Luck{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Governance
            </span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
            The Gambino DAO ensures power cannot be bought. Instead, <strong>lucky individuals</strong> rise into leadership roles 
            where voting power is tied to proof-of-luck, not wealth. No nepotism. No gatekeepers. Just transparent governance built on chance.
          </p>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Three-Tier <span className="text-yellow-500">Structure</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            This structure ensures fairness, transparency, and local accountability across the entire network.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Tier 1 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 border-2 border-purple-500/30">
                      <span className="text-2xl font-bold text-purple-300">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Tier 1: Strategy Leaders</h3>
                      <p className="text-purple-300 font-semibold">
                        A small council of the luckiest long-term participants
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">
                        Define long-term mission and strategic priorities
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">
                        Approve major upgrades, partnerships, and treasury allocations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">
                        Act as guardians of fairness and compliance within the network
                      </p>
                    </div>
                  </div>
            
                  <div className="mt-6 pt-6 border-t border-purple-500/20">
                    <div className="text-sm text-neutral-400">
                      <strong>Selection:</strong> Reserved for the highest proof-of-luck scores over sustained time.
                      Exact size of this group may evolve as the network grows.
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-500/30 flex items-center justify-center mx-auto">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                      <Image
                        src="/gold-control.png"
                        alt="Strategy Leaders"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute top-4 right-8 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-300/50 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>


          {/* Tier 2 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/30 flex items-center justify-center mx-auto">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                      <Image
                        src="/gold-file.png"
                        alt="Operations Management"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-6 left-4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute bottom-8 right-4 w-3 h-3 bg-blue-300/50 rounded-full animate-pulse delay-1500"></div>
                </div>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 border-2 border-blue-500/30">
                    <span className="text-2xl font-bold text-blue-300">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Tier 2: Operations Council</h3>
                    <p className="text-blue-300 font-semibold">An intermediate council providing day-to-day oversight</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-neutral-300">Oversee risk management, compliance, and operational cadence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-neutral-300">Manage budgets and recurring network expenses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-neutral-300">Coordinate across regions to translate policy into practice</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-blue-500/20">
                  <div className="text-sm text-neutral-400">
                    Selection: Elevated from top luck earners with proven tenure and conduct.
                    Exact participant counts and thresholds will adapt as the network scales.
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Tier 3 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/50 to-neutral-950/80 backdrop-blur-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20 border-2 border-yellow-500/30">
                      <span className="text-2xl font-bold text-yellow-300">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Tier 3: Community Scouts</h3>
                      <p className="text-yellow-300 font-semibold">A broad base of local contributors across active states</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">Identify and propose local community projects and partners</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">Promote Gambino participation and track outcomes on the ground</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                      <p className="text-neutral-300">Receive stipends tied to activity, reporting quality, and impact</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-yellow-500/20">
                    <div className="text-sm text-neutral-400">
                      Selection: Luck-based eligibility with geographic distribution. Per-state counts and stipend
                      levels are provisional and will be calibrated to demand and funding.
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-500/30 flex items-center justify-center mx-auto">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 border border-yellow-400/40 flex items-center justify-center">
                      <Image
                        src="/gold-community.png"
                        alt="Community Scouts"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-2 right-12 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-4 left-8 w-3 h-3 bg-yellow-300/50 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUCK SCORING SYSTEM */}
      <section className="relative z-10 border-t border-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Glück Score <span className="text-yellow-500">System</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              In Gambino, <strong>luck is the great equalizer</strong>. Our transparent scoring system 
              ensures governance positions are earned through fortune, not wealth.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Image
                  src="/gold-production.png"
                  alt="Luck Calculation"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                How Luck is Calculated
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Win Frequency</span>
                  <span className="text-yellow-400 font-semibold">40%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Jackpot Multiplier</span>
                  <span className="text-yellow-400 font-semibold">30%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-300">Streak Bonuses</span>
                  <span className="text-yellow-400 font-semibold">20%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-300">Community Impact</span>
                  <span className="text-yellow-400 font-semibold">10%</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Image
                  src="/gold-location.png"
                  alt="Governance Benefits"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Governance Benefits
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">🎯 Voting Power</h4>
                  <p className="text-neutral-400 text-sm">Direct influence over network decisions and fund allocation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">💰 Monthly Stipends</h4>
                  <p className="text-neutral-400 text-sm">Regular compensation for community service and governance work</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">🏘️ Local Impact</h4>
                  <p className="text-neutral-400 text-sm">Shape community projects and direct funding where it&rsquo;s needed most</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY & ACCOUNTABILITY */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Built for <span className="text-yellow-500">Transparency</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Every decision, every vote, every fund allocation is recorded on blockchain for complete transparency.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6">
            <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
              <Image
                src="/gold-file.png"
                alt="Public Voting"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-white mb-3">Public Voting Records</h3>
            <p className="text-neutral-400 text-sm">All governance votes are recorded on-chain and publicly viewable</p>
          </div>
          
          <div className="text-center rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6">
            <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
              <Image
                src="/gold-community.png"
                alt="Fund Tracking"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-white mb-3">Fund Tracking</h3>
            <p className="text-neutral-400 text-sm">Community funds are tracked from collection to final distribution</p>
          </div>
          
          <div className="text-center rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950/90 to-neutral-900/50 backdrop-blur-sm p-6">
            <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
              <Image
                src="/gold-control.png"
                alt="Term Limits"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-white mb-3">Term Limits</h3>
            <p className="text-neutral-400 text-sm">Regular re-evaluation ensures fresh leadership and prevents entrenchment</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-yellow-500/5 p-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Ready to Rise Through <span className="text-yellow-500">Luck</span>?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Start building your Glück Score today. The luckiest players shape the network&rsquo;s future 
              and direct millions in community funding.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="https://app.gambino.gold"
                className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 font-semibold text-white hover:brightness-110 transition-all duration-300"
              >
                Start Playing
              </a>
              <a 
                href="/leaderboard"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                View Leaderboard
              </a>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500">
              * Governance positions earned through transparent luck-based metrics
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-3xl text-center text-neutral-500 text-sm">
          *Governance tiers, thresholds, and participant counts are subject to refinement as the Gambino 
          Network scales. Structures described are illustrative of the intended model, not fixed commitments.
        </div>
      </section>


    </main>
  )
}