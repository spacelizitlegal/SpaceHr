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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Payroll Automation | Anomaly Detection & ACH Generation",
  description:
    "Automated payroll auditing with AI anomaly detection. 5-step wizard for compliant payroll processing, tax withholding, and NACHA-compliant ACH file generation.",
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
  ],
  openGraph: {
    title: "AI Payroll Automation | Space HR",
    description:
      "5-step payroll wizard with automated auditing, tax compliance, and ACH generation.",
    images: ["/og-payroll.png"],
  },
};

export default function AIPayrollPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#-[#0b1121] font-sans">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" /> AI-Powered Payroll
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
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg cursor-pointer"
              >
                Modernize Your Payroll
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1740&q=80"
                alt="AI Payroll Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Payroll Intelligence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Automated oversight that catches errors before they become
              problems
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Anomaly Detection",
                points: [
                  "Flags unusual pay rate variances",
                  "Detects duplicate employee entries",
                  "Validates overtime against historical patterns",
                ],
              },
              {
                icon: TrendingUp,
                title: "Predictive Forecasting",
                points: [
                  "Projects labor costs based on hiring trends",
                  "Estimates year-end budget impact",
                  "Suggests optimal headcount adjustments",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Smart Tax Compliance",
                points: [
                  "Auto-updates tax tables quarterly",
                  "Handles multi-state employee taxation",
                  "Validates W-4 withholding accuracy",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-STEP PAYROLL WIZARD */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              5-Step Payroll Wizard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete your entire payroll cycle in minutes with AI-guided
              automation
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                step: "01",
                icon: Clock,
                title: "Import Time & Attendance",
                description:
                  "Automatically pull hours from your time tracking system or upload CSV. AI validates overtime and flags suspicious entries.",
                features: [
                  "API integrations with major time clocks",
                  "Auto-detect duplicate punches",
                  "Overtime threshold alerts",
                ],
              },
              {
                step: "02",
                icon: Calculator,
                title: "Calculate Gross Pay",
                description:
                  "System applies pay rates, shift differentials, bonuses, and commission structures with multi-state tax considerations.",
                features: [
                  "Multiple pay type support",
                  "Shift differential automation",
                  "Commission tier calculations",
                ],
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
                ],
              },
              {
                step: "04",
                icon: AlertTriangle,
                title: "AI Anomaly Review",
                description:
                  "AI scans for unusual pay rates, low tax withholding, and deduction errors. Flags items for review with explanations.",
                features: [
                  "Pay equity analysis",
                  "Compliance risk scoring",
                  "Historical trend comparison",
                ],
              },
              {
                step: "05",
                icon: FileText,
                title: "ACH File Generation",
                description:
                  "Generate NACHA-compliant direct deposit files ready for your bank. Create pay stubs with YTD totals and tax summaries.",
                features: [
                  "NACHA format validation",
                  "Multi-bank ACH batching",
                  "Encrypted pay stub delivery",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-bold text-green-200 dark:text-green-900/30">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="grid md:grid-cols-3 gap-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE LAYER */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
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
              optimization opportunities
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
                Identifies unusual patterns before processing
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Alerts on pay rate variance anomalies
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
                    Detects duplicate employee entries
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
                Strategic recommendations to reduce labor costs
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Overtime trend analysis and alerts
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
                    Year-end budget forecasting
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
                Automated tax jurisdiction management
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Quarterly tax table updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Local tax jurisdiction support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Remote worker tax apportionment
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
                Executive-level analytics and insights
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools for automated data flow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/50">
              <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Time Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sync hours automatically
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• ADP Workforce Now</li>
                <li>• Kronos / UKG</li>
                <li>• QuickBooks Time</li>
                <li>• Deputy, When I Work</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800/50">
              <DollarSign className="w-12 h-12 text-green-600 dark:text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Accounting Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Auto-post journal entries
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• QuickBooks Online</li>
                <li>• Xero</li>
                <li>• NetSuite</li>
                <li>• Sage Intacct</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/50">
              <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                HRIS Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Employee data sync
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• BambooHR</li>
                <li>• Workday</li>
                <li>• Namely</li>
                <li>• Rippling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Payroll?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            See the 5-step wizard in action with a personalized demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-16 px-12 text-lg bg-white text-green-700 hover:bg-gray-100 cursor-pointer"
              >
                Schedule Demo
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
                Try for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
