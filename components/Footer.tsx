import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1121] text-white border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-0 group">
              <div className="relative h-15 w-15 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[5.25rem] lg:w-[5.25rem] hover:scale-110 transition-transform duration-300">
                <img
                  src="/hrlogonly.png"
                  alt="Space HR"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <span className="-ml-0.5 text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 dark:from-pink-400 dark:via-violet-400 dark:to-blue-500 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-violet-600 group-hover:to-blue-700 transition-colors">
                Space HR
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The intelligent AI-powered HR platform for modern enterprises. Streamline payroll, appraisals, tax compliance, and workforce management.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@spacehr.com</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+14198201487" className="hover:text-white transition-colors">+1 419-820-1487 (USA)</a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+6586111900" className="hover:text-white transition-colors">+65 8611 1900 (Singapore)</a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              Core Features
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features/payroll"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link
                  href="/payroll-anomaly-detection"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Payroll Anomaly Detection
                </Link>
              </li>
              <li>
                <Link
                  href="/features/appraisals"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Performance Appraisals
                </Link>
              </li>
              <li>
                <Link
                  href="/features/tax"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Tax Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/features/finance"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/features/attendance"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Attendance Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/features/leave-management"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Leave Management
                </Link>
              </li>
            </ul>
          </div>

          {/* AI & Workforce */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              AI & Workforce
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features/ai-intelligence"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  AI Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ai-chatbots"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ai-automation"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ai-templates"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  AI Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/features/goals"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Goals & OKRs
                </Link>
              </li>
              <li>
                <Link
                  href="/features/employee-self-service"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Employee Self-Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/request-a-demo"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Learning Center
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  All Features
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/true-cost-calculator"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  True Cost Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* HR Guides */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              HR Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hr-software"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  HR Software Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/hrms"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  What is HRMS?
                </Link>
              </li>
              <li>
                <Link
                  href="/best-hr-software-small-business"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Small Business HR
                </Link>
              </li>
              <li>
                <Link
                  href="/hr-payroll-software"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Payroll & Appraisals
                </Link>
              </li>
              <li>
                <Link
                  href="/nyc-144-compliance"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  NYC 144 Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/california-pay-transparency"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  CA Pay Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons */}
          <div>
             <h3 className="font-semibold text-white mb-6 tracking-wide">
              Switch From
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/compare/orangehrm"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  OrangeHRM
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/rippling"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Rippling
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/bamboohr"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  BambooHR
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  About Space AI
                </Link>
              </li>
              <li>
                <Link
                  href="/request-a-demo"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/sitemap-page"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Sitemap
                </Link>
              </li>
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

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Space AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/SpaceHR197173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/space_hr7?igsh=YTJlYnV2OXlkYzR6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com/@spacehr7?si=Mz17igrQhxa3Jt7R"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
