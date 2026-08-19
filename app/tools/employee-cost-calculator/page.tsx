"use client";

import { useState, useId } from "react";
import {
  DollarSign,
  Calculator,
  Info,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";

const faqs = [
  {
    question: "What is included in the total cost of an employee?",
    answer:
      "The total cost of an employee includes the base salary plus employer payroll taxes, health insurance, retirement contributions, bonuses, and any other benefits or employer costs. This calculator lets you input each component individually for an accurate picture.",
  },
  {
    question: "How is the hourly employee cost calculated?",
    answer:
      "The hourly cost is calculated by dividing the total annual employee cost by the number of annual working hours. The default is 2,080 hours (40 hours per week × 52 weeks), but you can adjust this to match your organization's actual working hours.",
  },
  {
    question: "What is a typical employer payroll tax rate?",
    answer:
      "In the United States, employer payroll taxes typically include FICA (7.65%), FUTA (0.6% on the first $7,000), and SUTA (varies by state). Combined, employer payroll taxes usually range from 10% to 12% of an employee's salary, depending on the state and industry.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "This calculator provides an estimate based on the values you enter. Actual costs may vary depending on your specific tax jurisdiction, benefits providers, and organizational policies. Use the results as a starting point for workforce budgeting discussions.",
  },
];

function FormInput({
  label,
  id,
  value,
  onChange,
  prefix,
  helpText,
  min = 0,
}: {
  label: string;
  id: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
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
          className={`w-full ${prefix ? "pl-8" : "pl-4"} pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-lg`}
        />
      </div>
    </div>
  );
}

export default function EmployeeCostCalculator() {
  const [salary, setSalary] = useState(75000);
  const [taxRate, setTaxRate] = useState(11.65);
  const [healthInsurance, setHealthInsurance] = useState(7200);
  const [retirement, setRetirement] = useState(4500);
  const [bonus, setBonus] = useState(5000);
  const [otherBenefits, setOtherBenefits] = useState(2000);
  const [otherCosts, setOtherCosts] = useState(3000);
  const [workingHours, setWorkingHours] = useState(2080);

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();
  const id7 = useId();
  const id8 = useId();

  const employerTaxes = salary * (taxRate / 100);
  const totalAnnual =
    salary + employerTaxes + healthInsurance + retirement + bonus + otherBenefits + otherCosts;
  const monthlyCost = totalAnnual / 12;
  const hourlyCost = workingHours > 0 ? totalAnnual / workingHours : 0;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const reset = () => {
    setSalary(75000);
    setTaxRate(11.65);
    setHealthInsurance(7200);
    setRetirement(4500);
    setBonus(5000);
    setOtherBenefits(2000);
    setOtherCosts(3000);
    setWorkingHours(2080);
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
                name: "Employee Cost Calculator",
                url: "https://spacehr.net/tools/employee-cost-calculator",
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
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide mb-6">
            <Calculator className="w-4 h-4" /> Free HR Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Employee Cost Calculator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Calculate the total annual and monthly cost of employing one
            employee — including salary, taxes, benefits, bonuses, and overhead.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calculator Inputs */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Employee Details
            </h2>

            <FormInput
              label="Annual Salary"
              id={id1}
              value={salary}
              onChange={setSalary}
              prefix="$"
            />

            <FormInput
              label="Employer Payroll Tax Rate"
              id={id2}
              value={taxRate}
              onChange={setTaxRate}
              prefix="%"
              helpText="Typical US rate: 10–12% (FICA + FUTA + SUTA)"
            />

            <FormInput
              label="Health Insurance (Annual)"
              id={id3}
              value={healthInsurance}
              onChange={setHealthInsurance}
              prefix="$"
            />

            <FormInput
              label="Retirement Contribution (Annual)"
              id={id4}
              value={retirement}
              onChange={setRetirement}
              prefix="$"
              helpText="Employer 401(k) match or pension contributions"
            />

            <FormInput
              label="Bonus (Annual)"
              id={id5}
              value={bonus}
              onChange={setBonus}
              prefix="$"
            />

            <FormInput
              label="Other Benefits (Annual)"
              id={id6}
              value={otherBenefits}
              onChange={setOtherBenefits}
              prefix="$"
              helpText="Life insurance, disability, wellness programs, etc."
            />

            <FormInput
              label="Other Employer Costs (Annual)"
              id={id7}
              value={otherCosts}
              onChange={setOtherCosts}
              prefix="$"
              helpText="Equipment, training, software licenses, etc."
            />

            <FormInput
              label="Annual Working Hours"
              id={id8}
              value={workingHours}
              onChange={setWorkingHours}
              helpText="Default: 2,080 (40 hrs/wk × 52 weeks)"
              min={1}
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
                Total Annual Employee Cost
              </h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {formatCurrency(totalAnnual)}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Monthly Cost</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {formatCurrency(monthlyCost)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Hourly Cost</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {formatCurrency(hourlyCost)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Base Salary
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(salary)}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Employer Taxes
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(employerTaxes)}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">
                  Benefits &amp; Other
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatCurrency(
                    healthInsurance + retirement + bonus + otherBenefits + otherCosts
                  )}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Forecast your workforce costs with Space HR
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Space HR&apos;s AI predicts 12 months of workforce spend with
                  95% accuracy. Model scenarios and automate variance alerts.
                </p>
              </div>
              <Link href="/features/cost-prediction">
                <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  See Cost Prediction <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Related Tool */}
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Looking for a quick estimate? Try our{" "}
              <Link
                href="/tools/true-cost-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                True Cost Calculator
              </Link>{" "}
              for a simplified view using benefits level tiers.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <section className="mt-16 py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              How the Calculation Works
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              The total cost of an employee goes well beyond their base salary.
              This calculator breaks down every component so you can see the
              full financial picture of each hire.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Formula
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <p>Employer Taxes = Salary × Tax Rate ÷ 100</p>
                <p>
                  Total Annual Cost = Salary + Employer Taxes + Health Insurance
                  + Retirement + Bonus + Other Benefits + Other Costs
                </p>
                <p>Monthly Cost = Total Annual Cost ÷ 12</p>
                <p>Hourly Cost = Total Annual Cost ÷ Annual Working Hours</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Employer Payroll Taxes
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Beyond the employee&apos;s income tax withholding, employers
                  pay FICA (Social Security and Medicare at 7.65%), FUTA federal
                  unemployment (0.6% on the first $7,000), and state unemployment
                  taxes (SUTA) which vary by state and industry.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Benefits Cost
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Health insurance, dental, vision, 401(k) matching, life
                  insurance, disability coverage, and paid time off add up
                  quickly. A standard benefits package costs employers 25–30% of
                  base salary on average.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Other Costs
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Desk space, laptop and monitors, software licenses, onboarding
                  training, and ongoing professional development all contribute
                  to the fully loaded cost. For remote employees, stipends for
                  home office equipment add further to this figure.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                How to Interpret Your Results
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Accurate headcount forecasting:</strong> When you
                    know the true cost per employee, you can forecast department
                    budgets with confidence rather than surprises.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compensation benchmarking:</strong> Understanding
                    the full cost multiplier helps you compare internal hires
                    against contractors or outsourced services on an
                    apples-to-apples basis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>ROI analysis:</strong> If an AI payroll tool reduces
                    processing time by 40% and catches $50,000 in anomalies
                    annually, knowing your true cost multiplier helps quantify
                    the exact return on that investment.
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

        {/* Related Resources */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Related HR Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/tools/employee-turnover-calculator"
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <Link2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  Employee Turnover Calculator
                </p>
                <p className="text-xs text-slate-500">
                  Calculate turnover rate and cost
                </p>
              </div>
            </Link>
            <Link
              href="/tools/hr-roi-calculator"
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <Link2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  HR ROI Calculator
                </p>
                <p className="text-xs text-slate-500">
                  Estimate HR automation savings
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
