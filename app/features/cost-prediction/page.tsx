import { Button } from "@/components/ui/Button";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  PieChart,
  ArrowRight,
  Calculator,
  CalendarRange,
  Layers,
  CheckCircle2,
  Building2,
  ChevronRight,
  ChevronDown,
  Users,
  Zap,
  Target,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema,
  softwareSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Labor Cost Forecasting Software | Predict Workforce Costs 12 Months Out | SpaceHR",
  description:
    "SpaceHR's AI labor cost forecasting predicts 12 months of workforce spend with 95% accuracy. Model headcount scenarios, automate variance alerts, and align HR budgets with Finance. Free trial.",
  keywords: [
    "labor cost forecasting software",
    "workforce cost prediction",
    "HR budget planning software",
    "headcount planning tool",
    "salary forecasting software",
    "predictive HR finance",
    "labor cost modeling",
    "workforce financial planning",
    "AI headcount forecasting",
    "HR cost prediction tool",
  ],
  alternates: {
    canonical: "https://spacehr.net/features/cost-prediction",
  },
  openGraph: {
    title: "Labor Cost Forecasting Software — Predict Workforce Costs 12 Months Out | SpaceHR",
    description:
      "Stop guessing your biggest expense. Forecast salaries, benefits, and overtime with 95% accuracy using SpaceHR's AI-powered labor cost prediction engine.",
    url: "https://spacehr.net/features/cost-prediction",
    siteName: "SpaceHR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "SpaceHR Labor Cost Forecasting Dashboard",
      },
    ],
  },
};

const faqs = [
  {
    question: "How accurate is SpaceHR's labor cost forecasting?",
    answer:
      "SpaceHR's AI labor cost forecasting achieves 95% accuracy over a 12-month horizon. The model is trained on your historical payroll data — base salary, overtime, benefits, taxes — and continuously self-corrects as actuals come in. Most customers find their variance drops from ±15% (spreadsheet-based) to under ±3% within the first quarter.",
  },
  {
    question: "What does SpaceHR include in its labor cost forecast?",
    answer:
      "The forecast covers: base salary, employer payroll taxes (FICA, FUTA, SUTA, state equivalents), health insurance premiums, 401k/pension employer contributions, overtime and variable pay, bonuses and commissions, and new hire ramp costs. You can include or exclude any component by department, location, or employee classification.",
  },
  {
    question: "Can I model headcount scenarios — like adding 20 engineers in Q3?",
    answer:
      "Yes. SpaceHR's scenario planner lets you model unlimited what-if situations: adding headcount by role and start date, applying merit increase percentages, simulating layoffs or restructures, and testing the impact of benefit plan changes. Each scenario shows the full 12-month cash-flow impact in seconds.",
  },
  {
    question: "How does SpaceHR compare to building a labor cost model in Excel?",
    answer:
      "Excel models are static — they break when reality changes and require manual updates for every new hire, departure, or pay change. SpaceHR's model is live: it pulls from your HRIS and payroll system automatically, updates forecasts when employees are added or terminated, and alerts you in real time when spend deviates from plan. A typical mid-market HR team saves 6-10 hours per month on budget reconciliation.",
  },
  {
    question: "Does SpaceHR integrate with our existing payroll and HRIS systems?",
    answer:
      "SpaceHR integrates with leading payroll and HRIS providers. It can also ingest data via CSV import for teams without a formal integration. The setup team will configure your data connections during the 48-hour onboarding process. Regional payroll compliance (US, UAE, Singapore, Canada, Europe) is built in.",
  },
  {
    question: "How does SpaceHR handle multi-country or multi-currency labor cost forecasts?",
    answer:
      "SpaceHR supports multi-currency forecasting with automatic exchange rate updates. Each country entity can be modeled separately with local statutory costs (e.g., UAE gratuity and WPS, Singapore CPF, European social charges) and then rolled up into a consolidated group view in your reporting currency.",
  },
  {
    question: "How long does it take to set up labor cost forecasting in SpaceHR?",
    answer:
      "Most teams complete setup in 48 hours. The process involves connecting your payroll data source (or uploading a CSV export), confirming your headcount structure, and configuring your forecast parameters. SpaceHR's onboarding team guides you through every step. No IT project or custom development is required.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  { name: "Labor Cost Forecasting", url: "https://spacehr.net/features/cost-prediction" },
];

export default function CostPredictionPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 pb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/features" className="hover:text-emerald-600 dark:hover:text-emerald-400">Features</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-slate-900 dark:text-white font-medium">Labor Cost Forecasting</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-10 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-cyan-900/20 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide mb-8 border border-emerald-200 dark:border-emerald-800 uppercase">
              <Calculator className="w-4 h-4" /> Labor Cost Forecasting
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
              Predict Your Workforce Costs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                12 Months Out.
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              SpaceHR's <strong>AI labor cost forecasting engine</strong> predicts salaries, benefits, payroll taxes, and overtime with <strong>95% accuracy</strong> — giving Finance and HR a single, live source of truth instead of a broken spreadsheet.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Model unlimited headcount scenarios. Catch budget overruns before they happen. Align HR strategy with financial reality — automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://cad.spaceaiapp.com/login">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-16 text-lg font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-900/20 shadow-xl transition-all"
                >
                  Model Your Budget Free
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-16 text-lg font-medium border-slate-300 dark:border-slate-700"
                >
                  See a Live Demo
                </Button>
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { stat: "95%", label: "Forecast accuracy" },
                { stat: "48 hrs", label: "Time to go live" },
                { stat: "6–10 hrs", label: "Saved per month vs. Excel" },
              ].map(({ stat, label }) => (
                <div key={stat} className="text-center">
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{stat}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem: Spreadsheet Chaos */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Why "Last Year + 5%" Doesn't Work Anymore
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Labor is typically 60–70% of a company's total operating cost. Yet most HR teams still forecast it with the same spreadsheet they built in 2019. Here's what that costs you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Hidden Cost Inflation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Health insurance premiums typically rise 5–8% annually. SUTA rate changes, 401k contribution adjustments, and market salary corrections compound on top — creating a gap that your "last year + 5%" model completely misses until you're already over budget.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Variable Pay Complexity</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Overtime spikes in Q4, commission variability in sales, and seasonal contractor spend are nearly impossible to model accurately in static spreadsheets. One missed overtime pattern can throw an entire department budget off by 12–18%.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Scenario Blindness</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  "What if we open a new office in Austin?" or "What happens to our run rate if we backfill all open roles by Q2?" Manual models are too fragile for rapid scenario testing — so most teams just don't run scenarios at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: Predictive Modeling */}
        <section className="py-24 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2rem] opacity-20 blur-3xl"></div>
                <div className="relative bg-slate-900 text-white rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-500/20 rounded-lg">
                        <PieChart className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Year-End Projection</h3>
                        <p className="text-slate-400 text-sm">FY 2026 Forecast • Updated Today</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-sm font-bold bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-900/50">On Track (+1.2%)</span>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                        <div className="text-slate-400 text-sm mb-1">Projected Total</div>
                        <div className="text-2xl font-bold text-white">$12.4M</div>
                        <div className="text-xs text-emerald-400 mt-1 flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" /> within 2% margin
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                        <div className="text-slate-400 text-sm mb-1">Risk Variance</div>
                        <div className="text-2xl font-bold text-orange-400">+$145k</div>
                        <div className="text-xs text-slate-500 mt-1">Due to Q4 OT spike</div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                      <h4 className="font-bold text-slate-200 mb-4 text-sm uppercase tracking-wider">Cost Drivers Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">Base Salary</span>
                          <span className="text-white font-medium">$8.2M</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span className="text-slate-300">Benefits &amp; Taxes</span>
                          <span className="text-white font-medium">$2.8M</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full">
                          <div className="bg-purple-500 h-full rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span className="text-slate-300">Variable (OT/Comms)</span>
                          <span className="text-white font-medium">$1.4M</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-900/30 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-blue-400 text-sm">Scenario: +10 Engineers in Q3</h4>
                        <p className="text-xs text-slate-400">Impact: +$850k/yr</p>
                      </div>
                      <Button size="sm" variant="secondary" className="h-8 text-xs">View Details</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-4">
                  <BarChart3 className="w-4 h-4" /> AI-Powered Forecasting
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  See Your Payroll Future — Before It Happens.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  SpaceHR's labor cost forecasting engine connects directly to your payroll and HRIS data to build a living financial model of your workforce — one that updates automatically as your organization changes.
                </p>
                <p className="text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  Unlike static spreadsheet models or expensive enterprise planning tools, SpaceHR is purpose-built for HR teams — no finance degree or BI analyst required. Set up in 48 hours. Accurate from day one.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Unlimited Scenario Planning</h4>
                      <p className="text-slate-600 dark:text-slate-400">Model any what-if in seconds — merit increases, new hires, role eliminations, location expansions. Compare scenarios side-by-side to find the optimal path.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Real-Time Variance Alerts</h4>
                      <p className="text-slate-600 dark:text-slate-400">Get notified the moment actual spend deviates from plan — with an AI-generated root-cause breakdown (overtime spike, unexpected hire, benefits rate change) so you can act immediately.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">All-In Cost Modeling</h4>
                      <p className="text-slate-600 dark:text-slate-400">Every cost component included: base salary, employer taxes (FICA, FUTA, SUTA, state), health premiums, 401k match, overtime, bonus accruals, and new-hire ramp costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                How SpaceHR Labor Cost Forecasting Works
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Three steps from raw payroll data to a board-ready 12-month cost forecast.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: <Zap className="w-6 h-6" />,
                  color: "emerald",
                  title: "Connect Your Data",
                  body: "SpaceHR pulls from your payroll system, HRIS, and headcount plan. Historical patterns — including seasonal overtime, turnover rates, and benefit renewal cycles — are ingested automatically. Setup takes under 48 hours with no IT involvement.",
                },
                {
                  step: "2",
                  icon: <BarChart3 className="w-6 h-6" />,
                  color: "teal",
                  title: "AI Builds Your Forecast",
                  body: "The AI model analyzes 24+ months of payroll history, identifies cost drivers and anomalies, and generates a 12-month forward forecast broken down by department, location, cost center, and employee type. Every component — salary, taxes, benefits, variable pay — is modeled separately.",
                },
                {
                  step: "3",
                  icon: <Target className="w-6 h-6" />,
                  color: "cyan",
                  title: "Plan, Alert & Report",
                  body: "Run headcount scenarios, set budget thresholds, and get automated alerts when spend deviates. Export board-ready reports for Finance reviews or pull live data into your FP&A tool. The forecast self-updates every payroll cycle.",
                },
              ].map(({ step, icon, color, title, body }) => (
                <div key={step} className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className={`w-12 h-12 rounded-full bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center mb-6 text-${color}-600 dark:text-${color}-400`}>
                    {icon}
                  </div>
                  <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 dark:text-slate-700 select-none">{step}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                SpaceHR vs. Other Labor Cost Forecasting Approaches
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                How does SpaceHR stack up against Excel models, Workday Adaptive, and Anaplan for workforce cost forecasting?
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left p-5 font-semibold text-slate-700 dark:text-slate-300 w-1/4">Capability</th>
                    <th className="p-5 font-bold text-emerald-700 dark:text-emerald-400 text-center bg-emerald-50 dark:bg-emerald-900/20">
                      SpaceHR
                    </th>
                    <th className="p-5 font-semibold text-slate-600 dark:text-slate-400 text-center">Excel / Sheets</th>
                    <th className="p-5 font-semibold text-slate-600 dark:text-slate-400 text-center">Workday Adaptive</th>
                    <th className="p-5 font-semibold text-slate-600 dark:text-slate-400 text-center">Anaplan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    ["12-month AI forecast", "✅ Automated", "❌ Manual formulas", "✅ Yes", "✅ Yes"],
                    ["Scenario planning", "✅ Unlimited, instant", "⚠️ Manual rebuild", "✅ Yes", "✅ Yes"],
                    ["Live payroll data sync", "✅ Automatic", "❌ Manual export/paste", "✅ Yes", "✅ Yes"],
                    ["Variance alerts", "✅ Real-time AI alerts", "❌ Not available", "⚠️ Requires config", "⚠️ Requires config"],
                    ["All-in cost (taxes, benefits)", "✅ Built-in", "⚠️ DIY formulas", "✅ Yes", "✅ Yes"],
                    ["Multi-country / multi-currency", "✅ US, UAE, SG, CA, EU", "⚠️ Manual conversion", "✅ Enterprise only", "✅ Enterprise only"],
                    ["Setup time", "✅ 48 hours", "✅ Immediate", "❌ 3–6 months", "❌ 6–12 months"],
                    ["Price (mid-market)", "✅ Affordable SaaS", "✅ Free", "❌ $100k+/yr", "❌ $200k+/yr"],
                    ["HR team self-service", "✅ No IT needed", "✅ Yes", "❌ Finance/IT required", "❌ Dedicated team required"],
                    ["Forecast accuracy", "✅ 95%", "⚠️ 75–85% typical", "✅ 90–95%", "✅ 90–95%"],
                  ].map(([capability, spacehr, excel, workday, anaplan], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-slate-50/50 dark:bg-slate-900/30"}>
                      <td className="p-5 font-medium text-slate-700 dark:text-slate-300">{capability}</td>
                      <td className="p-5 text-center font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10">{spacehr}</td>
                      <td className="p-5 text-center text-slate-600 dark:text-slate-400">{excel}</td>
                      <td className="p-5 text-center text-slate-600 dark:text-slate-400">{workday}</td>
                      <td className="p-5 text-center text-slate-600 dark:text-slate-400">{anaplan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">
              ✅ Included &nbsp;⚠️ Partial or manual &nbsp;❌ Not available / not practical
            </p>
          </div>
        </section>

        {/* Strategic Value Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-[#0f172a]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm mb-6">
              <DollarSign className="w-4 h-4" /> CFO-Ready Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Build Trust with Finance
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
              HR leaders and CFOs speak different languages. SpaceHR's forecasting engine translates headcount decisions into cash flow projections — so your next budget review is a conversation, not a negotiation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <CalendarRange className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Dynamic Headcount Planning</h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  Link recruitment goals directly to budget lines. Know exactly when you can afford to open a req, the downstream impact of a 90-day hiring delay, and how backfill timing affects your Q3 run rate — all in real time.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <PieChart className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Total Rewards Optimization</h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  Analyze the ROI of your compensation mix. Model how shifting from bonuses to base pay (or vice versa) affects both total cost and employee retention, using SpaceHR's integrated attrition prediction data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Labor Cost Forecasting — Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Everything HR leaders and CFOs ask before switching to SpaceHR.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map(({ question, answer }, i) => (
                <details
                  key={i}
                  className="group border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors list-none">
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">{question}</span>
                    <ChevronDown className="w-5 h-5 text-emerald-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="p-5 text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-[#0f172a] text-sm">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Related SpaceHR Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "AI HR Chatbot", href: "/features/ai-chatbots" },
                { label: "Attrition Prediction", href: "/features/attrition-prediction" },
                { label: "AI Payroll Auditor", href: "/features/ai-payroll-auditor" },
                { label: "360° Performance Appraisals", href: "/features/360-performance-appraisals" },
                { label: "AI Automation", href: "/features/ai-automation" },
                { label: "HR AI Concierge", href: "/features/hr-ai-concierge" },
                { label: "All Features", href: "/features" },
                { label: "Watch Demo", href: "/demo" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 dark:bg-black -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Stop Guessing. Start Forecasting.
            </h2>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Join HR and Finance teams who forecast labor costs with 95% accuracy — and go live in 48 hours.
            </p>
            <p className="text-base text-slate-400 mb-12 max-w-xl mx-auto">
              No spreadsheet maintenance. No manual updates. Just accurate, data-driven workforce financial planning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-10 text-lg bg-teal-500 hover:bg-teal-600 text-white rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
                  Start Forecasting Free
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-slate-600 text-white hover:bg-slate-800 rounded-full">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
