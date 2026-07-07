import { Button } from "@/components/ui/Button";
import {
  Check,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
  TrendingUp,
  Globe,
  Zap,
  Users,
  Shield,
  Calculator,
  Play,
  ArrowRight,
  Award,
  Lock,
  RefreshCw,
  Sparkles,
  Building2,
  Banknote,
  Target,
  PieChart,
  Wallet,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  softwareSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Payroll Automation: Anomaly Detection & ACH | Space HR",
  description:
    "Eliminate payroll errors by 99% with AI anomaly detection. Generate NACHA-compliant ACH files and handle tax withholding via an automated 5-step wizard",
  keywords: [
    "AI payroll automation",
    "payroll anomaly detection",
    "ACH file generation",
    "automated tax withholding",
    "payroll compliance software",
    "NACHA ACH files",
    "payroll auditing AI",
    "automated payroll processing",
    "tax compliance automation",
    "payroll wizard software",
    "multi-state payroll",
    "payroll error detection",
    "direct deposit processing",
    "pay stub generation",
  ],
  openGraph: {
    title: "AI Payroll Automation | Space HR",
    description:
      "5-step payroll wizard with automated auditing, tax compliance, and ACH generation. Reduce payroll errors by 99%.",
    url: "https://spacehr.net/features/payroll",
    images: [
      {
        url: "/og-payroll.png",
        width: 1200,
        height: 630,
        alt: "Space HR AI Payroll Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Payroll Automation | Space HR",
    description:
      "5-step payroll wizard with automated auditing, tax compliance, and ACH generation.",
    images: ["/og-payroll.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/payroll",
  },
};

const payrollFaqs = [
  {
    question: "How does AI detect payroll anomalies during processing?",
    answer:
      "Space HR's AI payroll engine uses machine learning trained on millions of payroll transactions to establish baseline patterns for each employee. Before every run, it compares current data against historical averages, flagging deviations greater than 5% in base pay, sudden overtime spikes, duplicate payment entries, and unauthorized rate changes. All anomalies are presented for HR review before the payroll is finalized and ACH files are generated.",
  },
  {
    question: "What is a NACHA-compliant ACH file and why does it matter?",
    answer:
      "A NACHA-compliant ACH file follows the exact formatting standards set by the National Automated Clearing House Association for electronic fund transfers. Payroll direct deposits that don't conform to NACHA standards will be rejected by banks, causing delayed payments. Space HR automatically generates NACHA-compliant ACH files with proper record formats, routing number validation, batch totals, and file hash checks — ensuring every direct deposit is processed on time without manual file preparation.",
  },
  {
    question: "How does gross-to-net calculation work in Space HR?",
    answer:
      "The gross-to-net calculation pipeline in Space HR processes each employee's pay in a defined sequence: starting from gross wages (base + overtime + bonuses + commissions), it applies pre-tax deductions (401k, HSA, FSA), calculates federal income tax withholding, then state/local income taxes, FICA contributions (Social Security 6.2% + Medicare 1.45%), FUTA employer tax, and finally post-tax deductions (Roth 401k, wage garnishments, voluntary deductions) to arrive at net pay. The AI auditor verifies every step against current IRS tables before payroll is finalized.",
  },
  {
    question: "How does Space HR handle FUTA and SICA tax withholding?",
    answer:
      "Space HR automatically calculates FUTA (Federal Unemployment Tax Act) at the standard employer rate of 6.0% on the first $7,000 of each employee's wages, applying the 5.4% credit for timely state tax payments to reach the effective 0.6% rate. For SICA/SUTA (State Unemployment Tax), the system applies your state-specific experience rate and wage base limits automatically. All calculations are logged in the liability ledger for audit readiness and financial reporting.",
  },
  {
    question: "What is a liability ledger and how does Space HR manage it?",
    answer:
      "The liability ledger tracks all payroll obligations your organization owes but hasn't yet remitted — including accrued wages, federal/state tax liabilities, FICA, FUTA, benefits payable, and garnishments. Space HR maintains a real-time liability ledger that updates after every payroll run, reconciles against actual disbursements, and generates audit-ready balance reports. This ensures your books are always accurate for financial reporting and tax filings.",
  },
  {
    question: "Does Space HR support multi-state payroll compliance?",
    answer:
      "Yes. Space HR handles payroll across all 50 US states, managing state income tax withholding, SUTA rates, local payroll taxes, reciprocity agreements, and varying pay frequency requirements. The AI compliance engine automatically updates when tax rates change, so you're always processing with current rules — without any manual configuration.",
  },
];

const payrollBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  { name: "Payroll Automation", url: "https://spacehr.net/features/payroll" },
]);

export default function AIPayrollPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={softwareSchema} />
      <JsonLd data={generateFAQSchema(payrollFaqs)} />
      <JsonLd data={payrollBreadcrumb} />
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
              <ShieldCheck className="w-4 h-4" /> AI-Powered Payroll Engine
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Precision Payroll. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Powered by Intelligence.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Move beyond spreadsheets. Our AI engine detects anomalies,
              predicts overtime costs, and ensures compliance across
              jurisdictions before you ever hit "Run Payroll."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer w-full sm:w-auto"
                >
                  Modernize Your Payroll
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://cad.spaceaiapp.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer w-full sm:w-auto"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Try for Free
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/professional-woman-laptop.webp"
                alt="Space HR AI payroll dashboard showing gross-to-net calculation automation, NACHA-compliant ACH file generation, and payroll anomaly detection"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              {/* Dashboard Overlay Preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Payroll Processing
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-medium">
                    Live
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    85%
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Processing 247 employees • 0 anomalies detected
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99%
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Error Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                5 Min
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Average Payroll Run
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-green-100 text-sm md:text-base">
                States Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                $2.3M
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Avg Errors Prevented/Year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4" /> Core Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Payroll Intelligence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Automated oversight that catches errors before they become
              problems—saving time, money, and compliance headaches
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                color: "red",
                title: "Anomaly Detection",
                description:
                  "AI-powered scanning catches issues before they become costly mistakes",
                points: [
                  "Flags unusual pay rate variances automatically",
                  "Detects duplicate employee entries in real-time",
                  "Validates overtime against historical patterns",
                  "Identifies suspicious deduction changes",
                ],
              },
              {
                icon: TrendingUp,
                color: "blue",
                title: "Predictive Forecasting",
                description:
                  "Project future labor costs with confidence and plan ahead",
                points: [
                  "Projects labor costs based on hiring trends",
                  "Estimates year-end budget impact accurately",
                  "Suggests optimal headcount adjustments",
                  "Seasonal pattern recognition",
                ],
              },
              {
                icon: ShieldCheck,
                color: "green",
                title: "Smart Tax Compliance",
                description:
                  "Stay compliant across all jurisdictions without manual work",
                points: [
                  "Auto-updates tax tables quarterly",
                  "Handles multi-state employee taxation",
                  "Validates W-4 withholding accuracy",
                  "Tracks wage base limits automatically",
                ],
              },
            ].map((item, i) => {
              const colorClasses = {
                red: {
                  bg: "bg-red-100 dark:bg-red-900/30",
                  icon: "text-red-600 dark:text-red-400",
                },
                blue: {
                  bg: "bg-blue-100 dark:bg-blue-900/30",
                  icon: "text-blue-600 dark:text-blue-400",
                },
                green: {
                  bg: "bg-green-100 dark:bg-green-900/30",
                  icon: "text-green-600 dark:text-green-400",
                },
              }[item.color];

              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colorClasses?.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-7 h-7 ${colorClasses?.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAYROLL DASHBOARD PREVIEW */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
                <BarChart3 className="w-4 h-4" /> Real-Time Dashboard
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Visibility Into Every Payroll Run
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Monitor payroll status, track anomalies, and view real-time cost
                breakdowns from a single, intuitive dashboard designed for
                payroll professionals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Live Processing Status
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Watch payroll calculations happen in real-time with
                      step-by-step progress
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Anomaly Alerts
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Instant notifications when AI detects unusual patterns or
                      potential errors
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <PieChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Cost Breakdown
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Visual breakdown of gross pay, taxes, deductions, and net
                      pay
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold">Payroll Dashboard</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                      Q1 2026
                    </span>
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        247
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Employees
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        $425K
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Total Payroll
                      </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        0
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Anomalies
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Processing Progress
                      </span>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        Complete
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>All checks passed • Ready for ACH generation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PAYROLL WIZARD */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-4 border border-green-200 dark:border-green-800">
              <Target className="w-4 h-4" /> Guided Workflow
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              5-Step Payroll Wizard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete your entire payroll cycle in minutes with AI-guided
              automation. No training required—the wizard walks you through
              every step.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                step: "01",
                icon: Clock,
                title: "Import Time & Attendance",
                description:
                  "Automatically pull hours from your time tracking system or upload CSV. AI validates overtime and flags suspicious entries before you proceed.",
                features: [
                  "API integrations with major time clocks",
                  "Auto-detect duplicate punches",
                  "Overtime threshold alerts",
                  "Missing punch identification",
                ],
                color: "blue",
              },
              {
                step: "02",
                icon: Calculator,
                title: "Calculate Gross Pay",
                description:
                  "System applies pay rates, shift differentials, bonuses, and commission structures with multi-state tax considerations built in.",
                features: [
                  "Multiple pay type support",
                  "Shift differential automation",
                  "Commission tier calculations",
                  "Bonus proration logic",
                ],
                color: "indigo",
              },
              {
                step: "03",
                icon: Shield,
                title: "Tax Withholding & Deductions",
                description:
                  "Real-time calculation of Federal, State, FICA, Local taxes plus benefits and garnishments. Tax tables auto-update quarterly.",
                features: [
                  "Multi-state tax compliance",
                  "Auto W-4 form processing",
                  "Pre-tax vs post-tax sorting",
                  "Garnishment prioritization",
                ],
                color: "purple",
              },
              {
                step: "04",
                icon: AlertTriangle,
                title: "AI Anomaly Review",
                description:
                  "AI scans for unusual pay rates, low tax withholding, and deduction errors. Flags items for review with clear explanations and suggested fixes.",
                features: [
                  "Pay equity analysis",
                  "Compliance risk scoring",
                  "Historical trend comparison",
                  "One-click corrections",
                ],
                color: "orange",
              },
              {
                step: "05",
                icon: FileText,
                title: "ACH File Generation",
                description:
                  "Generate NACHA-compliant direct deposit files ready for your bank. Create encrypted pay stubs with YTD totals and tax summaries.",
                features: [
                  "NACHA format validation",
                  "Multi-bank ACH batching",
                  "Encrypted pay stub delivery",
                  "Instant file download",
                ],
                color: "green",
              },
            ].map((item, i) => {
              const colorClasses = {
                blue: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800/50",
                indigo:
                  "from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 dark:border-indigo-800/50",
                purple:
                  "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/50",
                orange:
                  "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800/50",
                green:
                  "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/50",
              }[item.color];

              const iconColors = {
                blue: "from-blue-500 to-indigo-600",
                indigo: "from-indigo-500 to-purple-600",
                purple: "from-purple-500 to-pink-600",
                orange: "from-orange-500 to-red-600",
                green: "from-green-500 to-emerald-600",
              }[item.color];

              return (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${colorClasses} rounded-2xl p-8 border hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${iconColors} flex items-center justify-center text-white shadow-lg`}
                      >
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-5xl font-bold text-gray-200 dark:text-gray-700/50">
                          {item.step}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAY TYPES SUPPORTED */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Supports Every Pay Structure
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From hourly workers to complex commission structures, our payroll
              engine handles it all
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Hourly",
                desc: "Regular & overtime rates",
              },
              {
                icon: Banknote,
                title: "Salary",
                desc: "Annual & semi-monthly",
              },
              {
                icon: Target,
                title: "Commission",
                desc: "Tiered & flat rates",
              },
              {
                icon: Award,
                title: "Bonuses",
                desc: "Discretionary & performance",
              },
              {
                icon: RefreshCw,
                title: "Piece Rate",
                desc: "Per-unit calculations",
              },
              { icon: Users, title: "Tips", desc: "Pooled & direct tips" },
              {
                icon: TrendingUp,
                title: "Differentials",
                desc: "Shift & skill premiums",
              },
              {
                icon: Wallet,
                title: "Reimbursements",
                desc: "Taxable & non-taxable",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 text-center hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors border border-gray-100 dark:border-gray-800"
              >
                <item.icon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE LAYER */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6 border border-blue-200 dark:border-blue-800">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-bold text-blue-600 dark:text-blue-300">
                INTELLIGENCE LAYER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Oversight
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Automated monitoring that catches compliance issues and
              optimization opportunities before they become problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Anomaly Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AI-powered scanning identifies unusual patterns before
                processing—protecting you from costly errors
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Alerts on pay rate variance anomalies (±15% threshold)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Flags excessive tax exemption claims
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Detects duplicate employee entries and ghost employees
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Identifies suspicious retroactive pay adjustments
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cost Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Strategic recommendations to reduce labor costs and improve
                workforce efficiency
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Overtime trend analysis and department-level alerts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Shift optimization recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Year-end budget forecasting with scenario modeling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Benefits cost analysis and optimization
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Multi-State Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Automated tax jurisdiction management for employees across all
                50 states
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Quarterly tax table updates for all jurisdictions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Local tax jurisdiction support (NYC, Philly, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Remote worker tax apportionment calculation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Reciprocity agreement handling
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-Time Reporting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Executive-level analytics and insights for data-driven decisions
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Labor cost dashboard with budget tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Tax liability visibility by jurisdiction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Complete audit trail with timestamps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Custom report builder with export options
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                <Lock className="w-4 h-4" /> Enterprise Security
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Bank-Level Security for Your Payroll Data
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Your payroll data is protected by the same security standards
                used by financial institutions. We take compliance seriously so
                you don't have to worry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "SOC 2 Type II Certified" },
                  { icon: Lock, label: "256-bit AES Encryption" },
                  { icon: BadgeCheck, label: "GDPR Compliant" },
                  { icon: Globe, label: "99.99% Uptime SLA" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#1e293b] rounded-lg"
                  >
                    <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Compliance Checklist
              </h3>
              <ul className="space-y-4">
                {[
                  "FLSA overtime compliance verification",
                  "State-specific labor law adherence",
                  "ACA reporting and tracking",
                  "Garnishment priority compliance",
                  "W-2 and 1099 preparation",
                  "New hire reporting automation",
                  "EEOC pay data collection",
                  "Audit-ready documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-4 border border-teal-200 dark:border-teal-800">
              <RefreshCw className="w-4 h-4" /> Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools for automated, bi-directional
              data flow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/50 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Time Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sync hours automatically from leading platforms
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> ADP
                  Workforce Now
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Kronos /
                  UKG
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> QuickBooks
                  Time
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Deputy,
                  When I Work
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800/50 hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-green-600 dark:text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Accounting Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Auto-post journal entries to your GL
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> QuickBooks
                  Online
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Xero
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> NetSuite
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Sage
                  Intacct
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/50 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                HRIS Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bi-directional employee data sync
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> BambooHR
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Workday
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Namely
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Rippling
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Integration Categories */}
          <div className="mt-12 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Building2, label: "Banks & ACH", count: "500+" },
              { icon: Shield, label: "Benefits Providers", count: "50+" },
              {
                icon: FileText,
                label: "Tax Filing Services",
                count: "All States",
              },
              { icon: BarChart3, label: "BI Tools", count: "12+" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-100 dark:border-gray-800 text-center"
              >
                <item.icon className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Every Industry
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From small businesses to enterprises, our payroll engine scales
              with your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Restaurants & Hospitality",
                features: [
                  "Tip tracking & allocation",
                  "Split shifts handling",
                  "Multiple pay rates per employee",
                ],
                icon: "🍽️",
              },
              {
                title: "Healthcare",
                features: [
                  "Shift differentials",
                  "On-call pay calculation",
                  "PTO accrual tracking",
                ],
                icon: "🏥",
              },
              {
                title: "Construction & Field Services",
                features: [
                  "Project-based costing",
                  "Per diem handling",
                  "Certified payroll reports",
                ],
                icon: "🏗️",
              },
              {
                title: "Retail",
                features: [
                  "Commission structures",
                  "Part-time scheduling",
                  "Seasonal workforce scaling",
                ],
                icon: "🛒",
              },
              {
                title: "Technology",
                features: [
                  "Equity compensation",
                  "Multi-state remote workers",
                  "Bonus structures",
                ],
                icon: "💻",
              },
              {
                title: "Manufacturing",
                features: [
                  "Piece rate calculations",
                  "Union dues handling",
                  "Overtime compliance",
                ],
                icon: "🏭",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /> Start in Minutes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Payroll?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            See the 5-step wizard in action with a personalized demo. Our team
            will show you how to reduce payroll time by 80%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-16 px-12 text-lg bg-white text-green-700 hover:bg-gray-100 cursor-pointer"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link
              href="https://cad.spaceaiapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-16 px-12 text-lg border-2 border-white text-white hover:bg-white/10 cursor-pointer"
              >
                <Play className="mr-2 w-5 h-5" />
                Try for Free
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROSE SECTION */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How AI Payroll Automation Works — From Gross Wages to Direct Deposit
          </h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
            <p>
              Traditional payroll processing forces HR teams to manually verify timesheets, reconcile deductions, and cross-check tax tables before every run — a process that takes 3–5 days and introduces errors at every handoff. Space HR&apos;s AI payroll engine compresses this into a guided 5-step wizard that completes in under two hours, with machine learning auditing every calculation before ACH files are generated.
            </p>
            <p>
              The process starts with data aggregation: attendance records, approved leave, bonus authorizations, and compensation changes flow automatically from their source modules into the payroll engine. No spreadsheet imports, no CSV uploads. The AI then runs its anomaly detection pass — comparing each employee&apos;s current pay components against their last 12 pay periods. Any deviation greater than 5% in base pay, any duplicate payment entry, or any unauthorized rate change is flagged for HR review before the run proceeds. Statistically, this catches the 1.2% of payroll transactions that contain errors in a typical 500-person company — errors that would otherwise require expensive retroactive corrections.
            </p>
            <p>
              The gross-to-net calculation follows a strict statutory sequence. Pre-tax deductions (401k, HSA, FSA) reduce gross wages first, preserving their tax-advantaged treatment. Federal income tax withholding then applies using current IRS Publication 15-T tables, accounting for W-4 filing status and additional withholding elections. FICA contributions — 6.2% Social Security on wages up to $176,100 and 1.45% Medicare with no wage ceiling — are calculated next, with employer matching tracked in the liability ledger simultaneously. FUTA is applied at 6.0% on the first $7,000 per employee annually, reduced to the effective 0.6% rate via the state tax credit. Post-tax deductions including Roth contributions, wage garnishments, and voluntary benefits complete the calculation.
            </p>
            <p>
              Once gross-to-net is finalized, Space HR generates NACHA-compliant ACH files automatically. These files conform to the National Automated Clearing House Association format specifications — with proper batch header records, individual transaction records, and file control totals. Banks reject ACH files that don&apos;t pass hash validation; Space HR performs this validation internally before transmission, eliminating late payment incidents caused by file formatting errors. Multi-state employers benefit from automatic state tax withholding updates: when a state adjusts its income tax tables or SUI wage base, Space HR applies the change without manual reconfiguration.
            </p>
            <p>
              The result is a payroll process where HR teams spend time on exceptions and strategy rather than arithmetic. Employees receive accurate pay stubs with full deduction breakdowns, direct deposits land on time, and the liability ledger reconciles automatically for month-end close. Audit readiness improves because every calculation step is logged with a timestamp, an operator, and the data inputs used — creating an evidence trail that satisfies both internal auditors and external tax authorities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About AI Payroll Automation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about gross-to-net calculations, NACHA
              ACH files, FUTA/SICA withholding, and automated payroll
              compliance.
            </p>
          </div>
          <FAQAccordion items={payrollFaqs} />
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Related Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Complete your HR tech stack with these integrated modules
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/features/tax" className="group">
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-all group-hover:shadow-lg">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Tax Compliance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Federal, State, and Local tax automation
                </p>
              </div>
            </Link>
            <Link href="/features/finance" className="group">
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-all group-hover:shadow-lg">
                <BarChart3 className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Finance Analytics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Labor cost tracking and forecasting
                </p>
              </div>
            </Link>
            <Link href="/features/attendance" className="group">
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-all group-hover:shadow-lg">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Attendance Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Time capture and schedule management
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
