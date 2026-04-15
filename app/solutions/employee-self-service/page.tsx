import { Metadata } from "next";


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
  Clock,
  DollarSign,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import ROICalculator from "./ROICalculator";

export const metadata: Metadata = {
  title: "Employee Self-Service Portal — 24/7 HR Automation | SpaceHR",
  description:
    "Give employees instant 24/7 access to payslips, leave requests, policy answers, and benefits — without HR intervention. SpaceHR's self-service portal cuts HR admin by 80%. Setup in 48 hours.",
  keywords: [
    "employee self-service",
    "employee self service portal",
    "hr self service",
    "employee self service software",
    "hr self service portal",
    "employee portal hr",
    "hr automation software",
    "24/7 hr support",
    "employee self service chatbot",
    "hr portal for employees",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/employee-self-service",
  },
  openGraph: {
    title: "Employee Self-Service Portal — 24/7 HR Automation | SpaceHR",
    description:
      "Employees get instant answers about leave, payroll, and benefits 24/7. No HR tickets, no waiting. SpaceHR's self-service portal — setup in 48 hours.",
    url: "https://spacehr.net/solutions/employee-self-service",
    siteName: "SpaceHR",
    images: [
      {
        url: "https://spacehr.net/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "SpaceHR Employee Self-Service Portal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Self-Service Portal — 24/7 HR Automation | SpaceHR",
    description:
      "Give employees instant 24/7 access to payslips, leave, policies & benefits. Cut HR tickets by 70%. Setup in 48 hours.",
    images: ["https://spacehr.net/desktop-design-showcase.webp"],
  },
};

const faqItems = [
  {
    question: "What is an employee self-service portal?",
    answer:
      "An employee self-service (ESS) portal is a secure online platform that lets employees independently access and manage their HR information — payslips, leave balances, personal details, tax forms, and policy documents — without needing to contact HR directly. SpaceHR's ESS portal adds an AI chatbot layer so employees can ask questions in natural language, 24/7.",
  },
  {
    question: "How much time does self-service save HR teams?",
    answer:
      "SpaceHR customers report an average 80% reduction in routine HR tickets within 90 days of deployment. A typical HR manager spends 15–20 hours per week answering repetitive employee questions. With SpaceHR's self-service, that drops to under 3 hours — freeing the rest for strategic work.",
  },
  {
    question: "Can employees access the portal on mobile?",
    answer:
      "Yes. SpaceHR's self-service portal is fully responsive and works on any device — desktop, tablet, or smartphone. Employees can submit leave requests, check payslips, or ask policy questions from anywhere, at any time.",
  },
  {
    question: "Does SpaceHR integrate with our existing HRMS or payroll system?",
    answer:
      "SpaceHR integrates with major HRMS and payroll systems including Workday, BambooHR, ADP, Gusto, Rippling, and custom setups via API. Employee data stays in sync automatically so the self-service portal always reflects real-time information.",
  },
  {
    question: "How secure is employee self-service data?",
    answer:
      "SpaceHR uses enterprise-grade security: 256-bit AES encryption at rest, TLS 1.3 in transit, role-based access controls (RBAC), MFA support, and SOC 2 Type II compliance. Employees only ever see their own data.",
  },
  {
    question: "What types of requests can employees handle themselves?",
    answer:
      "Employees can independently handle: leave requests and approvals, payslip downloads, tax form access (W-2, W-4, P60), benefits enrollment and changes, personal detail updates, onboarding document submission, expense claims, and policy Q&A via AI chatbot — covering ~85% of all routine HR interactions.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "SpaceHR deploys in as little as 48 hours for standard setups. Enterprise deployments with custom integrations typically take 1–2 weeks. Our onboarding team handles data migration, configuration, and staff training.",
  },
  {
    question: "What ROI can we expect from employee self-service?",
    answer:
      "Typical SpaceHR customers see ROI within 60 days. For a 200-person company, automated self-service saves approximately $4,200/month in HR staff time, reduces payroll query handling by 75%, and cuts onboarding admin time by 60%. Use our ROI calculator on this page to estimate your specific savings.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions/hr-admin" },
  {
    name: "Employee Self-Service",
    url: "https://spacehr.net/solutions/employee-self-service",
  },
];

const capabilities = [
  {
    icon: Clock,
    title: "24/7 Instant Access",
    description:
      "Employees get answers and complete requests at 2am or 2pm — no waiting for HR business hours. Our AI chatbot handles policy questions, leave queries, and payslip requests around the clock.",
    stat: "24/7",
    statLabel: "availability",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Q&A",
    description:
      "Natural language AI understands employee questions like \u201cHow many sick days do I have left?\u201d or \u201cWhat\u2019s the parental leave policy?\u201d \u2014 and responds with accurate, personalized answers instantly.",
    stat: "< 3 sec",
    statLabel: "avg response",
  },
  {
    icon: LayoutDashboard,
    title: "Personal HR Dashboard",
    description:
      "Each employee gets a personalized dashboard showing leave balances, upcoming paydays, open tasks, enrolled benefits, and recent payslips — all in one place.",
    stat: "100%",
    statLabel: "personalized",
  },
  {
    icon: DollarSign,
    title: "Payslip & Tax Self-Service",
    description:
      "Employees download payslips, W-2s, P60s, and tax documents on demand. No more HR emails for basic payroll queries — the most common source of HR tickets, eliminated.",
    stat: "75%",
    statLabel: "fewer payroll queries",
  },
  {
    icon: Shield,
    title: "Policy & Compliance Hub",
    description:
      "Upload your employee handbook, compliance policies, and HR procedures. The AI surfaces the right policy instantly — reducing compliance risk and keeping employees informed.",
    stat: "100%",
    statLabel: "policy coverage",
  },
  {
    icon: Globe,
    title: "Multi-Language, Multi-Region",
    description:
      "Support a global workforce in 40+ languages. Region-specific rules for leave, payroll, and compliance are automatically applied per employee location — US, UK, UAE, Singapore, Canada, Europe.",
    stat: "40+",
    statLabel: "languages",
  },
];

const useCases = [
  {
    title: "Leave Request Automation",
    role: "Employee",
    icon: Clock,
    problem:
      "Employees email HR to check leave balances, then submit requests via email or paper forms. HR manually checks entitlements, emails back approvals, and updates spreadsheets.",
    solution:
      "Employee opens SpaceHR, sees real-time leave balance, submits request in one click. Manager gets instant notification, approves in one click. Employee gets immediate confirmation. HR has zero involvement.",
    result: "Leave admin time reduced from 45 min to 2 min per request",
    color: "blue",
  },
  {
    title: "Payslip & Payroll Queries",
    role: "Finance + HR",
    icon: DollarSign,
    problem:
      "Payroll queries are the #1 HR ticket type. Employees ask: 'Where's my payslip?', 'Why did my net pay change?', 'Can I get my last 6 payslips for a mortgage application?'",
    solution:
      "SpaceHR's self-service portal gives every employee instant access to their full payslip history, downloadable PDFs, and an AI chatbot that explains deductions and net pay changes in plain language.",
    result: "75% reduction in payroll-related HR tickets within 30 days",
    color: "green",
  },
  {
    title: "Onboarding Document Collection",
    role: "HR + New Hires",
    icon: Users,
    problem:
      "HR chases new hires for contracts, ID documents, bank details, and tax forms via email chains. Average onboarding admin: 4–6 hours per new hire for HR coordinators.",
    solution:
      "New hires complete a self-guided digital onboarding checklist. SpaceHR auto-sends reminders, tracks completion, and stores documents securely — HR reviews a complete package, not scattered emails.",
    result: "Onboarding admin reduced from 5 hours to 45 minutes per hire",
    color: "purple",
  },
  {
    title: "Policy & Compliance Questions",
    role: "All Employees",
    icon: Shield,
    problem:
      "HR spends hours weekly answering the same questions: 'How much notice do I need for leave?', 'What's the expense claim limit?', 'Am I entitled to parental leave?'",
    solution:
      "SpaceHR's AI chatbot is trained on your exact HR policies and employee handbook. It answers any policy question accurately, 24/7, and cites the relevant policy section — so employees trust the answer.",
    result: "Policy Q&A: zero HR involvement for 85% of questions",
    color: "orange",
  },
];

const automationStats = [
  { value: "80%", label: "Reduction in routine HR tickets" },
  { value: "24/7", label: "Employee access — no business hours" },
  { value: "48 hrs", label: "Average deployment time" },
  { value: "85%", label: "Of HR requests handled automatically" },
  { value: "60 days", label: "Typical payback period" },
  { value: "40+", label: "Languages supported" },
];

export default function EmployeeSelfServicePage() {
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Home
                </a>
              </li>
              <ChevronRight className="w-3 h-3" />
              <li>
                <a
                  href="/solutions/hr-admin"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Solutions
                </a>
              </li>
              <ChevronRight className="w-3 h-3" />
              <li className="text-gray-900 dark:text-white font-medium">
                Employee Self-Service
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  24/7 Employee Self-Service
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Give Employees the Answers They Need —{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Without Involving HR
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  SpaceHR&apos;s employee self-service portal lets staff check leave
                  balances, download payslips, ask policy questions, and complete
                  HR tasks — instantly, 24/7. HR teams reduce ticket volume by{" "}
                  <strong>80%</strong>. Employees get answers in seconds, not
                  days.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="/request-a-demo" className="inline-flex items-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Book a Free Demo <ArrowRight className="w-4 h-4" /></a>
                  <a href="#roi-calculator" className="inline-flex items-center h-11 rounded-md px-8 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">Calculate Your ROI</a>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Setup in 48 hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    SOC 2 Type II compliant
                  </span>
                </div>
              </div>

              {/* Portal UI Mockup */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4 flex items-center gap-3">
                  <Bot className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-white font-semibold text-sm">SpaceHR Self-Service</div>
                    <div className="text-blue-200 text-xs">Always online · Instant answers</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-xs">Live</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 grid grid-cols-2 gap-3">
                    {[
                      { label: "Leave Balance", value: "14 days", icon: "🏖️" },
                      { label: "Next Payday", value: "Apr 30", icon: "💰" },
                      { label: "Open Tasks", value: "2 items", icon: "✅" },
                      { label: "Benefits", value: "Enrolled", icon: "🏥" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center shadow-sm"
                      >
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { from: "employee", text: "How many sick days do I have left?" },
                      { from: "ai", text: "You have 8 sick days remaining this year (policy allows 10). Your last sick day was March 3rd." },
                      { from: "employee", text: "Can you send me my last 3 payslips?" },
                      { from: "ai", text: "Of course! Here are your payslips: Feb 2026, Jan 2026, Dec 2025. All available as PDF downloads." },
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.from === "employee" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                            msg.from === "employee"
                              ? "bg-blue-600 text-white rounded-br-sm"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-blue-600 dark:bg-blue-700 py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {automationStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is ESS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Is Employee Self-Service — And Why Does It Matter in 2025?
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Employee self-service (ESS) is a digital system that empowers employees
                to handle their own HR administration — without contacting the HR department
                for every routine request. Instead of emailing HR to check their leave
                balance or waiting days for a payslip, employees log in and get what they
                need instantly.
              </p>
              <p>
                Modern ESS platforms go beyond static portals. SpaceHR combines a full HR
                self-service portal with an AI-powered chatbot that understands natural
                language questions. An employee can ask &quot;Am I eligible for parental leave?&quot;
                and get an accurate, policy-specific answer in seconds — at midnight on a
                Sunday, if needed.
              </p>
              <p>
                The business case is compelling: according to SHRM, HR professionals spend
                up to <strong>60% of their time on administrative tasks</strong> that could
                be automated. The average cost to process a single HR service request
                manually is <strong>$4.51</strong>. Multiply that by hundreds of requests
                per month, and the savings from self-service become significant quickly.
              </p>
              <p>
                For growing companies (50–1,000 employees), ESS is the highest-ROI HR
                investment available. You don&apos;t need to hire another HR coordinator —
                you need to stop routing routine tasks through humans at all.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Everything Employees Need, Available 24/7
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                SpaceHR&apos;s self-service portal covers every routine HR interaction —
                from leave requests to policy questions — without HR involvement.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                          {cap.title}
                        </h3>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                          {cap.stat} {cap.statLabel}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                4 High-Impact HR Automations That Pay Back in Weeks
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These are the most common HR workflows SpaceHR automates — and where
                customers see the fastest ROI.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div
                    key={uc.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-bold text-white">{uc.title}</h3>
                      </div>
                      <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {uc.role}
                      </span>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">
                          ❌ Current Problem
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{uc.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                          ✅ SpaceHR Solution
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{uc.solution}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-3 border border-green-200 dark:border-green-800">
                        <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                          📈 Result
                        </div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">
                          {uc.result}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section
          id="roi-calculator"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Calculate Your HR Self-Service ROI
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Adjust the sliders to see your estimated monthly savings from
                deploying SpaceHR&apos;s employee self-service portal.
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                How SpaceHR Self-Service Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From first login to fully automated HR in 48 hours.
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Connect Your HR Data",
                  description:
                    "SpaceHR integrates with your existing HRMS, payroll system, and policy documents in under 2 hours. We support Workday, BambooHR, ADP, Gusto, and custom APIs. Your data stays in sync automatically.",
                  icon: Zap,
                },
                {
                  step: "2",
                  title: "Configure Your Self-Service Portal",
                  description:
                    "Our onboarding team customises the portal with your company branding, leave policies, org structure, and document templates. The AI is trained on your specific HR policies — not generic content.",
                  icon: LayoutDashboard,
                },
                {
                  step: "3",
                  title: "Employees Access 24/7 via Any Device",
                  description:
                    "Employees log in via SSO, Microsoft Teams, Slack, or the SpaceHR app. They can check balances, submit requests, ask policy questions, and download documents — instantly, from anywhere.",
                  icon: Globe,
                },
                {
                  step: "4",
                  title: "HR Monitors, Reviews Exceptions Only",
                  description:
                    "HR reviews a clean dashboard of approvals, exceptions, and analytics — not a flood of routine questions. SpaceHR handles 85% of requests automatically; HR focuses only on what needs human judgment.",
                  icon: TrendingUp,
                },
                {
                  step: "5",
                  title: "Continuous Improvement via AI Learning",
                  description:
                    "SpaceHR's AI learns from every interaction. New policies are automatically reflected. Unanswered questions flag gaps in your HR documentation. Monthly reports show resolution rates and ticket trends.",
                  icon: Sparkles,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {i < 4 && (
                        <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-800 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              SpaceHR vs. Traditional HR Self-Service Options
            </h2>
            <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <table className="w-full bg-white dark:bg-gray-800 text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-bold">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-blue-600 dark:text-blue-400 font-bold">
                      SpaceHR
                    </th>
                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-semibold">
                      Basic HRMS Portal
                    </th>
                    <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-semibold">
                      Email / Intranet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {[
                    ["24/7 AI chatbot (natural language)", "✅", "❌", "❌"],
                    ["Leave self-service with real-time balance", "✅", "✅", "❌"],
                    ["Payslip & tax doc self-download", "✅", "✅", "❌"],
                    ["Policy Q&A (AI-trained on your docs)", "✅", "❌", "❌"],
                    ["Multi-language support (40+ languages)", "✅", "Partial", "❌"],
                    ["Mobile-first responsive design", "✅", "Partial", "❌"],
                    ["HRMS/payroll system integrations", "✅ (20+ systems)", "Limited", "❌"],
                    ["Automated onboarding workflows", "✅", "❌", "❌"],
                    ["HR analytics & ticket volume reports", "✅", "Basic", "❌"],
                    ["Deployment time", "48 hours", "2–4 weeks", "N/A"],
                    ["ROI payback period", "60 days", "6–12 months", "Never"],
                  ].map(([feature, spacehr, hrms, email]) => (
                    <tr
                      key={feature}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </td>
                      <td className="px-6 py-4 text-center text-blue-600 dark:text-blue-400 font-semibold">
                        {spacehr}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                        {hrms}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                        {email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Employee Self-Service: Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Explore More SpaceHR Solutions & Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/solutions/hr-ai-chatbot", label: "HR AI Chatbot" },
                { href: "/solutions/chatbot-for-hr-services", label: "Chatbot for HR Services" },
                { href: "/features/ai-chatbots", label: "AI Chatbot Features" },
                { href: "/features/leave-management", label: "Leave Management" },
                { href: "/features/payroll", label: "Payroll Self-Service" },
                { href: "/features/employee-self-service", label: "ESS Feature Deep-Dive" },
                { href: "/features/ai-automation", label: "HR Automation" },
                { href: "/features/cost-prediction", label: "Labor Cost Forecasting" },
                { href: "/features/attrition-prediction", label: "Attrition Prediction" },
                { href: "/tools/true-cost-calculator", label: "True Cost Calculator" },
                { href: "/compare/bamboohr", label: "SpaceHR vs BambooHR" },
                { href: "/compare/workday", label: "SpaceHR vs Workday" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stop Answering Repetitive HR Questions
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Deploy SpaceHR&apos;s employee self-service portal in 48 hours. Give your
              team 24/7 instant access to everything they need — and give your HR
              team their time back.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/request-a-demo" className="inline-flex items-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-white text-blue-600 hover:bg-blue-50 transition-colors">Book a Free Demo <ArrowRight className="w-4 h-4" /></a>
              <a href="#roi-calculator" className="inline-flex items-center h-11 rounded-md px-8 text-sm font-medium border border-white text-white hover:bg-white/10 transition-colors">Calculate ROI First</a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              No credit card · Setup in 48 hrs · SOC 2 Type II compliant
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
