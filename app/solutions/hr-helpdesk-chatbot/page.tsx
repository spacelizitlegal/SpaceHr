import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  Clock,
  Headphones,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
  AlertCircle,
  BarChart3,
  GitMerge,
  LayoutDashboard,
  Lock,
  MailOpen,
  PhoneOff,
  Tag,
  Timer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Helpdesk Chatbot — AI Service Desk & Ticketing",
  description:
    "Deflect HR tickets with an AI helpdesk chatbot. Integrates with ServiceNow, Jira, Freshdesk, and Zendesk to resolve routine queries automatically.",
  keywords: [
    "hr helpdesk chatbot",
    "hr service desk chatbot",
    "hr ticketing chatbot",
    "ai hr helpdesk",
    "hr helpdesk automation",
    "hr support chatbot",
    "hr ticket deflection",
    "hr service now chatbot",
    "hr jira chatbot",
    "hr zendesk chatbot",
    "employee helpdesk chatbot",
    "conversational hr helpdesk",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/hr-helpdesk-chatbot",
  },
  openGraph: {
    title: "HR Helpdesk Chatbot — AI Service Desk Integration | Space HR",
    description:
      "Deflect HR tickets before they reach your service desk. Integrates with ServiceNow, Jira, Freshdesk, and Zendesk.",
    url: "https://spacehr.net/solutions/hr-helpdesk-chatbot",
    siteName: "Space HR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR HR Helpdesk Chatbot Ticketing Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Helpdesk Chatbot | Space HR",
    description:
      "Deflect HR tickets before they reach your service desk. ServiceNow, Jira, Freshdesk, Zendesk integration.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const faqs = [
  {
    question: "What is an HR helpdesk chatbot?",
    answer:
      "An HR helpdesk chatbot is an AI-powered assistant that sits at the front of your HR service desk — automatically resolving employee queries before they become tickets. It connects to your HRIS and HR knowledge base to answer questions about leave, payroll, policies, and benefits instantly, 24/7. Queries that require human judgment are triaged and routed to the right HR team member with full context. Space HR's HR helpdesk chatbot typically deflects 70% of inbound HR tickets in the first month.",
  },
  {
    question: "How does an HR helpdesk chatbot reduce ticket volume?",
    answer:
      "Most HR helpdesk tickets are repetitive and answerable with the right data: leave balance checks, payslip queries, policy clarifications, onboarding questions. An HR chatbot resolves these automatically by pulling live data from your HRIS and answers from your policy knowledge base. Since the chatbot operates 24/7 and responds in seconds, employees get answers before they resort to raising a ticket. Space HR customers typically see 60-70% ticket deflection within 30 days of deployment.",
  },
  {
    question: "What is the difference between an HR helpdesk chatbot and an HR ticketing system?",
    answer:
      "An HR ticketing system (like ServiceNow or Jira Service Management) captures, routes, and tracks HR requests that need human handling. An HR helpdesk chatbot sits in front of the ticketing system and resolves queries that do not need human handling — before a ticket is created. The two work together: the chatbot handles the 60-70% of queries it can resolve automatically, and only escalates the remaining 30-40% to the ticketing system with structured context already captured. Space HR integrates with ServiceNow, Jira, and Freshdesk.",
  },
  {
    question: "Can the HR helpdesk chatbot integrate with our existing ticketing system?",
    answer:
      "Yes. Space HR's HR helpdesk chatbot integrates with ServiceNow, Jira Service Management, Freshdesk, Zendesk, and most major ITSM platforms. When the chatbot escalates a query, it automatically creates a structured ticket in your ticketing system with the full conversation context, employee details, query category, and priority level already populated. HR agents receive a pre-triaged ticket — not a blank form.",
  },
  {
    question: "How does the HR chatbot handle SLA management?",
    answer:
      "Space HR's HR helpdesk chatbot prevents SLA breaches at the source by resolving queries before they become tickets. For queries that do escalate, the chatbot captures the interaction timestamp, auto-categorizes the query, and routes it to the correct team with SLA clock already started. HR managers can configure priority rules: certain query types (e.g., payroll disputes, disciplinary matters) can be flagged as high-priority for immediate routing. The analytics dashboard shows SLA performance in real time.",
  },
  {
    question: "What query categories does the HR helpdesk chatbot cover?",
    answer:
      "Space HR's HR helpdesk chatbot covers: leave and absence (balance checks, applications, policy queries), payroll and payslips (retrieval, queries, disputes), HR policies (remote work, expenses, benefits), onboarding and offboarding queries, IT access requests (routing only), compliance training status, performance review deadlines, and benefits enrollment guidance. Custom categories can be added via the admin knowledge base interface without engineering involvement.",
  },
  {
    question: "How does the chatbot handle queries it cannot resolve?",
    answer:
      "Space HR uses a confidence threshold for every response. When the chatbot is below its confidence threshold for a query, it escalates rather than guessing. The escalation path is configurable by query type, employee location, and time of day. The escalation creates a structured handoff — the HR agent receives the full conversation history, the employee's profile, the query category, and the chatbot's partial findings. No context is lost and no employee is left with an unanswered question.",
  },
  {
    question: "Is employee data secure in the HR helpdesk chatbot?",
    answer:
      "Yes. Space HR enforces role-based access controls so employees only access their own data. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Every interaction is fully audit-logged. Space HR is GDPR-compliant for EU deployments and implements SOC 2-equivalent security controls. Sensitive query categories (e.g., medical leave, disciplinary matters) can be configured to escalate immediately to a human rather than being handled by the chatbot.",
  },
  {
    question: "How long does it take to set up an HR helpdesk chatbot?",
    answer:
      "Standard deployment takes 48 hours. The process: connect Space HR to your HRIS (pre-built connectors for Workday, BambooHR, SAP, ADP, and 20+ others), upload your HR policy documents to the knowledge base, configure escalation rules and ticketing system integration, and deploy to Slack, Teams, or your HR portal. Space HR's onboarding team manages the full process. No engineering work is required.",
  },
  {
    question: "How do we measure the success of an HR helpdesk chatbot?",
    answer:
      "Track four metrics: (1) Ticket deflection rate — what percentage of HR queries are resolved without a ticket being raised? Target: 60-70%. (2) First-response time — how fast do employees get an answer? Target: under 5 seconds for chatbot-handled queries. (3) SLA compliance rate — what percentage of escalated tickets are resolved within SLA? (4) Employee CSAT for HR — does self-service improve satisfaction? Space HR's analytics dashboard tracks all four automatically.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "HR Helpdesk Chatbot", url: "https://spacehr.net/solutions/hr-helpdesk-chatbot" },
];

const capabilities = [
  {
    icon: PhoneOff,
    title: "70% Ticket Deflection",
    description: "Resolves the majority of HR queries automatically before they become tickets — eliminating the #1 source of HR team overload.",
  },
  {
    icon: Timer,
    title: "Zero SLA Breaches",
    description: "Chatbot responses in under 5 seconds, 24/7. Escalations are auto-routed and auto-prioritized — SLA clock starts the moment the query arrives.",
  },
  {
    icon: GitMerge,
    title: "Ticketing System Integration",
    description: "Integrates with ServiceNow, Jira, Freshdesk, and Zendesk. Escalated queries create pre-populated, triaged tickets automatically.",
  },
  {
    icon: Tag,
    title: "Automatic Query Categorization",
    description: "Every inbound query is categorized, prioritized, and routed without manual triage. HR agents work structured queues, not email chaos.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Analytics",
    description: "Live dashboard: ticket volume, deflection rate, resolution time, top query categories, SLA compliance, and CSAT trends.",
  },
  {
    icon: MailOpen,
    title: "Omnichannel Intake",
    description: "Captures queries from Slack, Microsoft Teams, email, web widget, and mobile — unified in one HR helpdesk queue.",
  },
  {
    icon: Lock,
    title: "Role-Based Data Access",
    description: "Each employee only sees their own HR data. Sensitive query types are automatically escalated to human HR — never handled by the chatbot.",
  },
  {
    icon: Sparkles,
    title: "Self-Learning Knowledge Base",
    description: "HR admins update the knowledge base through a no-code interface. Every policy update propagates to chatbot answers instantly — no IT involvement.",
  },
];

const beforeAfter = [
  { metric: "Average first response time", before: "4-24 hours", after: "< 5 seconds", icon: Timer },
  { metric: "HR ticket volume", before: "100% to HR team", after: "30% reaches HR (70% deflected)", icon: TrendingDown },
  { metric: "SLA breaches", before: "Common — email backlog", after: "Near-zero — auto-routed", icon: AlertCircle },
  { metric: "HR hours on repetitive queries", before: "6-10 hrs/week/person", after: "< 1 hr/week/person", icon: Clock },
  { metric: "Out-of-hours coverage", before: "None", after: "24/7 — all timezones", icon: Users },
  { metric: "Ticket triage quality", before: "Manual — inconsistent", after: "Auto-categorized, structured", icon: BarChart3 },
];

const integrations = [
  { name: "ServiceNow", type: "ITSM", detail: "Creates structured incidents from escalated HR queries with pre-populated fields." },
  { name: "Jira Service Mgmt", type: "ITSM", detail: "Auto-creates HR service requests with category, priority, and SLA metadata." },
  { name: "Freshdesk", type: "Helpdesk", detail: "Pushes escalated queries as Freshdesk tickets with full conversation context." },
  { name: "Slack", type: "Comms", detail: "Native bot in any Slack workspace — employees query directly in #hr-help." },
  { name: "Microsoft Teams", type: "Comms", detail: "Teams bot available in channels or private messages — no separate app needed." },
  { name: "Workday / BambooHR / ADP", type: "HRIS", detail: "Live data sync — leave balances, payslips, and employee records always current." },
];

const ticketCategories = [
  { category: "Leave & Absence", pct: 34, deflection: "92%" },
  { category: "Payroll & Payslips", pct: 22, deflection: "85%" },
  { category: "Policy Questions", pct: 18, deflection: "95%" },
  { category: "Onboarding Queries", pct: 11, deflection: "88%" },
  { category: "Benefits & Perks", pct: 8, deflection: "80%" },
  { category: "Complex / Sensitive", pct: 7, deflection: "0% (always escalated)" },
];

const roiData = [
  { metric: "Ticket deflection", value: "70%", detail: "Queries resolved without HR" },
  { metric: "First response", value: "< 5 sec", detail: "vs. 4-24 hrs email" },
  { metric: "SLA compliance", value: "99%+", detail: "Auto-routing eliminates breaches" },
  { metric: "HR hours saved", value: "8+ hrs/wk", detail: "Per HR team member" },
  { metric: "Employee CSAT", value: "+42%", detail: "HR service satisfaction" },
  { metric: "Go-live", value: "48 hrs", detail: "Sign-up to live chatbot" },
];

export default function HRHelpdeskChatbotPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 pb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/solutions" className="hover:text-blue-600">Solutions</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 dark:text-white font-medium">HR Helpdesk Chatbot</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-blue-950/10 -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6 border border-teal-200 dark:border-teal-800">
                  <Headphones className="w-4 h-4" /> HR Helpdesk Chatbot
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                  Deflect 70% of HR Tickets{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    Before They&apos;re Created
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Space HR&apos;s <strong>HR helpdesk chatbot</strong> deflects 70% of HR service desk tickets automatically — giving employees instant answers and HR teams their time back.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  No more SLA breaches. No more email backlog. No more answering the same leave balance question forty times a week. <strong>Live in 48 hours</strong> — integrates with ServiceNow, Jira, Slack, and Teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="https://cad.spaceaiapp.com/login">
                    <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
                      Try Free — Live in 48 hrs
                    </Button>
                  </Link>
                  <Link href="/request-a-demo">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-gray-300 dark:border-gray-700">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {["ServiceNow & Jira integration", "70% ticket deflection", "Zero SLA breaches"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Helpdesk dashboard mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl opacity-10 blur-3xl" />
                <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="bg-teal-700 p-3 flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-white" />
                    <p className="text-white text-sm font-semibold">HR Helpdesk — Space HR</p>
                    <div className="ml-auto text-xs text-teal-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400" /> Live
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 border-b border-gray-100 dark:border-gray-800">
                    {[
                      { label: "Open tickets", value: "4", delta: "68% fewer vs last month" },
                      { label: "Auto-resolved today", value: "47", delta: "No HR involvement" },
                      { label: "Avg response", value: "3 sec", delta: "SLA: 100% met" },
                    ].map(({ label, value, delta }) => (
                      <div key={label} className="p-4 text-center">
                        <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">{delta}</p>
                      </div>
                    ))}
                  </div>
                  {/* Recent activity */}
                  <div className="p-4 space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Recent Activity</p>
                    {[
                      { query: "Leave balance check — Sarah K.", status: "Auto-resolved", time: "2s ago", color: "text-green-600 dark:text-green-400" },
                      { query: "Payslip March 2026 — James O.", status: "Auto-resolved", time: "18s ago", color: "text-green-600 dark:text-green-400" },
                      { query: "Remote work policy — Maria C.", status: "Auto-resolved", time: "1m ago", color: "text-green-600 dark:text-green-400" },
                      { query: "Disciplinary procedure — [private]", status: "Escalated to HR BP", time: "4m ago", color: "text-amber-600 dark:text-amber-400" },
                      { query: "Payroll dispute — Tom W.", status: "Escalated to Payroll", time: "12m ago", color: "text-amber-600 dark:text-amber-400" },
                    ].map(({ query, status, time, color }) => (
                      <div key={query} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{query}</p>
                          <p className={`text-xs font-semibold ${color}`}>{status}</p>
                        </div>
                        <p className="text-xs text-gray-400">{time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Stats bar */}
        <section className="py-14 bg-teal-700 dark:bg-teal-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {roiData.map(({ metric, value, detail }) => (
                <div key={metric} className="text-center">
                  <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                  <div className="text-teal-200 text-xs font-semibold uppercase tracking-wide mb-1">{metric}</div>
                  <div className="text-teal-300 text-xs">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After table */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Your HR Service Desk — Before and After
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Space HR transforms your service desk from a reactive email queue to a proactive, automated HR support operation.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-[#1e293b]">
                    <th className="text-left px-5 py-4 font-semibold text-gray-700 dark:text-gray-300">Metric</th>
                    <th className="px-5 py-4 font-semibold text-red-600 dark:text-red-400 text-center">Without Space HR</th>
                    <th className="px-5 py-4 font-semibold text-green-600 dark:text-green-400 text-center">With Space HR</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeAfter.map(({ metric, before, after, icon: Icon }, i) => (
                    <tr key={metric} className={i % 2 === 0 ? "bg-white dark:bg-[#111827]" : "bg-gray-50 dark:bg-[#0f172a]"}>
                      <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">
                        <span className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-teal-500 flex-shrink-0" />{metric}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center text-red-600 dark:text-red-400">{before}</td>
                      <td className="px-5 py-4 text-center text-green-600 dark:text-green-400 font-semibold">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8 Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything Your HR Service Desk Needs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Space HR&apos;s HR helpdesk chatbot is a complete HR service desk automation platform — HRIS integration, ticketing system integration, real-time analytics, and omnichannel intake in one.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deflection by category + How it works */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Deflection Rate by HR Query Category
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Not all HR queries are equal. Space HR automatically resolves high-volume, low-complexity categories — and always escalates sensitive matters to a human HR professional.
                </p>
                <div className="space-y-3">
                  {ticketCategories.map(({ category, pct, deflection }) => (
                    <div key={category} className="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{category}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{pct}% of tickets</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${deflection === "0% (always escalated)" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"}`}>
                            {deflection}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${deflection === "0% (always escalated)" ? "bg-amber-500" : "bg-teal-500"}`}
                          style={{ width: `${Math.min(pct * 2.5, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  How a Query Becomes a Resolution
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Every employee query follows a structured path — from intake to resolution or escalation — with no manual triage required from your HR team.
                </p>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Employee submits query", detail: "Via Slack, Teams, email, or web widget — any channel, any time of day." },
                    { step: "2", title: "Chatbot categorizes and assesses", detail: "NLU classifies the query type and checks confidence level against the knowledge base." },
                    { step: "3", title: "High-confidence: instant resolution", detail: "Chatbot pulls live HRIS data and responds immediately. Audit log created automatically." },
                    { step: "4", title: "Low-confidence: structured escalation", detail: "Routes to correct HR team member. Pre-populates a ticket in your ITSM with full context." },
                    { step: "5", title: "Analytics updated in real time", detail: "Dashboard reflects resolution, category, and SLA status the moment the interaction closes." },
                  ].map(({ step, title, detail }) => (
                    <div key={step} className="flex gap-4 p-4 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-sm flex items-center justify-center">{step}</div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Integrates With Your Existing Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Space HR sits in front of your ticketing system — deflecting the queries that do not need a ticket, and enriching the ones that do.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map(({ name, type, detail }) => (
                <div key={name} className="p-5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-bold text-gray-900 dark:text-white">{name}</p>
                    <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold px-2 py-0.5 rounded-full">{type}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-16 bg-gradient-to-br from-teal-600 to-cyan-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <Bot className="w-10 h-10 text-teal-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to End Your HR Ticket Backlog?
            </h2>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto text-lg">
              Space HR&apos;s HR helpdesk chatbot deflects 70% of tickets in the first 30 days — with full integration into ServiceNow, Jira, Slack, and your HRIS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-teal-700 hover:bg-teal-50 shadow-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/40 text-white hover:bg-white/10">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              HR Helpdesk Chatbot — Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
              Common questions from HR service desk managers evaluating AI chatbot automation.
            </p>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* Related pages */}
        <section className="py-16 bg-gray-50 dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Related Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/solutions/hr-ai-chatbot", title: "HR AI Chatbot", desc: "Full HR AI chatbot platform — all use cases and capabilities." },
                { href: "/solutions/internal-employee-chatbot", title: "Internal Employee Chatbot", desc: "Chatbot deployed inside Slack and Teams for internal HR queries." },
                { href: "/solutions/chatbot-for-hr-services", title: "Chatbot for HR Services", desc: "HR service automation with AI — use cases and ROI benchmarks." },
                { href: "/features/ai-chatbots", title: "AI Chatbot Features", desc: "Full feature breakdown for Space HR's chatbot platform." },
                { href: "/blogs/chatbot-for-hr-services-complete-guide", title: "HR Chatbot Deployment Guide", desc: "Step-by-step guide to deploying an AI HR chatbot." },
                { href: "/blogs/hr-automation-kpis-measuring-speed-accuracy-and-adoption", title: "HR Automation KPIs", desc: "Measure speed, accuracy, and adoption of HR automation." },
                { href: "/resources/hr-chatbot-buyers-guide", title: "HR Chatbot Buyer's Guide", desc: "Evaluation framework, pricing benchmarks, red flags to watch for." },
                { href: "/request-a-demo", title: "Book a Demo", desc: "See the HR helpdesk chatbot live against your use cases." },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl hover:border-teal-400 dark:hover:border-teal-600 transition-all"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                  <span className="mt-2 text-xs text-teal-600 dark:text-teal-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
