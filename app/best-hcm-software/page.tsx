import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  TrendingUp,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  ChevronRight,
  Award,
  Minus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best HCM Software 2026 — Top 8 Platforms Compared",
  description:
    "Compare the best HCM software of 2026: Space HR, Workday, SAP, Oracle, BambooHR, Darwinbox, Rippling, and ADP. Features, pricing, and which is right for you.",
  keywords: [
    "best hcm software",
    "hcm software",
    "human capital management software",
    "best hcm system",
    "top hcm platforms",
    "hcm software comparison",
    "hcm software for small business",
    "enterprise hcm software",
    "best hcm software 2026",
    "hcm vs hrms",
    "cloud hcm software",
    "hcm platform comparison",
    "global hcm software",
  ],
  alternates: {
    canonical: "https://spacehr.net/best-hcm-software",
  },
  openGraph: {
    title: "Best HCM Software 2026 — Top 8 Platforms Compared | Space HR",
    description:
      "Unbiased comparison of the 8 best HCM software platforms: features, pricing, global compliance, and which is right for your team size.",
    url: "https://spacehr.net/best-hcm-software",
    siteName: "Space HR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best HCM Software 2026 | Space HR",
    description:
      "Top 8 HCM platforms compared: Workday, SAP SuccessFactors, Oracle, BambooHR, Darwinbox, Rippling, ADP, and Space HR. Pricing, features, pros & cons.",
  },
};

const faqs = [
  {
    question: "What is HCM software?",
    answer:
      "HCM (Human Capital Management) software is a suite of applications that manages the complete employee lifecycle — recruitment, onboarding, payroll, benefits, performance management, learning & development, workforce planning, and analytics. HCM is the broadest category of HR software, sitting above HRMS (Human Resource Management System) and HRIS (Human Resource Information System). Modern cloud HCM platforms combine all three into a single system.",
  },
  {
    question: "What is the difference between HCM and HRMS?",
    answer:
      "HRMS (Human Resource Management System) covers core HR operations: payroll, leave, attendance, performance, and employee self-service. HCM (Human Capital Management) adds strategic capabilities on top: succession planning, compensation benchmarking, advanced workforce analytics, learning management systems (LMS), and predictive talent intelligence. In practice, many vendors use the terms interchangeably — what matters is the specific feature set, not the label.",
  },
  {
    question: "Which HCM software is best for small businesses?",
    answer:
      "For small businesses (10–200 employees), the best HCM software is one that's quick to implement, affordable, and handles payroll compliance without requiring a dedicated IT team. Space HR and BambooHR are the top picks for small businesses — both go live within 1–2 weeks, require no IT involvement, and include payroll, leave, performance, and employee self-service in their base tier. Space HR offers aggressive custom pricing for Indian teams; request a demo for a tailored quote. Enterprise HCM platforms like Workday or SAP SuccessFactors are not suitable for small businesses due to implementation cost ($50,000–$500,000+) and complexity.",
  },
  {
    question: "Which is the best HCM software for global companies?",
    answer:
      "For global companies, the best HCM software must handle local statutory compliance natively in every country you operate in — US federal and state taxes, UK PAYE and auto-enrolment, UAE WPS and gratuity, India PF/ESIC/TDS, Singapore CPF, Canadian CPP/EI, and European social contributions. Space HR handles multi-country compliance natively, while legacy platforms often require expensive local modules or third-party payroll vendors. Space HR offers aggressive, tailored pricing for global teams; request a demo for a quote.",
  },
  {
    question: "How much does HCM software cost?",
    answer:
      "HCM software pricing varies significantly by vendor and company size. Cloud HCM for SMBs: ₹149–₹500/employee/month (India) or $8–$25/employee/month. Mid-market HCM (BambooHR, Darwinbox, Rippling): $15–$50/employee/month. Enterprise HCM (Workday, SAP SuccessFactors, Oracle HCM Cloud): $50–$150+/employee/month, plus implementation fees of $50,000–$2,000,000. Most enterprise HCM vendors do not publish pricing publicly — expect 3–6 months of negotiation before getting a final contract.",
  },
  {
    question: "How long does HCM software implementation take?",
    answer:
      "Implementation time depends on company size and platform complexity. Cloud HCM for small teams (under 100 employees): 48 hours to 4 weeks. Mid-market HCM (100–1,000 employees): 4–16 weeks. Enterprise HCM (Workday, SAP SuccessFactors): 12–24 months. The implementation timeline is often the single largest hidden cost of enterprise HCM — a 12-month Workday implementation with an SI partner can cost 3–5× the annual SaaS license fee.",
  },
  {
    question: "What features should I look for in HCM software?",
    answer:
      "Essential HCM features to evaluate: (1) Payroll with statutory compliance for your jurisdictions; (2) Leave & attendance management with mobile access; (3) Performance management (goals, appraisals, 360 feedback); (4) Employee self-service portal; (5) Recruitment & onboarding workflow; (6) HR analytics & reporting dashboard; (7) Learning management (LMS); (8) Workforce planning & headcount forecasting; (9) Integrations with your existing tools (ERP, accounting, biometrics); (10) Mobile app for managers and employees.",
  },
  {
    question: "Is Space HR an HCM platform?",
    answer:
      "Yes. Space HR is a cloud HCM platform that covers the full employee lifecycle: recruitment, onboarding, payroll (with multi-country compliance including US, UK, UAE, India, Singapore, Canada, and Europe), leave & attendance, performance management (OKRs + 360 reviews), employee self-service, learning management, and AI analytics (attrition prediction, payroll anomaly detection, 12-month labor cost forecasting). It is priced aggressively for SMBs and mid-market teams worldwide; request a demo for a tailored quote.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Best HCM Software", url: "https://spacehr.net/best-hcm-software" },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best HCM Software 2026 — Top 8 Human Capital Management Platforms Compared",
  description:
    "Unbiased comparison of the 8 best HCM software platforms in 2026, including features, pricing, pros and cons, and which platform is best for different company sizes.",
  url: "https://spacehr.net/best-hcm-software",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: { "@type": "Organization", name: "Space HR", url: "https://spacehr.net" },
  publisher: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
    logo: { "@type": "ImageObject", url: "https://spacehr.net/hrlogonly.png" },
  },
};

const platforms = [
  {
    rank: 1,
    name: "Space HR",
    tagline: "Best Global HCM Software for SMBs & Mid-Market",
    badge: "Editor's Pick",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    accentColor: "border-teal-500",
    rating: 4.9,
    pricing: "Custom quote (request a demo)",
    bestFor: "Indian SMBs & mid-market (10–500 employees)",
    deployTime: "48 hours",
    highlight: "Only SMB-focused HCM platform with built-in multi-country compliance (US, UK, UAE, India, Singapore, Canada, Europe), AI payroll auditor, attrition prediction, and employee self-service portal at aggressive pricing.",
    pros: [
      "India statutory compliance out-of-the-box (PF, ESIC, TDS, PT, Form 16)",
      "AI payroll anomaly detection before processing",
      "Attrition prediction with 90-day early warning",
      "Employee self-service via portal and WhatsApp",
      "Transparent INR pricing — no hidden modules",
      "Go live in 48 hours — no IT team needed",
      "12-month labor cost forecasting",
    ],
    cons: [
      "Newer platform — smaller customer base than legacy vendors",
      "Best suited for India and GCC — less depth for US enterprise payroll",
    ],
    href: "https://cad.spaceaiapp.com/login",
    compareHref: null,
  },
  {
    rank: 2,
    name: "Darwinbox",
    tagline: "Best Enterprise HCM for Indian Large Companies",
    badge: "Enterprise India",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    accentColor: "border-orange-400",
    rating: 4.3,
    pricing: "$8–$15/employee/month (negotiated)",
    bestFor: "Large Indian enterprises (500–10,000 employees)",
    deployTime: "8–16 weeks",
    highlight: "Indian enterprise HCM with deep India compliance, mobile-first design, and strong adoption among large Indian corporations.",
    pros: [
      "Strong India compliance and statutory support",
      "Mobile-first employee experience",
      "Workforce analytics and org design tools",
      "Good API ecosystem for enterprise integrations",
    ],
    cons: [
      "Implementation requires dedicated project team",
      "Less suitable for companies under 250 employees",
      "Pricing not transparent — requires sales engagement",
      "Limited global payroll for multi-country teams",
    ],
    href: null,
    compareHref: "/compare/darwinbox",
  },
  {
    rank: 3,
    name: "BambooHR",
    tagline: "Best HCM for US Small Businesses",
    badge: "SMB Friendly",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    accentColor: "border-green-400",
    rating: 4.4,
    pricing: "$8–$16/employee/month",
    bestFor: "US companies 10–500 employees",
    deployTime: "1–4 weeks",
    highlight: "Clean, easy-to-use HRIS with good employee experience. Strong for US companies that don't need international payroll.",
    pros: [
      "Very easy to use — fast employee adoption",
      "Good applicant tracking system (ATS)",
      "Strong offboarding workflows",
      "Competitive pricing for US market",
    ],
    cons: [
      "Limited payroll outside the US",
      "No India statutory compliance",
      "Performance module is basic compared to competitors",
      "Analytics are shallow — no predictive capabilities",
    ],
    href: null,
    compareHref: "/compare/bamboohr",
  },
  {
    rank: 4,
    name: "Rippling",
    tagline: "Best HCM + IT Bundle for Tech Companies",
    badge: "HR + IT",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    accentColor: "border-violet-400",
    rating: 4.5,
    pricing: "$8–$35/employee/month (per module)",
    bestFor: "Tech startups and scale-ups needing HR + IT in one platform",
    deployTime: "2–6 weeks",
    highlight: "Unique HR + IT platform that manages people, apps, and devices together. Best for tech-heavy companies that want unified provisioning.",
    pros: [
      "Unified HR + IT device and app management",
      "Fast US payroll with strong compliance",
      "Modular pricing — buy only what you need",
      "Strong global payroll through partners",
    ],
    cons: [
      "Modular pricing adds up quickly — can be expensive",
      "No native India statutory compliance",
      "HR depth is weaker than dedicated HCM platforms",
      "IT management features are overkill for non-tech companies",
    ],
    href: null,
    compareHref: "/compare/rippling",
  },
  {
    rank: 5,
    name: "SAP SuccessFactors",
    tagline: "Best Enterprise HCM for Global Corporations",
    badge: "Global Enterprise",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    accentColor: "border-blue-400",
    rating: 3.9,
    pricing: "$50–$100/employee/month + implementation",
    bestFor: "Multinationals with 2,000+ employees",
    deployTime: "12–24 months",
    highlight: "Industry-leading global HCM with deep compliance coverage across 100+ countries. Best for large multinationals that can absorb high implementation costs.",
    pros: [
      "Global payroll and compliance in 100+ countries",
      "Deep integration with SAP ERP",
      "Comprehensive talent and succession management",
      "Strong regulatory compliance engine",
    ],
    cons: [
      "Extremely high implementation cost ($500K–$2M+)",
      "18–24 month deployment timeline",
      "Complex UI — low employee adoption without training",
      "Not suitable for companies under 2,000 employees",
    ],
    href: null,
    compareHref: "/compare/sap-successfactors",
  },
  {
    rank: 6,
    name: "Workday",
    tagline: "Best Enterprise HCM for Finance-Led Organizations",
    badge: "Fortune 500",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    accentColor: "border-indigo-400",
    rating: 4.0,
    pricing: "$60–$150/employee/month + implementation",
    bestFor: "Large enterprises 1,000+ employees with complex finance integration needs",
    deployTime: "12–18 months",
    highlight: "The gold standard for enterprise HCM + financial management integration. Exceptional for finance-driven organizations that need tight HR-to-finance data flows.",
    pros: [
      "Best-in-class HR + finance integration",
      "Powerful analytics and workforce planning",
      "Strong US and European compliance",
      "Excellent data model and reporting flexibility",
    ],
    cons: [
      "Among the most expensive HCM platforms on the market",
      "Implementation requires specialist SI partners",
      "Overkill and cost-prohibitive for under 1,000 employees",
      "India payroll requires third-party integration",
    ],
    href: null,
    compareHref: "/compare/workday",
  },
  {
    rank: 7,
    name: "Oracle HCM Cloud",
    tagline: "Best HCM for Oracle ERP Customers",
    badge: "Oracle Ecosystem",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    accentColor: "border-red-400",
    rating: 3.8,
    pricing: "$50–$120/employee/month + implementation",
    bestFor: "Large enterprises already using Oracle ERP or database systems",
    deployTime: "12–24 months",
    highlight: "Strongest choice for organizations embedded in the Oracle technology ecosystem. Deep integration with Oracle Fusion ERP, supply chain, and financial modules.",
    pros: [
      "Native Oracle ERP integration with no middleware",
      "Strong global payroll and workforce management",
      "Advanced AI/ML workforce insights (Oracle AI)",
      "Comprehensive compliance across major markets",
    ],
    cons: [
      "High total cost of ownership",
      "Complex implementation — typically 18+ months",
      "User experience is dated compared to modern HCM",
      "Best value only for existing Oracle customers",
    ],
    href: null,
    compareHref: null,
  },
  {
    rank: 8,
    name: "ADP Workforce Now",
    tagline: "Best HCM for US Payroll Compliance",
    badge: "Payroll Leader",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    accentColor: "border-yellow-400",
    rating: 3.9,
    pricing: "$15–$35/employee/month",
    bestFor: "US mid-market companies prioritizing payroll compliance and tax filing",
    deployTime: "4–12 weeks",
    highlight: "The largest payroll and HCM vendor in the US. Unmatched US tax compliance, W-2 filing, and state unemployment insurance (SUI) management across all 50 states.",
    pros: [
      "Best US payroll compliance (all 50 states)",
      "Automated W-2, 941, FUTA filing",
      "Strong benefits administration",
      "Large customer base with proven reliability",
    ],
    cons: [
      "Interface is dated and complex to navigate",
      "No India or emerging market payroll",
      "Implementation can be slow and bureaucratic",
      "Modular pricing makes total cost hard to predict",
    ],
    href: null,
    compareHref: "/compare/adp",
  },
];

type ComparisonValue = boolean | "partial";

const featureComparison: Array<{
  feature: string;
  spaceHr: ComparisonValue;
  darwinbox: ComparisonValue;
  bamboo: ComparisonValue;
  rippling: ComparisonValue;
  sap: ComparisonValue;
  workday: ComparisonValue;
  oracle: ComparisonValue;
  adp: ComparisonValue;
}> = [
  { feature: "India Statutory Compliance (PF, ESIC, TDS, PT)", spaceHr: true, darwinbox: true, bamboo: false, rippling: false, sap: "partial", workday: "partial", oracle: "partial", adp: false },
  { feature: "AI Payroll Anomaly Detection", spaceHr: true, darwinbox: false, bamboo: false, rippling: false, sap: false, workday: false, oracle: "partial", adp: false },
  { feature: "Attrition Prediction (AI)", spaceHr: true, darwinbox: "partial", bamboo: false, rippling: false, sap: "partial", workday: true, oracle: true, adp: false },
  { feature: "Employee Self-Service Portal", spaceHr: true, darwinbox: true, bamboo: true, rippling: true, sap: true, workday: true, oracle: true, adp: true },
  { feature: "Mobile App (Employee)", spaceHr: true, darwinbox: true, bamboo: true, rippling: true, sap: true, workday: true, oracle: true, adp: true },
  { feature: "Performance Management + 360°", spaceHr: true, darwinbox: true, bamboo: "partial", rippling: "partial", sap: true, workday: true, oracle: true, adp: "partial" },
  { feature: "12-Month Labor Cost Forecasting", spaceHr: true, darwinbox: false, bamboo: false, rippling: false, sap: "partial", workday: true, oracle: "partial", adp: false },
  { feature: "WhatsApp / Chatbot HR Concierge", spaceHr: true, darwinbox: "partial", bamboo: false, rippling: false, sap: false, workday: false, oracle: false, adp: false },
  { feature: "Global Payroll (50+ countries)", spaceHr: false, darwinbox: false, bamboo: false, rippling: true, sap: true, workday: true, oracle: true, adp: true },
  { feature: "On-Premise Deployment Option", spaceHr: false, darwinbox: false, bamboo: false, rippling: false, sap: true, workday: false, oracle: true, adp: "partial" },
  { feature: "Transparent Public Pricing", spaceHr: true, darwinbox: false, bamboo: true, rippling: true, sap: false, workday: false, oracle: false, adp: false },
  { feature: "Go Live < 4 Weeks (SMB)", spaceHr: true, darwinbox: false, bamboo: true, rippling: true, sap: false, workday: false, oracle: false, adp: false },
];

function FeatureCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-yellow-400 mx-auto" />;
  return <XCircle className="w-4 h-4 text-red-300 dark:text-red-700 mx-auto" />;
}

export default function BestHCMSoftwarePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" /> Updated June 2026 · Independently Researched
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              HCM Software
            </span>{" "}
            2026
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            We compared 8 top Human Capital Management platforms on compliance depth, pricing, implementation time, AI capabilities, and India-market fit. Here's who wins at each company size.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-10">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> 8 platforms compared</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> 12 features evaluated</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> India compliance tested</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Real pricing included</span>
          </div>
          {/* Quick Jump */}
          <div className="flex flex-wrap justify-center gap-3">
            {["#comparison-table", "#reviews", "#buyers-guide", "#india", "#faq"].map((href) => (
              <a key={href} href={href} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                {href.replace("#", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="py-12 bg-white dark:bg-[#0b1121] border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Verdict by Use Case</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Best for Global SMBs", winner: "Space HR", why: "Multi-country compliance + aggressive pricing + 48hr setup", color: "border-teal-400" },
              { label: "Best for Indian Enterprise", winner: "Darwinbox", why: "Deep India HR + strong mobile + enterprise integrations", color: "border-orange-400" },
              { label: "Best for US Small Business", winner: "BambooHR", why: "Easy setup, great UX, competitive US pricing", color: "border-green-400" },
              { label: "Best for Tech Startups", winner: "Rippling", why: "HR + IT unified, fast US payroll, modular pricing", color: "border-violet-400" },
              { label: "Best for Multinationals", winner: "SAP SuccessFactors", why: "100+ country compliance, deepest global coverage", color: "border-blue-400" },
              { label: "Best for Finance-Led Orgs", winner: "Workday", why: "Unmatched HR + finance integration, Forbes 500 standard", color: "border-indigo-400" },
            ].map(({ label, winner, why, color }) => (
              <div key={label} className={`p-4 rounded-xl border-l-4 ${color} bg-gray-50 dark:bg-gray-800/50`}>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{label}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{winner}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{why}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM REVIEWS */}
      <section id="reviews" className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Top 8 HCM Software Platforms Reviewed</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Ranked by overall suitability for growing teams. Enterprise-first platforms ranked lower due to cost and implementation barriers.</p>
          <div className="space-y-8">
            {platforms.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 ${p.accentColor} bg-white dark:bg-[#0f1a2e] overflow-hidden`}>
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-black text-gray-200 dark:text-gray-700">#{p.rank}</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{p.name}</h3>
                        <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${p.badgeColor}`}>{p.badge}</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">{p.tagline}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                        ))}
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">{p.rating}</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{p.pricing}</div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
                      <div className="text-xs text-gray-400 uppercase font-semibold mb-1">Best For</div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">{p.bestFor}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
                      <div className="text-xs text-gray-400 uppercase font-semibold mb-1">Deploy Time</div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">{p.deployTime}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
                      <div className="text-xs text-gray-400 uppercase font-semibold mb-1">Pricing</div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">{p.pricing}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{p.highlight}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-bold text-green-700 dark:text-green-400 mb-3">Pros</div>
                      <ul className="space-y-2">
                        {p.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-red-600 dark:text-red-400 mb-3">Cons</div>
                      <ul className="space-y-2">
                        {p.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {(p.href || p.compareHref) && (
                    <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      {p.href && (
                        <Link href={p.href}>
                          <Button size="sm" className="rounded-full">
                            Try {p.name} Free <ArrowRight className="ml-1.5 w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                      {p.compareHref && (
                        <Link href={p.compareHref}>
                          <Button size="sm" variant="outline" className="rounded-full">
                            Space HR vs {p.name}
                          </Button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON TABLE */}
      <section id="comparison-table" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">HCM Software Feature Comparison</h2>
            <p className="text-gray-600 dark:text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-1" /> = Included &nbsp;
              <Minus className="w-4 h-4 text-yellow-400 inline mr-1" /> = Partial/Add-on &nbsp;
              <XCircle className="w-4 h-4 text-red-400 inline mr-1" /> = Not Available
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <table className="w-full text-left border-collapse bg-white dark:bg-[#0b1121]">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-4 text-sm font-bold text-gray-500 border-b dark:border-gray-700 min-w-[220px]">Feature</th>
                  {["Space HR", "Darwinbox", "BambooHR", "Rippling", "SAP SF", "Workday", "Oracle", "ADP"].map((name) => (
                    <th key={name} className={`p-4 text-xs font-bold text-center border-b dark:border-gray-700 min-w-[80px] ${name === "Space HR" ? "bg-teal-50/50 dark:bg-teal-900/10 text-teal-700 dark:text-teal-300" : "text-gray-500 dark:text-gray-400"}`}>
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {featureComparison.map(({ feature, spaceHr, darwinbox, bamboo, rippling, sap, workday, oracle, adp }) => (
                  <tr key={feature} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20">
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-300">{feature}</td>
                    <td className="p-4 text-center bg-teal-50/30 dark:bg-teal-900/10"><FeatureCell value={spaceHr} /></td>
                    <td className="p-4 text-center"><FeatureCell value={darwinbox} /></td>
                    <td className="p-4 text-center"><FeatureCell value={bamboo} /></td>
                    <td className="p-4 text-center"><FeatureCell value={rippling} /></td>
                    <td className="p-4 text-center"><FeatureCell value={sap} /></td>
                    <td className="p-4 text-center"><FeatureCell value={workday} /></td>
                    <td className="p-4 text-center"><FeatureCell value={oracle} /></td>
                    <td className="p-4 text-center"><FeatureCell value={adp} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BUYER'S GUIDE PROSE */}
      <section id="buyers-guide" className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How to Choose the Best HCM Software for Your Company</h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>
              The "best HCM software" varies entirely by company size, geography, and existing technology stack. A 50-person Indian startup has completely different HCM needs than a 5,000-person multinational. The mistake most buyers make is evaluating platforms built for a different market segment than their own — often leading to either over-engineered enterprise software with a 24-month implementation, or under-powered tools that can't handle their compliance requirements.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">By Company Size</h3>
            <p>
              <strong>10–200 employees:</strong> The priority is speed to value and simplicity. You need payroll compliance, leave management, attendance, and an employee self-service portal running within weeks — not months. At this size, Space HR (India), BambooHR (US), and Rippling (tech startups) are the right tier. Enterprise platforms like Workday and SAP SuccessFactors are categorically wrong for this segment — implementation alone costs more than 2–3 years of SMB HCM subscriptions.
            </p>
            <p>
              <strong>200–1,000 employees:</strong> This is the mid-market sweet spot where compliance complexity grows, multi-location management becomes critical, and analytics start to matter. Darwinbox (India), Rippling (US/Global tech), and BambooHR Premium are strong options. You can still avoid enterprise-grade implementation overhead at this size.
            </p>
            <p>
              <strong>1,000+ employees:</strong> At scale, global payroll coverage, deep integration with ERP and finance systems, and compliance across multiple jurisdictions become critical. SAP SuccessFactors, Workday, and Oracle HCM are designed for this segment. Budget for $100,000–$2,000,000 in implementation costs in addition to the annual license fee, and plan for 12–24 months before go-live.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">By Geography</h3>
            <p>
              <strong>India-first companies:</strong> India's statutory complexity — PF with EPF/EPS split, ESIC wage thresholds, state-wise Professional Tax slabs, TDS Section 192 with investment declarations — eliminates most global HCM platforms as viable options without expensive add-ons. Space HR and Darwinbox are the only platforms where India compliance works out-of-the-box. Space HR is the better choice for companies under 500 employees; Darwinbox for larger enterprises.
            </p>
            <p>
              <strong>US-first companies:</strong> BambooHR, Rippling, and ADP Workforce Now all handle US payroll compliance across all 50 states natively. BambooHR wins on ease-of-use and employee experience; Rippling on HR+IT bundling; ADP on payroll reliability and brand trust among accountants and CPAs.
            </p>
            <p>
              <strong>Multi-country companies:</strong> Only SAP SuccessFactors, Workday, Oracle HCM, and Rippling (via partners) have mature multi-country payroll coverage across 50+ countries. For companies operating in 5 or fewer countries, a best-of-breed approach (country-specific payroll vendors + a centralized HRMS for core HR) often delivers better compliance at lower cost than a single global HCM platform.
            </p>
          </div>
        </div>
      </section>

      {/* INDIA SECTION */}
      <section id="india" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-10 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🇮🇳</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HCM Software for India — Regional Deep Dive</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Space HR is headquartered in the United States and serves customers globally, including teams operating in India. India's HCM market is unique, with overlapping statutory deductions on every payslip — PF (EPF + EPS), ESIC, TDS, Professional Tax (18 state slabs), LWF, and Gratuity. Space HR handles India compliance natively, so you don't need third-party payroll vendors that create data sync issues and integration overhead.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-[#0b1121] rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">Space HR</div>
                <div className="text-sm text-teal-600 font-semibold mb-3">Best for: 10–500 employees</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {["India statutory built-in (PF, ESIC, TDS, PT)", "Aggressive custom pricing", "Go live in 48 hours", "AI payroll auditor + attrition prediction", "WhatsApp HR concierge"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />{i}</li>
                  ))}
                </ul>
                <Link href="/request-a-demo" className="mt-4 inline-block">
                  <Button size="sm" className="rounded-full mt-2">Request a Demo</Button>
                </Link>
              </div>
              <div className="bg-white dark:bg-[#0b1121] rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">Darwinbox</div>
                <div className="text-sm text-orange-600 font-semibold mb-3">Best for: 500+ employees</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {["Strong India enterprise compliance", "Mobile-first employee experience", "Workforce analytics and OD tools", "8–16 week implementation", "Requires dedicated IT/HR project team"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />{i}</li>
                  ))}
                </ul>
                <Link href="/compare/darwinbox" className="mt-4 inline-block">
                  <Button size="sm" variant="outline" className="rounded-full mt-2">Space HR vs Darwinbox</Button>
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For companies with employees in India alongside the US, UK, UAE, Singapore, Canada, or Europe, Space HR provides a single global HCM platform with localized compliance in each country.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Related Comparisons & Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/hrms", label: "What is HRMS?", desc: "Complete guide to HR management systems" },
              { href: "/hr-software", label: "Best HR Software", desc: "Top HR platforms compared" },
              { href: "/compare", label: "All Comparisons", desc: "Space HR vs 13 competitors" },
              { href: "/employee-self-service-hrms", label: "ESS HRMS Guide", desc: "Employee self-service portal explained" },
              { href: "/best-hr-software-small-business", label: "HR Software for SMBs", desc: "Best HR tools for small business" },
              { href: "/regions/india", label: "India HR Compliance", desc: "PF, ESIC, TDS complete guide" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-start gap-3 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-indigo-400 transition-all">
                <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">HCM Software FAQs</h2>
            <p className="text-gray-600 dark:text-gray-400">Common questions from HR leaders evaluating HCM platforms.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">Try the Best HCM Software for Global Teams</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Space HR covers payroll, leave, attendance, performance, ESS, and AI analytics — with multi-country compliance built in. Request a demo and we&apos;ll follow up with aggressive pricing tailored to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-50 rounded-full px-10 h-14 text-lg font-bold">
                Request a Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                Start Free 14-Day Trial
              </Button>
            </Link>
          </div>
          <p className="text-indigo-200 text-sm mt-6">No credit card · Global compliance · Go live in 48 hours</p>
        </div>
      </section>
    </div>
  );
}
