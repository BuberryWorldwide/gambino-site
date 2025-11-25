// app/components/LegalPageLayout.js
'use client';

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children
}) {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />

      {/* HERO */}
      <section className={`relative z-10 border-b ${
        isDark ? 'border-neutral-900' : 'border-neutral-200'
      }`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h1 className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${styles.text.primary}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`mx-auto mt-4 max-w-2xl ${styles.text.secondary}`}>
                {subtitle}
              </p>
            )}
            {lastUpdated && (
              <p className={`mx-auto mt-2 max-w-2xl text-sm ${styles.text.tertiary}`}>
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
          {children}

          {/* Links to other legal docs */}
          <div className={`mt-10 ${styles.layout.card}`}>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link href="/legal/terms" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
                Terms of Service
              </Link>
              <span className={`${styles.text.tertiary} opacity-50`}>•</span>
              <Link href="/legal/privacy" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
                Privacy Policy
              </Link>
              <span className={`${styles.text.tertiary} opacity-50`}>•</span>
              <Link href="/legal/disclosures" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
                Disclosures
              </Link>
              <span className={`${styles.text.tertiary} opacity-50`}>•</span>
              <Link href="/legal/whitepaper" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
                Whitepaper
              </Link>
              <span className={`${styles.text.tertiary} opacity-50`}>•</span>
              <Link href="/legal/cookies" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
                Cookie Preferences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Reusable Section component
export function LegalSection({ id, title, children }) {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className={`text-xl font-bold ${styles.text.primary}`}>{title}</h2>
      <div className={`mt-3 space-y-3 ${styles.text.secondary}`}>{children}</div>
    </section>
  )
}