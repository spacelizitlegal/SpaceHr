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
  Users,
  DollarSign,
  Brain,
  Building2,
  FileText,
  Shield,
  Calendar,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Software for UK | PAYE, Auto-Enrolment & IR35 Compliance | Space HR",
  description:
    "Space HR delivers AI-powered HR software for UK businesses. PAYE payroll, auto-enrolment pension, IR35 compliance, UK GDPR, and statutory leave management for British companies.",
  keywords: [
    "HR software UK",
    "HRMS UK",
    "payroll software UK",
    "PAYE payroll system UK",
    "auto enrolment pension software",
    "IR35 compliance HR software",
    "UK GDPR HR system",
    "best HR software UK",
    "UK employment law compliance",
    "HR automation UK",
    "British payroll software",
    "HRIS UK",
    "statutory leave management UK",
    "RTI payroll UK",
  ],
  openGraph: {
    title: "HR Software for UK | Space HR",
    description:
      "PAYE payroll, auto-enrolment pension, IR35 compliance, and AI workforce analytics for UK businesses.",
    url: "https://spacehr.net/regions/uk",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software for UK | Space HR",
    description: "PAYE payroll, auto-enrolment pension, IR35 compliance, and AI workforce analytics for UK businesses.",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/uk",
    languages: {
      "en-GB": "https://spacehr.net/regions/uk",
      "en-US": "https://spacehr.net/regions/united-states",
      "en-IN": "https://spacehr.net/regions/india",
      "en-AE": "https://spacehr.net/regions/dubai",
      "x-default": "https://spacehr.net",
    },
  },
};

const faqs = [
  {
    question: "Does Space HR handle PAYE and Real Time Information (RTI) submissions to HMRC?",
    answer:
      "Yes. Space HR processes PAYE calculations, National Insurance contributions (employee and employer), and submits Full Payment Submissions (FPS) and Employer Payment Summaries (EPS) to HMRC via RTI on each payroll run — fully automated.",
  },
  {
    question: "How does Space HR manage workplace pension auto-enrolment?",
    answer:
      "Space HR automatically assesses workers against auto-enrolment eligibility criteria each pay period, enrolls qualifying employees into your nominated pension scheme, calculates minimum contributions (employee 5%, employer 3% under current legislation), and generates contribution files for major providers including Nest, NOW:Pensions, and Scottish Widows.",
  },
  {
    question: "Can Space HR help manage IR35 off-payroll working rules?",
    answer:
      "Yes. Space HR includes an IR35 status assessment workflow that captures worker details and engagement criteria, logs determinations per CEST guidelines, and applies the correct payroll treatment (inside vs outside IR35) to protect your business from HMRC liability.",
  },
  {
    question: "Is Space HR compliant with UK GDPR for employee data?",
    answer:
      "Absolutely. Space HR is deployed on UK-based servers with ISO 27001-certified infrastructure. Employee data is processed under lawful basis documentation, with built-in subject access request (SAR) workflows, data retention policies, and audit logs — fully aligned with UK GDPR and the Data Protection Act 2018.",
  },
  {
    question: "Does Space HR handle statutory leave entitlements (SMP, SSP, SPP)?",
    answer:
      "Yes. Space HR automates Statutory Maternity Pay (SMP), Statutory Sick Pay (SSP), Statutory Paternity Pay (SPP), Shared Parental Pay (ShPP), and the 28-day annual leave entitlement under the Working Time Regulations — including reclaiming applicable amounts from HMRC.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "United Kingdom", url: "https://spacehr.net/regions/uk" },
];

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "PAYE & RTI",
    desc: "Full PAYE computation, NI calculations, and HMRC Real Time Information submissions on every payroll run.",
  },
  {
    icon: DollarSign,
    title: "Auto-Enrolment Pensions",
    desc: "Eligibility assessment, enrolment, contribution files for Nest/NOW:Pensions/Scottish Widows, and re-enrolment every 3 years.",
  },
  {
    icon: FileText,
    title: "IR35 Off-Payroll",
    desc: "CEST-guided status assessment, determination logging, and correct payroll treatment for inside/outside IR35 engagements.",
  },
  {
    icon: Shield,
    title: "UK GDPR Compliance",
    desc: "UK-based data residency, SAR workflows, retention schedules, and ICO breach notification tooling.",
  },
  {
    icon: Calendar,
    title: "Statutory Leave (SMP/SSP/SPP)",
    desc: "All statutory payment types automated — including HMRC reclaim calculations for eligible small employers.",
  },
  {
    icon: Brain,
    title: "AI Workforce Analytics",
    desc: "Attrition forecasting, diversity & inclusion reporting, and skills gap analysis tailored for UK talent markets.",
  },
];

const stats = [
  { value: "£0", label: "HMRC penalty exposure with automated RTI" },
  { value: "5", label: "Statutory payment types fully automated" },
  { value: "ISO 27001", label: "Certified UK data centre infrastructure" },
  { value: "99.9%", label: "Uptime SLA across all UK deployments" },
];

export default function UKPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={generateFAQSchema(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#0f1a35] to-[#000d2e] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🇬🇧</span>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">
              Space HR for the United Kingdom
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              UK Employment Law
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            From PAYE and RTI to auto-enrolment pensions, IR35, and UK GDPR —
            Space HR automates every British statutory requirement so your team
            stays compliant without the complexity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#0d1525] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Full UK Statutory Compliance, Automated
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Space HR is pre-configured for HMRC requirements, UK employment law,
              and GDPR obligations — so your HR team stays protected, always.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Compliance Table */}
      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            UK Employment Law Coverage
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f1a35] border-b border-slate-700">
                  <th className="text-left text-slate-300 font-semibold px-6 py-4">
                    Regulation / Act
                  </th>
                  <th className="text-left text-slate-300 font-semibold px-6 py-4">
                    Space HR Feature
                  </th>
                  <th className="text-center text-slate-300 font-semibold px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["PAYE / RTI (HMRC)", "FPS/EPS submission, NI tables, tax code management", "✅ Automated"],
                  ["Auto-Enrolment (Pensions Act 2008)", "Eligibility assessment, enrolment, contributions, re-enrolment", "✅ Automated"],
                  ["IR35 Off-Payroll Working Rules", "CEST workflow, determination logs, payroll treatment flag", "✅ Automated"],
                  ["Statutory Maternity/Paternity/Sick Pay", "SMP, SSP, SPP, ShPP calculations and HMRC reclaim", "✅ Automated"],
                  ["Working Time Regulations 1998", "28-day leave entitlement, rest break tracking, opt-out register", "✅ Automated"],
                  ["UK GDPR / Data Protection Act 2018", "UK-based hosting, SAR workflow, retention policies, audit trail", "✅ Certified"],
                  ["Equality Act 2010", "Pay gap reporting, diversity analytics, D&I dashboards", "✅ Included"],
                  ["National Minimum Wage Act", "NMW/NLW threshold checks by age band on every payroll run", "✅ Automated"],
                  ["Employment Rights Act 1996", "Contract storage, notice period rules, redundancy calculation", "✅ Included"],
                ].map(([act, feature, status]) => (
                  <tr key={act} className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-slate-300 font-medium">{act}</td>
                    <td className="px-6 py-4 text-slate-400">{feature}</td>
                    <td className="px-6 py-4 text-center text-green-400 font-medium">
                      {status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built for UK Businesses of Every Size
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                sector: "Professional Services",
                desc: "Multi-entity payroll, partner drawings, IR35 contractor management, and bonus scheme automation.",
              },
              {
                icon: Users,
                sector: "Retail & Hospitality",
                desc: "Rota management, zero-hours contract tracking, holiday accrual on variable pay, and tip compliance.",
              },
              {
                icon: Brain,
                sector: "Tech & Scale-ups",
                desc: "EMI scheme tracking, remote-first workforce tools, and global payroll for UK-headquartered teams.",
              },
              {
                icon: Globe,
                sector: "Financial Services",
                desc: "FCA-regulated employee tracking, senior managers regime records, and PRA conduct rule compliance.",
              },
              {
                icon: Shield,
                sector: "Public Sector & NHS",
                desc: "Agenda for Change pay bands, Superannuation scheme integration, and IR35 public-body rules.",
              },
              {
                icon: Calendar,
                sector: "Healthcare & Social Care",
                desc: "CQC-required staff records, DBS check tracking, mandatory training registers, and bank staff management.",
              },
            ].map((item) => (
              <div
                key={item.sector}
                className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.sector}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSE SECTION */}
      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            UK Payroll Compliance — PAYE, Auto-Enrolment, IR35 & Statutory Leave
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
            <p>
              UK payroll compliance sits at the intersection of HMRC obligations, The Pensions Regulator requirements, and employment law — a combination that creates administrative complexity for businesses of all sizes. PAYE (Pay As You Earn) is the foundational mechanism, but beneath it sits a web of tax codes, National Insurance categories, Real Time Information (RTI) reporting deadlines, and pension auto-enrolment duties that must all operate in synchrony every pay period.
            </p>
            <p>
              PAYE requires employers to calculate income tax withholding using HMRC-issued tax codes for each employee. Tax codes (1257L is the standard code for 2024/25, reflecting the £12,570 personal allowance) encode each employee&apos;s allowances and adjustments. When codes change mid-year — due to a new job, a benefit-in-kind adjustment, or an HMRC amendment — the employer must apply the new code from the date specified. National Insurance contributions run parallel: employees in Category A (the most common) pay 8% on weekly earnings between the Primary Threshold (£242) and Upper Earnings Limit (£967), and 2% above the UEL. Employers pay 13.8% on all earnings above the Secondary Threshold (£175/week), with no upper cap. Space HR maintains current NI category tables and applies changes automatically when HMRC updates thresholds at each fiscal year start.
            </p>
            <p>
              RTI (Real Time Information) requires Full Payment Submissions (FPS) to be sent to HMRC on or before each payday — not monthly or quarterly. Late FPS submissions attract automatic penalties starting at £100 per month for employers with 10–49 employees. Space HR generates and submits FPS files directly to HMRC&apos;s APIs, timestamped before the payroll processing deadline, with confirmation receipts logged in the compliance audit trail.
            </p>
            <p>
              Workplace pension auto-enrolment applies to eligible employees aged 22–66 earning above £10,000 annually. The minimum contribution rates since April 2019 are 5% from the employee and 3% from the employer, applied to qualifying earnings (between £6,240 and £50,270 for 2024/25). Employers must re-enrol opted-out employees every three years. New employees must be assessed for eligibility and enrolled (or postponed) within their first pay period. Space HR tracks enrolment status for each employee, manages opt-out windows, schedules re-enrolment cycles, and generates pension contribution data files in the format required by major pension providers including Nest, The People&apos;s Pension, and NOW Pensions.
            </p>
            <p>
              IR35 off-payroll working rules affect any UK business engaging contractors through personal service companies. Since April 2021, medium and large businesses in the private sector are responsible for determining whether a contractor&apos;s engagement falls inside or outside IR35 using HMRC&apos;s CEST (Check Employment Status for Tax) tool. Inside-IR35 determinations require the business to deduct income tax and NI as if the contractor were an employee. Space HR maintains Status Determination Statements (SDS) for all contractor engagements, tracks compliance with IR35 assessment obligations, and processes inside-IR35 contractors through the payroll engine at the appropriate withholding rates — providing a clean audit trail for any future HMRC enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions — United Kingdom
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Other Regions</h2>
          <p className="text-gray-500 dark:text-slate-400 text-center text-sm mb-8">Space HR delivers built-in payroll compliance in 7 major regions worldwide.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/regions/united-states", flag: "🇺🇸", label: "United States" },
              { href: "/regions/dubai", flag: "🇦🇪", label: "Dubai & UAE" },
              { href: "/regions/india", flag: "🇮🇳", label: "India" },
              { href: "/regions/singapore", flag: "🇸🇬", label: "Singapore" },
              { href: "/regions/canada", flag: "🇨🇦", label: "Canada" },
              { href: "/regions/europe", flag: "🇪🇺", label: "Europe" },
            ].map((r) => (
              <Link href={r.href} key={r.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">{r.flag}</span>
                <p className="text-gray-900 dark:text-white font-semibold text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{r.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/regions" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              View all regions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Simplify UK HR Compliance?
          </h2>
          <p className="text-slate-400 mb-8">
            Join UK businesses that trust Space HR to automate PAYE, pensions,
            and employment law — from SMEs to enterprise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Book UK Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/regions/dubai"
              className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              View UAE Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
