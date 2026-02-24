import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, CheckCircle, Shield } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";

const FW4_PDF_URL = "https://www.irs.gov/pub/irs-pdf/fw4.pdf";

export const metadata: Metadata = {
  title: "FW-4 Download (IRS Form W-4 PDF) | Space HR",
  description:
    "Download the official IRS FW-4 (Form W-4) PDF. Get the latest federal withholding certificate form and guidance for payroll and employee onboarding.",
  keywords: [
    "FW-4 download",
    "fw4 pdf",
    "IRS fw4 form",
    "Form W-4 PDF",
    "W-4 download",
    "employee withholding certificate",
    "federal tax withholding form",
    "payroll tax form",
    "new hire tax form",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/fw4-form-download",
  },
  openGraph: {
    title: "FW-4 Download (IRS Form W-4 PDF)",
    description:
      "Download the official IRS FW-4 (Form W-4) PDF and improve payroll onboarding compliance.",
    type: "website",
    url: "https://spacehr.net/tools/fw4-form-download",
  },
};

const faqs = [
  {
    question: "What is FW-4 (Form W-4)?",
    answer:
      "FW-4 refers to the IRS PDF file name for Form W-4, Employee's Withholding Certificate. Employees use it to tell employers how much federal income tax to withhold from paychecks.",
  },
  {
    question: "Where can I download the official FW-4 PDF?",
    answer:
      "Use the direct IRS link on this page. It points to the official PDF at irs.gov so you always get the source document.",
  },
  {
    question: "When should employees submit Form W-4?",
    answer:
      "Employees should submit Form W-4 at onboarding and whenever their tax situation changes, such as marriage, dependents, or multiple jobs.",
  },
];

export default function FW4FormDownloadPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FW-4 Download (IRS Form W-4 PDF)",
    description:
      "Download official IRS FW-4 (Form W-4) PDF for federal withholding setup.",
    url: "https://spacehr.net/tools/fw4-form-download",
    publisher: {
      "@type": "Organization",
      name: "Space HR",
    },
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Official IRS PDF</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              FW-4 Download
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                IRS Form W-4 PDF
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Download the latest IRS Form W-4 (FW-4 PDF), the federal
              withholding certificate used during employee onboarding and payroll
              updates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FW4_PDF_URL} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
                  <Download className="w-5 h-5 mr-2" />
                  Download FW-4 PDF
                </Button>
              </a>
              <Link href="/request-a-demo">
                <Button className="h-12 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl">
                  Automate W-4 Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">
            {[
              "FW-4 form download",
              "IRS Form W-4 PDF",
              "federal withholding form",
              "new hire tax form",
              "W-4 payroll compliance",
              "employee withholding certificate",
            ].map((keyword) => (
              <div
                key={keyword}
                className="text-sm rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Download Official File
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-5">
                Click the button to open and download the IRS FW-4 PDF directly
                from the IRS website.
              </p>
              <a
                href={FW4_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Open IRS FW-4 PDF
              </a>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Why It Matters
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Correct federal tax withholding setup.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Faster onboarding and payroll readiness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Cleaner compliance records for audits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              FW-4 / W-4 FAQ
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-10">
              Common questions about the FW-4 download and Form W-4 usage.
            </p>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
