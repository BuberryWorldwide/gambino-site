// app/legal/terms/page.js

import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service • Gambino',
  description: 'Gambino Terms of Service'
}

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[38rem] h-[38rem] bg-gradient-to-br from-yellow-500/10 to-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[32rem] h-[32rem] bg-gradient-to-tr from-amber-500/10 to-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(234,179,8,0.25) 1px, transparent 0)',
              backgroundSize: '64px 64px'
            }}
          />
        </div>
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
              These Terms govern your access to and use of the Gambino platform. Please read them carefully.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
              Last updated: August 26, 2025
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
              By creating an account, accessing our applications, or using any Gambino services
              (the <strong>“Services”</strong>), you agree to these Terms of Service
              (the <strong>“Terms”</strong>) and our&nbsp;
              <Link href="/legal/privacy" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                Privacy Policy
              </Link>.
              If you do not agree, do not use the Services.
            </p>
          </Section>

          {/* Eligibility */}
          <Section title="2. Eligibility">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>You must be at least 18 years old (or the age of majority in your jurisdiction).</li>
              <li>You must be legally permitted to use utility-token products and digital applications where you live.</li>
              <li>We may require verification steps to confirm eligibility and prevent misuse.</li>
            </ul>
          </Section>

          {/* Accounts */}
          <Section title="3. Accounts & Security">
            <p>
              You are responsible for the activity that occurs under your account and for maintaining the
              confidentiality of login credentials and any linked wallet keys. Notify us immediately of any
              unauthorized use. We may suspend or terminate access to protect users and the network.
            </p>
          </Section>

          {/* Tokens & Credits */}
          <Section title="4. Tokens, Credits & Network Utility">
            <p>
              Gambino uses network credits and utility tokens to enable gameplay, rewards, and access to
              features (collectively, <strong>“Network Utility”</strong>). Utility tokens are designed for
              use within the ecosystem—not as investment products. Prices, availability, and features may
              change over time to maintain fair use and system integrity.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>Non-custodial or custodial wallets:</strong> You may connect an external wallet or use a wallet provided in-app.</li>
              <li><strong>Balances:</strong> Balance displays reflect on-chain or synchronized data; minor delays may occur.</li>
              <li><strong>Transfers & redemptions:</strong> Certain features may be subject to limits, cool-downs, or checks that deter abuse.</li>
            </ul>
          </Section>

          {/* Gameplay & Rewards */}
          <Section title="5. Gameplay & Rewards">
            <p>
              Our experiences are entertainment products powered by digital utility. Outcomes may involve
              luck, skill, or a mix of both depending on the experience. Rewards, leaderboards, and perks
              are granted according to posted rules and may be updated to ensure fairness, transparency,
              and responsible participation.
            </p>
          </Section>

          {/* Store Partners */}
          <Section title="6. Locations & Partner Stores">
            <p>
              Partner stores may host devices, tournaments, or promotions. Store-specific rules, availability,
              and hours can vary. The Services may show store information for convenience; we are not responsible
              for third-party premises or policies.
            </p>
          </Section>

          {/* Fair Use / Prohibited Conduct */}
          <Section title="7. Fair Use & Prohibited Conduct">
            <p>To keep the network safe and fair, you agree not to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
              <li>Use bots, exploits, or unauthorized automation.</li>
              <li>Interfere with, disrupt, or overload the Services or underlying networks.</li>
              <li>Attempt to bypass permissions, security, or eligibility checks.</li>
              <li>Engage in fraud, money laundering, or unlawful activity of any kind.</li>
              <li>Impersonate others or misuse another person’s account or wallet.</li>
            </ul>
          </Section>

          {/* Compliance (plain, non-technical) */}
          <Section title="8. Responsible Use & Compliance">
            <p>
              We operate with a commitment to responsible use and transparency. We may implement
              identity checks, activity monitoring, and reasonable limits to protect users and the
              network. Where required, we cooperate with lawful requests from authorities.
            </p>
          </Section>

          {/* Fees */}
          <Section title="9. Fees & Pricing">
            <p>
              Some activities may include fees (for example, purchases, blockchain network fees, or
              premium features). Posted rates and in-app confirmations will apply. Taxes, if any, are
              your responsibility based on your location and applicable laws.
            </p>
          </Section>

          {/* IP */}
          <Section title="10. Intellectual Property">
            <p>
              The Services, including the brand, content, software, and visual design, are protected by
              intellectual-property laws. You may not copy, modify, distribute, or create derivative works
              except as expressly permitted by us or by law.
            </p>
          </Section>

          {/* Third-Party Services */}
          <Section title="11. Third-Party Services & Links">
            <p>
              The Services may link to third-party sites, wallets, or block explorers. We do not control
              or endorse third-party services and are not responsible for their content, policies, or
              performance. Use them at your discretion.
            </p>
          </Section>

          {/* Disclaimers */}
          <Section title="12. Disclaimers">
            <p>
              The Services are provided on an “as is” and “as available” basis without warranties of any
              kind, express or implied, including fitness for a particular purpose, merchantability, or
              non-infringement. We do not guarantee uninterrupted or error-free operation, specific
              outcomes, or that any issue will be corrected.
            </p>
          </Section>

          {/* Liability */}
          <Section title="13. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Gambino and its affiliates will not be liable for any
              indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost
              profits or data, arising from or related to your use of the Services.
            </p>
            <p className="mt-3">
              Our total liability for any claim will not exceed the amount you paid to use the Services
              in the twelve (12) months prior to the event giving rise to the claim, or one hundred U.S.
              dollars (US$100), whichever is greater.
            </p>
          </Section>

          {/* Suspension / Termination */}
          <Section title="14. Suspension & Termination">
            <p>
              We may suspend or terminate access if we believe a violation of these Terms has occurred,
              to protect users and the network, or as required by law. You may stop using the Services
              at any time. Certain provisions survive termination, including ownership, disclaimers, and
              limitations of liability.
            </p>
          </Section>

          {/* Changes */}
          <Section title="15. Changes to the Services or Terms">
            <p>
              We may update the Services and these Terms to improve performance, enhance security, or
              reflect operational or legal changes. If updates materially affect your rights, we will
              provide reasonable notice. Continued use after updates constitutes acceptance.
            </p>
          </Section>

          {/* Governing Law / Dispute Resolution */}
          <Section title="16. Governing Law & Dispute Resolution">
            <p>
              These Terms are governed by the laws of the State of Tennessee, excluding its conflict-of-law
              rules. You agree to first attempt to resolve any dispute with us informally. If we cannot
              resolve a dispute, the parties agree to binding arbitration on an individual basis in
              Tennessee, unless you opt-out in writing within 30 days of accepting these Terms. Class
              actions are not permitted.
            </p>
          </Section>

          {/* Contact */}
          <Section title="17. Contact">
            <p>
              Questions about these Terms? Reach us at&nbsp;
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
                Disclosures
              </Link>
              <span className="text-neutral-700">•</span>
              <Link href="/legal/cookies" className="text-neutral-300 hover:text-white underline decoration-dotted">
                Cookie Preferences
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

/** ---------- Small presentational helper ---------- */
function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 text-neutral-300 space-y-3">{children}</div>
    </section>
  )
}
