import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service",
  description: "CURLO Terms of Service - Legal terms and conditions for using our services",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-sm text-gray-500 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-gray-700 leading-relaxed">
              Welcome to CURLO. These Terms of Service ("Terms") govern your access to and use of our website,
              products, and services (collectively, the "Services"). By accessing or using our Services, you
              agree to be bound by these Terms and our Privacy Policy.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-700">
                <strong>Important:</strong> Please read these Terms carefully before using our Services. If you
                do not agree with any part of these Terms, you may not access or use our Services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About CURLO</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CURLO is a B2B merchandise catalog website operated under the laws of the Czech Republic. We
              provide custom branded products and promotional merchandise for businesses, including restaurants,
              offices, retail stores, healthcare facilities, educational institutions, and event organizers.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Business Information:</strong><br />
                <strong>Company Name:</strong> CURLO<br />
                <strong>Registration:</strong> [IČO/Company Registration Number]<br />
                <strong>Address:</strong> [Your Business Address in Czech Republic]<br />
                <strong>Email:</strong> info@curlo.com<br />
                <strong>VAT ID:</strong> [DIČ - Czech VAT Number]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing our website at [your-domain.com] or using our Services, you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Acknowledge that you have read and understood these Terms</li>
              <li>Agree to comply with these Terms and all applicable laws and regulations</li>
              <li>Confirm that you are at least 18 years old or have parental consent</li>
              <li>Represent that you have the authority to enter into these Terms on behalf of your business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services Description</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Product Catalog</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website provides a catalog of custom branded merchandise, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Apparel (t-shirts, hats, aprons)</li>
              <li>Drinkware (mugs, water bottles, glassware)</li>
              <li>Office supplies (pens, notebooks, mouse pads)</li>
              <li>Bags (tote bags, backpacks)</li>
              <li>Accessories (keychains, lanyards)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Quote-Based System</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              CURLO operates as a catalog and quote request platform. We do not process direct purchases or
              payments through the website. Instead:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>You browse our product catalog</li>
              <li>You submit a quote request through our contact form</li>
              <li>We review your requirements and provide a custom quote</li>
              <li>Formal orders and payments are handled separately via invoice or agreed payment terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 No Direct Sales</h3>
            <p className="text-gray-700 leading-relaxed">
              This website is for informational and inquiry purposes only. No binding contracts are formed
              through the website. All sales are subject to separate written agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Accurate Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When submitting quote requests or contacting us, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Not impersonate any person or entity</li>
              <li>Not provide false or misleading information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree NOT to use our Services to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Submit spam, fraudulent requests, or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the website's functionality or servers</li>
              <li>Use automated tools (bots, scrapers) without our written permission</li>
              <li>Copy, reproduce, or distribute our content without authorization</li>
              <li>Engage in any activity that could harm our business reputation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Admin Access</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are granted admin access to our platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Keep your login credentials confidential and secure</li>
              <li>Do not share your account with others</li>
              <li>Notify us immediately if you suspect unauthorized access</li>
              <li>Use admin features only for legitimate business purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Text, graphics, logos, images, photographs</li>
              <li>Product descriptions and specifications</li>
              <li>Software, code, and functionality</li>
              <li>Design, layout, and visual appearance</li>
              <li>Trademarks, service marks, and trade names</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              ...is owned or licensed by CURLO and protected by copyright, trademark, and other intellectual
              property laws of the Czech Republic, European Union, and international treaties.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Limited License</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access and use the website for personal or business informational purposes</li>
              <li>View and download product information for internal use</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may NOT reproduce, distribute, modify, create derivative works, publicly display, or exploit
              any content without our prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Customer Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you submit logos, designs, or branding materials for custom products:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>You retain ownership of your intellectual property</li>
              <li>You grant us a license to use your materials solely to fulfill your order</li>
              <li>You represent that you have the right to use and authorize us to use these materials</li>
              <li>You agree to indemnify us against any claims related to your materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Product Information and Pricing</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Information Accuracy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide accurate product information and images. However:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Product descriptions, images, and specifications are subject to change</li>
              <li>Colors may vary slightly due to display settings</li>
              <li>We do not guarantee that all products are available at all times</li>
              <li>Errors or inaccuracies may occur and will be corrected when discovered</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prices displayed on the website are:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Indicative starting prices only (not binding quotes)</li>
              <li>In Czech Koruna (CZK) unless otherwise specified</li>
              <li>Subject to change without notice</li>
              <li>May vary based on quantity, customization, and delivery requirements</li>
              <li>Exclusive of VAT (DPH) unless stated otherwise</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Final pricing will be provided in your custom quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Quote Requests and Orders</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Quote Process</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>You submit a quote request through our contact form</li>
              <li>We review your requirements and respond within 2-5 business days</li>
              <li>We provide a detailed quote including pricing, specifications, and timeline</li>
              <li>The quote is valid for 30 days unless otherwise stated</li>
              <li>You accept the quote and we proceed with a formal agreement</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 No Obligation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Submitting a quote request does not create any obligation for either party. We reserve the right
              to decline any quote request for any reason.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.3 Minimum Orders</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most products have minimum order quantities. These will be specified in your quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our collection, use, and protection of your personal data is
              governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>,
              which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our Services, you consent to our data practices as described in the Privacy Policy and
              acknowledge your rights under GDPR, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification and erasure</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.1 "As Is" Basis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website and Services are provided "as is" and "as available" without warranties of any kind,
              either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Merchantability or fitness for a particular purpose</li>
              <li>Accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Freedom from viruses or harmful components</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by Czech and EU law, CURLO shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from your use or inability to use our Services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party content or actions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our total liability for any claim arising from these Terms or your use of our Services shall not
              exceed the amount paid by you (if any) for the Services in the 12 months prior to the claim.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.3 Exceptions</h3>
            <p className="text-gray-700 leading-relaxed">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by
              negligence, fraud, or any liability that cannot be excluded or limited under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless CURLO, its officers, directors, employees,
              agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses
              (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or regulation</li>
              <li>Your violation of any third-party rights, including intellectual property rights</li>
              <li>Content you submit or transmit through our Services</li>
              <li>Your use or misuse of our Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites or services (e.g., Google Fonts, image
              hosting). We do not control, endorse, or assume responsibility for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>The content, privacy policies, or practices of third-party sites</li>
              <li>Any damage or loss caused by your use of third-party services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.1 Our Right to Terminate</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to our Services at any time, without
              notice or liability, for any reason, including if:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>You breach these Terms</li>
              <li>You engage in fraudulent or illegal activity</li>
              <li>We discontinue or modify our Services</li>
              <li>Required by law or regulatory authority</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.2 Effect of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use our Services will immediately cease. Provisions that by their
              nature should survive termination (including disclaimers, limitations of liability, and
              indemnification) shall remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Czech Republic
              and the European Union, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.2 Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or your use of our Services shall be subject to the
              exclusive jurisdiction of the courts of the Czech Republic.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.3 Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before initiating formal legal proceedings, we encourage you to contact us at legal@curlo.com to
              seek an informal resolution of any disputes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.4 EU Consumer Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              If you are a consumer in the European Union, you may also use the European Commission's Online
              Dispute Resolution (ODR) platform at{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. When we make changes, we will:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Update the "Last Updated" date at the top of this page</li>
              <li>Post a notice on our website homepage</li>
              <li>For material changes, notify you via email (if we have your email address)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of our Services after changes take effect constitutes acceptance of the
              revised Terms. If you do not agree to the changes, you must stop using our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. General Provisions</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement
              between you and CURLO regarding your use of our Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
              will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of
              such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms or any rights hereunder without our prior written
              consent. We may assign or transfer these Terms at any time without restriction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15.5 Language</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are provided in English. In the event of any conflict between translations, the
              English version shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or feedback about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>CURLO Legal Department</strong><br />
                <strong>Email:</strong> legal@curlo.com<br />
                <strong>General Inquiries:</strong> info@curlo.com<br />
                <strong>Address:</strong> [Your Business Address in Czech Republic]<br />
                <strong>Phone:</strong> [Your Contact Number]<br />
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM CET
              </p>
            </div>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <p className="text-gray-700 text-center mb-4">
              <strong>By using our Services, you acknowledge that you have read, understood, and agree to be
              bound by these Terms of Service.</strong>
            </p>
          </div>

          <div className="border-t pt-8 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Cookie Policy
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
