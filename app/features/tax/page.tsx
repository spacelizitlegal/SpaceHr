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
  ArrowLeft,
  Play,
  Sparkles,
  Clock,
  BarChart3,
  Lock,
  RefreshCw,
  BadgeCheck,
  DollarSign,
  Target,
  Zap,
  Scale,
  Calendar,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tax Compliance & Payroll Tax Automation | Space HR",
  description:
    "Ensure 99.9% accuracy with automated Federal, State, and Local tax management. Track liability ledgers and stay compliant with multi-state tax table updates",
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
    "tax withholding calculator",
    "employer tax compliance",
    "quarterly tax filing",
    "tax penalty prevention",
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

const _bc_tax = [{"name":"Home","url":"https://spacehr.net"},{"name":"Features","url":"https://spacehr.net/features"},{"name":"Tax Compliance","url":"https://spacehr.net/features/tax"}];

export default function TaxCompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
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
      <section className="relative pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
                <ShieldCheck className="w-4 h-4" /> Tax & Compliance Engine
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Complete US Payroll <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
                  Tax Compliance
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Granular engine for complex US tax codes. Automate Federal,
                State, and Local tax calculations with real-time liability
                tracking, quarterly updates, and 99.9% accuracy guaranteed.
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
                    <Play className="mr-2 w-5 h-5" />
                    Try for Free
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Auto-updated tax tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>All 50 states covered</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/engineering-blueprint-review.webp"
                alt="Space HR tax compliance dashboard showing automated FUTA, SICA, and multi-state payroll tax withholding calculations and year-end tax filing tools"
                fill
                className="object-cover"
                priority
              />
              {/* Tax Calculation Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Tax Calculation Engine
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-medium">
                    Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      $12,450
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Federal
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      $3,210
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      State
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-2">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      $840
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Local
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-8 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Calculation Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50
              </div>
              <div className="text-green-100 text-sm md:text-base">
                States + Territories
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                10K+
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Local Jurisdictions
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                $0
              </div>
              <div className="text-green-100 text-sm md:text-base">
                Penalties Guaranteed*
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAX BENEFITS GRID */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
              <Target className="w-4 h-4" /> Tax Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Three-Tier Tax Jurisdiction Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete coverage for Federal, State, and Local tax
              requirements—all automated and always current
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Federal Tax Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Complete FICA, Medicare, and unemployment tax handling
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    Social Security 6.2% auto-calculation with wage base
                    tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Medicare 1.45% + 0.9% Additional Medicare Tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    FUTA unemployment tax with credit reduction states
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>IRS tax bracket updates on schedule</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                State Tax Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                All 50 states plus DC and territories covered
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    50-state income tax (SIT) tables with bracket updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>State Unemployment (SUI) and Disability (SDI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>No-tax state logic (TX, FL, WA, NV, WY, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Reciprocity agreements auto-applied</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Local Tax Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                10,000+ local jurisdictions in our database
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    City-level tax configuration (NYC, Philadelphia, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>School district tax support (OH, PA, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-jurisdictional employee tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Work location vs residence location handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TAX CALCULATION PREVIEW */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <Calculator className="w-4 h-4" /> Real-Time Engine
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Instant Tax Calculations with Breakdown Visibility
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                See exactly how every dollar is calculated. Our tax engine
                provides full transparency into Federal, State, and Local
                withholdings with drill-down details.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Sub-Second Calculations
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Process thousands of tax calculations instantly
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Full Audit Trail
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Every calculation logged with timestamp and version
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Margin of Error: ±0.01%
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Industry-leading accuracy for all calculations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Tax Calculator Preview */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold">
                    Tax Breakdown Calculator
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                    Live Preview
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Gross Pay
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      $8,333.33
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Semi-monthly • California Resident
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Federal Income Tax
                      </span>
                    </div>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      -$1,456.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Social Security
                      </span>
                    </div>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      -$516.67
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Medicare
                      </span>
                    </div>
                    <span className="font-bold text-teal-600 dark:text-teal-400">
                      -$120.83
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        CA State Tax
                      </span>
                    </div>
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      -$620.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        CA SDI
                      </span>
                    </div>
                    <span className="font-bold text-orange-600 dark:text-orange-400">
                      -$91.67
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="font-semibold">Net Pay</span>
                    <span className="text-2xl font-bold">$5,528.16</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JURISDICTIONAL MANAGEMENT */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4 border border-indigo-200 dark:border-indigo-800">
              <Sparkles className="w-4 h-4" /> Deep Dive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Three-Tier Tax Architecture
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our tax engine handles the full complexity of US payroll tax
              across Federal, State, and Local levels with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Federal Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Federal Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Social Security (OASDI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    6.2% employee + 6.2% employer up to $168,600 wage base
                    (2024)
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Medicare (HI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    1.45% employee + employer (no cap) + 0.9% Additional
                    Medicare
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    FUTA
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    6.0% employer (0.6% after credit) on first $7,000
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Federal Income Tax
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    7 tax brackets from 10% to 37% based on W-4
                  </p>
                </div>
              </div>
            </div>

            {/* State Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  State Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    State Income Tax (SIT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    State-specific withholding tables and progressive rates
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    State Unemployment (SUI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Experience-rated employer contributions
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    State Disability (SDI)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Required in CA, HI, NJ, NY, PR, RI
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Paid Family Leave (PFL)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    State-mandated in CA, NJ, NY, WA, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Taxes */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Local Taxes
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    City Income Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    NYC, Philadelphia, Detroit, and more
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    School District Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Ohio and Pennsylvania school districts
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Transit Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Oregon TriMet, SF Transit, etc.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    County Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Various county-level withholdings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIABILITY LEDGER */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <DollarSign className="w-4 h-4" /> Tax Liability Tracking
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Real-Time Liability Ledger
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Track pending tax debts across all jurisdictions to ensure
                compliance and avoid penalties. Our liability ledger provides a
                complete audit trail and payment scheduling.
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
                      State, and Local levels with aging reports
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
                      with calendar integration
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
                      Export tax reports for quarterly filings, year-end
                      reconciliation, and audit requests
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Penalty Prevention
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Proactive alerts when deposits are due to avoid IRS and
                      state penalties
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                Liability Ledger Dashboard
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        Federal FICA (SS + Medicare)
                      </span>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      $12,450
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Due: Quarterly - April 30, 2026
                    </p>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                      Due in 15 days
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        California SUI
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      $3,210
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Due: Quarterly - April 30, 2026
                    </p>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                      Due in 15 days
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        NYC Local Tax
                      </span>
                    </div>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">
                      $1,840
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Due: Monthly - March 31, 2026
                    </p>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      Paid
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">
                      Total Pending Tax Liability
                    </span>
                    <span className="text-2xl font-bold">$17,500</span>
                  </div>
                  <p className="text-sm text-green-100 mt-1">
                    Next payment due in 15 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-STATE EMPLOYEE HANDLING */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
              <Users className="w-4 h-4" /> Remote Workforce
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Multi-State Employee Tax Handling
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Automatically handle tax complexities for remote workers,
              traveling employees, and multi-state operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Work State Detection",
                desc: "Auto-detect work location for accurate withholding",
                color: "blue",
              },
              {
                icon: RefreshCw,
                title: "Reciprocity Rules",
                desc: "Automatic handling of state tax reciprocity agreements",
                color: "green",
              },
              {
                icon: Calculator,
                title: "Apportionment",
                desc: "Calculate tax based on days worked in each state",
                color: "purple",
              },
              {
                icon: AlertTriangle,
                title: "Nexus Alerts",
                desc: "Notifications when you may have tax nexus in new states",
                color: "orange",
              },
            ].map((item, i) => {
              const colorClasses = {
                blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                green:
                  "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                purple:
                  "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                orange:
                  "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
              }[item.color];

              return (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE AUTOMATION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-4 border border-teal-200 dark:border-teal-800">
              <RefreshCw className="w-4 h-4" /> Always Current
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Automated Compliance & Updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay compliant with automatic tax table updates, W-4 processing,
              and year-end form generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Quarterly Tax Table Updates
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automatic federal and state tax rate updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Wage base limit adjustments (SS, SUI, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    New tax code compliance notifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Change log with effective dates
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  W-4 Processing
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automated withholding from W-4 data
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
                    Exemption tracking and annual renewal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    State W-4 equivalents handling
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Year-End Forms
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    W-2 generation and e-filing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    1099 forms for contractors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    State wage reports (W-2 state copies)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    ACA 1095-C preparation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE CERTIFICATIONS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                <Lock className="w-4 h-4" /> Enterprise Security
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Bank-Level Security for Tax Data
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Tax data is some of the most sensitive information you handle.
                Our platform is built with enterprise-grade security from the
                ground up.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, label: "256-bit AES Encryption" },
                  { icon: ShieldCheck, label: "SOC 2 Type II Certified" },
                  { icon: BadgeCheck, label: "IRS e-File Authorized" },
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
                Tax Compliance Guarantee*
              </h3>
              <ul className="space-y-4">
                {[
                  "IRS deposit deadline tracking",
                  "State filing deadline alerts",
                  "Quarterly 941 preparation",
                  "Annual 940 FUTA filing",
                  "State unemployment reports",
                  "Local tax filing assistance",
                  "Penalty-free guarantee coverage",
                  "Audit support documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
                *Terms and conditions apply. Guarantee covers penalties
                resulting from platform calculation errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION WITH PAYROLL */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Seamless Payroll Integration
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Our tax engine integrates directly into the 5-step payroll
                  wizard, calculating withholdings in real-time as you process
                  each pay period.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold mb-2">Step 3</div>
                  <div className="text-white/80 text-sm">
                    Real-time tax calculation during payroll processing
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold mb-2">Step 4</div>
                  <div className="text-white/80 text-sm">
                    AI anomaly detection flags low withholding
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold mb-2">Ledger</div>
                  <div className="text-white/80 text-sm">
                    Automatic liability updates after ACH generation
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold mb-2">Reports</div>
                  <div className="text-white/80 text-sm">
                    One-click export for quarterly filings
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/features/payroll">
                  <Button
                    size="lg"
                    className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Learn About Payroll Automation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
            <Sparkles className="w-4 h-4" /> Get Started Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simplify Tax Compliance Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Let our tax engine handle the complexity of Federal, State, and
            Local tax calculations—so you can focus on growing your business
            without worrying about penalties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="w-full sm:w-auto cursor-pointer h-14 px-10 rounded-full"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto cursor-pointer h-14 px-10 rounded-full"
              >
                <Play className="mr-2 w-5 h-5" />
                Try for Free
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Penalty-free guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
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
            <Link href="/features/payroll" className="group">
              <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-all group-hover:shadow-lg">
                <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Payroll Automation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  5-step wizard with AI anomaly detection
                </p>
              </div>
            </Link>
            <Link href="/features/finance" className="group">
              <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all group-hover:shadow-lg">
                <BarChart3 className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Finance Analytics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Labor cost tracking and forecasting
                </p>
              </div>
            </Link>
            <Link href="/features/appraisals" className="group">
              <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all group-hover:shadow-lg">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Performance Appraisals
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  360° reviews and AI-powered feedback
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
