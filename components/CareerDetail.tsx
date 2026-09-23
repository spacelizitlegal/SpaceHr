import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import type { Career } from "@/lib/careersData";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Mail,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Sparkles,
  GraduationCap,
  Send,
} from "lucide-react";

export function CareerDetail({ career }: { career: Career }) {
  const breadcrumbs = [
    { name: "Home", url: "https://spacehr.net" },
    { name: "Careers", url: "https://spacehr.net/careers" },
    {
      name: career.title,
      url: `https://spacehr.net/careers/${career.slug}`,
    },
  ];

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: career.title,
    description: career.overview,
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: new Date(new Date().setMonth(new Date().getMonth() + 3))
      .toISOString()
      .slice(0, 10),
    employmentType: career.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Space HR",
      url: "https://spacehr.net",
      sameAs: "https://spaceaiapp.com",
      logo: "https://spacehr.net/hrlogonly.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressLocality: "Remote",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: ["United States", "United Arab Emirates", "United Kingdom", "India"],
    },
    jobLocationType: "TELECOMMUTE",
    employmentUnit: {
      "@type": "Organization",
      name: "Space HR",
    },
    directApply: true,
  };

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={jobPostingSchema} />

      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {career.title}
                </li>
              </ol>
            </nav>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All positions
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {career.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {career.employmentType.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium"
                >
                  <Clock className="w-3.5 h-3.5" />
                  {type}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                <GraduationCap className="w-3.5 h-3.5" />
                {career.experience}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {career.location}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:careers@spacehr.net">
                <Button
                  size="lg"
                  className="h-13 px-8 rounded-full text-base font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Apply for this role
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/company/space-hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 rounded-full text-base font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Apply via LinkedIn
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Overview */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Overview
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {career.overview}
              </p>
            </div>

            {/* Responsibilities */}
            {career.responsibilities.map((group) => (
              <div
                key={group.group}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4" />
                  Key Responsibilities — {group.group}
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Requirements */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Requirements
              </div>
              <ul className="space-y-4">
                {career.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                What We Offer
              </div>
              <ul className="space-y-4">
                {career.offers.map((offer, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1.5" />
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ready to Apply */}
            <div className="bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b] rounded-2xl p-8 sm:p-12 text-center border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Send your resume and a brief cover letter explaining why you&apos;re a
                great fit for this role to{" "}
                <a
                  href="mailto:careers@spacehr.net"
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  careers@spacehr.net
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="mailto:careers@spacehr.net">
                  <Button
                    size="lg"
                    className="h-13 px-8 rounded-full text-base font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 transition-all"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Apply Now
                  </Button>
                </a>
                <Link href="/careers">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 px-8 rounded-full text-base font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    View All Positions
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                We typically respond to every application within 5–7 business days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}