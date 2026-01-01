import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, MessageSquarePlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AIAppraisalsPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                            <MessageSquarePlus className="w-4 h-4" /> AI Appraisal Enhancement
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Turn Vague Feedback into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Actionable Growth.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Empower every manager to write world-class performance reviews. Our AI coach works in real-time to refine feedback, ensuring it is constructive, specific, and actionable.
                        </p>
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg">Empower Your Managers</Button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
                            <Image
                                src="/images/features/ai-appraisals.png"
                                alt="AI Appraisal Interface"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                            {/* Overlay Analysis */}
                            <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl border-l-4 border-blue-500 max-w-sm animate-in fade-in slide-in-from-right duration-700">
                                <p className="text-xs font-bold text-blue-500 uppercase mb-2">AI Suggestion</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">"Good job on the project" is too vague.</p>
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-sm font-medium text-blue-700 dark:text-blue-200">
                                    Try: "Great leadership on the Q3 migration, specifically reducing downtime by 15%."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">The AI Writing Coach for Managers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Tone Calibration",
                                desc: "Instantly adjusts feedback tone from 'Critical' to 'Coaching', improving employee reception."
                            },
                            {
                                title: "Specificity Injection",
                                desc: "Prompts managers to add specific examples when feedback is detected as too generic."
                            },
                            {
                                title: "Legal & Compliance",
                                desc: "Real-time scanning for non-compliant or bias-prone language before submission."
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
