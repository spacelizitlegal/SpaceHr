import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Calculator,
  FileText,
  TrendingUp,
  ArrowRight,
  Building2,
  MapPin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Compliance & Payroll Tax Automation | Space HR",
  description:
    "Comprehensive Federal, State, and Local tax management. Automated tax calculations, liability ledger tracking, multi-state compliance, and quarterly tax table updates.",
  keywords: [
    "payroll tax automation",
    "federal tax compliance",
    "state tax management",
    "local tax calculation",
    "FICA tax automation",
    "multi-state payroll",
    "tax liability ledger",
    "FUTA SUTA compliance",
    "W-4 tax processing",
    "payroll tax software",
  ],
  openGraph: {
    title: "Tax Compliance & Automation | Space HR",
    description:
      "Automated Federal, State, and Local tax management with real-time liability tracking and quarterly updates.",
    url: "https://spacehr.net/features/tax",
    images: [
      {
        url: "/og-tax-compliance.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Tax Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Compliance & Automation | Space HR",
    description:
      "Comprehensive Federal, State, and Local tax management with automated compliance.",
    images: ["/og-tax-compliance.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/tax",
  },
};

export default function TaxCompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
                <ShieldCheck className="w-4 h-4" /> Tax & Compliance Engine
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Complete US Payroll Tax Compliance
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Granular engine for complex US tax codes. Automate Federal,
                State, and Local tax calculations with real-time liability
                tracking and quarterly updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-a-demo">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                    Request a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://cad.spaceaiapp.com/login" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    Try for Free
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80"
                alt="Tax Compliance Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TAX BENEFITS GRID */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Federal Tax Automation
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Social Security 6.2% auto-calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Medicare 1.45% withholding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>FUTA unemployment tax tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                State Tax Intelligence
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>50-state income tax (SIT) tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Unemployment (SUI) and Disability (SDI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>No-tax state logic (TX, FL, WA, etc.)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Local Tax Management
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>City-level tax configuration (NYC, Philly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>School district tax support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-jurisdictional employee tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JURISDICTIONAL MANAGEMENT */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Three-Tier Tax Jurisdiction Architecture
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our tax engine handles the full complexity of US payroll tax
              across Federal, State, and Local levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Federal Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Federal Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Social Security (FICA)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    6.2% employee + employer (up to wage base limit)
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Medicare (FICA)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    1.45% employee + employer (no cap)
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    FUTA
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Federal unemployment tax for employer
                  </p>
                </div>
              </div>
            </div>

            {/* State Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  State Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Income Tax (SIT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    State-specific withholding tables and rates
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Unemployment (SUI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    State unemployment insurance contributions
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Disability (SDI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Required in CA, HI, NJ, NY, PR, RI
                  </p>
                </div>
              </div>
            </div>

            {/* Local Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Local Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    City Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    NYC, Philadelphia, and other municipal taxes
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    School District
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Local education-specific withholdings
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Special Districts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    County and regional tax authorities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIABILITY LEDGER */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <Calculator className="w-4 h-4" /> Tax Liability Tracking
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Real-Time Liability Ledger
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Track pending tax debts across all jurisdictions to ensure
                compliance and avoid penalties. Our liability ledger provides a
                complete audit trail.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Pending Tax Tracking
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time view of all tax liabilities across Federal,
                      State, and Local levels
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Payment Scheduling
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automated reminders for quarterly and annual tax payments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Compliance Reporting
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Export tax reports for quarterly filings and year-end
                      reconciliation
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Liability Ledger Example
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Federal FICA (SS + Medicare)
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      $12,450
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Due: Quarterly - April 30, 2025
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      California SUI
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      $3,210
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Due: Quarterly - April 30, 2025
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      NYC Local Tax
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">
                      $1,840
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Due: Monthly - March 31, 2025
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">
                      Total Pending Tax Liability
                    </span>
                    <span className="text-2xl font-bold">$17,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE AUTOMATION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Automated Compliance & Updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay compliant with quarterly tax table updates and automated W-4
              processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Quarterly Tax Table Updates
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automatic tax rate updates every quarter
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Federal and state wage base limit adjustments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    New tax code compliance notifications
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  W-4 Processing
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automated withholding calculation from W-4 data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Support for 2020+ and legacy W-4 forms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Employee exemption tracking and validation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION WITH PAYROLL */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Payroll Integration
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl">
                Our tax engine integrates directly into the 5-step payroll
                wizard, calculating withholdings in real-time as you process
                each pay period.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Step 3</div>
                  <div className="text-white/80">
                    Real-time tax calculation during payroll processing
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Step 4</div>
                  <div className="text-white/80">
                    AI anomaly detection flags low withholding
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Ledger</div>
                  <div className="text-white/80">
                    Automatic liability ledger updates after ACH generation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simplify Tax Compliance Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Let our tax engine handle the complexity of Federal, State, and
            Local tax calculations—so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto cursor-pointer"
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
