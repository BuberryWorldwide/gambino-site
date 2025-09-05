import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export const metadata = {
  title: 'Gambino Gold — Farm Luck. Mine Destiny.',
  description: 'Cryptocurrency mining infrastructure technology that enables community wealth creation through transparent, compliant token mining operations.',
  icons: {
    icon: '/favicon.ico',            // default favicon
    shortcut: '/favicon.ico',        // legacy browsers
    apple: '/apple-touch-icon.png',  // for iOS home screens (optional, if you add one)
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black dark:bg-black light:bg-white text-neutral-100 dark:text-neutral-100 light:text-black transition-colors duration-300">
        <ThemeProvider>
          <Nav />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}