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
            Mining Infrastructure Software Platform
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl ${styles.text.secondary}`}>
            Gambino provides software infrastructure that enables venues to operate compliant computational 
            processing systems with transparent ecosystem development mechanisms.
          </p>
          <p className={`mx-auto mt-2 max-w-2xl text-sm ${styles.text.tertiary}`}>
            Last updated: September 2025
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
              <li><a className={`${styles.text.accentHover}`} href="#definitions">Definitions</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#exec">Executive Summary</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#problem">Problem Statement</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#solution">The Gambino Solution</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#infrastructure">Mining Infrastructure Technology</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#tokenomics">Tokenomics Overview</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#economy">Economic Model</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#governance">Community Governance Framework</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#community">Community Development Allocation</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#compliance">Compliance & Risk</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#architecture">System Architecture Overview</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#roadmap">Roadmap</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#notice">Legal Notice</a></li>
            </ol>
          </div>

          <Section id="definitions" title="Definitions" styles={styles}>
            <p className="font-semibold">
              Important: The following definitions establish the specific technical and operational meaning of terms used throughout this document:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>&quot;Mining&quot; or &quot;Computational Mining&quot;:</strong> The process of performing computational work to validate transactions and maintain blockchain networks. Does NOT refer to creating new money or generating investment returns.</li>
              <li><strong>&quot;Infrastructure Operations&quot;:</strong> The technical processes of running distributed computing systems for blockchain validation and network maintenance.</li>
              <li><strong>&quot;Community Development&quot;:</strong> Funding allocated to local infrastructure, educational programs, and ecosystem sustainability. Does NOT imply wealth distribution or profit sharing.</li>
              <li><strong>&quot;Utility Token&quot;:</strong> Digital access credentials that enable use of mining infrastructure and participation in governance decisions. Not a store of value, investment vehicle, or currency.</li>
              <li><strong>&quot;Governance Participation&quot;:</strong> The right to vote on operational parameters and platform development decisions. Does NOT include rights to profits, dividends, or financial returns.</li>
              <li><strong>&quot;Implementation Partner&quot;:</strong> Licensed venue operators who deploy Gambino software to run local mining operations. Independent businesses responsible for their own regulatory compliance.</li>
              <li><strong>&quot;Burn Mechanism&quot;:</strong> Consumption of tokens through usage, similar to using credits in a software system. Not a value-creation mechanism.</li>
              <li><strong>&quot;Development Resources&quot;:</strong> Funds or tokens allocated for platform improvements, infrastructure maintenance, and ecosystem growth. Not wealth or profit distribution.</li>
            </ul>
          </Section>

          <Section id="exec" title="Executive Summary" styles={styles}>
            <p>
              Gambino provides <strong>software infrastructure that enables venues to operate compliant computational processing systems</strong>. 
              Each operation generates utility tokens for users and automatically allocates fixed operational fees to ecosystem development accounts. 
              <strong>Our role is licensing technology, not handling or redistributing proceeds.</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Token Holders</strong> access computational infrastructure through utility tokens with governance participation rights</li>
              <li><strong>Implementation Partners</strong> operate venues using our licensed technology stack</li>
              <li><strong>Communities</strong> benefit from ecosystem development allocations managed by partner operations</li>
              <li><strong>Regulators</strong> gain transparent visibility through built-in compliance frameworks</li>
            </ul>
            <p className="mt-4 font-semibold">
              Critical: This is a technology licensing platform. Gambino does not operate venues, handle customer funds, or promise investment returns.
            </p>
          </Section>

          <Section id="problem" title="1. Problem Statement" styles={styles}>
            <p>
              Traditional cryptocurrency validation operations lack <strong>regulatory transparency</strong> and community integration. 
              Value concentrates in large mining pools while local communities see no direct benefit from operations in their areas.
            </p>
            <p className="mt-3">
              Current challenges include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lack of transparent operational frameworks</li>
              <li>Missing ecosystem development mechanisms</li>
              <li>Regulatory uncertainty around validation operations</li>
              <li>Absence of venue-led operations with clear compliance structures</li>
            </ul>
          </Section>

          <Section id="solution" title="2. The Gambino Solution" styles={styles}>
            <p>
              Gambino provides <strong>licensed infrastructure protocol</strong> that converts standard hardware into transparent, 
              compliant computational processing systems. Our technology stack includes <strong>automated operational rules</strong> 
              where implementation partners&apos; systems direct predetermined fees for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ecosystem development contributions</li>
              <li>Infrastructure maintenance support</li>
              <li>Network sustainability reserves</li>
            </ul>
            <p className="mt-4">
              <strong>Gambino provides only the software framework</strong> - venues control all operational aspects and customer interactions. 
              Partners may modify operational parameters within their deployments.
            </p>
          </Section>

          <Section id="infrastructure" title="3. Mining Infrastructure Technology" styles={styles}>
            <p className="font-semibold mb-3">Clear Role Separation:</p>
            
            <div className="mb-4">
              <p className="font-semibold">Gambino = Software Licensor</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Provides computational infrastructure software</li>
                <li>Maintains technology platform</li>
                <li>Delivers compliance frameworks</li>
                <li>Supports implementation partners</li>
                <li>Does NOT handle any customer funds or transactions</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Venues = Service Providers</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Operate processing locations independently</li>
                <li>Manage all customer relationships</li>
                <li>Handle all financial transactions</li>
                <li>Control local compliance</li>
                <li>May use alternative software if desired</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Customers = Direct Counterparties of Venues</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Interact directly with venues only</li>
                <li>No contractual relationship with Gambino</li>
                <li>All transactions through venue operators</li>
                <li>Gambino has no customer data access</li>
              </ul>
            </div>

            <p className="mt-4 text-sm italic">
              This structure aligns with FinCEN exemption for software/network providers as detailed in FinCEN Guidance FIN-2019-G001. 
              Venues could theoretically operate without Gambino software.
            </p>
          </Section>

          <Section id="tokenomics" title="4. Tokenomics Overview" styles={styles}>
            <p className="font-semibold mb-3">Utility Token Framework:</p>
            <p>Gambino tokens are <strong>utility-only</strong> instruments that provide:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Infrastructure Access:</strong> Right to use computational processing systems</li>
              <li><strong>Governance Participation:</strong> Voting on platform operational parameters</li>
              <li><strong>No Direct Redemption:</strong> Not redeemable for cash from Gambino</li>
              <li><strong>No Investment Contract:</strong> No expectation of profits from Gambino&apos;s efforts (per Howey test)</li>
            </ul>
            
            <p className="mt-4 font-semibold">Token Mechanics:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Usage Consumption:</strong> Tokens consumed through infrastructure usage (not &quot;burned&quot; for value)</li>
              <li><strong>Capped Supply:</strong> Fixed maximum of 777,000,000 tokens with predetermined emission schedule</li>
              <li><strong>Utility Focus:</strong> Access and governance, not investment or speculation</li>
              <li><strong>Partner Implementation:</strong> Venues control token distribution in their operations</li>
            </ul>

            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm font-semibold">
                Disclaimer: Tokens are utility access credentials only. Any market value derives from utility demand, 
                not from Gambino&apos;s efforts or promises. Gambino makes no representations about token price, liquidity, or market value.
              </p>
            </div>
          </Section>

          <Section id="economy" title="5. Economic Model" styles={styles}>
            <p className="font-semibold mb-3">Market Structure Separation:</p>
            <p>The system distinguishes between:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Infrastructure Operations:</strong> Token usage for computational access and governance</li>
              <li><strong>Secondary Markets:</strong> Independent markets that may form without Gambino involvement</li>
            </ul>
            
            <p className="mt-4 font-semibold">Important Clarifications:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secondary markets may develop where tokens can be traded between parties</li>
              <li>Trading functionality is incidental to utility purpose, not a promoted feature</li>
              <li>Gambino does NOT guarantee, manage, or provide liquidity for any markets</li>
              <li>Token holders may sell to willing buyers, but Gambino never redeems tokens</li>
              <li>Price discovery and trading occur independently of Gambino</li>
              <li>Any token value derives solely from utility demand, not investment characteristics</li>
            </ul>
          </Section>

          <Section id="governance" title="6. Community Governance Framework" styles={styles}>
            <p>
              Governance participation is earned through <strong>operational participation</strong>, not financial contribution:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Tier 3 – Ecosystem Contributors (regional):</strong> Up to 100 per jurisdiction; receive governance activity credits (non-monetary participation tracking)</li>
              <li><strong>Tier 2 – Network Coordinators:</strong> Oversee operational parameters and development recommendations</li>
              <li><strong>Tier 1 – Protocol Stewards (7):</strong> Long-term guardians of platform mission alignment</li>
            </ul>
            <p className={`text-sm mt-4 ${styles.text.tertiary}`}>
              Key Principle: Voting power derives from platform usage and participation — not capital investment. 
              Governance decisions relate to platform operations, not financial distributions.
            </p>
          </Section>

          <Section id="community" title="7. Community Development Allocation" styles={styles}>
            <p className="font-semibold mb-3">Automated Operational Rules (Venue-Controlled):</p>
            
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <p className="font-semibold">
                Critical Structure: Venue-operated infrastructure includes automatic software rules that direct operational fees 
                to ecosystem development accounts. Gambino does not collect, control, or distribute these funds.
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Infrastructure Maintenance:</strong> Operational fees support platform sustainability</li>
              <li><strong>Ecosystem Development:</strong> Resources for platform improvements and growth</li>
              <li><strong>Governance Operations:</strong> Activity tracking for participation metrics</li>
            </ul>
            
            <p className="mt-4">
              These are <strong>operational costs</strong>, not profit distributions or investment returns. Partners control and may adjust these parameters.
            </p>
            
            <p className="mt-4 font-semibold">
              Gambino never accepts, holds, or transmits customer funds - all financial operations occur at the venue level under partner control.
            </p>
          </Section>

          <Section id="compliance" title="8. Compliance & Risk" styles={styles}>
            <p className="font-semibold mb-3">Core Principles:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Money Handling:</strong> Gambino never accepts, holds, or transmits customer funds</li>
              <li><strong>Partner Responsibility:</strong> Implementation partners solely responsible for financial operations</li>
              <li><strong>Software Provider Status:</strong> Following FinCEN&apos;s software-provider exemption framework</li>
              <li><strong>Jurisdictional Compliance:</strong> Partners responsible for local licensing requirements</li>
            </ul>

            <p className="mt-4 font-semibold">Compliance Features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Transparent Operations: Built-in reporting and audit capabilities</li>
              <li>Identity Frameworks: KYC/AML tools for partner implementation</li>
              <li>Activity Monitoring: Operational tracking systems for compliance</li>
              <li>Regulatory Cooperation: Proactive framework for oversight engagement</li>
            </ul>

            <p className="mt-4 text-sm italic">
              Our model aligns with FinCEN Guidance FIN-2019-G001 and state frameworks distinguishing technology providers from money transmitters. 
              Model may require adjustment based on evolving regulatory guidance.
            </p>
          </Section>

          <Section id="architecture" title="9. System Architecture Overview" styles={styles}>
            <p className="font-semibold mb-3">Technical Design Preserving Legal Separation:</p>
            
            <div className="mb-4">
              <p className="font-semibold">Gambino Technology Layer:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Infrastructure software provision</li>
                <li>Platform maintenance and updates</li>
                <li>Compliance framework delivery</li>
                <li>No financial transaction processing</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Partner Operation Layer:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Customer transaction handling</li>
                <li>Local compliance management</li>
                <li>Fund flow control</li>
                <li>Operational parameter adjustment</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold">System Components:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Transparent Logging: Operational activity recording for audit</li>
                <li>Usage Mechanics: Token consumption through platform usage</li>
                <li>Development Layer: Automated fee routing operated by partners</li>
                <li>Governance Protocol: Participation-based voting systems</li>
                <li>Licensing Framework: Modular deployment for authorized partners</li>
              </ul>
            </div>
          </Section>

          <Section id="roadmap" title="10. Roadmap" styles={styles}>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Phase 1 - Foundation:</strong> Implementation partner onboarding, ecosystem partnerships, compliance validation, technology deployment</li>
              <li><strong>Phase 2 - Expansion:</strong> Multi-jurisdiction deployment (subject to local regulations), ecosystem contributor activation, enhanced compliance frameworks</li>
              <li><strong>Phase 3 - Governance:</strong> Governance system activation, platform development programs, expanded participation mechanisms</li>
              <li><strong>Phase 4 - Scale:</strong> Advanced infrastructure features, international licensing (where permitted), enhanced automation systems</li>
            </ul>
            <p className="mt-4 text-sm italic">
              All phases subject to regulatory approval and compliance requirements.
            </p>
          </Section>

          <Section id="notice" title="11. Legal Notice" styles={styles}>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-4">
              <p className="font-semibold mb-2">
                Important Disclaimers:
              </p>
              <p className="text-sm">
                Gambino tokens are utility access credentials providing infrastructure usage rights and governance participation. 
                While secondary markets may exist where tokens can be traded between parties, Gambino itself does not redeem 
                tokens for cash, guarantee any value, or operate trading markets.
              </p>
            </div>

            <p className="mb-3">
              This document is for informational purposes only and does not constitute:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>An offer of securities or investment opportunity</li>
              <li>Investment, financial, tax, or legal advice</li>
              <li>Solicitation for investment or speculation</li>
              <li>Promise of returns, profits, or financial gain</li>
              <li>Guarantee of token value or liquidity</li>
            </ul>

            <p className="mt-4 font-semibold">Regulatory Compliance:</p>
            <p className="text-sm">
              Our model aligns with current interpretations of FinCEN Guidance FIN-2019-G001, federal securities law (utility token framework), 
              and state money transmitter exemptions for software providers. This model may require modification based on regulatory developments. 
              Certain jurisdictions may be excluded from participation.
            </p>

            <p className={`mt-4 ${styles.text.secondary}`}>
              For complete details, refer to our{' '}
              <Link href="/legal/terms" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Terms of Service
              </Link>,{' '}
              <Link href="/legal/privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Privacy Policy
              </Link>, and{' '}
              <Link href="/legal/disclosures" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
                Regulatory Disclosures
              </Link>.
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