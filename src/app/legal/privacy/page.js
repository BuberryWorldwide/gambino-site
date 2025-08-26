// app/legal/privacy/page.js

import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy • Gambino',
  description: 'Gambino Privacy Policy'
}

export default function PrivacyPage() {
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
            Privacy Policy
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Your Data. Your Privacy.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            We collect only what is needed to operate fairly, securely, and transparently.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
            Last updated: August 26, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">

          <Section title="1. Information We Collect">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>Email & phone:</strong> provided at signup to identify your account and send important notices.</li>
              <li><strong>Wallet address & keys:</strong> we generate or link a wallet to enable Gambino token use. Private keys are encrypted and never shared.</li>
              <li><strong>Gameplay & transactions:</strong> jackpot wins, purchases, deposits, withdrawals, and machine activity.</li>
              <li><strong>Device & usage data:</strong> basic logs (IP, timestamps) for security, fraud prevention, and legal compliance.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Data">
            <p>
              We use collected data to: 
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Create and secure your account and wallet.</li>
              <li>Track balances, jackpots, and Glück scores.</li>
              <li>Provide support and notify you of important updates.</li>
              <li>Meet compliance requirements and prevent abuse.</li>
            </ul>
          </Section>

          <Section title="3. Sharing & Disclosure">
            <p>
              We do not sell your data. We may share limited information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>With partners hosting Gambino machines for operational purposes.</li>
              <li>With service providers (e.g., email, payment processors) under confidentiality obligations.</li>
              <li>When required by law, regulation, or lawful request from authorities.</li>
            </ul>
          </Section>

          <Section title="4. Data Security">
            <p>
              Wallet private keys are encrypted using modern cryptography. 
              Accounts are protected with JWT-based authentication. 
              We apply rate limiting, monitoring, and other measures to deter abuse and unauthorized access.
            </p>
          </Section>

          <Section title="5. Your Rights">
            <p>
              You may access, update, or delete your account by contacting support. 
              Depending on your jurisdiction, you may also have rights to portability, restriction, or objection.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain user and transaction data as long as necessary for compliance, security, and operational integrity. 
              Certain records may be retained longer if required by law.
            </p>
          </Section>

          <Section title="7. International Users">
            <p>
              Our services may be accessed globally. By using Gambino, you consent to the transfer and processing of your
              data in the United States where our systems are operated.
            </p>
          </Section>

          <Section title="8. Changes to this Policy">
            <p>
              We may update this Privacy Policy to reflect changes in law, technology, or our practices. 
              We will notify you of material updates and the revised policy will be posted here.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              Questions about privacy? Reach us at&nbsp;
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

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 text-neutral-300 space-y-3">{children}</div>
    </section>
  )
}
