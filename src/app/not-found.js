// app/not-found.js
'use client';

import Link from 'next/link';
import { useTheme } from './components/ThemeProvider';
import { getThemeStyles, BackgroundEffects } from './styles/themeStyles';

export default function NotFound() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg mx-auto">
          
          {/* Simple 404 */}
          <div className={`text-6xl font-bold mb-6 ${styles.text.primary}`}>
            404
          </div>

          {/* Clean Message */}
          <h1 className={`text-3xl font-bold mb-4 ${styles.text.primary}`}>
            Page not found
          </h1>
          
          <p className={`mb-8 ${styles.text.secondary}`}>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          {/* Simple Button */}
          <Link href="/" className={`inline-block rounded border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors font-medium`}>
            Go home
          </Link>

        </div>
      </div>
    </main>
  );
}