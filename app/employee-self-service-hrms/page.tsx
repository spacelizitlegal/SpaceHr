import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Calendar,
  Clock,
  FolderOpen,
  Smartphone,
  Shield,
  Zap,
  Users,
  BarChart3,
  Bell,
  Download,
  Star,
  Globe,
  Lock,
  MessageSquare,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Employee Self Service HRMS: Buyer's Guide & Comparison | Space HR",
  description:
    "Compare employee self-service HRMS options and learn what to look for in a global ESS portal. Covers leave, payslips, attendance, compliance, and ROI for US, UK, UAE, Singapore, India, Canada, and Europe.",
  keywords: [
    "employee self service hrms",
    "employee self service portal",
    "self service hr system",
    "employee self service software",
    "best employee self service hrms",
    "employee self service comparison",
    "hrms self service portal",
    "employee portal hrms",
    "hr self service software",
    "employee self service system",
    "buy employee self service hrms",
  ],
  openGraph: {
    title: "Employee Self Service HRMS: Buyer's Guide | Space HR",
    description:
      "Compare ESS HRMS options for global teams. Learn how to evaluate leave, payroll, attendance, compliance, and ROI.",
    url: "https://spacehr.net/employee-self-service-hrms",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Self Service HRMS: Buyer's Guide | Space HR",
    description:
      "Compare ESS HRMS options and learn what to evaluate for global teams.",
  },
  alternates: {
    canonical: "https://spacehr.net/employee-self-service-hrms",
  },
};

const faqs = [
  {
    question: "What is an Employee Self Service HRMS?",
    answer:
      "An Employee Self Service HRMS (Human Resource Management System) is a digital platform that gives employees direct access to their own HR information and services — without needing to contact HR. Employees can submit leave requests, download payslips, view attendance records, access company documents, and update personal information. Self-service HRMS reduces HR ticket volume by 65–80% and gives employees 24/7 access to HR services from any device.",
  },
  {
    question: "What can employees do in Space HR's ESS portal?",
    answer:
      "Space HR's employee self service portal allows employees to: submit and track leave requests with real-time balance visibility, download monthly payslips with itemized deductions (basic, HRA, PF, ESIC, TDS, professional tax), view and dispute attendance records, download Form 16 and tax computation sheets, access HR documents (offer letters, appointment letters, increment letters, policies), update personal information and bank account details, and view goals and performance review summaries.",
  },
  {
    question: "Is Space HR's ESS HRMS compliant with Indian payroll laws?",
    answer:
      "Yes. Space HR's employee self service HRMS is built for India compliance. Payslips show PF deductions (12% employee contribution on basic + DA), ESIC deductions (0.75% of gross wages for eligible employees), TDS withheld under Section 192, and Professional Tax as applicable in the employee's state. Employees can view their Form 26AS reconciliation summary and download their annual Form 16 directly from the ESS portal.",
  },
  {
    question: "Can employees access the HRMS portal on mobile devices?",
    answer:
      "Yes. Space HR's ESS HRMS is fully mobile-responsive and available as a progressive web app. Employees can mark attendance with GPS verification, submit leave requests, download payslips, and receive HR notifications from their smartphones — no separate app download required. The AI HR concierge also handles requests via WhatsApp chat for employees who prefer messaging over the portal interface.",
  },
  {
    question: "How does employee self service reduce HR workload?",
    answer:
      "Most HR team time is consumed by repetitive queries — 'Where's my payslip?', 'What's my leave balance?', 'Can I get my appointment letter?'. Space HR's self service HRMS automates all of these: payslips generate automatically on payroll processing, leave balances update in real time, and documents are stored in the employee's profile. HR teams that deploy Space HR ESS typically reduce HR query volume by 65–80% within 30 days, freeing HR staff for strategic work.",
  },
  {
    question: "What is the difference between HRMS and HRIS employee portals?",
    answer:
      "Both HRMS and HRIS platforms offer employee self-service portals, but their scope differs. An HRIS (Human Resource Information System) portal typically covers core data: payslips, attendance, leave, and personal information. An HRMS (Human Resource Management System) portal goes further — including performance management (goal tracking, appraisal self-assessments), learning management (course access), and AI-driven features like attrition risk alerts and manager insights. Space HR's ESS is a full HRMS portal, not just an HRIS data viewer.",
  },
  {
    question: "How much does an Employee Self Service HRMS cost?",
    answer:
      "Space HR offers aggressive, flexible pricing for teams worldwide. We don't publish generic rate cards because every company's headcount, compliance needs, and module mix is different. Request a demo and our team will follow up with a tailored quote, plus a free 14-day trial so you can validate the ROI before committing.",
  },
  {
    question: "How long does it take to set up the ESS HRMS portal?",
    answer:
      "Space HR's ESS HRMS can be operational within 48 hours. The setup process involves: employee data import (via Excel or direct HRIS migration), payroll configuration (salary components, PF/ESIC/TDS settings), leave policy setup, and employee invitation via email or bulk import. Space HR's onboarding team handles the configuration — HR does not need technical expertise or IT involvement to go live.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Employee Self Service HRMS", url: "https://spacehr.net/employee-self-service-hrms" },
]);

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Space HR Employee Self Service HRMS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Employee Self Service HRMS portal for global teams — leave requests, payslip access, attendance tracking, and HR document management with multi-country compliance.",
  url: "https://spacehr.net/employee-self-service-hrms",
  offers: {
    "@type": "Offer",
    description: "Aggressive custom pricing for teams worldwide. Request a demo for a tailored quote.",
    url: "https://spacehr.net/request-a-demo",
  },
  provider: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
  },
};

const features = [
  {
    icon: Calendar,
    title: "Leave Requests & Balance",
    desc: "Employees submit leave requests in seconds, see real-time balances for all leave types (earned, sick, casual, LOP), and get instant manager approval notifications. Covers India statutory leave types including Earned Leave, Sick Leave, CL, and Maternity/Paternity.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: FileText,
    title: "Payslip & Salary Access",
    desc: "Monthly payslips auto-generate on payroll processing. Employees download PDF payslips showing gross salary, basic, HRA, conveyance, PF deduction (12%), ESIC (0.75%), TDS under Section 192, Professional Tax, and net pay — no HR intervention needed.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Clock,
    title: "Attendance & Time Tracking",
    desc: "GPS-verified check-in from mobile or biometric integration. Employees view their daily attendance record, flag discrepancies, and request regularization — all without emailing HR. Managers review and approve from their own dashboard.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: FolderOpen,
    title: "HR Documents & Letters",
    desc: "Offer letters, appointment letters, increment letters, relieving letters, Form 16, and company policy documents are stored in the employee's profile. Employees download any document instantly — eliminating 'please send me my offer letter' tickets permanently.",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
];

const indiaFeatures = [
  "PF deduction breakdown (Employee 12% + Employer 3.67% EPF + 8.33% EPS)",
  "ESIC contribution visibility (Employer 3.25% + Employee 0.75%)",
  "TDS withheld under Section 192 with monthly computation",
  "Professional Tax per state (Maharashtra ₹200/month, Karnataka ₹200/month, etc.)",
  "Form 16 annual download directly from ESS portal",
  "LWF (Labour Welfare Fund) deduction where applicable",
  "Gratuity balance and eligibility tracker (5-year threshold)",
  "Investment declaration for 80C, 80D, HRA exemption in employee portal",
];

const stats = [
  { value: "65–80%", label: "Reduction in HR queries within 30 days" },
  { value: "< 3 sec", label: "Average payslip retrieval time" },
  { value: "48 hrs", label: "Time to go live from signup" },
  { value: "Included", label: "Employee mobile access" },
];

export default function EmployeeSelfServiceHRMSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" /> ESS HRMS Buyer's Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Choose the Right{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
                  Employee Self Service
                </span>{" "}
                HRMS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Compare ESS HRMS options and learn what to evaluate before you buy: leave, payroll visibility, attendance, document access, compliance support, and ROI. See how global teams across the US, UK, UAE, Singapore, India, Canada, and Europe use self-service HRMS to reduce HR workload.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
                Get a tailored quote for your headcount and compliance needs · Free 14-day trial
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-a-demo">
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-lg font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                  >
                    Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://cad.spaceaiapp.com/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-14 px-8 text-lg"
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <Image
                  src="/desktop-design-showcase.webp"
                  alt="Space HR employee self service HRMS portal showing payslip access, leave requests, attendance records, and HR documents for global teams"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
              </div>
              {/* Floating ESS card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Leave Approved</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Rahul&apos;s EL request for Dec 23–27 was approved instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-sm text-teal-100">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything Employees Need in One HRMS Portal
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The four highest-volume HR service types — handled entirely by employees themselves, without raising a single ticket.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How the Employee Self Service HRMS Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From employee login to HR action — no manual intervention at any step.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Employee Logs In",
                desc: "Employees access the HRMS self-service portal via browser or mobile. Single sign-on (SSO) with Google Workspace or Microsoft 365 available. First login in under 2 minutes.",
              },
              {
                step: "02",
                title: "Takes Self-Service Action",
                desc: "Submit a leave request, download this month's payslip, check attendance, or retrieve an HR document — all in under 60 seconds. No email to HR. No waiting.",
              },
              {
                step: "03",
                title: "System Processes Automatically",
                desc: "Leave routes to the manager with a single-click approval interface. Payslips generate automatically on payroll run. Attendance discrepancies trigger a review workflow. HR gets notified only for exceptions.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-black text-teal-100 dark:text-teal-900/50 mb-4 leading-none">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIA COMPLIANCE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" /> Country-Specific Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Local Statutory Deductions — Visible in Every Employee Portal
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Employees worldwide contact HR about local deductions — whether PF and TDS in India, federal and state taxes in the US, or PAYE and NIC in the UK. Space HR puts country-specific statutory details directly in the employee self-service HRMS with clear breakdowns and downloadable tax documents. Employees understand their payslip. HR stops answering the same questions.
              </p>
              <Link href="/regions/india">
                <Button variant="outline" className="rounded-full">
                  View India Compliance Guide <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-3">
                {indiaFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE & AI */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                HRMS Self Service on Mobile — GPS Attendance Included
              </h2>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Field employees, remote staff, and factory workers all need mobile HRMS access. Space HR&apos;s mobile-responsive ESS portal works on any smartphone — with GPS-verified attendance check-in, leave request submission, and payslip download from the same interface.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, text: "GPS attendance from any phone" },
                  { icon: Bell, text: "Push notifications for approvals" },
                  { icon: Download, text: "Offline payslip download" },
                  { icon: MessageSquare, text: "WhatsApp HR concierge" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                    <Icon className="w-5 h-5 text-teal-200 shrink-0" />
                    <span className="text-white text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <div className="font-bold text-white">Priya Sharma</div>
                  <div className="text-teal-200 text-sm">HR Manager, Nexus Technologies Pvt Ltd, Pune</div>
                </div>
              </div>
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                &ldquo;Before Space HR, we were spending 3 hours a day answering payslip and leave queries. Our employees in Pune, Bangalore, and the factory floor in Nashik all access their HRMS portal on mobile now. We&apos;ve not received a single &lsquo;can you send my payslip&rsquo; email in 4 months.&rdquo;
              </blockquote>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-white text-sm ml-2">5.0 · Capterra Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ESS HRMS Pricing — Built for Global Teams
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Aggressive pricing with no hidden setup fees. Request a demo and we&apos;ll share a tailored quote for your region.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Request a Quote",
                per: "Tailored for 10 – 50 employees",
                size: "10 – 50 employees",
                features: [
                  "Employee self-service portal",
                  "Leave management (all types)",
                  "Payslip with PF/ESIC/TDS",
                  "Attendance & GPS check-in",
                  "HR document storage",
                  "Mobile access",
                  "Email support",
                ],
                highlighted: false,
              },
              {
                name: "Growth",
                price: "Request a Quote",
                per: "Tailored for 51 – 250 employees",
                size: "51 – 250 employees",
                features: [
                  "Everything in Starter",
                  "Multi-location attendance",
                  "Performance & goal tracking",
                  "AI HR concierge (WhatsApp)",
                  "Advanced leave analytics",
                  "Payroll automation",
                  "Priority support",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                per: "Talk to Sales",
                size: "250+ employees",
                features: [
                  "Everything in Growth",
                  "Custom HRMS integrations",
                  "Dedicated onboarding manager",
                  "SLA-backed support",
                  "Multi-entity payroll",
                  "HRIS data migration",
                  "On-premise option",
                ],
                highlighted: false,
              },
            ].map(({ name, price, per, size, features, highlighted }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 border ${
                  highlighted
                    ? "border-teal-500 bg-teal-600 text-white shadow-2xl scale-105"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121]"
                }`}
              >
                {highlighted && (
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-3">
                    Most Popular
                  </div>
                )}
                <div className={`text-lg font-bold mb-1 ${highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {name}
                </div>
                <div className={`text-2xl font-extrabold mb-1 ${highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {price}
                </div>
                <div className={`text-sm mb-1 ${highlighted ? "text-teal-200" : "text-gray-500 dark:text-gray-400"}`}>
                  {per}
                </div>
                <div className={`text-xs font-semibold mb-6 ${highlighted ? "text-teal-100" : "text-teal-600 dark:text-teal-400"}`}>
                  {size}
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${highlighted ? "text-teal-200" : "text-teal-500"}`} />
                      <span className={`text-sm ${highlighted ? "text-teal-100" : "text-gray-600 dark:text-gray-400"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/request-a-demo">
                  <Button
                    size="lg"
                    className={`w-full rounded-xl font-semibold ${
                      highlighted
                        ? "bg-white text-teal-700 hover:bg-gray-50"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    Request a Demo
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            All tiers include India-compliant payroll, PF/ESIC/TDS, Form 16, and employee mobile access. GST applicable on subscription.
          </p>
        </div>
      </section>

      {/* PROSE — SEO */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Indian Companies Switch to Employee Self Service HRMS
          </h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
            <p>
              Most Indian HR teams of 2–5 people manage 100–500 employees. The majority of their day is consumed not by strategic HR work but by answering recurring employee queries — payslip requests, leave balance checks, document retrieval, and PF calculation doubts. A 200-employee company generates approximately 400–600 HR service requests per month, of which 70–80% are information requests that require no human judgment. An employee self service HRMS eliminates these entirely.
            </p>
            <p>
              The India-specific compliance dimension makes self-service even more critical here than in other markets. Indian employees have more statutory deduction line items on their payslips than employees in most countries — PF (with the EPF/EPS split), ESIC, TDS under Section 192, Professional Tax (which varies by state), and Labour Welfare Fund where applicable. Each of these generates questions. Space HR&apos;s ESS HRMS displays each deduction with its statutory basis and rate, reducing payroll query volume by an average of 75% in the first pay cycle after deployment.
            </p>
            <p>
              The shift from paper-based HR processes to self-service HRMS is accelerating across Indian SMBs. Companies with 50–500 employees — the primary adopter segment — are moving away from emailing HR or walking to the HR cabin for routine requests. The trigger is usually a combination of hybrid work (employees can no longer walk to HR), growth in headcount (the Excel-and-WhatsApp approach breaks down), and regulatory pressure (digital PF/ESIC records are increasingly required for statutory compliance). Space HR&apos;s HRMS self service portal is designed specifically for this migration — it can be deployed in 48 hours without IT involvement, and employees are typically self-sufficient within 2 days of access.
            </p>
            <p>
              The distinction between an HRIS self-service portal and a full HRMS self-service portal matters for growing companies. An HRIS portal shows data — payslips, attendance logs, leave balances. An HRMS self-service portal does more — it enables transactions (submitting leave, updating bank details, completing appraisal self-assessments, declaring tax investments under Section 80C), tracks goals and performance, and connects to payroll so that approved leave immediately affects the payroll calculation. Space HR is a full HRMS self-service platform, not an HRIS viewer — meaning employees can complete HR transactions end-to-end without HR involvement.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Space HR HRMS Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/features/payroll", label: "AI Payroll Automation", icon: IndianRupee },
              { href: "/features/attendance", label: "GPS Attendance Tracking", icon: Clock },
              { href: "/features/leave-management", label: "Leave Management", icon: Calendar },
              { href: "/features/appraisals", label: "Performance Appraisals", icon: TrendingUp },
            ].map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121] hover:shadow-md hover:border-teal-400 transition-all"
              >
                <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions — Employee Self Service HRMS
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about deploying an ESS HRMS in India.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Your Employee Self Service HRMS?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join 500+ companies worldwide using Space HR ESS HRMS. Go live in 48 hours. Request a demo and we&apos;ll follow up with aggressive pricing tailored to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg bg-white text-teal-700 hover:bg-gray-50 font-semibold"
              >
                Request a Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-lg border-white/40 text-white hover:bg-white/10"
              >
                Start Free 14-Day Trial
              </Button>
            </Link>
          </div>
          <p className="text-teal-200 text-sm mt-6">
            No credit card · No IT setup · India-compliant from day one
          </p>
        </div>
      </section>
    </div>
  );
}
