import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Global HR Software | US, UK, UAE, India, Singapore & More | Space HR",
  description:
    "Space HR is a US-based HR platform delivering country-specific HR and payroll compliance for the United States, United Kingdom, UAE, India, Singapore, Canada, and Europe. Built-in local regulations, no manual configuration needed.",
  keywords: [
    "global HR software",
    "international HR software",
    "multi-country payroll compliance",
    "HR software United States",
    "HR software UK",
    "HR software UAE",
    "HR software India",
    "HR software Singapore",
    "HR software Canada",
    "HR software Europe",
    "global HRMS",
    "international payroll compliance",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Global HR Software | Space HR",
    description: "Country-specific HR and payroll compliance for the US, UK, UAE, India, Singapore, Canada, and Europe — built in, not bolted on.",
  },
  alternates: { canonical: "https://spacehr.net/regions" },
  openGraph: {
    title: "Global HR Software | Space HR",
    description:
      "Country-specific HR and payroll compliance for the US, UK, UAE, India, Singapore, Canada, and Europe — built in, not bolted on.",
    url: "https://spacehr.net/regions",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630 }],
    siteName: "Space HR",
    type: "website",
  },
};

const regions = [
  {
    href: "/regions/united-states",
    flag: "🇺🇸",
    label: "United States",
    badge: "50-State Payroll",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-300 dark:border-blue-700",
    accent: "text-blue-600 dark:text-blue-400",
    desc: "Full 50-state payroll compliance including Federal (FUTA, FICA), State (SIT/SUI/SDI), NACHA ACH file generation, W-2/W-4 management, and California pay transparency.",
    bullets: ["FUTA / FICA / NACHA ACH", "All 50 states + local taxes", "W-2 & W-4 generation"],
  },
  {
    href: "/regions/uk",
    flag: "🇬🇧",
    label: "United Kingdom",
    badge: "PAYE & RTI",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    border: "border-red-300 dark:border-red-700",
    accent: "text-red-600 dark:text-red-400",
    desc: "PAYE payroll, Real Time Information (RTI) HMRC submissions, workplace pension auto-enrolment, IR35 compliance, statutory leave, and UK GDPR employee data management.",
    bullets: ["PAYE / RTI / NIC", "Auto-enrolment pension", "IR35 & UK GDPR"],
  },
  {
    href: "/regions/dubai",
    flag: "🇦🇪",
    label: "Dubai & UAE",
    badge: "WPS Compliant",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    border: "border-amber-300 dark:border-amber-700",
    accent: "text-amber-600 dark:text-amber-400",
    desc: "WPS-compliant salary information files, MOHRE visa and labour card tracking, automatic gratuity (EOSB) calculation, DIFC/ADGM rules, and unemployment insurance (ILOE).",
    bullets: ["WPS / MOHRE integration", "Automatic EOSB gratuity", "DIFC & ADGM rules"],
  },
  {
    href: "/regions/india",
    flag: "🇮🇳",
    label: "India",
    badge: "PF & ESI",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    border: "border-orange-300 dark:border-orange-700",
    accent: "text-orange-600 dark:text-orange-400",
    desc: "EPF, ESI, Professional Tax, TDS deductions, statutory bonus, gratuity under the Gratuity Act, and compliance with state-specific Shops & Establishments rules.",
    bullets: ["EPF / ESI / PT / TDS", "Statutory bonus & gratuity", "State Shops Act compliance"],
  },
  {
    href: "/regions/singapore",
    flag: "🇸🇬",
    label: "Singapore",
    badge: "CPF & MOM",
    badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    border: "border-rose-300 dark:border-rose-700",
    accent: "text-rose-600 dark:text-rose-400",
    desc: "CPF contribution calculations, MOM-compliant payslips, Employment Act statutory leave, work pass and S-Pass tracking, and IR8A tax form generation.",
    bullets: ["CPF contribution engine", "MOM-compliant payslips", "IR8A tax filing"],
  },
  {
    href: "/regions/canada",
    flag: "🇨🇦",
    label: "Canada",
    badge: "Federal & Provincial",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    border: "border-red-300 dark:border-red-700",
    accent: "text-red-600 dark:text-red-400",
    desc: "Federal CPP, EI, and income tax deductions across all provinces, Quebec-specific QC tax rules, Record of Employment (ROE) generation, and PIPEDA data privacy compliance.",
    bullets: ["CPP / EI / Federal & Provincial tax", "Quebec QC rules", "ROE & PIPEDA compliance"],
  },
  {
    href: "/regions/europe",
    flag: "🇪🇺",
    label: "Europe",
    badge: "GDPR",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    border: "border-indigo-300 dark:border-indigo-700",
    accent: "text-indigo-600 dark:text-indigo-400",
    desc: "GDPR-compliant employee data management with EU data residency, Works Council consultation workflows, country-specific social security contributions, and multi-currency payroll.",
    bullets: ["EU data residency", "GDPR & Works Council tools", "Multi-country payroll"],
  },
];

const faqs = [
  {
    question: "Does Space HR handle payroll in multiple countries simultaneously?",
    answer:
      "Yes. Space HR supports multi-country payroll within a single platform. Each country has its own payroll engine with local tax tables, statutory deductions, and compliance rules — managed through one unified dashboard. This is particularly useful for companies with employees in the US, UK, UAE, and India at the same time.",
  },
  {
    question: "Where is employee data stored for GDPR and data residency compliance?",
    answer:
      "Space HR offers UK, EU, and US data residency options. European and UK customers can select EU or UK hosting to comply with GDPR and UK GDPR data localisation requirements. UAE and Singapore customers have dedicated regional infrastructure options.",
  },
  {
    question: "Does Space HR update automatically when local employment law changes?",
    answer:
      "Yes. Space HR's compliance team updates payroll tax tables, statutory rates, and regulatory requirements as laws change — at no extra charge. You are notified of material changes (e.g., new CPF rates, NIC threshold changes) ahead of their effective date.",
  },
  {
    question: "Can Space HR manage employees on work visas or expatriate assignments?",
    answer:
      "Yes. Space HR tracks visa types, work permit expiry, and labour card renewal deadlines across all supported regions. For expatriate assignments, it can handle split payroll and shadow payroll between home and host country.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
];

const wins = [
  "7 countries, one platform",
  "Auto-updating tax tables",
  "UK, EU & US data residency",
  "Multi-currency payroll",
  "Work visa & permit tracking",
  "GDPR & local data laws built in",
];

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">Regions</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold mb-8 uppercase tracking-wide border border-blue-200 dark:border-blue-800">
            Global HR Coverage
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            HR & Payroll Compliance<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Wherever You Operate
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Headquartered in the United States, Space HR ships with local payroll engines, statutory compliance rules, and data residency options for 7 major regions — no manual tax configuration required.
          </p>
        </div>
      </section>

      {/* Why Space HR */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">One Platform, Global Compliance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wins.map((w) => (
              <div key={w} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Select Your Region</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10">See the specific compliance coverage, payroll rules, and statutory benefits Space HR handles for each country.</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {regions.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 ${r.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{r.flag}</span>
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-white group-hover:${r.accent} transition-colors`}>
                      {r.label}
                    </h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-3 flex-shrink-0 ${r.badgeColor}`}>
                    {r.badge}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{r.desc}</p>
                <ul className="space-y-1 mb-5">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${r.accent}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${r.accent}`}>
                  See {r.label} compliance details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready for Global HR Compliance?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Book a demo showing how Space HR handles payroll compliance in your specific country — or across all your locations at once.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-a-demo" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all hover:scale-105">
              Book Global Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/features" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
              View All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
