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
  FileText,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  TicketCheck,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chatbot for HR Services — Automate HR Operations",
  description:
    "Automate your HR services delivery with an AI chatbot that handles leave, payslips, policies, benefits, and onboarding requests — 24/7, integrated with your existing HR systems.",
  keywords: [
    "chatbot for hr services",
    "hr services chatbot",
    "hr service automation",
    "automated hr services",
    "hr operations chatbot",
    "hr request automation",
    "hr service desk chatbot",
    "employee hr chatbot",
    "ai chatbot for hr department",
    "conversational ai hr",
    "hr chatbot platform",
    "hr service delivery automation",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/chatbot-for-hr-services",
  },
  openGraph: {
    title: "Chatbot for HR Services — Automate HR Operations | Space HR",
    description:
      "Automate HR services delivery: leave, payslips, policies, benefits, and onboarding requests — 24/7 with AI.",
    url: "https://spacehr.net/solutions/chatbot-for-hr-services",
    siteName: "Space HR",
    images: [
      {
        url: "https://spacehr.net/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Chatbot for HR Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbot for HR Services | Space HR",
    description:
      "Automate HR services delivery with AI. Leave, payslips, policies, benefits, onboarding — 24/7.",
    images: ["https://spacehr.net/desktop-design-showcase.webp"],
  },
};

const faqItems = [
  {
    question: "What can a chatbot for HR services do?",
    answer:
      "A chatbot for HR services handles the full range of routine employee HR requests: leave balance checks and PTO submissions, payslip retrieval, tax document access, benefits enrollment queries, onboarding checklist guidance, expense policy lookups, company policy Q&A, and manager approval notifications. Space HR's chatbot handles approximately 85% of all routine HR interactions — leaving HR teams free to focus on complex, high-value work.",
  },
  {
    question: "How is an HR services chatbot different from a regular chatbot?",
    answer:
      "An HR services chatbot is specifically trained on HR workflows, company policies, and employee data. Unlike a general chatbot, it connects directly to your HRMS, payroll system, and policy documents — so it gives personalized, accurate answers based on each employee's actual entitlements and company rules. It can also take actions (book leave, pull payslips) not just answer questions. Space HR's HR chatbot is pre-trained on HR domain knowledge and customised to your specific policies.",
  },
  {
    question: "How much does it cost to deploy a chatbot for HR services?",
    answer:
      "Space HR offers a free trial for teams to test the HR chatbot before committing. Paid plans start from a per-employee-per-month fee based on your company size and modules required. Most customers achieve full ROI within 60 days — a 200-person company typically saves $4,000–$6,000/month in HR staff time from reduced ticket handling alone. Contact Space HR for a customized quote.",
  },
  {
    question: "How long does it take to deploy an HR services chatbot?",
    answer:
      "Space HR deploys in as little as 48 hours for standard configurations. The setup involves connecting your existing HRMS/payroll system, uploading your company policy documents, and configuring escalation rules for complex requests. No coding is required. Enterprise deployments with custom integrations typically take 1–2 weeks, with our onboarding team managing the full process.",
  },
  {
    question: "Will the chatbot integrate with our existing HR systems?",
    answer:
      "Yes. Space HR integrates with all major HR and payroll systems including Workday, BambooHR, ADP, Gusto, Rippling, Sage, and custom HRMS via REST API. Employee data stays in real-time sync so the chatbot always reflects current leave balances, payroll data, and org structure. Single sign-on (SSO) and Microsoft Teams / Slack integration are also supported.",
  },
  {
    question: "Is an HR chatbot secure for sensitive employee data?",
    answer:
      "Space HR uses enterprise-grade security throughout: 256-bit AES encryption at rest, TLS 1.3 in transit, role-based access controls (RBAC) ensuring employees only see their own data, full audit logging of all chatbot interactions, and SOC 2 Type II compliance. MFA is supported. Data residency options are available for US, UK, EU, UAE, and Singapore requirements.",
  },
  {
    question: "What happens when the chatbot can't answer a question?",
    answer:
      "Space HR's HR chatbot automatically escalates to a human HR team member when a query is outside its configured scope or requires human judgment. The escalation includes the full conversation context so the HR agent doesn't need to ask the employee to repeat themselves. The HR team reviews a clean ticket queue — not a flood of repetitive emails.",
  },
  {
    question: "Can the chatbot handle multiple languages for global HR teams?",
    answer:
      "Yes. Space HR's chatbot for HR services supports 40+ languages including English, Arabic, French, Spanish, German, Mandarin, Hindi, and more. Region-specific HR rules — UAE WPS compliance, Singapore CPF, US multi-state tax, UK statutory leave — are automatically applied based on each employee's location. Perfect for multinational organizations with diverse workforces.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions/hr-admin" },
  {
    name: "Chatbot for HR Services",
    url: "https://spacehr.net/solutions/chatbot-for-hr-services",
  },
];

const hrServices = [
  {
    icon: Clock,
    service: "Leave & PTO Management",
    manual: "Employee emails HR → HR checks system → replies → updates calendar",
    automated: "Employee asks chatbot → chatbot checks real-time balance → submits request → notifies manager",
    saving: "45 min → 90 seconds",
  },
  {
    icon: DollarSign,
    service: "Payslip & Payroll Queries",
    manual: "Employee emails payroll → 1–3 day wait → HR manually pulls payslip → sends via email",
    automated: "Employee asks chatbot → instant payslip download link → available 24/7 in any browser",
    saving: "1–3 days → instant",
  },
  {
    icon: FileText,
    service: "Policy Questions",
    manual: "Employee emails HR → HR searches handbook → writes reply → employee may ask follow-up",
    automated: "Employee asks chatbot → AI retrieves exact policy section → personalized answer in < 3 seconds",
    saving: "30–60 min → 3 seconds",
  },
  {
    icon: Users,
    service: "Onboarding Documentation",
    manual: "HR sends emails one by one → chases incomplete forms → manually tracks status in spreadsheet",
    automated: "Chatbot guides new hire through checklist → sends reminders automatically → HR sees completion dashboard",
    saving: "5 hours → 45 minutes per hire",
  },
  {
    icon: Shield,
    service: "Benefits & Enrollment",
    manual: "Employee calls HR or submits ticket → HR answers same questions repeatedly each enrollment period",
    automated: "Chatbot explains plan options → links to enrollment form → sends confirmation → HR reviews exceptions only",
    saving: "2–4 hours/employee → self-service",
  },
  {
    icon: TicketCheck,
    service: "IT + HR Service Requests",
    manual: "Employee submits ticket → routed to HR → HR triages and responds → often bounced between departments",
    automated: "Chatbot identifies request type → routes to correct team instantly → tracks status → notifies employee on resolution",
    saving: "24–48 hr response → same-day",
  },
];

const deploymentSteps = [
  {
    step: "1",
    title: "Connect Your HR Data Sources",
    desc: "Space HR integrates with your HRMS, payroll system, and document storage. Employee records, leave entitlements, and org structure stay in real-time sync. Setup takes 30–90 minutes for standard integrations.",
    icon: Zap,
  },
  {
    step: "2",
    title: "Upload & Train on Your HR Policies",
    desc: "Upload your employee handbook, leave policy, benefits guide, and compliance documents. Space HR's AI indexes and learns your specific policies — employees get answers based on your actual rules, not generic defaults.",
    icon: FileText,
  },
  {
    step: "3",
    title: "Configure Channels & Escalation Rules",
    desc: "Deploy via web widget, Microsoft Teams, Slack, or mobile app. Set escalation rules so complex queries route to the right HR team member with full context. Configure working hours, auto-replies, and SLA targets.",
    icon: Globe,
  },
  {
    step: "4",
    title: "Go Live — Employees Self-Serve Instantly",
    desc: "Employees start getting instant answers in their preferred channel. Leave requests flow automatically. HR reviews a clean dashboard of escalations and approvals — not individual queries.",
    icon: MessageSquare,
  },
  {
    step: "5",
    title: "Monitor, Optimise, Expand",
    desc: "Space HR provides weekly reports on resolution rates, unanswered queries, and ticket trends. Use insights to improve policy documentation, add new workflows, and continuously reduce HR workload.",
    icon: TrendingDown,
  },
];

export default function ChatbotForHRServicesPage() {
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
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
              </li>
              <ChevronRight className="w-3 h-3" />
              <li>
                <a href="/solutions/hr-admin" className="hover:text-blue-600 dark:hover:text-blue-400">Solutions</a>
              </li>
              <ChevronRight className="w-3 h-3" />
              <li className="text-gray-900 dark:text-white font-medium">Chatbot for HR Services</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
                  <Bot className="w-4 h-4" />
                  HR Services Automation
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Automate HR Service Delivery{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">End to End</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Space HR&apos;s chatbot for HR services handles the full request lifecycle —
                  leave, payslips, policies, benefits, onboarding, and IT routing — without
                  manual HR intervention. HR operations teams reduce repetitive work and
                  deliver faster service. Deployment takes <strong>48 hours</strong>.
                </p>

                {/* Key stats inline */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { val: "85%", label: "requests automated" },
                    { val: "70%", label: "fewer HR tickets" },
                    { val: "48 hrs", label: "to go live" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-indigo-100 dark:border-indigo-900 shadow-sm"
                    >
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{s.val}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="/request-a-demo"
                    className="inline-flex items-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    Book a Free Demo <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/features/ai-chatbots"
                    className="inline-flex items-center h-11 rounded-md px-8 text-sm font-medium border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                  >
                    See All Chatbot Features
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No coding required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    SOC 2 Type II compliant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    40+ languages
                  </span>
                </div>
              </div>

              {/* Chat interface mockup */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Space HR HR Services Bot</div>
                    <div className="text-indigo-200 text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Online · Avg response 2.8 seconds
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3 bg-gray-50 dark:bg-gray-800/50 min-h-[320px]">
                  {[
                    { from: "bot", text: "Hi Sarah 👋 How can I help you with HR services today?" },
                    { from: "user", text: "I need to take 3 days off next week for a family emergency" },
                    { from: "bot", text: "Of course. You currently have 12 annual leave days remaining. I've pre-filled a leave request for Mon–Wed (Apr 20–22). Shall I submit this for manager approval?" },
                    { from: "user", text: "Yes please, and can I get my last payslip too?" },
                    { from: "bot", text: "✅ Leave request submitted — your manager will be notified. Here's your March 2026 payslip: [Download PDF]. Is there anything else?" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                          msg.from === "user"
                            ? "bg-indigo-600 text-white rounded-br-sm"
                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-100 dark:border-gray-600"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-full px-4 py-2.5">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400">Ask about leave, payslips, policies...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What HR services section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Does a Chatbot for HR Services Actually Do?
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                A <strong>chatbot for HR services</strong> is a conversational AI tool that
                sits between employees and the HR department — handling the high-volume,
                repetitive requests that consume HR teams&apos; time, so humans can focus
                on decisions that actually require human judgment.
              </p>
              <p>
                Most HR departments receive hundreds of similar requests every month:
                &quot;What&apos;s my leave balance?&quot;, &quot;Can I get my payslip?&quot;,
                &quot;What&apos;s the remote work policy?&quot;, &quot;How do I enroll in the dental plan?&quot;
                These questions take 10–30 minutes each to answer manually — but a
                well-configured HR chatbot answers them in under 3 seconds, 24 hours a day.
              </p>
              <p>
                Space HR&apos;s chatbot goes beyond answering questions. It takes action: submitting
                leave requests, pulling payslips, routing approvals, sending onboarding checklists,
                and escalating complex cases to the right HR person with full context. It&apos;s
                not a FAQ page with a chat interface — it&apos;s a full HR service automation layer.
              </p>
              <p>
                The business impact is measurable. According to SHRM data, the average cost to
                process a single HR service request manually is <strong>$4.51</strong>. For a
                200-person company handling 200 requests/month, that&apos;s $900/month minimum —
                before factoring in the opportunity cost of HR talent working on admin instead of
                retention, culture, or talent development. Space HR customers reduce that cost by
                70–85% within 90 days of deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After HR Services Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                6 HR Services Transformed by Chatbot Automation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See exactly how Space HR replaces manual HR service delivery with instant,
                automated responses across the most common employee request types.
              </p>
            </div>
            <div className="space-y-4">
              {hrServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="grid md:grid-cols-[200px_1fr_1fr_140px] divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
                      {/* Service label */}
                      <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 dark:bg-gray-700/50">
                        <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{svc.service}</span>
                      </div>
                      {/* Manual */}
                      <div className="px-5 py-4">
                        <div className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1.5">❌ Without chatbot</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{svc.manual}</p>
                      </div>
                      {/* Automated */}
                      <div className="px-5 py-4">
                        <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-1.5">✅ With Space HR chatbot</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{svc.automated}</p>
                      </div>
                      {/* Saving */}
                      <div className="flex items-center justify-center px-5 py-4 bg-green-50 dark:bg-green-900/10">
                        <div className="text-center">
                          <div className="text-sm font-bold text-green-700 dark:text-green-400">{svc.saving}</div>
                          <div className="text-xs text-green-600 dark:text-green-500 mt-0.5">time saved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deployment steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Deploy Your HR Services Chatbot in 5 Steps
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From contract signed to employees self-serving — in as little as 48 hours.
              </p>
            </div>
            <div className="space-y-8">
              {deploymentSteps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {i < deploymentSteps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-indigo-200 dark:bg-indigo-800 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI snapshot */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 dark:bg-indigo-700">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                The ROI of a Chatbot for HR Services
              </h2>
              <p className="text-indigo-100 text-lg">
                Real numbers from Space HR customers. Typical 200-person company, 90 days post-deployment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { metric: "Monthly HR tickets", before: "180–220", after: "30–45", change: "−75%" },
                { metric: "Avg query resolution time", before: "4–24 hours", after: "< 3 seconds", change: "−99%" },
                { metric: "HR admin hours/week", before: "18–22 hrs", after: "3–4 hrs", change: "−80%" },
                { metric: "Payroll query calls", before: "40–60/month", after: "8–12/month", change: "−75%" },
                { metric: "New hire onboarding time", before: "5–6 hrs/hire", after: "45 min/hire", change: "−85%" },
                { metric: "Monthly cost of HR admin", before: "$3,800–$5,200", after: "$600–$900", change: "Save ~$4,000/mo" },
              ].map((row) => (
                <div
                  key={row.metric}
                  className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20"
                >
                  <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-3">
                    {row.metric}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-indigo-300 mb-1">Before</div>
                      <div className="text-white font-medium text-sm">{row.before}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-indigo-300" />
                    <div>
                      <div className="text-xs text-green-300 mb-1">After Space HR</div>
                      <div className="text-white font-bold text-sm">{row.after}</div>
                    </div>
                  </div>
                  <div className="mt-3 bg-white/10 rounded-lg px-3 py-1.5 text-center">
                    <span className="text-green-300 font-bold text-sm">{row.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Employees Access HR Services Anywhere
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Space HR&apos;s chatbot meets employees in the tools they already use — no new app to install.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { name: "Microsoft Teams", icon: "💬", desc: "Native Teams integration — employees chat from their daily workspace" },
                { name: "Slack", icon: "⚡", desc: "Full Slack bot — respond to HR queries without leaving Slack" },
                { name: "Web Portal", icon: "🌐", desc: "Responsive self-service portal accessible from any browser or device" },
                { name: "Mobile App", icon: "📱", desc: "iOS and Android app for employees on the go" },
              ].map((ch) => (
                <div
                  key={ch.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="text-4xl mb-3">{ch.icon}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm mb-2">{ch.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{ch.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Chatbot for HR Services: Frequently Asked Questions
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

        {/* Internal links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Related Space HR Solutions & Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/features/ai-chatbots", label: "AI HR Chatbot Features" },
                { href: "/solutions/hr-ai-chatbot", label: "HR AI Chatbot Platform" },
                { href: "/solutions/employee-self-service", label: "Employee Self-Service Portal" },
                { href: "/features/ai-automation", label: "HR Automation" },
                { href: "/features/leave-management", label: "Leave Management" },
                { href: "/features/employee-self-service", label: "ESS Features" },
                { href: "/features/payroll", label: "Payroll Self-Service" },
                { href: "/features/hr-ai-concierge", label: "HR AI Concierge" },
                { href: "/tools/true-cost-calculator", label: "HR Cost Calculator" },
                { href: "/compare/bamboohr", label: "Space HR vs BambooHR" },
                { href: "/compare/workday", label: "Space HR vs Workday" },
                { href: "/blogs", label: "HR Automation Blog" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your HR Services?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of HR teams using Space HR to eliminate repetitive queries,
              reduce ticket volume by 70%, and give employees instant 24/7 HR service.
              Deploy in 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-a-demo"
                className="inline-flex items-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/features/ai-chatbots"
                className="inline-flex items-center h-11 rounded-md px-8 text-sm font-medium border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors"
              >
                Explore All Features
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              No credit card · Setup in 48 hrs · SOC 2 Type II
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
