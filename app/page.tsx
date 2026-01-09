import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Award,
  CheckCircle,
  PlayCircle,
  Globe,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  organizationSchema,
  softwareSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Complete Human Capital Management system with AI Intelligence",
  description:
    "Transform your HR operations with Space HR's comprehensive ERP system. AI-powered payroll, performance appraisals, tax compliance, finance analytics, and learning management for modern enterprises.",
  keywords: [
    "HR ERP system",
    "human capital management",
    "AI payroll software",
    "performance appraisal system",
    "tax compliance software",
    "HR finance analytics",
    "payroll automation",
    "360-degree feedback",
    "AI-powered HR",
    "workforce management system",
    "employee self-service portal",
    "HR admin dashboard",
    "CEO HR analytics",
    "supervisor performance management",
    "automated payroll processing",
  ],
  openGraph: {
    title: "Space HR | Complete Human Capital Management ERP with AI",
    description:
      "Comprehensive ERP for HR, Payroll, Tax, Finance, and Performance Management with AI-powered insights and automation.",
    url: "https://spacehr.net",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR ERP Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR | AI-Powered Human Capital Management ERP",
    description:
      "Complete ERP system for Payroll, Appraisals, Tax, Finance with AI intelligence.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareSchema} />
      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121] overflow-x-hidden">
        {/* 1. HERO SECTION - Full width with gradient overlay */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden pt-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1121]/95 via-[#0b1121]/80 to-primary/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              The Future of Work is Here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              Complete Human Capital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Management ERP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              AI-powered ERP for Payroll, Appraisals, Tax, Finance, and Learning
              Management. Streamline operations from hiring to retirement with
              intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="#demo">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  Request Demo
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-full text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. EMBEDDED VIDEO SECTION */}
        <section className="py-24 bg-[#0b1121] relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See AIPerform in Action
              </h2>
              <p className="text-gray-400 text-lg">
                Watch how top companies use our platform to transform their
                culture regardless of team size.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 group">
                {/* Play Button Overlay (simulated for placeholder) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Link
                    href="https://cad.spaceaiapp.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/80 transition-all duration-500 scale-100 hover:scale-110">
                      <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                    </div>
                  </Link>
                </div>

                {/* Fallback Image / Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#1a2035]">
                  {/* In production this would be an iframe */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1740&q=80"
                      alt="Video Thumbnail"
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE ERP MODULES SECTION */}
        <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Complete ERP Suite
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
                Four Powerful Portals, One Unified System
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Role-based access for Admin, CEO, Supervisor, and Employee –
                from strategic oversight to self-service.
              </p>
            </div>

            {/* Role-Based Portals */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Admin Portal
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Central configuration, payroll processing, organizational
                  management
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  CEO Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strategic insights, financial health, executive oversight
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Supervisor Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Team management, appraisal reviews, approval workflows
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Employee Self-Service
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Payslips, tax forms, performance goals, course progress
                </p>
              </div>
            </div>

            {/* Core Modules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Payroll Module */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Intelligent Payroll
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Professional US payroll engine with 5-step wizard
                  </p>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Automated gross-to-net calculation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Real-time tax withholding (Federal, State, FICA)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> ACH
                      batch file generation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Pre-check validation & compliance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Appraisals Module */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">360° Appraisals</h3>
                  <p className="text-purple-100 mb-4">
                    Full-lifecycle performance management
                  </p>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> Custom
                      template builder with weighted competencies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Self-rating & manager evaluation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      AI-generated summaries & recommendations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Automated review cycles & nudges
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tax Module */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Tax Compliance</h3>
                  <p className="text-green-100 mb-4">
                    Granular engine for complex US tax codes
                  </p>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Federal: SS (6.2%), Medicare (1.45%), FUTA
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> State:
                      SIT, SUI, SDI with no-tax state support
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> Local:
                      Configurable city taxes (NYC, etc.)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Liability ledger & tracking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Finance Module */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Finance Analytics</h3>
                  <p className="text-orange-100 mb-4">
                    CFO dashboard for financial oversight
                  </p>
                  <ul className="space-y-2 text-sm text-orange-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> Labor
                      cost analysis & visualization
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> YTD
                      actuals vs. annual budget tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> ACH
                      batch generation & banking
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Variance alerts & forecasting
                    </li>
                  </ul>
                </div>
              </div>

              {/* Learning Management */}
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <PlayCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Learning Management
                  </h3>
                  <p className="text-pink-100 mb-4">
                    AI-powered course management & tracking
                  </p>
                  <ul className="space-y-2 text-sm text-pink-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Third-party & custom course integration
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> AI
                      notes, summaries & quiz generation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Progress tracking with badges & trophies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Role-based course assignment
                    </li>
                  </ul>
                </div>
              </div>

              {/* AI Intelligence Layer */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI Intelligence</h3>
                  <p className="text-indigo-100 mb-4">
                    Hybrid local/cloud AI across all modules
                  </p>
                  <ul className="space-y-2 text-sm text-indigo-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Payroll anomaly detection & auditing
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Strategic cost optimization suggestions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Predictive year-end forecasting
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />{" "}
                      Performance coaching recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE SHOWCASE - Core Modules with Visual Impact */}
        <section className="py-32 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 font-bold tracking-wider uppercase text-sm">
                Core Modules
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                Built for the Future of Work
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive HR solutions powered by AI. From payroll
                automation to performance excellence.
              </p>
            </div>

            {/* Payroll Feature - Large with Image */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                    <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-300">
                      INTELLIGENT PAYROLL
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    5-Step Payroll Wizard with AI Auditing
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Professional US payroll engine that automates everything
                    from time tracking to ACH file generation. Our AI flags
                    anomalies before you hit "Process."
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          Automated Tax Withholding
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Real-time Federal, State, FICA, and Local tax
                          calculations with auto-updated tables
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          ACH File Generation
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          NACHA-compliant direct deposit files ready for your
                          bank in one click
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          AI Anomaly Detection
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Detects pay rates &gt;50% above average and low tax
                          withholding before processing
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/features/ai-payroll">
                    <Button
                      size="lg"
                      className="rounded-full h-14 px-8 text-lg group"
                    >
                      Explore Payroll AI{" "}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1740&q=80"
                      alt="Payroll Dashboard"
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                      Compliance Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appraisals Feature - Reversed Layout */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1740&q=80"
                      alt="Performance Review"
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                        360° REVIEWS
                      </p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        95% Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-300">
                      PERFORMANCE MANAGEMENT
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    360° Appraisals with AI Coaching
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Build custom templates, run multi-rater reviews, and get
                    AI-generated coaching insights. Transform manager feedback
                    from vague to actionable.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          Custom Template Builder
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Create competency-based forms with weighted scoring
                          and role-specific questions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          AI-Generated Summaries
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Natural language summaries from all review responses
                          with training recommendations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          Automated Review Cycles
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Set it and forget it—automated reminders and
                          calibration workflows
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/features/ai-appraisals">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 px-8 text-lg group border-2"
                    >
                      Discover Appraisal AI{" "}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Finance Analytics Feature */}
            <div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                    <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-bold text-green-600 dark:text-green-300">
                      FINANCE INTELLIGENCE
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Real-Time Labor Cost Analytics
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    CFO-grade financial oversight with labor cost analysis, YTD
                    vs. budget tracking, and predictive year-end forecasting.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        <TrendingUp className="w-10 h-10" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Budget Variance
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Track department spending vs. annual budget with
                        automated alerts
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        <BarChart3 className="w-10 h-10" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Cost Optimization
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        AI suggests hiring when OT exceeds 8% of total labor
                        costs
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Tax Liability Ledger
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                      ACH Batching
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Year-End Forecasting
                    </span>
                  </div>
                  <Link href="/features">
                    <Button
                      size="lg"
                      className="rounded-full h-14 px-8 text-lg group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                    >
                      View Finance Module{" "}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1740&q=80"
                      alt="Finance Analytics Dashboard"
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AI INTELLIGENCE LAYER */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 font-bold tracking-wider uppercase text-sm">
                AI INTELLIGENCE
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                The Brain Behind Your HR
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Hybrid local/cloud AI that acts as your automated auditor,
                strategic advisor, and performance coach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Anomaly Detection
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Automatically flags payroll irregularities, compliance issues,
                  and unusual patterns before processing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Pay rate variance alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Tax withholding validation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Cost Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Strategic recommendations to reduce labor costs and improve
                  workforce allocation efficiency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>OT reduction strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Hiring recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Predictive Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Projects year-end costs based on current trends and provides
                  workforce planning insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Year-end forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Budget trend analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOCIAL PROOF & TRUST BADGES */}
        <section className="py-24 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Innovative Companies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security, compliance, and reliability you can
                count on.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  SOC 2 Type II Certified
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Enterprise-grade security and annual third-party audits
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center mb-6">
                  <Globe className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  GDPR Compliant
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  EU data residency with full privacy protection
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-6">
                  <Award className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  IRS-Compliant Payroll
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Auto-updated tax tables for all 50 states
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ENHANCED FINAL CTA */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-950 dark:to-black overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main CTA Content */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">
                  Join 500+ companies already using Space HR
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Ready to Transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400">
                  Your Workforce?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                From payroll automation to AI-powered appraisals—everything you
                need to build high-performing teams.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-16 px-12 text-lg font-bold shadow-2xl hover:shadow-pink-500/50 transition-all bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 hover:from-pink-600 hover:via-violet-600 hover:to-blue-700 text-white border-0 group"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-16 px-12 text-lg font-bold border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>

            {/* Bottom Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Free Demo Account</p>
                  <p className="text-gray-400 text-sm">
                    Try all features risk-free
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Expert Onboarding</p>
                  <p className="text-gray-400 text-sm">
                    Dedicated support team
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Setup in 48 Hours</p>
                  <p className="text-gray-400 text-sm">
                    Go live in 2 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
