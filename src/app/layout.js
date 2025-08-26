import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export const metadata = {
  title: 'Gambino Gold — Farm Luck. Mine Destiny.',
  description: 'Utility-token gaming network that identifies lucky individuals and funds local good.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className="text-neutral-100">
        <Nav />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
