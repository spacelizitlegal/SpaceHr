import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, ShieldCheck, Clock, Users, Brain, FileText, Calendar, CheckCircle, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Healthcare | Nurse Scheduling, Compliance & Staff Retention | Space HR",
  description: "Space HR helps healthcare organisations automate nurse scheduling, track mandatory training, manage credentialing, and reduce clinical staff turnover with AI-powered HR tools.",
  keywords: [
    "HR software healthcare", "nurse scheduling software", "healthcare workforce management",
    "hospital HR system", "clinical staff scheduling", "healthcare compliance HR",
    "mandatory training tracker healthcare", "nurse retention software",
    "healthcare HRMS", "medical staff credentialing software", "NHS HR software",
    "healthcare employee management", "healthcare payroll software",
  ],
  openGraph: {
    title: "HR Software for Healthcare | Space HR",
    description: "Automate nurse scheduling, mandatory training tracking, and compliance management for healthcare organisations.",
    url: "https://spacehr.net/industries/healthcare",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software for Healthcare | Space HR",
    description: "Automate nurse scheduling, mandatory training tracking, and compliance management for healthcare organisations.",
  },
  alternates: { canonical: "https://spacehr.net/industries/healthcare" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Healthcare", url: "https://spacehr.net/industries/healthcare" },
];

const faqs = [
  { question: "Can Space HR handle rotating shift scheduling for nurses and clinical staff?", answer: "Yes. Space HR supports rotating shift patterns, night differential pay, on-call scheduling, and compliance with working time regulations (maximum weekly hours, minimum rest periods). Managers can publish rosters 4 weeks ahead with automated conflict detection." },
  { question: "How does Space HR track mandatory training and certifications?", answer: "Space HR maintains a per-employee certification register with expiry dates for BLS, ACLS, HIPAA training, and role-specific competencies. Automated alerts notify employees and managers 60, 30, and 7 days before expiry. Reports show compliance rates by department for audit purposes." },
  { question: "Does Space HR support credentialing and DBS/background check tracking?", answer: "Yes. Space HR stores credential documents, DBS certificate numbers, and expiry dates with automated renewal reminders. For NHS and regulated private healthcare, it generates compliance reports aligned with CQC requirements." },
  { question: "How does Space HR help reduce clinical staff turnover?", answer: "Space HR's AI attrition model scores flight risk based on shift load, tenure, performance trajectory, and leave patterns. Managers receive a weekly dashboard flagging at-risk clinicians with suggested retention actions — before resignation letters arrive." },
  { question: "Can Space HR manage bank staff and agency workers alongside permanent employees?", answer: "Yes. Space HR handles multiple worker types (permanent, bank, agency, locum) under a single system with separate rate cards, compliance rule sets, and reporting categories. Shift gaps can be auto-filled from the bank staff pool before escalating to agency." },
];

const challenges = [
  { icon: Clock, title: "24/7 Shift Coverage", desc: "Auto-fill shift gaps from your bank staff pool before going to costly agencies. Drag-and-drop rota builder with fatigue rule enforcement." },
  { icon: ShieldCheck, title: "Mandatory Training Compliance", desc: "Never miss a certification expiry. Auto-alerts for BLS, ACLS, HIPAA, fire safety and role-specific competencies — 60 days before lapse." },
  { icon: Brain, title: "AI Attrition Prediction", desc: "Identify nurses and clinicians at flight risk 90 days before they resign. Act on personalised retention recommendations, not gut feel." },
  { icon: FileText, title: "Credentialing & DBS Tracking", desc: "Store, track, and auto-remind on every credential, licence, and background check across your entire workforce." },
  { icon: Users, title: "Bank & Agency Management", desc: "Manage permanent, bank, agency, and locum workers under one system with separate rate cards and compliance rules." },
  { icon: BarChart3, title: "Workforce Cost Analytics", desc: "Compare permanent vs bank vs agency cost per shift. Identify wards with chronic understaffing before it becomes a CQC risk." },
];

const stats = [
  { value: "34%", label: "Average reduction in agency spend" },
  { value: "98%", label: "Mandatory training compliance rate" },
  { value: "2.1×", label: "Faster rota publication vs manual" },
  { value: "60 days", label: "Average early attrition warning lead time" },
];

export default function HealthcarePage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#0f1a35] to-[#001a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏥</span>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">Space HR for Healthcare</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Healthcare Organisations</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            From nurse shift scheduling and mandatory training compliance to AI-powered staff retention — Space HR helps healthcare teams spend less time on admin and more time on care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-teal-400 hover:text-teal-400 transition-colors">
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
                <div className="text-3xl font-bold text-teal-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Solving Healthcare HR's Hardest Problems</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built for the unique pressures of clinical workforce management — 24/7 rotas, strict compliance, and the relentless challenge of retaining skilled staff.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-teal-500/40 transition-colors">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-teal-400" />
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Compliance Coverage</h2>
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
                  ["Working Time Regulations (48hr week)", "Auto-flag breaches before rota publication", "✅ Automated"],
                  ["Mandatory Training (BLS, ACLS, HIPAA)", "Certification register, expiry alerts, compliance dashboard", "✅ Automated"],
                  ["DBS / Background Check Tracking", "Document storage, renewal reminders, CQC-ready reports", "✅ Automated"],
                  ["Staff:Patient Ratio Compliance", "Shift coverage analytics with minimum staffing threshold alerts", "✅ Included"],
                  ["IR35 / Bank Staff Classification", "Worker type flags, correct rate cards, right payroll treatment", "✅ Automated"],
                  ["GDPR / UK Data Protection Act", "UK-hosted, SOC 2 certified, audit trail for employee data access", "✅ Certified"],
                  ["Payslip & Pension Auto-Enrolment", "PAYE, RTI, NHS Superannuation or NEST contributions", "✅ Automated"],
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

      <section className="py-20 bg-[#0d1525]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions — Healthcare HR</h2>
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
              { href: "/industries/retail", emoji: "🛍️", label: "Retail & Hospitality", blurb: "Zero-hours contracts, multi-site scheduling & seasonal hiring" },
              { href: "/industries/manufacturing", emoji: "🏭", label: "Manufacturing", blurb: "Multi-shift planning, safety compliance & ISO certification" },
              { href: "/industries/government", emoji: "🏛️", label: "Government", blurb: "Civil service pay scales, GDPR/FOI & pension scheme management" },
              { href: "/industries/construction", emoji: "🏗️", label: "Construction", blurb: "Project-based workforce, contractor payments & safety compliance" },
            ].map((ind) => (
              <Link href={ind.href} key={ind.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-5 hover:border-teal-500/40 transition-colors">
                <span className="text-2xl mb-3 block">{ind.emoji}</span>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-teal-400 transition-colors">{ind.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
              View all industry solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-900/30 to-cyan-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Healthcare HR?</h2>
          <p className="text-slate-400 mb-8">Join healthcare organisations that trust Space HR to manage clinical workforce complexity — from rotas to retention.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book Healthcare Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/features/attrition-prediction" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-teal-400 hover:text-teal-400 transition-colors">
              See Attrition Prediction
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
