"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const featuresLinks = [
  { href: "/features/payroll", label: "Payroll Management" },
  { href: "/features/appraisals", label: "Performance Appraisals" },
  { href: "/features/tax", label: "Tax Compliance" },
  { href: "/features/finance", label: "Finance & Accounting" },
  { href: "/features/attendance", label: "Attendance Tracking" },
  { href: "/features/leave-management", label: "Leave Management" },
  { href: "/features/ai-intelligence", label: "AI Intelligence" },
  { href: "/features/ai-chatbots", label: "AI Chatbots" },
  { href: "/features/ai-automation", label: "AI Automation" },
  { href: "/features/ai-templates", label: "AI Templates" },
  { href: "/features/goals", label: "Goals & OKRs" },
  { href: "/features/employee-self-service", label: "Employee Self-Service" },
  { href: "/features/attrition-prediction", label: "Attrition Prediction" },
  { href: "/features/cost-prediction", label: "Cost Prediction" },
  { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
  { href: "/features/360-performance-appraisals", label: "360° Appraisals" },
  { href: "/features/hr-ai-concierge", label: "HR AI Concierge" },
];

const solutionsLinks = [
  { href: "/solutions/ceo", label: "For CEOs" },
  { href: "/solutions/hr-admin", label: "For HR Admins" },
  { href: "/solutions/employees", label: "For Employees" },
];

const ecosystemLinks = [
  { href: "https://pmspace.ai", label: "PM Space AI", external: true },
  { href: "https://space-sign.ai", label: "Space Sign", external: true },
  { href: "https://spacecapture.ai", label: "Space Capture", external: true },
  { href: "https://spacelizit.com", label: "Space Lizit", external: true },
  { href: "https://spacelean.ai", label: "Space Lean", external: true },
  { href: "https://spacenexus.net", label: "Space Nexus", external: true },
  { href: "https://spacecrm.net", label: "Space CRM", external: true },
];

const resourceLinks = [
  { href: "/blogs", label: "Blog & Insights" },
  { href: "/courses", label: "Learning Center" },
  { href: "/templates", label: "HR Templates" },
  { href: "/glossary", label: "HR Glossary" },
  { href: "/tools/true-cost-calculator", label: "True Cost Calculator" },
  { href: "/tools/fw4-form-download", label: "FW-4 Form Download" },
  { href: "/payroll-anomaly-detection", label: "Payroll Anomaly Detection" },
  { href: "/press", label: "Press Kit" },
];

interface DropdownProps {
  label: string;
  links: { href: string; label: string; external?: boolean }[];
  columns?: number;
}

function NavDropdown({ label, links, columns = 1 }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-4 lg:px-5 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-sm whitespace-nowrap"
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in-0 slide-in-from-top-2",
            columns === 2 ? "w-[420px]" : "w-56",
          )}
        >
          <div
            className={cn(
              "grid gap-1",
              columns === 2 ? "grid-cols-2" : "grid-cols-1",
            )}
          >
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2 rounded-xl text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2 rounded-xl text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <>
      {/* Top Bar with Phone Numbers */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-between h-8 sm:h-9">
            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
              <span>AI-Powered HRMS for Modern Enterprises</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="tel:+19169690451"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-sm">🇺🇸</span>
                <Phone className="w-3 h-3 hidden sm:block" />
                <span className="font-medium">+1 916-969-0451</span>
              </a>
              <div className="w-px h-3 bg-slate-600"></div>
              <a
                href="tel:+6586111900"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-sm">🇸🇬</span>
                <Phone className="w-3 h-3 hidden sm:block" />
                <span className="font-medium">+65 8611 1900</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed top-8 sm:top-9 left-0 right-0 z-[100] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
        <nav
          className={cn(
            "h-16 flex items-center justify-between gap-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 shadow-sm",
            scrolled
              ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl border border-slate-200/60 dark:border-slate-700/60"
              : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40",
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center h-16 group">
              <div className="flex items-center gap-0">
                <div className="relative h-14 w-14 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/hrlogonly.png"
                    alt="Space HR — AI-powered HRMS platform logo"
                    width={56}
                    height={56}
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
                <span className="-ml-1 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 dark:from-pink-400 dark:via-violet-400 dark:to-blue-500 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-violet-600 group-hover:to-blue-700 transition-all duration-300 whitespace-nowrap">
                  Space HR
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1 lg:gap-2 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
              <NavDropdown label="Features" links={featuresLinks} columns={2} />
              <Link
                href="/features"
                className="px-4 lg:px-5 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-sm whitespace-nowrap"
              >
                All Features
              </Link>
              <NavDropdown label="Solutions" links={solutionsLinks} />
              <NavDropdown label="Resources" links={resourceLinks} />
              <Link
                href="/courses"
                className="px-4 lg:px-5 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-sm whitespace-nowrap"
              >
                Learning
              </Link>
              <NavDropdown label="Ecosystem" links={ecosystemLinks} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 lg:gap-3">
              <Link href="/request-a-demo">
                <Button
                  size="sm"
                  className="rounded-lg px-4 lg:px-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-md hover:shadow-lg transition-all font-semibold border border-slate-200 dark:border-slate-700 whitespace-nowrap"
                >
                  Get Demo
                </Button>
              </Link>
              <Link href="https://cad.spaceaiapp.com/login">
                <Button
                  size="sm"
                  className="rounded-lg px-4 lg:px-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 shadow-md transition-all hover:shadow-xl hover:scale-105 font-semibold border-none whitespace-nowrap"
                >
                  Try for Free
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white dark:bg-slate-800 backdrop-blur-xl border border-slate-200 dark:border-slate-600 rounded-2xl shadow-2xl p-4 flex flex-col gap-1 animate-in slide-in-from-top-4 fade-in-0 max-h-[80vh] overflow-y-auto">
            {/* Features accordion */}
            <button
              onClick={() => toggleMobile("features")}
              className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full"
            >
              <span className="font-medium">Features</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-400 transition-transform duration-200",
                  mobileExpanded === "features" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "features" && (
              <div className="ml-4 flex flex-col gap-1">
                {featuresLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                ))}
                <Link
                  href="/features"
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  View All Features
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Solutions accordion */}
            <button
              onClick={() => toggleMobile("solutions")}
              className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full"
            >
              <span className="font-medium">Solutions</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-400 transition-transform duration-200",
                  mobileExpanded === "solutions" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "solutions" && (
              <div className="ml-4 flex flex-col gap-1">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            )}

            {/* Resources accordion */}
            <button
              onClick={() => toggleMobile("resources")}
              className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full"
            >
              <span className="font-medium">Resources</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-400 transition-transform duration-200",
                  mobileExpanded === "resources" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "resources" && (
              <div className="ml-4 flex flex-col gap-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            )}

            {/* Ecosystem accordion */}
            <button
              onClick={() => toggleMobile("ecosystem")}
              className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full"
            >
              <span className="font-medium">Ecosystem</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-400 transition-transform duration-200",
                  mobileExpanded === "ecosystem" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "ecosystem" && (
              <div className="ml-4 flex flex-col gap-1">
                {ecosystemLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                ))}
              </div>
            )}

            {/* Direct links */}
            {[
              { href: "/courses", label: "Learning Center" },
              { href: "/blogs", label: "Blog & Insights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-400" />
              </Link>
            ))}

            <div className="h-px bg-slate-200 dark:bg-slate-600 my-2"></div>
            <Link
              href="/request-a-demo"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-center rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-500 shadow-sm">
                Get Demo
              </Button>
            </Link>
            <Link
              href="https://cad.spaceaiapp.com/login"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg border-none">
                Try for Free
              </Button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
