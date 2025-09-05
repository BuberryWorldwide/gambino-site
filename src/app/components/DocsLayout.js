// app/components/DocsLayout.js
'use client';

import { useTheme } from './ThemeProvider'

export default function DocsLayout({ children, title }) {
  const { isDark } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-neutral-900 text-neutral-100' 
        : 'bg-white text-neutral-900'
    }`}>
      {/* Subtle ambient background - only visible in dark mode */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 right-[-10%] w-[38rem] h-[38rem] bg-gradient-to-br from-yellow-500/8 to-amber-600/4 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[32rem] h-[32rem] bg-gradient-to-tr from-amber-500/8 to-yellow-500/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(234,179,8,0.15) 1px, transparent 0)',
                backgroundSize: '64px 64px'
              }}
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {title && (
          <header className={`mb-12 pb-6 border-b ${
            isDark ? 'border-neutral-700' : 'border-neutral-200'
          }`}>
            <h1 className={`text-4xl font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              {title}
            </h1>
          </header>
        )}
        
        <div className={`prose prose-lg max-w-none ${
          isDark 
            ? 'prose-invert prose-headings:text-white prose-p:text-neutral-200 prose-strong:text-white prose-li:text-neutral-200 prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:text-yellow-300' 
            : 'prose-neutral prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-neutral-900 prose-li:text-neutral-700 prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:text-yellow-700'
        }`}>
          {children}
        </div>
      </div>
    </main>
  );
}