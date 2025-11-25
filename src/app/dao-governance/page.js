'use client';

import Image from 'next/image'
import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function Page() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Tier-Based</span>{" "}
            <span className={styles.text.gradient}>
              Governance
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            Advance through three governance tiers based on your <strong>actual performance</strong> in the network. 
            Achieve major wins, engage across multiple venues, and earn both <strong>monthly disbursements</strong> and{' '}
            <strong>voting rights</strong> that reflect your demonstrated success and sustained participation.
          </p>
        </div>
      </section>

      {/* TIER PROGRESSION OVERVIEW */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            How <span className={styles.text.accent}>Tier Advancement</span> Works
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${styles.text.tertiary}`}>
            Your governance tier is determined by your actual wins and major outcomes across the network. 
            Higher performance unlocks better monthly payouts and greater influence in community decisions.
          </p>
        </div>

        <div className={styles.layout.card}>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl font-bold ${styles.text.accent}`}>1</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Participate & Succeed</h3>
              <p className={`text-sm ${styles.text.secondary}`}>
                Achieve major wins across network venues
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl font-bold ${styles.text.accent}`}>2</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Build Performance</h3>
              <p className={`text-sm ${styles.text.secondary}`}>
                Demonstrate consistent success across multiple venues
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl font-bold ${styles.text.accent}`}>3</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Advance Tiers</h3>
              <p className={`text-sm ${styles.text.secondary}`}>
                Unlock higher tiers based on sustained performance
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl font-bold ${styles.text.accent}`}>4</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Earn & Govern</h3>
              <p className={`text-sm ${styles.text.secondary}`}>
                Receive monthly disbursements and voting rights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE TIERS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Governance <span className={styles.text.accent}>Tiers</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Three distinct tiers with escalating benefits and responsibilities, earned through demonstrated performance.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Tier 3 - Community Scouts */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80' : 'border-neutral-300 bg-gradient-to-br from-neutral-50 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <span className={`text-2xl font-bold ${styles.text.accent}`}>T3</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 3: Community Scouts</h3>
                      <p className={`font-semibold ${styles.text.accent}`}>
                        Entry-level governance for consistent performers
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Monthly Disbursement:</strong> 0.5% of community fund allocation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Voting Weight:</strong> 1x voting power on community proposals
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Responsibilities:</strong> Identify local opportunities and promote network participation
                      </p>
                    </div>
                  </div>

                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Qualification:</strong> 25+ major wins across 5+ different venues over 6 months.
                      Sustained participation with consistent community engagement.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-neutral-800/50 to-neutral-900/30 border-neutral-700' : 'bg-gradient-to-br from-neutral-100 to-neutral-200/60 border-neutral-300'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-amber-900/30 to-neutral-800/50 border-amber-700/40' : 'bg-gradient-to-br from-amber-100/70 to-amber-200/50 border-amber-400/40'}`}>
                      <span className={`text-4xl ${styles.text.accent} font-bold`}>T3</span>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-amber-400/60' : 'bg-amber-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-amber-300/50' : 'bg-amber-500/50'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 - Network Managers */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-neutral-800/50 to-neutral-900/30 border-neutral-700' : 'bg-gradient-to-br from-neutral-100 to-neutral-200/60 border-neutral-300'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-amber-900/30 to-neutral-800/50 border-amber-700/40' : 'bg-gradient-to-br from-amber-100/70 to-amber-200/50 border-amber-400/40'}`}>
                      <span className={`text-4xl ${styles.text.accent} font-bold`}>T2</span>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-amber-400/60' : 'bg-amber-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-amber-300/50' : 'bg-amber-500/50'}`}></div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.card} ${isDark ? 'border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80' : 'border-neutral-300 bg-gradient-to-br from-neutral-50 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <span className={`text-2xl font-bold ${styles.text.accent}`}>T2</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 2: Network Managers</h3>
                      <p className={`font-semibold ${styles.text.accent}`}>
                        Operational leaders with proven track records
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Monthly Disbursement:</strong> 1.5% of community fund allocation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Voting Weight:</strong> 3x voting power on operational decisions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Responsibilities:</strong> Oversee network operations and community fund distribution
                      </p>
                    </div>
                  </div>

                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Qualification:</strong> 100+ major wins across 10+ venues over 12 months.
                      Must advance from Tier 3 with demonstrated operational capabilities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 1 - Protocol Stewards */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80' : 'border-neutral-300 bg-gradient-to-br from-neutral-50 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <span className={`text-2xl font-bold ${styles.text.accent}`}>T1</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 1: Protocol Stewards</h3>
                      <p className={`font-semibold ${styles.text.accent}`}>
                        Elite governance tier for network veterans
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Monthly Disbursement:</strong> 2.5% of community fund allocation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Voting Weight:</strong> 5x voting power on strategic and protocol decisions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Responsibilities:</strong> Guide long-term vision, approve major partnerships and protocol changes
                      </p>
                    </div>
                  </div>

                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Qualification:</strong> 500+ major wins across 20+ venues over 24+ months.
                      Exceptional performance with sustained leadership in network growth.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-neutral-800/50 to-neutral-900/30 border-neutral-700' : 'bg-gradient-to-br from-neutral-100 to-neutral-200/60 border-neutral-300'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-amber-900/30 to-neutral-800/50 border-amber-700/40' : 'bg-gradient-to-br from-amber-100/70 to-amber-200/50 border-amber-400/40'}`}>
                      <span className={`text-4xl ${styles.text.accent} font-bold`}>T1</span>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-amber-400/60' : 'bg-amber-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-amber-300/50' : 'bg-amber-500/50'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Performance <span className={styles.text.accent}>Requirements</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Tier advancement is based on measurable performance metrics across the network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={styles.layout.card}>
            <h3 className={`text-xl font-bold mb-6 ${styles.text.primary}`}>Winning Performance</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Win Frequency:</strong> Consistent winning performance across time periods
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Venue Diversity:</strong> Wins across multiple different venues and locations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Sustained Activity:</strong> Long-term participation demonstrating network commitment
                </p>
              </div>
            </div>
          </div>

          <div className={styles.layout.card}>
            <h3 className={`text-xl font-bold mb-6 ${styles.text.primary}`}>Community Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Network Growth:</strong> Contribute to expanding network participation and venue adoption
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Community Building:</strong> Active participation in governance discussions and decisions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                <p className={styles.text.secondary}>
                  <strong>Value Creation:</strong> Demonstrated positive impact on network operations and community outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BREAKDOWN */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Tier <span className={styles.text.accent}>Benefits</span> Comparison
          </h2>
        </div>

        <div className={styles.layout.card}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}>
                  <th className={`text-left py-4 px-4 ${styles.text.primary}`}>Benefit</th>
                  <th className={`text-center py-4 px-4 ${styles.text.primary}`}>Tier 3</th>
                  <th className={`text-center py-4 px-4 ${styles.text.primary}`}>Tier 2</th>
                  <th className={`text-center py-4 px-4 ${styles.text.primary}`}>Tier 1</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-b ${isDark ? 'border-neutral-700/50' : 'border-neutral-200'}`}>
                  <td className={`py-4 px-4 font-semibold ${styles.text.secondary}`}>Monthly Disbursement</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>0.5%</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>1.5%</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>2.5%</td>
                </tr>
                <tr className={`border-b ${isDark ? 'border-neutral-700/50' : 'border-neutral-200'}`}>
                  <td className={`py-4 px-4 font-semibold ${styles.text.secondary}`}>Voting Weight</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>1x</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>3x</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>5x</td>
                </tr>
                <tr className={`border-b ${isDark ? 'border-neutral-700/50' : 'border-neutral-200'}`}>
                  <td className={`py-4 px-4 font-semibold ${styles.text.secondary}`}>Major Win Requirement</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>25+</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>100+</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>500+</td>
                </tr>
                <tr className={`border-b ${isDark ? 'border-neutral-700/50' : 'border-neutral-200'}`}>
                  <td className={`py-4 px-4 font-semibold ${styles.text.secondary}`}>Venue Diversity</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>5+ venues</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>10+ venues</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>20+ venues</td>
                </tr>
                <tr>
                  <td className={`py-4 px-4 font-semibold ${styles.text.secondary}`}>Time Commitment</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>6+ months</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>12+ months</td>
                  <td className={`text-center py-4 px-4 ${styles.text.tertiary}`}>24+ months</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mt-4 text-xs text-center ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
            * Values shown are illustrative examples only. Actual tier requirements and benefits are under development and subject to change.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Start Your <span className={styles.text.accent}>Tier Progression</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Begin building your performance record today. Achieve major wins, engage across multiple venues, 
            and advance through the governance tiers to unlock monthly disbursements and voting rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/platform" className={styles.buttons.primary}>
              <span className="relative z-10">Learn About Mining</span>
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttons.secondary}
            >
              Join Network
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}