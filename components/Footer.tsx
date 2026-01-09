import Link from "next/link";
import { Cpu, Instagram, Youtube } from "lucide-react";
import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1121] text-white border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
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
              The intelligent performance management platform for modern
              enterprises. Align, train, and grow your workforce with AI.
            </p>
          </div>

          {/* Links Column 1 - Features */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              Features
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/features/appraisals"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Appraisals
                </Link>
              </li>
              <li>
                <Link
                  href="/features/payroll"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Payroll
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
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-4">
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
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 AIPerform Inc. All rights reserved.
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
