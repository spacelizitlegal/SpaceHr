import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, ArrowUpRight, Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1121] text-white border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main grid: brand + 6 link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6 xl:col-span-1 lg:col-span-2 md:col-span-2">
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
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:support@spacehr.com" className="hover:text-white transition-colors">support@spacehr.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+14198201487" className="hover:text-white transition-colors">+1 419-820-1487 (USA)</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+6586111900" className="hover:text-white transition-colors">+65 8611 1900 (Singapore)</a>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">Core Features</h3>
            <ul className="space-y-3">
              {[
                { href: "/features/payroll", label: "Payroll Management" },
                { href: "/features/appraisals", label: "Performance Appraisals" },
                { href: "/features/tax", label: "Tax Compliance" },
                { href: "/features/finance", label: "Finance & Accounting" },
                { href: "/features/attendance", label: "Attendance Tracking" },
                { href: "/features/leave-management", label: "Leave Management" },
                { href: "/features/employee-self-service", label: "Employee Self-Service" },
                { href: "/features", label: "All Features →" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & Workforce */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">AI & Workforce</h3>
            <ul className="space-y-3">
              {[
                { href: "/features/ai-intelligence", label: "AI Intelligence" },
                { href: "/features/ai-chatbots", label: "AI Chatbots" },
                { href: "/features/ai-automation", label: "AI Automation" },
                { href: "/features/ai-templates", label: "AI Templates" },
                { href: "/features/goals", label: "Goals & OKRs" },
                { href: "/features/attrition-prediction", label: "Attrition Prediction" },
                { href: "/features/cost-prediction", label: "Cost Prediction" },
                { href: "/payroll-anomaly-detection", label: "Anomaly Detection" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">Resources & Tools</h3>
            <ul className="space-y-3">
              {[
                { href: "/request-a-demo", label: "Request Demo" },
                { href: "/blogs", label: "Blog & Insights" },
                { href: "/courses", label: "Learning Center" },
                { href: "/tools/true-cost-calculator", label: "True Cost Calculator" },
                { href: "/sitemap-page", label: "Sitemap" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HR Guides */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">HR Guides</h3>
            <ul className="space-y-3">
              {[
                { href: "/hr-software", label: "HR Software Guide" },
                { href: "/hrms", label: "What is HRMS?" },
                { href: "/best-hr-software-small-business", label: "Small Business HR" },
                { href: "/hr-payroll-software", label: "Payroll & Appraisals" },
                { href: "/nyc-144-compliance", label: "NYC 144 Compliance" },
                { href: "/california-pay-transparency", label: "CA Pay Transparency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Compare */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Space AI" },
                { href: "/request-a-demo", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-8 mb-6 tracking-wide">Switch From</h3>
            <ul className="space-y-3">
              {[
                { href: "/compare/orangehrm", label: "OrangeHRM" },
                { href: "/compare/rippling", label: "Rippling" },
                { href: "/compare/bamboohr", label: "BambooHR" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
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
