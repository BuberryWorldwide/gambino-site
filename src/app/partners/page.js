'use client';

import Link from 'next/link'
import { CheckCircle2, Users, MapPin, ArrowRight, Building2, Handshake, Zap } from 'lucide-react'
import { useTheme } from '../components/ThemeProvider'
import { getThemeStyles, BackgroundEffects } from '../styles/themeStyles'

export default function PartnersPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);
  
  return (
    <main className={styles.layout.main}>
      <BackgroundEffects isDark={isDark} />
      
      {/* Additional Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large gradient blobs */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/12 to-amber-600/8 rounded-full blur-3xl transform translate-x-32 -translate-y-32 ${
          isDark ? 'opacity-100' : 'opacity-30'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-600/15 to-yellow-500/8 rounded-full blur-3xl transform -translate-x-24 translate-y-24 ${
          isDark ? 'opacity-100' : 'opacity-30'
        }`}></div>
        <div className={`absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-2xl ${
          isDark ? 'opacity-100' : 'opacity-40'
        }`}></div>
        <div className={`absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-xl ${
          isDark ? 'opacity-100' : 'opacity-50'
        }`}></div>
        
        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.15]' : 'opacity-[0.05]'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Animated geometric shapes */}
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 border rounded-lg rotate-45 animate-spin ${
          isDark ? 'border-yellow-500/20' : 'border-yellow-600/15'
        }`} style={{animationDuration: '25s'}}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-24 h-24 border rounded-full animate-pulse ${
          isDark ? 'border-amber-400/15' : 'border-amber-500/10'
        }`} style={{animationDuration: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className={styles.badges.primary}>
              <div className={`h-2 w-2 rounded-full ${styles.badges.success}`}></div>
              Licensed • Professional • Nationwide
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className={styles.text.primary}>Partner with</span>{" "}
              <span className={styles.text.gradient}>Gambino Gold</span>
            </h1>
            
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${styles.text.secondary}`}>
              Join our network of implementation partners and venues bringing cryptocurrency mining 
              infrastructure to communities nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#venue-partners" className={styles.buttons.primary}>
                <span className="relative z-10">Venue Partnership</span>
                <Building2 className="w-5 h-5" />
              </Link>
              <Link href="#implementation-partners" className={styles.buttons.secondary}>
                Implementation Partner <Handshake className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="relative z-10 py-20" id="partnership-models">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${styles.text.primary}`}>
              Two Ways to <span className={styles.text.accent}>Partner</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${styles.text.secondary}`}>
              Whether you&apos;re a venue looking to host our technology or a contractor wanting to 
              deploy it, we have partnership opportunities for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Venue Partners */}
            <div id="venue-partners" className={styles.layout.card}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-yellow-500" />
                <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Venue Partners</h3>
              </div>
              
              <p className={`mb-6 ${styles.text.secondary}`}>
                Restaurants, bars, entertainment venues, and retail locations that host Gambino Gold 
                mining infrastructure to create new revenue streams and attract customers.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className={`font-semibold mb-3 ${styles.text.primary}`}>What You Get:</h4>
                {[
                  "Revenue sharing from customer mining activity",
                  "Equipment provided and maintained at no cost",
                  "Increased customer engagement and visit duration",
                  "Professional installation and ongoing support",
                  "Marketing materials and promotional support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={styles.text.secondary}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className={`font-semibold mb-3 ${styles.text.primary}`}>Requirements:</h4>
                <ul className={`space-y-2 text-sm ${styles.text.tertiary}`}>
                  <li>• Valid business license and insurance</li>
                  <li>• Space for 1-2 mining stations (arcade game size)</li>
                  <li>• Reliable internet connection</li>
                  <li>• Customer-facing location</li>
                  <li>• Commitment to operational procedures</li>
                </ul>
              </div>
            </div>

            {/* Implementation Partners */}
            <div id="implementation-partners" className={styles.layout.card}>
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-8 h-8 text-yellow-500" />
                <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Implementation Partners</h3>
              </div>
              
              <p className={`mb-6 ${styles.text.secondary}`}>
                Technical contractors and business development professionals who install, operate, 
                and manage Gambino Gold infrastructure across multiple venue locations.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className={`font-semibold mb-3 ${styles.text.primary}`}>What You Get:</h4>
                {[
                  "Installation fees for new venue deployments",
                  "Ongoing commission from venue operations",
                  "Technical support and training programs",
                  "Exclusive territory licensing opportunities",
                  "Professional business development framework"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={styles.text.secondary}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className={`font-semibold mb-3 ${styles.text.primary}`}>Requirements:</h4>
                <ul className={`space-y-2 text-sm ${styles.text.tertiary}`}>
                  <li>• Business licensing and liability insurance</li>
                  <li>• Technical installation capabilities</li>
                  <li>• Sales and relationship management experience</li>
                  <li>• Compliance with operational standards</li>
                  <li>• Independent contractor status</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${styles.text.primary}`}>
              How Partnership <span className={styles.text.accent}>Works</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${styles.text.secondary}`}>
              Our streamlined process gets partners up and running quickly with full support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20' : 'bg-green-600/20'}`}>
                <Users className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>1. Connect</h3>
              <p className={styles.text.secondary}>
                Reach out through our implementation partners or contact us directly. 
                We&apos;ll assess your location and partnership goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'}`}>
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>2. Setup</h3>
              <p className={styles.text.secondary}>
                Professional installation of mining infrastructure, staff training, 
                and system testing to ensure everything runs smoothly.
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-purple-600/20'}`}>
                <MapPin className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${styles.text.primary}`}>3. Launch</h3>
              <p className={styles.text.secondary}>
                Go live with ongoing support, regular maintenance, and continuous 
                optimization to maximize performance and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Implementation Partner */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className={styles.layout.cardLarge}>
            <h2 className={`text-2xl font-bold mb-4 text-center ${styles.text.primary}`}>
              Ready to Get Started?
            </h2>
            <p className={`mb-6 text-center ${styles.text.secondary}`}>
              Connect with our implementation partner to explore venue hosting opportunities 
              or learn about becoming an implementation partner yourself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://vdv.gold" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buttons.primary}
              >
                <span className="relative z-10">Contact VDV Implementation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="mailto:partners@gambino.gold"
                className={styles.buttons.secondary}
              >
                Direct Partnership Inquiry
              </a>
            </div>
            
            <p className={`text-sm mt-6 text-center ${styles.text.muted}`}>
              Implementation partner services provided by licensed contractors
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${styles.text.primary}`}>
              Why Partner with <span className={styles.text.accent}>Gambino Gold</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">$$$</div>
              <h3 className={`font-semibold mb-2 ${styles.text.primary}`}>Revenue Growth</h3>
              <p className={`text-sm ${styles.text.secondary}`}>Multiple income streams from mining operations and customer engagement</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
              <h3 className={`font-semibold mb-2 ${styles.text.primary}`}>Full Support</h3>
              <p className={`text-sm ${styles.text.secondary}`}>Technical support, maintenance, and business development assistance</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">🏆</div>
              <h3 className={`font-semibold mb-2 ${styles.text.primary}`}>Proven Model</h3>
              <p className={`text-sm ${styles.text.secondary}`}>Established framework with legal compliance and operational procedures</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">🚀</div>
              <h3 className={`font-semibold mb-2 ${styles.text.primary}`}>Growth Opportunity</h3>
              <p className={`text-sm ${styles.text.secondary}`}>Early access to expanding cryptocurrency infrastructure market</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}