import { Button } from "@/components/ui/Button";
import {
  BarChart3,
  CheckCircle,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Calculator,
  ArrowRight,
  PieChart,
  Building,
  CreditCard,
  ArrowLeft,
  Play,
  Sparkles,
  Target,
  Zap,
  LineChart,
  Wallet,
  Clock,
  Users,
  FileText,
  Download,
  RefreshCw,
  Shield,
  BadgeCheck,
  Lock,
  Globe,
  Layers,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Finance Analytics & Labor Cost Management | Space HR",
  description:
    "Turn HR data into insights. Real-time labor cost analysis, predictive forecasting, and budget tracking help modern enterprises save up to 15% on labor costs.",
  keywords: [
    "labor cost analytics",
    "HR finance dashboard",
    "payroll cost analysis",
    "budget variance tracking",
    "ACH batch generation",
    "workforce cost optimization",
    "YTD payroll analysis",
    "CFO HR analytics",
    "labor cost forecasting",
    "payroll budget management",
    "workforce planning",
    "headcount analysis",
    "compensation analytics",
    "HR ROI tracking",
  ],
  openGraph: {
    title: "Finance Analytics & Labor Cost Management | Space HR",
    description:
      "Real-time labor cost analysis with YTD vs Budget tracking and predictive forecasting. Save 15% on labor costs.",
    url: "https://spacehr.net/features/finance",
    images: [
      {
        url: "/og-finance-analytics.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Finance Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Analytics & Labor Cost Management | Space HR",
    description:
      "Transform HR data into strategic financial insights with real-time analytics.",
    images: ["/og-finance-analytics.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/finance",
  },
};

const _bc_finance = [{"name":"Home","url":"https://spacehr.net"},{"name":"Features","url":"https://spacehr.net/features"},{"name":"Finance","url":"https://spacehr.net/features/finance"}];

export default function FinanceAnalyticsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <BarChart3 className="w-4 h-4" /> Finance & Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Strategic Labor <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Cost Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transform payroll data into actionable financial insights. Track
                YTD vs Budget, forecast year-end costs, and optimize workforce
                spending with AI-powered analytics that help you save up to 15%
                on labor costs.
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
                  <span>Real-time dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI forecasting</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/office-team-presentation.webp"
                alt="Space HR finance analytics dashboard showing AI labor cost prediction, year-end budget trend forecasting, and liability ledger analysis for HR and CFO teams"
                fill
                className="object-cover"
                priority
              />
              {/* Finance Dashboard Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Labor Cost Analysis
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-medium">
                    On Track
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      $1.05M
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      YTD Spend
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      87.5%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Budget Used
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15%
              </div>
              <div className="text-orange-100 text-sm md:text-base">
                Avg Labor Cost Savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-orange-100 text-sm md:text-base">
                Forecast Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                5 Hrs
              </div>
              <div className="text-orange-100 text-sm md:text-base">
                Saved Weekly on Reports
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-orange-100 text-sm md:text-base">
                Pre-Built Reports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCE BENEFITS GRID */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" /> Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Financial Visibility
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to manage, analyze, and optimize your
              workforce costs in one powerful dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real-Time Labor Cost Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Get instant visibility into your total labor costs across the
                entire organization with live dashboards.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Total labor cost vs net pay analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Department-level cost breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Overtime percentage monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Per-employee cost metrics</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-800">
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                  15+ analysis dimensions
                </span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Budget Variance Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Never be surprised by budget overruns. Get real-time alerts when
                spending deviates from plan.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>YTD actuals vs annual budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Variance alerts for over-budget depts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Trend-based year-end projections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>5-year historical comparisons</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  98% forecast accuracy
                </span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ACH & Banking Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Streamline payments with NACHA-compliant ACH file generation and
                multi-bank support.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>NACHA-compliant ACH file generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Batch direct deposit processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Split payment support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-bank account management</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                  Same-day ACH supported
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE DASHBOARD PREVIEW */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
                <LineChart className="w-4 h-4" /> Executive Dashboard
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                CFO-Ready Analytics at a Glance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Real-time visibility into labor costs across your entire
                organization. Filter by department, location, or time period.
                Export reports with one click.
              </p>

              <div className="space-y-4">
                {[
                  { text: "Real-time cost per employee metrics", icon: Users },
                  { text: "Department-level budget tracking", icon: Building },
                  { text: "Overtime and premium pay analysis", icon: Clock },
                  { text: "One-click export to Excel/PDF", icon: Download },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Finance Dashboard
                </span>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    $2.8M
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Total Payroll YTD
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-500 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>On Budget</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    $4,250
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Avg Cost/Employee
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-blue-500 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>+2.3% YoY</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    93%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Budget Utilization
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-500 text-xs">
                    <Target className="w-3 h-3" />
                    <span>On Track</span>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Monthly Labor Costs
                  </span>
                  <span className="text-xs text-gray-500">Last 6 months</span>
                </div>
                <div className="flex items-end gap-3 h-24">
                  {[65, 72, 68, 80, 75, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-400">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Breakdown */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  By Department
                </span>
                <div className="mt-3 space-y-2">
                  {[
                    { dept: "Engineering", amount: "$1.2M", percent: 43 },
                    { dept: "Sales", amount: "$680K", percent: 24 },
                    { dept: "Operations", amount: "$520K", percent: 19 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 dark:text-gray-400 w-20">
                        {item.dept}
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-16 text-right">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LABOR COST ANALYSIS */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0b1121] dark:to-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4" /> Total Cost of Employment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Labor Cost Analysis
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Understand the true cost of your workforce beyond gross
              pay—including taxes, benefits, and employer contributions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Total Labor Cost vs Net Pay
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our finance dashboard visualizes the full cost of employment,
                helping CFOs and finance teams understand the gap between what
                employees take home and what the company actually spends.
              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Wallet className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Gross Pay
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm pl-11">
                    Base salary, overtime, bonuses, commissions
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  +
                </div>
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Employer Taxes
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm pl-11">
                    FICA (7.65%), FUTA, SUI, Local employer taxes
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  +
                </div>
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Benefits & Contributions
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm pl-11">
                    Health insurance, 401(k) match, other employer costs
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  =
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold">Total Labor Cost</h4>
                  </div>
                  <p className="text-white/90 text-sm pl-11">
                    Complete cost of employment per employee
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Department Cost Breakdown
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Engineering
                    </span>
                    <span className="text-orange-600 dark:text-orange-400 font-bold">
                      $450K
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    85% of annual budget
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Sales
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      $320K
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    72% of annual budget
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Operations
                    </span>
                    <span className="text-red-600 dark:text-red-400 font-bold">
                      $280K
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: "105%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Over budget by 5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGET TRACKING */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  YTD vs Annual Budget Dashboard
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-semibold">
                  Live
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">
                      YTD Actual Spend
                    </span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      $1.05M
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">
                      Annual Budget
                    </span>
                    <span className="text-xl font-bold text-gray-600 dark:text-gray-400">
                      $1.2M
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: "87.5%" }}
                    >
                      <span className="text-white text-xs font-bold">
                        87.5%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    On track with 3 months remaining
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Projected Year-End
                    </h4>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    $1.18M
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    $20K under budget (AI forecast)
                  </p>
                </div>

                {/* Variance by Month */}
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                    Monthly Variance
                  </span>
                  <div className="grid grid-cols-6 gap-2">
                    {[
                      { month: "Jan", variance: -2 },
                      { month: "Feb", variance: 3 },
                      { month: "Mar", variance: -1 },
                      { month: "Apr", variance: 5 },
                      { month: "May", variance: -3 },
                      { month: "Jun", variance: 2 },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-xs font-bold ${item.variance >= 0 ? "text-red-500" : "text-green-500"}`}
                        >
                          {item.variance >= 0 ? "+" : ""}
                          {item.variance}%
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.month}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                <PieChart className="w-4 h-4" /> Predictive Budgeting
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                AI-Powered Year-End Forecasting
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our AI analyzes current spending trends, seasonal patterns, and
                hiring plans to project year-end labor costs—helping you stay
                within budget with 98% accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Trend Analysis
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Projects year-end costs based on current spending velocity
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Variance Alerts
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automatic notifications when departments exceed budget
                      thresholds
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Scenario Planning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Model hiring freezes, raises, or layoffs to see budget
                      impact
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Real-Time Updates
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Forecasts recalculate automatically after each payroll run
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACH & BANKING */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
              <CreditCard className="w-4 h-4" /> Banking Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Banking & ACH Integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Generate NACHA-compliant ACH files and process batch direct
              deposits with ease. Support for same-day ACH and multi-bank
              routing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                ACH File Generation
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    NACHA-compliant batch files
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    One-click export
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bank-ready format
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Direct Deposit
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Split deposits
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    % or fixed allocations
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Paper check fallback
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Same-Day ACH
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Expedited payments
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Emergency payroll
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bonus processing
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Multi-Bank Support
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Multiple funding accounts
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Entity-level routing
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bank reconciliation
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
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Seamless Payroll Data Flow
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Finance analytics update automatically after each payroll run,
                  giving you real-time visibility into labor costs, tax
                  liabilities, and budget performance.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold mb-1">
                    Payroll → Finance
                  </div>
                  <div className="text-white/80 text-sm">
                    Labor cost data flows instantly
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold mb-1">Tax → Ledger</div>
                  <div className="text-white/80 text-sm">
                    Tax liabilities auto-update
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold mb-1">AI Insights</div>
                  <div className="text-white/80 text-sm">
                    Forecasts update in real-time
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold mb-1">Reports Ready</div>
                  <div className="text-white/80 text-sm">
                    Export-ready within minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
              <Lock className="w-4 h-4" /> Security & Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise-Grade Financial Security
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your financial data is protected by the same standards used by
              major banks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SOC 2 Type II", desc: "Annual audits" },
              {
                icon: Lock,
                title: "256-bit Encryption",
                desc: "AES-256 at rest & in transit",
              },
              {
                icon: BadgeCheck,
                title: "NACHA Certified",
                desc: "ACH compliance",
              },
              { icon: Globe, title: "GDPR Ready", desc: "Data protection" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">
              <BadgeCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-300 font-semibold">
                Financial Data Protection Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
              <Building className="w-4 h-4" /> Industry Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Finance Analytics for Every Industry
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tailored labor cost insights for your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare",
                description:
                  "Track labor costs across shifts, departments, and facilities. Monitor overtime compliance and staffing ratios.",
                color: "red",
              },
              {
                title: "Manufacturing",
                description:
                  "Analyze labor costs per unit produced. Optimize shift scheduling and track productivity metrics.",
                color: "blue",
              },
              {
                title: "Retail",
                description:
                  "Compare labor costs to sales revenue. Optimize staffing for peak seasons and track store-level profitability.",
                color: "green",
              },
              {
                title: "Technology",
                description:
                  "Manage contractor vs employee costs. Track R&D labor for tax credits and project-based budgeting.",
                color: "purple",
              },
              {
                title: "Professional Services",
                description:
                  "Bill back labor costs to clients. Track utilization rates and profitability by engagement.",
                color: "orange",
              },
              {
                title: "Non-Profit",
                description:
                  "Allocate labor costs to grants and programs. Generate reports for funders and board members.",
                color: "teal",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br rounded-2xl p-6 border transition-all hover:shadow-lg cursor-pointer ${
                  useCase.color === "red"
                    ? "from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700"
                    : useCase.color === "blue"
                      ? "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700"
                      : useCase.color === "green"
                        ? "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700"
                        : useCase.color === "purple"
                          ? "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700"
                          : useCase.color === "orange"
                            ? "from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700"
                            : "from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-200 dark:border-teal-800 hover:border-teal-300 dark:hover:border-teal-700"
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /> Start Saving Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform HR Data into Strategic Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop flying blind with labor costs. Get real-time visibility,
            predictive forecasting, and budget control that saves 15% on
            average.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-16 bg-white dark:bg-[#0b1121] border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Related Features
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "AI-Powered Payroll",
                href: "/features/payroll",
                icon: Calculator,
              },
              { name: "Tax Compliance", href: "/features/tax", icon: FileText },
              {
                name: "Employee Appraisals",
                href: "/features/appraisals",
                icon: Users,
              },
              {
                name: "AI Intelligence",
                href: "/features/ai-intelligence",
                icon: Sparkles,
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href}>
                <div className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {feature.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 ml-auto transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
