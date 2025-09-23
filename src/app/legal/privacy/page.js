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
      subtitle="We protect your privacy while maintaining transparency and regulatory cooperation as required."
      badgeText="Privacy Policy"
      lastUpdated={new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
    >
      <LegalSection title="1. Information We Collect">
        <p>
          We collect information necessary to operate our cryptocurrency distribution platform and 
          meet regulatory requirements:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, and identity verification documents as required for compliance</li>
          <li><strong>Platform Activity:</strong> Usage patterns, transaction history, governance participation, and tier advancement metrics</li>
          <li><strong>Technical Information:</strong> Device identifiers, IP addresses, browser information, and security event logs</li>
          <li><strong>Communication Records:</strong> Customer support interactions, governance discussions, and platform notifications</li>
          <li><strong>Financial Data:</strong> Cryptocurrency wallet addresses and transaction records for platform operations</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We process your information for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Operating our cryptocurrency distribution platform and related services</li>
          <li>Verifying user identity and maintaining regulatory compliance obligations</li>
          <li>Processing community governance participation and tier-based benefits</li>
          <li>Detecting, preventing, and investigating fraudulent activities and security threats</li>
          <li>Communicating platform updates, governance matters, and service-related information</li>
          <li>Improving platform functionality, user experience, and service delivery</li>
          <li>Maintaining records as required by applicable financial and data retention regulations</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Information Sharing and Disclosure">
        <p>
          We may share your personal information in the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Implementation Partners:</strong> Limited operational data sharing with partners like VDV for service delivery and compliance</li>
          <li><strong>Regulatory Authorities:</strong> Information disclosure as required by applicable laws, regulations, or regulatory investigations</li>
          <li><strong>Service Providers:</strong> Third-party vendors who provide technical infrastructure, security, or operational support under confidentiality agreements</li>
          <li><strong>Legal Obligations:</strong> Disclosure pursuant to legal process, court orders, subpoenas, or law enforcement requests</li>
          <li><strong>Business Transfers:</strong> Information transfer in connection with mergers, acquisitions, or asset sales</li>
          <li><strong>Safety and Security:</strong> Disclosure necessary to protect the safety of users, prevent fraud, or enforce our terms of service</li>
        </ul>
        <p className="mt-4">
          We do not sell personal information to third parties for commercial marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Security Measures">
        <p>
          We implement comprehensive security measures to protect your information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>End-to-end encryption for sensitive data transmission and storage</li>
          <li>Multi-factor authentication requirements and role-based access controls</li>
          <li>Regular security assessments, penetration testing, and vulnerability monitoring</li>
          <li>Employee security training and confidentiality agreements</li>
          <li>Secure infrastructure hosting with reputable cloud service providers</li>
          <li>Incident response procedures for potential security breaches</li>
        </ul>
        <p className="mt-4">
          While we employ industry-standard security practices, no electronic transmission or 
          storage method provides absolute security. We cannot guarantee complete protection 
          against all potential security threats.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention Practices">
        <p>
          We retain personal information for periods necessary to fulfill operational and legal obligations:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Account Information:</strong> Retained during active account status plus applicable regulatory retention periods</li>
          <li><strong>Transaction Records:</strong> Maintained as required by financial service regulations and audit requirements</li>
          <li><strong>Communication Records:</strong> Business communications typically retained for 3-5 years</li>
          <li><strong>Security Logs:</strong> Technical logs maintained for security monitoring and incident investigation</li>
          <li><strong>Governance Records:</strong> Community participation records maintained for platform integrity</li>
          <li><strong>Analytics Data:</strong> Aggregated and anonymized usage data may be retained indefinitely for platform improvement</li>
        </ul>
        <p className="mt-4">
          Specific retention periods may vary based on regulatory requirements in applicable jurisdictions.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Privacy Rights">
        <p>
          Subject to applicable law and regulatory requirements, you may have the following rights 
          regarding your personal information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Access Rights:</strong> Request access to personal information we maintain about you</li>
          <li><strong>Correction Rights:</strong> Request correction of inaccurate or incomplete personal information</li>
          <li><strong>Deletion Rights:</strong> Request deletion of personal information (subject to regulatory retention requirements)</li>
          <li><strong>Data Portability:</strong> Receive personal information in a structured, commonly-used format</li>
          <li><strong>Processing Objection:</strong> Object to certain types of data processing activities</li>
          <li><strong>Marketing Communications:</strong> Opt-out of non-essential marketing communications</li>
        </ul>
        <p className="mt-4">
          To exercise privacy rights or submit privacy-related inquiries, contact us at{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>. We will respond within reasonable timeframes as required by applicable law.
        </p>
        <p className="mt-4 text-sm">
          Note: Certain data retention may be required by regulatory obligations and cannot be 
          deleted upon request. We will explain any limitations when responding to your requests.
        </p>
      </LegalSection>

      <LegalSection title="7. International Data Processing">
        <p>
          Our platform operates through infrastructure located primarily in the United States. 
          Personal information may be processed and stored in the United States and other countries 
          where our service providers maintain operations.
        </p>
        <p className="mt-4">
          When transferring personal information internationally, we implement appropriate safeguards 
          including contractual protections and security measures. By using our platform, you 
          acknowledge that your information may be processed outside your country of residence.
        </p>
        <p className="mt-4">
          For users in the European Union or other regions with specific data transfer requirements, 
          we work to ensure transfers comply with applicable legal frameworks.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-Party Services and Links">
        <p>
          Our platform may integrate with or link to third-party services, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cryptocurrency wallet providers and blockchain networks</li>
          <li>Identity verification and compliance service providers</li>
          <li>Analytics and platform monitoring services</li>
          <li>Communication and customer support tools</li>
        </ul>
        <p className="mt-4">
          These third-party services operate under their own privacy policies. We encourage you 
          to review the privacy practices of any third-party services you interact with through our platform.
        </p>
      </LegalSection>

      <LegalSection title="9. Children&apos;s Privacy">
        <p>
          Our platform is not intended for individuals under 18 years of age. We do not knowingly 
          collect personal information from children under 18. If we become aware that we have 
          collected personal information from a child under 18, we will take steps to delete such 
          information promptly.
        </p>
        <p className="mt-4">
          Parents or guardians who believe we may have collected information from a child under 18 
          should contact us immediately at{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="10. Privacy Policy Updates">
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices, 
          technology, legal requirements, or service offerings. Material changes will be 
          communicated through platform notifications and the updated policy will be posted here.
        </p>
        <p className="mt-4">
          Your continued use of our platform after policy updates constitutes acceptance of the 
          revised privacy practices. We encourage periodic review of this policy to stay informed 
          about how we protect your information.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Information">
        <p>
          For privacy-related questions, requests, or concerns, contact us at:
        </p>
        <p className="mt-2">
          Email: <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>
        </p>
        <p className="mt-4">
          For time-sensitive privacy matters or requests requiring immediate attention, please 
          clearly indicate "PRIVACY REQUEST" in your subject line.
        </p>
      </LegalSection>

      <LegalSection title="12. Additional Disclosures">
        <p>
          <strong>California Residents:</strong> California residents may have additional rights 
          under the California Consumer Privacy Act (CCPA). For information about CCPA rights 
          and how to exercise them, contact us using the information provided above.
        </p>
        <p className="mt-4">
          <strong>European Union Residents:</strong> EU residents may have rights under the 
          General Data Protection Regulation (GDPR). For information about GDPR rights and 
          our data protection officer contact information, please reach out using the contact 
          details provided.
        </p>
        <p className="mt-4">
          <strong>Cookies and Tracking:</strong> For information about cookies, analytics, and 
          tracking technologies, please review our Cookie Policy.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}