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

      {/* FAQ */}
      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions — India
          </h2>
          <FAQAccordion items={faqs} />
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
