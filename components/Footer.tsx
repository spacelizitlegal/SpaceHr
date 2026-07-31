"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  ArrowUpRight,
  Linkedin,
  LayoutGrid,
} from "lucide-react";
import { Twitter } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <footer className={`bg-[#0b1121] text-white font-sans relative z-10 ${isHomepage ? "footer-fade fade-overlay" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main grid: brand + link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 lg:gap-6">
          {/* Brand Column - Explore Space HR */}
          <div className="space-y-6 col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Explore Space HR
            </h3>
            <Link href="/" className="flex items-center gap-0 group">
              <div className="relative h-15 w-15 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[5.25rem] lg:w-[5.25rem] hover:scale-110 transition-transform duration-300">
                <Image
                  src="/hrlogonly.png"
                  alt="Space HR — AI-powered HRMS and ERP platform logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="84px"
                />
              </div>
              <span className="-ml-0.5 text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 dark:from-pink-400 dark:via-violet-400 dark:to-blue-500 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-violet-600 group-hover:to-blue-700 transition-colors">
                Space HR
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The intelligent AI-powered HRMS & ERP platform for modern
              enterprises. Automate payroll, appraisals, tax compliance, and
              predictive workforce analytics.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:support@spacehr.net"
                  className="hover:text-white transition-colors"
                >
                  support@spacehr.net
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+19169690451"
                  className="hover:text-white transition-colors"
                >
                  🇺🇸 +1 916-969-0451
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+6586111900"
                  className="hover:text-white transition-colors"
                >
                  🇸🇬 +65 8611 1900
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2 pt-2">
              <Link
                href="https://x.com/Space HR197173"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 transition-all duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/space_hr7?igsh=YTJlYnV2OXlkYzR6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/30 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://youtube.com/@SpaceHR7?si=Mz17igrQhxa3Jt7R"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/space-hr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="/social-media-platforms"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:bg-violet-400/10 hover:border-violet-400/30 hover:scale-110 hover:shadow-[0_0_10px_rgba(167,139,250,0.4)] active:scale-95 transition-all duration-200"
                aria-label="All Space HR social platforms"
              >
                <LayoutGrid className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Features
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/features/ai-chatbots", label: "AI HR Chatbot" },
                { href: "/features/ai-automation", label: "AI Workflow Automation" },
                { href: "/features/cost-prediction", label: "Labor Cost Forecasting" },
                {
                  href: "/features/ai-payroll-auditor",
                  label: "AI Payroll Auditor",
                },
                {
                  href: "/features/attrition-prediction",
                  label: "Attrition Prediction",
                },
                { href: "/features/hr-ai-concierge", label: "HR AI Concierge" },
                {
                  href: "/features/360-performance-appraisals",
                  label: "360° Appraisals",
                },
                { href: "/features/ai-templates", label: "AI Templates" },
                { href: "/features", label: "All Features →" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Compare */}
          <div>
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Solutions
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/solutions/ceo", label: "For CEOs" },
                { href: "/solutions/hr-admin", label: "For HR Admins" },
                { href: "/solutions/employees", label: "For Employees" },
                { href: "/solutions/enterprise-hr-chatbot", label: "Enterprise AI Chatbot" },
                { href: "/solutions/hr-helpdesk-chatbot", label: "HR Helpdesk Chatbot" },
                { href: "/solutions/internal-employee-chatbot", label: "Internal Employee Chatbot" },
                { href: "/solutions/chatbot-for-hr-services", label: "Chatbot for HR Services" },
                { href: "/solutions/employee-self-service", label: "Employee Self-Service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-6 mb-5 tracking-wide text-sm uppercase">
              Compare
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/compare/bamboohr", label: "vs BambooHR" },
                { href: "/compare/rippling", label: "vs Rippling" },
                { href: "/compare/workday", label: "vs Workday" },
                { href: "/compare/gusto", label: "vs Gusto" },
                { href: "/compare/orangehrm", label: "vs OrangeHRM" },
                { href: "/compare/adp", label: "vs ADP" },
                { href: "/compare/darwinbox", label: "vs Darwinbox" },
                { href: "/compare/freshteam", label: "vs Freshteam" },
                { href: "/compare/leena-ai", label: "vs Leena AI" },
                { href: "/compare/moveworks", label: "vs Moveworks" },
                { href: "/compare/microsoft-copilot", label: "vs Copilot" },
                { href: "/compare/sap-successfactors", label: "vs SAP" },
                { href: "/compare/servicenow", label: "vs ServiceNow" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions & HR Software */}
          <div>
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Regions
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/regions/united-states", label: "United States" },
                { href: "/regions/dubai", label: "Dubai & UAE" },
                { href: "/regions/singapore", label: "Singapore" },
                { href: "/regions/canada", label: "Canada" },
                { href: "/regions/europe", label: "Europe" },
                { href: "/regions/uk", label: "United Kingdom" },
                { href: "/regions/india", label: "India" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-6 mb-5 tracking-wide text-sm uppercase">
              Industries
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/industries/healthcare", label: "Healthcare" },
                { href: "/industries/banking", label: "Banking & Finance" },
                { href: "/industries/retail", label: "Retail" },
                { href: "/industries/manufacturing", label: "Manufacturing" },
                { href: "/industries/government", label: "Government" },
                { href: "/industries/construction", label: "Construction" },
                { href: "/industries", label: "All Industries →" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-6 mb-5 tracking-wide text-sm uppercase">
              HR Software
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/hr-software", label: "HR Software" },
                { href: "/hrms", label: "HRMS" },
                { href: "/hr-payroll-software", label: "HR Payroll Software" },
                {
                  href: "/payroll-anomaly-detection",
                  label: "Payroll Anomaly Detection",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Resources
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "/blogs", label: "HR Blog" },
                { href: "/courses", label: "HR Courses" },
                { href: "/demo", label: "Watch Demo Video" },
                { href: "/glossary", label: "HR Glossary" },
                { href: "/tools/w4-generator", label: "W-4 Generator" },
                {
                  href: "/tools/true-cost-calculator",
                  label: "Employee Cost Calculator",
                },
                { href: "/tools/w2-form-download", label: "W-2 Form Download" },
                { href: "/tools/fw4-form-download", label: "FW-4 Form Download" },
                {
                  href: "/california-pay-transparency",
                  label: "CA Pay Transparency",
                },
                { href: "/nyc-144-compliance", label: "NYC 144 Compliance" },
                { href: "/integrations", label: "Integrations" },
                { href: "/about", label: "About Space HR" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Space AI Ecosystem */}
          <div>
            <h3 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">
              Space AI Ecosystem
            </h3>
            <ul className="space-y-0.5">
              {[
                { href: "https://pmspace.ai", label: "PM Space AI" },
                { href: "https://space-sign.ai", label: "Space Sign" },
                { href: "https://spacecapture.ai", label: "Space Capture" },
                { href: "https://spacelizit.com", label: "Space Lizit" },
                { href: "https://spacelean.ai", label: "Space Lean" },
                { href: "https://spacenexus.net", label: "Space Nexus" },
                { href: "https://spacecrm.net", label: "Space CRM" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 text-sm py-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/5 mt-12">
          {/* Singapore */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Singapore (HQ)
            </h4>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p>Regional Headquarters</p>
              <p>ISPACE BUILDING #04-39</p>
              <p>7 SOON LEE STREET</p>
              <p>SINGAPORE 627608</p>
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=1.34,103.70"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View in Google Maps <ArrowUpRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* USA */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              USA
            </h4>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p>2500 MARCONI AVE, STE 101</p>
              <p>SACRAMENTO, CA 95821 USA</p>
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=38.62,-121.38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-purple-400 hover:text-purple-300 transition-colors"
            >
              View in Google Maps <ArrowUpRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* Dubai */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Dubai
            </h4>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p>Middle East - Regional Office</p>
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=25.28,55.31"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-orange-400 hover:text-orange-300 transition-colors"
            >
              View in Google Maps <ArrowUpRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Space AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 w-full justify-center">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/sitemap-page"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



