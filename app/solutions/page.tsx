import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Bot, Users, BarChart3, Headphones, Settings, Zap, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Solutions by Role & Use Case | Space HR",
  description:
    "Explore Space HR solutions built for CEOs, HR Admins, and employees — including AI chatbots, employee self-service, and chatbot-for-HR-services.",
  alternates: { canonical: "https://spacehr.net/solutions" },
  openGraph: {
    title: "HR Solutions by Role & Use Case | Space HR",
    description:
      "Explore Space HR solutions built for CEOs, HR Admins, and employees — including AI chatbots, employee self-service, and chatbot-for-HR-services.",
    url: "https://spacehr.net/solutions",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630 }],
  },
};

const solutions = [
  {
    href: "/solutions/ceo",
    label: "For CEOs & Executives",
    desc: "Real-time workforce analytics, cost forecasting, and board-ready reporting to align HR strategy with business goals.",
    icon: BarChart3,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    href: "/solutions/hr-admin",
    label: "For HR Admins",
    desc: "Automate onboarding, compliance, payroll, and leave management — eliminate manual work and cut admin time by 70%.",
    icon: Settings,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30",
  },
  {
    href: "/solutions/employees",
    label: "For Employees",
    desc: "Self-service leave requests, payslips, goal tracking, and AI concierge support — available 24/7 from any device.",
    icon: Users,
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    href: "/solutions/hr-ai-chatbot",
    label: "HR AI Chatbot",
    desc: "Deploy a purpose-built AI chatbot for HR that answers policy questions, processes requests, and escalates to humans intelligently.",
    icon: Bot,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    href: "/solutions/employee-self-service",
    label: "Employee Self-Service Portal",
    desc: "Give employees instant access to HR tasks — with an ROI calculator showing how 24/7 automation saves your team hundreds of hours.",
    icon: Zap,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    href: "/solutions/chatbot-for-hr-services",
    label: "Chatbot for HR Services",
    desc: "End-to-end chatbot automation for HR services — from IT integration to deployment, GDPR compliance, and multi-language support.",
    icon: Headphones,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    href: "/solutions/enterprise-hr-chatbot",
    label: "Enterprise AI Chatbot",
    desc: "Enterprise-grade AI HR chatbot with SSO, SCIM provisioning, data residency controls, and deep Workday/SAP integrations.",
    icon: Bot,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    href: "/solutions/hr-helpdesk-chatbot",
    label: "HR Helpdesk Chatbot",
    desc: "Automate your internal HR service desk with an AI chatbot that pre-triages inquiries and escalates to ServiceNow or Jira.",
    icon: Settings,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-900/30",
  },
  {
    href: "/solutions/internal-employee-chatbot",
    label: "Internal Employee Chatbot",
    desc: "Deploy a secure AI HR Concierge directly in Slack or Teams to request PTO, query handbooks, and download documents.",
    icon: Users,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
];

export default function SolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">Solutions</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-sm font-bold mb-8 uppercase tracking-wide border border-violet-200 dark:border-violet-800">
            Built for Every Role
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            HR Solutions That Match<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
              How You Actually Work
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are a CEO needing board-ready analytics, an HR admin drowning in tickets, or an employee who just wants a payslip at 11pm — Space HR has a solution for you.
          </p>
          <Link
            href="/request-a-demo"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all hover:scale-105"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${s.bg}`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {s.label}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${s.color}`}>
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore More</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Dive into platform features, compare alternatives, or see pricing.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/features", label: "All Features" },
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/workday", label: "vs Workday" },
              { href: "/payroll-anomaly-detection", label: "Payroll Anomaly Detection" },
              { href: "/features/ai-chatbots", label: "AI Chatbots" },
              { href: "/demo", label: "Watch Demo" },
              { href: "/request-a-demo", label: "Book a Demo" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-300 dark:hover:border-violet-700 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}