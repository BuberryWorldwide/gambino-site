// app/legal/cookies/page.js
'use client';

import { useState } from 'react'
import LegalPageLayout, { LegalSection } from '../../components/LegalPageLayout'
import { useTheme } from '../../components/ThemeProvider'
import { getThemeStyles } from '../../styles/themeStyles'

function CookieSettings() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);
  
  const [settings, setSettings] = useState({
    essential: true, // Always required
    functional: false,
    analytics: false
  });

  const updateSetting = (key, value) => {
    if (key === 'essential') return; // Can't disable essential
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`${styles.layout.card} space-y-4`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`font-semibold ${styles.text.primary}`}>Essential Cookies</h3>
          <p className={`text-sm ${styles.text.secondary}`}>Required for security and basic functionality</p>
        </div>
        <div className={`px-3 py-1 rounded text-sm font-medium ${
          isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'
        }`}>
          Always On
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className={`font-semibold ${styles.text.primary}`}>Functional Cookies</h3>
          <p className={`text-sm ${styles.text.secondary}`}>Remember preferences and settings</p>
        </div>
        <button
          onClick={() => updateSetting('functional', !settings.functional)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
            settings.functional 
              ? 'bg-yellow-500' 
              : isDark ? 'bg-neutral-700' : 'bg-neutral-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.functional ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className={`font-semibold ${styles.text.primary}`}>Analytics Cookies</h3>
          <p className={`text-sm ${styles.text.secondary}`}>Help us understand how you use our platform</p>
        </div>
        <button
          onClick={() => updateSetting('analytics', !settings.analytics)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
            settings.analytics 
              ? 'bg-yellow-500' 
              : isDark ? 'bg-neutral-700' : 'bg-neutral-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.analytics ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <button
          onClick={() => {
            // Save preferences logic here
            alert('Cookie preferences saved!');
          }}
          className={styles.buttons.small}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

export default function CookiesPage() {
  const { isDark } = useTheme();
  const styles = getThemeStyles(isDark);

  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies to improve your experience."
      badgeText="Cookie Policy"
      lastUpdated="September 4, 2025"
    >
      <LegalSection title="1. Summary">
        <p>
          Gambino currently uses only strictly-necessary mechanisms for security/basic functionality.
          We do <strong>not</strong> set advertising cookies. If we add optional analytics/functional cookies later,
          you&apos;ll see them here and can opt in.
        </p>
      </LegalSection>

      {/* Interactive settings (client) */}
      <LegalSection title="2. Your Preferences">
        <CookieSettings />
      </LegalSection>

      <LegalSection title="3. Categories We May Use (Future)">
        <ul className={`list-disc pl-5 space-y-2 ${styles.text.secondary}`}>
          <li><strong>Essential:</strong> security, load balancing, fraud prevention.</li>
          <li><strong>Functional (optional):</strong> remembering UI preferences.</li>
          <li><strong>Analytics (optional):</strong> aggregate, privacy-respecting usage stats.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit websites. They help 
          websites remember information about your visit, which can improve your experience and 
          help the site function properly.
        </p>
      </LegalSection>

      <LegalSection title="5. Essential Cookies">
        <p>
          These cookies are necessary for our platform to function and cannot be disabled:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Security:</strong> Protect against fraudulent activity and secure authentication</li>
          <li><strong>Session Management:</strong> Maintain your login session across page visits</li>
          <li><strong>Load Balancing:</strong> Distribute traffic efficiently across our servers</li>
          <li><strong>Compliance:</strong> Required for regulatory and legal compliance tracking</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Optional Cookies">
        <p>
          If we implement optional cookies in the future, they would include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Functional:</strong> Remember your preferences, language settings, and UI customizations</li>
          <li><strong>Analytics:</strong> Understand how users interact with our platform to improve services</li>
          <li><strong>Performance:</strong> Monitor platform performance and identify optimization opportunities</li>
        </ul>
        <p>
          These would always be opt-in and you could change your preferences at any time.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Cookies">
        <p>
          We do not currently use third-party advertising or tracking cookies. If we partner with 
          service providers who use cookies, we will:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clearly disclose these partnerships</li>
          <li>Ensure they meet our privacy standards</li>
          <li>Provide opt-out mechanisms where required</li>
          <li>Limit data sharing to what&apos;s necessary for the service</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Manage in Your Browser">
        <p>
          You can control cookies through your browser settings:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Block Cookies:</strong> Prevent all or specific types of cookies</li>
          <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
          <li><strong>Notifications:</strong> Get alerts when cookies are being set</li>
          <li><strong>Exceptions:</strong> Allow cookies for specific sites while blocking others</li>
        </ul>
        <p className={`text-sm ${styles.text.tertiary}`}>
          Note: Blocking essential cookies may prevent some platform features from working properly.
        </p>
      </LegalSection>

      <LegalSection title="9. Updates to This Policy">
        <p>
          We will update this Cookie Policy when we add new cookie types or change how we use 
          existing ones. Significant changes will be communicated through our platform and 
          this page will reflect the current policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          Questions about our cookie practices? Contact us at{' '}
          <a href="mailto:privacy@gambino.gold" className={`${styles.text.accent} ${styles.text.accentHover} underline decoration-dotted`}>
            privacy@gambino.gold
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}