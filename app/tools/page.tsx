import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  DollarSign,
  Users,
  TrendingDown,
  BarChart3,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free HR Tools & Calculators | Space HR",
  description:
    "Free HR calculators for employee costs, turnover, cost-per-hire, ROI, and payroll errors. Instant results, no signup required.",
  keywords: [
    "free HR tools",
    "HR calculators",
    "employee cost calculator",
    "turnover calculator",
    "cost per hire calculator",
    "HR ROI calculator",
    "payroll error calculator",
    "free HR software tools",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools",
  },
  openGraph: {
    title: "Free HR Tools & Calculators | Space HR",
    description:
      "Free HR calculators for employee costs, turnover, cost-per-hire, ROI, and payroll errors. Instant results, no signup required.",
    url: "https://spacehr.net/tools",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HR Tools & Calculators | Space HR",
    description:
      "Free HR calculators for employee costs, turnover, cost-per-hire, ROI, and payroll errors. Instant results, no signup required.",
  },
};

const calculators = [
  {
    title: "Employee Cost Calculator",
    description:
      "Calculate the total annual and monthly cost of employing one employee — including salary, taxes, benefits, bonuses, and overhead.",
    href: "/tools/employee-cost-calculator",
    icon: DollarSign,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Employee Turnover Calculator",
    description:
      "Calculate your employee turnover rate and estimate the annual cost of employee turnover for your organization.",
    href: "/tools/employee-turnover-calculator",
    icon: Users,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    title: "Cost Per Hire Calculator",
    description:
      "Calculate your true cost per hire including advertising, agency fees, interview costs, onboarding, and more.",
    href: "/tools/cost-per-hire-calculator",
    icon: Calculator,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "HR ROI Calculator",
    description:
      "Estimate potential savings from HR automation by comparing manual HR process costs with estimated automation savings.",
    href: "/tools/hr-roi-calculator",
    icon: BarChart3,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Payroll Error Cost Calculator",
    description:
      "Calculate the annual cost of payroll errors including direct error costs and time spent on corrections.",
    href: "/tools/payroll-error-cost-calculator",
    icon: TrendingDown,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
];

const existingTools = [
  {
    title: "True Cost Calculator",
    description:
      "Get a quick estimate of the fully loaded cost of an employee using salary, benefits level, and overhead inputs.",
    href: "/tools/true-cost-calculator",
    icon: DollarSign,
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    title: "W-4 Form Generator",
    description:
      "Fill out your IRS W-4 Employee's Withholding Certificate online and download a completed PDF in minutes.",
    href: "/tools/w4-generator",
    icon: FileText,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    title: "FW-4 Form Download",
    description:
      "Download the official IRS FW-4 (Form W-4) PDF for employee federal tax withholding.",
    href: "/tools/fw4-form-download",
    icon: Download,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    title: "W-2 Form Download",
    description:
      "Access W-2 form resources for employee wage and tax reporting.",
    href: "/tools/w2-form-download",
    icon: FileText,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1121] font-sans pt-20">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://spacehr.net" },
          { name: "Tools", url: "https://spacehr.net/tools" },
        ])}
      />

      {/* Hero */}
      <div className="bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 pb-12 pt-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide mb-6">
            <Calculator className="w-4 h-4" />
            Free HR Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Free HR Tools &amp; Calculators
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Space HR provides free, instant HR calculators and tools to help
            you make better workforce decisions. No signup required — use any
            tool directly in your browser.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        {/* Calculators Section */}
        <section aria-labelledby="calculators-heading" className="mb-16">
          <h2
            id="calculators-heading"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-3"
          >
            HR Calculators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
            Calculate employee costs, turnover impact, recruiting spend,
            automation savings, and payroll error costs. Each calculator
            provides instant results with clear explanations of the formulas
            used.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                    Use Calculator
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Existing Tools Section */}
        <section aria-labelledby="other-tools-heading" className="mb-16">
          <h2
            id="other-tools-heading"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-3"
          >
            Other HR Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
            Download official IRS forms, generate W-4 certificates, and get
            quick cost estimates with these additional free tools.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {existingTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                    Open Tool
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Use Section */}
        <section aria-labelledby="why-heading" className="mb-16">
          <h2
            id="why-heading"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Why Use Free HR Calculators?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Instant Results
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                All calculations happen in your browser. No data is sent to
                any server, and results appear instantly as you adjust inputs.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                No Signup Required
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Use any calculator freely without creating an account. Every
                tool is available immediately with no restrictions.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Clear Formulas
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every calculator explains the formula used so you understand
                exactly how results are derived and can verify them yourself.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Ready to Automate Your HR Operations?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
            Space HR&apos;s AI-powered platform automates payroll, performance
            management, and workforce analytics. See how our tools compare to
            manual processes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request-a-demo">
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-md hover:shadow-lg">
                Request a Demo
              </button>
            </Link>
            <Link href="/features">
              <button className="px-6 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold transition-colors shadow-sm">
                Explore Features
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
