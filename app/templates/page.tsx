import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  ArrowRight,
  Download,
  FileText,
  ClipboardList,
  Calendar,
  Users,
  Shield,
  BookOpen,
  CheckCircle,
  Star,
  Briefcase,
  Home,
  Clock,
  Award,
  Target,
  DollarSign,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free HR Templates & Policies Directory | Space HR",
  description:
    "Download free HR templates and policy documents: 360-degree appraisal templates, PTO & leave policy templates, remote work employee handbooks, onboarding checklists, and more. Automate these processes with Space HR.",
  keywords: [
    "free HR templates",
    "360 degree appraisal template",
    "PTO leave policy template",
    "remote work employee handbook template",
    "HR policy templates",
    "performance review template",
    "employee onboarding checklist",
    "HR document templates",
    "free performance appraisal form",
    "leave management template",
    "employee handbook template",
    "HR compliance templates",
  ],
  openGraph: {
    title: "Free HR Templates & Policies | Space HR",
    description:
      "Download free HR templates: appraisal forms, leave policies, remote work handbooks, and more.",
    url: "https://spacehr.net/templates",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HR Templates & Policies | Space HR",
    description: "Download free HR templates: appraisal forms, leave policies, remote work handbooks, and more.",
  },
  alternates: {
    canonical: "https://spacehr.net/templates",
  },
};

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "HR Templates & Policies", url: "https://spacehr.net/templates" },
]);

const templates = [
  {
    category: "Performance Management",
    icon: <Award className="w-6 h-6" />,
    color: "purple",
    items: [
      {
        title: "Free 360-Degree Appraisal Template",
        slug: "360-degree-appraisal-template",
        description:
          "Comprehensive multi-rater feedback form with competency-based scoring, self-assessment sections, and manager evaluation criteria. Available in Excel and Word formats.",
        format: "Excel / Word",
        cta: "Automate with AI-powered 360° appraisals",
        link: "/features/360-performance-appraisals",
      },
      {
        title: "Annual Performance Review Template",
        slug: "annual-performance-review-template",
        description:
          "Structured performance review form with goal achievement tracking, competency ratings, development planning, and manager comments sections.",
        format: "Excel / Word",
        cta: "Replace manual reviews with AI summaries",
        link: "/features/appraisals",
      },
      {
        title: "Employee Self-Assessment Form",
        slug: "employee-self-assessment-form",
        description:
          "Guide employees through self-reflection with structured prompts covering achievements, challenges, skill development, and career goals.",
        format: "Word / PDF",
        cta: "Enable continuous self-assessment in Space HR",
        link: "/features/appraisals",
      },
    ],
  },
  {
    category: "Leave & Time Off",
    icon: <Calendar className="w-6 h-6" />,
    color: "blue",
    items: [
      {
        title: "PTO & Leave Policy Template",
        slug: "pto-leave-policy-template",
        description:
          "Complete paid time off policy covering accrual rates, carryover rules, blackout dates, request procedures, and approval workflows. Customizable for your organization.",
        format: "Word / PDF",
        cta: "Automate leave management with Space HR",
        link: "/features/leave-management",
      },
      {
        title: "Sick Leave Policy Template",
        slug: "sick-leave-policy-template",
        description:
          "Sick leave policy with documentation requirements, notification procedures, return-to-work protocols, and FMLA compliance guidelines.",
        format: "Word / PDF",
        cta: "Track sick leave automatically",
        link: "/features/leave-management",
      },
      {
        title: "Time & Attendance Policy Template",
        slug: "time-attendance-policy-template",
        description:
          "Attendance policy covering work hours, tardiness, absence reporting, flexible scheduling, and GPS time tracking procedures.",
        format: "Word / PDF",
        cta: "Automate with GPS attendance tracking",
        link: "/features/attendance",
      },
    ],
  },
  {
    category: "Remote Work & Hybrid",
    icon: <Home className="w-6 h-6" />,
    color: "green",
    items: [
      {
        title: "Remote Work Employee Handbook Template",
        slug: "remote-work-employee-handbook-template",
        description:
          "Comprehensive remote work handbook covering equipment policies, communication expectations, security requirements, expense reimbursement, and performance expectations for distributed teams.",
        format: "Word / PDF",
        cta: "Manage remote teams with Space HR",
        link: "/features/employee-self-service",
      },
      {
        title: "Hybrid Work Policy Template",
        slug: "hybrid-work-policy-template",
        description:
          "Flexible hybrid work policy defining in-office days, remote work eligibility, scheduling procedures, and collaboration expectations.",
        format: "Word / PDF",
        cta: "Track hybrid attendance automatically",
        link: "/features/attendance",
      },
    ],
  },
  {
    category: "Onboarding & Offboarding",
    icon: <Users className="w-6 h-6" />,
    color: "teal",
    items: [
      {
        title: "New Employee Onboarding Checklist",
        slug: "new-employee-onboarding-checklist",
        description:
          "Day-by-day onboarding checklist covering paperwork, IT setup, team introductions, training schedule, and 30-60-90 day goals.",
        format: "Excel / PDF",
        cta: "Automate onboarding with AI Concierge",
        link: "/features/hr-ai-concierge",
      },
      {
        title: "Employee Offboarding Checklist",
        slug: "employee-offboarding-checklist",
        description:
          "Comprehensive exit checklist covering knowledge transfer, equipment return, access revocation, exit interview, and final pay processing.",
        format: "Excel / PDF",
        cta: "Streamline offboarding workflows",
        link: "/features/ai-automation",
      },
    ],
  },
  {
    category: "Payroll & Compliance",
    icon: <DollarSign className="w-6 h-6" />,
    color: "red",
    items: [
      {
        title: "Payroll Processing Checklist",
        slug: "payroll-processing-checklist",
        description:
          "Step-by-step payroll processing checklist covering data verification, tax calculations, deductions, approvals, and ACH file generation.",
        format: "Excel / PDF",
        cta: "Automate with AI Payroll Auditor",
        link: "/features/ai-payroll-auditor",
      },
      {
        title: "Employee Classification Guide",
        slug: "employee-classification-guide",
        description:
          "Guide for correctly classifying workers as exempt/non-exempt, full-time/part-time, and employee/contractor per FLSA and IRS guidelines.",
        format: "PDF",
        cta: "Ensure compliance with Space HR",
        link: "/features/payroll",
      },
    ],
  },
  {
    category: "Goals & Development",
    icon: <Target className="w-6 h-6" />,
    color: "orange",
    items: [
      {
        title: "OKR Planning Template",
        slug: "okr-planning-template",
        description:
          "Objectives and Key Results template for setting, tracking, and evaluating quarterly and annual goals at individual, team, and company levels.",
        format: "Excel / Word",
        cta: "Manage OKRs in Space HR",
        link: "/features/goals",
      },
      {
        title: "Individual Development Plan (IDP) Template",
        slug: "individual-development-plan-template",
        description:
          "Structured development plan template covering skill gaps, learning objectives, action items, timelines, and success metrics.",
        format: "Word / PDF",
        cta: "AI-powered development recommendations",
        link: "/features/360-performance-appraisals",
      },
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
            <Download className="w-4 h-4" /> Free Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Free HR Templates &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Policy Documents
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Download professionally crafted HR templates for performance
            appraisals, leave policies, remote work handbooks, and more. Then
            see how Space HR can <strong>automate these processes</strong> with
            AI.
          </p>
        </div>
      </section>

      {/* TEMPLATES DIRECTORY */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {templates.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-10 h-10 rounded-xl bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center text-${category.color}-600`}
                >
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((template, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {template.format}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      <Link href={`/templates/${template.slug}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        {template.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {template.description}
                    </p>
                    <div className="space-y-3">
                      <a
                        href={`/api/template-download?slug=${template.slug}`}
                        download
                        className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download Template
                      </a>
                      <Link href={template.link}>
                        <div className="text-center text-xs text-primary hover:underline font-medium">
                          💡 {template.cta} →
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Using Templates. Start Automating.
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Templates are a great starting point, but Space HR automates these
            entire processes with AI — from 360° appraisals to leave management
            to payroll compliance.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-teal-600 hover:bg-gray-100"
            >
              See Space HR in Action <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
