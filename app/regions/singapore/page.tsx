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
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Top AI HR Software in Singapore | HRMS for Singapore Companies | Space HR",
  description:
    "Space HR is the top AI HR software in Singapore. MOM-compliant payroll, CPF automation, IRAS tax filing, and predictive workforce analytics designed for Singapore's regulatory environment.",
  keywords: [
    "AI HR software Singapore",
    "HRMS Singapore",
    "Singapore payroll software",
    "CPF automation software",
    "MOM compliant HR software",
    "IRAS tax filing automation",
    "Singapore HR management system",
    "best HR software Singapore",
    "Singapore workforce analytics",
    "employee management Singapore",
    "Singapore leave management",
    "SDL levy automation",
  ],
  openGraph: {
    title: "Top AI HR Software in Singapore | Space HR",
    description:
      "MOM-compliant HRMS with CPF automation, IRAS tax filing, and AI-powered workforce analytics for Singapore companies.",
    url: "https://spacehr.net/regions/singapore",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI HR Software in Singapore | Space HR",
    description: "MOM-compliant HRMS with CPF automation, IRAS tax filing, and AI-powered workforce analytics for Singapore companies.",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/singapore",
  },
};

const faqs = [
  {
    question:
      "Is Space HR compliant with Singapore's Ministry of Manpower (MOM) regulations?",
    answer:
      "Yes. Space HR is fully compliant with MOM regulations including Employment Act requirements, CPF contribution calculations, SDL levy processing, and statutory leave entitlements. Our system automatically updates when MOM regulations change.",
  },
  {
    question: "Does Space HR handle CPF contributions automatically?",
    answer:
      "Yes. Space HR automates CPF (Central Provident Fund) calculations for all employee categories — including different rates for Singapore Citizens, Permanent Residents (1st/2nd/3rd year), and age-based contribution tiers. CPF submission files are generated automatically for direct upload to the CPF Board portal.",
  },
  {
    question: "Can Space HR generate IRAS-compliant tax forms?",
    answer:
      "Yes. Space HR generates IR8A, IR8S, Appendix 8A, and Appendix 8B forms automatically for annual IRAS (Inland Revenue Authority of Singapore) tax filing. The system also supports Auto-Inclusion Scheme (AIS) for seamless electronic submission.",
  },
  {
    question: "Does Space HR support Singapore's statutory leave requirements?",
    answer:
      "Yes. Space HR automatically manages all Singapore statutory leave types including Annual Leave (progressive entitlement), Sick Leave, Hospitalization Leave, Maternity/Paternity Leave, Childcare Leave, and National Service Leave — all configured per MOM guidelines.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "Singapore", url: "https://spacehr.net/regions/singapore" },
]);

export default function SingaporePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white dark:from-red-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> Singapore Office
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Top AI HR Software in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              Singapore
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Space HR delivers <strong>MOM-compliant payroll automation</strong>,{" "}
            <strong>CPF contribution management</strong>,{" "}
            <strong>IRAS tax filing</strong>, and{" "}
            <strong>AI-powered predictive workforce analytics</strong> — built
            specifically for Singapore&apos;s regulatory environment.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started in Singapore <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* SINGAPORE-SPECIFIC FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for Singapore&apos;s HR Compliance Requirements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Automated CPF Contributions",
                description:
                  "Automatic CPF calculation for Citizens, PRs (all tiers), and age-based rates. Generate CPF submission files for direct upload to the CPF Board portal.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "MOM Employment Act Compliance",
                description:
                  "Full compliance with Singapore's Employment Act — overtime calculations, rest day pay, public holiday entitlements, and termination procedures.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "IRAS Tax Filing Automation",
                description:
                  "Auto-generate IR8A, IR8S, Appendix 8A/8B forms. Support for Auto-Inclusion Scheme (AIS) for seamless electronic tax submission to IRAS.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Singapore Statutory Leave",
                description:
                  "Automated management of all MOM-mandated leave types: Annual, Sick, Hospitalization, Maternity, Paternity, Childcare, and NS Leave.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Workforce Analytics",
                description:
                  "Predictive analytics tailored for Singapore's labor market — attrition prediction, cost forecasting in SGD, and workforce planning insights.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "SDL Levy Processing",
                description:
                  "Automated Skills Development Levy (SDL) calculation and processing for all eligible employees, ensuring compliance with SkillsFuture requirements.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 mb-4">
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

      {/* WHY SINGAPORE COMPANIES CHOOSE US */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Singapore Companies Choose Space HR
          </h2>
          <div className="space-y-4">
            {[
              "Local Singapore office with dedicated support team",
              "Full MOM, CPF, and IRAS compliance out of the box",
              "AI-powered payroll auditing catches errors before processing",
              "Multi-currency support for regional operations (SGD, USD, MYR)",
              "Predictive workforce analytics for Singapore's competitive talent market",
              "360° performance appraisals with AI-generated summaries",
              "24/7 AI HR Concierge chatbot in English, Mandarin, and Malay",
              "GPS geofenced attendance tracking for field teams",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSE SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Singapore HR Compliance — CPF, MOM Employment Act, SDL & IRAS Obligations
          </h2>
          <div className="space-y-5 text-gray-700 dark:text-slate-300 leading-relaxed text-lg">
            <p>
              Singapore operates one of the most structured employment regulatory environments in Southeast Asia, with CPF contributions, the Employment Act (Cap. 91), Skills Development Levy, and IRAS income tax obligations all requiring systematic compliance. For multi-national companies expanding into Singapore, the compliance model differs fundamentally from both the US (at-will employment, employer-side benefits) and India (extensive statutory deductions) — requiring specific knowledge of Singapore&apos;s unique mechanisms.
            </p>
            <p>
              CPF (Central Provident Fund) contributions are mandatory for Singapore citizens and permanent residents working in Singapore. For employees below 55, the total contribution is 37% of monthly wages — 20% from the employee and 17% from the employer. This rate decreases in steps as employees age: the 55–60 cohort contributes 13% employee + 15% employer, and over-70s contribute 5% + 7.5%. The Ordinary Wage (OW) ceiling is $6,000 per month — contributions above this ceiling are only required on Additional Wages (bonuses, commissions) up to the Annual Wage Ceiling of $102,000 less ordinary wages already contributed upon. Space HR automates CPF calculation for each employee based on their age bracket, citizenship status, and wage components, generating CPF submission files in the format required by the CPF Board&apos;s e-Submit gateway.
            </p>
            <p>
              The Employment Act establishes core employment standards including minimum annual leave entitlement (7 days rising to 14 days based on years of service), paid sick leave (14–60 days depending on hospitalization status), and maternity/paternity leave. Part IV of the Employment Act — which covers additional protections including overtime pay, rest days, and hours of work — applies specifically to employees earning up to $2,600 per month. For employees above this threshold, the protections are contractual rather than statutory. Space HR applies the correct Part IV determinations based on each employee&apos;s salary and tracks leave entitlements by service tenure automatically.
            </p>
            <p>
              The Skills Development Levy (SDL) is a mandatory employer contribution of 0.25% of gross monthly wages, subject to a minimum of $2 and capped at $11.25 per employee per month. SDL applies to all employees, including foreign workers, and funds SkillsFuture Singapore&apos;s workforce development programs. The Foreign Worker Levy (FWL) adds another layer for employers with work permit and S Pass holders — FWL rates vary by sector (construction, marine, process, services) and by the employer&apos;s dependency ratio ceiling. Space HR tracks both SDL and FWL for each employee category and generates consolidated monthly payment summaries.
            </p>
            <p>
              IR8A annual income tax reporting to IRAS (Inland Revenue Authority of Singapore) requires employers to submit details of employee earnings, benefits-in-kind, and tax deductions by 1 March each year. For employers with 6 or more employees or those instructed by IRAS, submission must be made electronically via the Auto-Inclusion Scheme (AIS). Space HR generates AIS-compliant IR8A files with the correct field formats, validates them before submission, and maintains the submission history for audit purposes.
            </p>
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
              { href: "/regions/united-states", flag: "🇺🇸", label: "United States" },
              { href: "/regions/uk", flag: "🇬🇧", label: "United Kingdom" },
              { href: "/regions/dubai", flag: "🇦🇪", label: "Dubai & UAE" },
              { href: "/regions/india", flag: "🇮🇳", label: "India" },
              { href: "/regions/canada", flag: "🇨🇦", label: "Canada" },
              { href: "/regions/europe", flag: "🇪🇺", label: "Europe" },
            ].map((r) => (
              <Link href={r.href} key={r.href} className="group bg-white dark:bg-[#0f1a35] border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-red-300 dark:hover:border-red-500/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">{r.flag}</span>
                <p className="text-gray-900 dark:text-white font-semibold text-xs group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{r.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/regions" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">
              View all regions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform HR in Singapore?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join leading Singapore companies using Space HR for AI-powered HR
            operations.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-red-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
