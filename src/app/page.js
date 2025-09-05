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
          {/* Badge - using theme styles */}
          <div className={styles.badges.primary}>
            <div className={`h-2 w-2 rounded-full ${styles.badges.dot}`}></div>
            Community-Powered Mining Network
          </div>
          
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
            <a href="/utility-token-gaming" className={styles.buttons.primary}>
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
          <h2 className={`text-3xl font-bold mb-8 ${styles.text.primary}`}>
            Built on <span className={styles.text.accent}>Trust &amp; Transparency</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-500/10'}`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${styles.text.primary}`}>Regulatory Compliant</h3>
              <p className={`text-sm ${styles.text.tertiary}`}>
                Full compliance framework ensuring legitimate, transparent operations
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${styles.text.primary}`}>Community Focused</h3>
              <p className={`text-sm ${styles.text.tertiary}`}>
                Every operation designed to benefit local communities and participants
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'}`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
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
            <a href="/utility-token-gaming" className={styles.buttons.primary}>
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