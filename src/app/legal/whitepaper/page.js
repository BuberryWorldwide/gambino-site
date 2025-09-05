// app/legal/whitepaper/page.js
'use client';

import Link from 'next/link'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../../styles/themeStyles'

export default function WhitepaperPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />

      {/* HERO */}
      <section className={`relative z-10 border-b ${
        isDark ? 'border-neutral-900' : 'border-neutral-200'
      }`}>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className={styles.badges.primary}>
            <div className={`h-2 w-2 rounded-full ${styles.badges.dot}`} />
            White Paper
          </div>
          <h1 className={`mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl ${styles.text.primary}`}>
            Farm Luck. Mine Destiny.
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl ${styles.text.secondary}`}>
            Gambino provides cryptocurrency mining infrastructure technology that transforms traditional hardware into 
            community wealth engines through transparent, compliant token mining operations and governance systems.
          </p>
          <p className={`mx-auto mt-2 max-w-2xl text-sm ${styles.text.tertiary}`}>
            Last updated: August 26, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-14 leading-relaxed">
          {/* Table of Contents */}
          <div className={`mb-12 ${styles.layout.card}`}>
            <div className={`text-sm font-semibold mb-3 ${styles.text.secondary}`}>Contents</div>
            <ol className={`list-decimal pl-5 space-y-2 text-sm ${styles.text.tertiary}`}>
              <li><a className={`${styles.text.accentHover}`} href="#exec">Executive Summary</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#problem">Problem Statement</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#solution">The Gambino Solution</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#infrastructure">Mining Infrastructure Technology</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#tokenomics">Tokenomics Overview</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#economy">Economic Model</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#governance">Community Governance Framework</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#community">Community Wealth Distribution</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#compliance">Compliance & Risk</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#architecture">System Architecture Overview</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#roadmap">Roadmap</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#notice">Legal Notice</a></li>
            </ol>
          </div>

          <Section id="exec" title="Executive Summary" styles={styles}>
            <p>
              Gambino reimagines cryptocurrency mining infrastructure as <strong>community wealth engines</strong>.
              Our technology licensing platform enables implementation partners to operate transparent mining 
              operations where each transaction reduces token supply, mining rewards emit from capped reserves, 
              and proceeds route to local community benefit programs.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Token Holders</strong> access mining infrastructure with transparent reward systems.</li>
              <li><strong>Communities</strong> receive continuous funding from mining operations.</li>
              <li><strong>Regulators</strong> gain auditable visibility for compliant operations.</li>
              <li><strong>Implementation Partners</strong> benefit from innovative technology and compliance frameworks.</li>
            </ul>
          </Section>

          <Section id="problem" title="1. Problem Statement" styles={styles}>
            <p>
              Traditional cryptocurrency mining operations lack <strong>community integration</strong> and transparent 
              benefit distribution. Value flows to large mining pools while local communities see no direct benefit 
              from mining operations in their areas.
            </p>
          </Section>

          <Section id="solution" title="2. The Gambino Solution" styles={styles}>
            <p>
              Gambino provides technology that converts standard hardware into <strong>community-focused mining infrastructure</strong>. 
              Mining operations <em>burn</em> tokens (creating scarcity), rewards <em>emit</em> tokens from finite reserves 
              (sustaining network activity), and proceeds contribute to <strong>community funds</strong> and 
              <strong>governance participant stipends</strong> with transparent, audit-ready records.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Closed loop:</strong> token acquisition → mining access → burn → rewards → community allocation.</li>
              <li><strong>Transparency by design:</strong> all mining activity is traceable and compliance-ready.</li>
              <li><strong>Aligned incentives:</strong> community benefit and network sustainability drive all operations.</li>
            </ul>
          </Section>

          <Section id="infrastructure" title="3. Mining Infrastructure Technology" styles={styles}>
            <p>
              The core innovation is <strong>technological</strong> and <strong>operational</strong>: hardware no longer 
              serves only individual miners; it <strong>mines</strong> community value through our licensed infrastructure.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Token holders access mining capacity:</strong> each operation functions within our infrastructure protocol.</li>
              <li><strong>Communities benefit from mining:</strong> operations route fixed shares to local benefit programs.</li>
              <li><strong>Regulators access transparent records:</strong> standardized reporting simplifies compliance.</li>
              <li><strong>The network builds trust:</strong> transparency and community focus replace traditional extraction models.</li>
            </ul>
          </Section>

          <Section id="tokenomics" title="4. Tokenomics Overview" styles={styles}>
            <p>
              Gambino has a <strong>capped supply of 777,000,000</strong> tokens distributed across mining rewards, 
              community allocation, governance participation, and network operations. Our deflationary mechanics 
              balance token burns with strategic emissions to maintain long-term sustainability.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Mining access burns tokens:</strong> reducing circulating supply over time.</li>
              <li><strong>Rewards emit from reserves:</strong> capped pools ensure sustainable token distribution.</li>
              <li><strong>Community allocation:</strong> fixed percentage of operations fund local benefit programs.</li>
              <li><strong>Governance participation:</strong> token holders access DAO voting and proposal systems.</li>
            </ul>
          </Section>

          <Section id="economy" title="5. Economic Model" styles={styles}>
            <p>
              Gambino distinguishes between <strong>internal circulation</strong> (wallet-to-wallet transfers, stipends, 
              community fund routing) and <strong>market-forming events</strong> (token acquisition, mining rewards, 
              and liquidity pool interactions).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Internal transfers:</strong> move balances between participants, implementation partners, 
              and community funds without affecting market price.</li>
              <li><strong>Liquidity pool interactions:</strong> occur when tokens are acquired, burned, or redeemed 
              through market mechanisms, creating visible price impact.</li>
              <li><strong>Strategic advantage:</strong> Gambino ensures mining access costs remain predictable while 
              market activity flows through transparent, auditable systems.</li>
            </ul>
            <p>
              This separation protects participants from unnecessary volatility while generating healthy liquidity 
              and price discovery in public markets.
            </p>
          </Section>

          <Section id="governance" title="6. Community Governance Framework" styles={styles}>
            <p>
              Governance participation is earned through <strong>network contribution</strong> and <strong>community engagement</strong>, 
              not just token holdings. Participation tiers are based on mining activity, governance participation, 
              and consistent community involvement.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tier 3 – Community Scouts (regional):</strong> up to 100 per jurisdiction; receive governance stipends; identify local priorities.</li>
              <li><strong>Tier 2 – Network Managers:</strong> oversee operational parameters and community fund allocation; subject to steward approval.</li>
              <li><strong>Tier 1 – Protocol Stewards (7):</strong> long-term guardians of mission alignment and major technology decisions.</li>
            </ul>
            <p className={`text-sm ${styles.text.tertiary}`}>
              DAO voting power derives from network contribution, community engagement, and governance participation — not capital deposits alone.
            </p>
          </Section>

          <Section id="community" title="7. Community Wealth Distribution" styles={styles}>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>0.5% of mining proceeds → Community Development Fund:</strong> local infrastructure and benefit programs near implementation partner locations.</li>
              <li><strong>0.5% of mining proceeds → Governance Pool:</strong> stipends for active DAO participants who ensure accountability and transparency.</li>
              <li><strong>Implementation partners:</strong> earn technology licensing fees while operating compliant, transparent mining infrastructure.</li>
            </ul>
            <p>
              Every mining operation therefore produces a <strong>triple benefit</strong>: infrastructure utility, network rewards, and tangible community development.
            </p>
          </Section>

          <Section id="compliance" title="8. Compliance & Risk" styles={styles}>
            <p>
              Gambino operates as a <strong>utility-token mining infrastructure provider</strong> with traceable activity and 
              standardized records for taxation and regulatory oversight. The system incorporates identity verification, 
              activity monitoring, and compliance controls to ensure responsible operations.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Transparent compliance:</strong> built-in reporting and audit trails for regulatory requirements.</li>
              <li><strong>Responsible access:</strong> eligibility requirements and anti-abuse systems protect network integrity.</li>
              <li><strong>Operational flexibility:</strong> parameters may be adjusted to maintain compliance and community benefit.</li>
            </ul>
          </Section>

          <Section id="architecture" title="9. System Architecture Overview" styles={styles}>
            <p>
              The Gambino Network uses a <strong>modular, scalable architecture</strong> designed for low-cost operations, 
              verifiable accounting, and jurisdictional adaptability while maintaining technology licensing control.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Transparent Ledgering:</strong> all activity recorded for audit and community reporting.</li>
              <li><strong>Deflationary Mechanics:</strong> calibrated burn/emit protocols maintain long-term sustainability.</li>
              <li><strong>Community Allocation Layer:</strong> automated routing to development funds, stipends, and reserves.</li>
              <li><strong>Governance Protocol:</strong> contribution-based eligibility and multi-tier decision-making systems.</li>
              <li><strong>Licensing Framework:</strong> modular deployment through authorized implementation partners.</li>
            </ul>
          </Section>

          <Section id="roadmap" title="10. Roadmap" styles={styles}>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Phase 1:</strong> Implementation partner onboarding, community partnerships, compliance validation.</li>
              <li><strong>Phase 2:</strong> Multi-jurisdiction expansion and full Community Scout program activation.</li>
              <li><strong>Phase 3:</strong> National DAO governance activation and community-aligned development programs.</li>
              <li><strong>Phase 4:</strong> Advanced infrastructure features and international licensing opportunities.</li>
            </ul>
          </Section>

          <Section id="notice" title="11. Legal Notice" styles={styles}>
            <p className={styles.text.secondary}>
              This document is for informational purposes only and does not constitute an offer of securities 
              or solicitation for investment. Features described herein may evolve to preserve compliance, 
              community benefit, and system integrity. Refer to our{' '}
              <Link href="/legal/terms" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Terms of Service
              </Link>,{' '}
              <Link href="/legal/privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Privacy Policy
              </Link>, and{' '}
              <Link href="/legal/disclosures" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Disclosures
              </Link>{' '}
              for additional details.
            </p>
          </Section>

          {/* Back to top */}
          <div className="mt-12 flex justify-end">
            <a href="#top" className={`text-sm underline decoration-dotted ${styles.text.tertiary} ${styles.text.accentHover}`}>
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ id, title, children, styles }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className={`text-xl font-bold ${styles.text.primary}`}>{title}</h2>
      <div className={`mt-3 space-y-3 ${styles.text.secondary}`}>{children}</div>
    </section>
  )
}