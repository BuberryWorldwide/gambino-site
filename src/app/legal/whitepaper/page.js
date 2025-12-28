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
            Cryptocurrency Infrastructure Platform
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl ${styles.text.secondary}`}>
            Gambino Gold provides technology infrastructure that converts entertainment systems 
            into cryptocurrency distribution mechanisms through innovative edge device integration.
          </p>
          <p className={`mx-auto mt-2 max-w-2xl text-sm ${styles.text.tertiary}`}>
            Version 1.0 • Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
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
              <li><a className={`${styles.text.accentHover}`} href="#overview">Platform Overview</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#innovation">Technical Innovation</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#architecture">System Architecture</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#business">Business Model</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#tokenomics">Token Distribution</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#governance">Community Governance</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#compliance">Compliance Approach</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#roadmap">Development Roadmap</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#risks">Risk Factors</a></li>
              <li><a className={`${styles.text.accentHover}`} href="#legal">Legal Disclaimers</a></li>
            </ol>
          </div>

          <Section id="overview" title="1. Platform Overview" styles={styles}>
            <p className="font-semibold mb-3">What We Built:</p>
            <p>
              Gambino Gold has developed infrastructure technology that converts entertainment systems 
              into cryptocurrency distribution mechanisms. Our platform uses edge computing devices to 
              capture human-triggered events and automatically distribute cryptocurrency rewards with 
              transparent multi-party accounting.
            </p>
            
            <p className="mt-4 font-semibold">How It Works:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Users interact with entertainment systems at participating venues</li>
              <li>Edge devices capture interaction data and trigger cryptocurrency distributions</li>
              <li>Rewards are automatically allocated across users, venues, operators, and community funds</li>
              <li>All transactions are recorded on blockchain for transparency</li>
            </ul>

            <p className="mt-4 font-semibold">Business Structure:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gambino Gold:</strong> Develops and licenses the technology platform</li>
              <li><strong>Implementation Partners:</strong> Install and operate systems at venues</li>
              <li><strong>Venue Partners:</strong> Host the entertainment systems and provide customer service</li>
              <li><strong>Users:</strong> Engage with systems and receive cryptocurrency rewards</li>
            </ul>
          </Section>

          <Section id="innovation" title="2. Technical Innovation" styles={styles}>
            <p className="font-semibold mb-3">Novel Integration Architecture:</p>
            <p>
              Our core innovation is the seamless integration of physical entertainment systems 
              with cryptocurrency infrastructure through custom edge computing devices.
            </p>

            <div className="mt-4">
              <p className="font-semibold">Edge Device Integration:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Custom hardware that connects to existing entertainment systems</li>
                <li>Real-time capture of human-triggered random events</li>
                <li>Cryptographic verification and blockchain submission</li>
                <li>Offline resilience with automatic synchronization</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Human-Triggered Randomness:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Captures genuine human entropy from entertainment interactions</li>
                <li>Provides verifiable randomness that cannot be algorithmically predicted</li>
                <li>Creates foundation for transparent, tamper-proof reward distribution</li>
                <li>Potential future applications in broader cryptocurrency ecosystem</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Automated Multi-Party Distribution:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Real-time allocation across multiple stakeholders</li>
                <li>Transparent accounting recorded on blockchain</li>
                <li>Automated community benefit contributions</li>
                <li>Compliance-ready transaction logging</li>
              </ul>
            </div>
          </Section>

          <Section id="architecture" title="3. System Architecture" styles={styles}>
            <p className="font-semibold mb-3">Infrastructure Components:</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Edge Computing Layer:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Raspberry Pi-based devices with custom software</li>
                  <li>Real-time event capture and processing</li>
                  <li>Local data storage with cloud synchronization</li>
                  <li>Cryptographic signing and verification</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Backend Infrastructure:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Node.js application servers with MongoDB databases</li>
                  <li>Redis caching for real-time session management</li>
                  <li>Blockchain integration for transaction processing</li>
                  <li>Multi-partner analytics and reporting systems</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Blockchain Integration:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Solana network for primary token operations</li>
                  <li>Automated smart contract execution for distributions</li>
                  <li>On-chain governance and voting mechanisms</li>
                  <li>Transparent transaction logging for all stakeholders</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="business" title="4. Business Model" styles={styles}>
            <p className="font-semibold mb-3">Technology Licensing Platform:</p>
            <p>
              Gambino Gold operates as a B2B technology licensing company, providing infrastructure 
              software to authorized implementation partners who deploy and operate systems at venues.
            </p>

            <div className="mt-4">
              <p className="font-semibold">Revenue Streams:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Software Licensing:</strong> Fees from implementation partners for platform access</li>
                <li><strong>Revenue Sharing:</strong> Percentage of gross volume from partner operations</li>
                <li><strong>Technical Services:</strong> Support, maintenance, and custom development</li>
                <li><strong>Future Services:</strong> Potential API services for broader cryptocurrency ecosystem</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Partner Structure:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Implementation Partners:</strong> Licensed operators who manage venue relationships</li>
                <li><strong>Venue Partners:</strong> Retail locations, entertainment venues, and other customer-facing businesses</li>
                <li><strong>Community Partners:</strong> Local organizations benefiting from community fund allocations</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Competitive Advantages:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>First-mover advantage in entertainment-to-crypto infrastructure</li>
                <li>Proven working relationships with implementation partners</li>
                <li>Scalable technology platform requiring no venue hardware modifications</li>
                <li>Built-in compliance and transparency features</li>
              </ul>
            </div>
          </Section>

          <Section id="tokenomics" title="5. Token Distribution" styles={styles}>
            <p className="font-semibold mb-3">Gambino Gold Token (GG) Mining Emissions:</p>
            <p>
              GG tokens are mining emissions distributed through proof-of-engagement on RNG infrastructure.
              Tokens are mined through participation, freely tradeable on open markets like any cryptocurrency.
            </p>

            <div className="mt-4">
              <p className="font-semibold">Distribution Characteristics:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Mining Method:</strong> Human-powered entropy generation via RNG interfaces</li>
                <li><strong>Fixed Supply:</strong> 777 million maximum supply, algorithmically distributed</li>
                <li><strong>Tradeable:</strong> Freely tradeable on Solana DEXs like any cryptocurrency</li>
                <li><strong>No Guarantees:</strong> No promised utility, value, or obligations from any party</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Token Economics:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Total Supply:</strong> 777,000,000 tokens maximum</li>
                <li><strong>Distribution Method:</strong> Earned through platform engagement, not sold directly</li>
                <li><strong>Usage Consumption:</strong> Tokens consumed through platform interactions</li>
                <li><strong>Community Allocation:</strong> 15% of platform activity supports community funds</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mt-4">
              <p className="font-semibold text-sm mb-2">Important Token Disclaimers:</p>
              <ul className="text-sm space-y-1">
                <li>• GG tokens are utility instruments, not investment vehicles</li>
                <li>• No guarantees of value, liquidity, or market availability</li>
                <li>• Third-party trading markets may exist independently of Gambino Gold</li>
                <li>• Gambino Gold does not provide token redemption services</li>
              </ul>
            </div>
          </Section>

          <Section id="governance" title="6. Community Governance" styles={styles}>
            <p className="font-semibold mb-3">Performance-Based Governance Tiers:</p>
            <p>
              Governance participation is earned through demonstrated platform engagement and successful 
              participation, not through token holdings or financial contribution.
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <p className="font-semibold">Tier 3: Community Scouts</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Qualification:</strong> 25+ major wins across 5+ venues over 6 months</li>
                  <li><strong>Benefits:</strong> 0.5% monthly distribution, 1x voting weight</li>
                  <li><strong>Role:</strong> Regional community representation and opportunity identification</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Tier 2: Network Managers</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Qualification:</strong> 100+ major wins across 10+ venues over 12 months</li>
                  <li><strong>Benefits:</strong> 1.5% monthly distribution, 3x voting weight</li>
                  <li><strong>Role:</strong> Operational oversight and community fund management</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Tier 1: Protocol Stewards</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Qualification:</strong> 500+ major wins across 20+ venues over 24+ months</li>
                  <li><strong>Benefits:</strong> 2.5% monthly distribution, 5x voting weight</li>
                  <li><strong>Role:</strong> Long-term platform guidance and strategic decision-making</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm italic">
              Governance decisions focus on platform operations, community fund allocation, 
              and ecosystem development - not profit distributions or investment returns.
            </p>
          </Section>

          <Section id="compliance" title="7. Compliance Approach" styles={styles}>
            <p className="font-semibold mb-3">Regulatory Framework:</p>
            <p>
              We are committed to operating within applicable legal frameworks and are working 
              with specialized legal counsel to ensure appropriate compliance as regulations develop.
            </p>

            <div className="mt-4">
              <p className="font-semibold">Current Compliance Measures:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Legal Structure:</strong> Technology licensing model with clear separation of responsibilities</li>
                <li><strong>Financial Separation:</strong> Partners handle all customer funds and transactions independently</li>
                <li><strong>Transparency Systems:</strong> Built-in transaction logging and audit capabilities</li>
                <li><strong>Partner Requirements:</strong> Implementation partners responsible for local regulatory compliance</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Regulatory Considerations:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Cryptocurrency regulations continue to evolve at federal and state levels</li>
                <li>Our technology licensing model is designed to adapt to regulatory requirements</li>
                <li>Implementation partners may need specific licenses depending on jurisdiction</li>
                <li>System architecture supports compliance reporting and regulatory oversight</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-4">
              <p className="font-semibold text-sm mb-2">Compliance Disclaimer:</p>
              <p className="text-sm">
                Our compliance approach is based on current understanding of applicable regulations 
                and consultation with legal counsel. Regulatory requirements may change, and our 
                operations may need to be modified accordingly. We cannot guarantee that our current 
                or future operations will be deemed compliant by all regulatory authorities.
              </p>
            </div>
          </Section>

          <Section id="roadmap" title="8. Development Roadmap" styles={styles}>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Phase 1: Foundation (Current - Q4 2025)</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Complete initial partnership deployment and testing</li>
                  <li>Refine edge device integration and reliability</li>
                  <li>Establish compliance frameworks with legal counsel</li>
                  <li>Build operational track record with initial venues</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Phase 2: Expansion (Q1-Q3 2026)</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Onboard additional implementation partners</li>
                  <li>Deploy across multiple jurisdictions (subject to regulatory approval)</li>
                  <li>Launch community governance tier system</li>
                  <li>Expand venue partner network significantly</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Phase 3: Platform Services (Q4 2026-2027)</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Develop human entropy API for external blockchain projects</li>
                  <li>Enhanced analytics and reporting capabilities</li>
                  <li>Advanced governance tools and community features</li>
                  <li>International expansion opportunities</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Phase 4: Ecosystem Platform (2028+)</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Full-scale human randomness infrastructure services</li>
                  <li>Third-party developer integration capabilities</li>
                  <li>Advanced AI and machine learning optimization</li>
                  <li>Global network of implementation partners</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm italic">
              All development phases are subject to regulatory approval, market conditions, 
              and successful execution of preceding phases.
            </p>
          </Section>

          <Section id="risks" title="9. Risk Factors" styles={styles}>
            <p className="font-semibold mb-3">Platform and Investment Risks:</p>
            <p>
              Participation in the Gambino Gold ecosystem involves significant risks that 
              participants should carefully consider.
            </p>

            <div className="mt-4">
              <p className="font-semibold">Regulatory Risks:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Cryptocurrency regulations may change and affect platform operations</li>
                <li>Some jurisdictions may prohibit or restrict platform participation</li>
                <li>Compliance costs may increase and affect platform economics</li>
                <li>Regulatory enforcement actions could disrupt operations</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Technical Risks:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Edge device failures or connectivity issues could affect rewards</li>
                <li>Blockchain network congestion may delay transactions</li>
                <li>Smart contract bugs or vulnerabilities could cause fund losses</li>
                <li>System upgrades may temporarily disrupt services</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Business Risks:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Implementation partners may discontinue operations</li>
                <li>Venue partners may terminate hosting agreements</li>
                <li>User adoption may be lower than anticipated</li>
                <li>Competitive products may gain market share</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Token-Related Risks:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Token values may fluctuate significantly or become worthless</li>
                <li>Secondary markets may have limited liquidity</li>
                <li>Platform changes may affect token distribution or value</li>
                <li>No guarantee of continued token distribution programs</li>
              </ul>
            </div>
          </Section>

          <Section id="legal" title="10. Legal Disclaimers" styles={styles}>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <p className="font-semibold text-sm mb-2">Important Legal Notice:</p>
              <p className="text-sm">
                This document is for informational purposes only and does not constitute financial,
                investment, tax, or legal advice. Gambino Gold tokens are mining emissions distributed
                through proof-of-engagement protocol, not investment securities or utility instruments.
              </p>
            </div>

            <p className="font-semibold mb-3">This document does NOT constitute:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>An offer to sell securities or investment contracts</li>
              <li>Investment advice or recommendations</li>
              <li>Guaranteed returns or profit expectations</li>
              <li>Financial planning or tax guidance</li>
              <li>Legal advice or regulatory compliance certification</li>
            </ul>

            <div className="mt-4">
              <p className="font-semibold">Forward-Looking Statements:</p>
              <p className="text-sm mt-2">
                This document contains forward-looking statements about our business plans, 
                technology development, and market opportunities. Actual results may differ 
                materially from these statements due to various factors including regulatory 
                changes, market conditions, and technical challenges.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Jurisdiction and Compliance:</p>
              <p className="text-sm mt-2">
                Platform availability and token distribution may be restricted in certain 
                jurisdictions. Participants are responsible for ensuring compliance with 
                local laws and regulations. Gambino Gold reserves the right to exclude 
                participants from jurisdictions where operations may not be legally permissible.
              </p>
            </div>

            <p className={`mt-6 text-sm ${styles.text.secondary}`}>
              For complete terms and conditions, please review our{' '}
              <Link href="/legal/terms" className={`${styles.text.accent} ${styles.text.accentHover} underline`}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline`}>
                Privacy Policy
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