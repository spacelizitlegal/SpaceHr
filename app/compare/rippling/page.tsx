import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  Laptop,
  Users,
  Target,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rippling vs Space HR: Why You Need AI Audits | Space HR",
  description:
    "Rippling automates speed, but Space HR ensures safety. prevent payroll errors and compliance risks with our built-in AI Audit layer.",
  keywords: [
    "rippling alternative",
    "space hr vs rippling",
    "payroll audit software",
    "compliance focused hr software",
    "safer payroll alternative",
  ],
};

const faqs = [
  {
    question: "Why should I choose Space HR over Rippling?",
    answer:
      "Rippling is optimized for speed and IT provisioning. Space HR is optimized for **Safety and Compliance**. We include a pre-processing AI Audit layer that catches payroll errors and tax anomalies before they happen.",
  },
  {
    question: "Is Space HR slower than Rippling?",
    answer:
      "No. We offer the same automated workflows, but with an added 'Safety Check' step. It takes milliseconds for our AI to scan your data, ensuring you don't trade accuracy for speed.",
  },
  {
    question: "Does Space HR handle global payroll?",
    answer:
      "Yes. Like Rippling, we support global teams. However, our Global Tax Engine validates local statutory requirements in real-time to prevent costly compliance fines.",
  },
  {
    question: "What is the 'Safety Gap'?",
    answer:
      "The Safety Gap is the risk exposure created by automating bad data. If you automate a payroll run with an error, you just make the mistake faster. Space HR closes this gap by validating data *before* automation runs.",
  },
  {
    question: "How does the pricing compare?",
    answer:
      "Space HR offers all-in-one pricing. Rippling charges separately for 'Clouds' (HR, IT, Finance) and individual apps. For a safety-conscious finance team, Space HR is often 30-40% more cost-effective.",
  },
];

const ripplingBreadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Rippling", url: "https://spacehr.net/compare/rippling" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function CompareRipplingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 font-semibold text-sm">
            Speed vs Safety
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Rippling Automates Workflows. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
               We Automate Compliance.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don't just make mistakes faster. Choose Space HR for safer, audit-ready payroll that catches errors before you click send.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-orange-600 hover:bg-orange-700 text-white border-none shadow-xl">
                Run a Risk Audit
              </Button>
            </Link>
            <Link href="/request-a-demo">
               <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                See the Difference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Safety Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Why CFOs prefer Space HR over generic automation tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    Feature
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">
                    Space HR
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    Rippling
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Payroll Audits
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Pre-Processing AI Layer.</strong> Scans for errors <em>before</em> execution.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Post-Mortem.</strong> You find errors after they happen.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-orange-500" />
                      Automation Logic
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Safe-Mode.</strong> Automations pause if anomaly is detected.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Unchecked.</strong> If trigger is met, action happens blindly.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-blue-500" />
                       Data Integrity
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Continuous Validation.</strong> Constant partial-audit of database.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Input-Dependent.</strong> Garbage in, garbage out.
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Target className="w-4 h-4 text-purple-500" />
                       Focus
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Financial Safety & Accuracy.</strong>
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Device Management & Speed.</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why HR Leaders Prefer Space HR
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When culture matters more than computer inventory.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Employee-Centric Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our interface is designed to engage employees, not just admins. Beautiful profiles, easy goal tracking, and mobile-first access.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Strategic Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Go beyond "doing reviews." Use our tools to actively develop skills, track career progression, and build succession plans.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                 Ask questions in plain English: "Who is at risk of leaving?" or "Show me the top performers in Sales." Get instant answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               Frequently Asked Questions
            </h2>
             <p className="text-gray-600 dark:text-gray-400">
               Comparing the finer details.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prioritize Your People
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            See why companies focused on growth choose Space HR over IT-focused platforms.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Custom Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
