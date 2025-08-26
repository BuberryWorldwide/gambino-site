import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-dvh bg-black text-neutral-100">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(234,179,8,0.10),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-yellow-500">
              Farm Luck. Mine Destiny.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              Gambino Gold is a utility-token network that rewards luck, not wealth. 
              Play in-store, climb the leaderboard, and help direct funding to real community projects.
            </p>
            <div className="mt-10 flex gap-4">
              <a href="/utility-token-gaming" className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:brightness-110">
                How It Works
              </a>
              <a href="https://app.gambinocoin.gold" className="rounded-lg border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500">
                Launch App
              </a>
            </div>
            <div className="mt-6 text-xs text-neutral-500">
              * Utility token gaming. Not a gambling product. See Terms.
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="text-sm text-neutral-400">Live Snapshot</div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <div className="text-3xl font-extrabold text-yellow-500">7</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">States Online</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <div className="text-3xl font-extrabold text-yellow-500">310M</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Jackpot Pool</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <div className="text-3xl font-extrabold text-yellow-500">1,240</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Active Players</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <div className="text-3xl font-extrabold text-yellow-500">9.8</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Luck Index</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Utility Token Gaming', 'Credits peg to USD, jackpots pay in GG token.'],
            ['Luck-Based DAO', 'Top luck earns seats that steer good-cause funding.'],
            ['Store Leaderboards', 'Local rankings, weekly prizes, and community hype.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="text-lg font-semibold text-yellow-500">{title}</div>
              <div className="mt-2 text-neutral-400">{text}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/dao-governance" className="text-sm text-neutral-400 hover:text-white">
            Learn how governance works →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
