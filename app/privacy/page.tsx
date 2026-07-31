import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection & GDPR | Space HR",
  description: "Space HR's privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://spacehr.net/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: July 31, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when you request a demo, create an account, or contact us. This may include your name, email address, company name, job title, and phone number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use the information we collect to provide and improve our services, communicate with you, send marketing communications (with your consent), and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our platform, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@spacehr.net.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
