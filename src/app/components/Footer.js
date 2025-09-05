// src/app/components/Footer.js
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 text-sm text-neutral-400 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900/70 backdrop-blur-sm border border-neutral-700/50 shadow-lg shadow-black/25 overflow-hidden">
              {/* Replace 'logo.png' with your actual logo file name */}
              <Image
                src="/logo.png"
                alt="Gambino Gold Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="text-yellow-500 font-bold text-lg">Gambino Gold</div>
          </div>
          <p className="max-w-md text-neutral-300 leading-relaxed mb-6">
            Building sustainable community wealth through compliant blockchain technology, 
            transparent governance, and innovative utility token frameworks.
          </p>
          
          {/* Compliance badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              SEC Compliant
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              KYC/AML
            </div>
            <div className="flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
              GDPR Ready
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="rounded-lg bg-neutral-900 p-2 transition-colors hover:bg-neutral-800" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="rounded-lg bg-neutral-900 p-2 transition-colors hover:bg-neutral-800" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="rounded-lg bg-neutral-900 p-2 transition-colors hover:bg-neutral-800" aria-label="Discord">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Platform */}
        <div>
          <div className="text-white font-semibold mb-4">Platform</div>
          <ul className="space-y-3">
            <li><a className="transition-colors hover:text-white" href="/utility-token-gaming">How It Works</a></li>
            <li><a className="transition-colors hover:text-white" href="/dao-governance">DAO Governance</a></li>
            <li><a className="transition-colors hover:text-white" href="/leaderboard">Leaderboards</a></li>
            <li><a className="transition-colors hover:text-white" href="/tokenomics">Tokenomics</a></li>
            <li><a className="transition-colors hover:text-white" href="/roadmap">Roadmap</a></li>
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <div className="text-white font-semibold mb-4">Resources</div>
          <ul className="space-y-3">
            <li><a className="transition-colors hover:text-white" href="/legal/whitepaper">Whitepaper</a></li>
            <li><a className="transition-colors hover:text-white" href="/developers">Developer Docs</a></li>
            <li><a className="transition-colors hover:text-white" href="/partners">Partner Program</a></li>
            <li><a className="transition-colors hover:text-white" href="/support">Support Center</a></li>
            <li><a className="transition-colors hover:text-white" href="/community">Community</a></li>
          </ul>
        </div>
        
        {/* Legal & Compliance */}
        <div>
          <div className="text-white font-semibold mb-4">Legal</div>
          <ul className="space-y-3">
            <li><a className="transition-colors hover:text-white" href="/legal/terms">Terms of Service</a></li>
            <li><a className="transition-colors hover:text-white" href="/legal/privacy">Privacy Policy</a></li>
            <li><a className="transition-colors hover:text-white" href="/legal/compliance">Regulatory Compliance</a></li>
            <li><a className="transition-colors hover:text-white" href="/legal/aml">AML Policy</a></li>
            <li><a className="transition-colors hover:text-white" href="/legal/security">Security</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-neutral-900 px-6 py-6">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 text-xs text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <div>© {new Date().getFullYear()} Gambino Holdings LLC. All rights reserved.</div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                Regulated Entity
              </span>
              <span className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                Utility Tokens Only
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs">
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl mt-4 pt-4 border-t border-neutral-900 text-center">
          <p className="text-xs text-neutral-600">
            * Gambino Gold provides cryptocurrency mining infrastructure software and community governance platforms through authorized implementation partners. Our utility tokens enable infrastructure access and community governance participation—not as investment products. This is not gambling, securities investment, or financial advice. See our Terms of Service and regulatory documentation.
          </p>
        </div>
      </div>
    </footer>
    
  );
}