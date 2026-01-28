import { Button } from "@/components/ui/Button";
import {
  FileSpreadsheet,
  CheckCircle,
  TrendingUp,
  Search,
  AlertTriangle,
  Building2,
  Users,
  DollarSign,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Pay Transparency Act Software | Automated Pay Scales",
  description:
    "Comply with California's Pay Transparency Act (SB 1162). Automate pay scale disclosures, generate salary ranges, and submit required pay data reports easily.",
  keywords: [
    "California Pay Transparency Act",
    "SB 1162 compliance",
    "pay scale software",
    "salary range generator",
    "pay data reporting",
    "CA pay transparency",
    "HR compliance tools",
  ],
};

export default function CaliforniaPayTransparencyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
           <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-bold tracking-wide mb-8 border border-emerald-200 dark:border-emerald-800 uppercase">
            <DollarSign className="w-4 h-4" /> SB 1162 Ready
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Automated Pay Scale <br className="hidden md:block" />
            Disclosure & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Reporting</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop guessing salary ranges. Space HR automatically calculates valid pay scales for your job postings and generates your California Pay Data Reports in one click.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl transition-all"
              >
                Generate Pay Scales
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-medium"
              >
                See Reporting Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="order-2 md:order-1 space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <FileSpreadsheet className="w-6 h-6" />
                             </div>
                             <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pay Data Reporting</h3>
                                <p className="text-sm text-slate-500">Due annually in May</p>
                             </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Space HR aggregates your workforce data to create the required CSV files for the California Civil Rights Department (CRD), grouping employees by:
                        </p>
                        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Job Category</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Race/Ethnicity & Sex</li>
                              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Pay Band</li>
                        </ul>
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                                <Search className="w-6 h-6" />
                             </div>
                             <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pay Scale Disclosure</h3>
                                <p className="text-sm text-slate-500">Required for all job postings</p>
                             </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                           Our AI analyzes your internal equity and market data to suggest compliant, competitive salary ranges for every open role, ensuring you never miss a disclosure.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        SB 1162 Requirements Simplified
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
                        <p>
                            California's pay transparency laws apply to employers with 15+ employees (for pay scales) and 100+ employees (for data reporting).
                        </p>
                        <p>
                             <strong>The Risks of Non-Compliance:</strong>
                        </p>
                         <div className="mt-4 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex gap-4">
                            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-red-700 dark:text-red-400">
                                civil Penalties & Lawsuits
                                </h4>
                                <p className="text-sm text-red-600/80 dark:text-red-300/80 mt-1">
                                    Penalties can reach $10,000 per violation. Additionally, non-compliance opens the door to costly discrimination class-action lawsuits.
                                </p>
                            </div>
                        </div>
                        <p className="mt-6">
                            Space HR moves you from "risk" to "ready" instantly by leveraging the data you already have in your payroll system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
       <section className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">More Than Just Compliance</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">Build a fair, transparent culture that attracts top talent.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all">
                    <Users className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Internal Equity Analysis</h3>
                    <p className="text-slate-600 dark:text-slate-400">Identify pay gaps within your current workforce before they become public or legal issues.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all">
                    <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Market Benchmarking</h3>
                    <p className="text-slate-600 dark:text-slate-400">Compare your pay scales against real-time industry data to ensure you stay competitive.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all">
                    <BarChart className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visual Reporting</h3>
                    <p className="text-slate-600 dark:text-slate-400">Turn complex pay data into easy-to-understand visualizations for executives and HR leaders.</p>
                 </div>
            </div>
        </div>
       </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Make Pay Transparency Your Advantage
           </h2>
           <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Generate compliant pay scales and audit your compensation strategy in minutes.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-8 text-lg bg-white text-emerald-900 hover:bg-emerald-50 rounded-full shadow-xl font-bold">
                    Start Free Trial
                </Button>
             </Link>
             <Link href="/request-a-demo">
                  <Button size="lg" variant="outline" className="h-16 px-8 text-lg border-emerald-500 text-white hover:bg-emerald-800 rounded-full">
                   Book a Demo
                </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
