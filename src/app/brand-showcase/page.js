'use client';

import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'
import { useState } from 'react'

export default function ArtShowcase() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const PatternCard = ({ children, title, patternStyle, className = "" }) => (
    <div 
      className={`h-64 rounded-2xl overflow-hidden relative cursor-pointer transition-transform hover:scale-105 ${className}`}
      style={patternStyle}
      onClick={() => setSelectedPattern({ title, patternStyle, className })}
    >
      {children}
      <div className="absolute bottom-4 left-4 text-yellow-400 font-bold">{title}</div>
      <div className="absolute top-4 right-4 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-yellow-400 text-sm hover:bg-black/70">
        ⚡
      </div>
    </div>
  );

  const Modal = () => {
    if (!selectedPattern) return null;

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPattern(null)}>
        <div className="relative max-w-6xl w-full">
          <button 
            className="absolute -top-12 right-0 text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setSelectedPattern(null)}
          >
            ✕ Close
          </button>
          <div 
            className={`w-full h-[80vh] rounded-2xl overflow-hidden relative ${selectedPattern.className}`}
            style={selectedPattern.patternStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedPattern.children}
            <div className="absolute bottom-6 left-6 text-yellow-400 font-bold text-3xl">{selectedPattern.title}</div>
            <div className="absolute top-6 right-6 flex gap-3">
              <button 
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                onClick={() => {
                  alert(`Right-click on the pattern and select "Save As" to download ${selectedPattern.title}`);
                }}
              >
                💾 Save Pattern
              </button>
            </div>
            <div className="absolute top-6 left-6 bg-black/50 text-yellow-400 px-4 py-2 rounded-lg text-sm">
              Click and drag to move • Right-click to save
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* Header */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 text-center">
        <h1 className={`text-4xl font-extrabold mb-8 ${styles.text.primary}`}>
          GAMBINO <span className={styles.text.gradient}>Art Gallery</span>
        </h1>
        <p className={`text-lg mb-8 ${styles.text.secondary}`}>
          Background designs and patterns for marketing materials • Click any pattern to enlarge
        </p>
      </section>

      {/* Luxury Premium Designs */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <h2 className={`text-2xl font-bold mb-6 ${styles.text.primary}`}>Luxury Premium Aesthetics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PatternCard
            title="Luxury Gold"
            patternStyle={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #B8860B 100%)',
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Diamond Luxury"
            patternStyle={{ background: '#000' }}
            className="bg-black"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(234, 179, 8, 0.2) 40%, rgba(234, 179, 8, 0.2) 60%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(234, 179, 8, 0.1) 40%, rgba(234, 179, 8, 0.1) 60%, transparent 60%)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Velvet Premium"
            patternStyle={{
              background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)',
              backgroundSize: '100px 60px'
            }}></div>
          </PatternCard>
        </div>
      </section>

      {/* Digital Aesthetics */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <h2 className={`text-2xl font-bold mb-6 ${styles.text.primary}`}>Digital Aesthetics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PatternCard
            title="Cyber Grid"
            patternStyle={{ background: '#000' }}
            className="bg-black"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
          </PatternCard>

          <PatternCard
            title="Hex Pattern"
            patternStyle={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 30px 30px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Circuit Tech"
            patternStyle={{ background: '#1f2937' }}
            className="bg-gray-900"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(234, 179, 8, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(234, 179, 8, 0.4) 1px, transparent 1px),
                linear-gradient(45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%, transparent 75%, rgba(234, 179, 8, 0.1) 75%)
              `,
              backgroundSize: '20px 20px, 20px 20px, 40px 40px'
            }}></div>
          </PatternCard>
        </div>
      </section>

      {/* Geometric Patterns */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <h2 className={`text-2xl font-bold mb-6 ${styles.text.primary}`}>Geometric Patterns</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PatternCard
            title="Art Deco"
            patternStyle={{
              background: 'linear-gradient(45deg, #000 0%, #1a1a1a 50%, #000 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, 
                  transparent 0px, 
                  transparent 20px, 
                  rgba(234, 179, 8, 0.3) 20px, 
                  rgba(234, 179, 8, 0.3) 22px,
                  transparent 22px,
                  transparent 40px,
                  rgba(234, 179, 8, 0.1) 40px,
                  rgba(234, 179, 8, 0.1) 42px
                )
              `
            }}></div>
          </PatternCard>

          <PatternCard
            title="Modern Geo"
            patternStyle={{ background: '#000' }}
            className="bg-black"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(30deg, rgba(234, 179, 8, 0.2) 50%, transparent 50%),
                linear-gradient(150deg, rgba(245, 158, 11, 0.1) 50%, transparent 50%)
              `,
              backgroundSize: '60px 60px, 40px 40px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Crystalline"
            patternStyle={{
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  rgba(234, 179, 8, 0.2) 60deg, 
                  transparent 120deg,
                  rgba(234, 179, 8, 0.1) 180deg,
                  transparent 240deg,
                  rgba(234, 179, 8, 0.2) 300deg,
                  transparent 360deg
                )
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </PatternCard>
        </div>
      </section>

      {/* Upscale Club Aesthetics */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <h2 className={`text-2xl font-bold mb-6 ${styles.text.primary}`}>Upscale Club Aesthetics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PatternCard
            title="Neon Glow"
            patternStyle={{ background: '#000' }}
            className="bg-black"
          >
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at center, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0.1) 30%, transparent 70%)',
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, rgba(234, 179, 8, 0.8) 49%, rgba(234, 179, 8, 0.8) 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(234, 179, 8, 0.6) 49%, rgba(234, 179, 8, 0.6) 51%, transparent 52%)
              `,
              backgroundSize: '100px 100px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Velvet Club"
            patternStyle={{
              background: 'linear-gradient(90deg, #2d1b1b 0%, #1a1a1a 50%, #2d1b1b 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(90deg,
                  rgba(234, 179, 8, 0.1) 0px,
                  rgba(234, 179, 8, 0.1) 2px,
                  transparent 2px,
                  transparent 20px
                )
              `
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </PatternCard>

          <PatternCard
            title="Champagne"
            patternStyle={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
            }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(234, 179, 8, 0.4) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
                radial-gradient(circle at 40% 70%, rgba(234, 179, 8, 0.2) 3px, transparent 3px),
                radial-gradient(circle at 70% 80%, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 80px 80px, 120px 120px, 60px 60px'
            }}></div>
          </PatternCard>
        </div>
      </section>

      {/* Crypto/Tech Patterns */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <h2 className={`text-2xl font-bold mb-6 ${styles.text.primary}`}>Crypto Tech Patterns</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PatternCard
            title="Blockchain"
            patternType="blockchain"
            patternStyle={{ background: '#0f172a' }}
            className="bg-slate-900"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '25px 25px'
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 12.5px 12.5px, rgba(234, 179, 8, 0.5) 2px, transparent 2px)
              `,
              backgroundSize: '25px 25px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Digital Matrix"
            patternType="digital-matrix"
            patternStyle={{ background: '#000' }}
            className="bg-black"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(234, 179, 8, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(234, 179, 8, 0.2) 1px, transparent 1px),
                linear-gradient(45deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '15px 15px, 15px 15px, 30px 30px'
            }}></div>
          </PatternCard>

          <PatternCard
            title="Holographic"
            patternType="holographic"
            patternStyle={{ background: '#1f2937' }}
            className="bg-gray-900"
          >
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(45deg, 
                  rgba(234, 179, 8, 0.2) 0%, 
                  rgba(245, 158, 11, 0.1) 25%, 
                  rgba(234, 179, 8, 0.3) 50%, 
                  rgba(245, 158, 11, 0.1) 75%, 
                  rgba(234, 179, 8, 0.2) 100%
                )
              `,
              backgroundSize: '60px 60px',
              animation: 'slide 8s linear infinite'
            }}></div>
          </PatternCard>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-60px); }
          100% { transform: translateX(60px); }
        }
      `}</style>

      <Modal />
    </main>
  )
}