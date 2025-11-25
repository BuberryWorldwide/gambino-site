// src/app/styles/themeStyles.js

export const getThemeStyles = (isDark) => {
  return {
    // Layout & Backgrounds
    layout: {
      main: isDark 
        ? 'min-h-dvh relative overflow-hidden transition-colors duration-300 bg-black text-neutral-100'
        : 'min-h-dvh relative overflow-hidden transition-colors duration-300 bg-neutral-50 text-neutral-900',
      card: isDark 
        ? 'backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 hover:border-yellow-500/30 bg-neutral-900/50 transition-all duration-300'
        : 'backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 hover:border-yellow-600/50 bg-white/70 transition-all duration-300',
      cardLarge: isDark
        ? 'rounded-2xl p-8 border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10'
        : 'rounded-2xl p-8 border border-yellow-600/25 bg-gradient-to-r from-yellow-600/8 to-amber-600/8'
    },

    // Typography
    text: {
      primary: isDark ? 'text-white' : 'text-neutral-900',
      secondary: isDark ? 'text-neutral-300' : 'text-neutral-700',
      tertiary: isDark ? 'text-neutral-400' : 'text-neutral-600',
      accent: isDark ? 'text-yellow-400' : 'text-yellow-600',
      accentHover: isDark ? 'hover:text-yellow-300' : 'hover:text-yellow-700',
      gradient: isDark
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent'
        : 'bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent'
    },

    // Interactive Elements - SOLID COLORS ONLY
    buttons: {
      primary: isDark 
        ? 'rounded-xl px-8 py-4 text-lg font-bold bg-yellow-500 text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25'
        : 'rounded-xl px-8 py-4 text-lg font-bold bg-yellow-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/25',
      secondary: isDark 
        ? 'rounded-xl border border-yellow-500/50 bg-transparent px-8 py-4 text-lg font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10 hover:border-yellow-500'
        : 'rounded-xl border border-yellow-600/50 bg-transparent px-8 py-4 text-lg font-semibold text-yellow-600 transition-all duration-300 hover:bg-yellow-600/10 hover:border-yellow-600',
      small: isDark 
        ? 'rounded-lg px-6 py-3 font-semibold bg-yellow-500 text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25'
        : 'rounded-lg px-6 py-3 font-semibold bg-yellow-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/25'
    },

    // Badges & Indicators
    badges: {
      primary: isDark
        ? 'inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-4 py-2 text-sm text-yellow-400'
        : 'inline-flex items-center gap-2 rounded-full border border-yellow-600/40 bg-yellow-600/10 px-4 py-2 text-sm text-yellow-700',
      dot: isDark ? 'bg-yellow-500' : 'bg-yellow-600',
      success: isDark ? 'bg-green-500/20' : 'bg-green-500/10',
      info: isDark ? 'bg-blue-500/20' : 'bg-blue-500/10',
      warning: isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'
    },

    // List & Content Elements
    lists: {
      bullet: isDark ? 'bg-yellow-500' : 'bg-yellow-600'
    },

    // Icons & Graphics - SOLID COLORS ONLY
    icons: {
      primary: isDark 
        ? 'rounded-xl flex items-center justify-center bg-yellow-500'
        : 'rounded-xl flex items-center justify-center bg-yellow-600',
      secondary: isDark 
        ? 'rounded-xl flex items-center justify-center bg-amber-500'
        : 'rounded-xl flex items-center justify-center bg-amber-600'
    }
  };
};

// Background effects component - abstract gold ambient with floating shapes
export const BackgroundEffects = ({ isDark }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top right glow */}
      <div className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? 'bg-yellow-500/15' : 'bg-yellow-500/10'}`}></div>

      {/* Bottom left glow */}
      <div className={`absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-amber-600/12' : 'bg-amber-500/8'}`}></div>

      {/* Center subtle radial - draws focus */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 50% 30%, rgba(234, 179, 8, 0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 50% 30%, rgba(234, 179, 8, 0.04) 0%, transparent 60%)'
        }}
      ></div>

      {/* Floating abstract shapes */}
      {/* Ring - top left area */}
      <div
        className={`absolute top-[15%] left-[10%] w-32 h-32 rounded-full border ${isDark ? 'border-yellow-500/10' : 'border-yellow-600/8'}`}
      ></div>

      {/* Filled circle - right side mid */}
      <div
        className={`absolute top-[45%] right-[8%] w-20 h-20 rounded-full ${isDark ? 'bg-amber-500/5' : 'bg-amber-500/4'}`}
      ></div>

      {/* Small ring - bottom right */}
      <div
        className={`absolute bottom-[25%] right-[20%] w-16 h-16 rounded-full border ${isDark ? 'border-yellow-400/8' : 'border-yellow-600/6'}`}
      ></div>

      {/* Larger ring - left side lower */}
      <div
        className={`absolute top-[60%] left-[5%] w-48 h-48 rounded-full border ${isDark ? 'border-amber-500/6' : 'border-amber-600/5'}`}
      ></div>

      {/* Small filled - top center-right */}
      <div
        className={`absolute top-[20%] right-[30%] w-8 h-8 rounded-full ${isDark ? 'bg-yellow-500/8' : 'bg-yellow-500/6'}`}
      ></div>

      {/* Medium ring - bottom left area */}
      <div
        className={`absolute bottom-[15%] left-[25%] w-24 h-24 rounded-full border ${isDark ? 'border-yellow-500/8' : 'border-yellow-600/6'}`}
      ></div>

      {/* Vignette - subtle darkening at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)'
            : 'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.08) 100%)'
        }}
      ></div>
    </div>
  );
};