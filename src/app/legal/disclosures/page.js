// app/legal/disclosures/page.js

import Link from 'next/link'

export const metadata = {
  title: 'Disclosures • Gambino',
  description: 'Gambino Disclosures'
}

export default function DisclosuresPage() {
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
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            Disclosures
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Transparency. Fair Play. Clarity.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Key facts about how Gambino operates, associated risks, and partner relationships.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
            Last updated: August 26, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">

          <Section title="1. What Gambino Is">
            <p>
              Gambino provides entertainment experiences powered by digital utility (tokens/credits) for use
              within our ecosystem. Features such as leaderboards, jackpots, and rewards are designed for
              gameplay utility and network participation.
            </p>
          </Section>

          <Section title="2. What Gambino Is Not">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Gambino utility tokens/credits are not investment products or securities.</li>
              <li>Gameplay outcomes are not promises of profit, returns, or appreciation.</li>
              <li>Historical performance (e.g., prior jackpots) does not guarantee future results.</li>
            </ul>
          </Section>

          <Section title="3. Network Credits & Token Volatility">
            <p>
              Token or credit values used in the ecosystem may change over time due to system rules,
              promotions, network conditions, or external market factors (where applicable). Limits,
              cool-downs, and anti-abuse checks may apply to preserve fairness.
            </p>
          </Section>

          <Section title="4. Gameplay Probabilities & Jackpots">
            <p>
              Some experiences include probabilistic outcomes. Exact probabilities, jackpot logic,
              and any eligibility rules may vary by experience and are subject to adjustment for fairness,
              security, and operational integrity.
            </p>
          </Section>

          <Section title="5. Fees, Credits & Redemptions">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Certain actions may include fees (e.g., purchases, network fees, withdrawals).</li>
              <li>Displayed balances and transaction histories may experience brief synchronization delays.</li>
              <li>Redemptions may be subject to verification, limits, and responsible-use checks.</li>
            </ul>
          </Section>

          <Section title="6. Partner Stores & Devices">
            <p>
              Partner locations may host devices or events. Availability, local rules, and hours can vary.
              Store owners are responsible for local operations and compliance on their premises. Gambino
              is not responsible for third-party policies or environments.
            </p>
          </Section>

          <Section title="7. Third-Party Services & Integrations">
            <p>
              We may integrate with third-party providers (e.g., payment, email, analytics, block explorers).
              Their services and policies are not controlled by Gambino. Use of third-party tools is at your
              discretion and subject to their terms.
            </p>
          </Section>

          <Section title="8. Compliance & Responsible Use">
            <p>
              We implement eligibility checks, activity monitoring, and rate-limits to deter fraud and abuse,
              and may cooperate with lawful requests where required. Users are responsible for complying with
              local laws and regulations when accessing the Services.
            </p>
          </Section>

          <Section title="9. Security Practices">
            <p>
              We use modern security measures (encryption, authentication, rate-limiting, logging) to protect
              accounts and wallets. No system is perfectly secure. Users should adopt good security hygiene
              (unique passwords, device protections, careful key handling).
            </p>
          </Section>

          <Section title="10. Tax Considerations">
            <p>
              Depending on your jurisdiction, gameplay rewards, redemptions, or other activities could have
              tax implications. You are responsible for understanding and meeting your tax obligations.
            </p>
          </Section>

          <Section title="11. Conflicts of Interest">
            <p>
              From time to time, Gambino, its affiliates, or partners may participate in promotions or
              ecosystem activities. We aim to manage conflicts fairly and disclose material relationships
              where appropriate.
            </p>
          </Section>

          <Section title="12. Changes & Updates">
            <p>
              Disclosures may be updated to reflect operational, legal, or security changes. Material updates
              will be communicated through reasonable notices. Continued use of the Services after updates
              constitutes acceptance.
            </p>
          </Section>

          <Section title="13. Questions">
            <p>
              For clarification on these Disclosures, contact&nbsp;
              <a href="mailto:support@gambino.gold" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                support@gambino.gold
              </a>.
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

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 text-neutral-300 space-y-3">{children}</div>
    </section>
  )
}
