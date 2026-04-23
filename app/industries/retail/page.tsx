import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, Clock, Users, Brain, DollarSign, BarChart3, Calendar, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Retail | Rota Management, Variable Pay & Staff Retention | Space HR",
  description: "Space HR helps retail businesses manage rota scheduling, zero-hours contracts, variable pay, seasonal hiring, and high-turnover workforce challenges with AI-powered HR automation.",
  keywords: [
    "HR software retail", "retail workforce management", "retail rota scheduling software",
    "zero hours contract HR", "retail payroll software", "seasonal workforce management",
    "retail employee management", "retail HR system", "shop floor scheduling software",
    "retail staff turnover reduction", "retail HRMS", "holiday pay retail",
  ],
  openGraph: {
    title: "HR Software for Retail | Space HR",
    description: "Rota scheduling, variable pay, zero-hours contracts, and seasonal workforce management for retail businesses.",
    url: "https://spacehr.net/industries/retail",
  },
  alternates: { canonical: "https://spacehr.net/industries/retail" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Retail", url: "https://spacehr.net/industries/retail" },
];

const faqs = [
  { question: "Can Space HR handle zero-hours and variable-hours contracts?", answer: "Yes. Space HR supports zero-hours, part-time, and variable-hours contracts with correct holiday pay calculations based on average earnings over the previous 52 weeks (UK Working Time Regulations). It automatically accrues holiday as hours are worked, and alerts payroll when unusual patterns emerge." },
  { question: "How does Space HR manage peak season and temporary workforce hiring?", answer: "Space HR includes a lightweight onboarding workflow for temporary and seasonal workers — digital contracts, right-to-work checks, bank detail capture, and payroll setup in under 10 minutes. Seasonal workers auto-expire from active headcount at contract end date." },
  { question: "Does Space HR calculate holiday pay correctly for variable-pay retail workers?", answer: "Yes. Space HR uses a 52-week reference period to calculate average weekly earnings (including commission and tips) for holiday pay, in line with Bear Scotland and subsequent case law. This eliminates the manual spreadsheet calculation that exposes retailers to tribunal risk." },
  { question: "Can Space HR manage multi-site retail operations from a single system?", answer: "Absolutely. Space HR supports unlimited locations under one tenant with site-level managers who can only view and schedule their own team. Central HR gets a consolidated view across all sites for headcount, absence, and compliance reporting." },
  { question: "How does Space HR help retail businesses reduce staff turnover?", answer: "Space HR's AI attrition engine scores each employee's flight risk based on hours variability, absence patterns, performance trends, and tenure. Managers receive weekly alerts on at-risk team members with suggested actions — enabling proactive conversations before staff walk out." },
];

const challenges = [
  { icon: Clock, title: "Rota & Shift Management", desc: "Drag-and-drop rota builder with auto-fill from available staff pool. Publish 4 weeks ahead. Employees swap shifts via mobile app." },
  { icon: DollarSign, title: "Variable Pay & Holiday Accrual", desc: "Correct holiday pay on variable hours, commission, and tips using 52-week reference period. Eliminates tribunal risk automatically." },
  { icon: Users, title: "Seasonal Workforce Onboarding", desc: "Onboard temporary workers in under 10 minutes. Digital contracts, right-to-work, payroll setup. Auto-expire at contract end." },
  { icon: Brain, title: "AI Attrition Prediction", desc: "Identify at-risk staff before they quit. Retail averages 40%+ annual turnover — Space HR helps you act 90 days before the resignation." },
  { icon: BarChart3, title: "Multi-Site Visibility", desc: "Consolidated HR dashboard across all store locations. Site managers see their team only; central HR sees everything." },
  { icon: Calendar, title: "Absence & Attendance", desc: "Real-time absence tracking per store. Bradford Factor scoring flags pattern absence. GPS clock-in for shop floor teams." },
];

const stats = [
  { value: "40%+", label: "Typical retail annual turnover — Space HR helps reduce it" },
  { value: "10 min", label: "Average seasonal worker onboarding time" },
  { value: "£0", label: "Holiday pay tribunal exposure with 52-week calc" },
  { value: "4×", label: "Faster rota publishing vs manual spreadsheets" },
];

export default function RetailPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="relative py-24 bg-gradient-to-br from-[#0b1121] via-[#1a0f35] to-[#2a0a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🛍️</span>
            <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest">Space HR for Retail</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            HR Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Retail Businesses</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            Rota scheduling, zero-hours contracts, seasonal hiring, and variable pay complexity — Space HR handles the HR admin that retail teams dread, so your managers focus on the shop floor.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-pink-400 hover:text-pink-400 transition-colors">
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
                <div className="text-3xl font-bold text-pink-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for Retail's Unique HR Challenges</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">High turnover, variable hours, seasonal peaks, and multi-site complexity — Space HR is purpose-built for retail workforce management.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#0f1a35] border border-slate-700 rounded-2xl p-6 hover:border-pink-500/40 transition-colors">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-pink-400" />
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions — Retail HR</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-900/30 to-rose-900/20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Retail HR?</h2>
          <p className="text-slate-400 mb-8">Join retail businesses that use Space HR to tame rota complexity, cut turnover costs, and stay compliant on variable pay.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              Book Retail Demo <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/features/attendance" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-pink-400 hover:text-pink-400 transition-colors">
              See Attendance & Rota
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
