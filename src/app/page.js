'use client';

import Image from 'next/image'
import { useTheme } from './components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from './styles/themeStyles'

export default function Home() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">
            <span className={styles.text.primary}>Mining Infrastructure</span>{' '}
            <span className={styles.text.gradient}>
              That Works for Everyone
            </span>
          </h1>
          
          <p className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${styles.text.secondary}`}>
            Gambino Gold provides cryptocurrency mining infrastructure software and community management 
            platforms to authorized implementation partners. Building sustainable community wealth through 
            transparent, distributed technology licensing.
          </p>

          {/* CTAs - using theme styles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/platform" className={styles.buttons.primary}>
              <span className="relative z-10">Learn How It Works</span>
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttons.secondary}
            >
              Access Network
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${styles.text.primary}`}>
            Two Ways to <span className={styles.text.accent}>Access Our Technology</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.text.tertiary}`}>
            Whether you&apos;re an implementation partner looking to license our technology or a token holder 
            seeking infrastructure access, our platform creates value for communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Implementation Partners */}
          <div className={styles.layout.card}>
            <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
              <svg className={`w-8 h-8 ${styles.text.accent}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${styles.text.primary}`}>For Implementation Partners</h3>
            <p className={`mb-6 leading-relaxed ${styles.text.secondary}`}>
              License our cryptocurrency mining infrastructure software and community management platforms. 
              We provide the technology framework while you handle venue relationships and local compliance.
            </p>
            <ul className={`space-y-3 mb-6 ${styles.text.tertiary}`}>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Complete mining infrastructure software licensing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Community governance and management platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Technology support and compliance framework</span>
              </li>
            </ul>
            <a 
              href="/compliance" 
              className={`inline-flex items-center gap-2 transition-colors font-semibold ${styles.text.accent} ${styles.text.accentHover}`}
            >
              Learn About Licensing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* For Token Holders */}
          <div className={styles.layout.card}>
            <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${isDark ? 'bg-amber-500/20' : 'bg-amber-600/20'}`}>
              <svg className={`w-8 h-8 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${styles.text.primary}`}>For Token Holders</h3>
            <p className={`mb-6 leading-relaxed ${styles.text.secondary}`}>
              Use your Gambino Gold utility tokens to access cryptocurrency mining infrastructure 
              and participate in community governance systems. Designed for infrastructure utility and 
              network participation.
            </p>
            <ul className={`space-y-3 mb-6 ${styles.text.tertiary}`}>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Access to licensed technology features and infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Community governance participation and DAO rights</span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.lists.bullet}`}></div>
                <span>Transparent operations and community benefit allocation</span>
              </li>
            </ul>
            <a 
              href="/dao-governance" 
              className={`inline-flex items-center gap-2 transition-colors font-semibold ${styles.text.accent} ${styles.text.accentHover}`}
            >
              Access Infrastructure
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST & VALUES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className={`text-3xl font-bold mb-12 ${styles.text.primary}`}>
            Built on <span className={styles.text.accent}>Trust &amp; Transparency</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className={`w-10 h-10 mx-auto mb-4 flex items-center justify-center ${styles.text.accent}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${styles.text.primary}`}>Regulatory Compliant</h3>
              <p className={`text-sm ${styles.text.tertiary}`}>
                Full compliance framework ensuring legitimate, transparent operations
              </p>
            </div>

            <div className="text-center">
              <div className={`w-10 h-10 mx-auto mb-4 flex items-center justify-center ${styles.text.accent}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${styles.text.primary}`}>Community Focused</h3>
              <p className={`text-sm ${styles.text.tertiary}`}>
                Every operation designed to benefit local communities and participants
              </p>
            </div>

            <div className="text-center">
              <div className={`w-10 h-10 mx-auto mb-4 flex items-center justify-center ${styles.text.accent}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${styles.text.primary}`}>Built with Care</h3>
              <p className={`text-sm ${styles.text.tertiary}`}>
                Thoughtfully designed infrastructure that prioritizes simplicity and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE NOTICE - Clean text */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-8">
        <div className={`text-center text-sm ${styles.text.tertiary}`}>
          <p className="mb-2">
            <span className={styles.text.accent}>18+</span> Licensed Venues Only · Software Infrastructure Provider · Utility Tokens for Governance
          </p>
          <a href="/compliance" className={`inline-flex items-center gap-1 transition-colors ${styles.text.accent} ${styles.text.accentHover}`}>
            View Compliance Details
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
        <div className={styles.layout.cardLarge}>
          <h2 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Ready to Join the Network?
          </h2>
          <p className={`text-lg mb-8 ${styles.text.secondary}`}>
            Whether you&apos;re looking to license our infrastructure technology or access the network with utility tokens, 
            we&apos;re here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/platform" className={styles.buttons.primary}>
              Explore Platform
            </a>
            <a
              href="https://app.gambino.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttons.secondary}
            >
              Access Network
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}