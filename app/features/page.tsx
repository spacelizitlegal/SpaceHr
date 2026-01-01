import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, PenTool, BarChart3, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesHub() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-900/10 dark:to-[#0b1121]"></div>
                <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6 border border-teal-200 dark:border-teal-800">
                        <Bot className="w-4 h-4" /> AI-Powered Performance Suite
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                        Intelligence in every <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">HR workflow.</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                        Discover how our 5 core AI engines automate the mundane, empower your managers, and predict the future of your workforce.
                    </p>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Feature 1: Templates */}
                        <Link href="/features/ai-templates" className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/50 dark:bg-teal-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
                            <div className="w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:animate-pulse">
                                <PenTool className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Template Gen</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">Create unbiased, role-specific performance review templates in seconds.</p>
                            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Feature 2: Appraisals */}
                        <Link href="/features/ai-appraisals" className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 text-2xl font-bold">
                                A+
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Comment Enhance</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">Real-time coaching for managers to write constructive, actionable feedback.</p>
                            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Feature 3: Chatbots */}
                        <Link href="/features/ai-chatbots" className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">HR Concierge</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">24/7 automated support for employee policy, leave, and payroll questions.</p>
                            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Feature 4: Automation */}
                        <Link href="/features/ai-automation" className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 dark:bg-orange-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Workflow Auto</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">Automate employee engagement campaigns and operational nudges.</p>
                            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Feature 5: Payroll */}
                        <Link href="/features/ai-payroll" className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-2">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 dark:bg-green-900/20 rounded-bl-[200px] transition-transform group-hover:scale-110 origin-top-right"></div>
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">AI Payroll Intel</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md">Anomaly detection and predictive forecasting to ensure 100% compliant, error-free pay cycles.</p>
                                    <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 w-full relative h-[300px] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                    {/* Placeholder for small payroll visual */}
                                    <Image
                                        src="/images/features/ai-payroll.png"
                                        alt="Payroll Intelligence"
                                        fill
                                        className="object-cover object-top opacity-90 transition-all hover:scale-105"
                                    />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    );
}
