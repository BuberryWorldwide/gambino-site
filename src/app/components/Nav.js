export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-extrabold tracking-tight text-yellow-500">Gambino Gold</a>
        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="/utility-token-gaming" className="hover:text-white">Utility Token Gaming</a>
          <a href="/luck-farming" className="hover:text-white">Luck Farming</a>
          <a href="/dao-governance" className="hover:text-white">DAO</a>
          <a href="/leaderboard" className="hover:text-white">Leaderboard</a>
          <a href="/legal/terms" className="hover:text-white">Terms</a>
          <a href="/legal/privacy" className="hover:text-white">Privacy</a>
        </nav>
        <a
          href="https://app.gambino.gold"
          className="rounded-lg border border-yellow-500 px-4 py-2 text-sm font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          Sign In
        </a>
      </div>
    </header>
  );
}
