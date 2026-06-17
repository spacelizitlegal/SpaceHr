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
  Users,
  DollarSign,
  Brain,
  Building2,
  FileText,
  Shield,
  Calculator,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Multi-State Payroll Tax Compliance Software | Space HR",
  description:
    "Space HR automates multi-state payroll tax compliance across all 50 US states. NACHA-compliant ACH processing, FUTA/SUTA automation, W-2/1099 generation, and AI-powered payroll auditing for US enterprises.",
  keywords: [
    "US multi-state payroll tax compliance",
    "multi-state payroll software",
    "US payroll tax automation",
    "NACHA compliant payroll software",
    "FUTA SUTA automation",
    "W-2 1099 generation software",
    "US HR software",
    "American payroll compliance",
    "state tax withholding automation",
    "ACA compliance software",
    "FLSA compliance",
    "US employee management software",
    "federal payroll tax software",
  ],
  openGraph: {
    title: "US Multi-State Payroll Tax Compliance | Space HR",
    description:
      "Automate multi-state payroll tax compliance across all 50 states. NACHA ACH, FUTA/SUTA, W-2/1099, and AI payroll auditing.",
    url: "https://spacehr.net/regions/united-states",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/united-states",
  },
};

const faqs = [
  {
    question: "How does Space HR handle multi-state payroll tax compliance?",
    answer:
      "Space HR automatically calculates and withholds the correct federal, state, and local taxes for employees across all 50 US states. The system handles reciprocity agreements between states, varying SUTA rates, local income taxes (city/county), and state-specific reporting requirements. Tax tables are updated automatically when rates change.",
  },
  {
    question:
      "Does Space HR generate NACHA-compliant ACH files for direct deposit?",
    answer:
      "Yes. Space HR generates fully NACHA-compliant ACH files for direct deposit payroll processing. The system validates routing numbers, account information, batch totals, and file-level controls before submission. Our AI auditor scans every ACH file for anomalies before it's sent to your bank.",
  },
  {
    question: "Can Space HR handle W-2 and 1099 generation?",
    answer:
      "Yes. Space HR automatically generates W-2 forms for employees and 1099 forms for contractors at year-end. The system also handles electronic filing with the SSA and IRS, state W-2 filing where required, and employee/contractor self-service access to their tax documents.",
  },
  {
    question: "How does the AI payroll auditor help with US compliance?",
    answer:
      "The AI Payroll Auditor scans every payroll run for compliance issues specific to US regulations — FLSA minimum wage and overtime violations, incorrect FUTA/SUTA calculations, ACA affordability threshold breaches, state-specific withholding errors, and FICA miscalculations. Issues are flagged before payroll is processed.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "United States", url: "https://spacehr.net/regions/united-states" },
]);

export default function UnitedStatesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> United States
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            US Multi-State Payroll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Tax Compliance Software
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Automate <strong>multi-state payroll tax compliance</strong> across
            all 50 states. Space HR handles{" "}
            <strong>NACHA-compliant ACH processing</strong>,{" "}
            <strong>FUTA/SUTA tax withholding</strong>,{" "}
            <strong>W-2/1099 generation</strong>, and{" "}
            <strong>AI-powered payroll anomaly detection</strong> for US
            enterprises of every size.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* US-SPECIFIC FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Complete US Payroll & Tax Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Multi-State Tax Engine",
                description:
                  "Automatic calculation of federal, state, and local taxes across all 50 states. Handles reciprocity agreements, varying SUTA rates, and local income taxes.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "NACHA ACH File Generation",
                description:
                  "Generate NACHA-compliant ACH files for direct deposit with built-in validation of routing numbers, account data, and batch totals. AI-audited before submission.",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "FUTA/SUTA Automation",
                description:
                  "Automated Federal and State Unemployment Tax calculations with wage base tracking, credit reductions, and quarterly filing support (Form 940/941).",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "FLSA & ACA Compliance",
                description:
                  "Built-in Fair Labor Standards Act compliance for minimum wage, overtime, and exempt/non-exempt classification. ACA affordability threshold monitoring.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "W-2 & 1099 Generation",
                description:
                  "Automated year-end tax form generation for employees (W-2) and contractors (1099). Electronic filing with SSA/IRS and employee self-service access.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Payroll Auditing",
                description:
                  "Every payroll run is scanned for US-specific compliance issues — FICA miscalculations, state withholding errors, overtime violations, and tax bracket misapplications.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
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

      {/* COMPLIANCE CHECKLIST */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            US Compliance Coverage
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Federal Income Tax (FIT) withholding",
              "State Income Tax (SIT) — all 50 states",
              "FICA (Social Security + Medicare)",
              "FUTA (Federal Unemployment Tax)",
              "SUTA (State Unemployment Tax)",
              "Local/City income taxes",
              "NACHA-compliant ACH direct deposit",
              "W-2 and W-3 generation & filing",
              "1099-NEC and 1099-MISC",
              "Form 940/941 quarterly filing",
              "ACA 1095-C reporting",
              "FLSA overtime compliance",
              "State reciprocity agreements",
              "New hire reporting (all states)",
              "Garnishment processing (child support, IRS levies)",
              "Workers' compensation tracking",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] border-t border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Other Regions</h2>
          <p className="text-gray-500 dark:text-slate-400 text-center text-sm mb-8">Space HR delivers built-in payroll compliance in 7 major regions worldwide.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/regions/uk", flag: "🇬🇧", label: "United Kingdom" },
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simplify US Payroll Tax Compliance
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Automate multi-state payroll with AI-powered auditing and
            compliance.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-blue-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
