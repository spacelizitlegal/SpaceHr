import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Bot,
  ShieldCheck,
  BarChart3,
  Users,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freshteam vs Space HR: Recruitment-First HRMS vs Full AI Platform",
  description: "Freshteam is excellent for recruitment and onboarding. Space HR extends further with AI payroll anomaly detection, attrition prediction, leave automation, and a conversational HR AI concierge.",
  keywords: ["freshteam alternative","space hr vs freshteam","freshworks hr alternative","hr software with ai","freshteam competitor"],
  alternates: { canonical: "https://spacehr.net/compare/freshteam" },
  openGraph: {
    title: "Freshteam vs Space HR: Recruitment-First HRMS vs Full AI Platform",
    description: "Freshteam is excellent for recruitment and onboarding. Space HR extends further with AI payroll anomaly detection, attrition prediction, leave automation, and a conversational HR AI concierge.",
    url: "https://spacehr.net/compare/freshteam",
    siteName: "SpaceHR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Freshteam Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from Freshteam?", answer: "Freshteam (by Freshworks) is an excellent ATS and onboarding platform — strong for recruitment workflows, offer management, and new hire onboarding. Space HR is an AI-native HR platform focused on what comes after onboarding: payroll anomaly detection, leave automation, retention prediction, and conversational employee self-service." },
  { question: "Can Space HR and Freshteam be used together?", answer: "Yes. Many teams use Freshteam for recruitment and Space HR for core HR management, payroll anomaly detection, and retention analytics post-hire. Space HR's API can sync new hire data from Freshteam automatically." },
  { question: "Does Space HR have ATS/recruitment features?", answer: "Space HR includes basic applicant tracking — job posting, candidate pipeline, and offer management. For high-volume recruitment with complex screening workflows, Freshteam's ATS is more feature-rich. Space HR's strength is the post-hire employee lifecycle." },
  { question: "What does Space HR offer for employee retention that Freshteam doesn't?", answer: "Space HR's attrition prediction model analyzes 50+ signals — engagement scores, manager quality, tenure, compensation vs. market, promotion history — to identify flight risks 3–6 months before resignation. Freshteam does not include predictive retention analytics." },
  { question: "How quickly can I set up Space HR alongside Freshteam?", answer: "Initial setup takes under 72 hours. The Freshteam API integration for new hire data sync is pre-built and configures in under an hour. Your AI HR concierge and anomaly detection will be live within the same week." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Freshteam", url: "https://spacehr.net/compare/freshteam" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CompareFreshteamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><Link href="/compare" className="hover:text-gray-700 dark:hover:text-gray-200">Compare</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">vs Freshteam</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-300 font-semibold text-sm">
            Hire vs Retain
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            Freshteam Hires Great People.<br />
            Space HR Keeps Them.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI That Powers the Full Employee Journey.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Freshteam's ATS and onboarding are excellent. But after day one, employees need payroll accuracy, responsive HR support, and managers need retention intelligence. That's where Space HR takes over.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-green-600 hover:bg-green-700 text-white border-none shadow-xl">
                Try Space HR Free
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                See a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post-Hire Capability Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">What happens after the offer letter is signed.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Freshteam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-green-500" />
                      AI HR Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>24/7 conversational AI.</strong> Handles all employee HR queries.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Standard helpdesk ticket flow only.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>AI pre-payroll scan.</strong> Prevents payroll errors before payday.</td>
                  <td className="p-6 text-gray-500"><strong>Not available.</strong> Freshteam focuses on ATS and onboarding.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal AI model.</strong> Know who's at risk before they resign.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> No predictive retention analytics.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      Leave Management
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Full module.</strong> Self-service, auto-accruals, payroll sync.</td>
                  <td className="p-6 text-gray-500"><strong>Basic.</strong> Leave requests with limited automation.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      Employee Lifecycle
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Hire to retire.</strong> Full AI-powered employee journey.</td>
                  <td className="p-6 text-gray-500"><strong>Hire to onboard.</strong> Strong recruitment, lighter on retention tools.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Teams Add Space HR to Their HR Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">The retention and intelligence layer Freshteam doesn't provide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-green-600 dark:text-green-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">From Day-One to Day-1000</h3>
               <p className="text-gray-600 dark:text-gray-400">Freshteam excels at the hiring and onboarding journey. Space HR picks up from there — keeping employees engaged, answering their HR questions 24/7, and flagging flight risk before it becomes a resignation.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Safety for Growing Teams</h3>
               <p className="text-gray-600 dark:text-gray-400">As teams scale, payroll errors multiply. Space HR's AI anomaly detection scans every payroll run — catching ghost employees, salary spikes, and tax mismatches before they cost you money and trust.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Retention Intelligence</h3>
               <p className="text-gray-600 dark:text-gray-400">Great hiring means little if your best people leave within 18 months. Space HR's attrition model predicts who's at risk 3–6 months before they resign — giving managers time to act.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Space HR vs Freshteam — detailed comparison.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/workday", label: "vs Workday" },
              { href: "/compare/rippling", label: "vs Rippling" },
              { href: "/compare/gusto", label: "vs Gusto" },
              { href: "/compare/orangehrm", label: "vs OrangeHRM" },
              { href: "/compare", label: "All Comparisons" },
            ]
              .filter((l) => l.href !== "/compare/freshteam")
              .map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all">
                  {l.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hire Great People. Then Keep Them.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Freshteam gets them in the door. Space HR's AI keeps them engaged, paid accurately, and flagged before they consider leaving.</p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg font-bold">
                Request a Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-medium border-white/30 text-white hover:bg-white/10">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
