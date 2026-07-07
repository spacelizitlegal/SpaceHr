import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

type TemplateSlug =
  | "360-degree-appraisal-template"
  | "annual-performance-review-template"
  | "employee-self-assessment-form"
  | "pto-leave-policy-template"
  | "sick-leave-policy-template"
  | "time-attendance-policy-template"
  | "remote-work-employee-handbook-template"
  | "hybrid-work-policy-template"
  | "new-employee-onboarding-checklist"
  | "employee-offboarding-checklist"
  | "payroll-processing-checklist"
  | "employee-classification-guide"
  | "okr-planning-template"
  | "individual-development-plan-template";

type TemplateData = {
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  category: string;
  format: string;
  featureLink: string;
  featureCta: string;
  sections: string[];
  usedFor: string[];
  relatedTemplates: TemplateSlug[];
};

const templates: Record<TemplateSlug, TemplateData> = {
  "360-degree-appraisal-template": {
    title: "Free 360-Degree Appraisal Template",
    metaTitle: "Free 360-Degree Appraisal Template (Excel / Word) | Space HR",
    description:
      "A comprehensive multi-rater feedback form with competency-based scoring, self-assessment, manager evaluation, and development planning sections.",
    metaDescription:
      "Download a free 360-degree appraisal template. Multi-rater feedback form with competency scoring, self-assessment, peer review, and development planning. Ready to use in Word or Excel.",
    category: "Performance Management",
    format: "Text (Word / Excel ready)",
    featureLink: "/features/360-performance-appraisals",
    featureCta: "Automate 360 appraisals with AI-powered summaries",
    sections: [
      "Employee information and review period",
      "Self-assessment with competency ratings and examples",
      "Manager assessment (independent from self-assessment)",
      "Peer feedback form (anonymous or named)",
      "Joint development plan with goals and timelines",
      "Final ratings summary across all rater types",
      "Signature blocks for employee, manager, and HR",
    ],
    usedFor: [
      "Annual or mid-year performance cycles",
      "Identifying high-potential employees",
      "Manager effectiveness reviews",
      "Promotion readiness assessment",
      "Leadership development programs",
    ],
    relatedTemplates: [
      "annual-performance-review-template",
      "employee-self-assessment-form",
      "individual-development-plan-template",
    ],
  },
  "annual-performance-review-template": {
    title: "Annual Performance Review Template",
    metaTitle: "Free Annual Performance Review Template | Space HR",
    description:
      "A structured performance review form covering goal achievement, competency ratings, key accomplishments, development areas, and next-year goal setting.",
    metaDescription:
      "Download a free annual performance review template. Covers goal achievement, competency ratings, accomplishments, development planning, and compensation recommendations.",
    category: "Performance Management",
    format: "Text (Word / Excel ready)",
    featureLink: "/features/appraisals",
    featureCta: "Replace manual reviews with AI-generated summaries in Space HR",
    sections: [
      "Goal achievement review with status and evidence",
      "7-competency rating matrix (1–5 scale with comments)",
      "Key accomplishments section (3–5 items)",
      "Development areas and next-year action plan",
      "Overall performance rating with scoring formula",
      "Next-year SMART goal setting",
      "Compensation recommendation section",
    ],
    usedFor: [
      "Year-end performance evaluation cycles",
      "Compensation and merit increase decisions",
      "Promotion and succession planning",
      "Manager–employee alignment meetings",
      "HR documentation and compliance records",
    ],
    relatedTemplates: [
      "360-degree-appraisal-template",
      "employee-self-assessment-form",
      "okr-planning-template",
    ],
  },
  "employee-self-assessment-form": {
    title: "Employee Self-Assessment Form",
    metaTitle: "Free Employee Self-Assessment Form Template | Space HR",
    description:
      "A structured self-reflection form guiding employees through achievements, competency self-ratings, challenges, career goals, and upward feedback.",
    metaDescription:
      "Download a free employee self-assessment form. Structured prompts for achievement reflection, competency self-rating, career goals, and manager feedback — ready for any review cycle.",
    category: "Performance Management",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/appraisals",
    featureCta: "Enable continuous self-assessment in Space HR",
    sections: [
      "Achievement reflection with impact statements",
      "Competency self-ratings across 6 dimensions",
      "Challenges faced and how they were handled",
      "Career development goals and interests",
      "Optional upward feedback to manager",
      "Next-period goals (3 focus areas)",
    ],
    usedFor: [
      "Mid-year and annual review preparation",
      "Career development conversations",
      "360-degree feedback cycles",
      "Onboarding check-ins (30/60/90 day)",
      "Promotion readiness discussions",
    ],
    relatedTemplates: [
      "360-degree-appraisal-template",
      "annual-performance-review-template",
      "individual-development-plan-template",
    ],
  },
  "pto-leave-policy-template": {
    title: "PTO & Leave Policy Template",
    metaTitle: "Free PTO & Leave Policy Template (Word / PDF) | Space HR",
    description:
      "A complete paid time off policy covering accrual rates, carryover rules, blackout dates, request procedures, and public holiday lists — customizable for your organization.",
    metaDescription:
      "Download a free PTO and leave policy template. Covers accrual rates by tenure, carryover rules, request procedures, blackout periods, and termination payout rules. Word and PDF ready.",
    category: "Leave & Time Off",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/leave-management",
    featureCta: "Automate PTO requests and approvals with Space HR",
    sections: [
      "Policy purpose and eligibility criteria",
      "PTO accrual rate table by years of service",
      "Carryover cap rules and year-end forfeiture",
      "Request procedure (step-by-step with notice periods)",
      "Blackout period rules for peak business times",
      "Public holiday schedule",
      "Sick leave separation note",
      "PTO payout on termination (state-specific options)",
    ],
    usedFor: [
      "Employee handbook inclusion",
      "New hire orientation documents",
      "HR policy audits and updates",
      "State compliance documentation",
      "HRMS configuration reference",
    ],
    relatedTemplates: [
      "sick-leave-policy-template",
      "time-attendance-policy-template",
      "remote-work-employee-handbook-template",
    ],
  },
  "sick-leave-policy-template": {
    title: "Sick Leave Policy Template",
    metaTitle: "Free Sick Leave Policy Template (Word / PDF) | Space HR",
    description:
      "A complete sick leave policy with entitlement, permitted uses, notification procedures, documentation requirements, and return-to-work protocols.",
    metaDescription:
      "Download a free sick leave policy template. Covers entitlement accrual, permitted uses, absence notification, medical certificate requirements, return-to-work protocol, and FMLA overlap.",
    category: "Leave & Time Off",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/leave-management",
    featureCta: "Track sick leave and automate return-to-work workflows with Space HR",
    sections: [
      "Eligibility for full-time and part-time employees",
      "Annual sick leave entitlement and accrual method",
      "Permitted and prohibited uses of sick leave",
      "Notification procedure with timing requirements",
      "Documentation rules (when certificates are required)",
      "Return-to-work protocol and clearance process",
      "FMLA overlap and extended leave transition",
      "Sick leave abuse policy and consequences",
    ],
    usedFor: [
      "Employee handbook section",
      "FMLA compliance documentation",
      "HR policy standardization",
      "Multi-state compliance alignment",
      "Onboarding policy packet",
    ],
    relatedTemplates: [
      "pto-leave-policy-template",
      "time-attendance-policy-template",
      "new-employee-onboarding-checklist",
    ],
  },
  "time-attendance-policy-template": {
    title: "Time & Attendance Policy Template",
    metaTitle: "Free Time & Attendance Policy Template | Space HR",
    description:
      "A complete attendance policy covering work hours, tardiness standards, absence reporting procedures, timekeeping requirements, overtime rules, and GPS tracking guidelines.",
    metaDescription:
      "Download a free time and attendance policy template. Covers standard hours, tardiness rules, absence reporting, timekeeping requirements, overtime, and attendance tracking technology.",
    category: "Leave & Time Off",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/attendance",
    featureCta: "Automate attendance tracking with GPS and biometric tools in Space HR",
    sections: [
      "Standard work hours and flexible scheduling rules",
      "Attendance expectations and tardiness standards",
      "Absence reporting procedure and notification timing",
      "Timekeeping requirements and falsification policy",
      "Overtime eligibility and pre-approval process",
      "Flexible work arrangement reference",
      "Attendance tracking technology and anti-buddy-punching rules",
      "Excessive absenteeism thresholds and HR review triggers",
    ],
    usedFor: [
      "Employee handbook inclusion",
      "FLSA overtime compliance",
      "Remote and hybrid team management",
      "Payroll accuracy and timesheet audits",
      "HR policy standardization across locations",
    ],
    relatedTemplates: [
      "pto-leave-policy-template",
      "hybrid-work-policy-template",
      "payroll-processing-checklist",
    ],
  },
  "remote-work-employee-handbook-template": {
    title: "Remote Work Employee Handbook Template",
    metaTitle: "Free Remote Work Employee Handbook Template | Space HR",
    description:
      "A comprehensive remote work handbook covering workspace requirements, equipment policy, data security, expense reimbursement, communication standards, and performance expectations.",
    metaDescription:
      "Download a free remote work employee handbook template. Covers workspace setup, equipment, data security, VPN requirements, expense reimbursement, communication standards, and remote revocation terms.",
    category: "Remote Work & Hybrid",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/employee-self-service",
    featureCta: "Manage remote teams with Space HR's self-service and attendance tools",
    sections: [
      "Eligibility criteria for remote work",
      "Schedule, core hours, and availability expectations",
      "Workspace requirements (internet, ergonomics, privacy)",
      "Company-provided equipment and personal device policy",
      "Data security requirements (VPN, screen lock, cloud storage)",
      "Expense reimbursement rates (internet, home office, phone)",
      "Communication standards (response time, video call norms)",
      "Performance expectations and 1:1 meeting cadence",
      "In-office requirements for hybrid employees",
      "Conditions for revocation of remote work privileges",
    ],
    usedFor: [
      "Remote-first company onboarding",
      "Hybrid team policy documentation",
      "IT security compliance for remote workers",
      "International distributed team management",
      "Employee acknowledgement and sign-off",
    ],
    relatedTemplates: [
      "hybrid-work-policy-template",
      "time-attendance-policy-template",
      "new-employee-onboarding-checklist",
    ],
  },
  "hybrid-work-policy-template": {
    title: "Hybrid Work Policy Template",
    metaTitle: "Free Hybrid Work Policy Template (Word / PDF) | Space HR",
    description:
      "A practical hybrid work policy covering in-office anchor days, remote day expectations, scheduling coordination, technology requirements, and performance review terms.",
    metaDescription:
      "Download a free hybrid work policy template. Covers anchor office days, remote expectations, scheduling coordination, technology requirements, eligibility criteria, and annual policy review terms.",
    category: "Remote Work & Hybrid",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/attendance",
    featureCta: "Track hybrid attendance and desk scheduling with Space HR",
    sections: [
      "Hybrid work model definition and in-office day requirements",
      "Mandatory anchor days for all teams",
      "Eligibility and exclusion criteria",
      "Scheduling coordination process",
      "In-office and remote day conduct expectations",
      "Team coverage coordination responsibilities",
      "Technology and internet requirements",
      "Performance evaluation under hybrid arrangement",
      "Annual review and revocation terms",
    ],
    usedFor: [
      "Return-to-office policy rollout",
      "Hybrid schedule formalization",
      "Manager guidance for team scheduling",
      "Employee acknowledgement documentation",
      "HR policy update cycles",
    ],
    relatedTemplates: [
      "remote-work-employee-handbook-template",
      "time-attendance-policy-template",
      "pto-leave-policy-template",
    ],
  },
  "new-employee-onboarding-checklist": {
    title: "New Employee Onboarding Checklist",
    metaTitle: "Free New Employee Onboarding Checklist (90-Day) | Space HR",
    description:
      "A complete day-by-day onboarding checklist covering pre-arrival, Day 1, Week 1, 30-day, 60-day, and 90-day milestones for HR, IT, and managers.",
    metaDescription:
      "Download a free new employee onboarding checklist. Covers pre-arrival setup, Day 1 orientation, Week 1 role foundations, and 30/60/90-day check-in milestones for a complete onboarding program.",
    category: "Onboarding & Offboarding",
    format: "Text (Excel / PDF ready)",
    featureLink: "/features/hr-ai-concierge",
    featureCta: "Automate onboarding journeys with Space HR's AI Concierge",
    sections: [
      "Pre-arrival checklist (HR, IT, and manager tasks)",
      "Day 1: welcome, orientation, and system setup",
      "Week 1: role foundations and key introductions",
      "30-day check-in: early feedback and goal alignment",
      "60-day check-in: performance conversation and training gaps",
      "90-day milestone: probationary review and development plan",
    ],
    usedFor: [
      "Standardizing onboarding across departments",
      "Remote and hybrid new hire onboarding",
      "IT provisioning coordination",
      "Manager accountability tracking",
      "HR audit and compliance documentation",
    ],
    relatedTemplates: [
      "employee-offboarding-checklist",
      "remote-work-employee-handbook-template",
      "individual-development-plan-template",
    ],
  },
  "employee-offboarding-checklist": {
    title: "Employee Offboarding Checklist",
    metaTitle: "Free Employee Offboarding Checklist (Complete) | Space HR",
    description:
      "A comprehensive exit checklist covering knowledge transfer, equipment return, access revocation, final pay processing, exit interview, and HRMS record update.",
    metaDescription:
      "Download a free employee offboarding checklist. Covers knowledge transfer, asset return, system access revocation, final paycheck, COBRA notice, exit interview, and HRMS record update.",
    category: "Onboarding & Offboarding",
    format: "Text (Excel / PDF ready)",
    featureLink: "/features/ai-automation",
    featureCta: "Automate offboarding workflows and access revocation with Space HR",
    sections: [
      "Immediate steps upon resignation or termination",
      "Knowledge transfer plan and handover tasks",
      "Equipment and company asset return checklist",
      "System access revocation across 12+ platforms",
      "Final pay, accrued PTO, and benefits processing",
      "COBRA notification and retirement plan options",
      "Exit interview scheduling and documentation",
      "HRMS record update and rehire eligibility flag",
    ],
    usedFor: [
      "Voluntary resignation processing",
      "Involuntary termination procedures",
      "IT offboarding and security compliance",
      "Legal and compliance documentation",
      "Rehire eligibility tracking",
    ],
    relatedTemplates: [
      "new-employee-onboarding-checklist",
      "payroll-processing-checklist",
      "time-attendance-policy-template",
    ],
  },
  "payroll-processing-checklist": {
    title: "Payroll Processing Checklist",
    metaTitle: "Free Payroll Processing Checklist (7-Step) | Space HR",
    description:
      "A 7-step payroll processing checklist covering data collection, input verification, AI anomaly audit, compliance checks, approval, payment processing, and post-payroll review.",
    metaDescription:
      "Download a free payroll processing checklist. 7-step process covering timesheet verification, anomaly audit, tax compliance, approval lock, ACH processing, and post-payroll review.",
    category: "Payroll & Compliance",
    format: "Text (Excel / PDF ready)",
    featureLink: "/features/ai-payroll-auditor",
    featureCta: "Automate payroll anomaly detection before every pay run with Space HR",
    sections: [
      "Step 1: Pre-payroll data collection (7 days before pay date)",
      "Step 2: Payroll input verification (5 days before)",
      "Step 3: AI / system anomaly audit (3 days before)",
      "Step 4: Tax and compliance checks (2 days before)",
      "Step 5: Manager and finance approval and lock (1 day before)",
      "Step 6: Payment processing and ACH transmission",
      "Step 7: Post-payroll review and ledger posting",
    ],
    usedFor: [
      "Payroll team SOPs and runbooks",
      "Audit preparation and compliance documentation",
      "Reducing payroll errors in fast-growing companies",
      "Training new payroll staff",
      "Year-end payroll process review",
    ],
    relatedTemplates: [
      "employee-classification-guide",
      "time-attendance-policy-template",
      "employee-offboarding-checklist",
    ],
  },
  "employee-classification-guide": {
    title: "Employee Classification Guide",
    metaTitle: "Free Employee Classification Guide (FLSA / IRS) | Space HR",
    description:
      "A practical reference guide for correctly classifying workers as employee vs. contractor, exempt vs. non-exempt, and full-time vs. part-time under FLSA and IRS standards.",
    metaDescription:
      "Download a free employee classification guide. Covers IRS employee vs. contractor tests, FLSA exempt vs. non-exempt salary and duties tests, ABC Test states, and misclassification red flags.",
    category: "Payroll & Compliance",
    format: "Text (PDF ready)",
    featureLink: "/features/payroll",
    featureCta: "Ensure payroll compliance across all worker types with Space HR",
    sections: [
      "IRS Common Law Test: behavioral, financial, and relationship control",
      "FLSA exempt vs. non-exempt: salary basis, level, and duties tests",
      "Full-time vs. part-time definitions (FLSA + ACA)",
      "Common misclassification red flags checklist",
      "State-specific stricter tests (California, Massachusetts ABC Test)",
      "Decision framework with yes/no questions for each classification",
    ],
    usedFor: [
      "HR compliance audits",
      "Onboarding new contractors or employees",
      "Finance and legal review of worker arrangements",
      "Multi-state workforce classification",
      "DOL or IRS audit preparation",
    ],
    relatedTemplates: [
      "payroll-processing-checklist",
      "pto-leave-policy-template",
      "employee-offboarding-checklist",
    ],
  },
  "okr-planning-template": {
    title: "OKR Planning Template",
    metaTitle: "Free OKR Planning Template (Quarterly / Annual) | Space HR",
    description:
      "An objectives and key results template for setting, tracking, and reviewing quarterly and annual goals at company, team, and individual levels with scoring guidance.",
    metaDescription:
      "Download a free OKR planning template. Covers company, team, and individual objectives with key results, starting and target values, owners, due dates, and quarterly review notes.",
    category: "Goals & Development",
    format: "Text (Excel / Word ready)",
    featureLink: "/features/goals",
    featureCta: "Track OKRs in real time with Space HR's Goals module",
    sections: [
      "Company / team level objectives with 3 key results each",
      "Key result tracking: starting value, target, current, owner, due date",
      "Mid-quarter and end-of-quarter scoring (0.0–1.0)",
      "Individual-level OKRs aligned to team objectives",
      "Weekly check-in notes (weeks 4, 8, 12)",
      "End-of-quarter retrospective and carry-forward section",
    ],
    usedFor: [
      "Quarterly goal-setting cycles (Q1–Q4)",
      "Annual company planning",
      "Team alignment to company strategy",
      "Individual performance and development goal setting",
      "OKR rollout training and template reference",
    ],
    relatedTemplates: [
      "annual-performance-review-template",
      "individual-development-plan-template",
      "employee-self-assessment-form",
    ],
  },
  "individual-development-plan-template": {
    title: "Individual Development Plan (IDP) Template",
    metaTitle: "Free Individual Development Plan (IDP) Template | Space HR",
    description:
      "A structured development plan covering career goals, current strengths, skill gaps, development actions with timelines, manager support needs, and quarterly progress reviews.",
    metaDescription:
      "Download a free Individual Development Plan template. Covers career goals, competency gaps, development actions, resource requirements, manager support, and 30/60/90-day progress reviews.",
    category: "Goals & Development",
    format: "Text (Word / PDF ready)",
    featureLink: "/features/360-performance-appraisals",
    featureCta: "Connect development plans to performance data in Space HR",
    sections: [
      "Career goals (short-term 12 months and long-term 2–3 years)",
      "Current strengths inventory (3–5 items)",
      "Development areas from performance review or 360 feedback",
      "Development actions with method, owner, timeline, and success measures",
      "Manager support and resource budget section",
      "Progress reviews at 30, 60, and 90 days",
      "Sign-off by employee, manager, and HR",
    ],
    usedFor: [
      "Annual performance cycle follow-up",
      "High-potential employee development programs",
      "Succession planning pipeline",
      "Performance improvement plans (PIP) companion",
      "Manager and employee development conversations",
    ],
    relatedTemplates: [
      "360-degree-appraisal-template",
      "okr-planning-template",
      "annual-performance-review-template",
    ],
  },
};

const relatedTitles: Record<TemplateSlug, string> = {
  "360-degree-appraisal-template": "360-Degree Appraisal Template",
  "annual-performance-review-template": "Annual Performance Review Template",
  "employee-self-assessment-form": "Employee Self-Assessment Form",
  "pto-leave-policy-template": "PTO & Leave Policy Template",
  "sick-leave-policy-template": "Sick Leave Policy Template",
  "time-attendance-policy-template": "Time & Attendance Policy Template",
  "remote-work-employee-handbook-template": "Remote Work Employee Handbook",
  "hybrid-work-policy-template": "Hybrid Work Policy Template",
  "new-employee-onboarding-checklist": "New Employee Onboarding Checklist",
  "employee-offboarding-checklist": "Employee Offboarding Checklist",
  "payroll-processing-checklist": "Payroll Processing Checklist",
  "employee-classification-guide": "Employee Classification Guide",
  "okr-planning-template": "OKR Planning Template",
  "individual-development-plan-template": "Individual Development Plan (IDP)",
};

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = templates[slug as TemplateSlug];
  if (!template) return {};

  return {
    title: template.metaTitle,
    description: template.metaDescription,
    openGraph: {
      title: template.metaTitle,
      description: template.metaDescription,
      url: `https://spacehr.net/templates/${slug}`,
      siteName: "Space HR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: template.metaTitle,
      description: template.metaDescription,
    },
    alternates: {
      canonical: `https://spacehr.net/templates/${slug}`,
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = templates[slug as TemplateSlug];
  if (!template) notFound();

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://spacehr.net" },
    { name: "HR Templates", url: "https://spacehr.net/templates" },
    { name: template.title, url: `https://spacehr.net/templates/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Templates
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            {template.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {template.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            {template.description}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={`/api/template-download?slug=${slug}`}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors"
            >
              <Download className="w-4 h-4" /> Download Free Template
            </a>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Format: {template.format}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What's included */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {template.sections.map((section, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {section}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Used for */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                Best Used For
              </h2>
              <ul className="space-y-3">
                {template.usedFor.map((use, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {use}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Space HR CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border border-teal-200 dark:border-teal-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Ready to automate this instead of managing it manually?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {template.featureCta} — no spreadsheets, no manual chasing, no
              missed steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={template.featureLink}>
                <Button
                  size="sm"
                  className="rounded-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  See the Feature <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/request-a-demo">
                <Button size="sm" variant="outline" className="rounded-full">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED TEMPLATES */}
      {template.relatedTemplates.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Related Templates
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {template.relatedTemplates.map((relSlug) => (
                <Link
                  key={relSlug}
                  href={`/templates/${relSlug}`}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-colors group"
                >
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {relatedTitles[relSlug]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Free download →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
