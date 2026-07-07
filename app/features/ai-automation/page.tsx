import { Button } from "@/components/ui/Button";
import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Clock,
  Users,
  Bell,
  Mail,
  Calendar,
  Settings,
  RefreshCw,
  Target,
  Award,
  MessageSquare,
  Sparkles,
  Play,
  GitBranch,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema,
  softwareSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HR Automation Software — Automate HR Workflows & Processes | Space HR",
  description:
    "Space HR automates HR workflows — onboarding journeys, approval chains, compliance reminders, engagement campaigns, and sentiment analysis. Save 40+ hours/week. Free trial.",
  keywords: [
    "AI workflow automation",
    "HR process automation",
    "automated approvals",
    "onboarding automation",
    "AI workflow engine",
    "HR task automation",
    "automated reminders",
    "engagement automation",
    "HR efficiency tools",
    "intelligent automation",
    "employee engagement automation",
    "HR workflow software",
    "automated onboarding",
    "sentiment analysis HR",
  ],
  openGraph: {
    title: "AI Workflow Automation | Space HR",
    description:
      "Automate HR workflows: onboarding, approvals, reminders, and engagement campaigns with AI-powered intelligence.",
    url: "https://spacehr.net/features/ai-automation",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR HR Automation Software Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation | Space HR",
    description:
      "AI-powered workflow automation for HR: onboarding, approvals, and employee engagement.",
    images: ["/og-automation.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/ai-automation",
  },
};

const faqs = [
  {
    question: "What HR processes can Space HR automate?",
    answer:
      "Space HR automates a wide range of HR workflows including: new hire onboarding sequences (Day 1–90 task chains), multi-level approval workflows for leave, expenses, and headcount, compliance training reminders and certification tracking, pulse survey distribution and response collection, employee anniversary and recognition campaigns, and recurring administrative tasks like monthly compliance checks and quarterly goal reviews.",
  },
  {
    question: "How does Space HR onboarding automation work?",
    answer:
      "When a new hire is added to Space HR, the onboarding automation engine triggers a pre-configured sequence of tasks, messages, and content deliveries based on start date, role, department, and location. It automatically sends document collection reminders, delivers training content at the right pace, schedules manager check-ins, and tracks completion — all without HR needing to manually follow up. Most companies complete setup using a pre-built template in under 2 hours.",
  },
  {
    question: "Can Space HR automate multi-level approval chains?",
    answer:
      "Yes. Space HR supports multi-level approval routing for leave requests, expense claims, headcount approvals, and policy acknowledgments. You define the rules (approval tiers, spending thresholds, escalation timers) once, and Space HR routes every request automatically. If an approver doesn't respond within your defined SLA, the system escalates to the next level and notifies HR.",
  },
  {
    question: "How is Space HR's HR automation different from Zapier or Make.com?",
    answer:
      "Zapier and Make.com are general-purpose automation platforms — they require custom builds for every HR workflow and don't understand HR data natively. Space HR is purpose-built for HR: it comes pre-loaded with HR-specific workflow templates (onboarding, offboarding, compliance, engagement), understands your employee data model out of the box, and integrates directly with your payroll and HRIS data. No-code configuration, instant deployment, and HR-first logic.",
  },
  {
    question: "Does Space HR's automation work for remote and distributed teams?",
    answer:
      "Yes. Space HR automation is location-independent — workflows trigger based on employee data, not physical presence. Remote onboarding, async approval chains, and digital engagement campaigns all work identically whether your team is in one office or spread across 30 countries. Multi-timezone scheduling is built in.",
  },
  {
    question: "How long does it take to set up HR automation in Space HR?",
    answer:
      "Most teams launch their first automated workflow within 2 hours using Space HR's pre-built templates. Full setup of onboarding, approvals, and engagement automation typically takes 1–2 days with guided onboarding support. No coding or IT involvement required.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  { name: "AI Automation", url: "https://spacehr.net/features/ai-automation" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Automate HR Workflows with Space HR",
  description:
    "A step-by-step guide to setting up automated HR workflows — onboarding, approvals, and engagement campaigns — using Space HR's AI automation engine.",
  totalTime: "PT2H",
  step: [
    {
      "@type": "HowToStep",
      name: "Connect your employee data",
      text: "Link Space HR to your HRIS or upload your employee roster. Space HR maps role, department, location, and start date automatically.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Choose a workflow template",
      text: "Select from pre-built templates: New Hire Onboarding, Leave Approval Chain, Compliance Reminder, Engagement Campaign, or Offboarding Checklist.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Configure triggers and rules",
      text: "Set the trigger condition (new hire added, leave request submitted, anniversary date reached) and configure approval tiers, escalation timers, and notification channels.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Test and activate",
      text: "Run a test scenario against a sample employee record to verify the workflow fires correctly. Activate when ready — Space HR handles all future executions automatically.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Monitor and optimize",
      text: "Track completion rates, response times, and engagement metrics from your automation dashboard. Space HR's AI surfaces optimization suggestions based on actual workflow performance.",
      position: 5,
    },
  ],
};

export default function AIAutomationPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={howToSchema} />
      <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 pb-0 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="/" className="hover:text-orange-600 dark:hover:text-orange-400">Home</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><a href="/features" className="hover:text-orange-600 dark:hover:text-orange-400">Features</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 dark:text-white font-medium">AI Automation</li>
            </ol>
          </div>
        </nav>
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6 border border-orange-200 dark:border-orange-800">
                <Zap className="w-4 h-4" /> AI Workflow Automation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Automate Engagement.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Scale Your Culture.
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Treat your employees like customers. Use AI to deliver
                personalized internal communication campaigns, automated
                onboarding journeys, intelligent reminders, and culture-building
                workflows that run 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-a-demo">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                    Automate Your Workflows
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://cad.spaceaiapp.com/login" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    Try for Free
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/team-meeting-collaboration.webp"
                alt="Space HR AI workflow automation dashboard showing automated HR process triggers, approval chains, and AI-powered task management for HRMS operations"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Stats */}
              <div className="absolute top-6 left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Employee Engagement
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      +34% vs Last Quarter
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      HR Hours Saved
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      40+ hours/week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-white/80 text-sm">
                Reduction in Manual Tasks
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3x</div>
              <div className="text-white/80 text-sm">
                Faster Onboarding Completion
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-sm">
                Automated Workflow Execution
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+42%</div>
              <div className="text-white/80 text-sm">
                Employee Satisfaction Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATION CAPABILITIES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
              <Settings className="w-4 h-4" /> Automation Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              HR Workflows on Autopilot
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Set it and forget it. Our AI automation engine handles repetitive
              tasks, sends timely reminders, and keeps your organization running
              smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Onboarding Automation */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Onboarding Autopilot
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Drip-feed training content and welcome messages based on
                engagement pace
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Day 1-30 automated task sequences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Document collection reminders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Training completion tracking
                  </span>
                </li>
              </ul>
            </div>

            {/* Smart Nudges */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Bell className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Nudges
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AI-timed reminders that get results without being annoying
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    1:1 meeting scheduling reminders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Work anniversary celebrations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Performance review due alerts
                  </span>
                </li>
              </ul>
            </div>

            {/* Approval Workflows */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <GitBranch className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Approval Chains
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Multi-level approval workflows with automatic escalation
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Leave request auto-routing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Expense approval with thresholds
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Escalation on timeout
                  </span>
                </li>
              </ul>
            </div>

            {/* Engagement Campaigns */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Engagement Campaigns
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Internal marketing automation for culture building
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Pulse survey distribution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Company news & announcements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Recognition & shoutout programs
                  </span>
                </li>
              </ul>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sentiment Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AI monitors organizational mood and suggests interventions
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Survey response sentiment scoring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Department mood trend analysis
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Proactive engagement recommendations
                  </span>
                </li>
              </ul>
            </div>

            {/* Recurring Tasks */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-2xl p-8 border border-rose-200 dark:border-rose-800">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Recurring Tasks
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule and automate repetitive HR administrative tasks
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Monthly compliance checks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Quarterly goal review triggers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Annual document renewal alerts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW BUILDER */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Visual Workflow Builder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create complex automations with a simple drag-and-drop interface.
              No coding required.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
              {/* Workflow Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      New Hire Onboarding Workflow
                    </h3>
                    <p className="text-white/80">
                      Automated 30-day onboarding sequence
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      Active
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      247 runs
                    </span>
                  </div>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      day: "Day 0",
                      title: "Welcome Email",
                      description:
                        "Automated welcome message with first-day instructions",
                      icon: Mail,
                      color: "blue",
                    },
                    {
                      day: "Day 1",
                      title: "IT Setup Checklist",
                      description:
                        "Task list assigned to IT for equipment provisioning",
                      icon: Settings,
                      color: "purple",
                    },
                    {
                      day: "Day 3",
                      title: "Manager 1:1 Reminder",
                      description:
                        "Nudge to manager to schedule introductory meeting",
                      icon: Calendar,
                      color: "green",
                    },
                    {
                      day: "Day 7",
                      title: "Training Modules",
                      description:
                        "Compliance training courses auto-assigned in LMS",
                      icon: Play,
                      color: "orange",
                    },
                    {
                      day: "Day 14",
                      title: "Check-in Survey",
                      description:
                        "Pulse survey to gauge onboarding experience",
                      icon: MessageSquare,
                      color: "pink",
                    },
                    {
                      day: "Day 30",
                      title: "Goal Setting",
                      description:
                        "Prompt to set 90-day objectives with manager",
                      icon: Target,
                      color: "indigo",
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-xl bg-${step.color}-100 dark:bg-${step.color}-900/50 flex items-center justify-center text-${step.color}-600 dark:text-${step.color}-400`}
                        >
                          <step.icon className="w-6 h-6" />
                        </div>
                        {i < 5 && (
                          <div className="w-0.5 h-8 bg-gray-200 dark:bg-gray-700 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-gray-600 dark:text-gray-400">
                            {step.day}
                          </span>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIGGERS & ACTIONS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Triggers */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                <Play className="w-4 h-4" /> Workflow Triggers
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Start Workflows Automatically
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Workflows can be triggered by events, schedules, or manual
                activation.
              </p>
              <div className="space-y-4">
                {[
                  {
                    trigger: "New Employee Created",
                    example: "Starts onboarding sequence",
                  },
                  {
                    trigger: "Leave Request Submitted",
                    example: "Routes to approval chain",
                  },
                  {
                    trigger: "Work Anniversary Date",
                    example: "Sends recognition notification",
                  },
                  {
                    trigger: "Performance Review Due",
                    example: "Triggers review cycle workflow",
                  },
                  {
                    trigger: "Compliance Training Expired",
                    example: "Assigns renewal courses",
                  },
                  {
                    trigger: "Survey Response Received",
                    example: "Updates sentiment dashboard",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {item.trigger}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" /> Available Actions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Automate Any HR Task
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Chain multiple actions together to create powerful automation
                sequences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Send Email",
                  "Create Task",
                  "Assign Training",
                  "Update Profile",
                  "Send Notification",
                  "Request Approval",
                  "Schedule Meeting",
                  "Generate Document",
                  "Add to Calendar",
                  "Post Announcement",
                  "Trigger Survey",
                  "Run Report",
                ].map((action, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#1e293b] rounded-lg border border-gray-100 dark:border-gray-800"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pre-Built Automation Templates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get started quickly with proven workflow templates. Customize to
              fit your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "90-Day Onboarding",
                description:
                  "Complete new hire journey from offer accepted to fully productive",
                steps: 12,
                category: "Onboarding",
              },
              {
                title: "Leave Request Flow",
                description:
                  "Multi-level approval with automatic escalation and calendar sync",
                steps: 5,
                category: "Approvals",
              },
              {
                title: "Performance Review Cycle",
                description:
                  "Annual review process with self-assessment and manager feedback",
                steps: 8,
                category: "Performance",
              },
              {
                title: "Exit Interview Process",
                description:
                  "Offboarding workflow with knowledge transfer and equipment return",
                steps: 7,
                category: "Offboarding",
              },
              {
                title: "Birthday & Anniversary",
                description:
                  "Automated celebrations with team notifications and recognition",
                steps: 3,
                category: "Engagement",
              },
              {
                title: "Compliance Training",
                description:
                  "Annual certification tracking with expiration reminders",
                steps: 4,
                category: "Learning",
              },
            ].map((template, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                    {template.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {template.steps} steps
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {template.description}
                </p>
                <button className="text-orange-600 dark:text-orange-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Use Template <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Deep-Dive */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World HR Automation Use Cases
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See exactly how HR teams use Space HR automation to eliminate manual work and deliver consistent employee experiences.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "New Hire Onboarding (Day 1–90 Automation)",
                problem: "HR manually sends welcome emails, chases document submissions, assigns IT tickets, and schedules manager check-ins for every new hire — a 4–6 hour process per person.",
                solution: "Space HR triggers the full onboarding journey the moment a new hire is added. Day 1 welcome message, Day 3 document reminder, Day 7 manager check-in prompt, Day 14 training module unlock, Day 30 pulse survey, Day 90 probation review — all automated, tracked, and escalated if missed.",
                result: "3× faster onboarding completion. Zero manual follow-ups. New hires rate their onboarding experience 40% higher.",
                color: "orange",
              },
              {
                title: "Leave & Expense Approval Chains",
                problem: "Leave requests pile up in email threads. Managers miss approvals. HR spends hours chasing sign-offs and manually updating records when approvals are granted.",
                solution: "Space HR routes every leave and expense request to the right approver based on department hierarchy, request type, and spending thresholds. If the primary approver doesn't respond within 24 hours, the request auto-escalates. The employee is notified at every stage, and HR records update automatically on approval.",
                result: "85% reduction in approval cycle time. Zero requests lost in email. Full audit trail for every decision.",
                color: "green",
              },
              {
                title: "Compliance Training & Certification Tracking",
                problem: "Annual compliance training deadlines are missed because HR relies on manual reminders. Certification expiry dates are tracked in spreadsheets. Audits require hours of manual data gathering.",
                solution: "Space HR maintains a compliance calendar for every employee. It sends automated reminders at 30 days, 7 days, and 1 day before each deadline, escalates to the manager if incomplete, and generates a real-time compliance dashboard for audit purposes.",
                result: "99% on-time compliance training completion. Audit-ready reports generated in seconds instead of hours.",
                color: "blue",
              },
              {
                title: "Employee Engagement & Recognition Campaigns",
                problem: "Employee anniversaries and birthdays are missed. Engagement surveys get low response rates because they're sent at the wrong time. Recognition is inconsistent across managers.",
                solution: "Space HR automates birthday and work anniversary celebrations with personalized messages and team notifications. Pulse surveys are sent based on AI-optimized timing (shown to increase response rates by 34%). Recognition workflows let any employee trigger a public shoutout that routes to Slack, Teams, or the company feed.",
                result: "+42% employee satisfaction score. +34% survey response rate. Recognition frequency up 3× vs. manual.",
                color: "purple",
              },
            ].map(({ title, problem, solution, result, color }, i) => (
              <div key={i} className={`rounded-2xl border p-8 ${
                color === "orange" ? "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/10" :
                color === "green" ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/10" :
                color === "blue" ? "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/10" :
                "border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/10"
              }`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">{title}</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">❌ The Problem</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">⚙️ Space HR Solution</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-green-600 dark:text-green-400 mb-2">✅ The Result</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              HR Automation — Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything teams ask before automating their HR workflows with Space HR.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }, i) => (
              <details
                key={i}
                className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer bg-white dark:bg-[#1e293b] hover:bg-gray-50 dark:hover:bg-[#243044] transition-colors list-none">
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{question}</span>
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-[#0b1121] text-sm">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white dark:bg-[#0b1121] border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Related Space HR Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "AI HR Chatbot", href: "/features/ai-chatbots" },
              { label: "Leave Management", href: "/features/leave-management" },
              { label: "AI Payroll Auditor", href: "/features/ai-payroll-auditor" },
              { label: "Attrition Prediction", href: "/features/attrition-prediction" },
              { label: "360° Appraisals", href: "/features/360-performance-appraisals" },
              { label: "Labor Cost Forecasting", href: "/features/cost-prediction" },
              { label: "All Features", href: "/features" },
              { label: "Watch Demo", href: "/demo" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your HR Workflows?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Save 40+ hours per week and deliver consistent employee experiences
            at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-16 px-12 text-lg bg-white text-orange-700 hover:bg-gray-100 cursor-pointer"
              >
                Request a Demo
              </Button>
            </Link>
            <Link
              href="https://cad.spaceaiapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-16 px-12 text-lg border-2 border-white text-white hover:bg-white/10 cursor-pointer"
              >
                Try for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
