// app/legal/terms/page.js
'use client';

import Link from 'next/link'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

export default function TermsPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="Clear. Fair. Professional."
      subtitle="These Terms govern your access to and use of Gambino technology licensing services. Please read them carefully."
      badgeText="Terms of Service"
      lastUpdated="September 4, 2025"
    >
      {/* Intro / Acceptance */}
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing our technology platform, creating an account, or using any Gambino services
          (the <strong>&quot;Services&quot;</strong>), you agree to these Terms of Service
          (the <strong>&quot;Terms&quot;</strong>) and our{' '}
          <Link href="/legal/privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            Privacy Policy
          </Link>.
          If you do not agree, do not use the Services.
        </p>
      </LegalSection>

      {/* Business Model Clarification */}
      <LegalSection title="2. Technology Licensing Model">
        <p>
          Gambino operates as a <strong>technology licensing provider</strong>. We license cryptocurrency 
          mining infrastructure software to authorized implementation partners who operate mining 
          facilities. We do not operate consumer-facing mining operations directly.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Implementation Partners:</strong> Licensed operators who use our technology to provide mining infrastructure access</li>
          <li><strong>Utility Tokens:</strong> Provide access to mining infrastructure, not investment opportunities</li>
          <li><strong>Community Governance:</strong> Democratic participation in network decisions and community fund allocation</li>
        </ul>
      </LegalSection>

      {/* Eligibility */}
      <LegalSection title="3. Eligibility">
        <p>
          You must be at least 18 years old and legally able to enter contracts in your jurisdiction. 
          By using our Services, you represent that you meet these requirements and that all 
          information you provide is accurate.
        </p>
      </LegalSection>

      {/* Account Registration */}
      <LegalSection title="4. Account Registration">
        <p>
          Creating an account may require identity verification for compliance purposes. You are 
          responsible for maintaining account security and promptly notifying us of unauthorized access.
        </p>
      </LegalSection>

      {/* Utility Token Access */}
      <LegalSection title="5. Utility Token Framework">
        <p>
          Gambino utility tokens provide access to mining infrastructure services. They are not 
          securities, investment contracts, or financial instruments. Token holders gain:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to licensed mining infrastructure through implementation partners</li>
          <li>Participation rights in community governance and DAO voting</li>
          <li>Eligibility for community benefit programs and governance stipends</li>
          <li>Access to educational resources and community support</li>
        </ul>
      </LegalSection>

      {/* Prohibited Uses */}
      <LegalSection title="6. Prohibited Activities">
        <p>You may not use our Services to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Violate any applicable laws or regulations</li>
          <li>Manipulate governance systems or engage in vote buying</li>
          <li>Attempt to disrupt network operations or security systems</li>
          <li>Misrepresent your identity or provide false information</li>
          <li>Use automated systems to exploit platform mechanics</li>
          <li>Engage in money laundering or other financial crimes</li>
        </ul>
      </LegalSection>

      {/* Community Governance */}
      <LegalSection title="7. Community Governance Participation">
        <p>
          Participation in DAO governance is merit-based and tied to network contribution, not just 
          token holdings. Governance participants must:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Act in good faith and in the network's best interests</li>
          <li>Comply with governance procedures and voting protocols</li>
          <li>Maintain active participation to retain governance privileges</li>
          <li>Disclose conflicts of interest in governance decisions</li>
        </ul>
      </LegalSection>

      {/* Implementation Partner Responsibilities */}
      <LegalSection title="8. Implementation Partner Framework">
        <p>
          Implementation partners are independent operators who license our technology. Gambino's 
          responsibilities are limited to technology licensing and platform support. We are not 
          responsible for implementation partner business decisions, consumer service, or 
          operational outcomes.
        </p>
      </LegalSection>

      {/* Intellectual Property */}
      <LegalSection title="9. Intellectual Property Rights">
        <p>
          Gambino retains all rights to our technology, software, and platform. Implementation 
          partners receive limited licensing rights for authorized operations. Users may not 
          reverse engineer, copy, or distribute our proprietary technology.
        </p>
      </LegalSection>

      {/* Privacy and Data */}
      <LegalSection title="10. Privacy and Data Protection">
        <p>
          Your privacy is important to us. Please review our{' '}
          <Link href="/legal/privacy" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            Privacy Policy
          </Link>{' '}
          to understand how we collect, use, and protect your information in compliance with 
          applicable data protection laws.
        </p>
      </LegalSection>

      {/* Disclaimers */}
      <LegalSection title="11. Disclaimers">
        <p>
          <strong>No Investment Advice:</strong> Nothing on our platform constitutes investment 
          advice, financial advice, or trading advice. Our utility tokens provide infrastructure 
          access rights, not investment opportunities.
        </p>
        <p>
          <strong>Technology Licensing:</strong> We provide technology licensing services, not 
          consumer mining operations. Users access mining infrastructure through authorized 
          implementation partners.
        </p>
        <p>
          <strong>No Guarantees:</strong> We make no guarantees about mining profitability, 
          token value, or operational outcomes. Cryptocurrency mining involves inherent risks.
        </p>
      </LegalSection>

      {/* Limitation of Liability */}
      <LegalSection title="12. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Gambino shall not be liable for any indirect, 
          incidental, special, consequential, or punitive damages, including but not limited to 
          loss of profits, data, or business opportunities.
        </p>
        <p>
          Our total liability for any claims shall not exceed the amount you paid for our services 
          in the twelve months preceding the claim.
        </p>
      </LegalSection>

      {/* Indemnification */}
      <LegalSection title="13. Indemnification">
        <p>
          You agree to indemnify and hold harmless Gambino from any claims, damages, or expenses 
          arising from your use of our Services, violation of these Terms, or infringement of 
          third-party rights.
        </p>
      </LegalSection>

      {/* Termination */}
      <LegalSection title="14. Termination">
        <p>
          We may suspend or terminate your access to our Services at any time for violation of 
          these Terms, illegal activity, or other reasonable cause. You may terminate your 
          account at any time by contacting support.
        </p>
      </LegalSection>

      {/* Changes to Terms */}
      <LegalSection title="15. Changes to These Terms">
        <p>
          We may update these Terms to reflect changes in law, technology, or our services. 
          Material changes will be communicated through our platform and the updated Terms 
          will be posted here with a new effective date.
        </p>
      </LegalSection>

      {/* Governing Law */}
      <LegalSection title="16. Governing Law and Disputes">
        <p>
          These Terms are governed by applicable jurisdictional laws. Any disputes will be 
          resolved through binding arbitration rather than court proceedings. Class actions 
          are not permitted.
        </p>
      </LegalSection>

      {/* Contact */}
      <LegalSection title="17. Contact Information">
        <p>
          Questions about these Terms or our technology licensing services? Contact us at{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}