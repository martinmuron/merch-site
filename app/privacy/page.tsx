import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy",
  description: "CURLO Privacy Policy - GDPR compliant privacy policy for Czech Republic and EU",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-sm text-gray-500 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-gray-700 leading-relaxed">
              CURLO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our
              website and use our services, in compliance with the General Data Protection Regulation (GDPR) and
              Czech Republic data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Controller Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CURLO is the data controller responsible for your personal data. If you have any questions about
              this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@curlo.com<br />
                <strong>Address:</strong> [Your Business Address in Czech Republic]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Information You Provide to Us</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our contact form to request a quote or inquire about products, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>First name and last name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Business type (e.g., Restaurant, Office, Retail, Healthcare, Education, Events)</li>
              <li>Product interest and estimated quantity</li>
              <li>Project details and custom messages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Session information via cookies (see our Cookie Policy)</li>
              <li>Pages visited and time spent on pages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Third-Party Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may collect limited data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Neon Database:</strong> Secure storage of contact inquiries and business data (PostgreSQL database hosted in EU)</li>
              <li><strong>Cloudinary:</strong> Image hosting and optimization for product images</li>
              <li><strong>Vercel:</strong> Website hosting and content delivery network</li>
              <li><strong>Google Fonts:</strong> Typography services (may collect minimal usage data)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Legal Basis for Processing (GDPR Article 6)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Consent (Art. 6(1)(a)):</strong> When you submit the contact form, you consent to us processing your data to respond to your inquiry</li>
              <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> To improve our website, analyze business trends, and prevent fraud</li>
              <li><strong>Contractual Necessity (Art. 6(1)(b)):</strong> To fulfill quote requests and provide the services you request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Responding to your quote requests and business inquiries</li>
              <li>Providing information about our products and services</li>
              <li>Communicating with you about your orders or projects</li>
              <li>Improving our website and user experience</li>
              <li>Complying with legal obligations</li>
              <li>Detecting and preventing fraud or security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Storage and Security</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Data Storage Location</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your data is stored securely on servers located within the European Union to comply with GDPR
              data localization requirements. We use industry-standard encryption (TLS/SSL) to protect data
              in transit and at rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Security Measures</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encrypted database connections</li>
              <li>Password hashing with bcrypt (12 rounds)</li>
              <li>Secure session management with JWT tokens</li>
              <li>Regular security audits and updates</li>
              <li>Access controls for administrative functions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Data Retention</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in
              this policy:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Contact inquiries:</strong> Retained for 2 years from the date of last contact</li>
              <li><strong>Admin user data:</strong> Retained for the duration of employment/contract plus 1 year</li>
              <li><strong>Technical logs:</strong> Retained for 90 days for security and troubleshooting purposes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              After these periods, your data will be securely deleted or anonymized unless we are legally
              required to retain it longer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject in the European Union and Czech Republic, you have the following rights:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Right to Access (Art. 15)</h4>
                <p className="text-gray-700">You can request a copy of the personal data we hold about you.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Rectification (Art. 16)</h4>
                <p className="text-gray-700">You can request correction of inaccurate or incomplete personal data.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Erasure / &quot;Right to be Forgotten&quot; (Art. 17)</h4>
                <p className="text-gray-700">You can request deletion of your personal data in certain circumstances.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Restriction of Processing (Art. 18)</h4>
                <p className="text-gray-700">You can request that we limit how we use your personal data.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Data Portability (Art. 20)</h4>
                <p className="text-gray-700">You can request to receive your data in a structured, machine-readable format.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Object (Art. 21)</h4>
                <p className="text-gray-700">You can object to processing based on legitimate interests or for direct marketing.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Right to Withdraw Consent (Art. 7(3))</h4>
                <p className="text-gray-700">You can withdraw your consent at any time where processing is based on consent.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-700">
                <strong>To exercise any of these rights, please contact us at:</strong> privacy@curlo.com
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We will respond to your request within 30 days as required by GDPR.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Sharing and Transfers</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Third-Party Sharing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal data to third parties. We only share your data with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Service providers necessary to operate our website (Neon, Cloudinary, Vercel)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business successors in the event of a merger or acquisition (with notice to you)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 International Transfers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All data is primarily stored within the EU. If any data is transferred outside the EU, we ensure
              adequate safeguards are in place, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Your explicit consent for the transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies to provide essential functionality. For detailed information about our
              use of cookies, please see our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are intended for businesses and individuals over the age of 18. We do not knowingly
              collect personal data from children under 16 (or the applicable age of consent in your country).
              If we discover that we have collected data from a child, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a data breach that poses a risk to your rights and freedoms, we will notify you
              and the relevant supervisory authority (Úřad pro ochranu osobních údajů - ÚOOÚ in Czech Republic)
              within 72 hours as required by GDPR Article 33.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Supervisory Authority</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to lodge a complaint with the Czech data protection authority:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong><br />
                Pplk. Sochora 27<br />
                170 00 Prague 7<br />
                Czech Republic<br />
                <strong>Phone:</strong> +420 234 665 111<br />
                <strong>Email:</strong> posta@uoou.cz<br />
                <strong>Website:</strong> <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.uoou.cz</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Posting a notice on our website homepage</li>
              <li>Sending an email notification (if we have your email address)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We encourage you to review this policy periodically to stay informed about how we protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this privacy policy or our data practices,
              please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>CURLO Data Protection Officer</strong><br />
                <strong>Email:</strong> privacy@curlo.com<br />
                <strong>Address:</strong> [Your Business Address in Czech Republic]<br />
                <strong>Phone:</strong> [Your Contact Number]
              </p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Cookie Policy
              </Link>
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CURLO. All rights reserved. | GDPR Compliant
          </p>
        </div>
      </footer>
    </div>
  )
}
