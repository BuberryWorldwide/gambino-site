// app/whitepaper/page.js
import Link from 'next/link'

export const metadata = {
  title: 'Gambino White Paper • Farm Luck. Mine Destiny.',
  description:
    'Gambino redefines gaming terminals as token mining machines that grow community wealth, enable transparent compliance, and reward proof-of-luck.'
}

export default function WhitepaperPage() {
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
            White Paper
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Farm Luck. Mine Destiny.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-400">
            Gambino turns entertainment machines into community wealth engines: a tokenized system that
            rewards proof-of-luck, funds local good, and aligns with transparent tax compliance.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
            Last updated: August 26, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-14 leading-relaxed">
          {/* Table of Contents */}
          <div className="mb-12 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="text-sm text-neutral-300 font-semibold mb-3">Contents</div>
            <ol className="list-decimal pl-5 space-y-2 text-neutral-400 text-sm">
              <li><a className="hover:text-yellow-400" href="#exec">Executive Summary</a></li>
              <li><a className="hover:text-yellow-400" href="#problem">Problem Statement</a></li>
              <li><a className="hover:text-yellow-400" href="#solution">The Gambino Solution</a></li>
              <li><a className="hover:text-yellow-400" href="#extraction">From Extraction to Mining</a></li>
              <li><a className="hover:text-yellow-400" href="#tokenomics">Tokenomics Overview</a></li>
              <li><a className="hover:text-yellow-400" href="#economy">Economic Model</a></li>
              <li><a className="hover:text-yellow-400" href="#governance">Governance: Proof-of-Luck DAO</a></li>
              <li><a className="hover:text-yellow-400" href="#community">Community Wealth Distribution</a></li>
              <li><a className="hover:text-yellow-400" href="#compliance">Compliance & Risk</a></li>
              <li><a className="hover:text-yellow-400" href="#architecture">System Architecture Overview</a></li>
              <li><a className="hover:text-yellow-400" href="#roadmap">Roadmap</a></li>
              <li><a className="hover:text-yellow-400" href="#notice">Legal Notice</a></li>
            </ol>
          </div>

          <Section id="exec" title="Executive Summary">
            <p>
              Gambino reimagines entertainment networks as **mining machines for community value**.
              Each play reduces token supply, jackpots re-emit from capped reserves, and cash-outs
              route a portion to local projects and oversight stipends. Instead of money leaving the
              neighborhood, circulation compounds **social and financial outcomes**.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Players</strong> mine luck with transparent rewards.</li>
              <li><strong>Communities</strong> receive continuous funding from play.</li>
              <li><strong>Regulators</strong> gain auditable visibility for fair taxation.</li>
              <li><strong>Holders</strong> benefit from purposeful scarcity and healthy circulation.</li>
            </ul>
          </Section>

          <Section id="problem" title="1. Problem Statement">
            <p>
              Legacy entertainment machines are **money extraction devices**: opaque accounting, weak
              community return, and adversarial tax workflows. Value flows out; trust erodes.
            </p>
          </Section>

          <Section id="solution" title="2. The Gambino Solution">
            <p>
              Gambino converts terminals into **token miners**. Plays <em>burn</em> tokens (creating scarcity),
              jackpots <em>emit</em> tokens from a finite pool (sustaining excitement), and every cash-out
              contributes to **community funds** and **scout stipends** with transparent, audit-ready records.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Closed loop:</strong> cash → credits → play → burn → jackpots → cash-out → community share.</li>
              <li><strong>Transparency by design:</strong> activity is traceable and policy-compliant.</li>
              <li><strong>Aligned incentives:</strong> fairness and accountability benefit all participants.</li>
            </ul>
          </Section>

          <Section id="extraction" title="3. From Extraction to Mining">
            <p>
              The core innovation is **conceptual** and **mechanical**: terminals no longer drain neighborhoods;
              they **mine** community value.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Players mine luck:</strong> each spin functions like a hash attempt.</li>
              <li><strong>Communities mine wealth:</strong> cash-outs route a fixed share to local good.</li>
              <li><strong>Regulators mine taxes:</strong> standardized records simplify reporting.</li>
              <li><strong>The network mines trust:</strong> transparency replaces suspicion.</li>
            </ul>
          </Section>

          <Section id="tokenomics" title="4. Tokenomics Overview">
            <p>
              Gambino has a **capped supply of 777,000,000** tokens. Allocation spans circulating utility,
              a jackpot reserve, operations, and team incentives. Emissions are governed to prioritize
              longevity, fairness, and community outcomes.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Scarcity:</strong> each play burns tokens to reduce float.</li>
              <li><strong>Emission:</strong> jackpots release tokens from a capped pool with a decreasing curve over time.</li>
              <li><strong>Circulation:</strong> winnings re-enter the economy and can be redeemed with community and compliance routing.</li>
            </ul>
            <p className="text-sm text-neutral-400">
              Note: Detailed schedules and reserve policies are published separately and may be updated to preserve system integrity.
            </p>
          </Section>

          <Section id="economy" title="5. Economic Model">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Cash-In:</strong> Players deposit fiat; receive credits pegged to USD for stable gameplay cost.</li>
              <li><strong>Play:</strong> Credits power experiences; tokens are burned per interaction.</li>
              <li><strong>Jackpots:</strong> Probabilistic rewards re-emit tokens from capped reserves.</li>
              <li><strong>Cash-Out:</strong> Redemptions apply transparent fees that fund community and compliance layers.</li>
              <li><strong>Circulation:</strong> Rewards and balances continue compounding local value rather than exiting the ecosystem.</li>
            </ol>
            <div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-300">
              <div className="font-semibold mb-1">Key Design Goals</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Predictable user experience with stable gameplay costs.</li>
                <li>Deflationary pressure balanced by controlled jackpot emissions.</li>
                <li>Always-on community funding and auditable compliance.</li>
              </ul>
            </div>
          </Section>

          <Section id="governance" title="6. Governance: Proof-of-Luck DAO">
            <p>
              Governance is earned through **Proof-of-Luck**, not wealth. Participation tiers are based on
              Glück Score, jackpots, and consistent engagement.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tier 3 – Scouts (regional):</strong> up to 100 per state; receive annual stipends; surface local priorities.</li>
              <li><strong>Tier 2 – Managers:</strong> oversee monthly budgets and risk; subject to steward approval.</li>
              <li><strong>Tier 1 – Stewards (7):</strong> long-horizon guardians of mission alignment and major disbursements.</li>
            </ul>
            <p className="text-sm text-neutral-400">
              DAO voting power is derived from luck-proof, tenure, and contribution — not capital deposits.
            </p>
          </Section>

          <Section id="community" title="7. Community Wealth Distribution">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>0.5% of every cash-out → Community Gardens Fund:</strong> food security and regenerative projects near host stores.</li>
              <li><strong>0.5% of every cash-out → Scout Pool:</strong> stipends for Tier 3 members who track outcomes and accountability.</li>
              <li><strong>Store partners:</strong> earn revenue share while hosting compliant, transparent machines.</li>
            </ul>
            <p>
              Every play therefore produces a **triple dividend**: entertainment value, player rewards, and tangible community benefit.
            </p>
          </Section>

          <Section id="compliance" title="8. Compliance & Risk">
            <p>
              Gambino positions as a **utility-token mining network** with traceable activity and standardized
              records for taxation and oversight. The system incorporates reasonable identity and activity checks,
              rate-limits, and anomaly detection to deter abuse.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Transparent tax mediation:</strong> built-in routing and reporting.</li>
              <li><strong>Responsible use:</strong> eligibility rules and anti-abuse controls.</li>
              <li><strong>Operational integrity:</strong> parameters may be adjusted to preserve fairness and compliance.</li>
            </ul>
          </Section>

          <Section id="architecture" title="9. System Architecture Overview">
            <p>
              The Gambino Network uses a **modular, scalable architecture** designed for low-cost operations,
              verifiable accounting, and jurisdictional adaptability — without exposing implementation details.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Transparent Ledgering:</strong> activity is recorded for audit and community reporting.</li>
              <li><strong>Deflationary Mechanics:</strong> calibrated burn/emit logic maintains long-term sustainability.</li>
              <li><strong>Community Allocation Layer:</strong> automated routing to gardens, stipends, and reserves.</li>
              <li><strong>Governance Protocol:</strong> Proof-of-Luck eligibility and multi-tier decision-making.</li>
              <li><strong>Scalability:</strong> plug-in modules for local policy, store operations, and analytics.</li>
            </ul>
          </Section>

          <Section id="roadmap" title="10. Roadmap">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Phase 1:</strong> State-level pilots, community partnerships, compliance validation.</li>
              <li><strong>Phase 2:</strong> Multi-state expansion and full Scout (Tier 3) onboarding.</li>
              <li><strong>Phase 3:</strong> National DAO activation and mission-aligned investments.</li>
              <li><strong>Phase 4:</strong> Hybrid web + device experiences and international pilots.</li>
            </ul>
          </Section>

          <Section id="notice" title="11. Legal Notice">
            <p className="text-neutral-300">
              This document is for informational purposes only and does not constitute an offer of securities
              or solicitation for investment. Features described herein may evolve to preserve fairness,
              compliance, and system integrity. Refer to our{' '}
              <Link href="/legal/terms" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                Terms of Service
              </Link>,{' '}
              <Link href="/legal/privacy" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                Privacy Policy
              </Link>, and{' '}
              <Link href="/legal/disclosures" className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted">
                Disclosures
              </Link>{' '}
              for additional details.
            </p>
          </Section>

          {/* Back to top */}
          <div className="mt-12 flex justify-end">
            <a href="#top" className="text-sm text-neutral-400 hover:text-yellow-400 underline decoration-dotted">
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 text-neutral-300 space-y-3">{children}</div>
    </section>
  )
}
