import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Cookie Policy",
  description: "CURLO Cookie Policy - Information about cookies and tracking technologies",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-sm text-gray-500 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how CURLO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking
              technologies on our website. This policy is part of our commitment to transparency and compliance
              with the General Data Protection Regulation (GDPR) and the ePrivacy Directive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when
              you visit a website. They help the website remember your actions and preferences over time,
              improving your browsing experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies can be &quot;session cookies&quot; (temporary, deleted when you close your browser) or &quot;persistent
              cookies&quot; (remain on your device for a set period or until you delete them).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Maintain your session and keep you logged in (for admin users)</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Improve website performance and user experience</li>
              <li>Ensure website security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Strictly Necessary Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Purpose:</strong> Essential for the website to function properly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Duration:</strong> Session or up to 30 days
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Session cookies:</strong> Maintain your authentication session (admin users)</li>
                  <li><strong>NextAuth.js cookies:</strong> Secure session tokens for admin authentication</li>
                  <li><strong>CSRF tokens:</strong> Protect against cross-site request forgery attacks</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Legal Basis:</strong> These cookies are necessary for the website&apos;s basic functionality
                  and do not require your consent under GDPR.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Functional Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Purpose:</strong> Remember your preferences and enhance user experience.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Duration:</strong> Up to 1 year
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>localStorage - savedProducts:</strong> Remember products you&apos;ve favorited (stored in browser, not cookies)</li>
                  <li><strong>Language preferences:</strong> Remember your language selection</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Performance Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Status:</strong> Currently NOT in use
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not currently use analytics or performance tracking cookies. If we implement these in
                  the future, we will update this policy and request your consent.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Third-Party Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Google Fonts:</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses Google Fonts to improve typography. Google may collect minimal usage data
                  such as IP address and browser information. For more information, see{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Detailed Cookie List</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">next-auth.session-token</td>
                    <td className="border border-gray-300 px-4 py-2">Admin authentication session</td>
                    <td className="border border-gray-300 px-4 py-2">30 days</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">next-auth.csrf-token</td>
                    <td className="border border-gray-300 px-4 py-2">Security protection</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">next-auth.callback-url</td>
                    <td className="border border-gray-300 px-4 py-2">Redirect after login</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Local Storage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to cookies, we use browser local storage to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>savedProducts:</strong> Store your favorited products locally in your browser (not sent
                to our servers)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Local storage is similar to cookies but stores data only in your browser and is not transmitted
              to our servers with every request. You can clear this data at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Cookie Choices</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies (this may affect website functionality)</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              <strong>How to manage cookies in popular browsers:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Chrome:</strong>{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Chrome Cookie Settings
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mozilla Firefox Cookie Settings
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Apple Safari Cookie Settings
                </a>
              </li>
              <li>
                <strong>Edge:</strong>{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Edge Cookie Settings
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Opt-Out Options</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can also opt out of third-party cookies using industry tools:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Your Online Choices (EU):</strong>{" "}
                <a
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.youronlinechoices.com
                </a>
              </li>
              <li>
                <strong>Google Analytics Opt-out:</strong>{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-700">
                <strong>Please note:</strong> Blocking or deleting cookies may impact your user experience and
                some features of the website may not function properly, particularly admin authentication.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Do Not Track (DNT)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some browsers have a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want
              your online activity tracked. Currently, there is no industry standard for how to respond to DNT
              signals. At this time, our website does not respond to DNT signals, but we only use essential
              cookies necessary for functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for
              legal reasons. We will notify you of any significant changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Displaying a notice on our website</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We encourage you to review this Cookie Policy periodically to stay informed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>CURLO Data Protection Team</strong><br />
                <strong>Email:</strong> privacy@curlo.com<br />
                <strong>Address:</strong> [Your Business Address in Czech Republic]<br />
                <strong>Phone:</strong> [Your Contact Number]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Additional Resources</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about cookies and how to manage them, visit:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  All About Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Your Online Choices (EU)
                </a>
              </li>
              <li>
                <a
                  href="https://ico.org.uk/for-the-public/online/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  UK Information Commissioner&apos;s Office (ICO) - Cookies
                </a>
              </li>
            </ul>
          </section>

          <div className="border-t pt-8 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
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
