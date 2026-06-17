import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, ShieldCheck, FileText, Users, Brain, BarChart3, Lock, Globe, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Government & Public Sector | Compliance, Pensions & Workforce Planning | Space HR",
  description: "Space HR helps government agencies and public sector organisations manage civil service HR compliance, public pension schemes, workforce planning, and diversity reporting with secure, auditable HR automation.",
  keywords: [
    "HR software government", "public sector HR system", "civil service HR software",
    "government workforce management", "public sector payroll software", "civil service pension HR",
    "government HRMS", "public sector compliance HR", "NHS HR software",
    "local government HR system", "government employee management", "public sector workforce planning",
    "diversity reporting public sector", "IR35 public sector HR",
  ],
  openGraph: {
    title: "HR Software for Government & Public Sector | Space HR",
    description: "Civil service compliance, public pension schemes, workforce planning, and secure auditable HR for government organisations.",
    url: "https://spacehr.net/industries/government",
  },
  alternates: { canonical: "https://spacehr.net/industries/government" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Government & Public Sector", url: "https://spacehr.net/industries/government" },
];

const faqs = [
  { question: "Does Space HR support public sector pension schemes (LGPS, Civil Service Pension, NHS Superannuation)?", answer: "Yes. Space HR is pre-configured for major public sector pension schemes including LGPS, Civil Service Pension Scheme (Alpha/Classic), and NHS Superannuation. Contribution calculations, member records, and annual returns are automated, with employer contribution rates applied by grade and scheme." },
  { question: "How does Space HR handle IR35 off-payroll working rules for public sector bodies?", answer: "As a public sector body (within the meaning of Chapter 10, Part 2, ITEPA 2003), government organisations are responsible for IR35 determinations on contractor engagements. Space HR includes an IR35 assessment workflow, CEST-aligned determination logging, and correct payroll treatment for inside-IR35 contractors." },
  { question: "Does Space HR support diversity, equality, and inclusion reporting required for public sector equality duty?", answer: "Yes. Space HR's workforce analytics include gender pay gap reports (for organisations with 250+ employees), ethnicity pay analysis, disability representation dashboards, and PSED-aligned workforce diversity reports — all exportable for publication on gov.uk or equivalent portals." },
  { question: "Can Space HR manage structured pay grades and pay progression for civil service roles?", answer: "Yes. Space HR supports pay band structures (equivalent to Civil Service pay frameworks), annual pay progression rules (increment, cost-of-living, performance-linked), and grade-based salary ranges with automatic flag when an employee approaches pay band ceiling." },
  { question: "What security accreditations does Space HR hold — suitable for government use?", answer: "Space HR holds SOC 2 Type II certification, is hosted on ISO 27001-certified infrastructure, and supports UK Government Security Classification (OFFICIAL) data. For higher-tier requirements, Space HR offers private cloud deployment with Cyber Essentials Plus alignment and can support DSPN-connected NHS trusts." },
];

const challenges = [
  { icon: ShieldCheck, title: "Public Sector Pension Schemes", desc: "LGPS, Civil Service Pension (Alpha/Classic), NHS Superannuation — contributions automated by grade and scheme, annual returns generated." },
  { icon: FileText, title: "IR35 Public Sector Rules", desc: "Chapter 10 ITEPA 2003 compliance. CEST-aligned determination workflow, inside/outside classification, correct payroll treatment." },
  { icon: BarChart3, title: "PSED Diversity Reporting", desc: "Gender pay gap, ethnicity pay analysis, disability representation — exportable for gov.uk publication and public equality objectives." },
  { icon: Lock, title: "Government-Grade Security", desc: "SOC 2 Type II, ISO 27001, UK OFFICIAL classification support, Cyber Essentials Plus alignment, private cloud option." },
  { icon: Users, title: "Structured Pay Grades", desc: "Civil service pay band frameworks, increment progression, cost-of-living uplifts, and pay band ceiling alerts — all automated." },
  { icon: Globe, title: "Freedom of Information Readiness", desc: "Complete audit trail for all HR decisions. FOI-ready workforce data exports. Immutable records for public accountability." },
];

const stats = [
  { value: "100%", label: "Pension contribution accuracy for major public schemes" },
  { value: "SOC 2", label: "Type II + ISO 27001 certified infrastructure" },
  { value: "Zero", label: "Manual Gender Pay Gap report preparation steps" },
  { value: "OFFICIAL", label: "UK Government Security Classification supported" },
];

export default function GovernmentPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#0a0f1a] to-[#00102a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏛️</span>
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">Space HR for Government & Public Sector</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Government & Public Sector</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            From LGPS and Civil Service pension schemes to IR35 public sector rules, PSED diversity reporting, and government-grade security — Space HR is built for the compliance demands of public sector HR.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-indigo-400 hover:text-indigo-400 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0d1525] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">HR Built for Public Accountability</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Public sector HR operates under a level of compliance obligation, scrutiny, and transparency requirement that demands purpose-built tooling.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Public Sector Compliance Coverage</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f1a35] border-b border-slate-700">
                  <th className="text-left text-slate-300 font-semibold px-6 py-4">Requirement</th>
                  <th className="text-left text-slate-300 font-semibold px-6 py-4">Space HR Feature</th>
                  <th className="text-center text-slate-300 font-semibold px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["LGPS / Civil Service / NHS Pension", "Scheme-specific contribution tables, member records, annual returns", "✅ Automated"],
                  ["IR35 Public Sector (Chapter 10 ITEPA)", "CEST workflow, determination logs, inside/outside payroll flag", "✅ Automated"],
                  ["Public Sector Equality Duty (PSED)", "Gender, ethnicity, disability workforce reports for publication", "✅ Included"],
                  ["Gender Pay Gap Reporting (250+ employees)", "Statutory GPG calculation, narrative support, gov.uk export", "✅ Automated"],
                  ["Freedom of Information Act readiness", "Immutable audit trail, FOI-ready data exports, access logs", "✅ Certified"],
                  ["UK GDPR / Data Protection Act 2018", "UK-hosted infrastructure, SAR workflows, retention schedules", "✅ Certified"],
                  ["Cyber Essentials Plus alignment", "SOC 2 Type II + ISO 27001 + CE+ controls mapping", "✅ Available"],
                ].map(([req, feature, status]) => (
                  <tr key={req} className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-slate-300 font-medium">{req}</td>
                    <td className="px-6 py-4 text-slate-400">{feature}</td>
                    <td className="px-6 py-4 text-center text-green-400 font-medium">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions — Government & Public Sector HR</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-14 bg-[#0b1121] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Explore Other Industries</h2>
          <p className="text-slate-400 text-center text-sm mb-8">Space HR delivers sector-specific HR compliance across all major industries.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/industries/banking", emoji: "🏦", label: "Banking & Finance", blurb: "SMCR compliance, conduct risk & bonus scheme administration" },
              { href: "/industries/healthcare", emoji: "🏥", label: "Healthcare", blurb: "Shift scheduling, mandatory training & clinical staff retention" },
              { href: "/industries/retail", emoji: "🛍️", label: "Retail & Hospitality", blurb: "Zero-hours contracts, multi-site scheduling & seasonal hiring" },
              { href: "/industries/manufacturing", emoji: "🏭", label: "Manufacturing", blurb: "Multi-shift planning, safety compliance & ISO certification" },
            ].map((ind) => (
              <Link href={ind.href} key={ind.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-5 hover:border-indigo-500/40 transition-colors">
                <span className="text-2xl mb-3 block">{ind.emoji}</span>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-400 transition-colors">{ind.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              View all industry solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Public Sector HR Transformation?</h2>
          <p className="text-slate-400 mb-8">Join public sector organisations using Space HR to modernise HR operations while meeting every compliance obligation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book Public Sector Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/solutions/enterprise-hr-chatbot" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-indigo-400 hover:text-indigo-400 transition-colors">
              Enterprise HR Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
