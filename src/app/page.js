'use client';

import { useEffect, useState } from 'react'
import {
  Shield, Coins, Users, ArrowRight,         // already planned
  Target, BadgeCheck, Store, Scale, Sprout,  // section cards
  Rocket, CheckCircle2, CircleDot            // checks & small accents
} from 'lucide-react'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

// Format numbers for display (e.g., 1240 → "1,240" or 2100000 → "2.1M")
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return num.toLocaleString();
  }
  return num?.toString() || '0';
}

// Format currency
function formatCurrency(num) {
  if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return '$' + (num / 1000).toFixed(0) + 'K';
  }
  return '$' + (num || 0).toLocaleString();
}

export default function Home() {
  const [liveStats, setLiveStats] = useState({
    statesLive: 7,
    communityPool: 2100000,
    activeMembers: 1240,
    uptime: 94.7,
    monthlyJoins: 2840,
    // Additional stats we can pull from API
    totalHolders: null,
    circulatingSupply: null,
    loading: true
  });

  useEffect(() => {
    async function fetchLiveData() {
      try {
        // Fetch from your existing API endpoints
        const responses = await Promise.all([
          fetch(`${API_BASE}/api/holders/summary`, { cache: 'no-store' }).catch(() => null),
          fetch(`${API_BASE}/api/network/stats`, { cache: 'no-store' }).catch(() => null),
          fetch(`${API_BASE}/api/community/metrics`, { cache: 'no-store' }).catch(() => null)
        ]);

        let summary = null, networkStats = null, communityMetrics = null;

        // Parse responses safely
        if (responses[0]?.ok) {
          const summaryData = await responses[0].json();
          if (summaryData.success) summary = summaryData;
        }
        
        if (responses[1]?.ok) {
          const networkData = await responses[1].json();
          if (networkData.success) networkStats = networkData;
        }

        if (responses[2]?.ok) {
          const communityData = await responses[2].json();
          if (communityData.success) communityMetrics = communityData;
        }

        // Update state with real data or keep fallbacks
        setLiveStats(prev => ({
          ...prev,
          // From holders API
          totalHolders: summary?.holderCount || prev.activeMembers,
          circulatingSupply: summary?.circulating || null,
          
          // From network API
          statesLive: networkStats?.data?.activeStates || prev.statesLive,
          uptime: networkStats?.data?.uptimePercent || prev.uptime,
          
          // From community API  
          communityPool: communityMetrics?.data?.totalPoolValue || prev.communityPool,
          activeMembers: communityMetrics?.data?.activeLastMonth || summary?.holderCount || prev.activeMembers,
          monthlyJoins: communityMetrics?.data?.newMembersThisMonth || prev.monthlyJoins,
          
          loading: false
        }));

      } catch (error) {
        console.error('Failed to fetch live data:', error);
        setLiveStats(prev => ({ ...prev, loading: false }));
      }
    }

    fetchLiveData();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchLiveData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-dvh bg-black text-neutral-100 relative overflow-hidden">
      {/* Floating gold particles - MANY MORE */}
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

      {/* Background geometric shapes - MORE VISIBLE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large visible geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-xl"></div>
        
        {/* More visible grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Larger floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-amber-400/15 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-20 h-20 border-2 border-yellow-300/12 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* Subtle moving lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-neutral-900 z-10">
        {/* Enhanced background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(234,179,8,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(234,179,8,0.05)_0deg,transparent_60deg,rgba(234,179,8,0.05)_120deg,transparent_180deg)]" />
        
        {/* Floating gold elements specific to hero */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-amber-300/8 to-amber-500/4 rounded-full blur-xl animate-pulse delay-1000" style={{animationDuration: '4s'}}></div>
        
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Utility Token Network • Regulatory Compliant
            </div>
            
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
              Farm Luck.{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Mine Destiny.
              </span>
            </h1>
            
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              The world&rsquo;s first utility token gaming network that transforms luck into community wealth. 
              Where chance fuels prosperity, and every player has the power to shape their future.
            </p>
            
            <div className="mt-10 flex gap-4">
              <a 
                href="https://app.gambino.gold" 
                className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:brightness-110"
              >
                Join Network
              </a>
              <a 
                href="/utility-token-gaming" 
                className="rounded-lg border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Utility Token Model
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Regulatory Compliant
              </div>
            </div>
          </div>

          {/* Live Network Stats - NOW DYNAMIC */}
          <div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-neutral-400">Live Network</div>
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <div className={`h-2 w-2 rounded-full ${liveStats.loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 animate-pulse'}`}></div>
                  {liveStats.loading ? 'Loading...' : 'Active'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg border border-neutral-800 bg-black p-6">
                  <div className="text-3xl font-extrabold text-yellow-500">
                    {liveStats.loading ? '—' : liveStats.statesLive}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">States Live</div>
                </div>
                <div className="rounded-lg border border-neutral-800 bg-black p-6">
                  <div className="text-3xl font-extrabold text-yellow-500">
                    {liveStats.loading ? '—' : formatCurrency(liveStats.communityPool)}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Community Pool</div>
                </div>
                <div className="rounded-lg border border-neutral-800 bg-black p-6">
                  <div className="text-3xl font-extrabold text-yellow-500">
                    {liveStats.loading ? '—' : formatNumber(liveStats.activeMembers)}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Active Members</div>
                </div>
                <div className="rounded-lg border border-neutral-800 bg-black p-6">
                  <div className="text-3xl font-extrabold text-yellow-500">
                    {liveStats.loading ? '—' : `${liveStats.uptime}%`}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">Uptime</div>
                </div>
              </div>
              
              <div className="mt-4 rounded-lg bg-yellow-500/10 p-3 text-center">
                <p className="text-sm text-yellow-200">
                  <span className="font-semibold">
                    {liveStats.loading ? '—' : formatNumber(liveStats.monthlyJoins)}
                  </span> members joined this month
                </p>
              </div>

              {/* Additional Stats Row - Optional */}
              {liveStats.circulatingSupply && (
                <div className="mt-4 pt-4 border-t border-neutral-800">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="text-lg font-bold text-amber-400">
                        {formatNumber(liveStats.circulatingSupply)}
                      </div>
                      <div className="text-xs text-neutral-500">GG Circulating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-amber-400">
                        {formatNumber(liveStats.totalHolders)}
                      </div>
                      <div className="text-xs text-neutral-500">Total Holders</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="mx-auto max-w-6xl px-6 py-20 relative z-10">
        {/* Section background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-500/8 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-amber-400/6 to-transparent rounded-full blur-xl"></div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Solving Real <span className="text-yellow-500">Problems</span>
          </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Gambino is about access and innovation. Our platform creates new 
              opportunities for anyone to take part in growth, build prosperity, 
              and experience the next generation of financial technology—simple, 
              transparent, and built for long-term success.
            </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 relative">
          {/* Subtle connecting lines between cards */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full opacity-10">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(234, 179, 8)" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="rgb(234, 179, 8)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M 200 150 Q 400 100 600 150" stroke="url(#connectionGradient)" strokeWidth="1" fill="none"/>
              <path d="M 200 350 Q 400 300 600 350" stroke="url(#connectionGradient)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          
          {/* Card 1 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-yellow-500" />
              <div className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-semibold text-yellow-400">
                Non-Gaming
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">Utility Token Gaming</div>
            <div className="text-neutral-400">Not gambling. Not speculation. USD-pegged credits for consistent gameplay while GAMBINO tokens generate real value through scarcity and network effects.</div>
          </div>
          
          {/* Card 2 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <BadgeCheck className="w-6 h-6 text-yellow-500" />
              <div className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-semibold text-yellow-400">
                Transparent
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">Proof-of-Luck Governance</div>
            <div className="text-neutral-400">Voting power is tied to proof-of-luck, not wealth. Lucky players rise into DAO tiers and gain real influence over network direction and community funding.</div>
          </div>
          
          {/* Card 3 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <Store className="w-6 h-6 text-yellow-500" />
              <div className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-semibold text-yellow-400">
                Real Impact
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">Wealth That Stays Local</div>
            <div className="text-neutral-400">Partner stores become hubs of community wealth creation. Every participating location attracts foot traffic while sharing in network rewards and local prosperity.</div>
          </div>
          
          {/* Card 4 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <Scale className="w-6 h-6 text-green-400" />
              <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                SEC Framework
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">SEC-Aligned Framework</div>
            <div className="text-neutral-400">Engineered to operate within U.S. legal frameworks. Utility-based tokens, not securities. We work with regulators, not against them.</div>
          </div>
          
          {/* Card 5 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <Sprout className="w-6 h-6 text-yellow-500" />
              <div className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-semibold text-yellow-400">
                Proven Impact
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">Community Wealth Building</div>
            <div className="text-neutral-400">Every transaction flows into community gardens, nonprofit funding, and DAO scout stipends. Gambino builds cycles of prosperity where luck becomes resilience.</div>
          </div>
          
          {/* Card 6 */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between mb-4">
              <Rocket className="w-6 h-6 text-blue-400" />
              <div className="rounded-full bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-400">
                Enterprise Grade
              </div>
            </div>
            <div className="text-lg font-semibold text-yellow-500 mb-2">Mining Luck Through Play</div>
            <div className="text-neutral-400">Powered by Solana for speed and transparency. Entertainment that builds wealth — for players, communities, and the network itself through proven blockchain architecture.</div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="border-t border-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Built for <span className="text-yellow-500">Legitimacy</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              From inception, Gambino was structured as a utility token network. 
              We work to ensure transparency, fairness, and sustainable growth within legal frameworks.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {/* item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Utility Token Framework</h4>
                  <p className="mt-1 text-neutral-400">Our tokens provide utility within our gaming ecosystem, not investment returns.</p>
                </div>
              </div>
              {/* item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Anti-Money Laundering</h4>
                  <p className="mt-1 text-neutral-400">KYC/AML procedures and transaction monitoring solutions.</p>
                </div>
              </div>
              {/* item 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Blockchain Transparency</h4>
                  <p className="mt-1 text-neutral-400">Every deposit, token issue, and jackpot payout is tracked on blockchain, reported transparently, and aligned with compliance standards.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Legal Documentation</h3>
              <div className="space-y-3">
                <a href="/legal/terms" className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 hover:border-yellow-500/30 transition-colors">
                  <div>
                    <div className="font-semibold text-white">Terms of Service</div>
                    <div className="text-sm text-neutral-400">Complete terms and conditions</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400" />
                </a>
                
                <a href="/legal/privacy" className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 hover:border-yellow-500/30 transition-colors">
                  <div>
                    <div className="font-semibold text-white">Privacy Policy</div>
                    <div className="text-sm text-neutral-400">Data handling and user privacy</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE MEMBERSHIP CTA */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_50%,rgba(234,179,8,0.08),transparent_70%)]" />
        
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-neutral-950 p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-semibold text-yellow-400">
              <CircleDot className="h-3.5 w-3.5 text-yellow-400" />
              Limited Beta Access
            </div>
            
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
              Join the <span className="text-yellow-500">Pioneer</span> Network
            </h2>
            <p className="text-lg text-neutral-300 mb-6">
              Be among the first to access our exclusive member platform. 
              Shape the future of community wealth while the network is still growing.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="https://app.gambino.gold"
                className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:brightness-110"
              >
                Get Early Access
              </a>
              <a 
                href="/utility-token-gaming"
                className="rounded-lg border border-neutral-600 px-6 py-3 font-semibold hover:border-yellow-500/50"
              >
                Learn More
              </a>
            </div>
            
            <p className="mt-4 text-sm text-neutral-500">
              * Utility token gaming platform. Not gambling. See our compliance documentation.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
