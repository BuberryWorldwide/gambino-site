'use client';

import Link from 'next/link'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

export default function VDVPrivacyPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="VDV Privacy Policy"
      subtitle="This Privacy Policy explains how Volunteer Digital Ventures, LLC collects, uses, and protects your personal information."
      badgeText="Privacy Notice"
      lastUpdated="January 2025"
    >
      {/* Version Notice */}
      <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
        <p className="text-sm">
          <strong>Document Version:</strong> vdv-privacy-v1.0 | <strong>Effective Date:</strong> January 2025
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: INTRODUCTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="1. Introduction">
        <p className="font-semibold">1.1 Data Controller</p>
        <p className="mt-2">
          Volunteer Digital Ventures, LLC (&quot;VDV,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is the data controller
          for personal information collected through our cryptocurrency mining access services.
        </p>
        <div className="mt-4 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">Volunteer Digital Ventures, LLC</p>
          <p className="text-sm mt-1">A Tennessee Limited Liability Company</p>
          <p className="text-sm">Privacy Contact: <a href="mailto:privacy@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>privacy@vdvmining.com</a></p>
        </div>

        <p className="font-semibold mt-6">1.2 Data Processor</p>
        <p className="mt-2">
          VDV uses Gambino Gold, Inc. (&quot;Gambino&quot;) as a data processor to provide platform
          infrastructure services. Gambino processes your data only on VDV&apos;s behalf and
          according to our instructions.
        </p>

        <p className="font-semibold mt-6">1.3 Scope</p>
        <p className="mt-2">
          This Privacy Policy applies to all personal information collected through:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Account registration and profile management</li>
          <li>Machine binding and session activity</li>
          <li>Transaction and wallet services</li>
          <li>Customer support interactions</li>
          <li>Our websites and mobile applications</li>
        </ul>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: INFORMATION WE COLLECT */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="2. Information We Collect">
        <p className="font-semibold">2.1 Information You Provide</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
          <li><strong>Identity Verification:</strong> Government ID, date of birth, address (when required for KYC)</li>
          <li><strong>Payment Information:</strong> Transaction amounts, payment methods used at venues</li>
          <li><strong>Communications:</strong> Customer support inquiries, feedback, survey responses</li>
        </ul>

        <p className="font-semibold mt-6">2.2 Information Collected Automatically</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Session Data:</strong> Machine binding history, session duration, activity timestamps</li>
          <li><strong>Device Information:</strong> IP address, browser type, device identifiers, operating system</li>
          <li><strong>Location Data:</strong> Venue location during sessions (not precise GPS)</li>
          <li><strong>Usage Data:</strong> Features used, pages viewed, interaction patterns</li>
        </ul>

        <p className="font-semibold mt-6">2.3 Blockchain Data</p>
        <p className="mt-2">
          Token transactions are recorded on a public blockchain. This includes:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Wallet addresses (public keys)</li>
          <li>Transaction amounts and timestamps</li>
          <li>Transaction hashes</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-sm">
            <strong>Note:</strong> Blockchain transactions are permanent and publicly visible.
            While wallet addresses don&apos;t directly identify you, they may be linkable to your
            identity if you share your address publicly.
          </p>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: HOW WE USE YOUR INFORMATION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="3. How We Use Your Information">
        <p className="font-semibold">3.1 Service Provision</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Create and manage your account</li>
          <li>Process transactions and distribute tokens</li>
          <li>Enable machine binding and session tracking</li>
          <li>Provide customer support</li>
        </ul>

        <p className="font-semibold mt-6">3.2 Compliance and Security</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Verify your identity (AML/KYC requirements)</li>
          <li>Detect and prevent fraud</li>
          <li>Comply with legal obligations</li>
          <li>Protect platform security</li>
        </ul>

        <p className="font-semibold mt-6">3.3 Service Improvement</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Analyze usage patterns to improve our services</li>
          <li>Develop new features and functionality</li>
          <li>Conduct research and analytics</li>
        </ul>

        <p className="font-semibold mt-6">3.4 Communications</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Send service-related notifications (required)</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Respond to your inquiries</li>
        </ul>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: INFORMATION SHARING */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="4. Information Sharing">
        <p className="font-semibold">4.1 Service Providers</p>
        <p className="mt-2">We share information with:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            <strong>Gambino Gold, Inc.:</strong> Platform infrastructure, blockchain integration,
            technical services (data processor)
          </li>
          <li>
            <strong>Partner Venues:</strong> Limited information necessary for session management
            and customer service at venues
          </li>
          <li>
            <strong>Payment Processors:</strong> Transaction processing services
          </li>
          <li>
            <strong>Identity Verification:</strong> KYC/AML compliance providers
          </li>
        </ul>

        <p className="font-semibold mt-6">4.2 Legal Requirements</p>
        <p className="mt-2">We may disclose information when required by:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Court orders, subpoenas, or legal process</li>
          <li>Government or regulatory requests</li>
          <li>Law enforcement investigations</li>
          <li>Protection of our legal rights</li>
        </ul>

        <p className="font-semibold mt-6">4.3 Business Transfers</p>
        <p className="mt-2">
          In the event of a merger, acquisition, or sale of assets, your information may be
          transferred to the acquiring entity.
        </p>

        <p className="font-semibold mt-6">4.4 What We Don&apos;t Do</p>
        <div className="mt-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-sm font-semibold mb-2">We DO NOT:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Sell your personal information to third parties</li>
            <li>Share your information for third-party advertising</li>
            <li>Provide your data to data brokers</li>
          </ul>
        </div>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: DATA SECURITY */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="5. Data Security">
        <p className="font-semibold">5.1 Security Measures</p>
        <p className="mt-2">We implement appropriate security measures including:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Encryption of data in transit and at rest</li>
          <li>Secure authentication mechanisms</li>
          <li>Access controls and monitoring</li>
          <li>Regular security assessments</li>
        </ul>

        <p className="font-semibold mt-6">5.2 Wallet Security</p>
        <p className="mt-2">
          Your wallet private keys are encrypted using industry-standard encryption. You are
          responsible for maintaining the security of your account credentials.
        </p>

        <p className="font-semibold mt-6">5.3 Limitations</p>
        <p className="mt-2">
          No system is completely secure. While we implement reasonable safeguards, we cannot
          guarantee absolute security. You acknowledge the inherent risks of digital systems.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: DATA RETENTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="6. Data Retention">
        <p className="font-semibold">6.1 Retention Periods</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Account Data:</strong> Retained while account is active, plus 7 years after closure</li>
          <li><strong>Transaction Records:</strong> Retained for 7 years (regulatory requirement)</li>
          <li><strong>KYC Documents:</strong> Retained for 5 years after account closure</li>
          <li><strong>Session Logs:</strong> Retained for 2 years</li>
          <li><strong>Support Communications:</strong> Retained for 3 years</li>
        </ul>

        <p className="font-semibold mt-6">6.2 Blockchain Data</p>
        <p className="mt-2">
          Blockchain transaction data is permanent and cannot be deleted. This is inherent
          to blockchain technology.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: YOUR RIGHTS */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="7. Your Rights">
        <p className="font-semibold">7.1 Access and Portability</p>
        <p className="mt-2">
          You have the right to request a copy of your personal information in a
          portable format.
        </p>

        <p className="font-semibold mt-6">7.2 Correction</p>
        <p className="mt-2">
          You may update or correct your account information through your account settings
          or by contacting us.
        </p>

        <p className="font-semibold mt-6">7.3 Deletion</p>
        <p className="mt-2">
          You may request deletion of your personal information. Note that:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Some data must be retained for legal/regulatory compliance</li>
          <li>Blockchain data cannot be deleted</li>
          <li>Account deletion is permanent</li>
        </ul>

        <p className="font-semibold mt-6">7.4 Marketing Opt-Out</p>
        <p className="mt-2">
          You may opt out of marketing communications at any time by:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Clicking &quot;unsubscribe&quot; in marketing emails</li>
          <li>Updating preferences in account settings</li>
          <li>Contacting us at privacy@vdvmining.com</li>
        </ul>

        <p className="font-semibold mt-6">7.5 Exercising Your Rights</p>
        <p className="mt-2">
          To exercise any privacy rights, contact:{' '}
          <a href="mailto:privacy@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            privacy@vdvmining.com
          </a>
        </p>
        <p className="mt-2 text-sm">
          We will respond to requests within 30 days. We may require identity verification
          before processing requests.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: COOKIES AND TRACKING */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="8. Cookies and Tracking">
        <p className="font-semibold">8.1 Cookies We Use</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for authentication and security</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences</li>
          <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
        </ul>

        <p className="font-semibold mt-6">8.2 Managing Cookies</p>
        <p className="mt-2">
          You can manage cookies through your browser settings. Disabling essential cookies
          may prevent you from using our services.
        </p>

        <p className="font-semibold mt-6">8.3 Do Not Track</p>
        <p className="mt-2">
          We do not currently respond to &quot;Do Not Track&quot; browser signals.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 9: CHILDREN'S PRIVACY */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="9. Children&apos;s Privacy">
        <p>
          Our services are not intended for individuals under 18 years of age. We do not
          knowingly collect personal information from children. If we discover we have
          collected information from a child, we will delete it promptly.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 10: INTERNATIONAL DATA */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="10. International Data Transfers">
        <p>
          Your information may be processed in the United States and other countries where
          our service providers operate. By using our services, you consent to the transfer
          of your information to countries that may have different privacy laws than your
          country of residence.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 11: CHANGES TO THIS POLICY */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes will be
          announced via email or platform notification. The &quot;Last Updated&quot; date at the
          top indicates when the policy was last revised.
        </p>
        <p className="mt-4">
          Continued use of our services after changes take effect constitutes acceptance
          of the updated Privacy Policy.
        </p>
      </LegalSection>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 12: CONTACT US */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      <LegalSection title="12. Contact Us">
        <p>For privacy-related questions or requests:</p>
        <div className="mt-4 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">Volunteer Digital Ventures, LLC</p>
          <p className="text-sm mt-2">
            Privacy Contact:{' '}
            <a href="mailto:privacy@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
              privacy@vdvmining.com
            </a>
          </p>
          <p className="text-sm mt-1">
            General Support:{' '}
            <a href="mailto:support@vdvmining.com" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
              support@vdvmining.com
            </a>
          </p>
        </div>

        <div className="mt-4 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
          <p className="font-semibold">For platform technology questions:</p>
          <p className="text-sm mt-2">
            <strong>Gambino Gold, Inc.</strong><br />
            Website:{' '}
            <a href="https://gambino.gold/support" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
              gambino.gold/support
            </a>
          </p>
        </div>
      </LegalSection>

      {/* Version Footer */}
      <div className="mt-10 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg text-center text-sm">
        <p><strong>Document:</strong> VDV Privacy Policy</p>
        <p><strong>Version:</strong> vdv-privacy-v1.0</p>
        <p><strong>Last Updated:</strong> January 2025</p>
      </div>

      {/* Related VDV Documents */}
      <div className="mt-8 p-4 bg-neutral-500/10 border border-neutral-500/20 rounded-lg">
        <p className="font-semibold text-sm mb-3">Related VDV Documents:</p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/legal/vdv-terms" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            VDV Terms of Service
          </Link>
          <span className={`${styles.text.tertiary} opacity-50`}>•</span>
          <Link href="/legal/whitepaper" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            Platform Whitepaper
          </Link>
          <span className={`${styles.text.tertiary} opacity-50`}>•</span>
          <Link href="/legal/cookies" className={`${styles.text.tertiary} ${styles.text.accentHover} underline decoration-dotted`}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </LegalPageLayout>
  );
}
