import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight, Clock, Users, Brain, ShieldCheck, BarChart3,
  FileText, DollarSign, Zap, HardHat, MapPin, Truck, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software for Construction | Site Labour & Compliance",
  description:
    "HR software for construction: manage site labour, BOCW compliance, contractor workforce, and daily wage payroll. Multi-site attendance from one platform.",
  keywords: [
    "hr software for construction companies",
    "construction hr software",
    "construction payroll software india",
    "bocw act compliance software",
    "site labour management software",
    "construction workforce management",
    "daily wage payroll software",
    "contractor workforce management india",
    "construction hrms india",
    "labour management software construction",
    "building construction hr software",
    "real estate hr software india",
    "infrastructure hr software",
    "construction site attendance software",
  ],
  openGraph: {
    title: "HR Software for Construction Companies | Space HR India",
    description:
      "BOCW compliance, site labour payroll, contractor management, and multi-site attendance for construction companies. India-compliant HR from Space HR.",
    url: "https://spacehr.net/industries/construction",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Software for Construction Companies 2026 | Space HR",
    description:
      "BOCW Act compliance, daily wage payroll, site labour management, and multi-site attendance for Indian construction companies.",
  },
  alternates: { canonical: "https://spacehr.net/industries/construction" },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
  { name: "Construction", url: "https://spacehr.net/industries/construction" },
];

const faqs = [
  {
    question: "Does Space HR handle BOCW Act compliance for construction companies?",
    answer:
      "Yes. Space HR is configured for Building and Other Construction Workers (BOCW) Act, 1996 compliance. This includes cess calculation (1% of construction cost), worker registration tracking, mandatory benefits management (safety equipment records, medical facilities, housing allowance where applicable), and the labour registers required by BOCW enforcement authorities. For construction companies operating across multiple states, Space HR tracks BOCW registration status and cess liability state-by-state.",
  },
  {
    question: "Can Space HR manage daily wage and contract labour at construction sites?",
    answer:
      "Yes. Space HR handles daily wage workers, piece-rate labourers, and contract workforce alongside permanent employees under one system. Daily wage payroll calculates attendance-based wages automatically from biometric or supervisor-verified attendance data. Contract labour is managed separately with contractor-wise registers compliant with the Contract Labour (Regulation and Abolition) Act, 1970 — including Form XIII (register of contractors), Form XIV (register of contract labour), and muster rolls per worksite.",
  },
  {
    question: "How does Space HR track attendance across multiple construction sites?",
    answer:
      "Space HR supports multi-site attendance tracking for construction companies with geographically dispersed worksites. Options include: GPS-based mobile attendance (site supervisors mark attendance for labourers at the worksite via smartphone), biometric device integration (ZKTeco, Hikvision) at larger sites with permanent attendance terminals, and supervisor bulk attendance upload (Excel import for sites with no device infrastructure). All attendance data consolidates into a single payroll engine regardless of which method is used at each site.",
  },
  {
    question: "How does Space HR calculate PF and ESIC for construction site workers?",
    answer:
      "Space HR calculates PF (12% employee contribution, 13.36% employer contribution with EPF/EPS split) and ESIC (0.75% employee, 3.25% employer for workers with gross wages ≤₹21,000/month) automatically for eligible construction workers. For BOCW-registered workers, Space HR maintains separate welfare fund contribution records. Daily wage workers are included in statutory calculations based on days worked — partial month calculations are handled automatically without manual intervention.",
  },
  {
    question: "Can Space HR manage HR for a construction company with multiple projects across cities?",
    answer:
      "Yes. Space HR's multi-location architecture lets construction companies organize workers by project, site, contractor, or cost centre. HR managers at headquarters see consolidated dashboards; site managers see only their assigned project workforce. Payroll can be processed by project (useful for project-wise cost allocation) or consolidated across all sites. Labour cost reports show spend by project, enabling accurate project profitability analysis.",
  },
  {
    question: "What statutory registers does Space HR generate for construction companies?",
    answer:
      "Space HR generates all statutory registers required for construction company labour compliance: BOCW worker registration records and cess calculation sheets, Contract Labour registers (Form XIII, Form XIV, muster rolls per worksite), PF ECR files for EPFO portal, ESIC monthly returns, Professional Tax calculation by state, and wage register (Form II under the Payment of Wages Act). These reports are audit-ready and can be exported for labour department inspections with no manual data preparation.",
  },
  {
    question: "Does Space HR work for real estate developers and infrastructure companies?",
    answer:
      "Yes. Space HR is used by construction contractors, real estate developers (residential and commercial), infrastructure companies (roads, bridges, utilities), and EPC (Engineering, Procurement, Construction) firms. The platform handles the full workforce spectrum typical in real estate and infra: head office professional employees (standard HRMS), on-site skilled tradespeople (shift attendance, daily wages), and contract labour deployed by sub-contractors (Contract Labour Act registers). All workforce types are managed in one system.",
  },
];

const challenges = [
  {
    icon: HardHat,
    title: "BOCW Act Compliance",
    desc: "BOCW cess calculation (1% of construction cost), worker registration tracking, and statutory welfare benefits management. State-wise compliance across all active project sites.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: MapPin,
    title: "Multi-Site Attendance",
    desc: "GPS mobile attendance, biometric integration, or supervisor bulk upload — whichever fits each site's infrastructure. All attendance consolidates into one payroll run.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Users,
    title: "Contract Labour Management",
    desc: "Contractor-wise registers per Contract Labour (R&A) Act, 1970. Form XIII, Form XIV, muster rolls, and principal employer liability tracking across all worksites.",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: DollarSign,
    title: "Daily Wage & Mixed Payroll",
    desc: "Daily wage workers, weekly-rate labourers, and monthly salaried staff in one payroll engine. Attendance-based wage calculation with PF/ESIC for all eligible worker types.",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: BarChart3,
    title: "Project Labour Cost Analytics",
    desc: "Labour cost by project, site, and contractor. Track budget vs actual headcount spend across multiple simultaneous projects. Identify cost overruns before they escalate.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: FileText,
    title: "Statutory Register Generation",
    desc: "PF ECR, ESIC returns, BOCW cess, Contract Labour registers, and Professional Tax — all generated automatically. Audit-ready for labour department inspections.",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
];

const stats = [
  { value: "100%", label: "BOCW and Contract Labour Act register compliance" },
  { value: "3 min", label: "Daily wage payroll run per 100 workers" },
  { value: "Multi-site", label: "Attendance tracking across all active project sites" },
  { value: "₹0", label: "Manual statutory filing — all automated" },
];

const complianceLaws = [
  { law: "BOCW Act, 1996", coverage: "Cess calculation (1%), worker registration, welfare benefits" },
  { law: "Contract Labour (R&A) Act, 1970", coverage: "Form XIII, Form XIV, contractor registers, principal employer liability" },
  { law: "EPF & MP Act, 1952", coverage: "PF deduction, ECR filing, EPF/EPS split calculation" },
  { law: "ESI Act, 1948", coverage: "ESIC at ≤₹21,000 gross wages, monthly returns" },
  { law: "Payment of Wages Act, 1936", coverage: "Wage register (Form II), on-time payment compliance" },
  { law: "Factories Act / State Labour Laws", coverage: "Working hour limits, overtime registers, rest periods" },
  { law: "Income Tax Act — Section 192", coverage: "TDS on salaried workers, quarterly Form 24Q" },
  { law: "Professional Tax (State)", coverage: "PT by state (Maharashtra, Karnataka, Tamil Nadu, etc.)" },
];

export default function ConstructionIndustryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(faqs);

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Space HR — HR Software for Construction Companies",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "HR software built for construction companies in India — BOCW Act compliance, site labour payroll, contractor workforce management, and multi-site GPS attendance.",
    url: "https://spacehr.net/industries/construction",
    provider: { "@type": "Organization", name: "Space HR", url: "https://spacehr.net" },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={industrySchema} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
                <HardHat className="w-4 h-4" /> HR Software for Construction
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
                HR Software Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  Construction Companies
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Manage site labour, daily wage payroll, BOCW Act compliance, contractor workforce, and multi-site attendance — all from one platform. Built for Indian construction contractors, real estate developers, and infra companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://cad.spaceaiapp.com/login">
                  <Button size="lg" className="rounded-full h-13 px-8 text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/request-a-demo">
                  <Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-lg">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-orange-200 dark:border-orange-800">
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">What Space HR Solves for Construction</div>
                <ul className="space-y-3">
                  {[
                    "BOCW cess calculation and cess liability tracking",
                    "Daily wage payroll from GPS/biometric attendance",
                    "Contract Labour (R&A) Act registers auto-generated",
                    "PF + ESIC for daily wage and monthly workers",
                    "Multi-site attendance consolidation",
                    "Labour cost per project — budget vs actual",
                    "Statutory registers ready for labour inspections",
                    "Site supervisor app for daily muster roll",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-sm text-orange-100">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES / FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              HR Challenges Unique to Construction — Solved
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Construction HR is unlike any other industry. Multiple worksites, daily wage workers, contractor compliance, BOCW obligations, and labour inspections — Space HR handles all of it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="p-7 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSE — CONSTRUCTION CONTEXT */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Construction HR Is the Most Complex in India
          </h2>
          <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-5 leading-relaxed">
            <p>
              Indian construction companies face a labour compliance environment unlike any other industry. A single project site may have three or more distinct worker categories: permanent employees (site engineers, project managers, accountants) covered by standard PF/ESIC/TDS rules; skilled tradespeople (masons, carpenters, electricians) on daily or weekly wages with PF/ESIC obligations; and contract labour deployed by sub-contractors, where the principal employer (the construction company) retains liability under the Contract Labour (Regulation and Abolition) Act, 1970.
            </p>
            <p>
              The BOCW (Building and Other Construction Workers) Act, 1996 adds a layer of compliance specific to the industry. Any construction project where the estimated cost exceeds ₹10 lakh is subject to BOCW cess — a levy of 1% of construction cost payable to the state BOCW welfare board. Registration as a principal employer under BOCW is mandatory, and workers must be registered with the welfare board to be eligible for the Act's benefits (accident compensation, pension, housing assistance, skill development). Construction companies without proper BOCW compliance face cess penalties, stop-work orders, and personal liability for project directors.
            </p>
            <p>
              Multi-site operations create additional HR complexity. A mid-size construction company might simultaneously operate 5–15 active project sites across different cities or states — each with its own workforce, attendance tracking method, site supervisor, and cost centre. Consolidating attendance from GPS mobile apps at remote sites, biometric terminals at larger sites, and paper muster rolls at small sites into a single payroll calculation is a manual nightmare without purpose-built software.
            </p>
            <p>
              Space HR addresses construction HR complexity at every level. Daily wage payroll runs in minutes from consolidated attendance data. BOCW cess calculations are automatic per project. Contract Labour registers generate on demand for inspections. PF/ESIC calculations cover all eligible worker types regardless of wage structure. Site supervisors use the mobile app to mark daily attendance for their crew — data flows directly to payroll without any manual re-entry. Labour cost reports show spend per project, enabling project managers to track labour budget variance in real time.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE LAWS TABLE */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Labour Laws Space HR Handles for Construction Companies</h2>
            <p className="text-gray-600 dark:text-gray-400">Every major compliance obligation — automated, not manual.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <table className="w-full text-left border-collapse bg-white dark:bg-[#0b1121]">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-5 text-sm font-bold text-gray-500 border-b dark:border-gray-700">Labour Law / Regulation</th>
                  <th className="p-5 text-sm font-bold text-gray-500 border-b dark:border-gray-700">What Space HR Automates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {complianceLaws.map(({ law, coverage }) => (
                  <tr key={law} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20">
                    <td className="p-5 font-semibold text-gray-900 dark:text-white">{law}</td>
                    <td className="p-5 text-gray-600 dark:text-gray-400">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR CONSTRUCTION */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How Construction Companies Use Space HR</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                role: "Site Supervisor",
                color: "border-orange-400",
                tasks: [
                  "Opens Space HR mobile app at start of shift",
                  "Marks daily attendance for all workers on site (with GPS verification)",
                  "Flags absent or late workers — automatically triggers LOP",
                  "Submits contractor head count for the day",
                  "Views site-level labour cost vs project budget",
                ],
              },
              {
                role: "HR Manager (Head Office)",
                color: "border-blue-400",
                tasks: [
                  "Reviews consolidated attendance across all sites",
                  "Runs monthly payroll for permanent + daily wage workers in one click",
                  "Downloads BOCW cess statement per project",
                  "Generates Contract Labour registers for labour inspector visit",
                  "Views attrition risk scores for key site engineers",
                ],
              },
              {
                role: "Finance / Accounts",
                color: "border-green-400",
                tasks: [
                  "Labour cost report by project — budget vs actual",
                  "PF ECR files ready for EPFO portal upload",
                  "ESIC monthly return generated automatically",
                  "Professional Tax payable by state calculated",
                  "Bank salary file for all workers in NEFT format",
                ],
              },
              {
                role: "Project Director",
                color: "border-purple-400",
                tasks: [
                  "Project headcount and labour cost dashboard",
                  "Contractor-wise workforce deployment view",
                  "BOCW compliance status by project site",
                  "Labour cost per completed unit of work",
                  "Turnover risk flags for critical site personnel",
                ],
              },
            ].map(({ role, color, tasks }) => (
              <div key={role} className={`bg-white dark:bg-[#0b1121] rounded-2xl border-l-4 ${color} border border-gray-200 dark:border-gray-700 p-6`}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{role}</h3>
                <ul className="space-y-2">
                  {tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES */}
      <section className="py-14 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Also Used By</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/industries/manufacturing", label: "Manufacturing", desc: "Shift scheduling, Factory Act, piece-rate pay" },
              { href: "/industries/government", label: "Government & PSU", desc: "Service rules, statutory registers, DA revision" },
              { href: "/industries/retail", label: "Retail & Logistics", desc: "Multi-outlet attendance, variable pay, ESIC" },
              { href: "/regions/india", label: "India Compliance Guide", desc: "PF, ESIC, TDS, BOCW — all in one guide" },
              { href: "/features/attendance", label: "GPS Attendance", desc: "Mobile check-in for field and site workers" },
              { href: "/features/payroll", label: "AI Payroll", desc: "Daily wage + monthly salaried in one run" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-orange-400 transition-all">
                <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
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
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              HR Software for Construction — Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Questions from construction company HR managers, project directors, and founders.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Solve Construction HR?
          </h2>
          <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
            Space HR handles BOCW compliance, daily wage payroll, contractor workforce, and multi-site attendance for construction companies across India. Free trial — no credit card.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-50 rounded-full px-10 h-14 text-lg font-bold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                Book a Construction HR Demo
              </Button>
            </Link>
          </div>
          <p className="text-orange-200 text-sm mt-6">
            No credit card · India-compliant (BOCW, PF, ESIC, Contract Labour) · 48-hour setup
          </p>
        </div>
      </section>
    </div>
  );
}
