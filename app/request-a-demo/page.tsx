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
