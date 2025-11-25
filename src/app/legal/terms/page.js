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
      title="Terms of Service"
      subtitle="These terms govern your use of our platform. We update them as we grow and regulations develop."
      badgeText="Legal Agreement"
      lastUpdated={new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
    >
      {/* Acceptance */}
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or utilizing the Gambino Gold platform, you acknowledge and agree to be 
          bound by these Terms of Service. If you do not agree to these terms, you must 
          discontinue use of our services immediately. These terms are subject to modification 
          as we continue platform development and engage with legal counsel to ensure regulatory compliance.
        </p>
      </LegalSection>

      {/* What We Do */}
      <LegalSection title="2. Platform Services">
        <p>
          Gambino Gold develops and operates cryptocurrency distribution technology that 
          integrates with entertainment systems at participating venues. Our platform facilitates:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>User interaction with entertainment systems at partner venue locations</li>
          <li>Real-time cryptocurrency reward distribution triggered by user activity</li>
          <li>Transparent multi-party transaction accounting and record-keeping</li>
          <li>Community governance participation based on demonstrated platform engagement</li>
        </ul>
        <p className="mt-4">
          We maintain partnerships with licensed implementation partners who operate
          venue-based systems utilizing our technology infrastructure. Gambino Gold provides 
          the technological framework while implementation partners manage operational aspects 
          and venue relationships.
        </p>
      </LegalSection>

      {/* Who Can Use It */}
      <LegalSection title="3. Eligibility Requirements">
        <p>
          Platform participation requires that you be at least eighteen (18) years of age or 
          the age of majority in your jurisdiction, whichever is greater, and possess legal 
          capacity to enter binding contractual agreements. By utilizing our services, you 
          represent and warrant that you satisfy these eligibility requirements and will 
          comply with all applicable local, state, and federal laws regarding cryptocurrency participation.
        </p>
        <p className="mt-4">
          <strong>Age verification is required at all licensed partner venues.</strong> Participation
          is restricted to individuals 18 years of age or older.
        </p>
        <p className="mt-4">
          <strong>Current Operations:</strong> We are currently in a development phase pilot testing
          in Tennessee. Certain jurisdictions may be subject to access restrictions due to evolving
          regulatory requirements. We reserve the right to modify geographic availability as compliance
          frameworks develop across different legal environments.
        </p>
      </LegalSection>

      {/* Your Account */}
      <LegalSection title="4. Your Account">
        <p>
          To participate, you&apos;ll need to create an account. You&apos;re responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing accurate information</li>
          <li>Keeping your account secure</li>
          <li>Telling us if someone else accesses your account</li>
          <li>Following any identity verification requirements</li>
        </ul>
      </LegalSection>

      {/* Tokens */}
      <LegalSection title="5. Gambino Gold Tokens">
        <p>
          Our platform distributes GG tokens that provide:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to platform features and services</li>
          <li>Participation in community governance voting</li>
          <li>Eligibility for tier-based community benefits</li>
        </ul>
        
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="font-semibold text-sm mb-2">Important: Read This</p>
          <ul className="text-sm space-y-1">
            <li>• We don&apos;t guarantee token value or provide investment advice</li>
            <li>• Token values can go up, down, or become worthless</li>
            <li>• People may trade tokens independently - we don&apos;t control that</li>
            <li>• Token features may change as we develop the platform</li>
            <li>• Regulations may affect how tokens work</li>
          </ul>
        </div>
      </LegalSection>

      {/* Venue Operations */}
      <LegalSection title="6. How Venues Work">
        <p>
          Our technology operates through partnerships with venues and operators. When you 
          participate at a venue:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You deal directly with the venue for customer service</li>
          <li>The venue handles any cash transactions</li>
          <li>Our platform distributes cryptocurrency based on your activity</li>
          <li>Each venue is an independent business with its own rules</li>
        </ul>
        <p className="mt-4">
          We provide the technology platform. We&apos;re not responsible for how individual 
          venues operate or any issues you have with venue staff.
        </p>
      </LegalSection>

      {/* What You Can&apos;t Do */}
      <LegalSection title="7. Prohibited Activities">
        <p>Don&apos;t use our platform to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Break any laws</li>
          <li>Cheat, hack, or manipulate the system</li>
          <li>Lie about who you are</li>
          <li>Use bots or automated systems</li>
          <li>Interfere with other users or venue operations</li>
          <li>Do anything that could harm the platform or community</li>
        </ul>
        <p className="mt-4">
          If you violate these rules, we may suspend or terminate your account.
        </p>
      </LegalSection>

      {/* Community Governance */}
      <LegalSection title="8. Community Governance">
        <p>
          Active participants can earn governance rights through our tier system. If you 
          participate in governance:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Vote in good faith for the benefit of the community</li>
          <li>Follow governance procedures</li>
          <li>Stay active to maintain your governance rights</li>
          <li>Disclose conflicts of interest</li>
        </ul>
        <p className="mt-4">
          Governance is about platform operations and community decisions, not profit sharing 
          or investment returns.
        </p>
      </LegalSection>

      {/* Our Stuff */}
      <LegalSection title="9. Our Technology and Content">
        <p>
          We own our platform technology, software, and content. You can use it as intended, 
          but you can&apos;t:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Copy, reverse engineer, or steal our technology</li>
          <li>Use our content for competing services</li>
          <li>Remove copyright notices or try to claim ownership</li>
        </ul>
      </LegalSection>

      {/* Privacy */}
      <LegalSection title="10. Privacy">
        <p>
          We collect and use information as described in our Privacy Policy. By using our 
          platform, you agree to how we handle your information.
        </p>
      </LegalSection>

      {/* Risks and Disclaimers */}
      <LegalSection title="11. Risk Disclosure and Disclaimers">
        <p className="font-semibold">Material Risk Factors - Required Reading:</p>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-semibold">Technology and Platform Risks:</p>
            <p>Our platform utilizes emerging technology infrastructure. Users acknowledge that 
            technical failures, network disruptions, and cryptocurrency system vulnerabilities 
            are inherent risks. Participation occurs entirely at user discretion and risk tolerance.</p>
          </div>
          
          <div>
            <p className="font-semibold">Investment Advisory Disclaimer:</p>
            <p>Gambino Gold does not provide investment advisory services, financial planning, 
            or trading recommendations. Token participation should not be undertaken with 
            expectation of investment returns or profit generation.</p>
          </div>
          
          <div>
            <p className="font-semibold">Regulatory Environment:</p>
            <p>Cryptocurrency regulations continue evolving across federal and state jurisdictions. 
            Regulatory developments may materially affect platform functionality, availability, 
            or operational parameters.</p>
          </div>
          
          <div>
            <p className="font-semibold">Performance Disclaimers:</p>
            <p>While we endeavor to maintain reliable platform operations, we provide no 
            warranties regarding continuous availability, perfect functionality, or universal 
            geographic accessibility.</p>
          </div>
        </div>
      </LegalSection>

      {/* Liability Limits */}
      <LegalSection title="12. Liability Limits">
        <p>
          TO THE EXTENT LEGALLY ALLOWED, GAMBINO GOLD IS NOT LIABLE FOR INDIRECT OR 
          CONSEQUENTIAL DAMAGES FROM USING OUR PLATFORM. OUR TOTAL LIABILITY TO YOU 
          IS LIMITED TO $100 OR THE AMOUNT YOU PAID US IN THE LAST 12 MONTHS, 
          WHICHEVER IS GREATER.
        </p>
      </LegalSection>

      {/* Your Responsibility */}
      <LegalSection title="13. Your Responsibility">
        <p>
          You agree to cover our legal costs if your use of our platform causes problems, 
          you break these terms, or you violate someone else&apos;s rights.
        </p>
      </LegalSection>

      {/* Ending Your Account */}
      <LegalSection title="14. Account Termination">
        <p>
          We can suspend or close your account if you break these terms, do something 
          illegal, or for other reasonable safety or legal reasons. You can close your 
          account anytime by contacting us.
        </p>
      </LegalSection>

      {/* Changes */}
      <LegalSection title="15. Changes to These Terms">
        <p>
          We&apos;ll update these terms as we develop our platform and get proper legal counsel. 
          Big changes will be announced on our platform. Keep using our services after 
          changes means you agree to the new terms.
        </p>
      </LegalSection>

      {/* Legal Stuff */}
      <LegalSection title="16. Legal Details">
        <p>
          These terms are governed by Florida law. If we have disputes, we&apos;ll try to 
          work them out. If we can&apos;t, they&apos;ll be resolved through binding arbitration 
          rather than courts.
        </p>
        <p className="mt-4">
          If part of these terms becomes unenforceable, the rest still applies. These 
          terms represent our complete agreement about using our platform.
        </p>
      </LegalSection>

      {/* Contact */}
      <LegalSection title="17. Contact Us">
        <p>
          Questions about these terms or our platform? Contact us at{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>.
        </p>
      </LegalSection>

      {/* Development Notice */}
      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="font-semibold text-sm mb-2">Platform Development Notice</p>
        <p className="text-sm">
          We&apos;re actively developing our platform and working with legal counsel to ensure 
          proper compliance. These terms will be updated regularly as we grow and as 
          regulatory requirements become clearer. Check back periodically for updates.
        </p>
      </div>
    </LegalPageLayout>
  );
}