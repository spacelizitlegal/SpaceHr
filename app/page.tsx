import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Camera,
  FileSignature,
  Network,
  Package,
  UserCheck,
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
import { SpaceHRCard } from "@/components/SpaceHRCard";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  organizationSchema,
  softwareSchema,
  websiteSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute:
      "Space HR - AI-Powered HR Chatbot & Employee Self-Service Platform",
  },
  description:
    "Space HR automates HR for growing teams - AI chatbot for employee self-service, payroll anomaly detection, 12-month labor cost forecasting, and 360 appraisals. Free trial. Setup in 48 hours.",
  keywords: [
    "AI HR chatbot",
    "chatbot for HR services",
    "employee self-service chatbot",
    "hr software",
    "hrms",
    "best hr software",
    "human resource management system",
    "AI HR platform",
    "AI payroll software",
    "payroll anomaly detection",
    "workforce cost forecasting",
    "performance appraisal system",
    "HR automation",
    "AI-powered HR",
    "employee self-service portal",
    "hr payroll software",
  ],
  openGraph: {
    title: "Space HR - AI HR Chatbot & Employee Self-Service Platform",
    description:
      "AI HR chatbot + payroll auditor + workforce forecasting - all in one platform. Reduce HR tickets by 70%. Free trial available.",
    url: "https://spacehr.net",
    images: [
      {
        url: "https://spacehr.net/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR - AI HR Chatbot and Employee Self-Service Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR - AI HR Chatbot & Employee Self-Service Platform",
    description:
      "AI chatbot for HR, payroll anomaly detection, workforce forecasting - all in one. Free trial, setup in 48 hours.",
    images: ["https://spacehr.net/desktop-design-showcase.webp"],
  },
  alternates: {
    canonical: "https://spacehr.net",
  },
};

export default function Home() {
  const homeFaqs = [
    {
      question: "What is Space HR?",
      answer:
        "Space HR is an AI-powered HR platform that combines an AI HR chatbot for employee self-service, automated payroll anomaly detection, 12-month labor cost forecasting, 360-degree performance appraisals, and attrition prediction. Designed for mid-market and enterprise companies to reduce HR overhead and make data-driven workforce decisions.",
    },
    {
      question: "Does Space HR have an AI HR chatbot?",
      answer:
        "Yes. Space HR includes a 24/7 AI HR chatbot that handles employee questions about leave balances, payroll, policies, and benefits automatically. It resolves 95% of queries instantly, reduces HR ticket volume by 70%, and escalates complex issues to your HR team with full context.",
    },
    {
      question: "How does Space HR detect payroll anomalies?",
      answer:
        "Space HR's AI Payroll Auditor scans every payroll run before processing and flags errors in gross-to-net calculations, FUTA/FICA withholding, and NACHA ACH file generation. It compares payroll against historical baselines and alerts HR instantly, reducing payroll errors by 99%.",
    },
    {
      question: "Can Space HR predict labor costs?",
      answer:
        "Yes. Space HR forecasts 12 months of labor costs with 95% accuracy using AI headcount scenario modeling. HR leaders and CFOs can model hiring plans, simulate salary increase impacts, and track budget-vs-actual variance in real time.",
    },
    {
      question: "Which countries does Space HR support?",
      answer:
        "Space HR supports United States (all 50 states, FUTA/SUTA, NACHA), UAE (WPS, MOHRE, gratuity), Singapore (CPF, MOM), Canada, and Europe (GDPR). Regional payroll compliance is built in with no configuration required.",
    },
    {
      question: "How long does it take to set up Space HR?",
      answer:
        "Most teams go live within 48 hours. Space HR provides guided onboarding, data import tools, and a dedicated setup team. No coding is required. A free trial is available.",
    },
  ];

  const homeBreadcrumb = [{ name: "Home", url: "https://spacehr.net" }];

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={generateFAQSchema(homeFaqs)} />
      <JsonLd data={generateBreadcrumbSchema(homeBreadcrumb)} />
      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121] overflow-x-hidden">
        {/* 1. HERO SECTION - Full width with gradient overlay */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden pt-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/engineering-blueprint-review.webp"
              alt="Space HR AI-powered HRMS dashboard showing predictive workforce analytics and payroll automation for modern enterprise teams"
              fill
              className="object-cover"
              priority
              sizes="100vw"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                HR Software
              </span>{" "}
              <br />
              for Modern Teams
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Experience the <strong>best HR software</strong> designed to
              simplify complex{" "}
              <Link
                href="/hrms"
                className="text-teal-300 hover:underline decoration-teal-300/50 underline-offset-4"
              >
                human resource management
              </Link>
              . From intelligent{" "}
              <Link
                href="/features/payroll"
                className="text-teal-300 hover:underline decoration-teal-300/50 underline-offset-4"
              >
                payroll automation
              </Link>{" "}
              to advanced HRMS analytics, Space HR empowers your business to
              thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/request-a-demo">
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
            <p className="text-sm text-gray-300 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              Built in the United States · Trusted by teams in 15+ countries
            </p>
          </div>
        </section>

        {/* AI CHATBOT SPOTLIGHT — high-priority SEO internal link */}
        <section className="py-20 bg-white dark:bg-[#0d1526] border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  AI HR Chatbot — Most Popular Feature
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Your employees get answers in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    under 3 seconds
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Space HR&apos;s <strong>AI HR chatbot</strong> handles leave
                  requests, payslip queries, policy lookups, and benefits
                  questions 24/7 — so your HR team can focus on work that
                  matters.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Resolves 95% of HR queries without human involvement",
                    "Reduces HR ticket volume by 70% from week one",
                    "Connects to your HRMS — answers are live, not static",
                    "Available in the US, UAE, UK, Singapore & India",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/features/ai-chatbots">
                    <Button size="lg" className="rounded-full h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white group">
                      See the AI HR Chatbot
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/solutions/chatbot-for-hr-services">
                    <Button size="lg" variant="outline" className="rounded-full h-12 px-8 group">
                      Chatbot for HR Services
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "70%", label: "Fewer HR tickets", color: "from-purple-500 to-pink-500" },
                  { stat: "95%", label: "Query resolution rate", color: "from-blue-500 to-cyan-500" },
                  { stat: "24/7", label: "Always available", color: "from-green-500 to-teal-500" },
                  { stat: "48h", label: "Setup time", color: "from-orange-500 to-amber-500" },
                ].map((item) => (
                  <Link
                    key={item.stat}
                    href="/features/ai-chatbots"
                    className="bg-gray-50 dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all text-center group"
                  >
                    <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                      {item.stat}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. EMBEDDED VIDEO SECTION */}
        <section className="py-24 px-10 bg-[#0b1121] relative">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See Space HR in Action
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Watch how growing teams use Space HR's AI HR chatbot and HRMS to
                automate workflows and cut HR overhead by 70%.
              </p>
              <Link href="/tools/w4-generator">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 border-none shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try Our Free W-4 Form Generator for Employees
                </Button>
              </Link>
            </div>

            <div className="relative   max-w-5xl mx-auto">
              {/* Decorative Glows */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              {/* Browser Shell */}
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] border border-white/10">
                {/* ── Title Bar ── */}
                <div className="flex items-center gap-2 bg-[#1a2035] px-4 py-3 border-b border-white/5">
                  {/* Traffic Lights */}
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57aa]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2eaa]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840aa]" />
                </div>

                {/* ── Tab Bar ── */}
                <div className="flex items-end bg-[#141929] px-3 pt-2 gap-1 border-b border-white/5">
                  {/* Active Tab */}
                  <div className="flex items-center gap-2 bg-[#1a2035] text-white/80 text-xs font-medium px-4 py-2 rounded-t-lg border border-white/10 border-b-[#1a2035] -mb-px max-w-[200px]">
                    <svg
                      className="w-3.5 h-3.5 text-blue-400 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                    </svg>
                    <span className="truncate">Space HR · Dashboard</span>
                    <svg
                      className="w-3 h-3 ml-1 text-white/30 hover:text-white/70 cursor-pointer shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  {/* Ghost Tab */}
                  <div className="flex items-center gap-2 text-white/30 text-xs px-4 py-2 rounded-t-lg max-w-[160px]">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span className="truncate">Analytics</span>
                  </div>
                  {/* New Tab Button */}
                  <button className="ml-1 mb-2 text-white/30 hover:text-white/60 transition-colors">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>

                {/* ── Address / Toolbar Bar ── */}
                <div className="flex items-center gap-3 bg-[#1a2035] px-4 py-2.5 border-b border-white/5">
                  {/* Nav Buttons */}
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-md text-white/30 hover:text-white/60 hover:bg-white/5 transition-all">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded-md text-white/20 cursor-not-allowed">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded-md text-white/30 hover:text-white/60 hover:bg-white/5 transition-all">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>

                  {/* URL Bar */}
                  <div className="flex flex-1 items-center gap-2 bg-[#0d1526] border border-white/10 rounded-lg px-3 py-1.5 group hover:border-white/20 transition-colors">
                    {/* Lock Icon */}
                    <svg
                      className="w-3.5 h-3.5 text-green-400 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span className="text-xs text-white/50 select-none truncate">
                      <span className="text-white/30">https://</span>
                      <span className="text-white/70">app.spacehr.net</span>
                      <span className="text-white/30">/dashboard/overview</span>
                    </span>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-md text-white/30 hover:text-white/60 hover:bg-white/5 transition-all">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded-md text-white/30 hover:text-white/60 hover:bg-white/5 transition-all">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ── Video Content ── */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <video
                    className="h-full w-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/desktop-design-showcase.webp"
                  >
                    <source src="/videos/space-hr-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
              <Link href="/solutions/hr-admin" className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  Admin Portal
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Central configuration, payroll processing, organizational
                  management
                </p>
              </Link>
              <Link href="/solutions/ceo" className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  CEO Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strategic insights, financial health, executive oversight
                </p>
              </Link>
              <Link href="/solutions/chatbot-for-hr-services" className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  Supervisor Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Team management, appraisal reviews, approval workflows
                </p>
              </Link>
              <Link href="/solutions/employee-self-service" className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  Employee Self-Service
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Payslips, tax forms, performance goals, course progress
                </p>
              </Link>
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
                  <Link href="/features/payroll">
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
                      src="/desktop-design-showcase.webp"
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
                      src="/professional-woman-laptop.webp"
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
                  <Link href="/features/appraisals">
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
                  <Link href="/features/finance">
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
                      src="/office-team-presentation.webp"
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



        {/* Industries We Serve */}
        <section className="py-24 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 font-bold tracking-wider uppercase text-sm">
                By Industry
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
                HR Software Built for Your Industry
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Compliance rules, workflows, and reporting vary by sector. Space HR ships pre-configured for each.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {[
                { href: "/industries/healthcare", emoji: "🏥", label: "Healthcare", desc: "HIPAA, shift scheduling, credentialing" },
                { href: "/industries/banking", emoji: "🏦", label: "Banking & Finance", desc: "FINRA compliance, audit trails" },
                { href: "/industries/retail", emoji: "🛒", label: "Retail", desc: "Hourly workforce, multi-location" },
                { href: "/industries/manufacturing", emoji: "🏭", label: "Manufacturing", desc: "OSHA safety, union payroll" },
                { href: "/industries/government", emoji: "🏛️", label: "Government", desc: "Civil service, leave accrual" },
              ].map((ind) => (
                <Link key={ind.href} href={ind.href} className="group bg-gray-50 dark:bg-[#0f172a] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-400 hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-3">{ind.emoji}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{ind.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{ind.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/industries" className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                View all industry solutions →
              </Link>
            </div>
          </div>
        </section>

        {/* Global Coverage */}
        <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-bold tracking-wider uppercase text-sm">
                Global Coverage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
                Compliant HR in Every Region
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Headquartered in the United States, Space HR delivers native payroll compliance for the US, UAE, Singapore, UK, India, Canada, and Europe — not a bolt-on.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { href: "/regions/united-states", flag: "🇺🇸", label: "United States", desc: "NACHA, IRS, all 50 states" },
                { href: "/regions/dubai", flag: "🇦🇪", label: "UAE / Dubai", desc: "WPS, MOHRE, gratuity" },
                { href: "/regions/singapore", flag: "🇸🇬", label: "Singapore", desc: "CPF, MOM, IR8A" },
                { href: "/regions/uk", flag: "🇬🇧", label: "United Kingdom", desc: "RTI, PAYE, auto-enrolment" },
                { href: "/regions/india", flag: "🇮🇳", label: "India", desc: "PF, ESI, TDS" },
                { href: "/regions/canada", flag: "🇨🇦", label: "Canada", desc: "CRA, provincial tax" },
                { href: "/regions/europe", flag: "🇪🇺", label: "Europe", desc: "GDPR, local labour law" },
              ].map((reg) => (
                <Link key={reg.href} href={reg.href} className="group bg-white dark:bg-[#0b1121] rounded-2xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-lg transition-all flex items-center gap-4">
                  <span className="text-3xl flex-shrink-0">{reg.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">{reg.label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{reg.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/regions" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Explore global HR compliance →
              </Link>
            </div>
          </div>
        </section>

        {/* SPACE AI ECOSYSTEM */}
        <section
          className="py-24 relative bg-gray-50 dark:bg-[#111827]"
          style={{
            backgroundImage: "url('/ecosystem-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/80 dark:bg-[#111827]/85 pointer-events-none" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Part of the Space AI Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                One Company. Eight AI Products.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Space HR is built by{" "}
                <a href="https://pmspace.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  Space AI
                </a>
                {" "}— the same team behind PM Space AI, Space CRM, and five other enterprise tools. Connect them all or use Space HR standalone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
              {[
                { name: "PM Space AI",   url: "https://pmspace.ai",     desc: "AI project & crew management",  icon: BarChart3,     iconColor: "text-blue-500",    iconBg: "bg-blue-500/10"    },
                { name: "Space Sign",    url: "https://space-sign.ai",  desc: "E-signature & contracts",       icon: FileSignature, iconColor: "text-violet-500",  iconBg: "bg-violet-500/10"  },
                { name: "Space Capture", url: "https://spacecapture.ai",desc: "Field data capture",            icon: Camera,        iconColor: "text-cyan-500",    iconBg: "bg-cyan-500/10"    },
                { name: "Space Lizit",   url: "https://spacelizit.com", desc: "Procurement & vendors",         icon: Package,       iconColor: "text-orange-500",  iconBg: "bg-orange-500/10"  },
                { name: "Space Lean",    url: "https://spacelean.ai",   desc: "Lean process optimisation",     icon: TrendingUp,    iconColor: "text-emerald-500", iconBg: "bg-emerald-500/10" },
                { name: "Space Nexus",   url: "https://spacenexus.net", desc: "Enterprise integration hub",    icon: Network,       iconColor: "text-indigo-500",  iconBg: "bg-indigo-500/10"  },
                { name: "Space CRM",     url: "https://spacecrm.net",   desc: "Customer relationship mgmt",    icon: UserCheck,     iconColor: "text-pink-500",    iconBg: "bg-pink-500/10"    },
              ].map((product) => {
                const Icon = product.icon;
                return (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-lg hover:scale-105 active:scale-95 active:rotate-[1.7deg] transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${product.iconColor}`} />
                    </div>
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                        {product.name}
                      </p>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{product.desc}</p>
                  </a>
                );
              })}
              <SpaceHRCard />
            </div>

            <div className="text-center">
              <Link href="/integrations/space-ai" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm">
                See how Space HR integrates with PM Space AI
                <ArrowRight className="w-4 h-4" />
              </Link>
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
        {/* RESOURCES HUB */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Explore Space HR Resources
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Guides, templates, and tools to help HR teams work smarter
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  href: "/blogs",
                  label: "HR Blog",
                  desc: "58 articles on AI automation, payroll compliance, performance management, and workforce analytics",
                  badge: "58 Articles",
                  color: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                },
                {
                  href: "/templates",
                  label: "HR Templates",
                  desc: "Free downloadable templates — offer letters, PIPs, onboarding checklists, job descriptions, and more",
                  badge: "16 Free Templates",
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20",
                },
                {
                  href: "/glossary",
                  label: "HR Glossary",
                  desc: "Plain-English definitions of modern HR tech terms — from predictive workforce analytics to NACHA ACH files",
                  badge: "16 Terms",
                  color: "text-purple-600 dark:text-purple-400",
                  bg: "bg-purple-50 dark:bg-purple-900/20",
                },
                {
                  href: "/compare",
                  label: "Compare Platforms",
                  desc: "Space HR vs BambooHR, Workday, Rippling, Gusto, ADP, and 9 more — side-by-side feature breakdowns",
                  badge: "14 Comparisons",
                  color: "text-orange-600 dark:text-orange-400",
                  bg: "bg-orange-50 dark:bg-orange-900/20",
                },
              ].map(({ href, label, desc, badge, color, bg }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121] p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-200"
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${bg} ${color}`}>
                    {badge}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-[#0b1121]" id="faq">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about Space HR
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What is Space HR?",
                  a: "Space HR is an AI-powered HR platform combining an AI chatbot for employee self-service, automated payroll anomaly detection, 12-month labor cost forecasting, 360° performance appraisals, and attrition prediction — designed for mid-market and enterprise teams.",
                },
                {
                  q: "Does Space HR have an AI HR chatbot?",
                  a: "Yes. Space HR's AI HR chatbot handles employee questions about leave, payroll, policies, and benefits 24/7. It resolves 95% of queries instantly and reduces HR ticket volume by 70%.",
                },
                {
                  q: "How does Space HR detect payroll anomalies?",
                  a: "Space HR's AI Payroll Auditor scans every payroll run before processing, flags errors in gross-to-net calculations and FUTA/FICA withholding, and alerts HR instantly — reducing payroll errors by 99%.",
                },
                {
                  q: "Can Space HR predict labor costs?",
                  a: "Yes. Space HR forecasts 12 months of labor costs with 95% accuracy, enabling HR and CFOs to model headcount scenarios and track budget-vs-actual variance in real time.",
                },
                {
                  q: "Which countries does Space HR support?",
                  a: "Space HR is headquartered in the United States and supports organizations across the US (all 50 states, NACHA), UAE (WPS, MOHRE, gratuity), Singapore (CPF, MOM), India (PF, ESI, TDS), Canada, and Europe (GDPR). Regional payroll compliance is built in.",
                },
                {
                  q: "How long does it take to set up Space HR?",
                  a: "Most teams go live within 48 hours with guided onboarding, data import tools, and a dedicated setup team. No coding required. A free trial is available.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 dark:bg-[#111827] hover:bg-gray-100 dark:hover:bg-[#1a2433] transition-colors list-none">
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
                    <span className="text-2xl text-blue-500 flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="p-5 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-[#0b1121]">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
