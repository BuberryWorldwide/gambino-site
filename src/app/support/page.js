'use client';

import Link from 'next/link'
import { useState } from 'react'
import { 
  Mail, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  User,
  Wallet,
  HelpCircle
} from 'lucide-react'
import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function SupportPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Visit app.gambino.gold to create your account and set up your wallet. Then find a participating venue with Gambino Gold mining stations to start mining."
    },
    {
      question: "How do I create a wallet?",
      answer: "When you sign up on our platform, a wallet is automatically generated for you. You'll receive your wallet details and can access it through your account dashboard."
    },
    {
      question: "I forgot my login information, what do I do?",
      answer: "Use the password reset option on the login page, or email us at support@gambino.gold with your account details and we&apos;ll help you recover access."
    },
    {
      question: "Where can I find mining stations?",
      answer: "Check the venue locator on our app or website to find participating locations near you. We&apos;re currently expanding to new venues regularly."
    },
    {
      question: "How do mining stations work?",
      answer: "Simply scan the QR code or log into your account at any mining station, insert cash to start mining, and earn tokens based on your mining activity."
    },
    {
      question: "What can I do with my tokens?",
      answer: "Tokens can be used for network participation, cashed out at participating venues, or transferred to your personal wallet for other uses."
    }
  ];

  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* Additional Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32 ${
          isDark ? 'opacity-100' : 'opacity-30'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24 ${
          isDark ? 'opacity-100' : 'opacity-30'
        }`}></div>
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.15]' : 'opacity-[0.05]'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className={styles.text.primary}>Need</span>{" "}
              <span className={styles.text.gradient}>Help?</span>
            </h1>
            
            <p className={`text-xl max-w-2xl mx-auto mb-8 ${styles.text.secondary}`}>
              Get support for your Gambino Gold account, wallet setup, and mining questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className={styles.layout.cardLarge}>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-600/20'}`}>
                <Mail className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className={`text-2xl font-bold mb-4 ${styles.text.primary}`}>
                Contact Support
              </h2>
              <p className={`mb-6 ${styles.text.secondary}`}>
                Have questions? Send us an email and we'll get back to you.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="mailto:support@gambino.gold"
                  className="group relative overflow-hidden rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@gambino.gold</span>
                </a>
                <p className={`text-sm ${styles.text.tertiary}`}>
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${styles.text.primary}`}>
              Getting <span className={styles.text.accent}>Started</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className={`${styles.layout.card} text-center group hover:scale-[1.02] transition-all duration-300`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-600/20 group-hover:bg-blue-600/30'} transition-colors`}>
                <User className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>Create Account</h3>
              <p className={`mb-6 ${styles.text.secondary}`}>
                Sign up on our platform to get started with Gambino Gold mining.
              </p>
              <a
                href="https://app.gambino.gold"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Go to App <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className={`${styles.layout.card} text-center group hover:scale-[1.02] transition-all duration-300`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20 group-hover:bg-green-500/30' : 'bg-green-600/20 group-hover:bg-green-600/30'} transition-colors`}>
                <Wallet className="w-8 h-8 text-green-500" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>Setup Wallet</h3>
              <p className={`mb-6 ${styles.text.secondary}`}>
                Your wallet is automatically created when you sign up. Access it through your dashboard.
              </p>
              <Link href="/utility-token-gaming" className="border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple FAQ */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${styles.text.primary}`}>
              Common <span className={styles.text.accent}>Questions</span>
            </h2>
          </div>

          <div className={styles.layout.card}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden ${isDark ? 'border-neutral-700' : 'border-neutral-200'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 text-left flex items-center justify-between ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-neutral-50'} transition-colors`}
                  >
                    <span className={`font-semibold ${styles.text.primary}`}>{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronDown className={`w-5 h-5 ${styles.text.secondary}`} />
                    ) : (
                      <ChevronRight className={`w-5 h-5 ${styles.text.secondary}`} />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className={`px-6 pb-4 ${styles.text.secondary}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className={`${styles.layout.card} text-center`}>
            <HelpCircle className={`w-12 h-12 mx-auto mb-4 text-yellow-500`} />
            <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>
              Still Need Help?
            </h3>
            <p className={`mb-6 ${styles.text.secondary}`}>
              For venue-related questions or technical issues with equipment, 
              contact our implementation partner.
            </p>
            <a 
              href="https://vdv.gold" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact VDV <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}