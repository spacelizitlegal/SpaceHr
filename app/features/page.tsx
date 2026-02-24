import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Bot,
  PenTool,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Trophy,
  Brain,
  Users,
  Award,
  Clock,
  Calendar,
  Target,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  softwareSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI-Powered HR ERP: Payroll, Leave & Appraisals | Space HR",
  description:
    "Explore Space HR’s AI features: from 360° appraisals and attendance tracking to tax compliance and financial analytics. The complete toolkit for modern HR",
  keywords: [
    "AI payroll automation",
    "360-degree appraisal software",
    "automated tax compliance",
    "HR financial analytics",
    "payroll anomaly detection",
    "AI performance reviews",
    "workforce cost optimization",
    "predictive HR analytics",
    "automated payroll auditing",
    "tax liability management",
    "labor cost analysis",
    "AI coaching recommendations",
    "role-based HR portals",
    "FICA tax automation",
    "employee attendance tracking",
    "time tracking software",
    "leave management system",
    "PTO tracking",
    "goal management software",
    "OKR software",
    "employee self-service portal",
  ],
  openGraph: {
    title: "AI-Powered ERP Features | Space HR Platform",
    description:
      "Discover intelligent automation for Payroll, Appraisals, Tax, Finance with AI-powered insights, anomaly detection, and predictive analytics.",
    url: "https://spacehr.net/features",
    images: [
      {
        url: "/og-features.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR AI Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered ERP Features | Space HR",
    description:
      "Intelligent Payroll, Appraisals, Tax & Finance automation with AI insights.",
    images: ["/og-features.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features",
  },
};

const featuresBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
]);

export default function FeaturesHub() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={softwareSchema} />
      <JsonLd data={featuresBreadcrumb} />
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6 border border-teal-200 dark:border-teal-800">
            <Bot className="w-4 h-4" /> Complete AI-Powered ERP Suite
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            The Intelligence Layer for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
              Human Capital Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover how AI transforms every aspect of your HR operations—from
            automated payroll auditing and tax compliance to performance
            coaching and predictive workforce analytics.
          </p>
        </div>
      </section>

      {/* AI INTELLIGENCE OVERVIEW */}
      <section className="pb-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hybrid Local/Cloud AI Architecture
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl">
                Our AI engine analyzes your data continuously, acting as an
                automated auditor, strategic advisor, and performance
                coach—identifying anomalies, optimizing costs, and predicting
                future trends.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">
                    Automated Anomaly Detection
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Real-time</div>
                  <div className="text-white/80">Predictive Insights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Intelligent Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FEATURES GRID */}
      <section className="pb-32 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive ERP Modules
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nine integrated modules that transform how you manage payroll,
              performance, attendance, leave, goals, taxes, finance, and AI
              intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Intelligence Layer */}
            <Link
              href="/features/ai-intelligence"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:animate-pulse relative z-10">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                AI Intelligence Layer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Hybrid local/cloud AI that powers intelligent automation across
                all modules
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Payroll anomaly detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Cost optimization recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Predictive workforce analytics</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Performance Appraisals */}
            <Link
              href="/features/appraisals"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:animate-pulse relative z-10">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Performance Appraisals
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                360° reviews with template builder and AI coaching insights
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Custom template builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-rater 360° feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>AI training recommendations</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Payroll Engine */}
            <Link
              href="/features/payroll"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:animate-pulse relative z-10">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Payroll Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                5-step wizard with real-time tax calculation and ACH generation
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Automated time import</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Real-time tax withholding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>NACHA-compliant ACH files</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Tax & Compliance */}
            <Link
              href="/features/tax"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 dark:bg-green-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:animate-pulse relative z-10">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Tax & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Federal, State, and Local tax management with automated updates
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>50-state tax tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Liability ledger tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-state employee support</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Finance & Analytics */}
            <Link
              href="/features/finance"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 dark:bg-orange-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:animate-pulse relative z-10">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Finance & Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Real-time labor cost analysis and budget variance tracking
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>YTD vs Budget analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Predictive forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>ACH batch generation</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Attendance & Time Tracking */}
            <Link
              href="/features/attendance"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:animate-pulse relative z-10">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Attendance & Time Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Real-time clock-in/out with geolocation and automated attendance
                reports
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Digital time clock with GPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Overtime calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Shift scheduling</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Leave Management */}
            <Link
              href="/features/leave-management"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/50 dark:bg-rose-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 group-hover:animate-pulse relative z-10">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Leave Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Streamlined PTO requests, approvals, and balance tracking
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-type leave policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Automated accrual tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Team calendar view</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Goals & OKRs */}
            <Link
              href="/features/goals"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 dark:bg-amber-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:animate-pulse relative z-10">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Goals & OKRs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Align individual goals with company objectives using OKR
                framework
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Goal cascading & alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Progress tracking dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Key result metrics</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Employee Self-Service */}
            <Link
              href="/features/employee-self-service"
              className="group relative bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-bl-[100px] transition-transform group-hover:scale-110 origin-top-right"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:animate-pulse relative z-10">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Employee Self-Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Empower employees with direct access to their HR information
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Paystub & tax documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Profile & benefit management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Mobile-first experience</span>
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform relative z-10">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE MODULE BREAKDOWN */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Payroll Module Deep Dive */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                <DollarSign className="w-4 h-4" /> Payroll Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Payroll Automation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From time tracking to ACH generation, our 5-step wizard handles
                everything with precision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Step 1
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Employee Selection
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose employees, define pay periods with start/end dates
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Step 2
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Time Import
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Auto-import hours from time tracking systems
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Step 3
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Pay Calculation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Calculate gross pay, deductions, and net pay in real-time
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Step 4
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Tax Withholding
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Auto-calculate Federal, State, and Local taxes
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Step 5
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  ACH File Generation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Generate NACHA-compliant ACH files for direct deposit
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
                <div className="text-3xl font-bold mb-2">AI Boost</div>
                <h4 className="text-xl font-bold mb-3">Automated Auditing</h4>
                <p className="text-white/90">
                  Flags anomalies before you hit "Process"
                </p>
              </div>
            </div>
          </div>

          {/* Appraisal Module Deep Dive */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4" /> Performance Management
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                360° Performance Appraisals
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Build custom templates, run multi-rater reviews, and get
                AI-generated coaching insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Template Builder
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Create competency-based review forms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Define weighted scoring criteria
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Role-specific question sets
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  360° Reviews
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Self, Manager, Peer, Subordinate feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Aggregated scoring and calibration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Automated review cycles
                    </span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-10 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">
                    AI Appraisal Intelligence
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-bold text-lg mb-2">
                      Natural Language Summaries
                    </div>
                    <p className="text-white/80">
                      AI generates readable summaries from all review responses
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">
                      Training Recommendations
                    </div>
                    <p className="text-white/80">
                      Suggests courses based on competency scores below 3/5
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">
                      Calibration Alerts
                    </div>
                    <p className="text-white/80">
                      Highlights discrepancies between self and manager ratings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Finance & Tax Module */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6">
                <BarChart3 className="w-4 h-4" /> Finance & Tax Intelligence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Real-Time Financial Analytics
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Track labor costs, tax liabilities, and budget variances with
                predictive forecasting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Labor Cost Analysis
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      YTD vs. Budget tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Department-level variance alerts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      OT% and cost optimization
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tax Liability Ledger
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Federal, State, Local tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Automated tax code updates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      No-tax state support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ACH & Banking
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      NACHA-compliant file generation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Batch ACH payroll processing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Direct deposit integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE-BASED PORTALS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tailored Experiences for Every Role
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each user sees only what they need—powered by role-based access
              control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Admin Portal
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full system access, tax config, user management, compliance
                reports
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                CEO Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                High-level labor analytics, budget forecasts, AI insights
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Supervisor View
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Team time approval, appraisals, OT monitoring
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Employee Self-Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Paystubs, time tracking, training courses, benefits
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
