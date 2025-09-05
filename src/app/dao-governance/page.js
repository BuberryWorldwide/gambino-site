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
            Democratic • Transparent • Merit-Based
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Community</span>{" "}
            <span className={styles.text.gradient}>
              Governance
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            The Gambino DAO ensures power cannot be bought. Instead, <strong>active community contributors</strong> rise into leadership roles 
            where voting power is tied to network participation, not wealth. No gatekeepers. No pay-to-play. Just transparent governance built on merit.
          </p>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Three-Tier <span className={styles.text.accent}>Structure</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            This structure ensures fairness, transparency, and local accountability across the entire network.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Tier 1 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-neutral-950/80' : 'border-purple-600/40 bg-gradient-to-br from-purple-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-purple-600/20 border-purple-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>1</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 1: Strategic Council</h3>
                      <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        A small council of the most active long-term contributors
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Define long-term mission and strategic priorities
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Approve major upgrades, partnerships, and community fund allocations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Act as guardians of fairness and compliance within the network
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-purple-500/20' : 'border-purple-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Selection:</strong> Reserved for the highest community impact scores over sustained time.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>👑</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Strategic Leadership
                  </h4>
                  <p className={styles.text.secondary}>
                    Long-term vision and major decision authority
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-neutral-950/80' : 'border-blue-600/40 bg-gradient-to-br from-blue-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-600/20 border-blue-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>2</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 2: Regional Coordinators</h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                        Local community leaders and active contributors
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Manage day-to-day operations and community coordination
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Represent regional interests and facilitate local governance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Bridge communication between Strategic Council and Community Members
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-blue-500/20' : 'border-blue-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Selection:</strong> Elected by their local communities based on contribution and trust.
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>🌐</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Regional Management
                  </h4>
                  <p className={styles.text.secondary}>
                    Local leadership with regional decision-making authority
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-green-500/30 bg-gradient-to-br from-green-950/50 to-neutral-950/80' : 'border-green-600/40 bg-gradient-to-br from-green-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-600/20 border-green-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-green-300' : 'text-green-600'}`}>3</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Tier 3: Community Members</h3>
                      <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>
                        All active participants in the network
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Propose improvements and participate in community discussions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Vote on local matters and community initiatives
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Build contribution scores through network participation
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-green-500/20' : 'border-green-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Access:</strong> Open to all token holders and network participants.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-green-300' : 'text-green-600'}`}>🤝</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Community Base
                  </h4>
                  <p className={styles.text.secondary}>
                    Foundation of democratic participation and network growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW VOTING WORKS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Merit-Based <span className={styles.text.accent}>Voting Power</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Your voice in governance grows with your contribution to the network, not your wallet size.
          </p>
        </div>

        <div className={styles.layout.card}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>📊</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Contribution Tracking</h3>
              <p className={styles.text.secondary}>
                Community impact scores based on network participation, not token holdings
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>⚖️</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Fair Representation</h3>
              <p className={styles.text.secondary}>
                Active contributors gain more voting weight through demonstrated value to the community
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>🔄</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>Dynamic Adjustment</h3>
              <p className={styles.text.secondary}>
                Voting power adjusts continuously based on ongoing contribution and network activity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Ready to Participate in <span className={styles.text.accent}>Governance</span>?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Join our democratic community where your contribution determines your voice, 
            not your wallet size. Build something meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/utility-token-gaming" className={styles.buttons.primary}>
              <span className="relative z-10">Learn About Platform</span>
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