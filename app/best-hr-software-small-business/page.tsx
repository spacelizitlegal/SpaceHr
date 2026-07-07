import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  BarChart3,
  Briefcase,
  Monitor,
  Rocket,
  ShieldCheck,
  DollarSign,
  Clock,
  Layers,
  ArrowRight,
  Users,
  FileText,
  Zap,
  TrendingUp,
  ChevronRight,
  Minus,
  Star,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best HR Software for Small Business 2026 — Global SMB Guide",
  description:
    "Best HR software for small businesses in 2026. Compare Space HR, greytHR, Zoho People, Keka, and BambooHR on features, global compliance, and custom pricing. Free trial available.",
  keywords: [
    "best hr software for small business",
    "small business hr software",
    "smb hr software",
    "hr software 10 to 200 employees",
    "hrms for small business",
    "global hr software",
    "hr software comparison",
    "greythr alternative",
    "zoho people alternative",
    "keka hr alternative",
  ],
  alternates: {
    canonical: "https://spacehr.net/best-hr-software-small-business",
  },
  openGraph: {
    title: "Best HR Software for Small Business 2026 | Space HR",
    description:
      "Compare the top HR software options for small businesses globally. Features, multi-country compliance, and custom pricing for teams of 10–200 employees.",
    url: "https://spacehr.net/best-hr-software-small-business",
    siteName: "Space HR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best HR Software for Small Business 2026 | Space HR",
    description:
      "SMB HR software comparison: Space HR vs greytHR vs Zoho People vs Keka. Features, global compliance, custom pricing.",
  },
};

const faqs = [
  {
    question: "Why does a small business need HR software?",
    answer:
      "Small businesses face HR complexity that spreadsheets cannot handle reliably: local payroll taxes and statutory filings, leave tracking, attendance management, and employee document requests. In India, for example, this includes PF registration and monthly ECR filing, ESIC compliance, TDS deductions, and Professional Tax. In the US, it includes federal and state payroll taxes, W-4/W-2 management, and compliance reporting. Beyond compliance, manual processes break down quickly after 20 employees. HR software automates all of these, preventing penalties and reducing HR admin time by 60–70%.",
  },
  {
    question: "How much does HR software cost for a small business?",
    answer:
      "HR software for small businesses typically uses per-employee per-month (PEPM) pricing, though models vary by country. Space HR offers aggressive custom pricing for global teams — request a demo for a tailored quote. greytHR starts at ₹3,495/month for up to 25 employees (India). Zoho People starts at ₹48/user/month (Essential tier, India). Keka HR starts at ₹6,999/month for up to 100 employees (India). BambooHR starts at $8–$16/emp/month (US). Most platforms offer a 14-day free trial. The real cost comparison should include: base subscription + payroll module (sometimes priced separately) + onboarding fee (if any). Space HR includes payroll, leave, attendance, performance, and ESS in all plans with no per-module charges.",
  },
  {
    question: "What is the difference between HR software and payroll software for small businesses?",
    answer:
      "Payroll software handles one function: calculating salaries, deductions, and generating payslips. HR software (or HRMS) is broader — it includes payroll plus leave management, attendance tracking, employee self-service, performance management, recruitment, and HR analytics. For small businesses, an integrated HR software that handles both HR and payroll is more cost-effective than two separate tools that require manual data sync.",
  },
  {
    question: "Does small business HR software handle local statutory compliance?",
    answer:
      "Quality HR software handles local statutory compliance natively in every country it serves. In India, for example, this includes PF deduction at 12% of Basic+DA with the employer split between EPF (3.67%) and EPS (8.33%), ESIC at 0.75% employee + 3.25% employer for eligible employees, monthly ECR file generation for EPFO portal submission, and ESIC monthly returns. In the US, it includes FUTA, FICA, federal/state income tax, and W-2/W-4 management. Space HR handles these automatically — HR does not need to manually calculate or generate statutory files.",
  },
  {
    question: "How long does it take to set up HR software for a small business?",
    answer:
      "Modern cloud HR software for small businesses takes 1–3 days to fully set up. Day 1: import employee data (Excel template or manual entry), configure salary structures and local statutory parameters. Day 2: set up leave policies (leave types, entitlements, approval workflow, holiday calendar), invite employees to the self-service portal. Day 3: run a parallel payroll to verify calculations before processing the first live payroll. Space HR provides a guided setup wizard and dedicated onboarding support — most teams with 10–50 employees go live within 48 hours.",
  },
  {
    question: "What is the best free HR software for small businesses?",
    answer:
      "Truly free HR software with full local compliance does not exist — statutory compliance maintenance requires ongoing development that free tools cannot sustain. Zoho People has a free tier for up to 5 employees, but excludes payroll and statutory compliance. greytHR has a 'Starter' tier at ₹0/month for up to 25 employees (India) but limits payroll to basic processing. For serious compliance in any country, Space HR offers aggressive custom pricing and a 14-day free trial so you can validate ROI before paying.",
  },
  {
    question: "Can I start with basic HR software and upgrade later?",
    answer:
      "Yes. Cloud HR software for small businesses is designed to scale. With Space HR, you start with Core HR + Payroll and upgrade to the Growth plan when you need performance management, advanced analytics, multi-location attendance, and the AI HR concierge. Space HR offers aggressive custom pricing at every stage — request a demo for a tailored quote. There's no migration — your data stays in the same system. Most small businesses at 50 employees upgrade to the Growth plan when they hire a dedicated HR manager who needs analytics and performance cycle management.",
  },
  {
    question: "Which HR software is best for a startup with 15–30 employees?",
    answer:
      "For startups with 15–30 employees, the best HR software is one that handles payroll + local statutory compliance from day one, is quick to set up (no IT involvement), and is affordable enough for the startup budget. Space HR is the top choice for this segment: aggressive custom pricing, 48-hour setup, multi-country compliance, and an employee self-service portal that eliminates HR queries. Request a demo for a tailored quote. At 15–30 employees, you do not yet need the complexity of enterprise platforms — those are designed for 200+ employee teams.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Best HR Software for Small Business", url: "https://spacehr.net/best-hr-software-small-business" },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best HR Software for Small Business 2026 — India SMB Guide",
  description:
    "Complete comparison of the best HR software options for Indian small businesses in 2026, covering features, India compliance, and INR pricing.",
  url: "https://spacehr.net/best-hr-software-small-business",
  datePublished: "2025-01-01",
  dateModified: "2026-06-24",
  author: { "@type": "Organization", name: "Space HR", url: "https://spacehr.net" },
  publisher: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
    logo: { "@type": "ImageObject", url: "https://spacehr.net/hrlogonly.png" },
  },
};

const competitors = [
  {
    name: "Space HR",
    badge: "Best Overall",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    rating: 4.9,
    pricing: "Custom quote",
    setup: "48 hours",
    india: true,
    payroll: true,
    ess: true,
    performance: true,
    ai: true,
    mobile: true,
    highlight: "Only SMB HR platform with built-in global compliance + AI payroll auditor + attrition prediction at aggressive custom pricing",
    href: "/request-a-demo",
  },
  {
    name: "greytHR",
    badge: "Popular India",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    rating: 4.2,
    pricing: "₹3,495/month (25 emp)",
    setup: "1–2 weeks",
    india: true,
    payroll: true,
    ess: true,
    performance: "partial",
    ai: false,
    mobile: true,
    highlight: "Established India payroll platform, strong PF/ESIC filing, weaker performance module",
    href: null,
  },
  {
    name: "Zoho People",
    badge: "Budget Option",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    rating: 4.1,
    pricing: "₹48–₹120/user/month",
    setup: "1–2 weeks",
    india: "partial",
    payroll: false,
    ess: true,
    performance: true,
    ai: false,
    mobile: true,
    highlight: "Affordable HR data management; payroll requires separate Zoho Payroll subscription",
    href: null,
  },
  {
    name: "Keka HR",
    badge: "Mid-Market",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    rating: 4.3,
    pricing: "₹6,999+/month (100 emp)",
    setup: "2–6 weeks",
    india: true,
    payroll: true,
    ess: true,
    performance: true,
    ai: "partial",
    mobile: true,
    highlight: "Strong HR platform for 100–500 employees; high minimum pricing makes it costly for small teams",
    href: null,
  },
  {
    name: "BambooHR",
    badge: "US-First",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    rating: 4.4,
    pricing: "$8–$16/emp/month",
    setup: "1–3 weeks",
    india: false,
    payroll: false,
    ess: true,
    performance: true,
    ai: false,
    mobile: true,
    highlight: "Excellent HR UX for US teams; no India statutory compliance",
    href: null,
  },
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-yellow-400 mx-auto" />;
  return <XCircle className="w-4 h-4 text-red-300 dark:text-red-700 mx-auto" />;
}

const smStages = [
  {
    range: "5–15 employees",
    challenge: "Spreadsheets still work, but payroll errors start appearing. Local tax and statutory obligations begin applying from the first few hires.",
    solution: "Start with a basic HRMS to get payroll and statutory compliance right from day one. Space HR's aggressive custom pricing is typically cheaper than one payroll compliance penalty.",
    icon: Users,
  },
  {
    range: "15–50 employees",
    challenge: "Leave management breaks down. Attendance tracking via WhatsApp messages becomes unmanageable. HR queries flood the founder's inbox.",
    solution: "Activate leave management, attendance, and employee self-service. Employees handle their own payslips, leave requests, and documents — HR team gets breathing room.",
    icon: Clock,
  },
  {
    range: "50–200 employees",
    challenge: "Performance reviews are overdue. You're losing good people and don't know why. Multi-location attendance is a nightmare. Compliance reporting is manual.",
    solution: "Add performance management (OKRs + 360 reviews), attrition prediction, and analytics. HR analytics dashboards replace the monthly Excel reports your HR team builds.",
    icon: TrendingUp,
  },
];

export default function SmallBusinessHRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-semibold text-sm">
            Global SMB HR Guide 2026 · Updated June 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Best HR Software for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              Small Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            Comparing the top HR software options for small businesses in 2026 — features, multi-country compliance, and custom pricing for teams of 10–200 employees.
          </p>
          <p className="text-sm text-gray-400 mb-10">5 platforms compared · 8 FAQs · Global compliance tested</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#comparison">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg">
                Compare Platforms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="py-12 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">What is Small Business HR Software?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Small business HR software is a cloud-based platform that handles payroll, leave management, attendance, onboarding, and local statutory compliance for teams of 10–200 employees — without requiring a dedicated IT team or long implementation. Unlike enterprise HRMS (which can cost hundreds of thousands to implement), SMB HR software is self-service, goes live in 48 hours, and offers transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* PROSE — WHY SMBs NEED HR SOFTWARE */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Small Businesses Can't Ignore HR Software in 2026</h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed">
            <p>
              Small businesses everywhere face a compliance burden that doesn't scale with company size — it's mandatory from day one. In India, for example, PF registration becomes required once you cross 20 employees; in the US, state and federal payroll taxes apply from the first hire; in the UK, PAYE and auto-enrolment obligations begin immediately. Space HR handles these local requirements automatically, no matter which countries you operate in.
            </p>
            <p>
              The penalty for non-compliance is not proportional to company size. In India, PF non-compliance can carry penalties of ₹5,000–₹25,000 per employee per year plus interest. In the US, missed payroll tax deposits can trigger federal penalties. For a 30-person team, these gaps can cost far more than HR software for the same period — making automation a smart investment, not an expense.
            </p>
            <p>
              Beyond compliance, the operational cost of manual HR processes compounds as teams grow. A 50-person team generates approximately 200–300 HR service requests per month — payslip queries, leave balance checks, attendance disputes, document requests. With manual processes, these consume 60–70% of an HR executive's time. HR software eliminates 80% of these requests via employee self-service, freeing HR to focus on hiring and retention — the activities that actually drive business growth.
            </p>
            <p>
              The third driver is talent management. Startup and growth-stage companies often see annual voluntary attrition of 20–35%. Replacing an employee costs thousands in recruitment, notice-period productivity loss, and new-hire ramp-up time. HR software with performance management and attrition prediction can reduce preventable attrition by 25–35% — a return that dwarfs the subscription cost at any company size.
            </p>
          </div>
        </div>
      </section>

      {/* GROWTH STAGES */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">HR Software Needs at Every Growth Stage</h2>
            <p className="text-gray-600 dark:text-gray-400">What changes as your headcount grows — and what HR software should do at each stage.</p>
          </div>
          <div className="space-y-6">
            {smStages.map(({ range, challenge, solution, icon: Icon }) => (
              <div key={range} className="bg-white dark:bg-[#0b1121] rounded-2xl border border-gray-200 dark:border-gray-700 p-7">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">{range}</div>
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Challenge: </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{challenge}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Solution: </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP STEPS */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How to Set Up HR Software in 48 Hours</h2>
            <p className="text-gray-600 dark:text-gray-400">No IT team. No consultant. No implementation fee. Just a founder or HR executive with 2 hours of time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor, step: "Day 1", title: "Import & Configure",
                items: ["Download Space HR Excel template", "Fill employee names, DOB, PAN, bank details", "Set salary components (Basic, HRA, allowances)", "Configure PF/ESIC/TDS parameters"],
              },
              {
                icon: ShieldCheck, step: "Day 1–2", title: "Set Policies",
                items: ["Create leave types (EL, SL, CL, LOP)", "Set leave entitlements per policy", "Build approval workflow (employee → manager → HR)", "Upload holiday calendar"],
              },
              {
                icon: Rocket, step: "Day 2", title: "Go Live",
                items: ["Send employee self-service portal invites", "Run parallel payroll to verify calculations", "Process first live payroll in Space HR", "Employees download payslips from ESS portal"],
              },
            ].map(({ icon: Icon, step, title, items }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">{step}</div>
                <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{title}</h3>
                <ul className="space-y-2 text-left">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">HR Software Comparison for Global SMBs</h2>
            <p className="text-gray-600 dark:text-gray-400">Space HR vs greytHR vs Zoho People vs Keka vs BambooHR</p>
          </div>

          {/* Card-style comparison */}
          <div className="space-y-5 mb-14">
            {competitors.map((c) => (
              <div key={c.name} className={`bg-white dark:bg-[#0b1121] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 ${c.name === "Space HR" ? "ring-2 ring-teal-500" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{c.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.badgeColor}`}>{c.badge}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(c.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                    ))}
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300 ml-1">{c.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">{c.highlight}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-400 mb-0.5">Pricing</div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{c.pricing}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-400 mb-0.5">Setup Time</div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{c.setup}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-400 mb-0.5">India Compliance</div>
                    <div className="text-sm font-semibold">{c.india === true ? <span className="text-green-600">Full</span> : c.india === "partial" ? <span className="text-yellow-600">Partial</span> : <span className="text-red-500">None</span>}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-400 mb-0.5">Native Payroll</div>
                    <div className="text-sm font-semibold">{c.payroll ? <span className="text-green-600">Yes</span> : <span className="text-red-500">No</span>}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "ESS Portal", val: c.ess },
                    { label: "Performance Mgmt", val: c.performance },
                    { label: "AI Features", val: c.ai },
                    { label: "Mobile App", val: c.mobile },
                  ].map(({ label, val }) => (
                    <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${val === true ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" : val === "partial" ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}>
                      {val === true ? <CheckCircle className="w-3 h-3" /> : val === "partial" ? <Minus className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {label}
                    </span>
                  ))}
                </div>
                {c.href && (
                  <div className="mt-4">
                    <Link href={c.href}>
                      <Button size="sm" className="rounded-full">Try {c.name} Free <ArrowRight className="ml-1.5 w-4 h-4" /></Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SMB vs Enterprise table */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">SMB HR Software vs Enterprise HRMS vs Spreadsheets</h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-5 text-sm font-bold text-gray-500 border-b dark:border-gray-700 w-1/4">Factor</th>
                  <th className="p-5 text-sm font-bold text-gray-400 border-b dark:border-gray-700 w-1/4 text-center">Spreadsheets</th>
                  <th className="p-5 text-sm font-bold text-green-600 dark:text-green-400 border-b dark:border-gray-700 w-1/4 text-center bg-green-50/50 dark:bg-green-900/10">SMB HR Software</th>
                  <th className="p-5 text-sm font-bold text-gray-500 border-b dark:border-gray-700 w-1/4 text-center">Enterprise HRMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {[
                  ["Setup time", "0 days", "1–2 days", "3–12 months"],
                  ["Upfront cost", "$0", "$0 (free trial)", "$50K–$500K+"],
                  ["Local statutory compliance", "Manual, error-prone", "Automated, accurate", "Needs local module"],
                  ["Employee self-service", "None", "Full ESS portal", "Full ESS portal"],
                  ["Payroll automation", "Manual", "Automated", "Automated"],
                  ["Performance management", "None", "Included", "Included"],
                  ["AI analytics", "None", "Attrition & cost AI", "Advanced AI"],
                  ["Monthly cost (50 emp)", "₹0", "Custom quote", "₹50,000+/month"],
                  ["Best for", "0–10 employees", "10–500 employees", "500+ employees"],
                ].map(([factor, sheet, smb, enterprise]) => (
                  <tr key={factor as string}>
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-300">{factor}</td>
                    <td className="p-4 text-center text-gray-500 dark:text-gray-400">{sheet}</td>
                    <td className="p-4 text-center text-green-700 dark:text-green-300 font-semibold bg-green-50/30 dark:bg-green-900/10">{smb}</td>
                    <td className="p-4 text-center text-gray-500 dark:text-gray-400">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KEY FEATURES SMALL BUSINESSES NEED */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">5 Must-Have Features in Small Business HR Software</h2>
            <p className="text-gray-600 dark:text-gray-400">The non-negotiables when evaluating HR tools for your Indian SMB.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck, color: "text-teal-600", bg: "bg-teal-50 dark:bg-teal-900/20",
                title: "Local Statutory Compliance",
                desc: "Non-negotiable. The platform must handle local payroll and labor laws in every country you operate — whether that's US federal/state taxes, UK PAYE, UAE WPS, India PF/ESIC/TDS, Singapore CPF, or Canadian CPP/EI — without manual work.",
              },
              {
                icon: DollarSign, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20",
                title: "Integrated Payroll",
                desc: "HR and payroll data should live in the same system. When leave is approved, it affects payroll automatically. When an employee updates their bank account in ESS, it updates in payroll too. Separate HR + payroll tools create sync errors.",
              },
              {
                icon: FileText, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20",
                title: "Employee Self-Service",
                desc: "At 30+ employees, the volume of payslip and leave queries becomes unmanageable without ESS. Employees must be able to download payslips, check leave balances, submit requests, and access HR documents — without contacting HR.",
              },
              {
                icon: Clock, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20",
                title: "Leave & Attendance",
                desc: "Configure India leave types (Earned Leave, Sick Leave, Casual Leave, LOP, Maternity/Paternity). Integrate with biometric devices or GPS mobile check-in. Attendance data must feed directly into payroll for LOP deductions.",
              },
              {
                icon: BarChart3, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20",
                title: "Basic HR Analytics",
                desc: "Headcount by department, attrition rate, leave utilization, and payroll cost by team. At 30–50 employees, these metrics start influencing hiring decisions. A good SMB HR platform shows them without manual Excel reports.",
              },
              {
                icon: Zap, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20",
                title: "Fast Setup — No IT",
                desc: "A small business cannot wait 3 months for an HR implementation. The platform must be self-serve: import employee data from Excel, configure payroll, and invite employees — all without a consultant or IT team. 48-hour setup is the benchmark.",
              },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/hrms", label: "What is HRMS?", desc: "Complete HR management system guide" },
              { href: "/best-hcm-software", label: "Best HCM Software 2026", desc: "8 platforms compared" },
              { href: "/employee-self-service-hrms", label: "ESS HRMS Portal", desc: "Employee self-service explained" },
              { href: "/features/payroll", label: "AI Payroll for India", desc: "PF, ESIC, TDS automation" },
              { href: "/regions/india", label: "India Compliance Guide", desc: "PF, ESIC, TDS deep dive" },
              { href: "/compare", label: "Compare Platforms", desc: "Space HR vs 13 competitors" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121] hover:shadow-md hover:border-green-400 transition-all">
                <ChevronRight className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Small Business HR Software — FAQs</h2>
            <p className="text-gray-600 dark:text-gray-400">Questions Indian founders and HR managers ask before choosing HR software.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Start with the Best HR Software for Your Small Business</h2>
          <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
            Space HR handles payroll, leave, attendance, statutory compliance, and employee self-service — all in one platform. Request a demo and we&apos;ll follow up with aggressive pricing tailored to your team. Go live in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-50 rounded-full px-10 h-14 text-lg font-bold">
                Request a Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                Start Free 14-Day Trial
              </Button>
            </Link>
          </div>
          <p className="text-green-200 text-sm mt-6">No credit card · Global compliance · 48-hour setup</p>
        </div>
      </section>
    </div>
  );
}
