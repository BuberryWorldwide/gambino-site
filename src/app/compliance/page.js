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
            Transparent • Auditable • Compliant
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Legal</span>{" "}
            <span className={styles.text.gradient}>
              Compliance
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            Gambino Gold operates within established legal frameworks, ensuring transparency, 
            regulatory compliance, and community protection. Our infrastructure technology 
            licensing model provides clear legal pathways for sustainable community wealth creation.
          </p>
        </div>
      </section>

      {/* COMPLIANCE FRAMEWORK */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Our <span className={styles.text.accent}>Compliance Framework</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Built-in legal safeguards ensure transparent operations and community protection.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Legal Structure */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-neutral-950/80' : 'border-blue-600/40 bg-gradient-to-br from-blue-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-600/20 border-blue-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>🏛️</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Legal Structure</h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                        Technology licensing and community governance framework
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Infrastructure software licensed through authorized implementation partners
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Community governance operates within established DAO legal frameworks
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Utility tokens provide access rights, not securities or investment contracts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>⚖️</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Regulatory Compliance
                  </h4>
                  <p className={styles.text.secondary}>
                    Operating within established legal frameworks and regulatory guidelines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Transparency */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-green-500/30 bg-gradient-to-br from-green-950/50 to-neutral-950/80' : 'border-green-600/40 bg-gradient-to-br from-green-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-600/20 border-green-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-green-300' : 'text-green-600'}`}>📊</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Financial Transparency</h3>
                      <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>
                        Complete auditability and community oversight
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        All network revenues and expenditures tracked transparently on-chain
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Community fund allocations subject to democratic governance approval
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Regular third-party audits ensure financial integrity and compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-green-300' : 'text-green-600'}`}>🔍</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Audit & Oversight
                  </h4>
                  <p className={styles.text.secondary}>
                    Built-in transparency tools and regular professional auditing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Protection */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} ${isDark ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-neutral-950/80' : 'border-purple-600/40 bg-gradient-to-br from-purple-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-purple-600/20 border-purple-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>🛡️</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Community Protection</h3>
                      <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        Built-in safeguards and risk management
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Anti-manipulation measures prevent wealth concentration and gaming
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Democratic governance ensures no single entity can control the network
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Community education and legal resources support informed participation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>🔒</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Risk Management
                  </h4>
                  <p className={styles.text.secondary}>
                    Comprehensive protection measures and community education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE FEATURES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Built-in <span className={styles.text.accent}>Compliance Tools</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Our platform includes comprehensive tools to ensure ongoing compliance and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
              <span className={`text-xl ${styles.text.accent}`}>📝</span>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Automated Reporting</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Built-in regulatory reporting and compliance documentation
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
              <span className={`text-xl ${styles.text.accent}`}>🔄</span>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Real-time Tracking</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Continuous monitoring of network activity and fund flows
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
              <span className={`text-xl ${styles.text.accent}`}>✅</span>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Audit Trail</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Complete immutable record of all governance and financial decisions
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
              <span className={`text-xl ${styles.text.accent}`}>🎓</span>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Education Hub</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Legal resources and compliance training for community members
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Questions About <span className={styles.text.accent}>Compliance</span>?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Our legal framework ensures transparent, compliant operations. 
            Learn more about how we protect our community and operate within regulatory guidelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/legal/whitepaper" className={styles.buttons.primary}>
              <span className="relative z-10">Read Documentation</span>
            </a>
            <a href="/legal/terms" className={styles.buttons.secondary}>
              Legal Information
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}