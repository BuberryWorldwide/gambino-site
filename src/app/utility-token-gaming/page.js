'use client';

import Image from 'next/image'
import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function PlatformPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className={styles.badges.primary}>
            <div className={`h-2 w-2 rounded-full ${styles.badges.dot}`}></div>
            Infrastructure • Community • Transparency
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Mining Infrastructure</span>{" "}
            <span className={styles.text.gradient}>
              Platform
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            Our technology licensing platform empowers communities to build sustainable wealth through 
            transparent cryptocurrency mining operations. No gatekeepers, no barriers—just accessible 
            infrastructure that works for everyone.
          </p>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            How Our <span className={styles.text.accent}>Platform Works</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Three key components working together to create sustainable community wealth.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Component 1 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${styles.text.accent} ${isDark ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-600/20 border-yellow-600/30'}`}>
                      <span className={`text-2xl font-bold ${styles.text.accent}`}>1</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Technology Licensing</h3>
                      <p className={`font-semibold ${styles.text.accent}`}>
                        Open-source infrastructure software
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Comprehensive mining infrastructure software stack
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Community governance and management tools
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Transparent, auditable operations framework
                      </p>
                    </div>
                  </div>
            
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-yellow-500/20' : 'border-yellow-600/20'}`}>
                    <div className={`text-sm ${styles.text.tertiary}`}>
                      <strong>Access:</strong> Available to authorized implementation partners and community operators.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
                    <span className={`text-4xl ${styles.text.accent}`}>⚙️</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Infrastructure Software
                  </h4>
                  <p className={styles.text.secondary}>
                    Complete mining operation management system with built-in governance tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 2 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${styles.text.accent} ${isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-600/20 border-blue-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>2</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Community Access</h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                        Token-based infrastructure access
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Utility tokens provide access to mining infrastructure
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Democratic governance through community participation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Revenue sharing based on community contribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>🏛️</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Community Governance
                  </h4>
                  <p className={styles.text.secondary}>
                    Democratic decision-making with transparent, merit-based leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 3 */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-600/20 border-green-600/30'}`}>
                      <span className={`text-2xl font-bold ${isDark ? 'text-green-300' : 'text-green-600'}`}>3</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Compliance Framework</h3>
                      <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>
                        Transparent, auditable operations
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Built-in regulatory compliance and reporting tools
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Transparent financial tracking and community auditing
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        Legal framework support for community operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.cardLarge} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                    <span className={`text-4xl ${isDark ? 'text-green-300' : 'text-green-600'}`}>🛡️</span>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Legal Compliance
                  </h4>
                  <p className={styles.text.secondary}>
                    Comprehensive regulatory framework ensuring transparent, legal operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Ready to Join the <span className={styles.text.accent}>Network</span>?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Whether you're looking to implement our technology or participate as a community member, 
            our platform provides the tools you need to build sustainable wealth together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/dao-governance" className={styles.buttons.primary}>
              <span className="relative z-10">Learn About Governance</span>
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttons.secondary}
            >
              Access Platform
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}