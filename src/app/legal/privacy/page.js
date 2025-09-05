// app/legal/privacy/page.js
'use client';

import Link from 'next/link'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

export default function PrivacyPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="We protect your privacy while maintaining regulatory transparency and compliance cooperation."
      badgeText="Privacy Policy"
      lastUpdated="September 4, 2025"
    >
      <LegalSection title="1. Information We Collect">
        <p>
          We collect information necessary to provide our technology licensing services and maintain 
          regulatory compliance:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Account Information:</strong> Name, email, and identity verification data for compliance</li>
          <li><strong>Usage Data:</strong> Platform interactions, governance participation, and mining access records</li>
          <li><strong>Technical Data:</strong> Device information, IP addresses, and security logs</li>
          <li><strong>Communication Records:</strong> Support interactions and governance communications</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide technology licensing services and platform access</li>
          <li>Verify identity and maintain regulatory compliance</li>
          <li>Process governance participation and community allocations</li>
          <li>Detect and prevent fraud, abuse, and security threats</li>
          <li>Communicate about services, updates, and governance matters</li>
          <li>Improve our technology and user experience</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Information Sharing">
        <p>
          We may share your information with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Implementation Partners:</strong> Limited data sharing for service delivery and compliance</li>
          <li><strong>Regulatory Authorities:</strong> As required by law for compliance reporting</li>
          <li><strong>Service Providers:</strong> Third-party vendors who support our platform operations</li>
          <li><strong>Legal Requirements:</strong> When required by law, subpoena, or court order</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Security">
        <p>
          We implement industry-standard security measures to protect your information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Multi-factor authentication and access controls</li>
          <li>Regular security audits and monitoring systems</li>
          <li>Employee training on data protection and privacy</li>
        </ul>
        <p>
          While we strive to protect your information, no method of electronic storage or 
          transmission is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain your information as long as necessary to provide services and comply with 
          legal obligations. Retention periods vary by data type:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Account Data:</strong> Until account closure plus required compliance periods</li>
          <li><strong>Transaction Records:</strong> As required by financial regulations</li>
          <li><strong>Communications:</strong> Typically 3-5 years for business records</li>
          <li><strong>Usage Analytics:</strong> Aggregated and anonymized data may be retained longer</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Your Privacy Rights">
        <p>
          Depending on your location, you may have rights regarding your personal information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Access:</strong> Request copies of your personal information</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
          <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Objection:</strong> Object to certain processing activities</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            privacy@gambino.gold
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="7. International Data Transfers">
        <p>
          Our services may involve transferring your information to countries outside your residence. 
          We ensure appropriate safeguards are in place for international transfers and comply with 
          applicable data protection laws.
        </p>
        <p>
          By using Gambino, you consent to the transfer and processing of your data in the United States 
          where our systems are operated.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to this Policy">
        <p>
          We may update this Privacy Policy to reflect changes in law, technology, or our practices. 
          We will notify you of material updates and the revised policy will be posted here.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>
          Questions about privacy? Reach us at{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}