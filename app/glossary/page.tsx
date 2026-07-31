import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "HR Glossary — Modern HR Tech Terms Defined | Space HR",
  description:
    "Comprehensive glossary of modern HR technology terms. Learn about Predictive Workforce Analytics, Continuous Feedback Loops, Geofenced Attendance, Asynchronous Team Alignment, gross-to-net calculations, and more.",
  keywords: [
    "HR glossary",
    "predictive workforce analytics definition",
    "continuous feedback loops",
    "geofenced attendance",
    "asynchronous team alignment",
    "HR technology terms",
    "HRMS glossary",
    "payroll terminology",
    "performance management terms",
    "future of work glossary",
    "gross-to-net calculation",
    "NACHA ACH definition",
    "FUTA SICA definition",
  ],
  openGraph: {
    title: "Future of Work & HR Glossary | Space HR",
    description:
      "Comprehensive glossary of modern HR technology terms — from predictive analytics to geofenced attendance.",
    url: "https://spacehr.net/glossary",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future of Work & HR Glossary | Space HR",
    description: "Comprehensive glossary of modern HR technology terms — from predictive analytics to geofenced attendance.",
  },
  alternates: {
    canonical: "https://spacehr.net/glossary",
  },
};

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "HR Glossary", url: "https://spacehr.net/glossary" },
]);

const glossaryTerms = [
  {
    term: "Predictive Workforce Analytics",
    definition:
      "The use of AI and machine learning to analyze historical HR data and predict future workforce trends. This includes forecasting attrition risk, labor costs, hiring needs, and performance trajectories. Unlike traditional HR reporting that looks backward, predictive analytics enables proactive decision-making by identifying patterns and trends before they fully materialize.",
    relatedLink: "/features/ai-intelligence",
    relatedText: "See Space HR's Predictive Analytics",
    category: "Analytics",
  },
  {
    term: "Continuous Feedback Loops",
    definition:
      "A performance management approach that replaces traditional annual reviews with ongoing, real-time feedback exchanges between managers, peers, and direct reports. Continuous feedback loops enable immediate course correction, timely recognition, and more accurate performance assessment by capturing data throughout the year rather than relying on a single annual snapshot.",
    relatedLink: "/features/360-performance-appraisals",
    relatedText: "See Space HR's 360° Appraisals",
    category: "Performance",
  },
  {
    term: "Geofenced Attendance",
    definition:
      "A GPS-based attendance tracking method that uses virtual geographic boundaries (geofences) to automatically verify employee clock-in and clock-out locations. When an employee enters or exits a predefined geographic area, the system records their attendance. This is particularly useful for field workers, construction teams, and distributed workforces where traditional time clocks aren't practical.",
    relatedLink: "/features/attendance",
    relatedText: "See Space HR's GPS Attendance",
    category: "Attendance",
  },
  {
    term: "Asynchronous Team Alignment",
    definition:
      "A work methodology where team members collaborate and make progress on shared goals without requiring simultaneous presence or real-time communication. This approach relies on clear documentation, structured updates, and shared digital workspaces to keep distributed teams aligned across time zones. It's a cornerstone of effective remote and hybrid work cultures.",
    relatedLink: "/features/goals",
    relatedText: "See Space HR's Goal Management",
    category: "Remote Work",
  },
  {
    term: "Gross-to-Net Calculation",
    definition:
      "The payroll computation process that transforms an employee's gross pay (total earnings before deductions) into net pay (take-home amount). The calculation sequentially applies: pre-tax deductions (401k, HSA, FSA), federal income tax, state and local taxes, FICA contributions (Social Security + Medicare), FUTA, and post-tax deductions (Roth 401k, garnishments, voluntary deductions).",
    relatedLink: "/features/ai-payroll-auditor",
    relatedText: "See AI Payroll Auditor",
    category: "Payroll",
  },
  {
    term: "NACHA-Compliant ACH File",
    definition:
      "An electronic file formatted according to the National Automated Clearing House Association (NACHA) standards for processing Automated Clearing House (ACH) transactions. In payroll, NACHA-compliant ACH files are used to initiate direct deposit payments to employee bank accounts. The file must follow specific record formats, include proper routing validation, and maintain accurate batch totals.",
    relatedLink: "/features/payroll",
    relatedText: "See Space HR's Payroll Features",
    category: "Payroll",
  },
  {
    term: "FUTA (Federal Unemployment Tax Act)",
    definition:
      "A federal payroll tax paid exclusively by employers to fund state unemployment insurance programs. The standard FUTA rate is 6.0% on the first $7,000 of each employee's annual wages, with a maximum credit of 5.4% for employers who pay state unemployment taxes on time, resulting in an effective rate of 0.6%. FUTA is not deducted from employee wages.",
    relatedLink: "/features/tax",
    relatedText: "See Tax Compliance Engine",
    category: "Tax",
  },
  {
    term: "SICA/SUTA (State Unemployment Tax)",
    definition:
      "State-level unemployment insurance taxes paid by employers (and in some states, employees) to fund unemployment benefits. Rates vary by state and are typically experience-rated based on the employer's history of unemployment claims. Also known as SUTA (State Unemployment Tax Act) or SUI (State Unemployment Insurance).",
    relatedLink: "/features/tax",
    relatedText: "See Tax Compliance Engine",
    category: "Tax",
  },
  {
    term: "Competency-Based Review Forms",
    definition:
      "Performance evaluation instruments that assess employees against specific skills, behaviors, and knowledge areas required for their role. Each competency is defined with behavioral anchors at different proficiency levels and can be weighted based on importance. This approach provides more objective, actionable feedback compared to generic rating scales.",
    relatedLink: "/features/360-performance-appraisals",
    relatedText: "See 360° Appraisals",
    category: "Performance",
  },
  {
    term: "Liability Ledger",
    definition:
      "A financial record that tracks all payroll-related obligations an organization owes but has not yet paid. This includes accrued wages, employer tax liabilities (FICA, FUTA, SUTA), benefits payable, retirement plan contributions, and garnishment obligations. A properly maintained liability ledger is essential for accurate financial reporting and audit readiness.",
    relatedLink: "/features/finance",
    relatedText: "See Financial Analytics",
    category: "Finance",
  },
  {
    term: "GPS Time Tracking",
    definition:
      "A time and attendance method that uses Global Positioning System technology to record employee work hours along with their geographic location. This provides verification that employees are at designated work sites when clocking in/out. Advanced implementations include geofencing, route tracking, and location-based shift assignments.",
    relatedLink: "/features/attendance",
    relatedText: "See Attendance Tracking",
    category: "Attendance",
  },
  {
    term: "AI Payroll Auditor",
    definition:
      "An artificial intelligence system that automatically scans payroll data before processing to detect anomalies, errors, and compliance issues. It uses machine learning to identify statistical outliers such as duplicate payments, incorrect tax calculations, unauthorized rate changes, and overtime miscalculations. The AI compares current data against historical patterns to flag suspicious entries.",
    relatedLink: "/features/ai-payroll-auditor",
    relatedText: "See AI Payroll Auditor",
    category: "Payroll",
  },
  {
    term: "360-Degree Feedback",
    definition:
      "A performance evaluation method that collects feedback from multiple sources surrounding an employee — their manager, peers, direct reports, and self-assessment. This multi-rater approach provides a more comprehensive and balanced view of performance compared to traditional top-down reviews, reducing individual bias and capturing different perspectives on an employee's contributions.",
    relatedLink: "/features/360-performance-appraisals",
    relatedText: "See 360° Appraisals",
    category: "Performance",
  },
  {
    term: "Employee Self-Service (ESS) Portal",
    definition:
      "A digital platform that enables employees to independently access and manage their HR-related information without requiring HR department assistance. Common ESS functions include viewing payslips, updating personal information, requesting leave, accessing tax documents, enrolling in benefits, and submitting expense reports.",
    relatedLink: "/features/employee-self-service",
    relatedText: "See Self-Service Portal",
    category: "Employee Experience",
  },
  {
    term: "Attrition Prediction",
    definition:
      "The use of AI and data analytics to identify employees who are at risk of voluntarily leaving the organization. Predictive models analyze factors such as engagement scores, performance trends, compensation benchmarks, tenure patterns, and manager relationships to generate flight risk scores. This enables proactive retention interventions before valuable employees resign.",
    relatedLink: "/features/attrition-prediction",
    relatedText: "See Attrition Prediction",
    category: "Analytics",
  },
  {
    term: "OKR (Objectives and Key Results)",
    definition:
      "A goal-setting framework that defines ambitious Objectives (qualitative goals) and measurable Key Results (quantitative metrics) to track progress. OKRs are typically set quarterly and cascade from company-level objectives to team and individual goals, ensuring organizational alignment. They emphasize stretch goals and transparency.",
    relatedLink: "/features/goals",
    relatedText: "See Goal Management",
    category: "Performance",
  },
];

// Group terms by first letter
const groupedTerms = glossaryTerms.reduce(
  (acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  },
  {} as Record<string, typeof glossaryTerms>,
);

const sortedLetters = Object.keys(groupedTerms).sort();

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Future of Work &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              HR Glossary
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Comprehensive definitions of modern HR technology terms — from{" "}
            <strong>predictive workforce analytics</strong> to{" "}
            <strong>geofenced attendance</strong> and{" "}
            <strong>NACHA-compliant ACH files</strong>.
          </p>
        </div>
      </section>

      {/* LETTER NAVIGATION */}
      <section className="sticky top-16 z-20 bg-white dark:bg-[#0b1121] border-b border-gray-200 dark:border-gray-800 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSARY TERMS */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {sortedLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
                {letter}
              </h2>
              <div className="space-y-8">
                {groupedTerms[letter].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.term}
                      </h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.definition}
                    </p>
                    <Link
                      href={item.relatedLink}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      → {item.relatedText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See These Concepts in Action
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Space HR brings these modern HR concepts to life with AI-powered
            automation. Schedule a demo to see predictive analytics, continuous
            feedback, and more.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-purple-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
