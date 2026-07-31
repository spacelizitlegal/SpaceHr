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
  DollarSign,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
  Building2,
  Headphones,
  Lock,
  BarChart3,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internal Employee Chatbot for Slack, Teams & Intranet | Space HR",
  description:
    "Internal HR chatbot for Slack, Teams, or intranet. Instant answers on leave, payroll, and policies with enterprise security. Setup in 48 hours.",
  keywords: [
    "internal employee chatbot",
    "internal hr chatbot",
    "hr chatbot slack",
    "hr chatbot microsoft teams",
    "intranet hr chatbot",
    "workplace chatbot",
    "internal chatbot for employees",
    "corporate hr chatbot",
    "employee chatbot",
    "ai chatbot for employees",
    "internal hr virtual assistant",
    "enterprise employee chatbot",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/internal-employee-chatbot",
  },
  openGraph: {
  title: "Internal Employee Chatbot for Slack & Teams | Space HR",
    description:
      "Deploy an internal HR chatbot in Slack, Microsoft Teams, or your intranet. Instant answers with enterprise security.",
    url: "https://spacehr.net/solutions/internal-employee-chatbot",
    siteName: "Space HR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Internal Employee Chatbot for Slack and Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Employee Chatbot | Space HR",
    description:
      "Internal HR chatbot for Slack, Teams, and intranet. Instant answers with enterprise security.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const faqs = [
  {
    question: "What is an internal employee chatbot for HR?",
    answer:
      "An internal employee chatbot is an AI-powered virtual assistant deployed inside your company's communication tools — Slack, Microsoft Teams, or an intranet portal — that answers employee HR questions automatically. It connects to your HRIS and policy documents to give real-time, employee-specific answers about leave balances, payroll, benefits, and company policies, without requiring HR team involvement. Space HR's internal HR chatbot resolves up to 70% of all HR queries automatically.",
  },
  {
    question: "How is an internal HR chatbot different from a customer-facing chatbot?",
    answer:
      "Internal HR chatbots are purpose-built for employee queries, not customer interactions. They require deep HRIS integration to access live employee data (leave balances, payslips, personal details), strict role-based access controls so employees only see their own information, compliance with HR data regulations (GDPR, SOC 2), and knowledge of your specific HR policies and workflows. A generic customer chatbot has none of these capabilities — it would be a security risk in an HR context.",
  },
  {
    question: "Which platforms does Space HR's internal chatbot support?",
    answer:
      "Space HR's internal employee chatbot deploys natively on Slack, Microsoft Teams, and as a web widget embeddable in any intranet or HRIS portal. Employees use it wherever they already work — there is no separate app to download or login to remember. Enterprise customers can also integrate it into ServiceNow, SharePoint, and custom internal portals via API.",
  },
  {
    question: "What HR queries can the internal chatbot handle?",
    answer:
      "Space HR's internal HR chatbot handles: leave balance checks and leave applications, payslip retrieval and payroll queries, company policy lookups (remote work, expenses, benefits), onboarding task guidance, IT request routing, compliance training reminders, performance review deadlines, benefits enrollment help, and general HR process navigation. Complex or sensitive matters are escalated to the correct HR team member with full conversation context.",
  },
  {
    question: "How do we keep employee data secure inside the chatbot?",
    answer:
      "Space HR enforces role-based access controls so every employee only sees their own data. All communication is encrypted in transit (TLS 1.3) and at rest (AES-256). Every interaction is audit-logged with timestamp, user ID, and response — essential for compliance and dispute resolution. Space HR is GDPR-compliant for EU deployments and supports SOC 2-equivalent security controls. You retain full data ownership and can export or delete data at any time.",
  },
  {
    question: "How long does it take to deploy an internal HR chatbot?",
    answer:
      "Space HR's internal employee chatbot can be live in 48 hours for standard deployments. The process involves: connecting Space HR to your HRIS, uploading your HR policy documents to the knowledge base, configuring your escalation rules, and adding the chatbot to your Slack workspace or Teams tenant. No engineering work is required. Space HR's onboarding team manages the full setup.",
  },
  {
    question: "How do we drive employee adoption of an internal HR chatbot?",
    answer:
      "Adoption depends on three things: meeting employees where they are (Slack/Teams rather than a separate portal), making the first interaction successful (ensure your top 20 query types are configured correctly before launch), and communicating clearly at launch (a short explainer email with examples of what the bot can do). Space HR provides an adoption playbook and launch communication templates as part of onboarding. Customers typically see 60–70% of eligible queries handled by the chatbot within the first 30 days.",
  },
  {
    question: "Can the internal chatbot handle manager-specific HR queries?",
    answer:
      "Yes. Space HR's internal HR chatbot supports both employee and manager personas. Managers can query team leave calendars, headcount summaries, approval queue status, and team performance deadlines. Role-based access ensures managers only see data for their direct reports. This removes a significant source of HR inbox traffic — managers asking 'who on my team is on leave next week?' type queries.",
  },
  {
    question: "What happens when the chatbot can't answer a question?",
    answer:
      "Space HR's internal HR chatbot uses a confidence threshold — when it's below a set confidence level for a response, it escalates rather than guessing. The escalation routes to the correct HR team member (based on query type and employee region) with the full conversation context attached. The employee is informed of the handoff and given an expected response time. No query is dropped.",
  },
  {
    question: "How do we measure the ROI of an internal HR chatbot?",
    answer:
      "Track three metrics: (1) Ticket deflection rate — what % of HR queries are resolved by the chatbot without HR involvement? (2) Average resolution time — how has time-to-answer changed since deployment? (3) HR team capacity — how many hours per week has the HR team reclaimed? Space HR's analytics dashboard tracks all three automatically. Most customers achieve full ROI within 6–9 months based on HR time savings alone.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "Internal Employee Chatbot", url: "https://spacehr.net/solutions/internal-employee-chatbot" },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Lives Inside Slack & Teams",
    description:
      "Employees ask HR questions where they already work — no separate portal, no new login. The chatbot is always one @mention away.",
  },
  {
    icon: Zap,
    title: "Instant, Data-Backed Answers",
    description:
      "Connects directly to your HRIS for real-time employee data. Leave balances, payslips, and policy answers drawn from live sources — not a cached FAQ.",
  },
  {
    icon: Clock,
    title: "24/7 — Zero HR Involvement",
    description:
      "Handles queries around the clock across all timezones. Shift workers, remote teams, and global offices all get instant HR support with no SLA breach.",
  },
  {
    icon: Users,
    title: "Employee & Manager Personas",
    description:
      "Separate experiences for employees and managers. Managers access team leave calendars, headcount queries, and approval queues — all role-controlled.",
  },
  {
    icon: Lock,
    title: "Role-Based Data Access",
    description:
      "Every employee sees only their own data. Managers see only their direct reports. HR admins see what they need. No data bleeds between roles.",
  },
  {
    icon: Headphones,
    title: "Intelligent Escalation",
    description:
      "Below-confidence queries escalate to the right HR person with full conversation context. No employee is left stranded with an unanswered question.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track query volume, deflection rate, resolution time, and CSAT scores. Identify your top unanswered queries and fix knowledge gaps continuously.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "AES-256 encryption, TLS 1.3 in transit, GDPR compliance, full audit logging. Built for organizations where HR data security is non-negotiable.",
  },
];

const channels = [
  { name: "Slack", description: "Native Slack app — employees @mention the bot or use a dedicated HR channel.", badge: "Most Popular" },
  { name: "Microsoft Teams", description: "Teams bot integration — available in any Teams channel or as a private message.", badge: "Enterprise" },
  { name: "Web Widget", description: "Embeddable chat widget for your intranet, HRIS portal, or HR hub page.", badge: null },
  { name: "Mobile", description: "Accessible via Slack mobile, Teams mobile, or the Space HR mobile app.", badge: null },
];

const useCases = [
  {
    persona: "Employee",
    icon: Users,
    queries: [
      { q: "How many leave days do I have left?", a: "You have 14 days of annual leave remaining for 2026. Your carry-over from 2025 expires 30 June." },
      { q: "When was my last payslip?", a: "Your last payslip was processed on 28 March 2026. I can email it to you now or show a summary — which do you prefer?" },
      { q: "What's the work-from-home policy?", a: "Your company allows up to 3 remote days per week. Full policy updated Jan 2026 — shall I send it to your email?" },
    ],
  },
  {
    persona: "Manager",
    icon: Building2,
    queries: [
      { q: "Who on my team is on leave next week?", a: "Sarah Chen (Mon–Wed) and James Okafor (Thu–Fri) are on approved leave next week. 6 team members are available." },
      { q: "How many open leave requests do I need to approve?", a: "You have 3 pending leave requests: Priya Sharma (15–17 Apr), Tom Walsh (22 Apr), Maria Costa (28 Apr–2 May). Approve now?" },
      { q: "What's my team's current headcount?", a: "Your team has 12 active employees, 1 on maternity leave, and 2 open roles in recruitment. Full team view available in Space HR." },
    ],
  },
];

const deploymentSteps = [
  { step: "1", title: "Connect Your HRIS", detail: "Space HR connects to your HRIS via pre-built connector (Workday, BambooHR, SAP, ADP, and 20+ others) or CSV import. Employee data syncs in real time." },
  { step: "2", title: "Upload HR Policies", detail: "Upload your policy documents (PDF, Word, or paste text). Space HR's AI reads them and builds a searchable knowledge base. No manual tagging required." },
  { step: "3", title: "Configure Escalation Rules", detail: "Define which query types escalate, to whom, and in what timeframe. Leave queries → HR Ops, payroll disputes → Payroll team, sensitive matters → HR Business Partner." },
  { step: "4", title: "Add to Slack or Teams", detail: "Install the Space HR app from the Slack App Directory or Microsoft Teams store. Takes 5 minutes. No engineering work. Add to your HR help channel and you're live." },
  { step: "5", title: "Pilot with 10% of Employees", detail: "Run a 2-week pilot with a representative group. Review analytics, fix any knowledge gaps, collect CSAT. Then open to the full workforce." },
  { step: "6", title: "Launch & Monitor", detail: "Send a launch communication to all employees. Monitor deflection rate and CSAT weekly. Space HR's analytics dashboard shows exactly where to improve." },
];

const roiData = [
  { metric: "HR ticket deflection", value: "70%", detail: "Queries resolved without HR involvement" },
  { metric: "Resolution time", value: "< 5 sec", detail: "vs. 4–24 hrs for email/ticket" },
  { metric: "HR hours saved", value: "6–10 hrs/wk", detail: "Per HR team member" },
  { metric: "Employee satisfaction", value: "+42%", detail: "HR service satisfaction score" },
  { metric: "Time to live", value: "48 hrs", detail: "From sign-up to deployed chatbot" },
  { metric: "ROI payback", value: "6–9 months", detail: "Based on HR time savings alone" },
];

export default function InternalEmployeeChatbotPage() {
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
              <li className="text-gray-900 dark:text-white font-medium">Internal Employee Chatbot</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-purple-950/10 -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                  <Bot className="w-4 h-4" /> Internal Employee Chatbot
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                  The Internal HR Chatbot{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                    Your Employees Will Actually Use
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Space HR&apos;s <strong>internal employee chatbot</strong> lives inside Slack and Microsoft Teams — answering leave, payroll, and policy questions instantly from your live HR data.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  No new portal. No new login. Employees get <strong>instant, accurate HR answers</strong> where they already work. HR teams reclaim <strong>6–10 hours per week</strong> from repetitive queries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="https://cad.spaceaiapp.com/login">
                    <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
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
                  {["Slack & Teams native", "No engineering required", "GDPR compliant"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slack-style chatbot mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl opacity-10 blur-3xl" />
                <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Slack-style header */}
                  <div className="bg-[#4A154B] p-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <p className="text-white text-sm font-semibold ml-2"># hr-help — Slack</p>
                    <div className="ml-auto flex items-center gap-1.5 text-xs text-purple-200">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Space HR Bot online
                    </div>
                  </div>
                  <div className="p-4 space-y-4 bg-white dark:bg-[#0f172a] min-h-[320px]">
                    {[
                      { from: "employee", name: "Alex M.", text: "Hey @SpaceHR — how many leave days do I have left?" },
                      { from: "bot", name: "Space HR Bot", text: "Hi Alex 👋 You have 14 days of annual leave remaining for 2026. Your next approved leave: 22–24 April. Want to apply for more?" },
                      { from: "employee", name: "Alex M.", text: "What's the work from home policy?" },
                      { from: "bot", name: "Space HR Bot", text: "Your company allows up to 3 remote days/week. Policy doc updated Jan 2026 — I can email it to you. Anything else?" },
                      { from: "employee", name: "Alex M.", text: "When is next payroll?" },
                      { from: "bot", name: "Space HR Bot", text: "Next payroll: 28 April 2026. I can pull up your March payslip now if you need it." },
                    ].map((msg, i) => (
                      <div key={i} className="flex gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold ${msg.from === "bot" ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}>
                          {msg.from === "bot" ? <Bot className="w-4 h-4" /> : msg.name[0]}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-0.5">{msg.name}</p>
                          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed bg-gray-50 dark:bg-[#1e293b] px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-800">
                            {msg.text}
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

        {/* ROI Stats */}
        <section className="py-16 bg-indigo-600 dark:bg-indigo-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {roiData.map(({ metric, value, detail }) => (
                <div key={metric} className="text-center">
                  <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                  <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-1">{metric}</div>
                  <div className="text-indigo-300 text-xs">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Support */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Meets Employees Where They Already Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The biggest reason internal chatbots fail is requiring employees to use a separate tool.
                Space HR deploys natively inside your existing communication stack.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map(({ name, description, badge }) => (
                <div key={name} className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 relative">
                  {badge && (
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                  <Layers className="w-8 h-8 text-indigo-500 mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Built for Internal HR — Not General Chatbots Repurposed
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Space HR&apos;s internal employee chatbot was built from the ground up for HR use cases — with HRIS integration, HR-specific security, and HR workflow automation at its core.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee & Manager Use Cases */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Queries. Real Answers.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See how Space HR&apos;s internal HR chatbot handles real employee and manager queries — with live HRIS data, not generic placeholder text.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map(({ persona, icon: Icon, queries }) => (
                <div key={persona} className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="bg-indigo-600 px-5 py-3 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-white" />
                    <span className="font-semibold text-white text-sm">{persona} Queries</span>
                  </div>
                  <div className="p-5 space-y-4">
                    {queries.map(({ q, a }) => (
                      <div key={q} className="space-y-1.5">
                        <div className="flex justify-end">
                          <p className="text-sm bg-indigo-600 text-white px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[85%]">{q}</p>
                        </div>
                        <div className="flex justify-start">
                          <p className="text-sm bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[90%] border border-gray-200 dark:border-gray-700">{a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Deployed in 6 Steps. Live in 48 Hours.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                No engineering. No months-long implementation. Space HR&apos;s internal chatbot follows a proven 6-step deployment process that gets you live in two days.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deploymentSteps.map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4 p-5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-lg">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why internal chatbots fail — differentiation section */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Most Internal HR Chatbots Fail (And How Space HR is Different)
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Most companies that deploy an internal HR chatbot see poor adoption within 90 days. The reasons are predictable — and avoidable.
                </p>
                <div className="space-y-4">
                  {[
                    { problem: "Requires employees to use a separate portal", solution: "Space HR lives inside Slack and Teams — zero friction" },
                    { problem: "Gives generic answers from a static FAQ", solution: "Space HR connects to live HRIS data for employee-specific answers" },
                    { problem: "Doesn't know your specific HR policies", solution: "Space HR is trained on your actual policy documents, not generic HR knowledge" },
                    { problem: "Poor escalation = employees stranded", solution: "Space HR routes to the right HR person with full context, every time" },
                    { problem: "No admin interface — every update needs IT", solution: "HR admins update the knowledge base themselves in minutes" },
                  ].map(({ problem, solution }) => (
                    <div key={problem} className="flex gap-3 p-4 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-lg">✗</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-through mb-1">{problem}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white flex gap-1.5 items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Who Space HR&apos;s Internal Chatbot is Built For
                </h3>
                <div className="space-y-3 mb-8">
                  {[
                    { audience: "HR teams of 2–10 people", need: "Drowning in repetitive employee queries. Need to reclaim time for strategic work." },
                    { audience: "Distributed / remote-first companies", need: "Employees across timezones need HR support without waiting for business hours." },
                    { audience: "High-growth companies (50–2,000 employees)", need: "HR headcount can't scale with headcount — automation is the only answer." },
                    { audience: "Shift-based workforces", need: "Warehouse, retail, healthcare teams need HR support outside 9–5." },
                    { audience: "Global enterprises", need: "Multi-country HR rules, multi-language workforce, one consistent experience." },
                  ].map(({ audience, need }) => (
                    <div key={audience} className="p-4 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{audience}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{need}</p>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <Sparkles className="w-5 h-5 text-indigo-500 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Already using an HRIS?</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Space HR has pre-built connectors for Workday, SAP SuccessFactors, BambooHR, ADP, Rippling, and 20+ others.
                    Your existing HR data goes live in the chatbot without any custom integration work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <Bot className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Deploy Your Internal HR Chatbot?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg">
              Join HR teams who have reduced their support ticket volume by 70% — with a chatbot their employees actually use, inside Slack and Teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg">
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
              Internal HR Chatbot — FAQ
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
              Common questions HR teams ask before deploying an internal employee chatbot.
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
                { href: "/solutions/hr-ai-chatbot", title: "HR AI Chatbot", desc: "The full HR AI chatbot overview — all capabilities and integrations." },
                { href: "/solutions/chatbot-for-hr-services", title: "Chatbot for HR Services", desc: "HR service desk automation with AI — use cases and ROI." },
                { href: "/features/ai-chatbots", title: "AI Chatbot Features", desc: "Detailed feature list for Space HR's chatbot platform." },
                { href: "/features/employee-self-service", title: "Employee Self-Service", desc: "Full ESS portal — beyond chatbot to complete self-service." },
                { href: "/blogs/chatbot-for-hr-services-complete-guide", title: "Deployment Guide", desc: "Step-by-step guide to deploying an internal HR chatbot." },
                { href: "/resources/hr-chatbot-buyers-guide", title: "HR Chatbot Buyer's Guide", desc: "How to evaluate, choose, and implement an HR chatbot." },
                { href: "/compare", title: "Compare HR Platforms", desc: "See how Space HR compares to 13 competitors." },
                { href: "/request-a-demo", title: "Book a Demo", desc: "See the internal chatbot live with your HRIS data." },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                  <span className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
