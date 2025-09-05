// app/legal/disclosures/page.js
'use client';

import Link from 'next/link'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

export default function DisclosuresPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="Technology Disclosures"
      subtitle="Important information about risks, limitations, and our technology licensing model."
      badgeText="Disclosures"
      lastUpdated="September 4, 2025"
    >
      <LegalSection title="1. No Investment or Financial Advice">
        <p>
          <strong>Gambino provides technology licensing services, not financial or investment advice.</strong> 
          Our utility tokens provide access to mining infrastructure, not investment opportunities. 
          Nothing on our platform should be construed as a recommendation to buy, sell, or hold 
          any financial instrument.
        </p>
      </LegalSection>

      <LegalSection title="2. Technology Risk Disclosures">
        <p>
          Cryptocurrency mining infrastructure involves inherent technical risks:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Hardware Failure:</strong> Mining equipment may malfunction or become obsolete</li>
          <li><strong>Network Risks:</strong> Blockchain networks may experience congestion or technical issues</li>
          <li><strong>Software Bugs:</strong> Our technology may contain errors or vulnerabilities</li>
          <li><strong>Maintenance Downtime:</strong> Regular maintenance may temporarily interrupt services</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Market Risk Disclosures">
        <p>
          Cryptocurrency markets are highly volatile and unpredictable:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Price Volatility:</strong> Token values can fluctuate dramatically</li>
          <li><strong>Mining Profitability:</strong> Mining rewards vary with market conditions and network difficulty</li>
          <li><strong>Regulatory Changes:</strong> Government regulations may impact operations</li>
          <li><strong>Market Liquidity:</strong> Token trading may have limited liquidity</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Regulatory Risk Disclosures">
        <p>
          Cryptocurrency regulations are evolving and may impact our services:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Regulatory Uncertainty:</strong> Future regulations may restrict or prohibit operations</li>
          <li><strong>Compliance Costs:</strong> New regulations may increase operational expenses</li>
          <li><strong>Jurisdictional Variations:</strong> Different regions may have conflicting requirements</li>
          <li><strong>Enforcement Actions:</strong> Regulatory enforcement may disrupt services</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Implementation Partner Risks">
        <p>
          Our technology is deployed through independent implementation partners:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Partner Performance:</strong> Implementation partners operate independently and may underperform</li>
          <li><strong>Business Continuity:</strong> Partners may cease operations or change business models</li>
          <li><strong>Service Quality:</strong> We cannot guarantee consistent service quality across all partners</li>
          <li><strong>Local Compliance:</strong> Partners are responsible for local regulatory compliance</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Governance Participation Risks">
        <p>
          DAO governance participation involves risks and responsibilities:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Decision Impact:</strong> Governance decisions may negatively affect network operations</li>
          <li><strong>Participation Requirements:</strong> Active participation is required to maintain governance rights</li>
          <li><strong>Conflict Resolution:</strong> Governance disputes may be difficult to resolve</li>
          <li><strong>Time Investment:</strong> Effective participation requires significant time commitment</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Community Fund Allocation">
        <p>
          Community fund allocations are subject to governance decisions and may not guarantee benefits:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Democratic Decisions:</strong> Fund allocations depend on community voting</li>
          <li><strong>Variable Benefits:</strong> Individual benefits may vary based on contribution and participation</li>
          <li><strong>Geographic Limitations:</strong> Some programs may be limited to specific regions</li>
          <li><strong>Program Changes:</strong> Benefit programs may be modified or discontinued</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Technical Limitations">
        <p>
          Our technology platform has inherent limitations:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Scalability:</strong> Platform capacity may limit user access during peak demand</li>
          <li><strong>Interoperability:</strong> Integration with external systems may have limitations</li>
          <li><strong>Data Accuracy:</strong> Real-time data may have delays or inaccuracies</li>
          <li><strong>Feature Development:</strong> New features may not perform as expected initially</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Security Risks">
        <p>
          Despite security measures, risks remain:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cyber Attacks:</strong> Platforms may be targeted by malicious actors</li>
          <li><strong>Data Breaches:</strong> Personal information may be compromised</li>
          <li><strong>Account Security:</strong> User accounts may be compromised if security practices are poor</li>
          <li><strong>Smart Contract Risks:</strong> Blockchain-based contracts may contain vulnerabilities</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Forward-Looking Statements">
        <p>
          Statements about future plans, expectations, or projections are forward-looking and subject 
          to significant risks and uncertainties. Actual results may differ materially from those 
          expressed or implied in forward-looking statements.
        </p>
      </LegalSection>

      <LegalSection title="11. No Guarantees or Warranties">
        <p>
          We provide our technology and services "as is" without warranties of any kind. We do not 
          guarantee:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Continuous or uninterrupted service availability</li>
          <li>Profitability of mining operations</li>
          <li>Accuracy of all platform data</li>
          <li>Compatibility with all systems or devices</li>
          <li>Achievement of projected outcomes</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Tax Implications">
        <p>
          Cryptocurrency activities may have tax consequences:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Tax Liability:</strong> You are responsible for understanding and complying with tax obligations</li>
          <li><strong>Professional Advice:</strong> Consult qualified tax professionals for guidance</li>
          <li><strong>Record Keeping:</strong> Maintain detailed records of all transactions and activities</li>
          <li><strong>Regulatory Changes:</strong> Tax treatment may change with evolving regulations</li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Geographic Restrictions">
        <p>
          Our services may not be available in all jurisdictions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Regulatory Compliance:</strong> Services may be restricted in certain countries</li>
          <li><strong>Implementation Partners:</strong> Local partners may not be available everywhere</li>
          <li><strong>Service Variations:</strong> Features may vary by geographic region</li>
          <li><strong>Legal Requirements:</strong> Additional compliance may be required in specific jurisdictions</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Limitation of Technology Licensing Scope">
        <p>
          Gambino's responsibility extends only to technology licensing, software support, and platform 
          maintenance. We are not responsible for implementation partner business decisions, venue 
          operations, consumer disputes, local compliance failures, or operational outcomes. Implementation 
          partners assume full responsibility for their business operations and consumer relationships.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact & Technology Support">
        <p>
          For questions about these disclosures or our technology licensing services, contact{' '}
          <a href="mailto:support@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            support@gambino.gold
          </a>. Consumer service inquiries should be directed to the appropriate implementation partner.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}