import {
  ShieldAlert,
  Search,
  FileSpreadsheet,
  BadgeDollarSign,
  ArrowRight,
  TrendingDown,
  Lock,
  History,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  BarChart3,
  Zap,
  FileText,
  Shield,
} from "lucide-react";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Payroll Anomaly Detection Software | Space HR",
  description:
    "Space HR's AI payroll anomaly detection scans every pay run before funds transfer — catching ghost employees, tax errors, overtime spikes, and duplicate payments. Reduce payroll errors by 99%.",
  keywords: [
    "payroll anomaly detection",
    "payroll anomaly detection software",
    "AI payroll anomaly detection",
    "payroll error detection",
    "ghost employee detection",
    "payroll fraud detection",
    "payroll variance analysis",
    "automated payroll audit",
    "payroll compliance software",
    "payroll risk detection",
  ],
  alternates: {
    canonical: "https://spacehr.net/payroll-anomaly-detection",
  },
  openGraph: {
    title: "Payroll Anomaly Detection Software | Space HR",
    description:
      "Catch ghost employees, tax errors, overtime spikes, and duplicate payments before payroll runs. Space HR's AI payroll anomaly detection — 99% error reduction.",
    url: "https://spacehr.net/payroll-anomaly-detection",
    siteName: "Space HR",
    images: [
      {
        url: "https://spacehr.net/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Payroll Anomaly Detection Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Anomaly Detection Software | Space HR",
    description:
      "AI payroll anomaly detection catches ghost employees, tax errors, and duplicate payments before funds transfer. 99% error reduction.",
    images: ["https://spacehr.net/desktop-design-showcase.webp"],
  },
};

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How AI Payroll Anomaly Detection Works",
  description:
    "A step-by-step explanation of how Space HR's AI scans payroll runs for anomalies before funds are transferred.",
  step: [
    {
      "@type": "HowToStep",
      name: "Payroll Data Ingestion",
      text: "Space HR ingests the current payroll batch — salaries, overtime, bonuses, deductions, and bank details — from your HRMS and payroll system before the run is processed.",
    },
    {
      "@type": "HowToStep",
      name: "Historical Baseline Comparison",
      text: "The AI compares every employee line item against their 12-month payroll history, flagging deviations greater than 5% as anomalies requiring review.",
    },
    {
      "@type": "HowToStep",
      name: "Active Employee Verification",
      text: "Each payment recipient is cross-referenced against the live active employee directory. Terminated, inactive, or unverified employees are flagged as potential ghost employees.",
    },
    {
      "@type": "HowToStep",
      name: "Tax & Compliance Validation",
      text: "Gross-to-net calculations are validated against current federal, state, and local tax tables. FUTA, FICA, SUTA, and local tax withholdings are verified for accuracy.",
    },
    {
      "@type": "HowToStep",
      name: "Anomaly Report & HR Review",
      text: "All flagged items are compiled into a structured Anomaly Report with severity levels. HR reviews and resolves flags before the NACHA-compliant ACH file is generated and funds are transferred.",
    },
  ],
};

const faqItems = [
  {
    question: "What is payroll anomaly detection?",
    answer:
      "Payroll anomaly detection is an automated process that scans payroll data before each pay run to identify errors, inconsistencies, and suspicious patterns — including ghost employees, duplicate payments, unauthorized salary changes, overtime spikes, and tax calculation errors. AI-powered payroll anomaly detection uses machine learning to compare each employee's current payroll data against historical baselines, flagging statistical outliers for HR review before funds are transferred.",
  },
  {
    question: "How does AI detect payroll anomalies?",
    answer:
      "Space HR's AI Payroll Auditor uses machine learning models trained on payroll transaction patterns to identify statistical outliers before every pay run. It benchmarks each employee's current payroll data against their 12-month history, flagging deviations such as sudden salary increases, duplicate bank account entries, payments to terminated employees (ghost employees), overtime spikes exceeding baseline norms, and incorrect tax bracket applications. All flagged items are reviewed by HR before the NACHA-compliant ACH file is generated.",
  },
  {
    question: "What is a ghost employee and how does Space HR detect them?",
    answer:
      "A ghost employee is a fictitious or terminated worker who continues to receive payroll payments — either through system error or intentional fraud. Space HR prevents ghost employee costs by cross-referencing every payment recipient against the active employee directory and HR records in real-time. If a pay recipient's employment status is terminated, on leave without pay, or flagged as inactive, the system automatically blocks the payment and alerts HR before the payroll run is processed.",
  },
  {
    question: "What types of payroll anomalies does the AI scan for?",
    answer:
      "The AI auditor scans for a comprehensive set of anomalies: duplicate employee payments, ghost employee entries, unauthorized salary rate changes, overtime miscalculations, incorrect FUTA/FICA tax withholding, benefits deduction discrepancies, missing Social Security numbers, retroactive pay errors, FLSA minimum wage violations, inconsistencies in the liability ledger versus actual disbursements, and unusual bank account changes close to payroll processing.",
  },
  {
    question: "How does payroll anomaly detection protect against compliance risk?",
    answer:
      "Every payroll error that goes undetected creates downstream compliance risk — incorrect FUTA/FICA remittances trigger IRS penalties, FLSA overtime violations result in back-pay liability, and inaccurate state tax withholding creates year-end reconciliation issues. Space HR's pre-processing audit layer catches these errors before the payroll run, ensuring your liability ledger is accurate, your tax filings are correct, and your NACHA ACH files are clean before they reach the bank.",
  },
  {
    question: "Can I see a report of all detected anomalies per pay run?",
    answer:
      "Yes. After every payroll audit, Space HR generates a structured Anomaly Report listing each flagged item with its anomaly type, severity level (critical / warning / informational), the affected employee's ID, the variance amount, and the recommended resolution. The report is stored in your audit log for compliance documentation and can be exported for external audits or CFO review.",
  },
  {
    question: "How is payroll anomaly detection different from standard payroll software?",
    answer:
      "Standard payroll software processes what you enter — it doesn't catch errors in what was entered. Payroll anomaly detection adds a pre-processing audit layer that validates the data before processing: comparing against history, verifying employee status, checking tax calculations, and flagging outliers. Space HR's AI anomaly detection catches an average of 3–7 issues per payroll run that standard software would process without question.",
  },
  {
    question: "How long does it take to set up payroll anomaly detection?",
    answer:
      "Space HR's payroll anomaly detection deploys in 48 hours for standard setups. It connects to your existing HRMS and payroll system, ingests 12 months of historical payroll data to build employee baselines, and begins scanning from the next payroll cycle. No coding is required and our onboarding team manages the integration process end to end.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Payroll Anomaly Detection", url: "https://spacehr.net/payroll-anomaly-detection" },
];

const anomalyTypes = [
  {
    icon: "Search",
    color: "red",
    title: "Ghost Employees",
    desc: "Payments to terminated, inactive, or non-existent employees — caught by real-time cross-reference against your active employee directory.",
    freq: "Found in ~8% of audits",
  },
  {
    icon: "FileSpreadsheet",
    color: "orange",
    title: "Duplicate Payments",
    desc: "Same employee paid twice in the same cycle, or identical payment amounts to different employees in the same department.",
    freq: "Found in ~5% of audits",
  },
  {
    icon: "TrendingDown",
    color: "yellow",
    title: "Overtime Spikes",
    desc: "Overtime exceeding 20%+ above the employee or department 3-month average, flagged for manager confirmation before processing.",
    freq: "Found in ~12% of audits",
  },
  {
    icon: "BadgeDollarSign",
    color: "blue",
    title: "Tax Calculation Errors",
    desc: "Incorrect FUTA/FICA withholding, wrong state tax table applied, or missing local tax obligations — validated against current tax tables each run.",
    freq: "Found in ~6% of audits",
  },
  {
    icon: "AlertTriangle",
    color: "purple",
    title: "Unauthorized Pay Changes",
    desc: "Salary, hourly rate, or bonus changes made outside the standard approval workflow — cross-checked against your compensation change audit log.",
    freq: "Found in ~4% of audits",
  },
  {
    icon: "Lock",
    color: "green",
    title: "Bank Account Changes",
    desc: "Employee bank account numbers changed within 48 hours of payroll processing — a common payroll fraud indicator that gets automatically flagged.",
    freq: "Found in ~2% of audits",
  },
];

export default function PayrollAnomalyDetectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd data={howItWorksSchema} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-gray-900 dark:text-white font-medium">Payroll Anomaly Detection</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20 dark:from-slate-900/50 dark:via-red-900/10 dark:to-orange-900/10 -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold tracking-wide mb-8 border border-red-200 dark:border-red-800 uppercase">
            <ShieldAlert className="w-4 h-4" /> AI Payroll Anomaly Detection
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Payroll Anomaly Detection That Catches Errors{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Before You Click Send
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Space HR&apos;s AI scans every payroll run for ghost employees, duplicate payments, tax errors,
            and overtime spikes — before a single dollar leaves your account. Reduce payroll errors
            by <strong>99%</strong>. Setup in 48 hours.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { val: "99%", label: "Error reduction" },
              { val: "3–7", label: "Issues caught per run" },
              { val: "48 hrs", label: "Deployment time" },
              { val: "$0", label: "Missed errors billed" },
            ].map((s) => (
              <div key={s.label} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{s.val}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/request-a-demo"
              className="inline-flex items-center gap-2 h-12 rounded-full px-8 text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/features/ai-payroll-auditor"
              className="inline-flex items-center gap-2 h-12 rounded-full px-8 text-sm font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Full Feature Details
            </a>
          </div>
        </div>
      </section>

      {/* What is payroll anomaly detection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            What Is Payroll Anomaly Detection — And Why Does It Matter?
          </h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              <strong>Payroll anomaly detection</strong> is an automated audit process that scans
              payroll data before each pay run to identify errors, outliers, and suspicious patterns.
              Unlike standard payroll software — which simply processes whatever data is entered —
              anomaly detection validates that data against historical baselines, employee records,
              tax tables, and approval workflows.
            </p>
            <p>
              The stakes are high. According to the American Payroll Association, <strong>approximately
              80% of companies with 500+ employees experience payroll errors</strong> in any given year.
              The average cost of a payroll error — including correction, tax adjustment, and compliance
              remediation — is <strong>$291 per incident</strong>. For a company processing payroll for
              500 employees monthly, even a 1% error rate means $17,460 in annual rework costs before
              considering IRS penalties.
            </p>
            <p>
              AI-powered anomaly detection changes this entirely. By comparing every line item in the
              current payroll batch against 12 months of historical data, Space HR&apos;s system catches the
              3–7 issues that exist in the average payroll run — before the ACH file is generated and
              before money leaves the account. HR reviews a prioritized list of flags, resolves each
              in minutes, and approves a clean payroll run.
            </p>
            <p>
              The result: payroll errors reduced by 99%, compliance risk eliminated, and CFO-ready
              audit trails maintained automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 6 anomaly types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              6 Payroll Anomaly Types Space HR Detects Automatically
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every payroll run is scanned across all six anomaly categories before a single
              transaction is processed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { color: "red", Icon: Search, title: "Ghost Employees", freq: "Found in ~8% of audits", desc: "Payments to terminated, inactive, or non-existent employees — caught by real-time cross-reference against your active employee directory before the run." },
              { color: "orange", Icon: FileSpreadsheet, title: "Duplicate Payments", freq: "Found in ~5% of audits", desc: "Same employee paid twice in the same cycle, or identical payment amounts to different employees in the same department — flagged automatically." },
              { color: "yellow", Icon: TrendingDown, title: "Overtime Spikes", freq: "Found in ~12% of audits", desc: "Overtime exceeding 20%+ above the employee or department 3-month average, flagged for manager confirmation before processing." },
              { color: "blue", Icon: BadgeDollarSign, title: "Tax Calculation Errors", freq: "Found in ~6% of audits", desc: "Incorrect FUTA/FICA withholding, wrong state tax table applied, or missing local tax obligations — validated against current tax tables each run." },
              { color: "purple", Icon: AlertTriangle, title: "Unauthorized Pay Changes", freq: "Found in ~4% of audits", desc: "Salary, hourly rate, or bonus changes made outside the standard approval workflow — cross-checked against your compensation change audit log." },
              { color: "green", Icon: Lock, title: "Bank Account Changes", freq: "Found in ~2% of audits", desc: "Employee bank account numbers changed within 48 hours of payroll processing — a common payroll fraud indicator that gets automatically flagged." },
            ].map((item) => {
              const Icon = item.Icon;
              const colorMap: Record<string, string> = {
                red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
                orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
                yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
                blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
              };
              return (
                <div key={item.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[item.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">{item.freq}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How Space HR Payroll Anomaly Detection Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              A 5-step pre-processing audit that runs automatically before every payroll cycle.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { step: "1", icon: FileText, title: "Payroll Data Ingestion", desc: "Space HR ingests the current payroll batch — salaries, overtime, bonuses, deductions, and bank details — from your HRMS and payroll system. This happens automatically before the run is queued for processing." },
              { step: "2", icon: BarChart3, title: "Historical Baseline Comparison", desc: "The AI compares every employee line item against their 12-month payroll history. Deviations greater than 5% — salary, overtime, deductions, or net pay — are automatically flagged as anomalies requiring review." },
              { step: "3", icon: Search, title: "Active Employee Verification", desc: "Each payment recipient is cross-referenced against the live active employee directory. Terminated, inactive, or unverified employees are flagged as potential ghost employees and their payments are blocked pending review." },
              { step: "4", icon: Shield, title: "Tax & Compliance Validation", desc: "Gross-to-net calculations are validated against current federal, state, and local tax tables. FUTA, FICA, SUTA, and local tax withholdings are verified for accuracy. Multi-state reciprocity agreements are automatically applied." },
              { step: "5", icon: CheckCircle2, title: "Anomaly Report & HR Review", desc: "All flagged items are compiled into a structured Anomaly Report with severity levels (critical / warning / informational). HR reviews and resolves flags before the NACHA-compliant ACH file is generated and funds are transferred." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
                    {i < 4 && <div className="w-0.5 flex-1 bg-red-200 dark:bg-red-900 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit log mockup + key features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-bold tracking-wide uppercase text-sm mb-4">
                <Lock className="w-4 h-4" /> Pre-Processing Audit Layer
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Your AI Payroll Guardian
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Space HR acts as a firewall for your payroll — a dedicated audit layer
                that flags issues <strong>before</strong> money leaves the account.
                Every anomaly is logged, traced, and resolved with a full audit trail.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Pre-Run Variance Analysis", desc: "Compares current payroll against historical averages and flags >5% deviations per employee and department." },
                  { title: "Active-Status Verification", desc: "Cross-references all pay recipients with active employee directories and resignation dates in real time." },
                  { title: "Global Tax Table Sync", desc: "Real-time validation against the latest federal, state, and local tax tables — updated with every legislative change." },
                  { title: "CFO-Ready Audit Reports", desc: "Structured anomaly report after every run with severity levels, employee IDs, variance amounts, and recommended resolutions." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{f.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Audit log mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-red-500" />
                    <span className="font-bold text-sm">Audit Log: Run #2026-04-A</span>
                  </div>
                  <span className="text-red-400 text-xs font-bold bg-red-900/20 px-3 py-1 rounded-full border border-red-900/50">
                    4 Flags Found
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { color: "red", icon: "🚨", label: "Ghost Employee Detected", detail: "ID #4029 (Terminated Mar 15) in batch — payment blocked." },
                    { color: "red", icon: "🚨", label: "Duplicate Payment", detail: "ID #8847 appears twice in April run — second entry flagged." },
                    { color: "orange", icon: "⚠️", label: "Overtime Spike +67%", detail: "Dept: Engineering vs 3-month avg. Pending manager approval." },
                    { color: "orange", icon: "⚠️", label: "Bank Account Changed", detail: "ID #3312 bank details changed 6 hrs ago. Verification required." },
                  ].map((flag, i) => (
                    <div key={i} className={`p-3 rounded-lg flex gap-3 ${flag.color === "red" ? "bg-red-500/10 border border-red-500/20" : "bg-orange-500/10 border border-orange-500/20"}`}>
                      <span className="text-base flex-shrink-0">{flag.icon}</span>
                      <div>
                        <p className={`font-semibold text-sm ${flag.color === "red" ? "text-red-200" : "text-orange-200"}`}>{flag.label}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{flag.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-slate-700 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Status: <span className="text-red-400 font-bold">Blocked — 4 items need review</span></span>
                  <span className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-white">Review Flags →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Payroll Anomaly Detection vs. Standard Payroll Software
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <table className="w-full bg-white dark:bg-slate-800 text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700">
                  <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-bold">Capability</th>
                  <th className="px-6 py-4 text-center text-red-600 dark:text-red-400 font-bold">Space HR Anomaly Detection</th>
                  <th className="px-6 py-4 text-center text-slate-500 dark:text-slate-400 font-semibold">Standard Payroll Software</th>
                  <th className="px-6 py-4 text-center text-slate-500 dark:text-slate-400 font-semibold">Manual HR Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  ["Ghost employee detection (real-time)", "✅ Automatic", "❌", "⚠️ Occasional"],
                  ["Historical baseline comparison (12 months)", "✅ Every run", "❌", "❌"],
                  ["Duplicate payment detection", "✅ Automatic", "Partial", "⚠️ Manual spot-check"],
                  ["Tax table validation (all 50 states)", "✅ Real-time sync", "✅ Periodic", "❌"],
                  ["Unauthorized pay change alerts", "✅ Automatic", "❌", "⚠️ If noticed"],
                  ["Bank account change fraud detection", "✅ 48-hr window flag", "❌", "❌"],
                  ["CFO anomaly report per run", "✅ Structured PDF", "❌", "❌"],
                  ["Payroll blocked until flags resolved", "✅ Hard stop", "❌", "❌"],
                  ["Error catch rate", "99%", "~70%", "~85%"],
                  ["Time to review flagged issues", "< 10 min/run", "N/A", "2–4 hours"],
                ].map(([cap, spaceHR, std, manual]) => (
                  <tr key={cap} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">{cap}</td>
                    <td className="px-6 py-4 text-center text-red-600 dark:text-red-400 font-semibold">{spaceHR}</td>
                    <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">{std}</td>
                    <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">{manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
            People Also Ask: Payroll Anomaly Detection
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12">
            Answers to the most common questions about AI payroll anomaly detection.
          </p>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Related Space HR Payroll & Compliance Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor (Full Feature)" },
              { href: "/features/payroll", label: "Payroll Management" },
              { href: "/features/cost-prediction", label: "Labor Cost Forecasting" },
              { href: "/features/attrition-prediction", label: "Attrition Prediction" },
              { href: "/features/ai-automation", label: "HR Workflow Automation" },
              { href: "/features/finance", label: "Finance & Reporting" },
              { href: "/compare/bamboohr", label: "Space HR vs BambooHR" },
              { href: "/compare/workday", label: "Space HR vs Workday" },
              { href: "/tools/true-cost-calculator", label: "True Cost Calculator" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:underline bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
              >
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stop Payroll Errors Before They Happen
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Schedule a demonstration with our Finance Solutions team to see
            how Space HR&apos;s payroll anomaly detection secures your payroll process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/request-a-demo"
              className="inline-flex items-center gap-2 h-12 rounded-full px-8 text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/features/ai-payroll-auditor"
              className="inline-flex items-center h-12 rounded-full px-8 text-sm font-medium border border-slate-600 text-white hover:bg-slate-800 transition-colors"
            >
              Explore Full Feature Set
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
