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
            Transparent • Accountable • Responsible
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Legal &</span>{" "}
            <span className={styles.text.gradient}>
              Compliance
            </span>
          </h1>
          
          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            Gambino Gold is committed to responsible innovation and regulatory compliance as the 
            cryptocurrency landscape evolves. Our technology infrastructure is designed with 
            transparency, auditability, and community protection as core principles.
          </p>
        </div>
      </section>

      {/* COMPLIANCE APPROACH */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Our <span className={styles.text.accent}>Compliance Approach</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Building systems with transparency and accountability from the ground up.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Technology Licensing Framework */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-neutral-950/80' : 'border-blue-600/40 bg-gradient-to-br from-blue-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-600/20 border-blue-600/30'}`}>
                      <svg className={`w-8 h-8 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Technology Licensing Structure</h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                        Clear separation of technology provision and operational responsibility
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Software Infrastructure:</strong> We develop and license cryptocurrency mining infrastructure technology
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Implementation Partners:</strong> Licensed operators handle venue deployment and local compliance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Legal Separation:</strong> Clear boundaries between technology licensing and operational activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className={`${styles.layout.card} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-lg flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-100/60 to-blue-200/40 border border-blue-300/30'}`}>
                    <svg className={`w-12 h-12 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Structured Framework
                  </h4>
                  <p className={styles.text.secondary}>
                    Multi-party licensing structure with defined roles and responsibilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transparency & Auditability */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.layout.card} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-lg flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20' : 'bg-gradient-to-br from-green-100/60 to-green-200/40 border border-green-300/30'}`}>
                    <svg className={`w-12 h-12 ${isDark ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Full Transparency
                  </h4>
                  <p className={styles.text.secondary}>
                    Blockchain-based tracking and community oversight capabilities
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className={`${styles.layout.card} ${isDark ? 'border-green-500/30 bg-gradient-to-br from-green-950/50 to-neutral-950/80' : 'border-green-600/40 bg-gradient-to-br from-green-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-600/20 border-green-600/30'}`}>
                      <svg className={`w-8 h-8 ${isDark ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Transparency & Auditability</h3>
                      <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>
                        Built-in accountability through blockchain infrastructure
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>On-Chain Records:</strong> All network transactions and fund distributions recorded transparently
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Community Oversight:</strong> Governance participants can monitor all network operations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Audit Capabilities:</strong> Complete transaction history available for regulatory review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Engagement */}
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className={`${styles.layout.card} ${isDark ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-neutral-950/80' : 'border-purple-600/40 bg-gradient-to-br from-purple-100/70 to-white/90'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-purple-600/20 border-purple-600/30'}`}>
                      <svg className={`w-8 h-8 ${isDark ? 'text-purple-300' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Regulatory Engagement</h3>
                      <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        Proactive approach to evolving regulatory landscape
                      </p>
                    </div>
                  </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Legal Counsel:</strong> Working with specialized cryptocurrency and blockchain legal experts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Compliance Monitoring:</strong> Ongoing assessment of regulatory developments and requirements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                      <p className={styles.text.secondary}>
                        <strong>Adaptive Framework:</strong> System designed to evolve with changing regulatory guidance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className={`${styles.layout.card} text-center`}>
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-lg flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20' : 'bg-gradient-to-br from-purple-100/60 to-purple-200/40 border border-purple-300/30'}`}>
                    <svg className={`w-12 h-12 ${isDark ? 'text-purple-300' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${styles.text.primary}`}>
                    Proactive Compliance
                  </h4>
                  <p className={styles.text.secondary}>
                    Staying ahead of regulatory developments with expert legal guidance
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
            Technical <span className={styles.text.accent}>Compliance Features</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Infrastructure designed with compliance and accountability as foundational principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Transaction Logging</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Comprehensive logging of all network activities and fund movements
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Identity Verification</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              KYC/AML compliance capabilities for regulated implementation partners
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Reporting Tools</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Built-in capabilities for regulatory reporting and compliance documentation
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Access Controls</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Role-based permissions and multi-signature requirements for sensitive operations
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Data Protection</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Privacy-preserving architecture with secure handling of personal information
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-600/20 border border-yellow-600/30'}`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Governance Framework</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Community governance structure with accountability and oversight mechanisms
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL DISCLAIMERS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className={`${styles.layout.card} ${isDark ? 'border-orange-500/30 bg-gradient-to-br from-orange-950/20 to-neutral-950/60' : 'border-orange-600/30 bg-gradient-to-br from-orange-100/40 to-white/80'}`}>
          <div className="text-center mb-8">
            <h2 className={`text-2xl font-bold mb-4 ${styles.text.primary}`}>
              Important Legal Information
            </h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Regulatory Status</h3>
              <p className={styles.text.secondary}>
                Cryptocurrency regulations continue to evolve. We are working with legal counsel to ensure compliance 
                with applicable laws as they develop. Our approach may be adjusted based on regulatory guidance.
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Risk Disclosure</h3>
              <p className={styles.text.secondary}>
                Participation in cryptocurrency networks involves inherent risks. Token values may fluctuate, 
                regulatory requirements may change, and technical systems may experience issues. Participants 
                should carefully consider these risks before engaging with our platform.
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Technology Limitations</h3>
              <p className={styles.text.secondary}>
                While we strive for transparency and auditability, all technology systems have limitations. 
                Community members should understand that blockchain infrastructure, while generally reliable, 
                may experience technical issues or require updates that could affect system operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Learn More About Our <span className={styles.text.accent}>Framework</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${styles.text.secondary}`}>
            For detailed information about our legal structure, compliance approach, and technical architecture, 
            please review our comprehensive documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/legal/whitepaper" className={styles.buttons.primary}>
              <span className="relative z-10">Technical Documentation</span>
            </a>
            <a href="/legal/terms" className={styles.buttons.secondary}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}