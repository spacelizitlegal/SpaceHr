import { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/components/JsonLd";
import { howToSchemas } from "@/lib/howToSchemas";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
  AlertTriangle,
  BarChart3,
  Globe,
  Lock,
  Star,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Chatbot Buyer's Guide 2026: How to Choose the Right Platform",
  description:
    "The complete HR chatbot buyer's guide — 10 must-have features, evaluation framework, pricing benchmarks, implementation checklist, and the 7 red flags to watch for. Updated for 2026.",
  keywords: [
    "hr chatbot buyers guide",
    "best hr chatbot",
    "hr chatbot comparison",
    "hr chatbot evaluation",
    "how to choose hr chatbot",
    "hr chatbot features",
    "hr chatbot pricing",
    "ai hr chatbot",
    "employee self-service chatbot",
    "hr helpdesk chatbot",
    "chatbot for hr services",
    "hr virtual assistant",
  ],
  alternates: {
    canonical: "https://spacehr.net/resources/hr-chatbot-buyers-guide",
  },
  openGraph: {
    title: "HR Chatbot Buyer's Guide 2026 | SpaceHR",
    description:
      "Everything HR teams need to evaluate, select, and deploy an HR chatbot — features, pricing, red flags, and an implementation checklist.",
    url: "https://spacehr.net/resources/hr-chatbot-buyers-guide",
    siteName: "SpaceHR",
    type: "article",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "HR Chatbot Buyer's Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Chatbot Buyer's Guide 2026",
    description:
      "The complete framework for choosing an HR chatbot — features, pricing benchmarks, red flags, and implementation checklist.",
  },
};

const faqItems = [
  {
    question: "What is an HR chatbot and how does it work?",
    answer:
      "An HR chatbot is an AI-powered virtual assistant that handles employee HR queries automatically — answering questions about leave balances, payslips, company policies, benefits, and onboarding without requiring HR team involvement. Modern HR chatbots use large language models (LLMs) trained on your HR policies and HRIS data to generate accurate, context-aware responses in real time. They integrate with your HRIS, payroll system, and communication tools like Slack or Microsoft Teams.",
  },
  {
    question: "How much does an HR chatbot cost?",
    answer:
      "HR chatbot pricing typically ranges from $3–$8 per employee per month for mid-market platforms, or $15,000–$60,000 per year for enterprise solutions with deep integrations. Most vendors charge based on employee headcount, active users, or a flat platform fee. Avoid vendors who charge per conversation — costs can spiral unpredictably. Always calculate total cost of ownership including implementation, integration, and annual support fees.",
  },
  {
    question: "How long does it take to implement an HR chatbot?",
    answer:
      "Implementation time ranges from 48 hours for SaaS platforms with pre-built HRIS connectors, to 3–6 months for enterprise solutions requiring custom integrations and policy training. The biggest variable is data readiness — if your HR policies are documented and your HRIS data is clean, deployment is much faster. SpaceHR's AI HR Concierge can be live in 48 hours with standard HRIS integrations.",
  },
  {
    question: "What HR queries can a chatbot handle?",
    answer:
      "A well-implemented HR chatbot can handle 60–80% of all HR queries including: leave balance inquiries, leave requests and approvals, payslip retrieval, payroll queries, company policy questions, benefits enrollment guidance, onboarding checklists, IT/access requests, expense submission guidance, performance review deadlines, and general HR process navigation. Complex cases involving conflict resolution, disciplinary matters, or sensitive medical situations should always route to a human HR professional.",
  },
  {
    question: "What's the difference between an HR chatbot and an HR virtual assistant?",
    answer:
      "The terms are often used interchangeably, but there's a useful distinction: an HR chatbot typically handles Q&A and simple task completion (looking up a leave balance, retrieving a document). An HR virtual assistant or AI HR Concierge handles more complex multi-step workflows — processing a leave request end-to-end, initiating an onboarding sequence, or routing a complex query to the right HR team member with full context. Enterprise deployments increasingly require virtual assistant capabilities, not just chatbot Q&A.",
  },
  {
    question: "How do I measure the ROI of an HR chatbot?",
    answer:
      "Calculate ROI across three dimensions: (1) Time savings — multiply average HR query resolution time (typically 8–15 minutes per ticket) by ticket volume reduction (aim for 60–70%) by HR hourly cost. (2) Employee productivity — every minute an employee spends waiting for an HR answer is lost productivity; 24/7 instant resolution has measurable impact. (3) HR team reallocation — hours freed from repetitive queries invested in strategic work. Most organizations see payback within 6–9 months.",
  },
  {
    question: "What integrations should an HR chatbot have?",
    answer:
      "Essential integrations: HRIS (your core system of record), payroll system, active directory / identity provider (SSO), communication platform (Slack, Teams, or web widget). Important integrations: ticketing/helpdesk system (ServiceNow, Jira), document management (SharePoint, Confluence), benefits administration platform. Nice-to-have: LMS, performance management system, expense management. Prioritize depth of integration over breadth — a shallow integration with Workday is worse than a deep integration with a simpler HRIS.",
  },
  {
    question: "How do I ensure employee data security with an HR chatbot?",
    answer:
      "Require SOC 2 Type II certification as a minimum. Also verify: data encryption at rest and in transit (AES-256 and TLS 1.3), role-based access controls (employees should only see their own data), audit logging of all queries and responses, data residency options if you operate in GDPR jurisdictions, and a clear data retention and deletion policy. Ask for the vendor's most recent penetration test report and incident response procedures.",
  },
  {
    question: "What are the most common HR chatbot implementation mistakes?",
    answer:
      "The 5 most common mistakes: (1) Going live before HR policies are fully documented — the chatbot will give inconsistent answers. (2) Launching without an employee communication plan — adoption will be poor. (3) Not defining escalation rules — when should the bot hand off to a human? (4) Ignoring manager use cases — managers have different HR needs than employees. (5) Treating implementation as an IT project — HR must own it. Change management, not technology, is what determines success.",
  },
  {
    question: "Should I build or buy an HR chatbot?",
    answer:
      "Build only if you have a very specific use case that no vendor addresses, a dedicated AI engineering team, and 12+ months to spare. For 99% of HR teams, buying is the right answer. Modern HR chatbot platforms have pre-built HRIS connectors, HR-specific training data, and compliance features that would take years to replicate. The total cost of a custom-built solution almost always exceeds SaaS TCO when you include engineering time, maintenance, and opportunity cost.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Resources", url: "https://spacehr.net/resources" },
  { name: "HR Chatbot Buyer's Guide", url: "https://spacehr.net/resources/hr-chatbot-buyers-guide" },
];

const articleSchema = generateArticleSchema({
  title: "HR Chatbot Buyer's Guide 2026: How to Choose the Right Platform",
  description:
    "The complete HR chatbot buyer's guide — 10 must-have features, evaluation framework, pricing benchmarks, implementation checklist, and 7 red flags. Updated for 2026.",
  url: "https://spacehr.net/resources/hr-chatbot-buyers-guide",
  image: "https://spacehr.net/desktop-design-showcase.webp",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
});

const mustHaveFeatures = [
  {
    icon: MessageSquare,
    title: "Natural Language Understanding (NLU)",
    description:
      "The chatbot must understand intent, not just keywords. An employee asking 'how many days off do I have left' and 'what's my leave balance' mean the same thing — the system needs to recognize both.",
  },
  {
    icon: Zap,
    title: "Live HRIS Integration",
    description:
      "Real-time data sync with your HRIS is non-negotiable. A chatbot that answers leave balance queries from a data cache that's 24 hours old will erode employee trust immediately.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Employees should see their own data. Managers should see their team's data. HR admins should see relevant aggregates. Every chatbot must enforce these boundaries at the query level.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Compliance",
    description:
      "HR data is sensitive. Any chatbot handling employee PII, payroll data, or medical leave information must be SOC 2 Type II certified at minimum. GDPR compliance is mandatory for EU operations.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Deployment",
    description:
      "Employees work in Slack, Teams, email, and on mobile. The chatbot must meet employees where they are — not require them to open a separate portal to ask an HR question.",
  },
  {
    icon: ArrowRight,
    title: "Intelligent Escalation",
    description:
      "When the bot can't confidently answer, it must escalate gracefully — routing to the right HR team member with full conversation context, not dropping the employee with a generic 'contact HR' message.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting Dashboard",
    description:
      "You need visibility into query volume by category, resolution rate, escalation rate, CSAT scores, and unresolved query trends. This data is how you continuously improve the bot and justify ROI.",
  },
  {
    icon: Bot,
    title: "Workflow Automation (Not Just Q&A)",
    description:
      "The best HR chatbots don't just answer questions — they complete tasks. Leave request submission, document retrieval, onboarding task completion, and policy acknowledgment should all be executable via chat.",
  },
  {
    icon: Lock,
    title: "Audit Logging",
    description:
      "Every interaction must be logged with timestamp, user ID, query, and response. This is essential for compliance, dispute resolution, and debugging when the bot gives a wrong answer.",
  },
  {
    icon: Star,
    title: "Continuous Learning / Admin Training Interface",
    description:
      "HR policies change. The chatbot needs an admin interface where HR can update knowledge base content, correct wrong answers, and add new policy information without involving the vendor or engineering.",
  },
];

const redFlags = [
  {
    flag: "No native HRIS integration — requires custom API work",
    why: "This means months of engineering effort and an ongoing maintenance burden. Pass.",
  },
  {
    flag: "Per-conversation pricing model",
    why: "Unpredictable costs that scale with adoption. You want flat per-seat pricing.",
  },
  {
    flag: "Cannot show a live demo with real data flow",
    why: "If they can't demo against a sandbox HRIS, the integration likely doesn't exist yet.",
  },
  {
    flag: "SOC 2 report is more than 12 months old",
    why: "Annual re-certification is the standard. An old report means security practices may have lapsed.",
  },
  {
    flag: "No admin knowledge base editor",
    why: "If HR can't update the bot's knowledge themselves, every policy change requires a support ticket.",
  },
  {
    flag: "Response accuracy below 85% in your category",
    why: "Run a 50-question test during POC. Anything below 85% accuracy will frustrate employees and kill adoption.",
  },
  {
    flag: "No defined escalation path",
    why: "A bot that can't escalate gracefully will leave employees stranded. This is a dealbreaker.",
  },
];

const evaluationCriteria = [
  { criterion: "HRIS integration depth (native vs API vs manual)", weight: "20%" },
  { criterion: "NLU accuracy on your HR query sample set", weight: "20%" },
  { criterion: "Security certifications (SOC 2, GDPR, ISO 27001)", weight: "15%" },
  { criterion: "Total cost of ownership (3-year)", weight: "15%" },
  { criterion: "Implementation timeline and support quality", weight: "10%" },
  { criterion: "Admin knowledge base management UX", weight: "10%" },
  { criterion: "Analytics and reporting capabilities", weight: "5%" },
  { criterion: "Employee-facing UX and channel support", weight: "5%" },
];

const implementationSteps = [
  {
    step: "1",
    title: "Audit and document your HR knowledge base",
    description:
      "Before any technology, make sure your HR policies, FAQs, and process documentation are up to date, consistent, and centralized. The chatbot is only as accurate as the knowledge you feed it.",
  },
  {
    step: "2",
    title: "Define your top 30 query types",
    description:
      "Pull 3 months of HR email/ticket data. Categorize queries. The top 30 query types typically account for 70–80% of total volume — these are your must-win automation use cases for phase 1.",
  },
  {
    step: "3",
    title: "Map your escalation matrix",
    description:
      "For each query type, define: can the bot fully resolve this? If not, who should it escalate to? Define escalation rules before you build, not after.",
  },
  {
    step: "4",
    title: "Run a proof-of-concept on 50 test queries",
    description:
      "Before committing to a vendor, give them 50 representative queries from your HR backlog. Measure accuracy, response quality, and escalation behavior. This is the most important step in vendor selection.",
  },
  {
    step: "5",
    title: "Configure HRIS integration and test data accuracy",
    description:
      "Verify that the chatbot is reading live data correctly — leave balances match HRIS, payslip data is accurate, employee profiles are current. Test edge cases: new starters, employees on leave, terminations.",
  },
  {
    step: "6",
    title: "Soft launch with an internal champion group",
    description:
      "Roll out to a 10–20% pilot group first. Collect CSAT feedback, monitor escalation rate, and fix knowledge gaps before full launch. This prevents a bad first impression across your full employee base.",
  },
  {
    step: "7",
    title: "Launch with an internal communications campaign",
    description:
      "Send a clear launch email explaining what the chatbot does, how to access it, and what it cannot yet handle. Set expectations correctly — employees will trust a transparent system more than one that overpromises.",
  },
  {
    step: "8",
    title: "Establish a monthly review cadence",
    description:
      "Review analytics monthly: what are the top unanswered queries? What has the highest escalation rate? What's the CSAT trend? Continuous improvement is what separates 60% automation from 85% automation.",
  },
];

export default function HRChatbotBuyersGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchemas["hr-chatbot-buyers-guide"]} />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="border-b border-border/40 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li className="text-foreground font-medium">HR Chatbot Buyer&apos;s Guide</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-background border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wide">
              Buyer&apos;s Guide · Updated April 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            HR Chatbot Buyer&apos;s Guide 2026:<br />
            <span className="text-primary">How to Choose the Right Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            The complete framework for HR teams evaluating AI chatbot platforms — 10 must-have features,
            a vendor evaluation scorecard, pricing benchmarks, 7 red flags to watch for, and an
            8-step implementation checklist.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 18 min read</span>
            <span className="flex items-center gap-1.5"><Target className="h-4 w-4" /> 4,200+ words</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> Written for HR leaders</span>
          </div>
          {/* TOC */}
          <div className="bg-muted/50 border border-border/60 rounded-xl p-6">
            <p className="text-sm font-semibold mb-3 text-foreground">Contents</p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-sm text-primary">
              {[
                ["#why", "Why HR Teams Are Adopting Chatbots Now"],
                ["#features", "10 Must-Have HR Chatbot Features"],
                ["#evaluation", "Vendor Evaluation Scorecard"],
                ["#pricing", "Pricing Benchmarks for 2026"],
                ["#red-flags", "7 Red Flags to Watch For"],
                ["#implementation", "8-Step Implementation Checklist"],
                ["#roi", "Calculating Your ROI"],
                ["#build-vs-buy", "Build vs Buy Analysis"],
                ["#use-cases", "Top Use Cases by Company Size"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:underline underline-offset-2">{label}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-4xl mx-auto px-6 py-12">

        {/* Section 1 — Why Now */}
        <section id="why" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why HR Teams Are Adopting Chatbots Now</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            The average HR team spends 40–60% of its time answering repetitive employee questions. Leave
            balances. Payslip queries. Policy clarifications. Onboarding instructions. These queries are
            important to the employees asking them — but they don&apos;t require human judgment. They require
            fast, accurate information retrieval.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            The business case has become impossible to ignore: a mid-sized company with 500 employees
            generates roughly 1,500–2,500 HR queries per month. At an average HR handling time of
            10 minutes per query, that&apos;s 250–400 hours of HR team time spent on questions that a
            well-configured AI chatbot can answer in seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { stat: "70%", label: "Reduction in HR ticket volume achievable with AI chatbots", icon: TrendingDown },
              { stat: "95%", label: "Of HR queries answered correctly by top-tier platforms", icon: CheckCircle },
              { stat: "6–9mo", label: "Average payback period for HR chatbot investment", icon: DollarSign },
            ].map(({ stat, label, icon: Icon }) => (
              <div key={stat} className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">{stat}</div>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Three forces are converging to make 2026 the year HR chatbots move from early-adopter to
            mainstream:
          </p>
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">LLM quality has crossed the enterprise threshold.</strong> The accuracy and naturalness of AI responses has improved dramatically since 2023. Modern HR chatbots understand nuanced queries, handle follow-up questions, and rarely hallucinate when grounded in your specific HR data.</span></li>
            <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">HRIS integrations are now plug-and-play.</strong> Leading platforms have pre-built connectors for Workday, SAP SuccessFactors, BambooHR, ADP, and dozens of other HRIS systems. The 12-month integration projects of 2020 are now 48-hour deployments.</span></li>
            <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Employee expectations have shifted.</strong> Employees who get instant answers from consumer AI tools won&apos;t accept a 24-hour HR email response. The consumerization of AI has raised the bar for HR service delivery.</span></li>
          </ul>
        </section>

        {/* Section 2 — Must-Have Features */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">10 Must-Have HR Chatbot Features</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Not all HR chatbots are created equal. These 10 features separate platforms that deliver
            real automation from those that deliver a glorified FAQ search box.
          </p>
          <div className="space-y-4">
            {mustHaveFeatures.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="flex gap-4 p-5 bg-muted/30 border border-border/50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{i + 1}. {title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">SpaceHR&apos;s AI HR Concierge</strong> includes all 10 of these features
              natively, with pre-built integrations for the 20 most common HRIS platforms.{" "}
              <Link href="/features/ai-chatbots" className="text-primary hover:underline">
                See the full feature list →
              </Link>
            </p>
          </div>
        </section>

        {/* Section 3 — Evaluation Scorecard */}
        <section id="evaluation" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Vendor Evaluation Scorecard</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Use this weighted scorecard to evaluate HR chatbot vendors objectively. Adjust weights
            based on your organization&apos;s priorities.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border/50">
                  <th className="text-left px-4 py-3 font-semibold">Evaluation Criterion</th>
                  <th className="text-center px-4 py-3 font-semibold">Suggested Weight</th>
                  <th className="text-left px-4 py-3 font-semibold">How to Assess</th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map(({ criterion, weight }, i) => (
                  <tr key={criterion} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-medium">{criterion}</td>
                    <td className="px-4 py-3 text-center text-primary font-bold">{weight}</td>
                    <td className="px-4 py-3 text-muted-foreground">Score 1–5 in vendor demo / POC</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Score each vendor 1–5 on each criterion, multiply by weight, and sum for a total score.
            Any vendor scoring below 3.5/5.0 weighted average is likely not enterprise-ready.
          </p>
        </section>

        {/* Section 4 — Pricing */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">HR Chatbot Pricing Benchmarks for 2026</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            HR chatbot pricing has evolved significantly. Here&apos;s what to expect at each market segment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                tier: "SMB (50–500 employees)",
                price: "$3–$6 / employee / month",
                typical: "$1,800–$36,000 / year",
                includes: ["Web widget + Slack/Teams", "Pre-built HRIS connector", "Standard knowledge base", "Email support"],
                caution: "Check: is this actually AI or just keyword matching?",
              },
              {
                tier: "Mid-Market (500–5,000 employees)",
                price: "$5–$8 / employee / month",
                typical: "$30,000–$480,000 / year",
                includes: ["All channels incl. mobile app", "Deep HRIS + payroll integration", "Custom policy training", "CSM + SLA support"],
                caution: "Verify: per-conversation vs per-seat pricing model",
                featured: true,
              },
              {
                tier: "Enterprise (5,000+ employees)",
                price: "$15,000–$60,000 / year flat",
                typical: "Or $2–$4 / employee / month",
                includes: ["On-premise / private cloud option", "Multi-language support", "SSO + advanced RBAC", "Dedicated implementation team"],
                caution: "Negotiate: implementation and training fees separately",
              },
            ].map(({ tier, price, typical, includes, caution, featured }) => (
              <div key={tier} className={`rounded-xl border p-5 ${featured ? "border-primary bg-primary/5" : "border-border/50 bg-muted/20"}`}>
                {featured && <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Most Common Segment</div>}
                <h3 className="font-bold mb-1">{tier}</h3>
                <div className="text-2xl font-bold text-primary mb-0.5">{price}</div>
                <div className="text-xs text-muted-foreground mb-4">{typical}</div>
                <ul className="space-y-1.5 mb-4">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-600 bg-amber-500/10 rounded-lg px-3 py-2">{caution}</p>
              </div>
            ))}
          </div>
          <div className="p-5 bg-muted/30 border border-border/50 rounded-xl">
            <h3 className="font-semibold mb-2">Hidden Costs to Budget For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {[
                "Implementation / onboarding fee: $5,000–$25,000 one-time",
                "Custom HRIS integration (if not pre-built): $10,000–$50,000",
                "Annual knowledge base maintenance: 2–5 HR hours/month",
                "Additional channel licensing (e.g., WhatsApp, mobile app): +$1–$2/employee/mo",
                "Multi-language training: +20–30% of base cost per additional language",
                "Premium SLA / 24-7 support: +15–25% of annual contract",
              ].map((cost) => (
                <div key={cost} className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  {cost}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Red Flags */}
        <section id="red-flags" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">7 Red Flags to Watch For in Vendor Demos</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Most HR chatbot demos are designed to impress, not inform. Here&apos;s what to look for — and
            what it means when you see it.
          </p>
          <div className="space-y-4">
            {redFlags.map(({ flag, why }, i) => (
              <div key={flag} className="flex gap-4 p-5 border border-red-500/20 bg-red-500/5 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">🚩 {flag}</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Why it matters:</strong> {why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Implementation */}
        <section id="implementation" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">8-Step HR Chatbot Implementation Checklist</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Follow this sequence to maximize your chances of a successful deployment and strong
            employee adoption from day one.
          </p>
          <div className="space-y-4">
            {implementationSteps.map(({ step, title, description }) => (
              <div key={step} className="flex gap-4 p-5 bg-muted/30 border border-border/50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 — ROI */}
        <section id="roi" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Calculating Your HR Chatbot ROI</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Use this framework to build a business case for HR leadership and finance.
          </p>
          <div className="bg-muted/30 border border-border/50 rounded-xl p-6 mb-6">
            <h3 className="font-bold mb-4">ROI Calculation Template (Annual)</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Monthly HR query volume", example: "e.g. 1,500 queries/month" },
                { label: "× Automation rate (target 65%)", example: "= 975 automated queries/month" },
                { label: "× Average HR handling time per query", example: "e.g. 10 minutes" },
                { label: "× Annual HR hourly cost (fully loaded)", example: "e.g. $75/hour" },
                { label: "= Annual HR time savings value", example: "975 × 10min × $75/hr × 12mo = $146,250" },
                { label: "− Annual chatbot platform cost", example: "e.g. $30,000/year for 500 employees" },
                { label: "= Net annual benefit", example: "$116,250 / year" },
              ].map(({ label, example }) => (
                <div key={label} className="flex justify-between gap-4 py-2 border-b border-border/30 last:border-0">
                  <span className="text-foreground font-medium">{label}</span>
                  <span className="text-muted-foreground text-right">{example}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is a conservative model. It doesn&apos;t include the value of employee time saved
            (waiting for HR responses), reduced HR escalation costs, improved compliance, or faster
            onboarding time-to-productivity. When those factors are included, the real ROI is
            typically 3–5× the HR-time-savings figure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            See how <Link href="/features/ai-chatbots" className="text-primary hover:underline">SpaceHR&apos;s AI HR Concierge</Link> is
            priced and what ROI our customers typically see within the first 6 months.
          </p>
        </section>

        {/* Section 8 — Build vs Buy */}
        <section id="build-vs-buy" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Build vs Buy: The Honest Analysis</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Every few years, a technology-forward HR team considers building their own HR chatbot.
            Here&apos;s why that almost always ends in regret.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 border border-border/50 rounded-xl bg-muted/20">
              <h3 className="font-bold mb-3 text-red-500">Build: What it Actually Costs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "2–3 AI/ML engineers for 12+ months: $400,000–$600,000",
                  "HRIS integration development: 3–6 months engineering time",
                  "Security audit and SOC 2 certification: $50,000–$150,000",
                  "Ongoing maintenance and model updates: 1 FTE/year",
                  "No vendor SLA — you own every outage",
                  "Total Year 1 cost: $700,000–$1,200,000+",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 border border-primary/30 rounded-xl bg-primary/5">
              <h3 className="font-bold mb-3 text-green-600">Buy: What You Actually Get</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Live in 48 hours — not 12 months",
                  "Pre-built HRIS integrations for 20+ platforms",
                  "SOC 2 Type II certified out of the box",
                  "Continuous model updates included in license",
                  "Vendor SLA with financial penalties for downtime",
                  "Total Year 1 cost: $15,000–$60,000 for most companies",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The only scenario where building makes sense: you have a genuinely unique HR workflow
            that no vendor addresses, you have dedicated AI engineering capacity, and your total
            addressable problem is large enough to justify the investment. For 99% of HR teams,
            that&apos;s not the case.
          </p>
        </section>

        {/* Section 9 — Use Cases by Company Size */}
        <section id="use-cases" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Top Use Cases by Company Size</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            The highest-value HR chatbot use cases differ by company size. Here&apos;s where to start.
          </p>
          <div className="space-y-4">
            {[
              {
                size: "50–250 employees (Startup / Scale-up)",
                cases: [
                  "Leave balance inquiries and requests (highest volume at this stage)",
                  "Onboarding Q&A for fast-growing teams",
                  "Policy lookup (handbook queries)",
                  "Benefits enrollment guidance",
                ],
                note: "At this size, the HR team is often 1–2 people. Automation of basic queries is existential, not optional.",
              },
              {
                size: "250–2,000 employees (Mid-Market)",
                cases: [
                  "Full leave management workflow (request → approval → notification)",
                  "Payslip retrieval and payroll query resolution",
                  "Manager self-service (headcount, team leave calendar, performance deadlines)",
                  "Multi-department policy navigation",
                  "IT/access request initiation",
                ],
                note: "At this size, the ROI calculation clearly favors automation. Multiple HR sub-teams benefit.",
              },
              {
                size: "2,000+ employees (Enterprise)",
                cases: [
                  "Multi-language support for global workforce",
                  "Complex leave types (FMLA, parental, sabbatical) with jurisdictional rules",
                  "Employee relations triage (route to correct HR BP)",
                  "Compliance training reminders and completion tracking",
                  "Cross-system orchestration (HR + IT + Finance query resolution)",
                ],
                note: "At enterprise scale, the chatbot is as much a data infrastructure tool as an employee service tool.",
              },
            ].map(({ size, cases, note }) => (
              <div key={size} className="p-5 bg-muted/30 border border-border/50 rounded-xl">
                <h3 className="font-bold mb-3">{size}</h3>
                <ul className="space-y-1.5 mb-3">
                  {cases.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic bg-muted/50 rounded-lg px-3 py-2">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Mid */}
        <div className="mb-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl text-center">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="text-2xl font-bold mb-2">See SpaceHR&apos;s AI HR Concierge in Action</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            SpaceHR&apos;s AI HR Concierge handles leave, payroll queries, policy lookup, and onboarding
            workflows — with native integration to your HRIS, live in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/request-a-demo"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Bot className="h-4 w-4" />
              Book a Live Demo
            </a>
            <a
              href="/features/ai-chatbots"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-xl hover:bg-muted transition-colors"
            >
              View All Chatbot Features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Answers to the most common questions HR teams ask when evaluating HR chatbot platforms.
          </p>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Related resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/solutions/hr-ai-chatbot", title: "HR AI Chatbot Solution", desc: "See how SpaceHR's AI chatbot works and what it can automate." },
              { href: "/features/ai-chatbots", title: "AI Chatbot Feature Page", desc: "Full feature list, channel support, and integration details." },
              { href: "/solutions/chatbot-for-hr-services", title: "Chatbot for HR Services", desc: "Use cases, ROI benchmarks, and deployment guide." },
              { href: "/blogs/hr-helpdesk-chatbot-guide-2026", title: "HR Helpdesk Chatbot Guide", desc: "How to transform your HR service desk with AI." },
              { href: "/blogs/internal-hr-chatbot-deployment-guide", title: "Internal HR Chatbot Deployment", desc: "Step-by-step deployment playbook for HR teams." },
              { href: "/compare", title: "HR Software Comparisons", desc: "See how SpaceHR compares to 13 competitors." },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group p-4 bg-muted/30 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>

      {/* Bottom CTA */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your HR Help Desk?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            SpaceHR&apos;s AI HR Concierge is live in 48 hours, handles 70% of HR queries automatically,
            and integrates with your existing HRIS. No lengthy implementation. No engineering work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/request-a-demo"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
            >
              <Bot className="h-5 w-5" />
              Book Your Free Demo
            </a>
            <a
              href="/solutions/hr-ai-chatbot"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-colors text-lg"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
