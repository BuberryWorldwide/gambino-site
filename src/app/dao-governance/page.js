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
          <div className={styles.badges.primary}>
            <div className={`h-2 w-2 rounded-full ${styles.badges.success}`}></div>
            Structured • Transparent • Merit-Based
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Community</span>{" "}
            <span className={styles.text.gradient}>
              Governance
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            The Gambino DAO operates through a <strong>three-tier governance structure</strong> where leadership positions 
            are earned through sustained network contribution and community engagement. Clear roles, transparent selection, 
            and structured accountability across the entire network.
          </p>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Three-Tier <span className={styles.text.accent}>Governance Structure</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            A hierarchical system with clearly defined roles, responsibilities, and advancement pathways based on network contribution.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Tier 1 - Protocol Stewards */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-neutral-950/80' : 'border-purple-600/40 bg-gradient-to-br from-purple-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-purple-600/20 border-purple-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>1</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 1: Protocol Stewards</h3>
                      <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        Long-term guardians of mission alignment and major technology decisions
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Oversee protocol development and major technology upgrades
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Approve strategic partnerships and community fund allocations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Maintain mission alignment and network governance standards
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-purple-500/20' : 'border-purple-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Selection:</strong> Limited positions for highest sustained network contributors. 
                      Qualification through demonstrated long-term commitment and governance participation.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30' : 'bg-gradient-to-br from-purple-100/80 to-purple-200/60 border-purple-600/30'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-purple-400/30 to-purple-500/20 border-purple-400/40' : 'bg-gradient-to-br from-purple-200/70 to-purple-300/50 border-purple-500/40'}`}>
                      <span className={`text-4xl ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>👑</span>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-purple-400/60' : 'bg-purple-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-purple-300/50' : 'bg-purple-500/50'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 - Network Managers */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-neutral-950/80' : 'border-blue-600/40 bg-gradient-to-br from-blue-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-600/20 border-blue-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>2</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 2: Network Managers</h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                        Oversee operational parameters and community fund allocation
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Manage day-to-day network operations and performance optimization
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Coordinate community fund distribution and local initiatives
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Report to Protocol Stewards and implement approved governance decisions
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-blue-500/20' : 'border-blue-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Selection:</strong> Subject to steward approval. Selected from active community contributors 
                      with demonstrated operational capabilities and network engagement.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30' : 'bg-gradient-to-br from-blue-100/80 to-blue-200/60 border-blue-600/30'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-blue-400/30 to-blue-500/20 border-blue-400/40' : 'bg-gradient-to-br from-blue-200/70 to-blue-300/50 border-blue-500/40'}`}>
                      <span className={`text-4xl ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>⚙️</span>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-blue-400/60' : 'bg-blue-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-blue-300/50' : 'bg-blue-500/50'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3 - Community Scouts */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-yellow-500/30 bg-gradient-to-br from-yellow-950/50 to-neutral-950/80' : 'border-yellow-600/40 bg-gradient-to-br from-yellow-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-600/20 border-yellow-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>3</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 3: Community Scouts</h3>
                      <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>
                        Regional representatives who identify local priorities and opportunities
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Identify and propose local community projects and partnerships
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Promote network participation and track community outcomes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Receive governance stipends based on activity and regional impact
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-yellow-500/20' : 'border-yellow-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Selection:</strong> Regional allocation with geographic distribution. 
                      Merit-based eligibility through sustained network participation and community engagement.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className={`w-48 h-48 rounded-full border-2 flex items-center justify-center mx-auto ${isDark ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30' : 'bg-gradient-to-br from-yellow-100/80 to-yellow-200/60 border-yellow-600/30'}`}>
                    <div className={`w-32 h-32 rounded-full border flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 border-yellow-400/40' : 'bg-gradient-to-br from-yellow-200/70 to-yellow-300/50 border-yellow-500/40'}`}>
                      <Image
                        src="/gold-community.png"
                        alt="Community Representatives"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className={`absolute top-2 right-12 w-2 h-2 rounded-full animate-pulse delay-700 ${isDark ? 'bg-yellow-400/60' : 'bg-yellow-600/60'}`}></div>
                  <div className={`absolute bottom-4 left-8 w-3 h-3 rounded-full animate-pulse delay-2000 ${isDark ? 'bg-yellow-300/50' : 'bg-yellow-500/50'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW GOVERNANCE WORKS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            How <span className={styles.text.accent}>Governance</span> Works
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Clear structure with defined advancement pathways based on network contribution and community engagement.
          </p>
        </div>

        <div className={styles.layout.card}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>🎯</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Merit-Based Selection</h3>
              <p className={styles.text.secondary}>
                Positions earned through sustained network contribution, mining activity, and governance participation
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>📊</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Structured Advancement</h3>
              <p className={styles.text.secondary}>
                Clear progression through tiers based on demonstrated value and consistent community involvement
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>🗳️</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Tier-Based Voting</h3>
              <p className={styles.text.secondary}>
                Voting power corresponds to tier level and governance responsibilities, not token holdings alone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION PROCESS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Qualification <span className={styles.text.accent}>Process</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Advancement through the governance tiers requires demonstrated commitment and value creation for the network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={styles.layout.card}>
            <h3 className={`text-xl font-bold mb-6 ${styles.text.primary}`}>Network Contribution Requirements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Mining Activity:</strong> Sustained participation in network mining operations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Governance Participation:</strong> Active involvement in community discussions and voting
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Community Engagement:</strong> Consistent contribution to network growth and development
                </p>
              </div>
            </div>
          </div>

          <div className={styles.layout.card}>
            <h3 className={`text-xl font-bold mb-6 ${styles.text.primary}`}>Selection Criteria</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Time-Based Qualification:</strong> Sustained activity over meaningful time periods
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Value Creation:</strong> Demonstrated positive impact on network and community
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                <p className={styles.text.secondary}>
                  <strong>Peer Recognition:</strong> Community acknowledgment of contributions and reliability
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.layout.card} mt-8 text-center`}>
          <p className={`text-sm ${styles.text.tertiary}`}>
            <strong>Note:</strong> Governance participation is earned through network contribution and community engagement. 
            Tier positions are limited and competitive, ensuring only the most committed contributors advance to leadership roles.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Ready to Participate in <span className={styles.text.accent}>Governance</span>?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Start building your network contribution through mining participation and community engagement. 
            Advance through the governance tiers based on demonstrated value and commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/utility-token-gaming" className={styles.buttons.primary}>
              <span className="relative z-10">Learn About Mining</span>
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttons.secondary}
            >
              Start Participating
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}