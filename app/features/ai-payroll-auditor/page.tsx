import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Calculator,
  ArrowRight,
  Lock,
  RefreshCw,
  Sparkles,
  FileText,
  DollarSign,
  Clock,
  Users,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  softwareSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Payroll Auditor — Automated Payroll Anomaly Detection | Space HR",
  description:
    "Detect payroll anomalies before they cost you. Space HR's AI Payroll Auditor uses machine learning to scan every payroll run for errors in gross-to-net calculations, FUTA/SICA tax withholding, and NACHA-compliant ACH file generation. Reduce payroll errors by 99%.",
  keywords: [
    "AI payroll auditor",
    "automated payroll anomaly detection",
    "payroll error detection software",
    "NACHA-compliant payroll software",
    "gross-to-net calculation automation",
    "FUTA SICA tax withholding",
    "payroll compliance AI",
    "ACH file generation",
    "payroll audit automation",
    "liability ledger management",
    "multi-state payroll compliance",
    "payroll fraud detection",
    "automated payroll processing",
    "payroll reconciliation software",
  ],
  openGraph: {
    title: "AI Payroll Auditor — Automated Anomaly Detection | Space HR",
    description:
      "Eliminate payroll errors with AI-powered anomaly detection. Scan every payroll run for compliance issues, tax miscalculations, and data inconsistencies.",
    url: "https://spacehr.net/features/ai-payroll-auditor",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR AI Payroll Auditor dashboard showing automated anomaly detection and compliance scanning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Payroll Auditor | Space HR",
    description:
      "Detect payroll anomalies before they cost you. AI-powered auditing for NACHA compliance, tax withholding, and gross-to-net accuracy.",
  },
  alternates: {
    canonical: "https://spacehr.net/features/ai-payroll-auditor",
  },
};

const faqs = [
  {
    question: "How does AI detect payroll anomalies?",
    answer:
      "Space HR's AI Payroll Auditor uses machine learning algorithms trained on millions of payroll transactions to identify statistical outliers. It compares each employee's current payroll data against historical patterns, flagging anomalies such as sudden salary spikes, duplicate payments, incorrect tax withholdings, overtime miscalculations, and unauthorized deductions — all before the payroll run is finalized.",
  },
  {
    question: "What is a NACHA-compliant ACH file?",
    answer:
      "A NACHA-compliant ACH (Automated Clearing House) file follows the formatting standards set by the National Automated Clearing House Association. These files are used for electronic fund transfers including direct deposit payroll payments. Space HR automatically generates NACHA-compliant ACH files with proper record formatting, routing validation, and batch totals to ensure seamless bank processing.",
  },
  {
    question: "Can the AI Payroll Auditor handle multi-state tax compliance?",
    answer:
      "Yes. The AI Payroll Auditor automatically validates federal, state, and local tax withholdings across all 50 US states. It accounts for reciprocity agreements, state-specific SUTA rates, local income taxes, and varying FUTA credit reductions. The system alerts you to any discrepancies before payroll is processed.",
  },
  {
    question: "How does gross-to-net calculation automation work?",
    answer:
      "Space HR automates the entire gross-to-net calculation pipeline: starting from gross pay (salary + overtime + bonuses), it sequentially applies pre-tax deductions (401k, HSA, FSA), calculates federal income tax, state/local taxes, FICA (Social Security + Medicare), FUTA, and post-tax deductions to arrive at the final net pay. The AI auditor verifies each step against current tax tables and flags any calculation errors.",
  },
  {
    question: "What types of payroll anomalies does the system detect?",
    answer:
      "The AI detects a wide range of anomalies including: duplicate employee payments, ghost employee entries, overtime calculation errors, incorrect tax bracket applications, missing or invalid Social Security numbers, unauthorized pay rate changes, benefits deduction discrepancies, retroactive pay miscalculations, and FLSA minimum wage violations.",
  },
  {
    question: "How does the liability ledger integration work?",
    answer:
      "Space HR maintains a real-time liability ledger that tracks all payroll-related obligations including accrued wages, tax liabilities (federal, state, FICA, FUTA), benefits payable, and garnishment obligations. The AI auditor reconciles the liability ledger against actual payroll disbursements each cycle, ensuring your books are always balanced and audit-ready.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  {
    name: "AI Payroll Auditor",
    url: "https://spacehr.net/features/ai-payroll-auditor",
  },
]);

export default function AIPayrollAuditorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={softwareSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HEADER */}
      <div className="pt-24 px-6 container mx-auto">
        <Link
          href="/features"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Features
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" /> AI-Powered Payroll Compliance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI Payroll Auditor: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Automated Anomaly Detection
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stop payroll errors before they happen. Space HR&apos;s AI Payroll
              Auditor scans every payroll run in real-time, detecting anomalies
              in <strong>gross-to-net calculations</strong>,{" "}
              <strong>FUTA/SICA tax withholding</strong>, and{" "}
              <strong>NACHA-compliant ACH file generation</strong>. Reduce
              payroll errors by 99% and eliminate compliance risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-red-600 hover:bg-red-700"
                >
                  See AI Auditor in Action{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/features/payroll">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 font-semibold"
                >
                  Full Payroll Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-red-200 dark:border-red-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Gross-to-Net Verified
                    </div>
                    <div className="text-xs text-gray-500">
                      All 847 calculations passed
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-red-200 dark:border-red-700">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-red-600">
                      Anomaly Detected
                    </div>
                    <div className="text-xs text-gray-500">
                      Employee #4521: Overtime spike +340%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      NACHA ACH Compliant
                    </div>
                    <div className="text-xs text-gray-500">
                      File validated, ready for submission
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Tax Withholding Verified
                    </div>
                    <div className="text-xs text-gray-500">
                      FUTA, SICA, State — all compliant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Automated Payroll Anomaly Detection Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI engine runs a comprehensive audit on every payroll cycle,
              checking hundreds of data points across your entire workforce in
              seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "1. Data Ingestion",
                description:
                  "The AI ingests all payroll data including hours worked, pay rates, tax elections, benefits deductions, and historical patterns for every employee.",
                color: "blue",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "2. Pattern Analysis",
                description:
                  "Machine learning models compare current payroll data against historical baselines, identifying statistical outliers and unusual patterns.",
                color: "purple",
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "3. Anomaly Flagging",
                description:
                  "Suspicious entries are flagged with severity levels — from minor discrepancies to critical compliance violations requiring immediate attention.",
                color: "red",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "4. Resolution & Approval",
                description:
                  "HR reviews flagged items with AI-suggested corrections. Once resolved, the clean payroll is approved and NACHA-compliant ACH files are generated.",
                color: "green",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-${step.color}-100 dark:bg-${step.color}-900/30 flex items-center justify-center text-${step.color}-600 mb-6`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Payroll Audit Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From gross-to-net verification to NACHA compliance, every aspect
              of your payroll is audited automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Gross-to-Net Calculation Verification",
                description:
                  "Validates every step of the gross-to-net pipeline: base pay, overtime, pre-tax deductions (401k, HSA, FSA), federal/state income tax, FICA contributions, and post-tax deductions.",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "FUTA/SICA Tax Withholding Audit",
                description:
                  "Automatically verifies Federal Unemployment Tax Act (FUTA) and state unemployment (SUTA/SICA) withholdings against current rate tables and wage base limits.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "NACHA-Compliant ACH Generation",
                description:
                  "Generates and validates ACH files following NACHA formatting standards. Checks routing numbers, account validation, batch totals, and file-level controls.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Liability Ledger Reconciliation",
                description:
                  "Maintains a real-time liability ledger tracking accrued wages, tax obligations, benefits payable, and garnishments. Reconciles against actual disbursements each cycle.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Predictive Cost Forecasting",
                description:
                  "Uses historical payroll data to forecast future labor costs, tax obligations, and benefits expenses. Helps CFOs plan budgets with AI-driven accuracy.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Multi-State Compliance Engine",
                description:
                  "Handles complex multi-state payroll scenarios including reciprocity agreements, varying SUTA rates, local income taxes, and state-specific reporting requirements.",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Fraud Detection & Prevention",
                description:
                  "Identifies ghost employees, duplicate payments, unauthorized rate changes, and suspicious patterns that may indicate payroll fraud or data manipulation.",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Automated Reconciliation",
                description:
                  "Automatically reconciles payroll data against time & attendance records, benefits enrollment, and tax filing requirements to ensure data consistency.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Real-Time Compliance Monitoring",
                description:
                  "Continuously monitors regulatory changes at federal, state, and local levels. Automatically updates tax tables and compliance rules to keep your payroll current.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact on Payroll Operations
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Companies using Space HR&apos;s AI Payroll Auditor see dramatic
              improvements in accuracy, compliance, and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "99%", label: "Reduction in Payroll Errors" },
              { metric: "85%", label: "Faster Payroll Processing" },
              { metric: "$0", label: "Compliance Penalties" },
              { metric: "100%", label: "NACHA ACH Compliance" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/features/payroll"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                5-Step Payroll Wizard →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated payroll processing with built-in tax compliance and
                direct deposit via NACHA-compliant ACH files.
              </p>
            </Link>
            <Link
              href="/features/tax"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Tax Compliance Engine →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated FUTA/SICA tax withholding, multi-state compliance, and
                real-time tax table updates.
              </p>
            </Link>
            <Link
              href="/features/cost-prediction"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Predictive Cost Analytics →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI-driven labor cost forecasting, budget trend analysis, and
                year-end financial predictions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About AI Payroll Auditing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about automated payroll anomaly
              detection and compliance.
            </p>
          </div>
          <FAQAccordion items={faqs} />

      {/* Cross-link to payroll-anomaly-detection */}
      <section className="py-8 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Learn how our AI catches errors in practice:{" "}
            <a href="/payroll-anomaly-detection" className="text-red-600 dark:text-red-400 font-semibold hover:underline">
              Payroll Anomaly Detection — How It Works &amp; What It Catches
            </a>
          </p>
        </div>
      </section>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Stop Payroll Errors Before They Cost You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join enterprises that trust Space HR&apos;s AI Payroll Auditor to
            protect their payroll operations. Schedule a demo to see automated
            anomaly detection in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full px-8 font-semibold bg-red-600 hover:bg-red-700"
              >
                Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/compare/rippling">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold"
              >
                Compare vs Rippling
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
