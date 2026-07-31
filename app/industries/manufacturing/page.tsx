import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, Clock, Users, Brain, ShieldCheck, BarChart3, FileText, DollarSign, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Manufacturing | Shift Scheduling & Compliance",
  description: "HR software for manufacturing: shift scheduling, factory-act compliance, and hourly workforce management. AI-powered tools for the shop floor.",
  keywords: [
    "HR software manufacturing", "manufacturing workforce management", "factory shift scheduling software",
    "manufacturing payroll software", "labour law compliance manufacturing", "factory HR system",
    "hourly workforce management software", "manufacturing HRMS", "contract labour management",
    "shop floor HR software", "manufacturing employee management", "factory act compliance software",
    "union payroll software manufacturing",
  ],
  openGraph: {
    title: "HR Software for Manufacturing | Space HR",
    description: "Shift scheduling, factory-act compliance, labour cost control, and hourly workforce management for manufacturers.",
    url: "https://spacehr.net/industries/manufacturing",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software for Manufacturing | Space HR",
    description: "Shift scheduling, factory-act compliance, labour cost control, and hourly workforce management for manufacturers.",
  },
  alternates: { canonical: "https://spacehr.net/industries/manufacturing" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Manufacturing", url: "https://spacehr.net/industries/manufacturing" },
];

const faqs = [
  { question: "Can Space HR handle multi-shift scheduling for factory floor workers?", answer: "Yes. Space HR supports 2-shift, 3-shift, and continental rotating patterns with automatic application of shift differentials, night pay, and overtime premiums. Shift templates can be applied across production lines or plants, with real-time coverage visibility and fatigue-rule enforcement." },
  { question: "How does Space HR manage contract labour and temporary workforce?", answer: "Space HR handles direct employees, contract labour, and agency workers under one system with separate rate cards, compliant classification, and cost-centre attribution. Contract labour register and deployment records are maintained for factory inspections and audit." },
  { question: "Does Space HR support Factory Act and labour law compliance for manufacturing?", answer: "Yes. Space HR is pre-configured with maximum working hours, minimum rest period rules, and leave entitlements under applicable factory acts and labour regulations. It flags violations before they occur and generates the statutory registers (Form A, muster roll, overtime register) required for labour inspector visits." },
  { question: "Can Space HR calculate piece-rate and productivity-linked pay?", answer: "Yes. Space HR supports piece-rate pay, production incentive schemes, attendance bonuses, and productivity-linked variable pay — all integrated with the payroll engine. Incentive calculation rules are configurable per production grade and shift type." },
  { question: "How does Space HR help control labour cost in manufacturing?", answer: "Space HR's workforce cost analytics show labour cost per unit of output, overtime spend by line and department, and variance against standard labour cost budgets. AI-driven workforce planning helps model headcount against production schedules to minimise overtime and agency escalation." },
];

const challenges = [
  { icon: Clock, title: "Multi-Shift Scheduling", desc: "2-shift, 3-shift, and continental rotating patterns with automatic shift differentials, night pay, and overtime premiums. Mobile clock-in for shop floor." },
  { icon: ShieldCheck, title: "Factory Act & Labour Compliance", desc: "Auto-enforce maximum hours, minimum rest, and leave entitlements. Generate statutory registers for labour inspector visits on demand." },
  { icon: Users, title: "Contract Labour Management", desc: "Direct, contract, and agency workers under one system. Separate rate cards, compliant classification, cost-centre attribution." },
  { icon: DollarSign, title: "Piece Rate & Incentive Pay", desc: "Piece rate, production bonuses, and attendance incentives integrated directly with payroll. No manual calculation sheets." },
  { icon: BarChart3, title: "Labour Cost Analytics", desc: "Cost per unit, overtime variance, and labour budget tracking by production line. AI workforce planning against production schedules." },
  { icon: Zap, title: "AI Attrition Prediction", desc: "Identify workers at flight risk before they leave. Manufacturing attrition is costly — replacing a skilled operator can cost 40–60% of annual salary." },
];

const stats = [
  { value: "25%", label: "Average reduction in overtime cost" },
  { value: "100%", label: "Statutory register compliance for inspections" },
  { value: "10 min", label: "Shift schedule publication across all lines" },
  { value: "3×", label: "Faster payroll run vs manual timesheets" },
];

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#1a1a0a] to-[#2a1a00] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏭</span>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Space HR for Manufacturing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Manufacturing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            Shift scheduling, factory-act compliance, piece-rate pay, and labour cost control — Space HR is designed for the operational realities of the factory floor, not just the corporate office.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-400 transition-colors">
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
                <div className="text-3xl font-bold text-amber-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for the Complexity of Manufacturing HR</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From production line scheduling to labour law compliance and cost-per-unit analytics — Space HR handles manufacturing's unique workforce challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-amber-400" />
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions — Manufacturing HR</h2>
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
              { href: "/industries/government", emoji: "🏛️", label: "Government", blurb: "Civil service pay scales, GDPR/FOI & pension scheme management" },
              { href: "/industries/construction", emoji: "🏗️", label: "Construction", blurb: "Project-based workforce, contractor payments & safety compliance" },
            ].map((ind) => (
              <Link href={ind.href} key={ind.href} className="group bg-[#0f1a35] border border-slate-700 rounded-xl p-5 hover:border-amber-500/40 transition-colors">
                <span className="text-2xl mb-3 block">{ind.emoji}</span>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-amber-400 transition-colors">{ind.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
              View all industry solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900/30 to-orange-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernise Manufacturing HR?</h2>
          <p className="text-slate-400 mb-8">Join manufacturers using Space HR to cut labour costs, stay compliant, and retain skilled production workers.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book Manufacturing Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/features/payroll" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-400 transition-colors">
              See Payroll Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
