import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export const metadata = {
  title: 'Gambino Gold | Proof-of-Luck Mining Infrastructure',
  description: 'Community-owned cryptocurrency mining infrastructure. Transparent, compliant blockchain technology for sustainable community wealth creation.',
  keywords: ['cryptocurrency', 'mining infrastructure', 'proof of luck', 'blockchain', 'community governance', 'utility tokens'],
  authors: [{ name: 'Gambino Holdings LLC' }],
  openGraph: {
    title: 'Gambino Gold | Proof-of-Luck Mining Infrastructure',
    description: 'Community-owned cryptocurrency mining infrastructure. Transparent, compliant blockchain technology for sustainable community wealth creation.',
    url: 'https://gambino.gold',
    siteName: 'Gambino Gold',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gambino Gold | Proof-of-Luck Mining Infrastructure',
    description: 'Community-owned cryptocurrency mining infrastructure. Transparent, compliant blockchain technology.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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