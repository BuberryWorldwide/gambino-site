export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm text-neutral-400 md:grid-cols-3">
        <div>
          <div className="text-yellow-500 font-bold">Gambino Gold</div>
          <p className="mt-3 max-w-xs">A utility-token gaming network that identifies lucky individuals and funds local good.</p>
        </div>
        <div>
          <div className="text-neutral-200 font-semibold">Learn</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-white" href="/utility-token-gaming">How it works</a></li>
            <li><a className="hover:text-white" href="/dao-governance">DAO Governance</a></li>
            <li><a className="hover:text-white" href="/leaderboard">Leaderboard</a></li>
          </ul>
        </div>
        <div>
          <div className="text-neutral-200 font-semibold">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-white" href="/legal/terms">Terms</a></li>
            <li><a className="hover:text-white" href="/legal/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-900 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Gambino Holdings. All rights reserved.
      </div>
    </footer>
  );
}
