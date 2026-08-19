"use client";

import { useState, useId } from "react";
import {
  BarChart3,
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
    question: "What does this calculator estimate?",
    answer:
      "This calculator estimates the annual cost of manual HR processes and the potential savings if a portion of that workload were automated. It does not predict actual ROI from any specific software investment — actual results depend on the solution chosen, implementation costs, and your organization's specific circumstances.",
  },
  {
    question: "What is the automation-rate assumption?",
    answer:
      "The automation rate represents the percentage of manual HR workload that could potentially be automated. The default of 40% is a conservative estimate. The actual percentage depends on your HR processes, the automation solution implemented, and how thoroughly it is adopted. You should adjust this value based on your own assessment.",
  },
  {
    question: "Why don't you show a guaranteed ROI percentage?",
    answer:
      "Actual ROI depends on many factors that this calculator cannot know: the cost of the automation solution, implementation and training costs, the time to full adoption, and your organization's actual savings. Presenting a single ROI number would be misleading. Instead, we show the potential savings-to-labor-cost ratio as one data point for your analysis.",
  },
  {
    question: "How can I use these results?",
    answer:
      "Use these estimates as a starting point for building a business case for HR automation. Combine these figures with specific vendor pricing, implementation timelines, and your organization's priorities to create a more complete analysis.",
  },
];

function FormInput({
  label,
  id,
  value,
  onChange,
  prefix,
  suffix,
  helpText,
  min = 0,
}: {
  label: string;
  id: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
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
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">
            {prefix}
          </span>
        )}
        <input
          type="number"
          id={id}
          value={value}
          min={min}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(isNaN(v) ? 0 : Math.max(min, v));
          }}
          className={`w-full ${prefix ? "pl-8" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-lg`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function HRRoICalculator() {
  const [hrStaff, setHrStaff] = useState(5);
  const [avgHrSalary, setAvgHrSalary] = useState(80000);
  const [manualHoursPerMonth, setManualHoursPerMonth] = useState(120);
  const [employeeHourlyCost, setEmployeeHourlyCost] = useState(35);
  const [automationRate, setAutomationRate] = useState(40);

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();

  const annualManualCost = manualHoursPerMonth * 12 * employeeHourlyCost;
  const automationSavings = annualManualCost * (automationRate / 100);
  const annualHrLaborCost = hrStaff * avgHrSalary;
  const savingsToLaborRatio =
    annualHrLaborCost > 0
      ? (automationSavings / annualHrLaborCost) * 100
      : 0;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const reset = () => {
    setHrStaff(5);
    setAvgHrSalary(80000);
    setManualHoursPerMonth(120);
    setEmployeeHourlyCost(35);
    setAutomationRate(40);
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
                name: "HR ROI Calculator",
                url: "https://spacehr.net/tools/hr-roi-calculator",
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
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-bold tracking-wide mb-6">
            <BarChart3 className="w-4 h-4" /> Free HR Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            HR ROI Calculator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Estimate potential savings from HR automation by comparing manual
            HR process costs with estimated automation savings.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calculator Inputs */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              HR Team &amp; Workload
            </h2>

            <FormInput
              label="Number of HR Staff"
              id={id1}
              value={hrStaff}
              onChange={setHrStaff}
              min={1}
            />

            <FormInput
              label="Average HR Staff Salary"
              id={id2}
              value={avgHrSalary}
              onChange={setAvgHrSalary}
              prefix="$"
            />

            <FormInput
              label="Manual HR Hours per Month"
              id={id3}
              value={manualHoursPerMonth}
              onChange={setManualHoursPerMonth}
              helpText="Hours spent on repetitive manual tasks (data entry, answering queries, report generation)"
            />

            <FormInput
              label="Average Employee Hourly Cost"
              id={id4}
              value={employeeHourlyCost}
              onChange={setEmployeeHourlyCost}
              prefix="$"
              helpText="Fully loaded cost of the employee whose time is consumed by manual HR processes"
            />

            <FormInput
              label="Estimated Automation Rate"
              id={id5}
              value={automationRate}
              onChange={setAutomationRate}
              suffix="%"
              helpText="Estimate only — adjust based on your assessment of what could be automated"
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
                Estimated Annual Manual-Process Cost
              </h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {formatCurrency(annualManualCost)}
              </div>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                All values are estimates based on your inputs
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Estimated Automation Savings
                  </p>
                  <p className="text-2xl font-bold text-orange-400">
                    {formatCurrency(automationSavings)}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on {automationRate}% automation rate
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Annual HR Labor Cost
                  </p>
                  <p className="text-2xl font-bold text-orange-400">
                    {formatCurrency(annualHrLaborCost)}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {hrStaff} staff × {formatCurrency(avgHrSalary)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                Estimated Savings-to-HR-Labor-Cost Ratio
              </h3>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {annualHrLaborCost > 0
                  ? `${savingsToLaborRatio.toFixed(1)}%`
                  : "N/A"}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                This ratio compares estimated automation savings to your total
                HR labor cost. It is <strong>not</strong> investment ROI. Actual
                ROI depends on the cost of the HR automation solution,
                implementation costs, and the organization&apos;s actual savings.
                Use this ratio as one data point alongside vendor pricing and
                your own cost-benefit analysis.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  See how Space HR can automate HR workflows
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Space HR&apos;s AI automates payroll auditing, employee
                  self-service, compliance tracking, and approval workflows —
                  reducing manual HR workload significantly.
                </p>
              </div>
              <Link href="/features/ai-automation">
                <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  See AI Automation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Related Tools */}
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Related:{" "}
              <Link
                href="/tools/payroll-error-cost-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Payroll Error Cost Calculator
              </Link>{" "}
              ·{" "}
              <Link
                href="/tools/employee-cost-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Employee Cost Calculator
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
                  Annual Manual Process Cost = Manual Hours per Month × 12 ×
                  Employee Hourly Cost
                </p>
                <p>
                  Estimated Automation Savings = Annual Manual Process Cost ×
                  Automation Rate ÷ 100
                </p>
                <p>
                  Annual HR Labor Cost = Number of HR Staff × Average HR Salary
                </p>
                <p>
                  Savings-to-Labor Ratio = (Automation Savings ÷ Annual HR Labor
                  Cost) × 100
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Important Assumptions
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  The <strong>automation rate</strong> is a user-configurable
                  estimate representing what percentage of manual HR workload
                  could potentially be automated. The default value of 40% is a
                  conservative estimate — not an industry benchmark. You should
                  adjust this based on your assessment of which HR processes
                  could be automated in your organization.
                </p>
                <p className="leading-relaxed">
                  The <strong>employee hourly cost</strong> represents the fully
                  loaded cost of the employee whose time is consumed by manual
                  HR processes. This could be an HR coordinator, office manager,
                  or any employee who spends significant time on HR-related
                  tasks.
                </p>
                <p className="leading-relaxed">
                  <strong>This calculator does not account for</strong>:
                  implementation costs, software subscription fees, training
                  time, change management costs, or the time required to achieve
                  full automation. These are critical factors in any real ROI
                  analysis.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                How to Use These Results
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>As a business case starting point:</strong> These
                    estimates help you understand the scale of potential savings
                    to justify further investigation into HR automation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Combine with vendor pricing:</strong> To calculate
                    actual ROI, subtract the cost of your chosen solution
                    (subscription + implementation) from the estimated savings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Adjust assumptions:</strong> Change the automation
                    rate and hourly cost to model best-case, worst-case, and
                    most-likely scenarios for your analysis.
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
