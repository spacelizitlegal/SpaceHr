"use client";

import { useState, useId } from "react";
import {
  Users,
  Calculator,
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
    question: "What is employee turnover rate?",
    answer:
      "Employee turnover rate is the percentage of employees who leave an organization during a given period, divided by the average headcount during that same period. It is calculated as: (Employees Who Left ÷ Average Headcount) × 100.",
  },
  {
    question: "What is the average cost of employee turnover?",
    answer:
      "The cost of replacing an employee typically ranges from 50% to 200% of their annual salary, depending on the role. This includes recruiting fees, onboarding costs, training, lost productivity, and impact on team morale. The exact cost varies significantly by position and industry.",
  },
  {
    question: "What does the productivity-loss estimate mean?",
    answer:
      "The productivity-loss percentage estimates the indirect cost of losing an employee — including the time it takes to hire and train a replacement, lost institutional knowledge, and reduced team productivity during the vacancy. The default estimate of 25% is one commonly referenced range, but actual impact varies by role and organization.",
  },
  {
    question: "How can I reduce employee turnover?",
    answer:
      "Common strategies include competitive compensation, strong onboarding programs, career development opportunities, regular feedback, flexible work arrangements, and predictive analytics to identify at-risk employees before they resign.",
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

export default function EmployeeTurnoverCalculator() {
  const [beginning, setBeginning] = useState(200);
  const [ending, setEnding] = useState(190);
  const [left, setLeft] = useState(24);
  const [replacementCost, setReplacementCost] = useState(15000);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [productivityLoss, setProductivityLoss] = useState(25);

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();

  const avgHeadcount = (beginning + ending) / 2;
  const turnoverRate = avgHeadcount > 0 ? (left / avgHeadcount) * 100 : 0;
  const replacementTotal = left * replacementCost;
  const productivityLossCost = left * avgSalary * (productivityLoss / 100);
  const totalTurnoverCost = replacementTotal + productivityLossCost;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const formatNumber = (val: number, decimals = 1) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(val);

  const reset = () => {
    setBeginning(200);
    setEnding(190);
    setLeft(24);
    setReplacementCost(15000);
    setAvgSalary(75000);
    setProductivityLoss(25);
  };

  const hasInput = beginning > 0 || ending > 0;

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
                name: "Employee Turnover Calculator",
                url: "https://spacehr.net/tools/employee-turnover-calculator",
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
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-bold tracking-wide mb-6">
            <Users className="w-4 h-4" /> Free HR Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Employee Turnover Calculator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Calculate your employee turnover rate and estimate the annual cost
            of employee turnover for your organization.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calculator Inputs */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Workforce Details
            </h2>

            <FormInput
              label="Employees at Beginning of Period"
              id={id1}
              value={beginning}
              onChange={setBeginning}
              min={0}
            />

            <FormInput
              label="Employees at End of Period"
              id={id2}
              value={ending}
              onChange={setEnding}
              min={0}
            />

            <FormInput
              label="Employees Who Left"
              id={id3}
              value={left}
              onChange={setLeft}
              min={0}
            />

            <FormInput
              label="Average Annual Salary"
              id={id4}
              value={avgSalary}
              onChange={setAvgSalary}
              prefix="$"
            />

            <FormInput
              label="Estimated Replacement Cost per Employee"
              id={id5}
              value={replacementCost}
              onChange={setReplacementCost}
              prefix="$"
              helpText="Recruiting fees, onboarding, training, lost productivity"
            />

            <FormInput
              label="Productivity-Loss Estimate"
              id={id6}
              value={productivityLoss}
              onChange={setProductivityLoss}
              suffix="%"
              helpText="Estimate only — adjust based on your organization's experience"
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
                Estimated Annual Turnover Cost
              </h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {formatCurrency(totalTurnoverCost)}
              </div>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                This is an estimate based on your inputs and assumptions
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Turnover Rate</p>
                  <p className="text-2xl font-bold text-violet-400">
                    {formatNumber(turnoverRate)}%
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Average Headcount
                  </p>
                  <p className="text-2xl font-bold text-violet-400">
                    {formatNumber(avgHeadcount, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Replacement Cost
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(replacementTotal)}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Productivity Loss
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(productivityLossCost)}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Employees Lost
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {left}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Turn employee data into workforce insight with Space HR
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Space HR&apos;s AI predicts attrition risks months in advance,
                  helping you proactively retain top talent before they resign.
                </p>
              </div>
              <Link href="/features/attrition-prediction">
                <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  See Attrition Prediction <ArrowRight className="w-4 h-4" />
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
                href="/tools/cost-per-hire-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Cost Per Hire Calculator
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
                <p>Average Headcount = (Beginning + Ending) ÷ 2</p>
                <p>Turnover Rate = (Employees Left ÷ Average Headcount) × 100</p>
                <p>Replacement Cost = Employees Left × Replacement Cost per Employee</p>
                <p>
                  Productivity Loss = Employees Left × Average Salary × Productivity-Loss
                  Rate ÷ 100
                </p>
                <p>Total Turnover Cost = Replacement Cost + Productivity Loss</p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Understanding Employee Turnover
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Employee turnover rate measures how many employees leave your
                organization over a specific period. A high turnover rate can
                indicate issues with compensation, culture, management, or
                career growth opportunities. It is one of the most important
                workforce metrics for HR leaders and executives.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The cost of turnover extends far beyond recruiting fees. When an
                employee leaves, the organization loses institutional knowledge,
                team cohesion, and the time managers spend on hiring and training
                replacements. The productivity-loss estimate in this calculator
                helps capture those indirect costs.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                Note: The productivity-loss percentage used in this calculator is
                a user-configurable estimate, not an industry-standard benchmark.
                Actual productivity impact varies significantly by role,
                industry, and organizational context.
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
                    <strong>Turnover rate above 15-20%</strong> is generally
                    considered high and may indicate retention issues that need
                    attention.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Replacement cost</strong> includes recruiting fees,
                    interview time, onboarding, and training. For senior roles,
                    this can reach 100-200% of annual salary.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Use these results as a starting point</strong> for
                    retention strategy discussions. The actual cost of turnover
                    depends on many factors specific to your organization.
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
