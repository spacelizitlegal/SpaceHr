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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Analytics & Labor Cost Management | Space HR",
  description:
    "Real-time labor cost analysis, YTD vs Budget tracking, predictive forecasting, and ACH batch generation. Transform HR data into strategic financial insights.",
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
  ],
  openGraph: {
    title: "Finance Analytics & Labor Cost Management | Space HR",
    description:
      "Real-time labor cost analysis with YTD vs Budget tracking and predictive forecasting.",
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

export default function FinanceAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <BarChart3 className="w-4 h-4" /> Finance & Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Strategic Labor Cost Intelligence
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transform payroll data into actionable financial insights. Track
                YTD vs Budget, forecast year-end costs, and optimize workforce
                spending with AI-powered analytics.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Finance Analytics Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINANCE BENEFITS GRID */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real-Time Labor Cost Tracking
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
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
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Budget Variance Analysis
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>YTD actuals vs annual budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Variance alerts for over-budget departments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Trend-based year-end projections</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ACH & Banking Integration
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LABOR COST ANALYSIS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
                <Calculator className="w-4 h-4" /> Total Labor Cost Formula
              </div>
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
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Gross Pay
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base salary, overtime, bonuses, commissions
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  +
                </div>
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Employer Taxes
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    FICA (7.65%), FUTA, SUI, Local employer taxes
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  +
                </div>
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Benefits & Contributions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Health insurance, 401(k) match, other employer costs
                  </p>
                </div>
                <div className="text-2xl font-bold text-center text-gray-400">
                  =
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-2">Total Labor Cost</h4>
                  <p className="text-white/90 text-sm">
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                YTD vs Annual Budget Dashboard
              </h3>
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
                within budget.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
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
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
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
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACH & BANKING */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Banking & ACH Integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Generate NACHA-compliant ACH files and process batch direct
              deposits with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ACH File Generation
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    NACHA-compliant batch file creation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    One-click export after payroll finalization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bank-ready file format for direct upload
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Direct Deposit Features
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Split deposits across multiple accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Percentage or fixed amount allocations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Paper check fallback for unbanked employees
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Payroll Data Flow
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl">
                Finance analytics update automatically after each payroll run,
                giving you real-time visibility into labor costs, tax
                liabilities, and budget performance.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">
                    Payroll → Finance
                  </div>
                  <div className="text-white/80">
                    Labor cost data flows instantly after ACH generation
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Tax → Ledger</div>
                  <div className="text-white/80">
                    Tax liabilities update the financial liability ledger
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">AI Insights</div>
                  <div className="text-white/80">
                    Predictive forecasts update based on latest data
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
            Transform HR Data into Strategic Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Stop flying blind with labor costs. Get real-time visibility,
            predictive forecasting, and budget control.
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
