"use client";

import { useState, useId } from "react";
import {
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
    question: "What is cost per hire?",
    answer:
      "Cost per hire is the total amount an organization spends on recruiting divided by the number of hires made in a given period. It includes both direct costs (advertising, agency fees) and indirect costs (recruiter time, interview costs, onboarding).",
  },
  {
    question: "What costs should be included in cost per hire?",
    answer:
      "A comprehensive cost per hire calculation includes: advertising and job board fees, recruiter salaries or agency fees, background check costs, interview expenses (travel, meals, assessment tools), onboarding and training costs, and any other recruiting-related expenses.",
  },
  {
    question: "What is a good cost per hire benchmark?",
    answer:
      "Cost per hire varies significantly by industry, role level, and geography. According to SHRM, the average cost per hire in the US is approximately $4,700, but this can range from $1,500 for entry-level positions to $15,000+ for senior or specialized roles. Focus on your own trends rather than external benchmarks.",
  },
  {
    question: "How can I reduce cost per hire?",
    answer:
      "Common strategies include improving employee referral programs, strengthening your employer brand to attract inbound candidates, optimizing job posting spend, reducing time-to-fill, building talent pipelines, and using AI-powered recruitment tools to automate screening and scheduling.",
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

export default function CostPerHireCalculator() {
  const [advertising, setAdvertising] = useState(5000);
  const [recruiterCosts, setRecruiterCosts] = useState(12000);
  const [agencyFees, setAgencyFees] = useState(0);
  const [jobBoardCosts, setJobBoardCosts] = useState(3000);
  const [backgroundChecks, setBackgroundChecks] = useState(1500);
  const [interviewCosts, setInterviewCosts] = useState(2000);
  const [onboardingCosts, setOnboardingCosts] = useState(4000);
  const [otherCosts, setOtherCosts] = useState(1000);
  const [numberOfHires, setNumberOfHires] = useState(10);

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();
  const id7 = useId();
  const id8 = useId();
  const id9 = useId();

  const totalCost =
    advertising +
    recruiterCosts +
    agencyFees +
    jobBoardCosts +
    backgroundChecks +
    interviewCosts +
    onboardingCosts +
    otherCosts;

  const costPerHire = numberOfHires > 0 ? totalCost / numberOfHires : 0;
  const hasValidHires = numberOfHires > 0;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const reset = () => {
    setAdvertising(5000);
    setRecruiterCosts(12000);
    setAgencyFees(0);
    setJobBoardCosts(3000);
    setBackgroundChecks(1500);
    setInterviewCosts(2000);
    setOnboardingCosts(4000);
    setOtherCosts(1000);
    setNumberOfHires(10);
  };

  const costBreakdown = [
    { label: "Advertising", value: advertising },
    { label: "Recruiter Costs", value: recruiterCosts },
    { label: "Agency Fees", value: agencyFees },
    { label: "Job Board Costs", value: jobBoardCosts },
    { label: "Background Checks", value: backgroundChecks },
    { label: "Interview Costs", value: interviewCosts },
    { label: "Onboarding", value: onboardingCosts },
    { label: "Other Costs", value: otherCosts },
  ].filter((item) => item.value > 0);

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
                name: "Cost Per Hire Calculator",
                url: "https://spacehr.net/tools/cost-per-hire-calculator",
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
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-bold tracking-wide mb-6">
            <Calculator className="w-4 h-4" /> Free HR Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Cost Per Hire Calculator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Calculate your true cost per hire including advertising, agency
            fees, interview costs, onboarding, and more.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calculator Inputs */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Recruiting Costs
            </h2>

            <FormInput
              label="Advertising Costs"
              id={id1}
              value={advertising}
              onChange={setAdvertising}
              prefix="$"
              helpText="Job postings, social media ads, recruitment marketing"
            />

            <FormInput
              label="Recruiter / Internal HR Costs"
              id={id2}
              value={recruiterCosts}
              onChange={setRecruiterCosts}
              prefix="$"
              helpText="Salaries, benefits, and overhead for recruitment team"
            />

            <FormInput
              label="Agency Fees"
              id={id3}
              value={agencyFees}
              onChange={setAgencyFees}
              prefix="$"
              helpText="External recruitment agency or headhunter fees"
            />

            <FormInput
              label="Job Board Costs"
              id={id4}
              value={jobBoardCosts}
              onChange={setJobBoardCosts}
              prefix="$"
              helpText="LinkedIn, Indeed, Glassdoor, and other job board subscriptions"
            />

            <FormInput
              label="Background Check Costs"
              id={id5}
              value={backgroundChecks}
              onChange={setBackgroundChecks}
              prefix="$"
            />

            <FormInput
              label="Interview Costs"
              id={id6}
              value={interviewCosts}
              onChange={setInterviewCosts}
              prefix="$"
              helpText="Travel, meals, assessment tools, interviewer time"
            />

            <FormInput
              label="Onboarding Costs"
              id={id7}
              value={onboardingCosts}
              onChange={setOnboardingCosts}
              prefix="$"
              helpText="Training, equipment, orientation, and ramp-up costs"
            />

            <FormInput
              label="Other Recruiting Costs"
              id={id8}
              value={otherCosts}
              onChange={setOtherCosts}
              prefix="$"
            />

            <FormInput
              label="Number of Hires"
              id={id9}
              value={numberOfHires}
              onChange={setNumberOfHires}
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
                Total Recruiting Cost
              </h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {formatCurrency(totalCost)}
              </div>

              {hasValidHires ? (
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">Cost Per Hire</p>
                  <p className="text-3xl font-bold text-emerald-400">
                    {formatCurrency(costPerHire)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Based on {numberOfHires} hire{numberOfHires !== 1 ? "s" : ""}
                  </p>
                </div>
              ) : (
                <div className="pt-6 border-t border-slate-700">
                  <div
                    role="alert"
                    className="flex items-center gap-2 text-amber-400"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    <p className="text-sm font-medium">
                      Enter at least 1 hire to calculate cost per hire.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Cost Breakdown */}
            {costBreakdown.length > 0 && (
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  Cost Breakdown
                </h3>
                <div className="space-y-3">
                  {costBreakdown.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {item.label}
                      </span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">
                        {formatCurrency(item.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Streamline your hiring process with Space HR
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Space HR&apos;s AI automates recruitment workflows — from
                  candidate screening to onboarding — reducing time-to-hire and
                  cost-per-hire.
                </p>
              </div>
              <Link href="/features/ai-automation">
                <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors flex items-center gap-2">
                  See HR Automation <ArrowRight className="w-4 h-4" />
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
                href="/tools/employee-turnover-calculator"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Turnover Calculator
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
                  Total Recruiting Cost = Advertising + Recruiter Costs + Agency
                  Fees + Job Board Costs + Background Checks + Interview Costs
                  + Onboarding + Other Costs
                </p>
                <p>Cost Per Hire = Total Recruiting Cost ÷ Number of Hires</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Direct Hiring Costs
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  These are the explicit, easily measured expenses: job board
                  postings, advertising spend, recruitment agency fees, background
                  check fees, and assessment tool costs. They appear directly on
                  budget reports and invoices.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Indirect Hiring Costs
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  These are the hidden costs: internal recruiter salaries and
                  benefits, interviewer time, onboarding and training expenses,
                  and the productivity loss during the vacancy period. They are
                  real costs that many organizations overlook.
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
                    <strong>Track trends over time.</strong> The most valuable
                    use of cost-per-hire data is identifying whether your
                    recruiting efficiency is improving or declining over
                    successive quarters.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compare by channel.</strong> Breaking down cost per
                    hire by source (referrals, job boards, agencies) reveals
                    which channels deliver the best return on recruiting spend.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Context matters.</strong> A higher cost per hire for
                    senior or specialized roles is expected. Benchmark against
                    your own historical data rather than generic industry
                    averages.
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
