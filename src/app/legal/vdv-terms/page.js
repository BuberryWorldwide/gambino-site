'use client';

import Link from 'next/link'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

export default function VDVTermsPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="VDV Terms of Service"
      subtitle="These Terms of Service govern your use of cryptocurrency mining access services operated by Volunteer Digital Ventures, LLC."
      badgeText="Legal Agreement"
      lastUpdated="January 2025"
    >
      {/* Version Notice */}
      <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
        <p className="text-sm">
          <strong>Document Version:</strong> vdv-tos-v1.0 | <strong>Effective Date:</strong> January 2025
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: AGREEMENT AND PARTIES */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="1. Agreement and Parties">
        <p className="font-semibold">1.1 Parties to This Agreement</p>
        <p className="mt-2">
          These Terms of Service (&quot;Agreement&quot;) constitute a binding legal agreement between
          you (&quot;User,&quot; &quot;you,&quot; &quot;your&quot;) and:
        </p>
        <div className="mt-4 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">Volunteer Digital Ventures, LLC (&quot;VDV,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;)</p>
          <p className="text-sm mt-1">A Tennessee Limited Liability Company</p>
          <p className="text-sm">Operator of cryptocurrency mining access services at partner venue locations</p>
        </div>

        <p className="font-semibold mt-6">1.2 Acceptance</p>
        <p className="mt-2">
          By creating an account, scanning a machine QR code, or participating at any VDV partner
          venue, you agree to be bound by these Terms. If you do not agree, do not use our services.
        </p>

        <p className="font-semibold mt-6">1.3 VDV Customer Relationship</p>
        <div className="mt-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">IMPORTANT: Your Service Relationship is with VDV</p>
          <p className="text-sm">
            By using our services, you become a VDV customer. VDV is responsible for:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
            <li>Customer service and support</li>
            <li>All money transmission and fund handling</li>
            <li>Dispute resolution</li>
            <li>Regulatory compliance for Tennessee operations</li>
          </ul>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: TECHNICAL INFRASTRUCTURE PROVIDER */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="2. Technical Infrastructure Provider">
        <p className="font-semibold">2.1 Gambino Gold, Inc.</p>
        <p className="mt-2">
          VDV utilizes software infrastructure, blockchain integration, and platform technology
          provided by Gambino Gold, Inc. (&quot;Gambino&quot;) under a technology licensing agreement.
        </p>

        <p className="font-semibold mt-6">2.2 Gambino&apos;s Limited Role</p>
        <div className="mt-2 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">IMPORTANT: Gambino is NOT a Party to This Agreement</p>
          <p className="text-sm">Gambino:</p>
          <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
            <li>Does NOT enter into agreements with Users</li>
            <li>Does NOT accept, hold, or transmit User funds</li>
            <li>Does NOT provide customer service to Users</li>
            <li>Does NOT have any direct service relationship with Users</li>
          </ul>
          <p className="text-sm mt-3">
            Gambino provides software infrastructure to VDV. VDV provides services to you.
          </p>
        </div>

        <p className="font-semibold mt-6">2.3 Platform Technology</p>
        <p className="mt-2">
          For information about the underlying platform technology, tokenomics, and blockchain
          infrastructure, see:{' '}
          <Link href="/legal/whitepaper" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            Platform Whitepaper
          </Link>
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: ELIGIBILITY */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="3. Eligibility">
        <p className="font-semibold">3.1 Age Requirement</p>
        <p className="mt-2">
          You must be at least eighteen (18) years of age to use our services.
          <strong> Age verification is required at all VDV partner venues.</strong>
        </p>

        <p className="font-semibold mt-6">3.2 Legal Capacity</p>
        <p className="mt-2">
          You represent that you have full legal capacity to enter into binding agreements
          and are not prohibited from participating by any applicable law.
        </p>

        <p className="font-semibold mt-6">3.3 Geographic Restrictions</p>
        <p className="mt-2">
          VDV currently operates in Tennessee. Services may not be available in all jurisdictions.
          You are responsible for compliance with local laws.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: HOW OUR SERVICES WORK */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="4. How Our Services Work">
        <p className="font-semibold">4.1 Partner Venue Access</p>
        <p className="mt-2">
          VDV partners with retail venues (&quot;Venues&quot;) that host cryptocurrency mining access
          terminals. When you participate at a Venue:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>You interact with VDV-operated equipment at the Venue</li>
          <li>Cash transactions are processed through VDV&apos;s settlement system</li>
          <li>Utility tokens are distributed based on your activity</li>
          <li>The Venue provides the physical location; VDV provides the service</li>
        </ul>

        <p className="font-semibold mt-6">4.2 Machine Binding</p>
        <p className="mt-2">To use a terminal, you must:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Create a VDV account (if you don&apos;t have one)</li>
          <li>Scan the QR code on the machine</li>
          <li>Bind your account to that machine for your session</li>
        </ol>
        <p className="mt-2">
          One user per machine at a time. Your session ends when you unbind or after a
          period of inactivity.
        </p>

        <p className="font-semibold mt-6">4.3 Token Distribution</p>
        <p className="mt-2">
          Based on your activity, you may receive utility tokens (&quot;GG Tokens&quot; or &quot;GAMBINO&quot;).
        </p>
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">UTILITY TOKEN DISCLOSURE - READ CAREFULLY</p>
          <p className="text-sm mb-3">
            GG Tokens are <strong>utility tokens only</strong>. They are:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>NOT securities</strong> - They do not represent ownership, equity, or investment contracts</li>
            <li><strong>NOT investment products</strong> - They are not offered with expectation of profit from others&apos; efforts</li>
            <li><strong>NOT currency</strong> - They are not legal tender or a medium of exchange</li>
          </ul>
          <p className="text-sm mt-3">
            GG Tokens provide:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Access to platform features and services</li>
            <li>Participation in community governance voting</li>
            <li>Eligibility for tier-based community benefits</li>
          </ul>
          <p className="text-sm mt-3 font-semibold">
            Token value may fluctuate or become worthless. Do not participate with funds you cannot afford to lose.
          </p>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: YOUR ACCOUNT */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="5. Your Account">
        <p className="font-semibold">5.1 Account Creation</p>
        <p className="mt-2">
          To participate, you must create an account with accurate information including:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Legal name</li>
          <li>Valid email address</li>
          <li>Other information as required</li>
        </ul>

        <p className="font-semibold mt-6">5.2 Account Security</p>
        <p className="mt-2">You are responsible for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Maintaining the security of your account credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us immediately of unauthorized access</li>
        </ul>

        <p className="font-semibold mt-6">5.3 Wallet</p>
        <p className="mt-2">
          Your account includes a cryptocurrency wallet for receiving tokens. VDV generates
          and secures this wallet on your behalf. You may export your wallet or connect an
          external wallet.
        </p>

        <p className="font-semibold mt-6">5.4 Identity Verification</p>
        <div className="mt-2 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="text-sm">
            VDV maintains Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance
            programs as required by applicable law. You agree to:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
            <li>Provide accurate identity information when requested</li>
            <li>Submit to identity verification procedures</li>
            <li>Cooperate with any ongoing compliance monitoring</li>
            <li>Promptly update your information if it changes</li>
          </ul>
          <p className="text-sm mt-3">
            VDV reserves the right to suspend or terminate accounts that fail identity
            verification or exhibit suspicious activity patterns.
          </p>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: FUNDS AND TRANSACTIONS */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="6. Funds and Transactions">
        <p className="font-semibold">6.1 Money Transmission</p>
        <p className="mt-2">
          VDV operates in compliance with applicable money transmission regulations and handles
          all fund transfers for Tennessee operations. When you insert cash:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Funds are received by VDV through the Venue</li>
          <li>VDV credits your account</li>
          <li>Tokens are distributed based on your activity</li>
        </ul>

        <p className="font-semibold mt-6">6.2 No Refunds on Token Distribution</p>
        <p className="mt-2">
          Once tokens are distributed to your wallet, transactions are final and recorded on
          the blockchain. Token distributions cannot be reversed.
        </p>

        <p className="font-semibold mt-6">6.3 Cash Handling</p>
        <p className="mt-2">
          Cash handling at Venues is subject to VDV&apos;s settlement agreements with Venue operators.
          VDV is responsible for proper accounting and money transmission compliance.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: PROHIBITED CONDUCT */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="7. Prohibited Conduct">
        <p>You agree NOT to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Violate any applicable law or regulation</li>
          <li>Provide false or misleading information</li>
          <li>Attempt to manipulate, hack, or exploit the platform</li>
          <li>Use automated systems, bots, or scripts</li>
          <li>Interfere with other users or Venue operations</li>
          <li>Engage in money laundering or fraud</li>
          <li>Circumvent age verification or geographic restrictions</li>
        </ul>
        <p className="mt-4">
          Violation may result in account suspension or termination and may be reported to
          law enforcement.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: RISK DISCLOSURES */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="8. Risk Disclosures">
        <p className="font-semibold">8.1 Cryptocurrency Risks</p>
        <div className="mt-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">IMPORTANT - READ CAREFULLY:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Token values may fluctuate significantly or become worthless</li>
            <li>Cryptocurrency markets are volatile and largely unregulated</li>
            <li>You may lose all value associated with your tokens</li>
            <li>We do not provide investment advice or guarantee returns</li>
            <li>Past performance does not indicate future results</li>
          </ul>
        </div>

        <p className="font-semibold mt-6">8.2 Technology Risks</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Platform may experience downtime or technical failures</li>
          <li>Blockchain networks may become congested or unavailable</li>
          <li>Smart contracts may contain undiscovered vulnerabilities</li>
          <li>Your tokens could be lost due to technical issues</li>
        </ul>

        <p className="font-semibold mt-6">8.3 Regulatory Risks</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Cryptocurrency regulations are evolving</li>
          <li>Future laws may affect platform operations or token utility</li>
          <li>VDV may need to modify services to comply with regulations</li>
        </ul>

        <p className="font-semibold mt-6">8.4 Not Gambling</p>
        <div className="mt-2 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">SERVICE CLASSIFICATION DISCLOSURE</p>
          <p className="text-sm">
            VDV services are <strong>cryptocurrency mining access services</strong>, not gambling.
            Specifically:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
            <li>Users receive utility tokens for platform access, not gambling payouts</li>
            <li>Token distribution is based on participation, not chance wagering</li>
            <li>Tokens provide governance and access rights, not prize winnings</li>
            <li>VDV does not operate games of chance or accept wagers</li>
          </ul>
          <p className="text-sm mt-3">
            The entertainment terminals at Venues are the mechanism for measuring user
            participation in the token distribution system.
          </p>
        </div>

        <p className="mt-6 font-semibold text-center">
          PARTICIPATION IS AT YOUR OWN RISK. Only participate with funds you can afford to lose entirely.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 9: LIMITATION OF LIABILITY */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="9. Limitation of Liability">
        <p className="font-semibold">9.1 Disclaimer of Warranties</p>
        <p className="mt-2 uppercase text-sm">
          Services are provided &quot;as is&quot; without warranties of any kind, express or implied,
          including implied warranties of merchantability, fitness for a particular purpose,
          and non-infringement.
        </p>

        <p className="font-semibold mt-6">9.2 Limitation of Damages</p>
        <p className="mt-2 uppercase text-sm">
          To the maximum extent permitted by law: VDV is not liable for indirect, incidental,
          special, consequential, or punitive damages. VDV&apos;s total liability shall not exceed
          the greater of: (a) $100, or (b) amounts you paid to VDV in the 12 months preceding
          the claim.
        </p>

        <p className="font-semibold mt-6">9.3 Indemnification</p>
        <p className="mt-2">
          You agree to indemnify, defend, and hold harmless VDV, its officers, directors,
          employees, and agents from any claims, damages, or expenses arising from your
          violation of these Terms or applicable law.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 10: DISPUTE RESOLUTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="10. Dispute Resolution">
        <p className="font-semibold">10.1 Governing Law</p>
        <p className="mt-2">
          This Agreement is governed by the laws of the State of Tennessee, without regard
          to conflict of law principles.
        </p>

        <p className="font-semibold mt-6">10.2 Informal Resolution</p>
        <p className="mt-2">
          Before filing any claim, you agree to contact VDV at support@vdvmining.com and
          attempt informal resolution for at least 30 days.
        </p>

        <p className="font-semibold mt-6">10.3 Arbitration</p>
        <p className="mt-2">
          Disputes not resolved informally shall be resolved through binding arbitration in
          Tennessee, administered by the American Arbitration Association under its Commercial
          Arbitration Rules.
        </p>

        <p className="font-semibold mt-6">10.4 Class Action Waiver</p>
        <p className="mt-2 uppercase text-sm font-semibold">
          You waive any right to participate in class actions or class arbitrations. All
          claims must be brought individually.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 11: ACCOUNT TERMINATION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="11. Account Termination">
        <p className="font-semibold">11.1 Termination by You</p>
        <p className="mt-2">
          You may close your account at any time by contacting{' '}
          <a href="mailto:support@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@vdvmining.com
          </a>.
        </p>

        <p className="font-semibold mt-6">11.2 Termination by VDV</p>
        <p className="mt-2">VDV may suspend or terminate your account for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Violation of these Terms</li>
          <li>Suspected fraud or illegal activity</li>
          <li>Regulatory requirements</li>
          <li>Extended inactivity</li>
        </ul>

        <p className="font-semibold mt-6">11.3 Effect of Termination</p>
        <p className="mt-2">
          Upon termination, you may withdraw any available token balance to an external
          wallet within 30 days. After 30 days, remaining tokens may be forfeited.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 12: CHANGES TO TERMS */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="12. Changes to Terms">
        <p>
          VDV may update these Terms from time to time. Material changes will be announced
          via email or platform notification at least 30 days before taking effect. Continued
          use of our services after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 13: CONTACT INFORMATION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="13. Contact Information">
        <div className="p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">For questions about these Terms or customer service:</p>
          <p className="mt-2">
            <strong>Volunteer Digital Ventures, LLC</strong><br />
            Email:{' '}
            <a href="mailto:support@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
              support@vdvmining.com
            </a>
          </p>
        </div>

        <div className="mt-4 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">For platform technology questions:</p>
          <p className="mt-2">
            <strong>Gambino Gold, Inc.</strong><br />
            Website:{' '}
            <a href="https://gambino.gold/support" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
              gambino.gold/support
            </a>
          </p>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 14: MISCELLANEOUS */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="14. Miscellaneous">
        <p className="font-semibold">14.1 Entire Agreement</p>
        <p className="mt-2">
          These Terms, together with our Privacy Policy, constitute the complete agreement
          between you and VDV regarding your use of our services.
        </p>

        <p className="font-semibold mt-6">14.2 Severability</p>
        <p className="mt-2">
          If any provision of these Terms is found unenforceable, the remaining provisions
          remain in full force and effect.
        </p>

        <p className="font-semibold mt-6">14.3 No Waiver</p>
        <p className="mt-2">
          VDV&apos;s failure to enforce any provision does not constitute a waiver of its right
          to enforce that provision in the future.
        </p>

        <p className="font-semibold mt-6">14.4 Assignment</p>
        <p className="mt-2">
          VDV may assign this Agreement in connection with a merger, acquisition, or sale of
          assets. You may not assign your account or rights under this Agreement.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 15: DATA HANDLING */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="15. Data Handling">
        <p className="font-semibold">15.1 Data Controller</p>
        <p className="mt-2">
          VDV is the data controller for your personal information collected through our services.
        </p>

        <p className="font-semibold mt-6">15.2 Data Processor</p>
        <p className="mt-2">
          Gambino Gold, Inc. acts as a data processor, processing your data on VDV&apos;s behalf
          to provide platform infrastructure services. Gambino processes data only as instructed
          by VDV and in accordance with our data processing agreement.
        </p>

        <p className="font-semibold mt-6">15.3 Data Processing Activities</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>VDV collects and controls:</strong> Account information, transaction history,
            identity verification data, customer service records</li>
          <li><strong>Gambino processes on VDV&apos;s behalf:</strong> Blockchain transactions,
            platform usage data, technical logs</li>
        </ul>

        <p className="font-semibold mt-6">15.4 Your Rights</p>
        <p className="mt-2">
          For data access, correction, deletion, or other privacy requests, contact VDV at{' '}
          <a href="mailto:privacy@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            privacy@vdvmining.com
          </a>.
          See our{' '}
          <Link href="/legal/vdv-privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            Privacy Policy
          </Link>{' '}
          for complete details.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ACCEPTANCE ACKNOWLEDGMENT */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <div className="mt-10 p-6 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg">
        <p className="font-bold text-center mb-4">ACCEPTANCE ACKNOWLEDGMENT</p>
        <p className="text-sm text-center">
          BY CREATING AN ACCOUNT, SCANNING A MACHINE QR CODE, OR USING OUR SERVICES, YOU
          ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE
          TERMS OF SERVICE.
        </p>
        <div className="mt-4 pt-4 border-t border-yellow-500/20 text-center text-xs">
          <p><strong>Document:</strong> VDV Terms of Service</p>
          <p><strong>Version:</strong> vdv-tos-v1.0</p>
          <p><strong>Last Updated:</strong> January 2025</p>
        </div>
      </div>

      {/* Related VDV Documents */}
      <div className="mt-8 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
        <p className="font-semibold text-sm mb-3">Related VDV Documents:</p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/legal/vdv-privacy" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            VDV Privacy Policy
          </Link>
          <span className={`${styles.text.tertiary} opacity-50`}>•</span>
          <Link href="/legal/whitepaper" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            Platform Whitepaper
          </Link>
          <span className={`${styles.text.tertiary} opacity-50`}>•</span>
          <Link href="/legal/terms" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            Gambino Platform Terms
          </Link>
        </div>
      </div>
    </LegalPageLayout>
  );
}
