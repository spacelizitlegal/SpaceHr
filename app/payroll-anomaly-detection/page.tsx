import { Button } from "@/components/ui/Button";
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
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Payroll Error Detection Software | Catch Ghost Employees",
  description:
    "Stop overpaying taxes and catch ghost employees before you click send. Space HR's AI auditor scans every pay run for anomalies, variance, and compliance risks.",
  keywords: [
    "AI payroll error detection",
    "payroll risk audit",
    "ghost employee detection",
    "payroll variance analysis",
    "payroll compliance software",
    "CFO payroll tools",
    "hr audit software",
  ],
};

export default function PayrollAnomalyDetectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      {/* Hero Section - Trust & Alertness Color Palette */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-indigo-900/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold tracking-wide mb-8 border border-red-200 dark:border-red-800 uppercase">
            <ShieldAlert className="w-4 h-4" /> Stop Revenue Leakage
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Stop Overpaying Taxes & Catch <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Ghost Employees
            </span>{" "}
            Before You Click Send.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Standard payroll software only processes what you enter. Space HR’s
            <span className="font-semibold text-slate-900 dark:text-white">
              {" "}
              AI Auditor{" "}
            </span>
            scans every line item for anomalies, variance, and compliance risks
            in real-time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-xl transition-all"
              >
                Schedule Free Risk Audit
              </Button>
            </Link>
            <Link href="/features/payroll">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-medium"
              >
                View Payroll Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              The Cost of "Clicking Send" Blindly
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Manual review misses 15% of payroll errors on average.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Ghost Employees
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Active payments to terminated or non-existent employees often go
                unnoticed for months, draining budget silently.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Unapproved Variances
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Sudden spikes in overtime, off-cycle bonuses, or unauthorized
                salary adjustments that bypass standard approval chains.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Overpayments
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Incorrect tax table applications leading to over-withholding and
                complex, costly reconciliation capability later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: AI Audit */}
      <section className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm mb-4">
                <Lock className="w-4 h-4" /> Comprehensive Security Layer
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Your AI Payroll Guardian
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Space HR provides a pre-processing audit layer that acts as a
                firewall for your finance team. We flag issues <strong>before</strong>{" "}
                money leaves the account.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Pre-Run Variance Analysis</h4>
                    <p className="text-slate-600 dark:text-slate-400">Compares current payroll against historical averages and flags &gt;5% deviations.</p>
                  </div>
                </div>
                 <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Active-Status Verification</h4>
                    <p className="text-slate-600 dark:text-slate-400">Cross-references pay recipients with active employee directories and resignation dates.</p>
                  </div>
                </div>
                 <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Global Tax Sync</h4>
                    <p className="text-slate-600 dark:text-slate-400">Real-time validation against the latest federal, state, and local tax tables.</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                            <History className="w-5 h-5 text-red-500" />
                            <span className="font-bold">Audit Log: Run #2024-10-A</span>
                        </div>
                        <span className="text-red-400 text-sm font-bold bg-red-900/20 px-3 py-1 rounded-full border border-red-900/50">3 Critical Flags Found</span>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex gap-4">
                            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-red-200">Ghost Employee Detected</p>
                                <p className="text-sm text-slate-400">ID #4029 (Terminated Oct 1st) included in batch.</p>
                            </div>
                        </div>
                         <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 flex gap-4">
                            <TrendingDown className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-orange-200">Abnormal Overtime Spike</p>
                                <p className="text-sm text-slate-400">Dept: Logistics (+45% vs avg). Approval pending.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                        <span className="text-sm text-slate-400">Status: <span className="text-red-400 font-bold">Blocked</span></span>
                         <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-200">Review Anomalies</Button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & CTA */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Protect Your Bottom Line Today
           </h2>
           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Schedule a demonstration with our Finance Solutions team to see exactly how Space HR can secure your payroll process.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-8 text-lg bg-red-600 hover:bg-red-700 text-white rounded-full shadow-red-900/20 shadow-xl">
                    Start Protection Now
                </Button>
             </Link>
             <Link href="/request-a-demo">
                  <Button size="lg" variant="outline" className="h-16 px-8 text-lg border-slate-600 text-white hover:bg-slate-800 rounded-full">
                    Talk to Sales
                </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
