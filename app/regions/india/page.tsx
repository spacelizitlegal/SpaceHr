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
  title: "HR Software for India | PF, ESI & Payroll Compliance | Space HR",
  description:
    "Space HR delivers AI-powered HR software for Indian enterprises. PF/ESI compliance, TDS management, gratuity automation, and multi-state payroll for India's growing businesses.",
  keywords: [
    "HR software India",
    "HRMS India",
    "payroll software India",
    "PF ESI compliance software",
    "TDS payroll India",
    "gratuity calculation India",
    "HR management system India",
    "best HR software India",
    "Indian labour law compliance",
    "HR automation India",
    "employee management software India",
    "HRIS India",
    "Shops and Establishments Act compliance",
  ],
  openGraph: {
    title: "HR Software for India | Space HR",
    description:
      "PF/ESI compliance, TDS management, gratuity automation, and AI workforce analytics for Indian enterprises.",
    url: "https://spacehr.net/regions/india",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software for India | Space HR",
    description: "PF/ESI compliance, TDS management, gratuity automation, and AI workforce analytics for Indian enterprises.",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/india",
    languages: {
      "en-IN": "https://spacehr.net/regions/india",
      "en-US": "https://spacehr.net/regions/united-states",
      "en-GB": "https://spacehr.net/regions/uk",
      "en-AE": "https://spacehr.net/regions/dubai",
      "x-default": "https://spacehr.net",
    },
  },
};

const faqs = [
  {
    question: "Does Space HR handle PF and ESI deductions automatically?",
    answer:
      "Yes. Space HR automatically calculates and deducts Employee and Employer contributions for Provident Fund (EPF) and Employee State Insurance (ESI) based on current slab rates. It generates ECR files for EPFO and challans for ESIC, and alerts HR when thresholds change.",
  },
  {
    question: "Can Space HR manage TDS on salaries across multiple states?",
    answer:
      "Absolutely. The payroll engine computes TDS under Section 192 based on declared investments (Form 12BB), applies Professional Tax at the correct state-level slab, and produces Form 16 and Form 24Q for seamless ITR filing by employees.",
  },
  {
    question: "Does the platform support gratuity calculation under the Payment of Gratuity Act?",
    answer:
      "Yes. Space HR tracks service tenure from day one and calculates gratuity entitlement automatically when an employee completes 5 years or exits. Configurable rules handle both government and private-sector formulas.",
  },
  {
    question: "Is Space HR compliant with the Shops and Establishments Act?",
    answer:
      "Space HR is pre-configured for state-specific leave entitlements (earned leave, casual leave, sick leave) and working-hour limits as defined under each state's Shops and Establishments Act, reducing compliance risk across multi-state operations.",
  },
  {
    question: "Can Space HR handle payroll for contract and gig workers in India?",
    answer:
      "Yes. Space HR supports multiple employment types — full-time, part-time, contract, and gig — with separate salary structures, applicable deduction rules, and statutory filings for each category.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "India", url: "https://spacehr.net/regions/india" },
];

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "PF & ESI Automation",
    desc: "Auto-calculate EPF/ESI contributions, generate ECR files, and submit challans — zero manual effort.",
  },
  {
    icon: FileText,
    title: "TDS & Form 16",
    desc: "Section 192 TDS computation, 12BB investment declarations, Form 16 auto-generation, and 24Q returns.",
  },
  {
    icon: DollarSign,
    title: "Gratuity Management",
    desc: "Tenure tracking from day of joining, automatic gratuity computation, and payout scheduling on exit.",
  },
  {
    icon: Globe,
    title: "Multi-State Payroll",
    desc: "State-specific Professional Tax slabs, Shops & Establishments rules, and leave entitlement matrices.",
  },
  {
    icon: BarChart3,
    title: "Labour Law Compliance",
    desc: "Maternity Benefit Act, POSH compliance module, contract labour register, and factory-act wage reports.",
  },
  {
    icon: Brain,
    title: "AI Workforce Analytics",
    desc: "Attrition prediction, performance benchmarking, and hiring pattern analysis tailored for Indian talent markets.",
  },
];

const stats = [
  { value: "₹0", label: "Compliance penalty risk with auto-filings" },
  { value: "28+", label: "State-level tax and leave rule sets" },
  { value: "15 min", label: "Average monthly payroll processing time" },
  { value: "99.9%", label: "Uptime SLA across all Indian data centres" },
];

export default function IndiaPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={generateFAQSchema(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#0f1a35] to-[#1a0a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🇮🇳</span>
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
              Space HR for India
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              Indian Compliance
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            From EPF and ESI to TDS, gratuity, and multi-state Professional Tax
            — Space HR automates every Indian statutory obligation so your HR
            team focuses on people, not paperwork.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-orange-400 hover:text-orange-400 transition-colors"
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
                <div className="text-3xl font-bold text-orange-400 mb-2">
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
              Full Indian Statutory Compliance, Automated
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Space HR is pre-configured for every major Indian labour law and
              statutory filing — reducing compliance risk across offices in any
              state.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-orange-400" />
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

      {/* India-Specific Compliance Table */}
      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Indian Labour Law Coverage
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
                  ["Employees' Provident Funds Act", "ECR file generation, challan payments, UAN management", "✅ Automated"],
                  ["Employees' State Insurance Act", "ESI challan, ESIC portal integration, claim tracking", "✅ Automated"],
                  ["Income Tax Act (Section 192)", "TDS slab computation, Form 16, 24Q returns", "✅ Automated"],
                  ["Payment of Gratuity Act", "Tenure tracking, auto calculation, payout scheduling", "✅ Automated"],
                  ["Shops & Establishments Act", "State-wise leave rules, working hours, registers", "✅ Multi-state"],
                  ["Maternity Benefit Act", "Leave entitlement, benefit payments, return-to-work", "✅ Automated"],
                  ["Professional Tax", "State slab tables (MH, KA, TN, WB, AP, TS, etc.)", "✅ 20+ states"],
                  ["Labour Welfare Fund", "State-wise LWF contribution and remittance", "✅ Automated"],
                  ["POSH Act (Prevention of Sexual Harassment)", "Compliance module, ICC register, training tracker", "✅ Included"],
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
            Built for India's Fastest-Growing Sectors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                sector: "IT & SaaS Companies",
                desc: "Variable pay, ESOPs, multi-location offices, and high-attrition workforce management.",
              },
              {
                icon: Users,
                sector: "Manufacturing & FMCG",
                desc: "Factory-act registers, contract labour management, and shift-based payroll.",
              },
              {
                icon: Brain,
                sector: "Startups & Scale-ups",
                desc: "From 10 employees to 10,000 — grows with you without migration or re-implementation.",
              },
              {
                icon: Globe,
                sector: "BPO & Services",
                desc: "Rotational shifts, variable incentives, night differential pay, and high-volume hiring.",
              },
              {
                icon: Shield,
                sector: "BFSI & Fintech",
                desc: "Audit trails, role-based access, and RBI-aligned data residency in Indian servers.",
              },
              {
                icon: Calendar,
                sector: "Healthcare & Pharma",
                desc: "Doctor/nurse rostering, on-call pay, CE credits tracking, and multi-entity payroll.",
              },
            ].map((item) => (
              <div
                key={item.sector}
                className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-orange-400" />
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
            India Payroll Compliance — PF, ESIC, TDS, Gratuity & the Statutory Framework
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
            <p>
              India&apos;s statutory payroll compliance framework is one of the most layered in the world — combining central legislation with state-level variations in professional tax, Shops & Establishments Act requirements, and minimum wage notifications. For HR teams managing payroll across multiple states, the administrative burden compounds quickly: a company with offices in Maharashtra, Karnataka, and Tamil Nadu is simultaneously subject to three different professional tax slabs, three different Shops Act renewal processes, and state-specific minimum wage revisions that occur on different calendar cycles.
            </p>
            <p>
              The Employees&apos; Provident Fund (EPF), governed by the EPF & MP Act 1952, is mandatory for establishments with 20 or more employees. Both employer and employee contribute 12% of the employee&apos;s basic salary and Dearness Allowance (DA) — but the employer&apos;s 12% is split: 3.67% goes to the EPF account and 8.33% to the Employees&apos; Pension Scheme (EPS), subject to the pensionable wage ceiling of ₹15,000 per month. The wage ceiling matters significantly for compliance: EPF contributions must be calculated on actual basic+DA for employees earning below ₹15,000, while for those above, employers can choose to contribute on ₹15,000 or the actual amount. Space HR automates this split, generates ECR (Electronic Challan cum Return) files for EPFO portal submission, and tracks UAN (Universal Account Number) links for all enrolled employees.
            </p>
            <p>
              ESIC (Employees&apos; State Insurance Corporation) applies to employees earning up to ₹21,000 per month in establishments covered under the ESI Act 1948. The contribution rates are 3.25% by the employer and 0.75% by the employee, applied to gross wages. Critically, employees earning up to ₹137 per day are exempted from the employee contribution (though the employer still contributes). Space HR tracks ESIC eligibility dynamically — automatically enrolling employees who cross the coverage threshold due to promotions or wage revisions, and managing challan generation and e-return filing.
            </p>
            <p>
              TDS on salaries (Section 192 of the Income Tax Act) requires employers to deduct tax at source from employee salaries based on the applicable slab rate, after accounting for investments declared under Section 80C (up to ₹1.5 lakh), HRA exemption, standard deduction of ₹50,000, and other eligible deductions. Space HR&apos;s TDS module processes investment declarations collected from employees in January, recalculates projected annual tax, and adjusts monthly TDS deductions for the remaining months of the financial year. Quarterly TDS returns (Form 24Q) are generated automatically, as is Form 16 for each employee at year-end — a document that is increasingly important as employees use it directly for ITR filing.
            </p>
            <p>
              Gratuity under the Payment of Gratuity Act 1972 becomes payable on separation after five years of continuous service, calculated as 15 days of last drawn salary multiplied by years of service, divided by 26 (the working days denominator). The statutory ceiling is ₹20 lakh. Space HR calculates gratuity liability for all eligible employees in real time, maintains a gratuity provision in the financial analytics module, and generates the gratuity payment computation at the time of resignation or retirement — eliminating the manual lookups that commonly delay full-and-final settlements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions — India
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Explore Space HR Features */}
      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Explore Space HR Features
          </h2>
          <p className="text-slate-400 text-center text-sm mb-10">
            Discover how Space HR transforms HR operations across every function.
          </p>
          <h3 className="text-lg font-semibold text-white mb-4">AI & Automation</h3>
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
              <Link href={f.href} key={f.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-4 hover:border-orange-500/40 transition-colors text-center">
                <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">HR & Performance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {[
              { href: "/features/appraisals", label: "Appraisals" },
              { href: "/features/360-performance-appraisals", label: "360° Performance Appraisals" },
              { href: "/features/attendance", label: "Attendance" },
              { href: "/features/employee-self-service", label: "Employee Self-Service" },
            ].map((f) => (
              <Link href={f.href} key={f.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-4 hover:border-orange-500/40 transition-colors text-center">
                <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {[
              { href: "/industries/healthcare", label: "Healthcare" },
              { href: "/industries/banking", label: "Banking" },
              { href: "/industries/retail", label: "Retail" },
              { href: "/industries/manufacturing", label: "Manufacturing" },
              { href: "/industries/government", label: "Government" },
              { href: "/industries/construction", label: "Construction" },
            ].map((f) => (
              <Link href={f.href} key={f.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-4 hover:border-orange-500/40 transition-colors text-center">
                <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">{f.label}</p>
              </Link>
            ))}
          </div>
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
              { href: "/regions/uk", flag: "🇬🇧", label: "United Kingdom" },
              { href: "/regions/dubai", flag: "🇦🇪", label: "Dubai & UAE" },
              { href: "/regions/singapore", flag: "🇸🇬", label: "Singapore" },
              { href: "/regions/canada", flag: "🇨🇦", label: "Canada" },
              { href: "/regions/europe", flag: "🇪🇺", label: "Europe" },
            ].map((r) => (
              <Link href={r.href} key={r.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-500/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">{r.flag}</span>
                <p className="text-gray-900 dark:text-white font-semibold text-xs group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{r.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/regions" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline">
              View all regions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-900/30 to-pink-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Simplify Indian HR Compliance?
          </h2>
          <p className="text-slate-400 mb-8">
            Join hundreds of Indian companies that trust Space HR to automate
            statutory filings and empower their HR teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Book India Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/regions/dubai"
              className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-orange-400 hover:text-orange-400 transition-colors"
            >
              View UAE Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
