'use client';

import { CreditCard, TrendingDown, Globe, CheckCircle, Eye, Users, Zap, FileText, Building, User } from 'lucide-react'
import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function WhyLocalCommunitiesPage() {
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
            Local Infrastructure • Community Wealth • Economic Sovereignty
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl mb-6">
            <span className={styles.text.primary}>Why Local Communities Need</span>{" "}
            <span className={styles.text.gradient}>
              Cryptocurrency Infrastructure
            </span>
          </h1>

          <p className={`mt-6 max-w-3xl mx-auto text-xl leading-relaxed ${styles.text.secondary}`}>
            Building transparent, traceable, and taxable infrastructure that keeps economic value local.
          </p>
        </div>
      </section>

      {/* THE EXTRACTION PROBLEM */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            The Economic <span className={styles.text.accent}>Extraction Problem</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Local communities lose economic value through multiple extraction channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <CreditCard className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Payment Processor Drain</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              3-5% of every transaction leaves the community through card networks and payment processor fees—billions extracted annually from local economies.
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <TrendingDown className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Entertainment Revenue Lost</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Entertainment dollars flow to out-of-state corporate operations rather than building local community wealth and infrastructure.
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Globe className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Crypto Activity Offshore</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Community members participate in cryptocurrency through foreign exchanges with zero local economic benefit or regulatory oversight.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Local Mining <span className={styles.text.accent}>Infrastructure</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Gambino Gold enables communities to build mining infrastructure that benefits local economies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <CheckCircle className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Transparent Tax Compliance</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Software provides automated reporting for regulatory oversight, making tax collection and compliance verification straightforward for local jurisdictions.
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Eye className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Economic Transparency</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              On-chain blockchain records enable complete community accountability and regulatory compliance—every transaction traceable and auditable.
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Users className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>Local Implementation Partners</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Licensed entities can be locally-owned businesses, keeping economic value and infrastructure control within the community.
            </p>
          </div>

          <div className={styles.layout.card}>
            <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border border-neutral-700' : 'bg-neutral-100 border border-neutral-300'}`}>
              <Zap className={`w-6 h-6 ${styles.text.accent}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${styles.text.primary}`}>First-Mover Advantage</h3>
            <p className={`text-sm ${styles.text.secondary}`}>
              Early-adopting communities benefit from network effects as cryptocurrency mining infrastructure expands regionally and nationally.
            </p>
          </div>
        </div>
      </section>

      {/* THREE-PARTY MODEL */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold lg:text-4xl mb-4 ${styles.text.primary}`}>
            Compliant <span className={styles.text.accent}>Infrastructure Model</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Clear regulatory boundaries with defined roles and responsibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={styles.layout.card}>
            <div className={`text-center mb-4`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>1</span>
              </div>
              <h3 className={`text-xl font-bold ${styles.text.primary}`}>Software Provider</h3>
              <p className={`text-sm font-semibold ${styles.text.accent}`}>Gambino Gold</p>
            </div>
            <ul className={`space-y-2 text-sm ${styles.text.secondary}`}>
              <li>• Technical infrastructure and blockchain protocol</li>
              <li>• Mining software and edge device integration</li>
              <li>• Compliance reporting tools</li>
              <li>• <strong>NO money transmission</strong></li>
            </ul>
          </div>

          <div className={styles.layout.card}>
            <div className={`text-center mb-4`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>2</span>
              </div>
              <h3 className={`text-xl font-bold ${styles.text.primary}`}>Licensed Financial Entities</h3>
              <p className={`text-sm font-semibold ${styles.text.accent}`}>Implementation Partners</p>
            </div>
            <ul className={`space-y-2 text-sm ${styles.text.secondary}`}>
              <li>• Money transmitter licensing</li>
              <li>• Customer settlements and AML/KYC</li>
              <li>• State-level regulatory compliance</li>
              <li>• Financial operations</li>
            </ul>
          </div>

          <div className={styles.layout.card}>
            <div className={`text-center mb-4`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-neutral-800/50 border-2 border-neutral-700' : 'bg-neutral-100 border-2 border-neutral-300'}`}>
                <span className={`text-2xl ${styles.text.accent}`}>3</span>
              </div>
              <h3 className={`text-xl font-bold ${styles.text.primary}`}>Physical Operations</h3>
              <p className={`text-sm font-semibold ${styles.text.accent}`}>Venue Partners</p>
            </div>
            <ul className={`space-y-2 text-sm ${styles.text.secondary}`}>
              <li>• Facility hosting and equipment</li>
              <li>• Customer interface and support</li>
              <li>• Local business licensing</li>
              <li>• Community presence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className={`${styles.layout.cardLarge} text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Build Your Community&apos;s <span className={styles.text.accent}>Infrastructure</span>
          </h2>
          <p className={`text-xl mb-4 max-w-2xl mx-auto ${styles.text.secondary}`}>
            Cryptocurrency mining infrastructure will be built in every community—the question is whether your community captures the economic benefit.
          </p>
          <p className={`text-lg mb-8 font-semibold ${styles.text.accent}`}>
            Transparent. Traceable. Taxable. Local.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/partners" className={styles.buttons.primary}>
              <span className="relative z-10">Explore Partnership Opportunities</span>
            </a>
            <a href="/compliance" className={styles.buttons.secondary}>
              View Compliance Framework
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
