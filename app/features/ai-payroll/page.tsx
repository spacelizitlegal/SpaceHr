import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, ShieldCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AIPayrollPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#-[#0b1121] font-sans">

            {/* HEADER */}
            <div className="pt-24 px-6 container mx-auto">
                <Link href="/features" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8">
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
                            Precision Payroll. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Powered by Intelligence.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Move beyond spreadsheets. Our AI engine detects anomalies, predicts overtime costs, and ensures compliance across jurisdictions before you ever hit "Run Payroll."
                        </p>
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg">Modernize Your Payroll</Button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
                            <Image
                                src="/images/features/ai-payroll.png"
                                alt="AI Payroll Dashboard"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                            {/* Overlay Alert */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl border border-red-500/20 flex items-start gap-4 animate-bounce-slow">
                                <div className="p-3 bg-red-100 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">Anomaly Detected</p>
                                    <p className="text-sm text-gray-500">Sales Dept Overtime +200% vs Avg</p>
                                    <Button size="sm" variant="outline" className="mt-3 text-red-600 border-red-200 hover:bg-red-50 h-8">Investigate</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Error-Free Operations</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Anomaly Detection",
                                desc: "Instantly alerts you to unusual patterns (e.g., a 200% spike in overtime for a specific department)."
                            },
                            {
                                title: "Predictive Forecasting",
                                desc: "Estimates next quarter's labor costs based on hiring trends and historical data."
                            },
                            {
                                title: "Smart Tax Compliance",
                                desc: "Automatically updates tax rules based on employee location changes."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
