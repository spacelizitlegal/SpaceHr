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
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predict Next Year's Labor Costs | Workforce Forecasting | Space HR",
  description:
    "Eliminate budget surprises. Predict 12-month labor costs with 95% accuracy, model headcount scenarios, and optimize your workforce spend.",
  keywords: [
    "Predict next year's labor costs",
    "workforce cost forecasting",
    "HR budget planning software",
    "salary inflation prediction",
    "labor cost modeling",
    "headcount planning tools",
    "predictive HR finance",
  ],
  openGraph: {
    title: "Predict Next Year's Labor Costs | Space HR",
    description:
      "Stop guessing your biggest expense. Forecast salaries, benefits, and overtime with precision using AI-powered modeling.",
    url: "https://spacehr.net/features/cost-prediction",
    images: [
      {
        url: "/og-cost-prediction.jpg",
        width: 1200,
        height: 630,
        alt: "Labor Cost Prediction Dashboard",
      },
    ],
  },
};

export default function CostPredictionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-cyan-900/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide mb-8 border border-emerald-200 dark:border-emerald-800 uppercase">
            <Calculator className="w-4 h-4" /> Precision Budgeting Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
            Predict Next Year’s <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Labor Costs.
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop relying on spreadsheets and guesswork. Our <strong>Predictive Cost Engine</strong> forecasts salaries, benefits, taxes, and overtime with 95% accuracy—giving Finance and HR a single source of truth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                className="rounded-full px-8 h-16 text-lg font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-900/20 shadow-xl transition-all"
              >
                Model Your Budget
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-16 text-lg font-medium border-slate-300 dark:border-slate-700"
              >
                Get a Demo
              </Button>
            </Link>
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
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Traditional budgeting fails to account for the dynamic nature of modern workforce costs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Hidden Inflation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Benefit premiums, tax rate adjustments, and market salary corrections often outpace standard inflation estimates, leading to mid-year budget freezes.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Variable Complexity
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Overtime spikes, commission variability, and seasonal hiring needs are difficult to model accurately in static spreadsheets.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Scenario Blindness
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                "What if we open a new office?" or "What if we reduce headcount by 10%?" Manual models are too brittle for rapid scenario testing.
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
                                <div className="text-xs text-slate-500 mt-1">
                                    Due to Q4 OT spike
                                </div>
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
                                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '70%' }}></div>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm mt-2">
                                    <span className="text-slate-300">Benefits & Taxes</span>
                                    <span className="text-white font-medium">$2.8M</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1.5 rounded-full">
                                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '25%' }}></div>
                                </div>

                                 <div className="flex items-center justify-between text-sm mt-2">
                                    <span className="text-slate-300">Variable (OT/Comms)</span>
                                    <span className="text-white font-medium">$1.4M</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1.5 rounded-full">
                                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '15%' }}></div>
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
                <BarChart3 className="w-4 h-4" /> Smart Forecasting
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                See the Future of Your Payroll.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Seamlessly integrates with your payroll and recruitment data to create a living, breathing financial model of your workforce.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Scenario Planning</h4>
                    <p className="text-slate-600 dark:text-slate-400">Instantly model "What-If" scenarios. How does a 4% merit increase vs. a 3% increase impact Q4 cash flow?</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Automated Variance Analysis</h4>
                    <p className="text-slate-600 dark:text-slate-400">Receive alerts the moment actual spend deviates from your forecast, with detailed root-cause breakdowns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Benefit Cost Modeling</h4>
                    <p className="text-slate-600 dark:text-slate-400">Accurately project the impact of healthcare premium hikes or 401k match changes across your entire population.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 via-slate-900 to-[#0f172a]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
             <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm mb-6">
                <DollarSign className="w-4 h-4" /> CFO-Ready Insights
              </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Build Trust with Finance
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
                Head of People and CFOs speak different languages. Our predictive engine translates "Headcount" into "Cash Flow," aligning HR strategy with financial reality.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <CalendarRange className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6 relative z-10" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Dynamic Headcount Planning</h3>
                    <p className="text-slate-600 dark:text-slate-400 relative z-10">
                        Link recruitment goals directly to budget lines. Know exactly when you can afford to open a req and the downstream impact of hiring delays.
                    </p>
                </div>
                 <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <PieChart className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6 relative z-10" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Total Rewards Optimization</h3>
                    <p className="text-slate-600 dark:text-slate-400 relative z-10">
                        Analyze the ROI of your compensation mix. Model how shifting funds from bonuses to base pay (or vice versa) affects retention and total cost.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 dark:bg-black -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
             Take Control of Your Budget.
           </h2>
           <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
             No more surprises. No more "guesstimates." Just accurate, data-driven workforce planning.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-10 text-lg bg-teal-500 hover:bg-teal-600 text-white rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
                    Start Forecasting
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
  );
}
