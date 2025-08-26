'use client';

import { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'


const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

export default function LeaderboardPage() {
  const [summary, setSummary] = useState(null);
  const [rows, setRows] = useState([]);
  const [pools, setPools] = useState([]);
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const ac = new AbortController();
    let mounted = true;

    async function load() {
      try {
        setErr('');
        setLoading(true);

        const [sumRes, topRes] = await Promise.all([
          fetch(`${API_BASE}/api/holders/summary`, { cache: 'no-store', signal: ac.signal }),
          fetch(`${API_BASE}/api/holders/top?limit=${limit}`, { cache: 'no-store', signal: ac.signal }),
        ]);

        if (!sumRes.ok) {
          const text = await sumRes.text().catch(() => '');
          throw new Error(`summary ${sumRes.status}: ${text || sumRes.statusText}`);
        }
        if (!topRes.ok) {
          const text = await topRes.text().catch(() => '');
          throw new Error(`top ${topRes.status}: ${text || topRes.statusText}`);
        }

        const sum = await sumRes.json();
        const top = await topRes.json();

        if (!mounted) return;
        if (!sum.success || !top.success) {
          throw new Error(sum.error || top.error || 'Failed to load leaderboard');
        }

        setSummary(sum);
        setRows(top.topHolders || []);
        setPools(top.systemPools || []);
      } catch (e) {
        if (e?.name !== 'AbortError') {
          setErr(e.message || 'Failed to load leaderboard');
        }
      } finally {
        mounted && setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
      ac.abort();
    };
  }, [limit]);

    return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Floating gold particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large floating particles */}
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

        {/* Center area particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-32 -translate-y-16 w-2 h-2 bg-yellow-400/50 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-1/2 left-1/2 transform translate-x-24 translate-y-20 w-3 h-3 bg-amber-400/45 rounded-full animate-pulse delay-4500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-48 translate-y-32 w-2.5 h-2.5 bg-yellow-300/55 rounded-full animate-pulse delay-1800"></div>

        {/* More scattered particles */}
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-yellow-500/50 rounded-full animate-pulse delay-900"></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-amber-300/45 rounded-full animate-pulse delay-3200"></div>
        <div className="absolute top-48 left-1/2 w-2 h-2 bg-yellow-400/55 rounded-full animate-pulse delay-1600"></div>
        <div className="absolute bottom-48 right-2/3 w-2.5 h-2.5 bg-amber-500/50 rounded-full animate-pulse delay-2200"></div>

        {/* Floating sparkles */}
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-200/70 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-amber-200/70 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-16 right-1/2 w-1 h-1 bg-yellow-100/80 rounded-full animate-ping" style={{animationDuration: '3.5s', animationDelay: '2.1s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-amber-100/75 rounded-full animate-ping" style={{animationDuration: '2.8s', animationDelay: '0.8s'}}></div>
      </div>

      {/* Background geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large visible geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-xl"></div>

        {/* Visible grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)',
              backgroundSize: '80px 80px',
            }}
          ></div>
        </div>

        {/* Larger floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-amber-400/15 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-20 h-20 border-2 border-yellow-300/12 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>

        {/* Subtle moving lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
      </div>

      {/* CONTENT ABOVE BACKGROUND */}
      <div className="mx-auto max-w-6xl px-6 py-12 relative z-10">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Top Holders <span className="text-yellow-500">(Circulating Supply)</span>
          </h1>
          <p className="mt-3 text-neutral-400">
            A transparent look at how tokens are held across the community. Circulating supply excludes network-managed pools.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <CardStat label="Circulating Supply" value={
            summary ? formatNumber(summary.circulating) + ' GG' : '—'
          } />
          <CardStat label="Holder Count" value={
            summary ? formatNumber(summary.holderCount) : '—'
          } />
          <CardStat label="Top 10 Share" value={
            summary && Number.isFinite(summary.top10SharePct) ? `${summary.top10SharePct.toFixed(2)}%` : '—'
          } />
          <CardStat label="System Pools" value={pools?.length || 0} />
        </section>

        {/* Controls */}
        <div className="mb-4 flex items-center gap-3">
          <label className="text-sm text-neutral-400">Rows:</label>
          <select
            className="rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm"
            value={limit}
            onChange={e => setLimit(Number(e.target.value))}
          >
            {[25, 50, 100, 200].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Error / Loading */}
        {err && (
          <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200">
            {err}
          </div>
        )}
        {loading && <LoadingSkeleton />}

        {/* Top Holders Table */}
        {!loading && !err && (
          <section className="mb-12 overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-900/60 text-neutral-300">
                <tr className="text-left">
                  <Th>Rank</Th>
                  <Th>Display</Th>
                  <Th>Type</Th>
                  <Th className="text-right">Holdings (GG)</Th>
                  <Th className="text-right">% of Circulating</Th>
                  <Th>Member Since</Th>
                  <Th>On-chain</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={`${r.rank}-${r.wallet || r.display}`} className="border-t border-neutral-900 hover:bg-neutral-900/40">
                    <Td>{r.rank}</Td>
                    <Td className="font-medium">{r.display}</Td>
                    <Td className="text-neutral-400">{r.type}</Td>
                    <Td className="text-right">{formatNumber(r.balanceGG)}</Td>
                    <Td className="text-right">{Number.isFinite(r.pctOfCirculating) ? r.pctOfCirculating.toFixed(2) : '0.00'}%</Td>
                    <Td className="text-neutral-400">{formatDate(r.memberSince)}</Td>
                    <Td>
                      {isLikelySolAddress(r.wallet) ? (
                        <a
                          href={`https://explorer.solana.com/address/${r.wallet}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 underline decoration-dotted"
                        >
                          View
                        </a>
                      ) : <span className="text-neutral-500">—</span>}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </main>
  );

}

// --- utils (JS only, no TS annotations) ---
function CardStat({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="text-xs uppercase tracking-wide text-neutral-400">{label}</div>
      <div className="mt-2 text-2xl font-extrabold text-white">{value}</div>
    </div>
  );
}

function Th({ children, className = '' }) {
  return <th className={`px-4 py-3 text-xs uppercase tracking-wide ${className}`}>{children}</th>;
}
function Td({ children, className = '' }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
}

function formatNumber(n) {
  if (n === null || n === undefined) return '—';
  return Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(n);
}
function formatDate(d) {
  if (!d) return '—';
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString();
}
function prettyLabel(s) {
  return String(s || '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
function maskAddress(addr) {
  if (!addr) return '—';
  return `${addr.slice(0, 4)}…${addr.slice(-4)}`;
}
function isLikelySolAddress(addr) {
  return !!addr && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr);
}

function LoadingSkeleton() {
  return (
    <div className="mb-12 rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="h-5 w-40 bg-neutral-800 rounded mb-4" />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 py-3 border-t border-neutral-900">
          <div className="h-4 w-8 bg-neutral-800 rounded" />
          <div className="h-4 w-40 bg-neutral-800 rounded" />
          <div className="ml-auto h-4 w-24 bg-neutral-800 rounded" />
        </div>
      ))}
    </div>
  );
}
