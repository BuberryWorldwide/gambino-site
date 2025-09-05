import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service • Gambino',
  description: 'Gambino Technology Licensing Terms'
}

export default function TermsPage() {
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Terms of Service
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              Clear. Fair. Professional.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              These Terms govern your access to and use of Gambino technology licensing services. Please read them carefully.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
              Last updated: September 4, 2025
            </p>
          </div>
        </div>
      </section>

      {/* TERMS BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
          
          {/* Intro / Acceptance */}
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing our technology platform, creating an account, or using any Gambino services
              (the <strong>&quot;Services&quot;</strong>), you agree to these Terms of Service
              (the <strong>&quot;Terms&quot;</strong>) and our&nbsp;
              <Link href="/legal/privacy" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                Privacy Policy
              </Link>.
              If you do not agree, do not use the Services.
            </p>
          </Section>

          {/* Business Model Clarification */}
          <Section title="2. Our Business Model">
            <p>
              Gambino is a technology licensing company that provides cryptocurrency mining infrastructure 
              software and community management platforms to authorized implementation partners. We do not 
              directly operate venues, provide consumer services, or handle end-user transactions. All 
              consumer-facing services are provided by licensed implementation partners who contract 
              directly with venues and end users.
            </p>
          </Section>

          {/* Eligibility */}
          <Section title="3. Eligibility">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>You must be at least 18 years old (or the age of majority in your jurisdiction).</li>
              <li>You must be legally authorized to enter into technology licensing agreements.</li>
              <li>If accessing our technology through an implementation partner, you must comply with their additional terms and eligibility requirements.</li>
              <li>We may require verification steps to confirm eligibility and prevent misuse.</li>
            </ul>
          </Section>

          {/* Accounts */}
          <Section title="4. Accounts & Access">
            <p>
              Access to our technology platform is provided through authorized implementation partners or 
              direct licensing agreements. You are responsible for maintaining the confidentiality of any 
              access credentials and for all activity under your account. Notify us immediately of any 
              unauthorized use. We may suspend or terminate access to protect the integrity of our technology 
              and licensed partners.
            </p>
          </Section>

          {/* Technology Licensing */}
          <Section title="5. Technology Licensing & Gambino Gold Tokens">
            <p>
              Our technology platform utilizes Gambino Gold utility tokens to enable cryptocurrency mining 
              infrastructure and community governance systems. These tokens provide access to licensed 
              technology features and are designed for infrastructure utility—not as investment products. 
              Token functionality, availability, and licensing terms may be modified to maintain system 
              integrity and regulatory compliance.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>Licensing Model:</strong> Technology access is provided through authorized implementation partners.</li>
              <li><strong>Token Utility:</strong> Tokens enable infrastructure access and community governance participation.</li>
              <li><strong>Implementation Partners:</strong> Licensed partners handle all consumer-facing operations and compliance.</li>
            </ul>
          </Section>

          {/* Implementation Partner Framework */}
          <Section title="6. Implementation Partners & Service Delivery">
            <p>
              Our technology is deployed through licensed implementation partners who handle all venue 
              relationships, consumer services, and operational compliance. Implementation partners are 
              responsible for local business registration, regulatory compliance, venue operations, and 
              end-user support. Gambino provides technology licensing and support services only.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
              <li>Implementation partners handle all venue contracts and relationships.</li>
              <li>Partners are responsible for local regulatory compliance and business registration.</li>
              <li>Consumer services, support, and dispute resolution are managed by implementation partners.</li>
              <li>Gambino maintains technology ownership and licensing rights.</li>
            </ul>
          </Section>

          {/* Technology Use & Restrictions */}
          <Section title="7. Technology Use & Restrictions">
            <p>To protect our technology and licensed partners, users agree not to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
              <li>Reverse engineer, decompile, or attempt to extract our proprietary technology.</li>
              <li>Use bots, exploits, or unauthorized automation to access our systems.</li>
              <li>Interfere with, disrupt, or overload our technology infrastructure.</li>
              <li>Attempt to bypass licensing restrictions or security measures.</li>
              <li>Engage in fraud, money laundering, or unlawful activity through our technology.</li>
              <li>Sublicense or redistribute our technology without explicit authorization.</li>
            </ul>
          </Section>

          {/* Compliance & Regulatory Framework */}
          <Section title="8. Regulatory Compliance & Cooperation">
            <p>
              Our technology is designed to support regulatory compliance and transparency. Implementation 
              partners are responsible for ensuring local regulatory compliance in their operating 
              jurisdictions. We may implement additional monitoring, verification, or reporting features 
              to support compliance requirements. We cooperate with lawful requests from authorities 
              related to our technology licensing activities.
            </p>
          </Section>

          {/* Licensing Fees & Technology Access */}
          <Section title="9. Licensing Fees & Technology Access">
            <p>
              Technology licensing may include fees for software access, maintenance, support, and updates. 
              Implementation partners handle all consumer-facing fees and transactions. Posted licensing 
              rates and partner agreements govern our fee structure. Taxes related to licensing 
              arrangements are the responsibility of the contracting party based on applicable laws.
            </p>
          </Section>

          {/* Intellectual Property */}
          <Section title="10. Intellectual Property & Technology Ownership">
            <p>
              All technology, software, algorithms, designs, content, and intellectual property remain 
              the exclusive property of Gambino. Licensed partners receive limited usage rights as 
              specified in their licensing agreements. No transfer of ownership occurs through licensing. 
              Unauthorized use, copying, modification, or distribution of our technology is strictly prohibited.
            </p>
          </Section>

          {/* Third-Party Integrations */}
          <Section title="11. Third-Party Services & Integrations">
            <p>
              Our technology may integrate with third-party blockchain networks, payment processors, 
              or compliance services. We do not control third-party services and are not responsible 
              for their performance, policies, or availability. Implementation partners and end users 
              access third-party services at their own discretion and subject to those providers&apos; terms.
            </p>
          </Section>

          {/* Disclaimers */}
          <Section title="12. Technology Disclaimers">
            <p>
              Our technology is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of 
              any kind, express or implied, including fitness for a particular purpose, merchantability, 
              or non-infringement. We do not guarantee uninterrupted operation, specific outcomes, or 
              that all issues will be corrected. Implementation partners assume responsibility for 
              service delivery to end users.
            </p>
          </Section>

          {/* Limitation of Liability */}
          <Section title="13. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Gambino and its affiliates will not be liable for 
              any indirect, incidental, special, consequential, exemplary, or punitive damages, or for 
              lost profits or data, arising from technology licensing or implementation partner activities.
            </p>
            <p className="mt-3">
              Our total liability for any claim related to technology licensing will not exceed the 
              amount paid for licensing services in the twelve (12) months prior to the event giving 
              rise to the claim, or one hundred U.S. dollars (US$100), whichever is greater.
            </p>
          </Section>

          {/* License Termination */}
          <Section title="14. License Suspension & Termination">
            <p>
              We may suspend or terminate technology access if we believe a violation of these Terms 
              or licensing agreements has occurred, to protect our intellectual property, or as required 
              by law. Implementation partners may terminate their licensing agreements according to 
              contract terms. Certain provisions survive termination, including intellectual property 
              rights, disclaimers, and limitations of liability.
            </p>
          </Section>

          {/* Updates & Modifications */}
          <Section title="15. Technology Updates & Terms Modifications">
            <p>
              We may update our technology and these Terms to improve performance, enhance security, add 
              features, or reflect legal changes. Material updates affecting licensing rights will be 
              communicated to implementation partners with reasonable notice. Continued use of our 
              technology after updates constitutes acceptance of modified terms.
            </p>
          </Section>

          {/* Governing Law / Dispute Resolution */}
          <Section title="16. Governing Law & Dispute Resolution">
            <p>
              These Terms are governed by the laws of the State of Florida, excluding its conflict-of-law 
              rules. You agree to first attempt to resolve any dispute with us informally. If we cannot 
              resolve a dispute, the parties agree to binding arbitration on an individual basis in 
              Florida, unless you opt-out in writing within 30 days of accepting these Terms. Class 
              actions are not permitted.
            </p>
          </Section>

          {/* Contact */}
          <Section title="17. Contact Information">
            <p>
              Questions about these Terms or our technology licensing services? Contact us at&nbsp;
              <a href="mailto:support@gambino.gold" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                support@gambino.gold
              </a>.
            </p>
          </Section>

          {/* Links to other legal docs */}
          <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link href="/legal/privacy" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Privacy Policy
              </Link>
              <span className="text-neutral-700">•</span>
              <Link href="/legal/disclosures" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Technology Disclosures
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