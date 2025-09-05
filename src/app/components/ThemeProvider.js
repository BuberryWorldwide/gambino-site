'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Update theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Update document class for global theme
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  // Apply theme class on mount and change
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const value = {
    isDark,
    toggleTheme,
    // Helper functions for common theme-aware classes
    bg: {
      primary: isDark ? 'bg-black' : 'bg-stone-50',
      secondary: isDark ? 'bg-neutral-900' : 'bg-neutral-100',
      card: isDark ? 'bg-neutral-900/50' : 'bg-white/50',
      hover: isDark ? 'hover:bg-neutral-800' : 'hover:bg-neutral-200'
    },
    text: {
      primary: isDark ? 'text-white' : 'text-black',
      secondary: isDark ? 'text-neutral-300' : 'text-neutral-600',
      tertiary: isDark ? 'text-neutral-400' : 'text-neutral-500',
      hover: isDark ? 'hover:text-white' : 'hover:text-black'
    },
    border: {
      primary: isDark ? 'border-neutral-800' : 'border-neutral-200',
      secondary: isDark ? 'border-neutral-700' : 'border-neutral-300',
      hover: isDark ? 'hover:border-yellow-500/30' : 'hover:border-yellow-500/50'
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}