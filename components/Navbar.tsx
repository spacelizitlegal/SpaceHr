"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/courses", label: "Learning Management" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "h-16 flex items-center justify-between gap-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 shadow-sm",
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl border border-slate-200/60 dark:border-slate-700/60"
            : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40"
        )}
      >
        {/* Logo Section - Fixed width to prevent layout shift */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center h-16 group">
            <div className="flex items-center gap-0">
              <div className="relative h-14 w-14 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img
                  src="/hrlogonly.png"
                  alt="Space HR"
                  className="h-full w-full object-contain drop-shadow-lg"
                />
              </div>
              <span className="-ml-1 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 dark:from-pink-400 dark:via-violet-400 dark:to-blue-500 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-violet-600 group-hover:to-blue-700 transition-all duration-300 whitespace-nowrap">
                Space HR
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Menu - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1 lg:gap-2 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 lg:px-5 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-sm whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons - Right aligned */}
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
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white dark:bg-slate-800 backdrop-blur-xl border border-slate-200 dark:border-slate-600 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-4 fade-in-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
  );
}
