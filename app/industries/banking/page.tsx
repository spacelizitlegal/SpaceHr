import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, ShieldCheck, Brain, FileText, BarChart3, Lock, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Banking & Financial Services | FCA Compliance & Conduct Risk | Space HR",
  description: "Space HR helps banks and financial services firms manage FCA Senior Managers Regime, conduct risk tracking, bonus scheme administration, and regulatory HR compliance with AI-powered automation.",
  keywords: [
    "HR software banking", "financial services HR system", "FCA compliance HR",
    "Senior Managers Regime HR software", "conduct risk HR", "bank employee management",
    "financial services workforce management", "bonus scheme HR software",
    "SMCR HR software", "regulatory HR financial services", "banking HRMS",
    "fintech HR software", "investment bank HR system",
  ],
  openGraph: {
    title: "HR Software for Banking & Financial Services | Space HR",
    description: "FCA SMCR compliance, conduct risk tracking, and bonus administration for banks and financial services firms.",
    url: "https://spacehr.net/industries/banking",
  },
  alternates: { canonical: "https://spacehr.net/industries/banking" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Banking & Financial Services", url: "https://spacehr.net/industries/banking" },
];

const faqs = [
  { question: "How does Space HR support FCA Senior Managers and Certification Regime (SMCR) compliance?", answer: "Space HR maintains a dedicated SMCR register tracking each Senior Manager's prescribed responsibilities, their Statements of Responsibilities, and annual certification status. It generates audit-ready reports for FCA supervision, flags certification renewals, and maintains a complete record of conduct history — all in a tamper-evident audit trail." },
  { question: "Can Space HR manage complex bonus and variable compensation schemes?", answer: "Yes. Space HR supports multi-component variable compensation including annual bonus, deferred equity (LTIP/RSU), commission, and clawback provisions. Bonus calculations can be tied to individual KPIs, team performance, and firm-wide metrics with full audit trail for remuneration committee review." },
  { question: "Does Space HR have the data security and audit trail required for regulated firms?", answer: "Space HR is SOC 2 Type II certified with full role-based access controls, immutable audit logs on all employee data changes, data residency options (UK, EU, US), and encryption at rest and in transit. It supports FCA data access requirements and can produce complete data exports for regulatory inspection." },
  { question: "How does Space HR handle Regulatory References for departing employees?", answer: "Space HR stores a structured conduct history record per employee, including misconduct findings, performance improvement plans, and disciplinary outcomes. When generating regulatory references for departing Senior Managers and Certified Persons, HR can extract a pre-formatted conduct summary aligned with FCA Regulatory Reference requirements (SUP 10C)." },
  { question: "Can Space HR manage performance and conduct risk for a large financial services workforce?", answer: "Yes. Space HR's performance module supports KPI-weighted appraisals, competency frameworks, and conduct risk indicators. AI-generated performance summaries help managers give more consistent, evidenced appraisal conversations — reducing tribunal risk from subjective assessments." },
];

const challenges = [
  { icon: ShieldCheck, title: "SMCR & Regulatory Compliance", desc: "Full Senior Managers and Certification Regime register. Prescribed responsibilities, conduct history, certification renewals, and FCA-ready audit reports." },
  { icon: DollarSign, title: "Bonus & Deferred Compensation", desc: "Multi-component bonus administration — annual, deferred equity, clawback. Full audit trail for remuneration committee and PRA/FCA review." },
  { icon: FileText, title: "Regulatory References", desc: "Structured conduct history per employee. Pre-formatted regulatory reference output aligned with FCA SUP 10C requirements." },
  { icon: Lock, title: "Enterprise-Grade Security", desc: "SOC 2 Type II certified. Immutable audit logs, role-based access, UK/EU data residency, encryption at rest and in transit." },
  { icon: Brain, title: "Conduct Risk Analytics", desc: "AI flags unusual absence patterns, declining performance scores, and conduct indicators that correlate with regulatory incidents." },
  { icon: BarChart3, title: "Workforce Cost Reporting", desc: "Total remuneration reporting by grade, function, and legal entity — with gender pay gap analytics and diversity dashboards for ESG reporting." },
];

const stats = [
  { value: "100%", label: "SMCR certification tracking coverage" },
  { value: "SOC 2", label: "Type II certified infrastructure" },
  { value: "Zero", label: "Manual regulatory reference preparation steps" },
  { value: "Real-time", label: "Conduct risk dashboard updates" },
];

export default function BankingPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#0a1a0f] to-[#001a10] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏦</span>
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">Space HR for Banking & Financial Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Financial Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            From FCA SMCR compliance and regulatory references to complex bonus administration and conduct risk tracking — Space HR gives financial services firms the HR infrastructure regulators expect.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-colors">
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
                <div className="text-3xl font-bold text-emerald-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">HR Built for Regulatory Rigour</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Financial services HR operates under a level of regulatory scrutiny that generic HR systems simply aren't designed for. Space HR is.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions — Banking & Financial Services HR</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-14 bg-[#0b1121] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Explore Other Industries</h2>
          <p className="text-slate-400 text-center text-sm mb-8">Space HR delivers sector-specific HR compliance across all major industries.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/industries/healthcare", emoji: "🏥", label: "Healthcare", blurb: "Shift scheduling, mandatory training & clinical staff retention" },
              { href: "/industries/retail", emoji: "🛍️", label: "Retail & Hospitality", blurb: "Zero-hours contracts, multi-site scheduling & seasonal hiring" },
              { href: "/industries/manufacturing", emoji: "🏭", label: "Manufacturing", blurb: "Multi-shift planning, safety compliance & ISO certification" },
              { href: "/industries/government", emoji: "🏛️", label: "Government", blurb: "Civil service pay scales, GDPR/FOI & pension scheme management" },
            ].map((ind) => (
              <Link href={ind.href} key={ind.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-5 hover:border-emerald-500/40 transition-colors">
                <span className="text-2xl mb-3 block">{ind.emoji}</span>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-emerald-400 transition-colors">{ind.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
              View all industry solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-green-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Regulator-Ready HR?</h2>
          <p className="text-slate-400 mb-8">Join financial services firms that trust Space HR to meet FCA obligations while running a high-performance workforce.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book FS Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/solutions/enterprise-hr-chatbot" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-colors">
              Enterprise HR Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
