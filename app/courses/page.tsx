"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import {
    Brain,
    Target,
    Zap,
    Check,
    Play,
    Users,
    TrendingUp
} from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:w-2/3 mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-8 border border-teal-100 dark:border-teal-800">
                            <Brain className="w-3 h-3" /> AIPerform Academy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
                            Corporate learning, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">personalized by AI.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop assigning generic training. Our AI analyzes performance gaps and automatically assigns targeted micro-courses to upskill your team in the flow of work.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                                Explore The Academy
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Hero Backgroud Effect */}
                <div className="absolute top-0 inset-x-0 h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50/50 via-white to-white dark:from-teal-900/20 dark:via-[#0b1121] dark:to-[#0b1121]"></div>
            </section>

            {/* 2. HOW IT WORKS - 3 Steps Visual Flow */}
            <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">From Insight to Action</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Seamlessly connecting performance reviews with learning and development.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent border-t border-dashed border-gray-400 dark:border-gray-600"></div>

                        {[
                            {
                                icon: Target,
                                title: "1. Identify Gaps",
                                description: "Managers and AI identify skill gaps during performance reviews.",
                                color: "text-red-500",
                                bg: "bg-red-50 dark:bg-red-900/20"
                            },
                            {
                                icon: Brain,
                                title: "2. Assign Training",
                                description: "AI recommends specific modules to close the identified gaps.",
                                color: "text-purple-500",
                                bg: "bg-purple-50 dark:bg-purple-900/20"
                            },
                            {
                                icon: TrendingUp,
                                title: "3. Track Growth",
                                description: "Monitor skill acquisition and its impact on subsequent reviews.",
                                color: "text-green-500",
                                bg: "bg-green-50 dark:bg-green-900/20"
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`w-10 h-10 ${step.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FEATURE BLOCK - Image Left */}
            <section className="py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2rem] opacity-30 blur-2xl transform rotate-3"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                                <Image
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1674&q=80"
                                    alt="Learning Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                                {/* Overlay UI Element */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                            <Play className="w-5 h-5 text-blue-600 fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-uppercase font-bold text-blue-600 tracking-wider">Now Playing</p>
                                            <p className="font-bold text-gray-900 dark:text-white">Giving Effective Feedback</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-blue-600 h-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Learning that happens <br /><span className="text-primary">in the flow of work</span>.</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Don't force employees to switch context. Our integrations with Slack, Teams, and your existing LMS mean training happens where work happens.
                            </p>
                            <ul className="space-y-4">
                                {['Bite-sized micro-learning modules', 'Interactive role-play scenarios', 'Mobile-first design for on-the-go access'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium text-gray-800 dark:text-gray-200">
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONTENT LIBRARY PREVIEW - Image Grids (Not cards) */}
            <section className="py-24 bg-[#0b1121] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">World-Class Content Library</h2>
                            <p className="text-gray-400 max-w-xl">Access thousands of courses from industry experts.</p>
                        </div>
                        <Button variant="outline" className="mt-6 md:mt-0 text-white border-white/20 hover:bg-white/10">Browse Catalog</Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                        ].map((img, i) => (
                            <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
                                <Image src={img} alt="Course Category" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="font-bold text-lg">Leadership {i + 1}01</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">12 Modules</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-800"></div>
                <div className="absolute opacity-10 top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Close the skill gap today.</h2>
                    <p className="text-xl text-teal-100 mb-10">Start your 14-day free trial of AIPerform Academy and see the difference in your team's output.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50 font-bold h-14 px-8 rounded-full shadow-lg">Start Free Trial</Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-full">Schedule Demo</Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
