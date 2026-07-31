import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import {
  CheckCircle,
  ArrowRight,
  Globe,
  ShieldCheck,
  BarChart3,
  DollarSign,
  Brain,
  Building2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Payroll & HR Compliance Software | Space HR",
  description:
    "Space HR helps Canadian teams automate payroll, provincial tax withholding, CRA-ready workflows, and AI-powered workforce analytics.",
  keywords: [
    "Canada payroll software",
    "Canadian HR software",
    "CRA payroll compliance",
    "provincial payroll tax automation",
    "Canada HRMS",
    "Canadian workforce analytics",
    "payroll compliance Canada",
    "ROE payroll software",
    "CPP EI payroll calculation",
  ],
  openGraph: {
    title: "Canada Payroll & HR Compliance Software | Space HR",
    description:
      "Automate Canadian payroll, provincial tax compliance, and workforce operations with Space HR.",
    url: "https://spacehr.net/regions/canada",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Payroll & HR Compliance Software | Space HR",
    description: "Automate Canadian payroll, provincial tax compliance, and workforce operations with Space HR.",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/canada",
  },
};

const faqs = [
  {
    question: "Does Space HR support Canadian payroll compliance?",
    answer:
      "Yes. Space HR supports Canadian payroll workflows including federal and provincial calculations, payroll controls, and compliance-ready records for internal and external audits.",
  },
  {
    question: "Can Space HR manage province-level payroll differences?",
    answer:
      "Yes. Space HR supports province-level configurations so payroll teams can manage regional rule differences and reporting workflows from one platform.",
  },
  {
    question: "Can Space HR help with year-end payroll documents in Canada?",
    answer:
      "Yes. Space HR provides structured payroll data and document workflows to simplify year-end processing and employee tax document distribution.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "Canada", url: "https://spacehr.net/regions/canada" },
]);

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-20 bg-gradient-to-b from-rose-50 to-white dark:from-rose-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> Canada
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Canada Payroll &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500">
              HR Compliance Software
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Run Canadian payroll and HR operations with confidence. Space HR
            helps teams standardize provincial payroll workflows, reduce manual
            errors, and improve compliance readiness with AI-powered checks.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started in Canada <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for Canadian Payroll Teams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Provincial Payroll Controls",
                description:
                  "Configure payroll by province to keep operations consistent across distributed Canadian teams.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Compliance-Ready Workflows",
                description:
                  "Maintain clean payroll records and review trails that support CRA-oriented internal governance.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Year-End Payroll Support",
                description:
                  "Simplify year-end processing and employee document delivery with centralized payroll data.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Payroll Auditing",
                description:
                  "Detect payroll outliers before processing to reduce risk and manual rework.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Multi-Entity Operations",
                description:
                  "Run payroll for multiple entities and teams in one platform with consistent controls.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Employee Self-Service",
                description:
                  "Give employees access to payroll documents and updates with less administrative overhead.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Canada Compliance & Deductions Table
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Standard deductions and reporting guidelines supported natively by Space HR for Canadian provinces.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-[#0b1121] mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-4 border-b dark:border-gray-700 font-bold text-sm text-gray-700 dark:text-white">Statutory Item</th>
                  <th className="p-4 border-b dark:border-gray-700 font-bold text-sm text-gray-700 dark:text-white">Supported Actions</th>
                  <th className="p-4 border-b dark:border-gray-700 font-bold text-sm text-gray-700 dark:text-white">CRA / Provincial Authority</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-800 text-gray-600 dark:text-gray-300">
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">CPP (Canada Pension Plan)</td>
                  <td className="p-4">Automated calculation of employee & employer contributions (5.95% up to YMPE).</td>
                  <td className="p-4">Canada Revenue Agency (CRA)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">EI (Employment Insurance)</td>
                  <td className="p-4">Automated withholding calculation (1.66% employee, 1.4x employer matching).</td>
                  <td className="p-4">CRA / Service Canada</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">ROE (Record of Employment)</td>
                  <td className="p-4">One-click generation of Service Canada-compatible ROE files for departing staff.</td>
                  <td className="p-4">Service Canada</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">T4 & T4A Slip Filing</td>
                  <td className="p-4">Centralized XML file compilation for CRA XML schema transfers and employee copies.</td>
                  <td className="p-4">CRA</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Quebec QPP & QPIP</td>
                  <td className="p-4">Custom calculations for QPP contributions, QPIP premiums, and provincial tax brackets.</td>
                  <td className="p-4">Revenu Québec</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Provincial Health Taxes</td>
                  <td className="p-4">Automated calculation of Ontario EHT, BC EHT, and Manitoba HAPL tax brackets.</td>
                  <td className="p-4">Provincial Ministries of Finance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Canada Coverage Highlights
          </h2>
          <div className="space-y-4">
            {[
              "Province-aware payroll workflows",
              "Compliance-focused payroll records",
              "Centralized year-end payroll operations",
              "AI checks for payroll anomalies",
              "Scalable setup for growing Canadian teams",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSE SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Canadian Payroll Compliance — CPP, EI, Provincial Tax & CRA Obligations
          </h2>
          <div className="space-y-5 text-gray-700 dark:text-slate-300 leading-relaxed text-lg">
            <p>
              Canadian payroll compliance is uniquely complex because it operates at two levels simultaneously: federal obligations (CPP, EI, federal income tax) apply uniformly across most of the country, while provincial income tax, Workers&apos; Compensation premiums, and employment standards vary significantly by province. A company with employees in Ontario, British Columbia, Alberta, and Quebec is subject to four different tax rates, four different WCB/WSIB premium structures, four different employment standards codes — and Quebec adds its own pension plan (QPP) and parental insurance plan (QPIP) entirely separate from the federal programs.
            </p>
            <p>
              Canada Pension Plan (CPP) contributions are mandatory for employees aged 18–70 outside Quebec, on employment income between the basic exemption ($3,500) and the maximum pensionable earnings ceiling ($68,500 for 2024). Both employee and employer contribute at 5.95%, with the employer matching dollar-for-dollar. CPP2 — the second additional contribution introduced in 2024 — applies at 4% on earnings between the first ceiling ($68,500) and the second ceiling ($73,200). Quebec employees contribute to QPP instead, which has different rates. Space HR tracks CPP and QPP contributions separately by province and maintains year-to-date maximums to stop deductions once employees reach their annual ceiling.
            </p>
            <p>
              Employment Insurance (EI) premiums for 2024 are 1.66% of insurable earnings for employees (maximum insurable earnings: $63,200), with employers paying 1.4 times the employee rate — 2.324%. Quebec EI rates are lower because QPIP provides provincially-funded parental benefits. When an employee&apos;s employment ends for any reason, employers must issue a Record of Employment (ROE) within 5 calendar days of the last day paid — or within 5 days of becoming aware of an interruption. Late ROEs can delay EI benefits for former employees and attract CRA penalties. Space HR generates ROE files in the standard XML format accepted by Service Canada&apos;s ROE Web portal, pre-populated with all required earnings history and insurable hours data.
            </p>
            <p>
              Provincial income tax withholding applies at each province&apos;s marginal rates in addition to federal tax. Ontario&apos;s top rate of 13.16% stacks on top of the federal rate of 33%, creating effective marginal rates above 50% for high earners. Provincial tax credits (basic personal amount, age credit, disability credit) reduce withholding and differ by province. Space HR maintains current provincial tax tables and applies the correct withholding for employees based on their province of employment — not their province of residence, which matters for remote workers crossing provincial borders.
            </p>
            <p>
              T4 slips must be distributed to employees and submitted to CRA by the last day of February following the tax year. T4 Summary and electronic T4 filings are mandatory for employers filing 6 or more T4 slips. The T4 must accurately report all employment income, CPP contributions, EI premiums, income tax deducted, and any taxable benefits. Space HR generates T4 XML files in the CRA-specified schema, validates them against CRA business rules before submission, and maintains a digital copy of each T4 linked to the employee record for reference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Explore Space HR Features */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Explore Space HR Features
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-center text-sm mb-10">
            Discover how Space HR transforms HR operations across every function.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI & Automation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {[
              { href: "/features/ai-chatbots", label: "AI Chatbots" },
              { href: "/features/ai-automation", label: "AI Automation" },
              { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
              { href: "/features/ai-templates", label: "AI Templates" },
              { href: "/features/attrition-prediction", label: "Attrition Prediction" },
              { href: "/features/cost-prediction", label: "Cost Prediction" },
              { href: "/features/hr-ai-concierge", label: "HR AI Concierge" },
            ].map((f) => (
              <Link href={f.href} key={f.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-500/40 transition-colors text-center">
                <p className="text-gray-900 dark:text-white font-semibold text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HR & Performance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {[
              { href: "/features/appraisals", label: "Appraisals" },
              { href: "/features/360-performance-appraisals", label: "360° Performance Appraisals" },
              { href: "/features/attendance", label: "Attendance" },
              { href: "/features/employee-self-service", label: "Employee Self-Service" },
            ].map((f) => (
              <Link href={f.href} key={f.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-500/40 transition-colors text-center">
                <p className="text-gray-900 dark:text-white font-semibold text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Industries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {[
              { href: "/industries/healthcare", label: "Healthcare" },
              { href: "/industries/banking", label: "Banking" },
              { href: "/industries/retail", label: "Retail" },
              { href: "/industries/manufacturing", label: "Manufacturing" },
              { href: "/industries/government", label: "Government" },
              { href: "/industries/construction", label: "Construction" },
            ].map((f) => (
              <Link href={f.href} key={f.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-500/40 transition-colors text-center">
                <p className="text-gray-900 dark:text-white font-semibold text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] border-t border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Other Regions</h2>
          <p className="text-gray-500 dark:text-slate-400 text-center text-sm mb-8">Space HR delivers built-in payroll compliance in 7 major regions worldwide.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/regions/united-states", flag: "🇺🇸", label: "United States" },
              { href: "/regions/uk", flag: "🇬🇧", label: "United Kingdom" },
              { href: "/regions/dubai", flag: "🇦🇪", label: "Dubai & UAE" },
              { href: "/regions/india", flag: "🇮🇳", label: "India" },
              { href: "/regions/singapore", flag: "🇸🇬", label: "Singapore" },
              { href: "/regions/europe", flag: "🇪🇺", label: "Europe" },
            ].map((r) => (
              <Link href={r.href} key={r.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-500/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">{r.flag}</span>
                <p className="text-gray-900 dark:text-white font-semibold text-xs group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{r.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/regions" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">
              View all regions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-rose-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Scale Canadian Payroll with Confidence
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Standardize payroll and HR operations across Canadian teams.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-rose-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
