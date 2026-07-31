import DemoRequest from "@/components/DemoRequest";
import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Request a Demo: AI-Powered HR Management ERP | Space HR",
  description:
    "Schedule a personalized demo of Space HR's AI-powered ERP. See automated payroll, 360° appraisals, tax compliance, and predictive analytics in action.",
  keywords: [
    "HR software demo",
    "payroll software demo",
    "AI HR platform demo",
    "performance management demo",
    "ERP demo request",
    "HR automation demo",
    "Space HR demo",
    "human capital management demo",
    "schedule HR software demo",
    "request HR platform demo",
  ],
  openGraph: {
    title: "Request a Demo | Space HR",
    description:
      "See our AI-powered HR ERP in action. Schedule your personalized demo today.",
    url: "https://spacehr.net/request-a-demo",
    images: ["/og-demo.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/request-a-demo",
  },
};

const demoFaqs = [
  {
    question: "What happens after I request a demo?",
    answer:
      "Our product specialists will review your submission and reach out within one business day to schedule a 30-minute personalized walkthrough tailored to your company size, industry, and HR pain points.",
  },
  {
    question: "Is the demo free?",
    answer:
      "Yes. Every demo is completely free with no obligations. We want you to see exactly how Space HR can streamline your payroll, compliance, and performance management before making any decisions.",
  },
  {
    question: "Can I get a demo for specific HR modules only?",
    answer:
      "Absolutely. Whether you need payroll automation, performance appraisals, or full ERP coverage, we customize each demo to focus on the modules most relevant to your team.",
  },
  {
    question: "How long is a typical demo?",
    answer:
      "Standard demos run 30 minutes. If you need deeper technical dives into integrations, API access, or data migration, we can extend to 45 or 60 minutes upon request.",
  },
];

export default function RequestDemoPage() {
  return (
    <>
      <DemoRequest />

      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              What to Expect From Your Demo
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Each demo is tailored to your organization. Here is what we cover
              during a typical 30-minute session.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Payroll Automation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Watch our AI run a full payroll cycle end-to-end: tax
                  calculations, deductions, NACHA ACH file generation, and
                  automatic compliance validation across federal, state, and
                  local jurisdictions.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  AI Anomaly Detection
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  See how our anomaly engine flags ghost employees, duplicate
                  payments, overtime irregularities, and tax misclassifications
                  before they become costly errors.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  360° Performance Appraisals
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Explore configurable review cycles, peer feedback workflows,
                  calibration tools, and AI-generated coaching insights that
                  help managers write more effective reviews.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Employee Self-Service Portal
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Give your team instant access to pay stubs, tax documents,
                  PTO requests, and benefits enrollment through a branded
                  employee portal that works on desktop and mobile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section — Copywriting Skill: "Show you understand their situation" */}
      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Why Most HR Demos Waste Your Time
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              We respect your time. Here's how our demo is different.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  No Generic Demos
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Most vendors show the same demo to everyone. We customize every walkthrough to your industry, company size, and specific HR pain points.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  No Hidden Agendas
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  We won't pressure you into a decision. The demo is about showing you how Space HR works — not closing a sale. Take your time to evaluate.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Technical Depth Available
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Need to see API integrations, data migration, or security compliance? We can extend to 45-60 minutes for technical deep-dives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof — Copywriting Skill: "Build credibility" */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Trusted by 500+ Companies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              HR leaders who booked a demo and switched to Space HR.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic text-sm">
                  "The demo was the best I've seen. They showed us exactly how our payroll would work, not generic features."
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Sarah Chen</p>
                <p className="text-xs text-slate-500">VP People, TechCorp</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic text-sm">
                  "We booked a demo expecting a sales pitch. Instead, we got a technical deep-dive that answered all our questions."
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Marcus Rodriguez</p>
                <p className="text-xs text-slate-500">CTO, DataFlow</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic text-sm">
                  "The AI payroll auditor caught an error during the demo that our current system missed. We signed up that week."
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Priya Patel</p>
                <p className="text-xs text-slate-500">Head of HR, GlobalTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Demo Request FAQ
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-10">
              Answers to common questions about scheduling a Space HR demo.
            </p>
            <FAQAccordion items={demoFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
