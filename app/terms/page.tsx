import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Platform Usage Agreement | Space HR",
  description: "Space HR's terms of service. Read the terms governing your use of our platform and services.",
  alternates: {
    canonical: "https://spacehr.net/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: July 31, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing or using Space HR&apos;s platform and services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Space HR provides AI-powered HR automation software including payroll management, performance appraisals, compliance tracking, and employee self-service tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair the platform. You will not attempt to gain unauthorized access to any part of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                All content, features, and functionality of our platform are owned by Space HR and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, Space HR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have questions about these Terms, please contact us at legal@spacehr.net.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
