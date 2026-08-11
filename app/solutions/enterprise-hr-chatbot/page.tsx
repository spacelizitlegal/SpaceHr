import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  Clock,
  Globe,
  Shield,
  Sparkles,
  Users,
  Zap,
  BarChart3,
  Building2,
  FileCheck,
  GitMerge,
  Key,
  Layers,
  Lock,
  Network,
  Server,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI HR Chatbot — Security, Scale & HRIS Integration | Space HR",
  description:
    "Enterprise AI HR chatbot with SSO, SCIM, private cloud, SOC 2 security, and integrations with Workday, SAP, Oracle, and ADP. Built for 1,000+ employees.",
  keywords: [
    "enterprise ai hr chatbot",
    "enterprise hr chatbot",
    "enterprise hr virtual assistant",
    "secure hr chatbot",
    "scalable hr chatbot",
    "enterprise hr automation",
    "hr chatbot for large organizations",
    "enterprise hr self service chatbot",
    "hr chatbot sso",
    "hr chatbot private cloud",
    "hr chatbot workday integration",
    "hr chatbot sap successfactors",
  ],
  alternates: {
    canonical: "https://spacehr.net/solutions/enterprise-hr-chatbot",
  },
  openGraph: {
  title: "Enterprise AI HR Chatbot — Security & HRIS Integration",
    description:
      "Enterprise-grade AI HR chatbot with SSO, private cloud, SOC 2, and deep Workday/SAP/Oracle/ADP integration. For 1,000+ employee organizations.",
    url: "https://spacehr.net/solutions/enterprise-hr-chatbot",
    siteName: "Space HR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Enterprise AI HR Chatbot Security and Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI HR Chatbot | Space HR",
    description:
      "Enterprise-grade AI HR chatbot with SSO, private cloud, SOC 2, and deep HRIS integration.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const faqs = [
  {
    question: "What makes an HR chatbot 'enterprise-grade'?",
    answer:
      "An enterprise-grade HR chatbot differs from SMB solutions in five critical ways: (1) Security — SOC 2 Type II certification, SSO/SAML integration, private cloud or on-premise deployment options, and granular RBAC. (2) Scale — handles tens of thousands of concurrent employee queries without performance degradation. (3) Integration depth — native connectors to enterprise HRIS platforms (Workday, SAP SuccessFactors, Oracle HCM) with real-time bidirectional sync. (4) Multi-language support — serves global workforces across dozens of languages with localized HR policy content. (5) Governance — full audit logging, data residency controls, and compliance reporting for regulated industries.",
  },
  {
    question: "Which HRIS platforms does Space HR integrate with at enterprise level?",
    answer:
      "Space HR has enterprise-grade (bidirectional, real-time) integrations with: Workday HCM, SAP SuccessFactors, Oracle HCM Cloud, ADP Workforce Now, and Ceridian Dayforce. Standard integrations (read-only, real-time) are available for BambooHR, Rippling, Gusto, UKG, and 20+ additional platforms. For platforms without a pre-built connector, Space HR provides an enterprise API with Webhook support and a certified implementation partner network for custom integration projects.",
  },
  {
    question: "How does Space HR handle multi-language support for global enterprises?",
    answer:
      "Space HR's enterprise tier supports 40+ languages for employee-facing interactions. HR policy content can be maintained in multiple languages with version control — when a policy is updated in English, HR admins can push updates to localized versions with AI-assisted translation. The chatbot automatically detects employee language preference from their HRIS profile or browser locale. Regional HR rules (UAE labor law, Singapore MOM regulations, UK employment law, EU Working Time Directive) are configured per country and applied automatically based on employee work location.",
  },
  {
    question: "What are the deployment options for enterprise customers?",
    answer:
      "Space HR offers three deployment options for enterprise: (1) SaaS (multi-tenant cloud) — fastest to deploy, lowest TCO, data stored in your chosen region (US, EU, APAC). (2) Dedicated cloud — single-tenant SaaS deployment on isolated infrastructure, same managed service but data is not co-mingled. (3) Private cloud / on-premise — Space HR deployed within your own cloud environment (AWS, Azure, GCP) or on-premise data center. Private cloud is available for organizations with strict data sovereignty requirements (defense, government, regulated finance).",
  },
  {
    question: "How does Space HR handle SSO and identity management for enterprises?",
    answer:
      "Space HR supports SAML 2.0 and OpenID Connect (OIDC) for SSO integration with all major identity providers: Okta, Azure Active Directory, Google Workspace, Ping Identity, and OneLogin. Role provisioning is automated via SCIM — when an employee's role changes in your IdP, their chatbot access permissions update automatically with no manual intervention. MFA is supported and can be enforced as a policy for all chatbot sessions.",
  },
  {
    question: "How does Space HR manage data residency for enterprise customers?",
    answer:
      "Space HR supports data residency in three regions: United States (AWS us-east-1), European Union (AWS eu-west-1 / eu-central-1), and Asia-Pacific (AWS ap-southeast-1). Enterprise customers can specify that all employee data is stored and processed within a specific region to comply with GDPR, PDPA (Singapore), or other data localization regulations. Private cloud customers have full control over data residency as the infrastructure runs in their own cloud environment.",
  },
  {
    question: "What security certifications does Space HR have for enterprise use?",
    answer:
      "Space HR's security posture for enterprise: SOC 2 Type II certified (annual re-certification), GDPR compliant, ISO 27001 aligned practices, AES-256 encryption at rest, TLS 1.3 in transit, annual penetration testing by a third-party firm, vulnerability disclosure program, RBAC with attribute-based access control, full audit logging with immutable log storage, and session timeout controls. Enterprise customers receive a copy of the most recent SOC 2 report under NDA during procurement.",
  },
  {
    question: "Can Space HR handle complex enterprise HR workflows, not just Q&A?",
    answer:
      "Yes. Space HR's enterprise tier supports multi-step workflow automation beyond simple Q&A: leave request submission and approval routing, onboarding task orchestration across HR / IT / Finance / Facilities, employee data change requests with manager and HR approval chains, performance review cycle management and reminders, compliance training completion tracking and reminders, and cross-system ticket creation (HR + ServiceNow + Jira). Workflows are configured in Space HR's no-code workflow builder — no engineering required for standard workflow templates.",
  },
  {
    question: "How does Space HR scale to support tens of thousands of employees?",
    answer:
      "Space HR's architecture is built on auto-scaling cloud infrastructure (AWS) with horizontal scaling for query processing. Enterprise SLA guarantees 99.9% uptime with sub-3-second response times at peak load. Space HR has been tested at 50,000 concurrent sessions. Dedicated cloud and private cloud customers receive dedicated infrastructure with no noisy-neighbor performance risk. Load testing results are available to enterprise customers during procurement.",
  },
  {
    question: "What does enterprise implementation look like for Space HR?",
    answer:
      "Enterprise implementations follow a structured program: (1) Discovery — 2-week requirements gathering, HRIS audit, workflow mapping, security review. (2) Technical setup — HRIS integration, SSO configuration, data residency setup, ticketing system integration (3–4 weeks). (3) Knowledge base build — HR team uploads and reviews policy content, Space HR AI extracts and structures it (1–2 weeks). (4) Pilot — 10% employee rollout with monitoring (2 weeks). (5) Phased launch — department by department rollout with adoption reporting. Typical enterprise time-to-full-deployment: 8–12 weeks. A dedicated Customer Success Manager is assigned for the full program.",
  },
];

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "Enterprise AI HR Chatbot", url: "https://spacehr.net/solutions/enterprise-hr-chatbot" },
];

const enterpriseCapabilities = [
  {
    icon: Key,
    title: "SSO / SAML / SCIM",
    description: "Okta, Azure AD, Google Workspace, Ping Identity. SCIM for automated role provisioning. MFA enforcement support.",
  },
  {
    icon: Server,
    title: "Private Cloud & On-Premise",
    description: "Deploy Space HR within your own AWS, Azure, or GCP environment — or on-premise. Full data sovereignty for regulated industries.",
  },
  {
    icon: Globe,
    title: "40+ Language Support",
    description: "Localized HR policy content, regional labor law rules, and AI-assisted translation for global workforce deployments.",
  },
  {
    icon: Network,
    title: "Deep HRIS Integration",
    description: "Bidirectional, real-time sync with Workday, SAP SuccessFactors, Oracle HCM, ADP Workforce Now, and Ceridian.",
  },
  {
    icon: Layers,
    title: "Multi-Step Workflow Automation",
    description: "Leave approval chains, onboarding orchestration, data change requests — complex multi-system workflows with no-code configuration.",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II Certified",
    description: "Annual third-party certification, penetration testing, GDPR compliance, ISO 27001 aligned. SOC 2 report available under NDA.",
  },
  {
    icon: BarChart3,
    title: "Enterprise Analytics & Reporting",
    description: "Department-level and regional analytics, executive dashboards, compliance audit exports, and SLA reporting.",
  },
  {
    icon: GitMerge,
    title: "ITSM & Ticketing Integration",
    description: "ServiceNow, Jira, Freshdesk — pre-triaged, structured ticket creation for escalated HR queries.",
  },
  {
    icon: Lock,
    title: "Data Residency Controls",
    description: "Choose US, EU, or APAC data residency. Compliance with GDPR, Singapore PDPA, and regional data localization laws.",
  },
  {
    icon: Users,
    title: "Granular RBAC",
    description: "Employee, manager, HR BP, HR admin, and executive personas — each with precisely scoped data access and permissions.",
  },
  {
    icon: Zap,
    title: "99.9% SLA Uptime",
    description: "Auto-scaling infrastructure, sub-3-second response times at 50,000 concurrent sessions, dedicated infrastructure available.",
  },
  {
    icon: Building2,
    title: "Dedicated Customer Success",
    description: "Named CSM, quarterly business reviews, adoption reporting, and a certified implementation partner network.",
  },
];

const smbVsEnterprise = [
  { requirement: "Authentication", smb: "Email / password login", enterprise: "SSO (SAML/OIDC) + SCIM provisioning" },
  { requirement: "Deployment", smb: "Shared SaaS only", enterprise: "SaaS / Dedicated cloud / Private cloud" },
  { requirement: "Data residency", smb: "US only", enterprise: "US, EU, or APAC — configurable" },
  { requirement: "HRIS integration", smb: "CSV import or basic API", enterprise: "Bidirectional real-time sync (Workday, SAP, Oracle)" },
  { requirement: "Language support", smb: "English only", enterprise: "40+ languages with localized policy content" },
  { requirement: "Workflow automation", smb: "Q&A and basic task completion", enterprise: "Multi-step, multi-system workflow orchestration" },
  { requirement: "Security certification", smb: "SOC 2 Type I or self-attested", enterprise: "SOC 2 Type II + annual pen test + report under NDA" },
  { requirement: "Analytics", smb: "Basic usage dashboard", enterprise: "Department / regional analytics, executive dashboards, audit exports" },
  { requirement: "Scale tested to", smb: "Up to ~500 employees", enterprise: "50,000 concurrent sessions" },
  { requirement: "Implementation support", smb: "Self-serve onboarding docs", enterprise: "Named CSM + structured 8–12 week program" },
];

const useCasesBySize = [
  {
    size: "1,000–5,000 employees",
    icon: Building2,
    pain: "HR team of 5–15 people fielding 3,000–8,000 queries/month. Manual triage, constant SLA pressure, limited HR BP time for strategic work.",
    solution: "Deploy chatbot to handle leave, payroll, and policy queries. Connect to Workday or BambooHR. Integrate with Jira for escalations. Achieve 65–70% ticket deflection in 30 days.",
    highlight: "65–70% ticket deflection",
  },
  {
    size: "5,000–20,000 employees",
    icon: Network,
    pain: "Multiple countries, multiple HR policies, multiple languages. Central HR team overwhelmed. Regional teams duplicating effort. No consistent employee experience.",
    solution: "Multi-region deployment with localized policy content and regional labor law rules. SSO via Okta or Azure AD. ServiceNow integration for escalations. Executive dashboard for global HR ops visibility.",
    highlight: "Consistent global HR experience",
  },
  {
    size: "20,000+ employees",
    icon: Server,
    pain: "Data sovereignty requirements. Regulated industry (finance, healthcare, defense). Cannot use shared SaaS. Need private cloud or on-premise. Complex approval workflow orchestration.",
    solution: "Private cloud deployment within your AWS/Azure environment. SCIM provisioning. Bidirectional SAP SuccessFactors or Oracle HCM integration. Custom workflow automation for complex multi-system HR processes.",
    highlight: "Private cloud, full data sovereignty",
  },
];

const roiData = [
  { metric: "Ticket deflection", value: "70%", detail: "Avg. across enterprise deployments" },
  { metric: "Response time", value: "< 3 sec", detail: "At 50K concurrent sessions" },
  { metric: "Languages", value: "40+", detail: "For global workforce coverage" },
  { metric: "Uptime SLA", value: "99.9%", detail: "Enterprise tier guarantee" },
  { metric: "HRIS connectors", value: "20+", detail: "Pre-built enterprise integrations" },
  { metric: "Deployment", value: "8–12 wks", detail: "Full enterprise go-live" },
];

export default function EnterpriseHRChatbotPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 pb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/solutions" className="hover:text-blue-600">Solutions</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 dark:text-white font-medium">Enterprise AI HR Chatbot</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-10 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/30 dark:via-blue-950/15 dark:to-indigo-950/10 -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 border border-slate-200 dark:border-slate-700">
                  <Building2 className="w-4 h-4" /> Enterprise AI HR Chatbot
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                  Enterprise AI HR Chatbot{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Built for Scale, Security, and Global Teams
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Space HR&apos;s <strong>enterprise AI HR chatbot</strong> delivers 24/7 employee self-service across thousands of employees, dozens of countries, and multiple languages — with the security and integration depth large organizations require.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  SSO. Private cloud. Bidirectional Workday and SAP integration. SOC 2 Type II. Multi-language. 99.9% SLA. <strong>Everything an SMB chatbot doesn&apos;t have.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/request-a-demo">
                    <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-lg">
                      <Building2 className="w-5 h-5 mr-2" />
                      Request Enterprise Demo
                    </Button>
                  </Link>
                  <Link href="https://cad.spaceaiapp.com/login">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-gray-300 dark:border-gray-700">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {["SOC 2 Type II certified", "Private cloud available", "40+ languages"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enterprise architecture visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-3xl" />
                <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold text-sm">Space HR Enterprise</span>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full font-semibold">
                        99.9% uptime
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-3 bg-gray-50 dark:bg-[#0f172a]">
                    {/* Layer diagram */}
                    {[
                      {
                        label: "Employee Channels",
                        items: ["Slack", "MS Teams", "Intranet", "Mobile"],
                        color: "bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
                        textColor: "text-blue-700 dark:text-blue-300",
                      },
                      {
                        label: "Security Layer",
                        items: ["SSO/SAML", "SCIM", "MFA", "RBAC"],
                        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
                        textColor: "text-red-700 dark:text-red-300",
                      },
                      {
                        label: "AI Engine",
                        items: ["NLU", "40+ Languages", "Policy KB", "Workflows"],
                        color: "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800",
                        textColor: "text-indigo-700 dark:text-indigo-300",
                      },
                      {
                        label: "Integrations",
                        items: ["Workday", "SAP", "ServiceNow", "Oracle HCM"],
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
                        textColor: "text-green-700 dark:text-green-300",
                      },
                      {
                        label: "Deployment",
                        items: ["SaaS", "Dedicated Cloud", "Private Cloud", "On-Prem"],
                        color: "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700",
                        textColor: "text-slate-700 dark:text-slate-300",
                      },
                    ].map(({ label, items, color, textColor }) => (
                      <div key={label} className={`rounded-xl border p-3 ${color}`}>
                        <p className={`text-xs font-bold mb-2 ${textColor}`}>{label}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span key={item} className={`text-xs px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20 ${textColor} font-medium`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI bar */}
        <section className="py-14 bg-blue-800 dark:bg-blue-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {roiData.map(({ metric, value, detail }) => (
                <div key={metric} className="text-center">
                  <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                  <div className="text-blue-200 text-xs font-semibold uppercase tracking-wide mb-1">{metric}</div>
                  <div className="text-blue-300 text-xs">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SMB vs Enterprise comparison */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What &ldquo;Enterprise-Grade&rdquo; Actually Means
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Most HR chatbot vendors offer one tier and call it enterprise. Space HR was designed from the ground up with enterprise requirements — here is what that means in practice.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-[#1e293b]">
                    <th className="text-left px-5 py-4 font-semibold text-gray-700 dark:text-gray-300 w-1/3">Requirement</th>
                    <th className="px-5 py-4 font-semibold text-gray-500 dark:text-gray-400 text-center">Typical SMB Tool</th>
                    <th className="px-5 py-4 font-semibold text-blue-600 dark:text-blue-400 text-center">Space HR Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {smbVsEnterprise.map(({ requirement, smb, enterprise }, i) => (
                    <tr key={requirement} className={i % 2 === 0 ? "bg-white dark:bg-[#111827]" : "bg-gray-50 dark:bg-[#0f172a]"}>
                      <td className="px-5 py-3.5 font-medium text-gray-900 dark:text-white">{requirement}</td>
                      <td className="px-5 py-3.5 text-center text-gray-500 dark:text-gray-400">{smb}</td>
                      <td className="px-5 py-3.5 text-center text-blue-700 dark:text-blue-300 font-semibold">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 12 Enterprise Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                12 Enterprise-Specific Capabilities
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Every capability below is exclusive to Space HR&apos;s enterprise tier — not available on standard SMB HR chatbot platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {enterpriseCapabilities.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases by org size */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Enterprise HR Chatbot — By Organization Size
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The challenges — and the right deployment approach — differ significantly by organization size. Here is how Space HR addresses each segment.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {useCasesBySize.map(({ size, icon: Icon, pain, solution, highlight }) => (
                <div key={size} className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-4 flex items-center gap-3">
                    <Icon className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white font-bold text-sm">{size}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1.5">The Challenge</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pain}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1.5">Space HR Approach</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{solution}</p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full">
                        <Sparkles className="w-3.5 h-3.5" /> {highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise implementation timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Enterprise Implementation Program
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Enterprise HR chatbot deployments require a structured program — not a self-serve sign-up. Space HR&apos;s enterprise implementation follows a proven 5-phase approach with a dedicated Customer Success Manager from day one.
                </p>
                <div className="space-y-4">
                  {[
                    { phase: "Phase 1", title: "Discovery (Weeks 1–2)", detail: "Requirements gathering, HRIS audit, workflow mapping, security review, data residency decision. Deliverable: signed-off Technical Design Document." },
                    { phase: "Phase 2", title: "Technical Setup (Weeks 3–6)", detail: "HRIS integration, SSO/SCIM configuration, data residency setup, ticketing system integration, channel deployment (Slack/Teams)." },
                    { phase: "Phase 3", title: "Knowledge Base Build (Weeks 5–7)", detail: "HR team uploads policy documents. Space HR AI extracts and structures content. HR review and approval. Regional variants configured." },
                    { phase: "Phase 4", title: "Pilot (Weeks 8–9)", detail: "10% employee rollout with one HR region or department. Analytics review, knowledge gap remediation, adoption measurement." },
                    { phase: "Phase 5", title: "Phased Launch (Weeks 10–12)", detail: "Department-by-department rollout. Communication campaign. Adoption reporting. Quarterly business review scheduled." },
                  ].map(({ phase, title, detail }) => (
                    <div key={phase} className="flex gap-4 p-4 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">{phase}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Security &amp; Compliance at Enterprise Level
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  HR data is among the most sensitive data your organization holds. Space HR&apos;s security posture is built for the scrutiny of enterprise procurement and InfoSec teams.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { item: "SOC 2 Type II certified", detail: "Annual third-party audit. Report available to enterprise customers under NDA." },
                    { item: "AES-256 encryption at rest", detail: "All HR data encrypted at rest with AES-256. Key management via AWS KMS." },
                    { item: "TLS 1.3 in transit", detail: "All data in transit encrypted with TLS 1.3. TLS 1.2 minimum enforced." },
                    { item: "Annual penetration testing", detail: "Third-party pen test results available to enterprise customers during procurement." },
                    { item: "Immutable audit logging", detail: "Every chatbot interaction logged with tamper-proof audit trail. Exportable for compliance." },
                    { item: "GDPR & PDPA compliant", detail: "Data processing agreements, right-to-erasure workflows, and data residency controls included." },
                  ].map(({ item, detail }) => (
                    <div key={item} className="flex gap-3 p-3.5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                      <Shield className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{item}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Security documentation available</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    SOC 2 Type II report, pen test executive summary, data processing agreement, and security questionnaire responses available to enterprise procurement teams under NDA.{" "}
                    <Link href="/request-a-demo" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      Request via enterprise demo →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-800 to-indigo-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <Building2 className="w-10 h-10 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for an Enterprise AI HR Chatbot Evaluation?
            </h2>
            <p className="text-blue-100 mb-3 max-w-2xl mx-auto text-lg">
              Space HR&apos;s enterprise team works with HR and IT leaders at large organizations to design the right deployment architecture, integration plan, and security posture.
            </p>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
              Enterprise demos include a live HRIS integration demonstration, a security briefing, and a tailored ROI estimate based on your headcount and current HR ticket volume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-blue-800 hover:bg-blue-50 shadow-lg">
                  <Building2 className="w-5 h-5 mr-2" />
                  Request Enterprise Demo
                </Button>
              </Link>
              <Link href="mailto:enterprise@spacehr.net">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/40 text-white hover:bg-white/10">
                  Email Enterprise Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-blue-300 text-sm mt-6">enterprise@spacehr.net · Dedicated enterprise sales team · Response within 1 business day</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Enterprise AI HR Chatbot — FAQ
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
              Questions from enterprise HR leaders, IT architects, and procurement teams evaluating Space HR.
            </p>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* Related pages */}
        <section className="py-16 bg-gray-50 dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Related Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/solutions/hr-ai-chatbot", title: "HR AI Chatbot Overview", desc: "Full platform overview — all use cases and capabilities." },
                { href: "/solutions/hr-helpdesk-chatbot", title: "HR Helpdesk Chatbot", desc: "Ticket deflection, SLA management, ServiceNow integration." },
                { href: "/solutions/internal-employee-chatbot", title: "Internal Employee Chatbot", desc: "Slack and Teams deployment for internal HR queries." },
                { href: "/features/ai-chatbots", title: "AI Chatbot Features", desc: "Full feature breakdown — enterprise and standard tiers." },
                { href: "/blogs/chatbot-for-hr-services-complete-guide", title: "HR Chatbot Deployment Guide", desc: "Step-by-step guide to deploying an AI HR chatbot." },
                { href: "/resources/hr-chatbot-buyers-guide", title: "HR Chatbot Buyer's Guide", desc: "Evaluation framework, red flags, pricing benchmarks." },
                { href: "/compare", title: "Compare HR Platforms", desc: "Space HR vs ServiceNow, Moveworks, Leena AI, and 10 more." },
                { href: "/request-a-demo", title: "Request Enterprise Demo", desc: "Tailored demo with live HRIS integration and security briefing." },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                  <span className="mt-2 text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
