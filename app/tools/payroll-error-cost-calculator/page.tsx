"use client";

import { useState, useId } from "react";
import {
  TrendingDown,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";

const faqs = [
  {
    question: "What are common payroll errors?",
    answer:
      "Common payroll errors include incorrect tax withholdings, duplicate payments, missed overtime, incorrect benefit deductions, ghost employees (active records for terminated staff), wrong pay rates, and missed deadlines for tax filings. These errors can be costly to identify and correct after the fact.",
  },
  {
    question: "How much do payroll errors cost companies?",
    answer:
      "Payroll errors cost US employers an estimated $845 per error when factoring in direct correction costs, staff time, penalties, and employee trust impact. For organizations with thousands of employees and frequent errors, this can amount to hundreds of thousands of dollars annually.",
  },
  {
    question: "How can I reduce payroll errors?",
    answer:
      "Common strategies include automated payroll processing, AI-powered anomaly detection, regular payroll audits, standardized data models, clear approval workflows, and integration between time tracking and payroll systems. Many organizations also implement dual-review processes for payroll before finalization.",
  },
  {
    question: "Are the values in this calculator exact?",
    answer:
      "No. All values in this calculator are based on your inputs and estimates. Actual payroll error costs vary by organization, error type, severity, and how quickly errors are detected and corrected. Use these results as a starting point for understanding your potential payroll risk exposure.",
  },
];

function FormInput({
  label,
  id,
  value,
  onChange,
  helpText,
  min = 0,
}: {
  label: string;
  id: string;
  value: number;
  onChange: (v: number) => void;
  helpText?: string;
  min?: number;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
      >
        {label}
      </label>
      {helpText && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
          {helpText}
        </p>
      )}
      <div className="relative">
        <input
          type="number"
          id={id}
          value={value}
          min={min}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(isNaN(v) ? 0 : Math.max(min, v));
          }}
          className="w-full pl-4 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-lg"
        />
      </div>
    </div>
  );
}

export default function PayrollErrorCostCalculator() {
  const [employees, setEmployees] = useState(500);
  const [payrollRuns, setPayrollRuns] = useState(24);
  const [errorsPerRun, setErrorsPerRun] = useState(3);
  const [hoursToFix, setHoursToFix] = useState(2);
  const [costPerError, setCostPerError] = useState(50);
  const [hourlyCost, setHourlyCost] = useState(40);

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();

  const annualErrors = employees * payrollRuns * errorsPerRun;
  const annualTime = annualErrors * hoursToFix;
  const directCost = annualErrors * costPerError;
  const timeCost = annualTime * hourlyCost;
  const totalCost = directCost + timeCost;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const formatNumber = (val: number) =>
    new Intl.NumberFormat("en-US").format(val);

  const reset = () => {
    setEmployees(500);
    setPayrollRuns(24);
    setErrorsPerRun(3);
    setHoursToFix(2);
    setCostPerError(50);
    setHourlyCost(40);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1121] font-sans pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "https://spacehr.net" },
              { name: "Tools", url: "https://spacehr.net/tools" },
              {
                name: "Payroll Error Cost Calculator",
                url: "https://spacehr.net/tools/payroll-error-cost-calculator",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero */}
      <div className="bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 pb-12 pt-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-bold tracking-wide mb-6">
            <TrendingDown className="w-4 h-4" /> Free HR Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Payroll Error Cost Calculator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Calculate the annual cost of payroll errors including direct error
            costs and time spent on corrections.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calculator Inputs */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Payroll &amp; Error Details
            </h2>

            <FormInput
              label="Number of Employees"
              id={id1}
              value={employees}
              onChange={setEmployees}
              min={0}
            />

            <FormInput
              label="Payroll Runs per Year"
              id={id2}
              value={payrollRuns}
              onChange={setPayrollRuns}
              helpText="e.g., 12 for monthly, 24 for semi-monthly, 26 for bi-weekly, 52 for weekly"
              min={0}
            />

            <FormInput
              label="Average Errors per Payroll Run"
              id={id3}
              value={errorsPerRun}
              onChange={setErrorsPerRun}
              helpText="Estimated number of errors per pay cycle"
              min={0}
            />

            <FormInput
              label="Average Hours to Fix an Error"
              id={id4}
              value={hoursToFix}
              onChange={setHoursToFix}
              helpText="Time to identify, investigate, and correct each error"
              min={0}
            />

            <FormInput
              label="Average Direct Cost per Error"
              id={id5}
              value={costPerError}
              onChange={setCostPerError}
              helpText="Correction fees, reprocessing costs, penalty risk, etc."
              min={0}
            />

            <FormInput
              label="Payroll Staff Hourly Cost"
              id={id6}
              value={hourlyCost}
              onChange={setHourlyCost}
              helpText="Fully loaded hourly cost of staff time spent fixing errors"
              min={0}
            />

            <button
              onClick={reset}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mt-2"
            >
              <RotateCcw className="w-4 h-4" /> Reset to defaults
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-slate-400 font-medium uppercase tracking-wider text-sm mb-1">
                Estimated Total Payroll-Error Cost
              </h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {formatCurrency(totalCost)}
              </div>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                All values are estimates based on your inputs
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Annual Payroll Errors
                  </p>
                  <p className="text-2xl font-bold text-red-400">
                    {formatNumber(annualErrors)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Annual Time Spent Fixing
                  </p>
                  <p className="text-2xl font-bold text-red-400">
                    {formatNumber(annualTime)} hrs
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Annual Direct Error Cost
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(directCost)}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Annual Staff-Time Cost
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(timeCost)}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Reduce payroll errors with Space HR AI Payroll Auditor
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Space HR&apos;s AI detects payroll anomalies before
                  disbursement — catching ghost employees, withholding drift,
                  and duplicate payments automatically.
                </p>
              </div>
              <Link href="/features/ai-payroll-auditor">
                <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  See AI Payroll Auditor <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Related Tools */}
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Related:{" "}
              <Link
                href="/tools/employee-cost-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Employee Cost Calculator
              </Link>{" "}
              ·{" "}
              <Link
                href="/tools/hr-roi-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                HR ROI Calculator
              </Link>
            </p>
          </div>
        </div>

        {/* How It Works */}
        <section className="mt-16 py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              How the Calculation Works
            </h2>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Formula
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <p>
                  Annual Errors = Number of Employees × Payroll Runs per Year ×
                  Average Errors per Run
                </p>
                <p>
                  Annual Time = Annual Errors × Average Hours to Fix
                </p>
                <p>
                  Direct Cost = Annual Errors × Average Direct Cost per Error
                </p>
                <p>
                  Time Cost = Annual Time × Payroll Staff Hourly Cost
                </p>
                <p>
                  Total Payroll-Error Cost = Direct Cost + Time Cost
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Understanding Payroll Error Costs
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Payroll errors are one of the most common and costly HR
                operational risks. They include incorrect tax withholdings,
                duplicate payments, missed overtime, wrong benefit deductions,
                ghost employee records, and off-cycle payment discrepancies.
                Each error requires time to investigate, correct, and
                sometimes involves re-filing tax documents or recovering
                overpayments.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The cost of payroll errors extends beyond the direct
                correction expense. There is also the staff time spent
                investigating and fixing errors, the risk of tax penalties for
                late or incorrect filings, and the impact on employee trust
                when paychecks are wrong. This calculator helps you estimate
                the combined direct and time costs.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                How to Interpret Your Results
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>All values are estimates.</strong> The accuracy of
                    your results depends on how well your inputs reflect your
                    actual payroll operations. Review and adjust the values to
                    match your experience.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Small per-error costs add up.</strong> Even a
                    $50–$100 direct cost per error can result in significant
                    annual losses when multiplied across hundreds of errors
                    per year.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Use as a prevention argument.</strong> These
                    estimates can justify investment in payroll automation,
                    auditing tools, or process improvements by quantifying
                    the cost of the status quo.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>
      </div>
    </div>
  );
}
