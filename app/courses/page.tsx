"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import {
    Brain,
    Target,
    TrendingUp,
    Users,
    ShieldCheck,
    Sparkles,
    LineChart,
    BookOpen,
    Zap,
    Layers,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-primary/20">

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-purple-500/10 blur-[100px]" />
                    <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] rounded-full bg-blue-500/10 blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span>AI-Powered Workforce Transformation</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                                AI-Powered Learning That Improves <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Employee Performance</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Align training with business goals. Our AI analyzes skill gaps, personalizes learning paths, and drives measurable performance growth for your entire workforce.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                                    Request Demo
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
                                    Explore Platform
                                </Button>
                            </div>

                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>14-day free trial</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm p-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                    alt="Team collaborating on performance"
                                    className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
                                />

                                {/* Floating Badge 1 */}
                                <div className="absolute -left-6 top-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-left-4 duration-1000 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Performance</p>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">+24% Growth</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge 2 */}
                                <div className="absolute -right-6 bottom-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-right-4 duration-1000 delay-200 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Skill Match</p>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">98% Accuracy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. How It Works Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How Our Intelligent Platform Works</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            We don't just host courses. We build intelligent growth engines for your teams.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent z-0" />

                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                                    <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. AI Skill Analysis</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our AI automatically maps current employee skills against role requirements to identify gaps instantly.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                                    <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Personalized Paths</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Employees receive custom learning journeys curated from thousands of internal and external resources.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                                    <LineChart className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Growth & Insights</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Track progress in real-time and correlate learning activities directly with performance improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Key AI Features Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Enterprise-Grade AI Capabilities</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Built for scale, security, and impact. Everything you need to modernize your L&D strategy.
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex">
                            View Full Feature List <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 group">
                                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Benefits by Audience Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Value for the Entire Organization</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A unified platform that aligns individual goals with company success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Employees */}
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-6"><Users className="w-10 h-10 text-blue-400" /></div>
                            <h3 className="text-2xl font-bold mb-4">Employees</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span>Personalized career roadmaps</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span>Skill-based learning recommendations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span>Clear visibility on growth metrics</span>
                                </li>
                            </ul>
                        </div>

                        {/* Managers */}
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-6"><ShieldCheck className="w-10 h-10 text-purple-400" /></div>
                            <h3 className="text-2xl font-bold mb-4">Managers</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                    <span>Real-time team skill tracking</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                    <span>Data-driven coaching insights</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                    <span>Automated performance reviews</span>
                                </li>
                            </ul>
                        </div>

                        {/* HR Leaders */}
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-6"><Target className="w-10 h-10 text-green-400" /></div>
                            <h3 className="text-2xl font-bold mb-4">HR Leaders</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Workforce skill heatmaps</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>ROI tracking on L&D spend</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Succession planning tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Visual Section */}
            <section className="relative h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                        alt="Diverse team working together"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        "Training that adapts to your workforce, not the other way around."
                    </h2>
                    <p className="text-xl text-blue-100">
                        Join 500+ forward-thinking companies transforming their culture.
                    </p>
                </div>
            </section>

            {/* 6. Final CTA Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl p-12 lg:p-16 border border-gray-100 dark:border-gray-800">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Transform Learning into <br /> Measurable Performance
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                            Stop guessing what your team needs. Start delivering precision training that drives results today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-blue-500/25 bg-blue-600 hover:bg-blue-700">
                                Get Started Now
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg bg-white dark:bg-transparent">
                                Talk to Sales
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            Free for teams up to 10 users • No credit card needed
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

const features = [
    {
        title: "Skill Gap Analysis",
        description: "Identify the skills your team lacks and automatically suggest courses to bridge the gap.",
        icon: Target,
        color: "text-red-500",
        bg: "bg-red-50 dark:bg-red-900/20"
    },
    {
        title: "Generative AI Coach",
        description: "24/7 AI mentor that answers employee questions and guides them through complex topics.",
        icon: Sparkles,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
        title: "Smart Assessments",
        description: "Adaptive quizzes that adjust difficulty based on performance to accurately measure proficiency.",
        icon: CheckCircle2,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        title: "Performance Tracking",
        description: "Visualize progress with granular reports on course completion, engagement, and skill growth.",
        icon: LineChart,
        color: "text-green-500",
        bg: "bg-green-50 dark:bg-green-900/20"
    },
    {
        title: "Custom Learning Paths",
        description: "Curate specific journeys for different roles, bringing structure to professional development.",
        icon: Layers,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
        title: "Content Library Integration",
        description: "Connect seamlessly with internal docs, Notion, Drive, and third-party course providers.",
        icon: BookOpen,
        color: "text-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/20"
    }
];
