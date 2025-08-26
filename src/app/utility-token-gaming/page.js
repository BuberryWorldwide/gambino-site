import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* LAYER 1: Soft gold orbs (luxury bokeh) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-yellow-500/15 to-amber-600/10" />
        <div className="absolute bottom-[-6rem] -left-20 h-[24rem] w-[24rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-600/15 to-yellow-500/10" />
        <div className="absolute top-1/3 left-1/4 h-56 w-56 rounded-full blur-2xl bg-gradient-to-br from-yellow-400/12 to-transparent" />
        <div className="absolute top-1/2 right-1/5 h-40 w-40 rounded-full blur-2xl bg-gradient-to-tr from-amber-400/12 to-transparent" />
      </div>

      {/* LAYER 2: Shimmer beams & dotted grid */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Subtle radial shimmer */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-10%,rgba(234,179,8,0.12),transparent_60%)]" />
        {/* Gentle beams using conic gradients */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_20%,transparent_75%)]">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_60%_40%,rgba(234,179,8,0.06),transparent_60deg,rgba(234,179,8,0.08),transparent_140deg,rgba(234,179,8,0.05))] animate-[spin_60s_linear_infinite]" />
        </div>
        {/* Dotted grid (very faint) */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(234,179,8,0.35) 1px, transparent 0)',
              backgroundSize: '72px 72px'
            }}
          />
        </div>
      </div>

      {/* LAYER 3: Tasteful sparkle accents (celebratory, not noisy) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Small sparkles that gently ping */}
        <div className="absolute top-20 left-[20%] h-1.5 w-1.5 rounded-full bg-yellow-300/80 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.4s' }} />
        <div className="absolute top-1/3 right-[18%] h-1 w-1 rounded-full bg-amber-200/80 animate-ping" style={{ animationDuration: '2.6s', animationDelay: '1s' }} />
        <div className="absolute bottom-28 left-[35%] h-1 w-1 rounded-full bg-yellow-200/80 animate-ping" style={{ animationDuration: '3.4s', animationDelay: '1.8s' }} />
        {/* A couple of slow-floating “champagne bubbles” */}
        <div className="absolute bottom-36 right-20 h-2 w-2 rounded-full bg-yellow-400/50 animate-[pulse_2.8s_ease-in-out_infinite]" />
        <div className="absolute top-40 left-16 h-2.5 w-2.5 rounded-full bg-amber-300/45 animate-[pulse_3.2s_ease-in-out_infinite_1s]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300 shadow-[0_0_0_1px_rgba(234,179,8,.08)_inset]">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
            Mining Luck Through Play
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            Utility Token{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Gaming
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-300">
            Gambino reimagines gaming as <strong>crypto mining with purpose</strong>. Cash converts into stable credits for gameplay,
            while jackpots release scarce GAMBINO tokens. Every play burns supply, strengthens scarcity, and drives long-term value.
          </p>

          {/* celebratory underline accent */}
          <div className="mt-8 mx-auto h-px w-44 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        {/* soft section halo */}
        <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(500px_220px_at_50%_0%,rgba(234,179,8,0.08),transparent_70%)]" />
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            How It <span className="text-yellow-500">Works</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Entertainment that builds wealth — for players, communities, and the network itself.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="relative">
            <div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-8 text-center backdrop-blur-sm shadow-[0_0_60px_-20px_rgba(234,179,8,0.15)]">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 border-2 border-blue-500/20">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cash to Credits</h3>
              <p className="text-neutral-400">
                Deposit cash to receive <strong>USD-pegged credits</strong>. These stable credits ensure consistent gameplay
                without the volatility of crypto markets.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
              <svg className="w-8 h-8 text-yellow-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-8 text-center backdrop-blur-sm shadow-[0_0_60px_-20px_rgba(234,179,8,0.15)]">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 border-2 border-yellow-500/20">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Play & Mine</h3>
              <p className="text-neutral-400">
                Each play burns tokens from the network supply. <strong>Lucky wins</strong> release scarce GAMBINO tokens,
                creating value through scarcity and entertainment.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
              <svg className="w-8 h-8 text-yellow-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-8 text-center backdrop-blur-sm shadow-[0_0_60px_-20px_rgba(234,179,8,0.15)]">
            <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border-2 border-green-500/20">
              <span className="text-2xl font-bold text-green-400">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Wealth</h3>
            <p className="text-neutral-400">
              Network effects drive token value while <strong>funding local projects</strong>. Every transaction strengthens
              both individual holdings and community prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="relative z-10 border-t border-neutral-900/80 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Not Gambling. <span className="text-yellow-500">Not Speculation.</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
              Gambino operates under a <strong>utility token framework</strong>, designed for entertainment
              and community building, not financial speculation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '/gold-utilities.png', title: 'Utility Tokens', desc: 'Provide network access, not investment returns' },
              { icon: '/gold-control.png', title: 'Stable Credits', desc: 'USD-pegged for consistent gameplay experience' },
              { icon: '/gold-file.png', title: 'Regulatory Compliant', desc: 'Built within legal frameworks from day one' },
              { icon: '/gold-community.png', title: 'Community Focus', desc: 'Revenue flows to local good causes and projects' }
            ].map((f) => (
              <div key={f.title} className="text-center rounded-xl border border-neutral-800/70 bg-neutral-950/80 p-6 backdrop-blur-sm hover:border-yellow-500/30 transition">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800/50 p-2">
                  <Image src={f.icon} alt={f.title} width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        {/* faint halo */}
        <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(420px_200px_at_50%_0%,rgba(234,179,8,0.06),transparent_70%)]" />
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Token <span className="text-yellow-500">Economics</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            A deflationary model where every play strengthens scarcity and network value.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/90 p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Supply Mechanics</h3>
            <div className="space-y-4">
              <Row left="Token Burns per Play" right="Variable" rightClass="text-yellow-400" />
              <Row left="Jackpot Token Release" right="Scarce" rightClass="text-yellow-400" />
              <Row left="Community Fund" right="15%" rightClass="text-yellow-400" />
              <Row left="Network Effect" right="Deflationary" rightClass="text-green-400" border={false} />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/90 p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Value Creation</h3>
            <div className="space-y-6">
              <Bullet title="🔥 Token Burns" copy="Every play burns tokens from circulation, creating scarcity" />
              <Bullet title="💰 Network Growth" copy="More players = more burns = increased token value" />
              <Bullet title="🏘️ Community Impact" copy="Local funding creates real-world utility and adoption" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20">
        {/* celebratory ring behind card */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_340px_at_50%_50%,rgba(234,179,8,0.10),transparent_75%)]" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/25 bg-gradient-to-br from-yellow-500/10 to-neutral-950/80 p-12 shadow-[0_0_120px_-20px_rgba(234,179,8,0.25)]">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-6">
              Ready to Start <span className="text-yellow-500">Mining Luck</span>?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join the utility token gaming revolution. Entertainment that builds wealth,
              strengthens communities, and rewards the lucky.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.gambino.gold"
                className="rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black hover:brightness-110 transition-all duration-300"
              >
                Launch Platform
              </a>
              <a
                href="/dao-governance"
                className="rounded-lg border border-neutral-600 px-8 py-4 font-semibold hover:border-yellow-500/50 transition-all duration-300"
              >
                Learn About DAO
              </a>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              * Utility token network for entertainment. Not gambling or financial advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

/* --- tiny helpers to keep markup tidy --- */
function Row({ left, right, rightClass = '', border = true }) {
  return (
    <div className={`flex justify-between items-center py-2 ${border ? 'border-b border-neutral-800' : ''}`}>
      <span className="text-neutral-300">{left}</span>
      <span className={`font-semibold ${rightClass}`}>{right}</span>
    </div>
  );
}

function Bullet({ title, copy }) {
  return (
    <div>
      <h4 className="font-semibold text-yellow-400 mb-2">{title}</h4>
      <p className="text-neutral-400 text-sm">{copy}</p>
    </div>
  );
}
