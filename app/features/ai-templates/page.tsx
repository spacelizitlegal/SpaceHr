import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AITemplatesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">

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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" /> AI Template Generator
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Launch Performance Reviews in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Seconds.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Stop starting from scratch. Our AI engine analyzes your industry, role requirements, and organizational culture to generate comprehensive, unbiased performance review templates instantly.
                        </p>
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg">Generate Your First Template</Button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
                            <Image
                                src="/images/features/ai-templates.png"
                                alt="AI Template Generation Interface"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                            {/* Overlay Success Message */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl border border-green-500/20 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                                    <Check className="w-6 h-6" />
                                </div>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">Template Generated!</p>
                                <p className="text-sm text-gray-500">Saved 4 hours of admin work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Why HR Leaders Love AI Templates</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Context-Aware Creation",
                                desc: "Generates questions specific to roles (e.g., 'Senior React Developer' vs. 'Sales Lead')."
                            },
                            {
                                title: "Bias Elimination",
                                desc: "Automatically flags and rephrases subjective language to ensure fair evaluations."
                            },
                            {
                                title: "Competency Mapping",
                                desc: "Aligns template questions with your organization's core values automatically."
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
