import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  BarChart3,
  Users,
  Database,
  Globe,
  Lock,
  ArrowRight,
  Monitor,
  Briefcase,
  Layers,
  TrendingUp,
  Clock,
  FileText,
  Zap,
  Shield,
  DollarSign,
  UserPlus,
  Settings,
  ChevronRight,
  Star,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is HRMS? Complete Guide to HR Management Systems (2026)",
  description:
    "A definitive HRMS guide covering what Human Resource Management Systems do, HRMS vs HRIS vs HCM, core modules, implementation steps, and how to choose the best HRMS software for US and global teams in 2026.",
  keywords: [
    "hrms",
    "human resource management system",
    "hrms software",
    "best hrms software",
    "hrms vs hris",
    "cloud hrms",
    "hcm software",
    "hr management system",
    "hrms system",
    "hrms features",
    "hrms modules",
    "what is hrms",
    "hrms software india",
    "hrms implementation",
  ],
  alternates: {
    canonical: "https://spacehr.net/hrms",
  },
  openGraph: {
    title: "What is HRMS? Complete Guide 2026 | Space HR",
    description:
      "Everything you need to know about Human Resource Management Systems — modules, HRMS vs HRIS vs HCM, implementation guide, and how to choose the right HRMS software.",
    url: "https://spacehr.net/hrms",
    siteName: "Space HR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRMS Complete Guide 2026 | Space HR",
    description:
      "HRMS modules, HRIS vs HCM comparison, buyer's guide, and implementation steps. Everything HR teams need to know.",
  },
};

const faqs = [
  {
    question: "What does HRMS stand for?",
    answer:
      "HRMS stands for Human Resource Management System. It is an integrated suite of software that manages the full employee lifecycle — from recruitment and onboarding through payroll, performance management, leave, attendance, compliance, and offboarding. Modern HRMS platforms also include AI-powered features like predictive attrition, payroll anomaly detection, and employee self-service chatbots.",
  },
  {
    question: "What is the difference between HRIS and HRMS?",
    answer:
      "HRIS (Human Resource Information System) focuses on storing and managing employee data — records, payroll, benefits administration, and compliance reporting. HRMS (Human Resource Management System) includes everything an HRIS does, plus talent management capabilities: performance reviews, goal tracking, learning management, and succession planning. HCM (Human Capital Management) is the broadest category, adding strategic workforce planning, compensation management, and advanced analytics on top of HRMS features. In practice, many vendors use HRIS, HRMS, and HCM interchangeably.",
  },
  {
    question: "What are the core modules of an HRMS?",
    answer:
      "A complete HRMS includes: (1) Core HR — employee database, org chart, document management; (2) Payroll — automated pay calculation, statutory deductions, tax filing; (3) Leave & Attendance — leave types, approval workflows, biometric/GPS integration; (4) Recruitment — ATS, job postings, candidate tracking; (5) Onboarding — digital forms, task checklists, document collection; (6) Performance Management — goal setting, appraisal cycles, 360-degree feedback; (7) Learning & Development — course assignments, completion tracking; (8) Employee Self-Service — employee portal for payslips, leave, documents; (9) Analytics & Reporting — headcount, attrition, cost forecasting dashboards.",
  },
  {
    question: "Can an HRMS help with compliance?",
    answer:
      "Yes. A modern HRMS maintains compliance with local labor laws automatically. For India, this means automated PF (12% employee, 13.36% employer), ESIC (0.75%/3.25%), TDS Section 192 calculations, Professional Tax by state, and ECR filing. For the US, it handles FUTA (6%/$7,000 wage base), FICA (6.2% SS + 1.45% Medicare), state SUI, and ACA reporting. For the UK, it manages PAYE, Real Time Information (RTI) FPS submissions, and auto-enrolment pension calculations. Non-compliance penalties are avoided because the HRMS updates statutory rates automatically when regulations change.",
  },
  {
    question: "How much does HRMS software cost?",
    answer:
      "HRMS pricing depends on company size and deployment model. Cloud SaaS HRMS (the dominant model) typically charges per employee per month: small business solutions range from ₹149–₹500/employee/month in India or $8–$25/employee/month internationally. Mid-market platforms (BambooHR, Darwinbox, Rippling) range from $15–$50/employee/month. Enterprise HRMS (SAP SuccessFactors, Workday) can cost $50–$150+/employee/month plus implementation fees. On-premise licensing requires large upfront payments ($50,000–$500,000+) plus annual maintenance. Most growing companies choose cloud SaaS for predictable costs and automatic updates.",
  },
  {
    question: "How long does it take to implement an HRMS?",
    answer:
      "Implementation time depends on company size and system complexity. Small businesses (under 100 employees) using a cloud HRMS like Space HR can go live in 48 hours to 2 weeks — data import, payroll configuration, and employee onboarding are guided by the platform. Mid-size companies (100–1,000 employees) typically need 4–12 weeks, covering data migration, integration with existing tools (ERP, accounting, biometric devices), and HR team training. Enterprise implementations (1,000+ employees, multi-country) take 3–12 months.",
  },
  {
    question: "What is cloud HRMS vs on-premise HRMS?",
    answer:
      "Cloud HRMS (also called SaaS HRMS) is hosted by the vendor and accessed via browser or app. Advantages: no IT infrastructure, automatic updates, lower upfront cost, mobile access. On-premise HRMS is installed on your company's servers. Advantages: full data control, offline access, no recurring SaaS fees. Disadvantages: requires IT team for maintenance, slower updates, higher upfront cost. Over 85% of new HRMS deployments in 2024–2026 are cloud-based. On-premise is mainly chosen by government agencies, highly regulated industries, or companies with strict data residency requirements.",
  },
  {
    question: "Which HRMS is best for global companies?",
    answer:
      "The best HRMS for global companies should handle local statutory compliance natively in every country you operate in — whether that's US federal and state taxes, UK PAYE and auto-enrolment, UAE WPS and gratuity, India PF/ESIC/TDS, Singapore CPF, or Canadian CPP/EI. It should also support regional leave types, multi-location attendance, and localized payslips. Space HR is built for global teams with country-specific compliance built in and aggressive, tailored pricing. Request a demo for a custom quote.",
  },
  {
    question: "What is employee self-service in an HRMS?",
    answer:
      "Employee self-service (ESS) is a feature within HRMS that gives employees direct access to their own HR information and services — without contacting HR. Through the ESS portal, employees can: view and download payslips, check leave balances and submit requests, update personal and banking information, access HR documents (offer letters, Form 16, policies), mark attendance, and complete appraisal self-assessments. ESS reduces HR query volume by 65–80%, freeing HR teams for strategic work.",
  },
  {
    question: "Can HRMS integrate with other business software?",
    answer:
      "Yes. Modern HRMS platforms integrate with: accounting software (QuickBooks, Tally, SAP), ERP systems (SAP, Oracle, Microsoft Dynamics), biometric attendance devices (ZKTeco, Hikvision, Essl), collaboration tools (Slack, Microsoft Teams, Google Workspace), job boards (LinkedIn, Naukri, Indeed), background verification services, and banking systems for salary disbursement. Most cloud HRMS offer REST APIs and pre-built connectors. Space HR integrates with 50+ tools via native connectors and webhooks.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "HRMS", url: "https://spacehr.net/hrms" },
]);

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Space HR HRMS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Cloud HRMS for modern teams — AI payroll, leave management, attendance, performance appraisals, employee self-service, and HR analytics. India-compliant with PF, ESIC, TDS.",
  url: "https://spacehr.net/hrms",
  offers: {
    "@type": "Offer",
    description: "Aggressive pricing for Indian teams. Request a demo for a tailored quote.",
    url: "https://spacehr.net/request-a-demo",
  },
  provider: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is HRMS? Complete Guide to Human Resource Management Systems (2026)",
  description:
    "A definitive guide covering HRMS modules, HRMS vs HRIS vs HCM, implementation steps, pricing, and how to choose the right HR management system.",
  url: "https://spacehr.net/hrms",
  datePublished: "2024-01-01",
  dateModified: "2026-06-24",
  author: { "@type": "Organization", name: "Space HR", url: "https://spacehr.net" },
  publisher: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
    logo: { "@type": "ImageObject", url: "https://spacehr.net/hrlogonly.png" },
  },
};

const modules = [
  {
    icon: Database,
    title: "Core HR & Employee Database",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    desc: "The foundation of every HRMS. Stores all employee master data — personal information, employment history, job grades, reporting hierarchy, documents, and org chart. Acts as the single source of truth that feeds every other module.",
    features: ["Employee master data & org chart", "Document storage (contracts, IDs, certificates)", "Job positions & grade management", "Org hierarchy with drag-and-drop", "Audit trail for all data changes"],
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
    desc: "Automates the entire pay calculation process — from gross salary through statutory deductions to net pay and bank transfer. A payroll module eliminates manual calculation errors and ensures compliance with tax and labor laws in every pay cycle.",
    features: ["Automated salary computation", "Statutory deductions (PF, ESIC, TDS, PT)", "Multi-component salary structures", "Payslip generation & distribution", "Bank file / NACHA / BACS generation"],
  },
  {
    icon: Clock,
    title: "Leave & Attendance",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    desc: "Manages all types of leave (earned, sick, casual, LOP, maternity, paternity) with configurable approval workflows. Integrates with biometric devices and GPS-enabled mobile apps for real-time attendance capture.",
    features: ["Configurable leave types & policies", "Multi-level approval workflows", "Biometric & GPS attendance integration", "Overtime calculation (daily/weekly)", "Real-time leave balance dashboards"],
  },
  {
    icon: UserPlus,
    title: "Recruitment & Onboarding",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    desc: "Applicant Tracking System (ATS) built into the HRMS. Manages job requisitions, candidate screening, interview scheduling, offer letters, and the complete onboarding process — all in one system without switching tools.",
    features: ["Job requisition & multi-channel posting", "Resume parsing & candidate ranking", "Interview scheduling & feedback capture", "Digital offer letter generation", "Structured onboarding task checklists"],
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    desc: "Runs the full performance cycle — goal setting (OKRs or KPIs), mid-year check-ins, annual appraisals, 360-degree feedback, and performance improvement plans. Links performance ratings to compensation and promotion decisions.",
    features: ["Goal setting with OKR framework", "360-degree peer & manager feedback", "Continuous check-in & 1:1 tracking", "Appraisal calibration workflows", "Performance-linked compensation"],
  },
  {
    icon: FileText,
    title: "Employee Self-Service Portal",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    desc: "Gives employees 24/7 access to their own HR data and services without contacting HR. The ESS portal handles 65–80% of inbound HR requests automatically, freeing HR teams for strategic work.",
    features: ["Payslip & Form 16 download", "Leave application & balance view", "Attendance regularization requests", "Personal & bank detail updates", "HR document access (letters, policies)"],
  },
  {
    icon: BarChart3,
    title: "HR Analytics & Reporting",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    desc: "Transforms HR data into business intelligence. Tracks headcount trends, attrition rates, cost-per-hire, time-to-fill, leave patterns, and compensation benchmarks. AI-powered forecasting predicts 12 months of labor costs and flags attrition risk before resignations happen.",
    features: ["Real-time headcount & attrition dashboards", "12-month labor cost forecasting", "AI attrition risk prediction", "Payroll cost variance tracking", "Custom report builder & scheduled exports"],
  },
  {
    icon: Shield,
    title: "Compliance & Statutory Management",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
    desc: "Keeps the organization compliant with labor laws across every jurisdiction. For India: PF, ESIC, TDS, PT, LWF, Gratuity. For the US: FUTA, FICA, ACA. For the UK: PAYE RTI, auto-enrolment. Statutory rates update automatically when regulations change.",
    features: ["Jurisdiction-specific statutory calculations", "Automated regulatory rate updates", "Statutory filing & challan generation", "Audit-ready compliance reports", "Multi-country compliance support"],
  },
];

export default function HRMSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold text-sm">
            Complete HRMS Guide 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What is an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              HRMS?
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            A Human Resource Management System (HRMS) is the software that runs your entire employee lifecycle — from hire to retire. This guide covers every module, how HRMS differs from HRIS and HCM, what to look for when buying, and how to implement one without disrupting your team.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">
            Last updated: June 2026 · 12 min read
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                Try Space HR Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">In this guide</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              ["#definition", "HRMS Definition"],
              ["#hris-vs-hrms-vs-hcm", "HRMS vs HRIS vs HCM"],
              ["#modules", "8 Core HRMS Modules"],
              ["#benefits", "Benefits & ROI"],
              ["#lifecycle", "HRMS Across Employee Lifecycle"],
              ["#cloud-vs-onpremise", "Cloud vs On-Premise HRMS"],
              ["#buyers-guide", "How to Choose an HRMS"],
              ["#implementation", "Implementation Guide"],
              ["#india", "HRMS for India"],
              ["#faq", "FAQs"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 py-1"
              >
                <ChevronRight className="w-3 h-3 text-purple-400 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Definition */}
      <section id="definition" className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 p-6 rounded-r-xl mb-10">
            <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">HRMS Definition</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A <strong>Human Resource Management System (HRMS)</strong> is an integrated suite of software applications that automates and manages the end-to-end employee lifecycle — from job posting and onboarding through payroll, performance, and offboarding. It combines an employee database with workflow automation, compliance management, and analytics in a single platform.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding HRMS Software</h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed">
            <p>
              Before HRMS software, HR departments managed employee data across disconnected spreadsheets, paper files, standalone payroll software, and manual leave registers. The result: inconsistent data, compliance errors, payroll mistakes, and HR teams spending 70–80% of their time on administrative tasks instead of strategic work.
            </p>
            <p>
              An HRMS solves this by creating a single platform where all HR data lives and all HR processes run. When an employee is hired, their data enters the HRMS once — and immediately flows to payroll (for salary processing), attendance (for leave entitlement calculation), performance (for goal setting), and compliance (for statutory registration). No re-entry, no inconsistencies.
            </p>
            <p>
              Modern HRMS platforms go further with AI capabilities: predicting which employees are likely to resign (attrition prediction), flagging payroll anomalies before processing, and providing employees with a conversational self-service interface via chatbot or WhatsApp. The line between HRMS and HCM has blurred significantly — most cloud HRMS platforms sold today include what would previously have been called HCM features.
            </p>
            <p>
              The global HRMS market was valued at $22.9 billion in 2024 and is projected to reach $38.5 billion by 2029, growing at 10.9% CAGR. India specifically is one of the fastest-growing markets, driven by rapid SMB digitization and government mandates for electronic PF/ESIC filing and digital payroll records.
            </p>
          </div>
        </div>
      </section>

      {/* HRIS vs HRMS vs HCM */}
      <section id="hris-vs-hrms-vs-hcm" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">HRIS vs HRMS vs HCM</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three terms, one spectrum. Here's exactly where each begins and ends.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-5 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-[30%]">Capability</th>
                  <th className="p-5 text-sm font-bold tracking-wider text-green-600 dark:text-green-400 uppercase border-b dark:border-gray-700 w-[23%]">HRIS<br /><span className="text-xs text-gray-400 font-normal normal-case">Info System</span></th>
                  <th className="p-5 text-sm font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase border-b dark:border-gray-700 w-[23%] bg-purple-50/50 dark:bg-purple-900/10">HRMS<br /><span className="text-xs text-gray-400 font-normal normal-case">Mgmt System</span></th>
                  <th className="p-5 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-[24%]">HCM<br /><span className="text-xs text-gray-400 font-normal normal-case">Human Capital</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {[
                  ["Employee Database & Records", true, true, true],
                  ["Payroll Processing", true, true, true],
                  ["Leave & Attendance", true, true, true],
                  ["Benefits Administration", true, true, true],
                  ["Compliance & Statutory Filing", false, true, true],
                  ["Performance Management", false, true, true],
                  ["Recruitment & ATS", false, true, true],
                  ["Onboarding Workflows", false, true, true],
                  ["Employee Self-Service Portal", false, true, true],
                  ["Learning & Development (LMS)", false, false, true],
                  ["Succession Planning", false, false, true],
                  ["Workforce Planning & Forecasting", false, false, true],
                  ["AI & Predictive Analytics", false, false, true],
                  ["Compensation Benchmarking", false, false, true],
                ].map(([cap, hris, hrms, hcm]) => (
                  <tr key={cap as string}>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">{cap as string}</td>
                    <td className="p-4">{hris ? <CheckCircle className="w-5 h-5 text-green-500" /> : <span className="text-gray-300 dark:text-gray-600">—</span>}</td>
                    <td className="p-4 bg-purple-50/30 dark:bg-purple-900/10">{hrms ? <CheckCircle className="w-5 h-5 text-purple-500" /> : <span className="text-gray-300 dark:text-gray-600">—</span>}</td>
                    <td className="p-4">{hcm ? <CheckCircle className="w-5 h-5 text-blue-500" /> : <span className="text-gray-300 dark:text-gray-600">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed max-w-3xl mx-auto">
            <p>
              In practice, the terminology matters less than the features. When evaluating software, focus on whether it covers your specific needs — payroll compliance, performance cycles, attendance integration — rather than whether a vendor calls it HRIS, HRMS, or HCM. Most mid-market cloud platforms marketed as "HRMS" today include what would have been called HCM features five years ago.
            </p>
            <p>
              The meaningful question is: does the system handle your full HR workflow, or does it leave gaps that require additional tools? A fragmented stack of HRIS + standalone ATS + separate performance tool creates the same data silos you're trying to eliminate.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Core Modules */}
      <section id="modules" className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">8 Core HRMS Modules Explained</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A complete HRMS covers every stage of the employee lifecycle. Here's what each module does and why it matters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map(({ icon: Icon, title, color, bg, desc, features }) => (
              <div key={title} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section id="benefits" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">HRMS Benefits & ROI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Measurable outcomes, not vendor promises.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { value: "65–80%", label: "Reduction in HR query volume via employee self-service" },
              { value: "99%", label: "Payroll accuracy after AI anomaly detection deployment" },
              { value: "8–12 hrs", label: "HR admin time saved per week per 100 employees" },
              { value: "35%", label: "Reduction in voluntary attrition with predictive alerts" },
              { value: "48 hrs", label: "Average time to first payroll run on Space HR" },
              { value: "₹0", label: "Cost of statutory rate updates — included in subscription" },
            ].map(({ value, label }) => (
              <div key={label} className="flex gap-4 p-6 bg-white dark:bg-[#0b1121] rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 shrink-0 w-28">{value}</div>
                <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed self-center">{label}</div>
              </div>
            ))}
          </div>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">How to Calculate HRMS ROI for Your Organization</h3>
            <p>
              The ROI calculation for HRMS has three main components. First, <strong>HR admin time savings</strong>: measure the hours your HR team currently spends on payroll processing, leave management, document generation, and responding to employee queries. A 5-person HR team managing 200 employees typically spends 60–80% of their time on administrative tasks. After HRMS deployment, this drops to 20–30%, freeing 3–4 HR team members for strategic work.
            </p>
            <p>
              Second, <strong>payroll error reduction</strong>: manual payroll errors cost organizations an average of 1–3% of total payroll per year in corrections, penalties, and employee disputes. For a company with ₹5 crore annual payroll, that's ₹5–15 lakh in avoidable costs annually. Automated payroll with statutory compliance built in eliminates the majority of these errors.
            </p>
            <p>
              Third, <strong>attrition cost reduction</strong>: replacing an employee costs 0.5–2x their annual salary (recruitment, training, productivity loss during ramp-up). HRMS attrition prediction identifies flight-risk employees before they resign, enabling retention interventions. Organizations using AI attrition alerts report 30–40% reductions in preventable turnover within 12 months.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Lifecycle */}
      <section id="lifecycle" className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">HRMS Across the Employee Lifecycle</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Every touchpoint from offer to exit — managed in one system.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 dark:from-purple-800 dark:via-pink-800 dark:to-purple-800" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: UserPlus, step: "1", title: "Hire", color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30", items: ["Job posting & ATS", "Resume screening", "Offer letter generation", "Background verification"] },
                { icon: Layers, step: "2", title: "Onboard", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30", items: ["Digital document collection", "Statutory registration (PF, ESIC)", "IT & access provisioning", "Buddy & training assignments"] },
                { icon: TrendingUp, step: "3", title: "Develop", color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", items: ["Goal setting (OKRs/KPIs)", "360-degree performance reviews", "Learning course assignments", "Promotion & succession tracking"] },
                { icon: BarChart3, step: "4", title: "Exit", color: "text-pink-600", bg: "bg-pink-100 dark:bg-pink-900/30", items: ["Exit interview workflow", "Final settlement computation", "Relieving letter & experience letter", "PF withdrawal processing"] },
              ].map(({ icon: Icon, step, title, color, bg, items }) => (
                <div key={step} className="relative">
                  <div className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center mx-auto mb-4 relative z-10`}>
                    <Icon className={`w-7 h-7 ${color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">{step}. {title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud vs On-Premise */}
      <section id="cloud-vs-onpremise" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Cloud HRMS vs On-Premise HRMS</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">85%+ of new deployments are cloud-based. Here's why — and the exceptions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white dark:bg-[#0b1121] rounded-2xl border border-purple-200 dark:border-purple-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cloud HRMS (SaaS)</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "No infrastructure cost — vendor hosts everything",
                  "Automatic updates with new features & statutory rates",
                  "Mobile access for employees and managers",
                  "Per-employee monthly pricing — scales with headcount",
                  "Setup in days, not months",
                  "Vendor handles security, backups, and disaster recovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-sm text-purple-700 dark:text-purple-300 font-medium">
                Best for: SMBs, mid-market, multi-location teams, companies without dedicated IT
              </div>
            </div>
            <div className="bg-white dark:bg-[#0b1121] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">On-Premise HRMS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Full control over data — stored on your servers",
                  "No ongoing SaaS fees after initial purchase",
                  "Works without internet connectivity",
                  "Highly customizable for unique processes",
                  "Requires IT team for maintenance and updates",
                  "Higher upfront cost (license + hardware + implementation)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm text-gray-600 dark:text-gray-400 font-medium">
                Best for: Government agencies, highly regulated industries, companies with strict data residency laws
              </div>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              The on-premise vs cloud decision is increasingly one-sided for most organizations. Statutory compliance updates (PF rate changes, TDS slabs, Professional Tax revisions) happen multiple times a year in India alone. With on-premise HRMS, each update requires a manual patch applied by your IT team — often delayed by weeks, creating compliance risk. Cloud HRMS updates automatically, often within hours of regulatory changes being announced.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section id="buyers-guide" className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">How to Choose an HRMS: Buyer's Guide</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Evaluate HRMS vendors on these 8 criteria before signing a contract.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Compliance Coverage for Your Jurisdictions",
                desc: "This is the most critical criterion and the most commonly under-evaluated. Ask vendors to show you exactly how they handle statutory compliance in every country/state you operate in. For India: can they show you a live PF ECR file? Do they calculate ESIC correctly for wages above/below the ₹21,000 threshold? For the US: do they handle SUTA rates for each state you have employees in? Request a compliance demo, not a sales deck.",
              },
              {
                num: "02",
                title: "Total Cost of Ownership",
                desc: "SaaS pricing listed on websites rarely includes implementation, data migration, integrations, training, and premium support. Get a fully-loaded quote: per-employee monthly fee × projected headcount + one-time setup fee + integration costs + annual price escalation clause. Some vendors offer low base rates but charge separately for every module — compare what's included at each tier.",
              },
              {
                num: "03",
                title: "Integration Ecosystem",
                desc: "Your HRMS will need to connect with your accounting software (Tally, QuickBooks, SAP), biometric attendance devices, ERP, job boards, and banking system. Ask for a list of native integrations and verify they work bi-directionally. Generic 'Zapier integration available' means manual mapping — get specifics on the integration you actually need.",
              },
              {
                num: "04",
                title: "Mobile Experience for Employees",
                desc: "If your employees are field workers, factory staff, or remote employees, the mobile ESS experience is not optional. Test the mobile app yourself: can an employee submit a leave request in under 30 seconds? Download a payslip without calling HR? Mark GPS attendance from a phone without signal? These are the workflows that drive adoption.",
              },
              {
                num: "05",
                title: "Implementation Timeline & Support",
                desc: "Ask for a specific go-live timeline with milestones. 'Implementation takes 2–4 weeks' is not a commitment. Get a written project plan covering: data migration timeline, payroll parallel-run period, employee onboarding, and post-go-live support SLA. Find out if you get a dedicated onboarding manager or are routed to generic helpdesk tickets.",
              },
              {
                num: "06",
                title: "Data Security & Compliance",
                desc: "Employee salary and personal data is highly sensitive. Verify: SOC 2 Type II certification, data encryption at rest and in transit, role-based access controls, audit logs for all data access, and where data is hosted (data residency). For Indian companies, check that the vendor's data centers are in India or that the contract covers data localization requirements.",
              },
              {
                num: "07",
                title: "Scalability",
                desc: "An HRMS that works well at 50 employees should also work at 500. Ask vendors for reference customers at 3× your current size. Check whether pricing tiers create 'cliffs' where costs jump dramatically at headcount thresholds. Ensure the reporting and analytics capabilities scale with your data volume.",
              },
              {
                num: "08",
                title: "User Adoption & Interface",
                desc: "The best HRMS fails if employees don't use it. Request a trial account and give it to 5 actual employees — not the IT team or HR manager. Measure: can they find their payslip without training? Can they submit a leave request without a manual? Employee adoption determines whether you get 65% query reduction or 10% query reduction.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-6 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-purple-100 dark:text-purple-900/50 shrink-0 w-14 leading-none">{num}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="implementation" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">HRMS Implementation: Step-by-Step</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">A 5-phase implementation framework for teams of 50–500 employees.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                phase: "Phase 1", weeks: "Week 1–2", title: "Discovery & Data Preparation",
                steps: ["Audit existing HR data across all systems (Excel, legacy HRMS, paper)", "Define employee data fields and mapping to new HRMS schema", "Identify statutory configuration requirements (PF trust or EPFO, ESIC applicability, PT states)", "Export clean employee master data in vendor-specified format"],
              },
              {
                phase: "Phase 2", weeks: "Week 2–3", title: "System Configuration",
                steps: ["Configure salary structures (Basic, HRA, conveyance, allowances)", "Set up PF/ESIC/TDS/PT statutory parameters", "Configure leave policies (types, entitlements, carry-forward rules, holiday calendar)", "Set up reporting hierarchy and approval workflows"],
              },
              {
                phase: "Phase 3", weeks: "Week 3–4", title: "Data Migration & Testing",
                steps: ["Import employee master data and verify accuracy", "Run parallel payroll (process one month simultaneously in old and new system)", "Test leave requests, attendance sync, and document workflows", "Verify all statutory calculations match expected outputs"],
              },
              {
                phase: "Phase 4", weeks: "Week 4", title: "Go-Live & Employee Onboarding",
                steps: ["Send ESS portal invitations to all employees", "Conduct HR team training (30–60 min walkthrough)", "Process first live payroll in new HRMS", "Communicate ESS features to employees (leave, payslip, attendance)"],
              },
              {
                phase: "Phase 5", weeks: "Month 2+", title: "Optimization & Advanced Features",
                steps: ["Enable performance management module (goal setting, appraisal cycle)", "Set up HR analytics dashboards (attrition risk, headcount trends)", "Configure AI payroll anomaly detection rules", "Review statutory compliance reports and ECR filing"],
              },
            ].map(({ phase, weeks, title, steps }) => (
              <div key={phase} className="bg-white dark:bg-[#0b1121] rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{phase}</div>
                    <div className="text-xs text-gray-400 mb-1">{weeks}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {steps.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India-Specific Section */}
      <section id="india" className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
                🇮🇳 HRMS for India
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why HRMS Compliance Complexity Is Higher in India
              </h2>
              <div className="prose prose-base dark:prose-invert text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Indian HR teams face a uniquely complex statutory environment. A single employee payslip may need to account for PF (with the EPF/EPS split: 3.67% to EPF, 8.33% to EPS from employer's 13.36%), ESIC (only if gross wages ≤ ₹21,000), TDS under Section 192 (based on projected annual income and investment declarations), Professional Tax (which varies by state — ₹200/month in Maharashtra and Karnataka, different slabs in Tamil Nadu and West Bengal), and LWF (Labour Welfare Fund, where applicable).
                </p>
                <p>
                  On top of payslip complexity, Indian HR teams must generate monthly ECR (Electronic Challan cum Return) files for EPFO, ESIC returns, TDS Form 24Q quarterly, and annual Form 16 for every employee. Each of these has specific file formats and government portal submission requirements. An HRMS that handles Indian compliance natively — rather than requiring manual calculation and export — is not a luxury, it's a necessity.
                </p>
              </div>
              <Link href="/regions/india" className="inline-flex items-center gap-2 mt-6 text-orange-600 dark:text-orange-400 font-semibold hover:underline">
                India compliance deep dive <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">India Statutory Checklist for HRMS Evaluation</h3>
                <ul className="space-y-3">
                  {[
                    "PF calculation with EPF/EPS split (3.67% + 8.33% employer)",
                    "ESIC applicability logic (≤ ₹21,000 gross wages)",
                    "TDS Section 192 with investment declaration portal",
                    "Professional Tax by state (18 different state slabs)",
                    "Monthly ECR file generation for EPFO portal",
                    "ESIC Form 5 monthly return",
                    "TDS Form 24Q quarterly filing",
                    "Annual Form 16 Part A & Part B generation",
                    "Gratuity calculation (15/26 × years × last drawn salary)",
                    "Labour Welfare Fund where applicable",
                    "Payslip in standard Indian format with all components",
                    "Employee self-service with Form 16 download",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Explore Space HR HRMS Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/features/payroll", label: "AI Payroll Automation", desc: "Automated pay with PF/ESIC/TDS", icon: DollarSign },
              { href: "/features/attendance", label: "GPS Attendance", desc: "Biometric & mobile check-in", icon: Clock },
              { href: "/features/leave-management", label: "Leave Management", desc: "All leave types, approval workflows", icon: FileText },
              { href: "/features/appraisals", label: "Performance Appraisals", desc: "360-degree reviews & OKRs", icon: TrendingUp },
              { href: "/employee-self-service-hrms", label: "Employee Self-Service HRMS", desc: "ESS portal for payslips & documents", icon: Monitor },
              { href: "/features/attrition-prediction", label: "Attrition Prediction", desc: "AI flight-risk alerts before resignations", icon: BarChart3 },
            ].map(({ href, label, desc, icon: Icon }) => (
              <Link key={href} href={href} className="flex items-start gap-3 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121] hover:shadow-md hover:border-purple-400 transition-all">
                <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
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
      <section id="faq" className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">HRMS Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything HR teams and decision-makers ask before deploying an HRMS.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Your HRMS?</h2>
          <p className="text-purple-100 text-xl mb-10 max-w-2xl mx-auto">
            Space HR is a cloud HRMS built for global teams — payroll, leave, attendance, performance, and ESS in one platform. Go live in 48 hours. Request a demo and we&apos;ll follow up with aggressive pricing tailored to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-50 rounded-full px-10 h-14 text-lg font-bold">
                Request HRMS Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                Start Free 14-Day Trial
              </Button>
            </Link>
          </div>
          <p className="text-purple-200 text-sm mt-6">No credit card · India-compliant from day one · 48-hour setup</p>
        </div>
      </section>
    </div>
  );
}
