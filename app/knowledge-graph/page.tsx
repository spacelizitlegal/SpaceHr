import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/components/JsonLd";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Building,
  CalendarClock,
  CheckCircle,
  FileSearch,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Link2,
  MessageSquareText,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import { KnowledgeGraphDiagram } from "./KnowledgeGraphDiagram";

export const metadata: Metadata = {
  title: "Space HR Knowledge Graph — Connected People, Payroll & AI",
  description:
    "Explore how Space HR connects employees, HR administrators, payroll, performance management, finance, AI, compliance, industries, regions, and integrations into a single queryable HR knowledge graph with verifiable, source-attributed AI answers.",
  keywords: [
    "Space HR knowledge graph",
    "HR knowledge graph",
    "HR data graph",
    "connected HR data",
    "employee data model",
    "payroll knowledge graph",
    "AI HR chatbot knowledge graph",
    "GraphRAG HR",
    "workforce analytics graph",
    "HR compliance graph",
    "multi-hop reasoning HR",
    "HRMS knowledge graph",
    "HR data relationships",
  ],
  alternates: {
    canonical: "https://spacehr.net/knowledge-graph",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacehr.net/knowledge-graph",
    siteName: "Space HR",
    title: "Space HR Knowledge Graph — Connected People, Payroll & AI",
    description:
      "How Space HR connects employees, payroll, performance, finance, AI, compliance, industries, regions, and integrations into a single queryable knowledge graph.",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Knowledge Graph — connected people, payroll, and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR Knowledge Graph — Connected People, Payroll & AI",
    description:
      "See how Space HR grounds AI answers and payroll analytics in a connected HR knowledge graph with source attribution.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const _bc_knowledge_graph = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Knowledge Graph", url: "https://spacehr.net/knowledge-graph" },
];

const knowledgeGraphFAQs = [
  {
    question: "What is the Space HR Knowledge Graph?",
    answer:
      "A structured model of everything connected to your workforce — employees, HR administrators, managers, executives, payroll, performance, finance, learning, the AI chatbot, self-service, analytics, compliance, industries, regions, integrations, and HR documents. Typed relationships link these entities so Space HR and its AI answer questions across the whole organization in one place.",
  },
  {
    question: "What relationships does the Space HR Knowledge Graph connect?",
    answer:
      "The graph uses typed relationships like employees who use self-service and ask the AI chatbot, HR administrators who manage payroll, supervisors who review performance, payroll that follows compliance rules, regions that set payroll rules, and integrations that sync the Space AI ecosystem. Each relationship links back to its source data.",
  },
  {
    question: "How does Space HR's AI use the knowledge graph?",
    answer:
      "The AI HR chatbot, AI Payroll Auditor, and workforce analytics all reason over the same graph. The chatbot answers leave, payroll, and policy questions with source-attributed citations; the AI Payroll Auditor flags gross-to-net and statutory withholding errors before a pay run; and analytics delivers 12-month labor-cost forecasts and attrition predictions.",
  },
  {
    question: "Which countries and compliance rules are in the Space HR graph?",
    answer:
      "The graph covers every region Space HR supports: the US (FUTA, FICA, state SIT/SUI/SDI, NACHA ACH, W-2/W-4, California pay transparency), the UK (PAYE, RTI to HMRC, NIC, pension auto-enrolment, IR35, UK GDPR), Dubai & the UAE (WPS, MOHRE, EOSB gratuity, DIFC/ADGM, ILOE), India (EPF, ESI, Professional Tax, TDS, statutory bonus, gratuity), Singapore (CPF, MOM-compliant payslips, Employment Act leave, IR8A), Canada (CPP, EI, provincial tax, Quebec rules, ROE, PIPEDA), and Europe (GDPR, EU data residency, Works Council workflows).",
  },
  {
    question: "Which industries is the Space HR Knowledge Graph tailored for?",
    answer:
      "Healthcare (nurse scheduling, credentialing), banking & finance (FCA SMCR, conduct risk), retail (rota scheduling, variable pay), manufacturing (factory-act compliance, shift scheduling), government (civil service compliance, pension schemes), and construction (site labour, BOCW, contractor workforce).",
  },
  {
    question: "What integrations connect to the Space HR graph?",
    answer:
      "Space HR connects to the Space AI ecosystem: PM Space AI, Space Sign, Space Capture, Space Lizit, Space Lean, Space Nexus, and Space CRM. Employee records, labor-cost forecasts, and payroll results flow across these products instead of living in silos.",
  },
  {
    question: "Can the Space HR Knowledge Graph run on-premises?",
    answer:
      "Yes. The graph is grounded by VeritasGraph, an open-source GraphRAG framework that can run on-prem or 100% local — keeping payroll and workforce data sovereign with zero data egress (GDPR, PDPA, and regional data-residency requirements).",
  },
];

const ingestionSteps = [
  {
    step: "01",
    icon: Server,
    title: "HR Data Sources",
    text: "Payroll runs, org charts, leave and attendance, appraisals, policies, tax tables, and integrations stream in automatically.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Normalization & Typing",
    text: "Employees, roles, departments, pay codes, policies, regions, and industries become standardized, typed entities.",
  },
  {
    step: "03",
    icon: FileSearch,
    title: "Entity Extraction",
    text: "People, amounts, dates, clauses, and compliance rules are linked to the exact source record or document.",
  },
  {
    step: "04",
    icon: Network,
    title: "Graph Construction",
    text: "Entities and their relationships — manages, reviews, governed by, located in, integrated with — merge into one queryable graph.",
  },
  {
    step: "05",
    icon: Workflow,
    title: "Continuous Sync",
    text: "New hires, payroll cycles, policy updates, and approvals trigger incremental updates without full reprocessing.",
  },
];

const aiIntelligence = [
  {
    icon: MessageSquareText,
    title: "AI HR Chatbot",
    text: "24/7 answers for leave, payroll, and policy questions — grounded in the graph with source attribution. Resolves 95% of queries instantly, cutting HR tickets by 70%.",
  },
  {
    icon: ShieldCheck,
    title: "Payroll Anomaly Detection",
    text: "The AI Payroll Auditor flags gross-to-net, FUTA/FICA, and NACHA file errors before a pay run — reducing payroll errors by 99%.",
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    text: "12-month labor-cost forecasts at 95% accuracy feed budgets, so finance and HR can model headcount scenarios and track variance.",
  },
  {
    icon: Network,
    title: "Predictive Workforce Analytics",
    text: "Attrition prediction links people data, departments, and history to surface retention risk before it becomes costly.",
  },
  {
    icon: Target,
    title: "Performance Coaching",
    text: "Appraisals, goals, and 360-degree feedback give managers and HR the context for stronger reviews and development plans.",
  },
  {
    icon: CalendarClock,
    title: "Workforce Forecasting",
    text: "Headcount, overtime, and labor-demand scenarios come from graph-connected trends — so leaders plan hiring and shifts with real data.",
  },
];

const relationships = [
  {
    query: "Which employees are affected by a specific payroll policy?",
    hops: "Payroll Policy → Payroll Records → Employees",
    path: "governed by → applies to",
    result:
      "The graph hops from the policy to the payroll records it governs, then to every employee those records cover — showing who is affected before a change is made.",
  },
  {
    query: "Which departments have increasing labor costs?",
    hops: "Departments → Labor-Cost Forecast → Budget Variance",
    path: "incurs → compares to",
    result:
      "Multi-hop reasoning joins departments to their 12-month labor-cost forecast and budget variance, surfacing which teams drive spend.",
  },
  {
    query: "Which employees are due for performance reviews?",
    hops: "Employees → Appraisals → Review Status",
    path: "enrolled in → due on",
    result:
      "Managers get one list of employees whose appraisals are due, with goals, prior feedback, and approvers attached to each record.",
  },
  {
    query: "Which compliance rules apply to employees in a specific country?",
    hops: "Country → Compliance Rules → Employee Work Location",
    path: "sets rules for → applies at",
    result:
      "The graph returns the applicable payroll and privacy rules — FUTA, PAYE, WPS, CPF, or GDPR — for every employee in that region.",
  },
  {
    query: "Which training courses are assigned to employees in a particular role?",
    hops: "Role → Course Assignment → Employees",
    path: "requires → assigned to",
    result:
      "Leaders can see which Learning Center courses attach to a role and which employees are enrolled, completed, or overdue.",
  },
];

const regions = [
  {
    flag: "🇺🇸",
    name: "United States",
    badge: "FUTA / FICA / NACHA",
    desc: "All 50 states plus local taxes, Federal FUTA and FICA, state SIT/SUI/SDI, NACHA ACH generation, W-2/W-4 management, and California pay transparency.",
    href: "/regions/united-states",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    badge: "PAYE & RTI",
    desc: "PAYE payroll, Real Time Information (RTI) submissions to HMRC, NIC, pension auto-enrolment, IR35, statutory leave, and UK GDPR employee data management.",
    href: "/regions/uk",
  },
  {
    flag: "🇦🇪",
    name: "Dubai & UAE",
    badge: "WPS Compliant",
    desc: "WPS salary information files, MOHRE visa and labour card tracking, automatic EOSB gratuity, DIFC/ADGM rules, and unemployment insurance (ILOE).",
    href: "/regions/dubai",
  },
  {
    flag: "🇮🇳",
    name: "India",
    badge: "PF & ESI",
    desc: "EPF, ESI, Professional Tax, TDS, statutory bonus, gratuity under the Gratuity Act, and state-specific Shops & Establishments compliance.",
    href: "/regions/india",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    badge: "CPF & MOM",
    desc: "CPF contribution calculations, MOM-compliant payslips, Employment Act statutory leave, work pass and S-Pass tracking, and IR8A tax form generation.",
    href: "/regions/singapore",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    badge: "Federal & Provincial",
    desc: "CPP, EI, and income tax across all provinces, Quebec-specific QC rules, Record of Employment (ROE) generation, and PIPEDA data privacy.",
    href: "/regions/canada",
  },
  {
    flag: "🇪🇺",
    name: "Europe",
    badge: "GDPR",
    desc: "GDPR-compliant employee data with EU data residency, Works Council consultation workflows, country-specific social security, and multi-currency payroll.",
    href: "/regions/europe",
  },
];

const industries = [
  {
    title: "Healthcare",
    desc: "Nurse scheduling, training tracking, credentialing, and compliance for healthcare teams.",
    href: "/industries/healthcare",
  },
  {
    title: "Banking & Finance",
    desc: "FCA SMCR compliance, conduct risk tracking, and bonus administration for financial services.",
    href: "/industries/banking",
  },
  {
    title: "Retail",
    desc: "Rota scheduling, zero-hours contracts, variable pay, and seasonal hiring for high-turnover teams.",
    href: "/industries/retail",
  },
  {
    title: "Manufacturing",
    desc: "Shift scheduling, factory-act compliance, and hourly workforce management for the shop floor.",
    href: "/industries/manufacturing",
  },
  {
    title: "Government",
    desc: "Civil service compliance, pension schemes, workforce planning, and diversity reporting for the public sector.",
    href: "/industries/government",
  },
  {
    title: "Construction",
    desc: "Site labour management, BOCW compliance, contractor workforce, and daily wage payroll.",
    href: "/industries/construction",
  },
];

const integrations = [
  {
    name: "PM Space AI",
    desc: "AI project & crew management",
    href: "https://pmspace.ai",
  },
  {
    name: "Space Sign",
    desc: "E-signature & contracts",
    href: "https://space-sign.ai",
  },
  {
    name: "Space Capture",
    desc: "Field data capture",
    href: "https://spacecapture.ai",
  },
  {
    name: "Space Lizit",
    desc: "Procurement & vendors",
    href: "https://spacelizit.com",
  },
  {
    name: "Space Lean",
    desc: "Lean process optimisation",
    href: "https://spacelean.ai",
  },
  {
    name: "Space Nexus",
    desc: "Enterprise integration hub",
    href: "https://spacenexus.net",
  },
  {
    name: "Space CRM",
    desc: "Customer relationship management",
    href: "https://spacecrm.net",
  },
];

export default function KnowledgeGraphPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(_bc_knowledge_graph)} />
      <JsonLd data={generateFAQSchema(knowledgeGraphFAQs)} />

      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#312e81]">
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "14s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "11s", animationDelay: "2s" }}
            ></div>
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNNDAgMEwwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjUzNDQ3IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")',
              }}
            ></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Knowledge Graph
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Network className="w-4 h-4 text-cyan-400" />
                Space HR Knowledge Graph
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                The Connected{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                  HR Knowledge Graph
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Space HR connects employees, payroll, performance, finance, AI,
                compliance, and every region and industry it supports into one
                queryable graph. Grounded by{" "}
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  VeritasGraph
                </a>
                , an open-source GraphRAG knowledge-graph framework, every AI answer —
                from the HR chatbot to payroll anomaly detection — carries a
                verifiable citation and reasoning path.
              </p>

              <div className="flex flex-wrap gap-4 mb-14 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <Link href="#diagram">
                  <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-blue-500 text-white hover:from-primary/90 hover:to-blue-500/90">
                    <Network className="mr-2 w-4 h-4" />
                    See the Diagram
                  </Button>
                </Link>
                <Link href="/request-a-demo">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
                {[
                  {
                    icon: FileSearch,
                    title: "Entity Extraction",
                    text: "Typed HR entities — people, payroll, policies, regions — linked to their source data.",
                  },
                  {
                    icon: Network,
                    title: "Relationship Mapping",
                    text: "Managed, reviewed, governed-by, located-in relationships across HR and finance.",
                  },
                  {
                    icon: GitBranch,
                    title: "Multi-Hop Reasoning",
                    text: "Answers that span employees, payroll, compliance, and regions in one query.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DIAGRAM */}
        <section id="diagram" className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Live Interactive Diagram
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How Space HR Connects People, Payroll, and AI
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The core connects people, processes, AI, compliance, regions, and
                integrations — with clear entity and relationship labels.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl opacity-80"></div>
              <div className="relative bg-white dark:bg-[#0b1121]/80 border border-gray-200 dark:border-gray-700 rounded-3xl p-4 sm:p-8 shadow-xl">
                <KnowledgeGraphDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* CORE CONCEPTS */}
        <section className="py-20 sm:py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Core Concepts
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                A Connected Graph for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  HR Operations
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                HR data becomes a connected graph through three capabilities — so one
                query reaches across payroll, performance, finance, and compliance.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: FileSearch,
                  title: "Entity Extraction from HR Data",
                  text: "VeritasGraph parses policies, payroll runs, org charts, and appraisals to extract typed entities — employees, roles, departments, pay codes, amounts, dates, and compliance rules — each linked to its source passage.",
                },
                {
                  icon: Network,
                  title: "Relationship Mapping Across HR",
                  text: "Entities connect through typed relationships — manages, reviews, governed by, located in, integrated with — each edge carrying its source record and extraction confidence.",
                },
                {
                  icon: GitBranch,
                  title: "Multi-Hop Reasoning for HR Decisions",
                  text: "Queries traverse multiple edges to answer complex questions — which employees a policy affects, which appraisals are due, which rules a region requires — revealing connections keyword search misses.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR DATA / INGESTION LAYER */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium mb-6">
                <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                HR Data / Ingestion Layer
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                From HR Data to a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Connected Graph
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Workforce data flows into the graph through a five-step ingestion
                pipeline.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {ingestionSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI INTELLIGENCE */}
        <section className="py-20 sm:py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What the Graph{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
                  Powers
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The same graph drives the AI chatbot, payroll auditing, optimization,
                and prediction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiIntelligence.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-violet-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATIONSHIPS & MULTI-HOP REASONING */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium mb-6">
                <GitBranch className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Relationships & Multi-Hop Reasoning
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Answers That Span{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  the Graph
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real Space HR questions that hop across entities to reach an answer —
                not keyword matching.
              </p>
            </div>

            <div className="space-y-6">
              {relationships.map((item) => (
                <div
                  key={item.query}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {item.query}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.hops}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        {item.path.split(" → ").map((part, i, arr) => (
                          <span key={part} className="inline-flex items-center gap-1">
                            <span className="px-2 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800">
                              {part}
                            </span>
                            {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5" />}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE & GLOBAL COVERAGE */}
        <section className="py-20 sm:py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Compliance & Global Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Payroll and Data Compliance,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  by Region
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The region node carries the compliance rules Space HR supports — so
                payroll, tax, and privacy follow the employee, not the other way
                around.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <Link
                  key={region.name}
                  href={region.href}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-amber-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{region.flag}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {region.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                    {region.name}
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {region.desc}
                  </p>
                </Link>
              ))}

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Transparency Laws
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Space HR includes dedicated compliance tooling for the{" "}
                  <Link href="/california-pay-transparency" className="text-amber-600 dark:text-amber-400 font-semibold hover:underline">
                    California Pay Transparency Act (SB 1162)
                  </Link>{" "}
                  and{" "}
                  <Link href="/nyc-144-compliance" className="text-amber-600 dark:text-amber-400 font-semibold hover:underline">
                    New York City&apos;s AI Hiring Law (Local Law 144)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Industries
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Industry-Specific{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  HR Graphs
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Each industry brings its own compliance and scheduling rules into the
                graph.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                    {industry.title}
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {industry.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRATIONS / SPACE AI ECOSYSTEM */}
        <section className="py-20 sm:py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                <Link2 className="w-4 h-4" />
                Integrations / Space AI Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The Space AI Ecosystem Falls{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  Into the Graph
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Employee records, labor-cost forecasts, and payroll results sync
                across the Space AI ecosystem — no manual double-entry.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <a
                  key={integration.name}
                  href={integration.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <Network className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                    {integration.name}
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {integration.desc}
                  </p>
                </a>
              ))}

              <Link
                href="/integrations"
                className="flex flex-col justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  See all Space HR integrations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Explore the full integration hub, including the Space HR × PM Space
                  AI crew-scheduling and labor-cost sync.
                </p>
                <span className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                  Browse integrations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 text-amber-500" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Space HR Knowledge Graph — FAQs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about how Space HR connects your workforce
                data.
              </p>
            </div>

            <div className="space-y-4">
              {knowledgeGraphFAQs.map((item, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800/50 hover:border-blue-500/30 transition-colors"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors list-none">
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </span>
                    <span className="text-2xl text-blue-500 flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="p-5 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#312e81] py-20 sm:py-24">
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "12s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "15s", animationDelay: "3s" }}
            ></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Network className="w-4 h-4 text-cyan-400" />
              Space HR Knowledge Graph
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              See Your Workforce as a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                Connected Graph
                <br />
              </span>
              of People, Payroll, and AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ground every AI answer, payroll audit, and workforce forecast in one
              queryable knowledge graph — with source attribution, on-prem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button className="rounded-full px-8 bg-gradient-to-r from-primary to-blue-500 text-white hover:from-primary/90 hover:to-blue-500/90">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/technology">
                <Button
                  variant="outline"
                  className="rounded-full px-8 border-emerald-500/40 text-emerald-400 hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <GraduationCap className="mr-2 w-4 h-4" />
                  How It Works — VeritasGraph
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}