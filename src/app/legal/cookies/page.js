import Link from 'next/link'
import CookieSettings from '../../components/CookieSettings' // client component below

export const metadata = {
  title: 'Cookie Preferences • Gambino',
  description: 'Manage your cookie settings on Gambino'
}

export default function CookiesPage() {
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
            Cookie Preferences
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Control Your Data
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            We keep it minimal. Adjust non-essential categories below.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500">
            Last updated: August 26, 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
          <Section title="1. Summary">
            <p>
              Gambino currently uses only strictly-necessary mechanisms for security/basic functionality.
              We do <strong>not</strong> set advertising cookies. If we add optional analytics/functional cookies later,
              you’ll see them here and can opt in.
            </p>
          </Section>

          {/* Interactive settings (client) */}
          <Section title="2. Your Preferences">
            <CookieSettings />
          </Section>

          <Section title="3. Categories We May Use (Future)">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>Essential:</strong> security, load balancing, fraud prevention.</li>
              <li><strong>Functional (optional):</strong> remembering UI preferences.</li>
              <li><strong>Analytics (optional):</strong> aggregate, privacy-respecting usage stats.</li>
            </ul>
          </Section>

          <Section title="4. Manage in Your Browser">
            <p>You can clear or block cookies anytime via your browser settings.</p>
          </Section>

          <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link href="/legal/terms" className="text-neutral-300 hover:text-white underline decoration-dotted">Terms of Service</Link>
              <span className="text-neutral-700">•</span>
              <Link href="/legal/privacy" className="text-neutral-300 hover:text-white underline decoration-dotted">Privacy Policy</Link>
              <span className="text-neutral-700">•</span>
              <Link href="/legal/disclosures" className="text-neutral-300 hover:text-white underline decoration-dotted">Disclosures</Link>
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
