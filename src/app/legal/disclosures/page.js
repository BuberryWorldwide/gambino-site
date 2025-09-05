import Link from 'next/link'

export const metadata = {
  title: 'Disclosures • Gambino',
  description: 'Gambino Technology Licensing Disclosures'
}

export default function DisclosuresPage() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Standardized Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating particles - consistent with homepage */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-300/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-amber-400/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-yellow-500/50 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300/50 rounded-full animate-pulse delay-1500"></div>
        
        {/* Mid-section particles */}
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-yellow-500/45 rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-3/4 right-32 w-2 h-2 bg-amber-400/55 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-1/4 left-2/3 w-2.5 h-2.5 bg-yellow-300/50 rounded-full animate-pulse delay-3500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-2/3 right-16 w-3 h-3 bg-amber-500/45 rounded-full animate-pulse delay-2800"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-500/55 rounded-full animate-pulse delay-800"></div>

        {/* Floating sparkles */}
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-200/70 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-amber-200/70 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-16 right-1/2 w-1 h-1 bg-yellow-100/80 rounded-full animate-ping" style={{animationDuration: '3.5s', animationDelay: '2.1s'}}></div>
      </div>

      {/* Background geometric shapes - consistent with homepage */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-xl"></div>
        
        {/* Grid pattern - consistent opacity */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-amber-400/15 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-20 h-20 border-2 border-yellow-300/12 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* Moving lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
      </div>

      {/* HERO */}
      <section className="relative z-10 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            Technology Licensing Disclosures
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Transparency. Responsibility. Clarity.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Important information about our technology licensing services, implementation partnerships, and service boundaries.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
            Last updated: September 4, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">

          <Section title="1. Our Technology Licensing Business">
            <p>
              Gambino is a technology licensing company that provides cryptocurrency mining infrastructure 
              software and community management platforms to authorized implementation partners. We do not 
              directly operate venues, provide consumer services, or handle end-user transactions. All 
              consumer-facing operations are conducted by licensed implementation partners.
            </p>
          </Section>

          <Section title="2. What We License vs. What We Don&apos;t Do">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>We License:</strong> Cryptocurrency mining infrastructure software and community governance technology.</li>
              <li><strong>We Don&apos;t Operate:</strong> Venues, consumer services, or end-user transactions.</li>
              <li><strong>We Don&apos;t Guarantee:</strong> Implementation partner operations, consumer outcomes, or investment returns.</li>
              <li><strong>We Don&apos;t Control:</strong> Venue operations, local compliance, or consumer relationships.</li>
            </ul>
          </Section>

          <Section title="3. Implementation Partner Framework">
            <p>
              Our technology is deployed exclusively through licensed implementation partners who handle 
              all venue relationships, consumer services, regulatory compliance, and operational responsibilities. 
              Implementation partners are independent businesses responsible for their own operations, 
              compliance, and consumer relationships within their licensed territories.
            </p>
          </Section>

          <Section title="4. Gambino Gold Token Technology">
            <p>
              Our technology platform utilizes Gambino Gold utility tokens to enable cryptocurrency mining 
              infrastructure and community governance systems. These tokens are designed for technology 
              access and network participation—not as investment products. Token functionality and 
              licensing terms may be modified to maintain system integrity and regulatory compliance.
            </p>
          </Section>

          <Section title="5. Technology Licensing Fees & Support">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Technology licensing includes fees for software access, maintenance, updates, and support.</li>
              <li>Implementation partners handle all consumer-facing fees and revenue collection.</li>
              <li>Licensing fees are separate from any consumer transactions managed by implementation partners.</li>
              <li>Technology access may be subject to compliance monitoring and usage verification.</li>
            </ul>
          </Section>

          <Section title="6. Implementation Partner Responsibilities">
            <p>
              Licensed implementation partners are responsible for venue operations, local regulatory 
              compliance, consumer services, business registration, and all operational decisions within 
              their territories. Gambino provides technology licensing and support services only. We are 
              not responsible for implementation partner operations, consumer disputes, or venue management.
            </p>
          </Section>

          <Section title="7. Technology Dependencies & Third-Party Services">
            <p>
              Our licensed technology may integrate with third-party blockchain networks, compliance services, 
              and operational tools. Third-party service availability, policies, and performance are outside 
              our control. Implementation partners and end users access third-party services through our 
              technology at their own discretion and subject to those providers&apos; terms.
            </p>
          </Section>

          <Section title="8. Regulatory Compliance Framework">
            <p>
              Our technology includes compliance monitoring and reporting capabilities designed to support 
              regulatory transparency. Implementation partners are responsible for ensuring local regulatory 
              compliance in their operating jurisdictions. We may implement additional monitoring or reporting 
              features to support compliance requirements and cooperate with lawful requests related to our 
              technology licensing activities.
            </p>
          </Section>

          <Section title="9. Technology Security & Intellectual Property">
            <p>
              We implement industry-standard security measures to protect our technology platform and 
              intellectual property. All technology remains the exclusive property of Gambino. Implementation 
              partners receive limited usage rights as specified in licensing agreements. No system is 
              completely secure—partners and users should maintain proper security practices.
            </p>
          </Section>

          <Section title="10. Tax & Regulatory Considerations">
            <p>
              Technology licensing arrangements may have tax implications for licensing parties. Participation 
              in cryptocurrency mining operations through our licensed technology may have additional tax 
              considerations depending on jurisdiction. Implementation partners and end users are responsible 
              for understanding and fulfilling their tax obligations and regulatory compliance requirements.
            </p>
          </Section>

          <Section title="11. Licensing Relationships & Potential Conflicts">
            <p>
              Gambino may have business relationships with multiple implementation partners, technology 
              providers, or service vendors. We maintain policies to manage potential conflicts of interest 
              fairly and disclose material relationships where appropriate. Implementation partners operate 
              independently and may compete with each other in overlapping territories.
            </p>
          </Section>

          <Section title="12. Regulatory Environment & Technology Evolution">
            <p>
              The regulatory framework for cryptocurrency mining technology and utility token systems 
              continues to evolve across jurisdictions. Regulatory changes may require modifications to 
              our licensed technology, operational procedures, or availability in certain regions. We 
              monitor regulatory developments and update our technology accordingly.
            </p>
          </Section>

          <Section title="13. Technology Updates & Licensing Modifications">
            <p>
              Our technology platform, licensing terms, and operational procedures may be updated to 
              improve performance, enhance security, ensure compliance, or adapt to regulatory requirements. 
              Material changes affecting licensing rights will be communicated to implementation partners 
              with reasonable notice. Continued use of our technology constitutes acceptance of updates.
            </p>
          </Section>

          <Section title="14. Limitation of Technology Licensing Scope">
            <p>
              Gambino&apos;s responsibility extends only to technology licensing, software support, and platform 
              maintenance. We are not responsible for implementation partner business decisions, venue 
              operations, consumer disputes, local compliance failures, or operational outcomes. Implementation 
              partners assume full responsibility for their business operations and consumer relationships.
            </p>
          </Section>

          <Section title="15. Contact & Technology Support">
            <p>
              For questions about these disclosures or our technology licensing services, contact&nbsp;
              <a href="mailto:support@gambino.gold" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                support@gambino.gold
              </a>. Consumer service inquiries should be directed to the appropriate implementation partner.
            </p>
          </Section>

          {/* Links to other legal docs */}
          <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link href="/legal/terms" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Terms of Service
              </Link>
              <span className="text-neutral-700">•</span>
              <Link href="/legal/privacy" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Privacy Policy
              </Link>
              <span className="text-neutral-700">•</span>
              <Link href="/compliance" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Compliance Framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 text-neutral-300 space-y-3">{children}</div>
    </section>
  )
}