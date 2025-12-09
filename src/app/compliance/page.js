'use client';

import { FileText, Eye, Scale, ClipboardList, UserCheck, BarChart3, Lock, Shield, Users } from 'lucide-react'
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
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl border ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <FileText className={`w-7 h-7 ${styles.text.accent}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${styles.text.primary}`}>Technology Licensing Structure</h3>
                      <p className={`text-sm ${styles.text.tertiary}`}>
                        Clear separation of technology provision and operational responsibility
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Software Infrastructure:</strong> We develop and license cryptocurrency mining infrastructure technology
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Implementation Partners:</strong> Licensed operators handle venue deployment and local compliance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Legal Separation:</strong> Clear boundaries between technology licensing and operational activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={`${styles.layout.card} text-center`}>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
                    <ClipboardList className={`w-10 h-10 ${styles.text.accent}`} strokeWidth={1.5} />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>
                    Structured Framework
                  </h4>
                  <p className={`text-sm ${styles.text.secondary}`}>
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
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
                    <Eye className={`w-10 h-10 ${styles.text.accent}`} strokeWidth={1.5} />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>
                    Full Transparency
                  </h4>
                  <p className={`text-sm ${styles.text.secondary}`}>
                    Blockchain-based tracking and community oversight capabilities
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl border ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <BarChart3 className={`w-7 h-7 ${styles.text.accent}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${styles.text.primary}`}>Transparency & Auditability</h3>
                      <p className={`text-sm ${styles.text.tertiary}`}>
                        Built-in accountability through blockchain infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>On-Chain Records:</strong> All network transactions and fund distributions recorded transparently
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Community Oversight:</strong> Governance participants can monitor all network operations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
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
                <div className={styles.layout.card}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl border ${isDark ? 'bg-neutral-800/50 border-neutral-700' : 'bg-neutral-100 border-neutral-300'}`}>
                      <Scale className={`w-7 h-7 ${styles.text.accent}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${styles.text.primary}`}>Regulatory Engagement</h3>
                      <p className={`text-sm ${styles.text.tertiary}`}>
                        Proactive approach to evolving regulatory landscape
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Legal Counsel:</strong> Working with specialized cryptocurrency and blockchain legal experts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Compliance Monitoring:</strong> Ongoing assessment of regulatory developments and requirements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${styles.text.accent} bg-current opacity-60`}></div>
                      <p className={`text-sm ${styles.text.secondary}`}>
                        <strong>Adaptive Framework:</strong> System designed to evolve with changing regulatory guidance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={`${styles.layout.card} text-center`}>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
                    <Shield className={`w-10 h-10 ${styles.text.accent}`} strokeWidth={1.5} />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>
                    Proactive Compliance
                  </h4>
                  <p className={`text-sm ${styles.text.secondary}`}>
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
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <ClipboardList className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Transaction Logging</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Comprehensive logging of all network activities and fund movements
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <UserCheck className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Identity Verification</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              KYC/AML compliance capabilities for regulated implementation partners
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <BarChart3 className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Reporting Tools</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Built-in capabilities for regulatory reporting and compliance documentation
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Lock className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Access Controls</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Role-based permissions and multi-signature requirements for sensitive operations
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Shield className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Data Protection</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Privacy-preserving architecture with secure handling of personal information
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Users className={`w-5 h-5 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-base font-semibold mb-2 ${styles.text.primary}`}>Governance Framework</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Community governance structure with accountability and oversight mechanisms
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL REQUIREMENTS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className={`${styles.layout.card} ${isDark ? 'border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-neutral-950/60' : 'border-amber-600/30 bg-gradient-to-br from-amber-100/40 to-white/80'}`}>
          <div className="text-center mb-8">
            <h2 className={`text-2xl font-bold mb-4 ${styles.text.primary}`}>
              Operational Requirements
            </h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Age Requirement</h3>
              <p className={styles.text.secondary}>
                <strong>Participants must be 18 years of age or older.</strong> Age verification is required at all
                licensed partner venues. This requirement is strictly enforced across all network operations.
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Current Operations</h3>
              <p className={styles.text.secondary}>
                <strong>Development phase pilot testing in Tennessee, Virginia, and Missouri.</strong> Operations are currently limited to
                high-traffic retail venues including gas stations, convenience stores, and authorized entertainment
                facilities within each state&apos;s virtual currency framework.
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-100/50'}`}>
              <h3 className={`font-bold mb-2 ${styles.text.primary}`}>Infrastructure Model</h3>
              <p className={styles.text.secondary}>
                <strong>Gambino Gold provides software infrastructure only.</strong> All money transmission
                is handled by separately licensed financial entities. This three-party structure maintains
                clear regulatory separation between technology licensing and financial operations.
              </p>
            </div>
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