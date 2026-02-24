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
  Calendar,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise HRMS Solutions in Dubai | UAE HR Software | Space HR",
  description:
    "Space HR delivers enterprise HRMS solutions in Dubai and the UAE. WPS-compliant payroll, MOHRE integration, gratuity calculation, and AI-powered workforce analytics for UAE businesses.",
  keywords: [
    "enterprise HRMS solutions Dubai",
    "UAE HR software",
    "Dubai payroll software",
    "WPS compliant payroll UAE",
    "MOHRE integration software",
    "UAE gratuity calculation",
    "Dubai HR management system",
    "best HR software Dubai",
    "UAE workforce analytics",
    "DIFC ADGM HR compliance",
    "UAE end of service benefits",
    "Dubai employee management",
    "GCC HR software",
  ],
  openGraph: {
    title: "Enterprise HRMS Solutions in Dubai | Space HR",
    description:
      "WPS-compliant payroll, MOHRE integration, gratuity calculation, and AI workforce analytics for UAE businesses.",
    url: "https://spacehr.net/regions/dubai",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/dubai",
  },
};

const faqs = [
  {
    question: "Is Space HR compliant with UAE's Wage Protection System (WPS)?",
    answer:
      "Yes. Space HR generates WPS-compliant Salary Information Files (SIF) for submission through approved banks and exchange houses. The system validates all employee records against MOHRE requirements before file generation, ensuring seamless salary disbursement compliance.",
  },
  {
    question: "Does Space HR calculate UAE end-of-service gratuity?",
    answer:
      "Yes. Space HR automatically calculates end-of-service gratuity (EOSB) based on UAE Labour Law — including the distinction between limited and unlimited contracts, service duration tiers (1-3 years, 3-5 years, 5+ years), and basic salary calculations. The system also handles DIFC and ADGM-specific gratuity rules.",
  },
  {
    question:
      "Can Space HR integrate with MOHRE for visa and labor card management?",
    answer:
      "Yes. Space HR tracks visa types, expiry dates, labor card renewals, and Emirates ID status for all employees. The system sends automated alerts for upcoming renewals and maintains a compliance dashboard showing your organization's immigration status at a glance.",
  },
  {
    question:
      "Does Space HR support the UAE's new unemployment insurance scheme?",
    answer:
      "Yes. Space HR tracks employee enrollment in the mandatory unemployment insurance scheme (ILOE), manages premium deductions, and ensures compliance with the scheme's requirements for both mainland and free zone employees.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "Dubai", url: "https://spacehr.net/regions/dubai" },
]);

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> Dubai & UAE Office
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Enterprise HRMS Solutions in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Dubai
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Space HR delivers <strong>WPS-compliant payroll</strong>,{" "}
            <strong>MOHRE integration</strong>,{" "}
            <strong>end-of-service gratuity calculation</strong>, and{" "}
            <strong>AI-powered workforce analytics</strong> — built for
            Dubai&apos;s dynamic business environment and UAE labour law
            compliance.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started in Dubai <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* UAE-SPECIFIC FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for UAE Labour Law & Business Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "WPS-Compliant Payroll",
                description:
                  "Generate Salary Information Files (SIF) for WPS submission. Validate employee records against MOHRE requirements. Multi-currency support (AED, USD).",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "MOHRE Integration",
                description:
                  "Track visa types, labor cards, Emirates ID, and work permits. Automated renewal alerts and compliance dashboards for your entire workforce.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Gratuity & EOSB Calculator",
                description:
                  "Automated end-of-service benefits calculation per UAE Labour Law. Handles limited/unlimited contracts, service tiers, and DIFC/ADGM-specific rules.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "UAE Leave Management",
                description:
                  "Manage all UAE statutory leave types: Annual Leave (30 days), Sick Leave, Maternity Leave, Hajj Leave, Bereavement Leave, and public holidays per UAE calendar.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Workforce Analytics",
                description:
                  "Predictive analytics for Dubai's competitive talent market — attrition prediction, cost forecasting in AED, and workforce planning for Emiratization targets.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Free Zone Compliance",
                description:
                  "Support for DIFC, ADGM, JAFZA, DAFZA, and other UAE free zones with zone-specific employment regulations, visa categories, and reporting requirements.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 mb-4">
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

      {/* WHY DUBAI COMPANIES CHOOSE US */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Dubai & UAE Companies Choose Space HR
          </h2>
          <div className="space-y-4">
            {[
              "Local Dubai office with Arabic and English support",
              "Full WPS compliance with SIF file generation",
              "MOHRE visa and labor card tracking with renewal alerts",
              "Automated gratuity and end-of-service benefits calculation",
              "Support for all UAE free zones (DIFC, ADGM, JAFZA, etc.)",
              "AI-powered payroll auditing catches errors before processing",
              "Predictive workforce analytics for Emiratization planning",
              "360° performance appraisals with AI-generated summaries",
              "24/7 AI HR Concierge chatbot in English and Arabic",
              "GPS geofenced attendance for construction and field teams",
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

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform HR in Dubai?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join leading UAE companies using Space HR for AI-powered HR
            operations.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-amber-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
