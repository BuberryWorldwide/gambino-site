'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px, hide if dismissed
      if (!isDismissed) {
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a
        href="https://app.gambino.gold/onboard"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-5 py-3
          bg-gradient-to-r from-yellow-500 to-amber-500
          hover:from-yellow-400 hover:to-amber-400
          text-black font-semibold text-sm
          rounded-full
          shadow-lg shadow-yellow-500/25
          hover:shadow-xl hover:shadow-yellow-500/30
          transform hover:scale-105
          transition-all duration-300
        "
      >
        Start Earning
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
      <button
        onClick={() => setIsDismissed(true)}
        className="
          p-2
          bg-neutral-800/80 hover:bg-neutral-700
          text-neutral-400 hover:text-white
          rounded-full
          transition-colors duration-200
        "
        aria-label="Dismiss"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
