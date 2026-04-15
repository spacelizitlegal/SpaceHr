import { Button } from "@/components/ui/Button";
import {
  Scale,
  ShieldCheck,
  FileText,
  AlertTriangle,
  CheckCircle,
  Brain,
  Lock,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "New York AI Hiring Law (NYC 144) Compliance Tool | Space HR",
  description:
    "Automate your bias audits for NYC Local Law 144. Space HR provides independent bias testing, summary reports, and transparency notices to ensure AI hiring compliance.",
  keywords: [
    "NYC Local Law 144",
    "AI bias audit",
    "NYC AI hiring law",
    "automated bias testing",
    "AEDT compliance",
    "HR compliance software",
    "algorithm bias detection",
  ],
};

const _bc_nyc144 = [{"name":"Home","url":"https://spacehr.net"},{"name":"NYC Local Law 144 Compliance","url":"https://spacehr.net/nyc-144-compliance"}];

export default function NYC144CompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide mb-8 border border-indigo-200 dark:border-indigo-800 uppercase">
            <Scale className="w-4 h-4" /> NYC Local Law 144 Compliant
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Automated Bias Audits for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              NYC Local Law 144
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't risk fines of up to $1,500 per violation. Space HR automates
            the required bias audits for your Automated Employment Decision
            Tools (AEDT) and generates audit-ready reports instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl transition-all"
              >
                Start Free Bias Audit
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-medium"
              >
                Talk to a Compliance Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Law & The Risk */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                What is NYC Local Law 144?
              </h2>
              <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
                <p>
                  New York City Local Law 144 requires employers using
                  Automated Employment Decision Tools (AEDT) to:
                </p>
                <ul className="list-none space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span>
                      Perform an annual independent <strong>bias audit</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span>
                      Publish a <strong>public summary</strong> of the audit
                      results.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span>
                      Provide <strong>notice</strong> to candidates about AEDT usage 10 business days prior.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-700 dark:text-red-400">
                      Enforcement is Active
                    </h4>
                    <p className="text-sm text-red-600/80 dark:text-red-300/80 mt-1">
                      Penalties start at $500 for the first violation and up to
                      $1,500 for subsequent violations per day/candidate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Search className="w-5 h-5 text-indigo-500" /> Audit Criteria Included
                    </h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span>Selection Rate Calculation</span>
                            <span className="text-green-600 dark:text-green-400 font-medium">Automated</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span>Impact Ratio Analysis</span>
                            <span className="text-green-600 dark:text-green-400 font-medium">Automated</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                            <span>Intersectionality Checks</span>
                            <span className="text-green-600 dark:text-green-400 font-medium">Automated</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span>Historical Data Review</span>
                            <span className="text-green-600 dark:text-green-400 font-medium">Automated</span>
                        </li>
                    </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

       {/* How Space HR Helps */}
       <section className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Compliance in 3 Simple Steps</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">Our AI engine handles the heavy lifting of data analysis and reporting.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 font-bold text-2xl">1</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Connect Your Data</h3>
                    <p className="text-slate-600 dark:text-slate-400">Integrate Space HR with your existing ATS or use our native hiring module to ingest reportable data.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400 font-bold text-2xl">2</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Run Bias Analysis</h3>
                    <p className="text-slate-600 dark:text-slate-400">Our algorithms calculate selection rates and impact ratios across all protected categories automatically.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400 font-bold text-2xl">3</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Publish & Notify</h3>
                    <p className="text-slate-600 dark:text-slate-400">Generate the required summary report and automate candidate notifications 10 days before screening.</p>
                </div>
            </div>
        </div>
       </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Is Your AI Hiring Compliant?
           </h2>
           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free preliminary bias scan of your hiring data today.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="https://cad.spaceaiapp.com/login">
                <Button size="lg" className="h-16 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl">
                    Run Compliance Check
                </Button>
             </Link>
             <Link href="/request-a-demo">
                  <Button size="lg" variant="outline" className="h-16 px-8 text-lg border-slate-600 text-white hover:bg-slate-800 rounded-full">
                    Schedule Demo
                </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
