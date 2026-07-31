import { Button } from "@/components/ui/Button";
import {
  Users,
  LineChart,
  Brain,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  UserMinus,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema,
  softwareSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Workforce Attrition Prediction Model | Retain Top Talent | Space HR",
  description:
    "Stop reacting to resignation letters. Space HR’s AI predicts workforce attrition risks months in advance, helping Heads of People proactively retain top talent.",
  keywords: [
    "Workforce attrition prediction model",
    "predict employee turnover",
    "retention analytics software",
    "flight risk detection",
    "HR predictive modeling",
    "AI retention strategies",
    "Head of People tools",
  ],
  openGraph: {
    title: "Predict & Prevent Workforce Attrition | Space HR",
    description:
      "Don't wait for the exit interview. Identify flight risks and retain your best people with AI-powered predictive analytics.",
    url: "https://spacehr.net/features/attrition-prediction",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Workforce Attrition Prediction Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/features/attrition-prediction",
  },
};

const attritionFAQs = [
  { question: "What is workforce attrition prediction?", answer: "Workforce attrition prediction uses AI to analyze employee data — engagement scores, performance trends, compensation ratios, and 50+ other signals — to identify employees at risk of leaving months before they resign." },
  { question: "How accurate is Space HR attrition prediction?", answer: "Space HR's model achieves 87%+ precision on flight-risk identification. It continuously learns from your organization's patterns, improving accuracy over time as it processes more data." },
  { question: "What data signals does Space HR analyze?", answer: "The model analyzes over 50 signals including engagement survey scores, tenure length, recent performance reviews, promotion history, manager relationship quality, compensation vs. market, absenteeism patterns, and peer network strength." },
  { question: "How early can Space HR detect flight risk?", answer: "Space HR typically flags at-risk employees 3–6 months before a likely resignation, giving HR and managers sufficient time to intervene with tailored retention strategies." },
  { question: "Does attrition prediction violate employee privacy?", answer: "No. Space HR processes only data your employees have already consented to provide (surveys, HR records, performance data). The model surfaces risk scores to HR and managers — not to other employees." },
  { question: "Can I see WHY an employee is flagged as at-risk?", answer: "Yes. Each risk profile includes a breakdown of contributing factors with plain-language explanations, so managers can have targeted, constructive conversations rather than guessing." },
  { question: "How does Space HR integrate with existing HR systems?", answer: "Space HR connects to major HRIS platforms via API. HR data flows automatically so risk scores are always up to date without manual data exports or uploads." },
  { question: "What ROI does attrition prediction deliver?", answer: "Replacing a mid-level employee costs 50–200% of their annual salary. Even reducing attrition by 10–15% in a 200-person company can save $500K+ annually in recruiting, training, and lost productivity costs." },
];

const attritionBreadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Features", url: "https://spacehr.net/features" },
  { name: "Attrition Prediction", url: "https://spacehr.net/features/attrition-prediction" },
];

export default function AttritionPredictionPage() {
  const faqSchema = generateFAQSchema(attritionFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema(attritionBreadcrumbs);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-indigo-900/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-bold tracking-wide mb-8 border border-purple-200 dark:border-purple-800 uppercase">
            <Brain className="w-4 h-4" /> AI-Powered Retention Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
            Know Who’s Leaving <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Before They Resign.
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Resignation letters shouldn't be a surprise. Our <strong>Workforce Attrition Prediction Model</strong> analyzes 50+ signals—from engagement scores to compensation ratios—to identify flight risks months before they pack their bags.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                className="rounded-full px-8 h-16 text-lg font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-purple-900/20 shadow-xl transition-all"
              >
                See Your Retention Risk Score
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-16 text-lg font-medium border-slate-300 dark:border-slate-700"
              >
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Cost of Attrition Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              The Silent Cost of "Reactive Retention"
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Replacing a highly skilled employee costs up to 200% of their annual salary.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Brain Drain
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                When senior leaders leave, they take institutional knowledge, client relationships, and strategic context that takes years to rebuild.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Productivity Plunge
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Remaining team members are overworked, morale drops, and project timelines slip while you scramble to backfill critical roles.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <UserMinus className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Recruitment Costs
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Agency fees, signing bonuses, and onboarding time skyrocket. Proactive retention is 5x cheaper than reactive hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works: The Prediction Engine */}
      <section className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold tracking-wide uppercase text-sm mb-4">
                <LineChart className="w-4 h-4" /> Predictive Modeling
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                50+ Signals, One "Flight Risk" Score.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Connect your HRIS, payroll, and engagement data. Our model identifies patterns human intuition misses—flagging high-performers who are quietly disengaging.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Compensation Ratios</h4>
                    <p className="text-slate-600 dark:text-slate-400">Detects when top talent falls below market rate or peers, a leading indicator of turnover.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Engagement Velocity</h4>
                    <p className="text-slate-600 dark:text-slate-400">Tracks subtle declines in pulse survey participation, feedback quality, and peer recognition.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Manager Impact</h4>
                    <p className="text-slate-600 dark:text-slate-400">Correlates attrition spikes with specific managers or restructuring events.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[2rem] opacity-20 blur-3xl"></div>
                <div className="relative bg-slate-900 text-white rounded-3xl p-8 border border-slate-700 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-6 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Retention Alert</h3>
                                <p className="text-slate-400 text-sm">Engineering • Senior Level</p>
                            </div>
                        </div>
                        <span className="text-red-400 text-sm font-bold bg-red-900/20 px-4 py-2 rounded-full border border-red-900/50">High Risk (85%)</span>
                    </div>

                    <div className="space-y-6">
                        <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-300 font-medium">Sarah Jenkins</span>
                                <span className="text-xs text-slate-500">Last promoted: 2.5 yrs ago</span>
                            </div>
                            <div className="w-full bg-slate-700 h-2 rounded-full mb-3 overflow-hidden">
                                <div className="bg-red-500 h-full rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <p className="text-sm text-red-300 flex items-center gap-2">
                                <TrendingDown className="w-4 h-4" /> Risk increased 15% this month
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                            <h4 className="font-bold text-slate-200 mb-3 text-sm uppercase tracking-wider">Top Risk Factors</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">Comp Ratio 0.82</span>
                                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">High Overtime (Last 3mo)</span>
                                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">Manager Rating &lt; 3.0</span>
                            </div>
                        </div>

                         <div className="p-5 rounded-xl bg-green-900/10 border border-green-900/30">
                            <h4 className="font-bold text-green-400 mb-2 text-sm uppercase tracking-wider">Suggested Actions</h4>
                            <p className="text-sm text-slate-300 mb-3">Conduct "Stay Interview" within 7 days. Review market adjustment.</p>
                            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white border-none">Schedule 1:1</Button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 via-slate-900 to-[#0f172a]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
             <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Executive Value
              </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Empowering the "Head of People"
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
                Transform HR from a support function to a strategic partner. Bring data to the boardroom that predicts business risk and protects the bottom line.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <Briefcase className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-6 relative z-10" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Proactive Succession Planning</h3>
                    <p className="text-slate-600 dark:text-slate-400 relative z-10">
                        Identify vulnerabilities in your leadership bench before they become vacancies. Build succession plans for high-risk critical roles automatically.
                    </p>
                </div>
                 <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 dark:bg-pink-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <Users className="w-10 h-10 text-pink-600 dark:text-pink-400 mb-6 relative z-10" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Targeted Retention Budgets</h3>
                    <p className="text-slate-600 dark:text-slate-400 relative z-10">
                        Stop spreading merit increases peanut-butter thin. Allocate retention budget precisely to high-impact, high-risk employees where it matters most.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 dark:bg-black -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
             Protect Your Most Valuable Asset.
           </h2>
           <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
             Don't let your best people leave because you didn't see the signs. Start predicting attrition today.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-10 text-lg bg-white text-slate-900 hover:bg-slate-200 rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
                    Start Predicting Now
                </Button>
             </Link>
             <Link href="/request-a-demo">
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-slate-600 text-white hover:bg-slate-800 rounded-full">
                    Talk to an Expert
                </Button>
             </Link>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Common questions about AI-powered workforce attrition prediction.</p>
          </div>
          <FAQAccordion items={attritionFAQs} />
        </div>
      </section>
    </div>
  );
}
