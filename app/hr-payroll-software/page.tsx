import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd,
  generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  BarChart3,
  Users,
  Briefcase,
  Monitor,
  Rocket,
  ShieldCheck,
  DollarSign,
  Clock,
  Layers,
  ArrowRight,
  Zap,
  RefreshCcw,
  FileCheck,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Payroll Software & Performance Appraisals | Integrated HR System",
  description:
    "Discover the power of integrating HR Payroll Software with Performance Appraisals. Streamline compensation, bonus calculations, and talent retention with Space HR.",
  keywords: [
    "hr payroll software",
    "performance appraisal software",
    "integrated hr system",
    "payroll and performance",
    "compensation management",
    "benefits administration",
  ],
  alternates: {
    canonical: "https://spacehr.net/hr-payroll-software",
  },
};

const faqs = [
  {
    question: "Why should I integrate payroll with performance appraisals?",
    answer:
      "Integrating these systems ensures accurate, data-driven compensation. Performance ratings can automatically trigger bonus calculations, raises, and commission payouts, eliminating manual data entry errors and speeding up the review cycle.",
  },
  {
    question: "Does Space HR handle complex bonus structures?",
    answer:
      "Yes. Our formula builder allows you to link specific KPIs or performance ratings to variable pay. For example, you can set a rule where a '5/5' rating equals a 10% bonus, and the system calculates it automatically.",
  },
  {
    question: "Can I use Space HR for payroll only?",
    answer:
      "Yes, Space HR is modular. However, you get the most value when using the unified platform, as it provides insights like 'Labor Cost vs. Productivity' and helps identify high performers who may be underpaid.",
  },
  {
    question: "Is the payroll system compliant with US tax laws?",
    answer:
      "Reviewing and updating tax tables is automatic in Space HR. We handle federal, state, and local tax withholdings and generate W-2s and 1099s.",
  },
  {
    question: "How does the appraisal system work?",
    answer:
      "Space HR supports various appraisal methods, including 360-degree feedback, OKRs (Objectives and Key Results), and traditional annual reviews. Managers and employees can track progress in real-time.",
  },
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

const _bc_hr_payroll = [{"name":"Home","url":"https://spacehr.net"},{"name":"HR Payroll Software","url":"https://spacehr.net/hr-payroll-software"}];

export default function PayrollAppraisalsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateBreadcrumbSchema(_bc_hr_payroll)} />
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
            Unified HR Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            The Perfect Pair: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Payroll & Appraisals
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop manually updating salaries after performance reviews. Integrate
            payroll and appraisals to automate bonuses, raises, and retention
            strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                See Integration Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Definition Block */}
      <section className="py-12 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-2">
              What is Integrated HR?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Integrated HR combines core administrative functions (like Payroll) with strategic talent management (Appraisals). Instead of separate silos, data flows seamlessly: performance reviews directly influence compensation, and payroll costs can be analyzed against employee productivity metrics in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Compare Our Guides
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hr-software"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Monitor className="w-4 h-4 text-blue-500" />
              HR Software Overview
            </Link>
            <Link
              href="/hrms"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-purple-500" />
              HRMS Deep Dive
            </Link>
            <Link
              href="/best-hr-software-small-business"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-green-500" />
              Small Business Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            The Hidden Cost of Disconnected Systems
          </h2>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Many companies use one software for payroll (like a bank service)
              and another for performance reviews (or worse, paper forms). This
              create a "data silo."
            </p>
            <p>
              When <strong>Payroll</strong> doesn't talk to{" "}
              <strong>Performance</strong>, you get:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manual data entry errors when updating salaries.</li>
              <li>Delayed bonus payouts affecting morale.</li>
              <li>
                Inability to correlate high performance with compensation costs
                (ROI).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works: Integration Flow */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How the Integration Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A seamless cycle from setting goals to rewarding success.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -translate-y-full -z-10"></div>

             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 mx-auto">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-center mb-2 text-gray-900 dark:text-white">1. Review</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">Manager completes performance review in Space HR, assigning a final rating (e.g., "Exceeds").</p>
             </div>

             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 mx-auto">
                    <RefreshCcw className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-center mb-2 text-gray-900 dark:text-white">2. Calculate</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">System applies your pre-set rules (e.g., "Exceeds = 5% Raise") and proposes compensation changes.</p>
             </div>

             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 mx-auto">
                    <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-center mb-2 text-gray-900 dark:text-white">3. Approve</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">HR or Finance leader approves the bulk salary updates with one click.</p>
             </div>

             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 mx-auto">
                    <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-center mb-2 text-gray-900 dark:text-white">4. Payout</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">Updated salary flows to Payroll immediately. Employee sees the raise on their next payslip.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Comparison Table (Re-inserted) */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Integrated vs. Siloed Systems
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121] text-left">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    Scenario
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase border-b dark:border-gray-700 w-1/3 bg-indigo-50/50 dark:bg-indigo-900/10">
                    With Space HR (Integrated)
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    Without Integration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Salary Updates
                  </td>
                  <td className="p-6 text-indigo-700 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/10 font-medium">
                    Auto-update after review approval
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Manual entry (Error prone)
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Bonus Calculations
                  </td>
                  <td className="p-6 text-indigo-700 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/10 font-medium">
                    Formula-based (e.g., Rating 5 = 10%)
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Spreadsheet math
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Turnover Analysis
                  </td>
                  <td className="p-6 text-indigo-700 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/10 font-medium">
                    Correlation: "Are we underpaying top performers?"
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Guesswork
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Employee Experience
                  </td>
                  <td className="p-6 text-indigo-700 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-900/10 font-medium">
                    One login for Payslips & Goals
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Multiple logins & passwords
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Re-inserted) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Pay-for-Performance Culture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparently link goals to rewards. When employees see a direct
                path from achievement to bonus, engagement soars.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Save 20+ Admin Hours/Month
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Eliminate the "payroll export" step. Approved raises flow directly to the next payroll run automatically.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Data-Backed Retention
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Identify flight risks: High performers who haven't had a raise in 12+ months are flagged by AI automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               Payroll & Performance FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Unify Your HR Data Today
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            See how Space HR connects the dots between performance and pay.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 h-14 text-lg font-bold"
              >
                Get a Custom Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
