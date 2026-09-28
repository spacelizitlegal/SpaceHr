import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  Sparkles,
  Link2,
  Network,
  ShieldCheck,
  Server,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Code2,
  FileSearch,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology — Powered by VeritasGraph | Space HR",
  description:
    "How Space HR delivers verifiable AI with source attribution. Search and AI answers are grounded by VeritasGraph, an open-source GraphRAG knowledge-graph framework with citations and reasoning paths.",
  keywords: [
    "VeritasGraph",
    "GraphRAG",
    "knowledge graph",
    "source attribution",
    "verifiable AI",
    "multi-hop reasoning",
    "on-prem AI",
    "AI technology",
    "Space HR technology",
    "bibin prathap VeritasGraph",
  ],
  openGraph: {
    title: "Technology — Powered by VeritasGraph | Space HR",
    description:
      "Search and AI answers on Space HR are grounded by VeritasGraph, an open-source GraphRAG knowledge-graph framework that returns every answer with a verifiable citation and reasoning path.",
    type: "website",
    url: "https://spacehr.net/technology",
    siteName: "Space HR",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR Technology — Powered by VeritasGraph",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology — Powered by VeritasGraph | Space HR",
    description:
      "Verifiable AI with source attribution. Space HR answers are grounded by the VeritasGraph GraphRAG knowledge-graph framework.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const _bc_technology = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Technology", url: "https://spacehr.net/technology" },
];

export default function TechnologyPage() {
  const veritasGraphFAQs = [
    {
      question: "How does Space HR make sure AI answers are accurate?",
      answer:
        "Every AI answer on Space HR is grounded by VeritasGraph, an open-source GraphRAG knowledge-graph framework. Instead of guessing from text similarity, VeritasGraph reasons over a structured knowledge graph and returns every answer with a verifiable citation and reasoning path — so you can see exactly which source each result came from.",
    },
    {
      question: "What is VeritasGraph?",
      answer:
        "VeritasGraph is an open-source GraphRAG knowledge-graph framework created by Bibin Prathap. It performs multi-hop reasoning over an entity graph, attaches a source citation to every generated answer, and can run fully on-premises or 100% locally for zero data egress.",
    },
    {
      question: "What does 'source attribution' mean?",
      answer:
        "Source attribution means every answer returned by the platform links back to the exact document, record, or policy it was derived from — along with the chain of reasoning used to reach it. This makes AI outputs verifiable, auditable, and trustworthy for payroll, leave, and compliance decisions.",
    },
    {
      question: "Can VeritasGraph run on-premises?",
      answer:
        "Yes. VeritasGraph runs on-prem or 100% local, which keeps your workforce and payroll data sovereign — zero data egress to third-party AI providers. This aligns with Space HR's data-residency commitments for GDPR, PDPA, and regional requirements.",
    },
    {
      question: "Why is VeritasGraph based on a knowledge graph instead of standard text search?",
      answer:
        "Standard text search matches keywords, but a knowledge graph stores entities — employees, policies, payroll records, regulations — and the relationships between them. VeritasGraph performs multi-hop reasoning over these relationships, so it can compose answers that span multiple documents and show the exact reasoning path and sources behind each one. This makes complex HR queries more accurate and fully auditable.",
    },
    {
      question: "Where can I learn how VeritasGraph works?",
      answer:
        "You can explore the full VeritasGraph documentation at bibinprathap.github.io/VeritasGraph and the source code on GitHub. The Space HR deployment is a production reference for the framework's knowledge-graph and citation pipeline.",
    },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(_bc_technology)} />
      <JsonLd
        data={{
          ...generateFAQSchema(veritasGraphFAQs),
        }}
      />

      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Technology
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Powered by VeritasGraph
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                Verifiable AI with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Source Attribution
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Search and AI answers on Space HR are grounded by{" "}
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  VeritasGraph
                </a>
                , an open-source GraphRAG knowledge-graph framework. Instead of
                guessing from similarity, VeritasGraph reasons over a structured
                knowledge graph and returns every answer with a
                verifiable citation and reasoning path — so you can trust the
                source of every result.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                {[
                  {
                    icon: FileSearch,
                    title: "Source Attribution",
                    text: "Every answer links to its source with a reasoning path.",
                  },
                  {
                    icon: Network,
                    title: "Knowledge Graph",
                    text: "Multi-hop reasoning across connected HR entities.",
                  },
                  {
                    icon: Server,
                    title: "On-Prem / 100% Local",
                    text: "Sovereign, zero data egress for payroll & workforce data.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <item.icon className="w-8 h-8 text-emerald-400 mb-3" />
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT BLOCK */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Powered by VeritasGraph — Verifiable AI with Source Attribution
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Search and AI answers on{" "}
                  <strong className="text-gray-900 dark:text-white">Space HR</strong> are
                  grounded by{" "}
                  <a
                    href="https://github.com/bibinprathap/VeritasGraph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    VeritasGraph
                  </a>
                  , an open-source{" "}
                  <strong className="text-gray-900 dark:text-white">GraphRAG knowledge-graph framework</strong>.
                  Instead of guessing from similarity, VeritasGraph reasons over a
                  structured knowledge graph and returns every answer with a{" "}
                  <strong className="text-gray-900 dark:text-white">
                    verifiable citation and reasoning path
                  </strong>{" "}
                  — so you can trust the source of every result.
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      icon: FileSearch,
                      text: "Source attribution on every answer",
                    },
                    {
                      icon: Network,
                      text: "Knowledge graph multi-hop reasoning",
                    },
                    {
                      icon: Server,
                      text: "Runs on-prem / 100% local (sovereign, zero data egress)",
                    },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://github.com/bibinprathap/VeritasGraph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-cyan-500 text-white hover:from-primary/90 hover:to-cyan-500/90">
                      <BookOpen className="mr-2 w-4 h-4" />
                      Explore VeritasGraph on GitHub
                    </Button>
                  </a>
                  <a
                    href="https://bibinprathap.github.io/VeritasGraph/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full px-6 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      <Code2 className="mr-2 w-4 h-4" />
                      Learn How It Works
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 sm:py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                How It Works
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                From Question to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  Cited Answer
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The same reasoning pipeline that powers Space HR&apos;s AI
                concierge, payroll auditor, and policy answers, end to end.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: Server,
                  title: "Ingest",
                  text: "Policies, payroll rules, org data, and compliance docs are indexed into a local knowledge graph.",
                },
                {
                  step: "02",
                  icon: Network,
                  title: "Reason",
                  text: "VeritasGraph performs multi-hop reasoning across connected entities — employees, policies, tax rules, regions.",
                },
                {
                  step: "03",
                  icon: Link2,
                  title: "Attribute",
                  text: "Every generated answer is bound to its source records with a traceable reasoning path.",
                },
                {
                  step: "04",
                  icon: ShieldCheck,
                  title: "Verify",
                  text: "Users see the citation on every result — auditable, on-prem, and fully sovereign.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-100 dark:text-gray-700">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                VeritasGraph &amp; Space HR
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Common questions about how we keep AI answers accurate and
                verifiable.
              </p>
            </div>
            <FAQAccordion items={veritasGraphFAQs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              See Verifiable AI in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a demo to see how Space HR answers payroll, leave, and policy
              questions with a citation you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-violet-600 text-white shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://bibinprathap.github.io/VeritasGraph/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <Code2 className="mr-2 w-5 h-5" />
                  VeritasGraph Docs
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}