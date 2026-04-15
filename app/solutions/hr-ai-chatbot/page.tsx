import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Clock,
  DollarSign,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR AI Chatbot — 24/7 Employee Self-Service Chatbot | SpaceHR",
  description:
    "SpaceHR's HR AI chatbot answers employee questions about leave, payroll, policies, and benefits instantly — 24/7. Reduce HR tickets by 70%. Free trial, setup in 48 hours.",
  keywords: [
    "hr ai chatbot",
    "ai chatbot hr",
    "ai hr chatbot",
    "hr chatbot platform",
    "chatbot for hr services",
    "employee self-service chatbot",
    "hr helpdesk chatbot",
    "ai chatbot for employees",
    "hr virtual assistant",
    "automated hr support",
    "hr ticket automation",
    "employee query automation",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/hr-ai-chatbot",
  },
  openGraph: {
    title: "HR AI Chatbot — 24/7 Employee Self-Service | SpaceHR",
    description:
      "Resolve 95% of employee HR queries instantly with SpaceHR's AI chatbot. Leave balances, payslips, policy questions — answered 24/7. Reduce HR ticket volume by 70%.",
    url: "https://spacehr.net/solutions/hr-ai-chatbot",
    siteName: "SpaceHR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "SpaceHR HR AI Chatbot Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR AI Chatbot — 24/7 Employee Self-Service | SpaceHR",
    description:
      "Resolve 95% of employee HR queries instantly. Reduce HR ticket volume by 70% with SpaceHR's AI chatbot.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const faqs = [
  {
    question: "What is an HR AI chatbot?",
    answer:
      "An HR AI chatbot is an AI-powered virtual assistant that handles employee questions about HR topics — leave balances, payroll queries, company policies, benefits information, onboarding tasks, and more — automatically and instantly, without requiring an HR team member to respond. SpaceHR's HR AI chatbot resolves 95% of employee queries with no human intervention, 24 hours a day, 7 days a week.",
  },
  {
    question: "What questions can SpaceHR's HR chatbot answer?",
    answer:
      "SpaceHR's HR AI chatbot handles: leave balance enquiries and leave applications, payslip access and payroll queries, company policy lookups (holiday policy, expense policy, remote work policy), benefits information (health insurance, 401k, pension), onboarding task checklists, IT request routing, compliance training status, performance review deadlines, and general HR FAQs. For complex or sensitive queries the chatbot escalates to the right HR team member with full context.",
  },
  {
    question: "How does SpaceHR's HR chatbot reduce HR ticket volume?",
    answer:
      "Most employee HR queries are repetitive — 'What's my leave balance?', 'When is the next payroll?', 'What's the laptop policy?' SpaceHR's chatbot answers these instantly from your HR data, removing them entirely from HR's inbox. Customers typically see a 70% reduction in HR support tickets within the first month, freeing HR teams to focus on strategic work instead of answering the same questions repeatedly.",
  },
  {
    question: "Does the HR chatbot work outside business hours?",
    answer:
      "Yes. SpaceHR's HR AI chatbot operates 24/7 — including weekends, bank holidays, and overnight shifts. Employees in any timezone can get instant answers without waiting for HR business hours. This is especially valuable for global or shift-based workforces where traditional office-hours support creates bottlenecks.",
  },
  {
    question: "How does SpaceHR's chatbot escalate queries it can't resolve?",
    answer:
      "When SpaceHR's HR chatbot encounters a complex, sensitive, or novel query it cannot confidently resolve, it escalates to the appropriate HR team member — with the full conversation context already attached. The HR team member receives a structured handoff including the employee's name, department, query type, and what the chatbot has already tried, so no time is wasted re-gathering context.",
  },
  {
    question: "Is the HR chatbot available in multiple languages?",
    answer:
      "SpaceHR's HR chatbot supports English as the primary language, with multi-language capabilities available for enterprise customers. The chatbot can be configured to respond in the employee's preferred language for key HR topics. For global deployments, SpaceHR's team configures language settings during the 48-hour onboarding process.",
  },
  {
    question: "How does SpaceHR's HR chatbot handle sensitive employee data?",
    answer:
      "SpaceHR is built with enterprise-grade security: all data is encrypted in transit and at rest (AES-256), the chatbot only surfaces data the requesting employee is authorized to see (role-based access controls), and all chatbot interactions are logged for audit purposes. SpaceHR is GDPR-compliant for European deployments and supports SOC 2-equivalent security controls.",
  },
  {
    question: "How long does it take to set up SpaceHR's HR AI chatbot?",
    answer:
      "Most teams are fully live with SpaceHR's HR AI chatbot within 48 hours. Setup involves connecting SpaceHR to your HRIS or uploading your employee directory, configuring the chatbot's knowledge base with your policies and FAQs, and testing with a pilot group. No coding is required. SpaceHR's onboarding team guides you through every step. A free trial is available.",
  },
  {
    question: "How is SpaceHR's HR chatbot different from a general AI chatbot like ChatGPT?",
    answer:
      "General AI chatbots like ChatGPT have no access to your employee data and cannot answer questions like 'What's my leave balance?' or 'When was my last payslip processed?' SpaceHR's HR chatbot is connected directly to your HRIS and payroll data, so it answers with real, employee-specific information — not generic text. It also follows your company's specific policies, escalation rules, and data access controls.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/features" },
  { name: "HR AI Chatbot", url: "https://spacehr.net/solutions/hr-ai-chatbot" },
];

const capabilities = [
  {
    icon: MessageSquare,
    color: "blue",
    title: "Instant Query Resolution",
    description:
      "Answers leave balance, payslip, policy, and benefits questions instantly from your live HR data. No waiting, no tickets, no back-and-forth.",
  },
  {
    icon: Clock,
    color: "purple",
    title: "24/7 Availability",
    description:
      "Always on — nights, weekends, bank holidays. Employees in every timezone get instant answers without waiting for HR business hours.",
  },
  {
    icon: TrendingDown,
    color: "green",
    title: "70% Fewer HR Tickets",
    description:
      "Removes repetitive queries from HR's inbox entirely. HR teams reclaim 6–10 hours per week to focus on strategic work.",
  },
  {
    icon: ArrowRight,
    color: "orange",
    title: "Smart Escalation",
    description:
      "When the chatbot can't resolve a query, it escalates to the right HR contact with full conversation context — so nothing falls through the cracks.",
  },
  {
    icon: Globe,
    color: "teal",
    title: "Multi-Region Support",
    description:
      "Handles region-specific HR rules — UAE leave law, Singapore MOM regulations, US state compliance — in a single chatbot instance.",
  },
  {
    icon: Shield,
    color: "red",
    title: "Enterprise Security",
    description:
      "Role-based data access, AES-256 encryption, full audit logs, and GDPR compliance. Employees only see their own data.",
  },
];

const useCases = [
  {
    title: "Leave & Absence Management",
    queries: [
      "How many leave days do I have left?",
      "Can I carry over unused leave to next year?",
      "How do I apply for parental leave?",
      "What's the notice period for annual leave?",
    ],
    outcome:
      "Employees apply for leave, check balances, and get policy answers instantly — without emailing HR.",
  },
  {
    title: "Payroll & Payslip Queries",
    queries: [
      "When is the next payroll date?",
      "Why is my payslip different this month?",
      "How do I update my bank account details?",
      "What's my year-to-date gross salary?",
    ],
    outcome:
      "Payroll queries resolved instantly. HR no longer fields the same 'when do I get paid?' emails every month.",
  },
  {
    title: "Policy & Compliance Questions",
    queries: [
      "What's the remote work policy?",
      "How do I claim expenses?",
      "What's covered under the medical insurance?",
      "Is overtime pre-approval required?",
    ],
    outcome:
      "The chatbot pulls answers from your latest policies — always up to date, no outdated PDF attachments.",
  },
  {
    title: "Onboarding Support",
    queries: [
      "What do I need to complete in my first week?",
      "Where do I find the employee handbook?",
      "How do I set up my benefits?",
      "Who is my IT contact for laptop setup?",
    ],
    outcome:
      "New hires get 24/7 onboarding support. HR doesn't need to babysit every new joiner through the same checklist.",
  },
];

const roiData = [
  { metric: "HR ticket reduction", value: "70%", detail: "Repetitive queries resolved by chatbot" },
  { metric: "Query resolution time", value: "< 5 sec", detail: "vs. 4–24 hours for email support" },
  { metric: "HR hours saved/month", value: "6–10 hrs", detail: "Per HR team member" },
  { metric: "Employee satisfaction", value: "+42%", detail: "Engagement score improvement" },
  { metric: "Chatbot resolution rate", value: "95%", detail: "Queries resolved without HR intervention" },
  { metric: "Setup time", value: "48 hrs", detail: "From sign-up to live chatbot" },
];

export default function HRAIChatbotPage() {
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
              <li><Link href="/features" className="hover:text-blue-600">Solutions</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 dark:text-white font-medium">HR AI Chatbot</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/10 -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
                  <Bot className="w-4 h-4" /> HR AI Chatbot
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                  The HR AI Chatbot That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Answers Everything.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  SpaceHR's <strong>HR AI chatbot</strong> gives every employee instant, accurate answers about leave, payroll, policies, and benefits — 24/7, without involving your HR team.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  Resolve <strong>95% of HR queries automatically</strong>. Reduce your HR support ticket volume by <strong>70%</strong>. Free up your HR team to focus on people strategy, not inbox management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="https://cad.spaceaiapp.com/login">
                    <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                      Try Free — Setup in 48 hrs
                    </Button>
                  </Link>
                  <Link href="/request-a-demo">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-gray-300 dark:border-gray-700">
                      See a Live Demo
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {["No credit card required", "48-hr setup", "GDPR compliant"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chatbot UI mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-10 blur-3xl" />
                <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Chat header */}
                  <div className="bg-blue-600 p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">SpaceHR Assistant</p>
                      <p className="text-blue-200 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Online 24/7
                      </p>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="p-5 space-y-4 bg-gray-50 dark:bg-[#0f172a]">
                    {[
                      { from: "employee", text: "How many annual leave days do I have left?" },
                      { from: "bot", text: "You have 12 days of annual leave remaining for 2026. Your next approved leave is 22–24 April. Would you like to apply for more leave?" },
                      { from: "employee", text: "When is the next payroll date?" },
                      { from: "bot", text: "Your next payroll is 28 April 2026. Your last payslip was processed on 28 March — I can pull it up if you need it." },
                      { from: "employee", text: "What's the remote work policy?" },
                      { from: "bot", text: "Your company allows up to 3 remote days per week. Full policy document: HR Policy Manual v4 (updated Jan 2026). Shall I send it to your email?" },
                    ].map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === "employee" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.from === "employee"
                            ? "bg-blue-600 text-white rounded-br-sm"
                            : "bg-white dark:bg-[#1e293b] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-sm shadow-sm"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Input bar */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 dark:bg-[#1e293b] rounded-full px-4 py-2 text-sm text-gray-400">Ask anything about HR…</div>
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
              {[
                { value: "95%", label: "Query resolution rate" },
                { value: "70%", label: "Fewer HR tickets" },
                { value: "24/7", label: "Always available" },
                { value: "48 hrs", label: "Setup time" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-4xl font-extrabold mb-1">{value}</div>
                  <div className="text-blue-200 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is an HR AI Chatbot */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Is an HR AI Chatbot — and Why Does Every HR Team Need One?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-5">
              <p>
                An <strong>HR AI chatbot</strong> is an AI-powered virtual assistant that sits between your employees and your HR team — answering HR questions instantly, automatically, and accurately, without requiring a human HR response for every query.
              </p>
              <p>
                The average HR professional spends <strong>40–60% of their time</strong> answering the same questions over and over: "What's my leave balance?", "When do I get paid?", "What's the holiday policy?" These questions are important to employees — but they're not the strategic work that HR teams were hired to do. Every hour spent on inbox management is an hour not spent on hiring strategy, retention, culture-building, or workforce planning.
              </p>
              <p>
                SpaceHR's HR AI chatbot changes this equation entirely. It connects directly to your HRIS and payroll data, learns your company's specific policies, and answers employee questions with real, employee-specific information — not generic text. Employees get instant answers 24/7. HR teams reclaim hours every week.
              </p>
              <p>
                Unlike general AI tools like ChatGPT, SpaceHR's chatbot knows <em>your</em> HR data. It can tell Sarah in engineering that she has 12 days of annual leave remaining, that her next payslip will be processed on April 28, and that her company allows 3 remote days per week — all in the same conversation, all in under 5 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-gray-50 dark:bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                HR AI Chatbot Capabilities
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Everything SpaceHR's HR chatbot can do out of the box — no custom development required.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map(({ icon: Icon, color, title, description }) => (
                <div key={title} className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    color === "blue" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                    color === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                    color === "green" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                    color === "orange" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                    color === "teal" ? "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" :
                    "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Employees Ask the HR AI Chatbot
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                SpaceHR handles these queries automatically — 24/7, with zero HR involvement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map(({ title, queries, outcome }) => (
                <div key={title} className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="bg-gray-50 dark:bg-[#111827] px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 mb-5">
                      {queries.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MessageSquare className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>"{q}"</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-start gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-gray-50 dark:bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The ROI of an HR AI Chatbot
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                HR AI chatbots deliver measurable returns from month one. Here's what SpaceHR customers typically see.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {roiData.map(({ metric, value, detail }) => (
                <div key={metric} className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{value}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{metric}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{detail}</div>
                </div>
              ))}
            </div>

            {/* ROI explanation */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to Calculate Your HR Chatbot ROI
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <p>
                  A typical HR professional earning $65,000/year spends roughly 40% of their time on reactive employee queries — approximately <strong>$26,000/year</strong> in labor cost per HR headcount, just answering questions.
                </p>
                <p>
                  For a company with 2 HR generalists, that's <strong>$52,000/year</strong> in HR labor dedicated to answering repetitive questions. SpaceHR's HR AI chatbot automates 70% of those queries, returning an estimated <strong>$36,400/year</strong> in HR capacity — which can be reinvested in strategic work or used to delay the next HR hire.
                </p>
                <p>
                  Additional ROI comes from reduced employee frustration (faster answers = higher engagement), improved compliance (consistent, policy-accurate responses), and reduced HR burnout. Most SpaceHR customers recover their subscription cost within <strong>30–60 days</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How SpaceHR's HR AI Chatbot Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From employee question to instant answer — here's the full flow.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/40" />
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Employee asks a question",
                    body: "An employee types a question in the SpaceHR chatbot interface — embedded in your HRMS dashboard, Slack, Microsoft Teams, or WhatsApp. No app switching, no login friction.",
                    side: "left",
                  },
                  {
                    step: "02",
                    title: "AI retrieves the right answer",
                    body: "SpaceHR's AI queries your live HRIS and payroll data for employee-specific information (leave balances, payslips, personal records) and your policy knowledge base for general HR questions. No hallucination — only verified data.",
                    side: "right",
                  },
                  {
                    step: "03",
                    title: "Instant, accurate response",
                    body: "The chatbot delivers a clear, conversational answer in under 5 seconds — with the exact figures, dates, or policy text the employee needs. It can also take actions: file a leave request, pull up a payslip, or start an approval workflow.",
                    side: "left",
                  },
                  {
                    step: "04",
                    title: "Escalation when needed",
                    body: "For sensitive, complex, or novel queries, the chatbot escalates to the appropriate HR team member — with the full conversation context pre-loaded so HR can respond in seconds, not minutes.",
                    side: "right",
                  },
                  {
                    step: "05",
                    title: "Every interaction is logged",
                    body: "All chatbot conversations are logged, searchable, and auditable. HR can review trends (what are employees asking most?), identify policy gaps, and report on query resolution rates.",
                    side: "left",
                  },
                ].map(({ step, title, body, side }) => (
                  <div key={step} className={`relative flex items-start gap-6 md:gap-10 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
                    <div className="hidden md:flex w-1/2 justify-end">
                      {side === "left" && (
                        <div className="max-w-xs bg-gray-50 dark:bg-[#111827] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-right">
                          <p className="text-4xl font-black text-blue-100 dark:text-blue-900 mb-1">{step}</p>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold items-center justify-center flex-shrink-0 z-10 shadow-lg mt-4">
                      {step.replace("0", "")}
                    </div>
                    <div className="hidden md:flex w-1/2">
                      {side === "right" && (
                        <div className="max-w-xs bg-gray-50 dark:bg-[#111827] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                          <p className="text-4xl font-black text-blue-100 dark:text-blue-900 mb-1">{step}</p>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                        </div>
                      )}
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden flex items-start gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1">{step.replace("0","")}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HR AI Chatbot vs Alternatives */}
        <section className="py-20 bg-gray-50 dark:bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                SpaceHR HR Chatbot vs. The Alternatives
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                How SpaceHR compares to email support, Intercom/Zendesk, and general-purpose AI chatbots.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#1e293b] border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-5 font-semibold text-gray-700 dark:text-gray-300 w-1/4">Feature</th>
                    <th className="p-5 font-bold text-blue-700 dark:text-blue-400 text-center bg-blue-50 dark:bg-blue-900/20">SpaceHR Chatbot</th>
                    <th className="p-5 font-semibold text-gray-600 dark:text-gray-400 text-center">Email / Ticketing</th>
                    <th className="p-5 font-semibold text-gray-600 dark:text-gray-400 text-center">ChatGPT / General AI</th>
                    <th className="p-5 font-semibold text-gray-600 dark:text-gray-400 text-center">Intercom / Zendesk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ["Response time", "✅ < 5 seconds", "❌ 4–24 hours", "✅ < 5 seconds", "⚠️ Minutes–hours"],
                    ["24/7 availability", "✅ Always on", "❌ Business hours", "✅ Always on", "⚠️ With human backup"],
                    ["Knows your employee data", "✅ Live HRIS sync", "✅ HR knows data", "❌ No access", "❌ No HR data"],
                    ["Policy-accurate answers", "✅ Your policies loaded", "✅ HR knows policies", "❌ Generic answers", "⚠️ Requires setup"],
                    ["Ticket volume reduction", "✅ 70%", "❌ No reduction", "❌ No integration", "⚠️ Partial"],
                    ["Leave / payroll actions", "✅ Built-in", "⚠️ Manual process", "❌ No integration", "❌ No HR actions"],
                    ["Audit log", "✅ Full conversation log", "✅ Email thread", "❌ No log", "✅ Ticket log"],
                    ["Setup time", "✅ 48 hours", "✅ Immediate", "✅ Immediate", "❌ Weeks"],
                    ["HR-specific pricing", "✅ Mid-market SaaS", "✅ Free (HR labor cost)", "⚠️ Per-seat", "❌ Expensive"],
                  ].map(([feature, spacehr, email, gpt, intercom], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0b1121]" : "bg-gray-50/50 dark:bg-[#0f172a]/50"}>
                      <td className="p-5 font-medium text-gray-700 dark:text-gray-300">{feature}</td>
                      <td className="p-5 text-center font-medium text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10">{spacehr}</td>
                      <td className="p-5 text-center text-gray-600 dark:text-gray-400">{email}</td>
                      <td className="p-5 text-center text-gray-600 dark:text-gray-400">{gpt}</td>
                      <td className="p-5 text-center text-gray-600 dark:text-gray-400">{intercom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                HR AI Chatbot — Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Everything HR teams ask before deploying an AI chatbot.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map(({ question, answer }, i) => (
                <details key={i} className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 dark:bg-[#111827] hover:bg-gray-100 dark:hover:bg-[#1a2433] transition-colors list-none">
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{question}</span>
                    <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="p-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed bg-white dark:bg-[#0b1121]">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 bg-gray-50 dark:bg-[#111827] border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Related SpaceHR Features &amp; Solutions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "AI HR Chatbot Feature", href: "/features/ai-chatbots" },
                { label: "Employee Self-Service", href: "/features/employee-self-service" },
                { label: "HR AI Concierge", href: "/features/hr-ai-concierge" },
                { label: "AI Automation", href: "/features/ai-automation" },
                { label: "Leave Management", href: "/features/leave-management" },
                { label: "AI Payroll Auditor", href: "/features/ai-payroll-auditor" },
                { label: "Watch a Demo", href: "/demo" },
                { label: "All Features", href: "/features" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="flex items-center gap-2 p-3 bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Give Every Employee Instant HR Answers.
            </h2>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              Deploy SpaceHR's HR AI chatbot in 48 hours. No coding. No complex integrations. Just instant answers for every employee, 24/7.
            </p>
            <p className="text-base text-blue-200 mb-10">
              Free trial available. Setup in 48 hours. GDPR compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-14 px-10 text-lg bg-white text-blue-700 hover:bg-gray-100 rounded-full font-bold shadow-xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
