'use client';

import { useEffect, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

export default function LeaderboardPage() {
  const [summary, setSummary] = useState(null);
  const [rows, setRows] = useState([]);
  const [pools, setPools] = useState([]);
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const [sumRes, topRes] = await Promise.all([
          fetch(`${API_BASE}/api/holders/summary`, { cache: 'no-store' }),
          fetch(`${API_BASE}/api/holders/top?limit=${limit}`, { cache: 'no-store' }),
        ]);
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
        setErr(e.message || 'Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [limit]);

  return (
    <main className="min-h-dvh bg-black text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
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
            summary ? `${summary.top10SharePct?.toFixed(2)}%` : '—'
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
                    <Td className="text-right">{r.pctOfCirculating?.toFixed(4)}%</Td>
                    <Td className="text-neutral-400">{formatDate(r.memberSince)}</Td>
                    <Td>
                      {r.wallet ? (
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

        {/* System Pools Panel */}
        {!loading && !err && (
          <section>
            <h2 className="mb-4 text-xl font-bold">System Pools (Transparency)</h2>
            <p className="mb-4 text-neutral-400 text-sm">
              Network-managed accounts that fund jackpots, operations, and community programs.
              Shown for transparency; excluded from rankings.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pools.map((p) => (
                <div key={p.wallet} className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">{prettyLabel(p.label)}</div>
                    <a
                      href={`https://explorer.solana.com/address/${p.wallet}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-yellow-400 hover:text-yellow-300 underline decoration-dotted"
                    >
                      View
                    </a>
                  </div>
                  <div className="mt-2 text-neutral-400 text-xs">{maskAddress(p.wallet)}</div>
                  <div className="mt-4 text-2xl font-extrabold text-yellow-500">
                    {formatNumber(p.balanceGG)} <span className="text-sm text-neutral-400">GG</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

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
