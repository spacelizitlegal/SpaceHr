"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Cpu } from "lucide-react";
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
        { href: "/", label: "Product" },
        { href: "/features", label: "Features" },
        { href: "/courses", label: "Courses" },
        { href: "/blogs", label: "Blogs" },
    ];

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                scrolled ? "translate-y-0" : "translate-y-0"
            )}
        >
            <nav
                className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
                    scrolled
                        ? "bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/5"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                        <Cpu className="h-5 w-5" />
                    </div>
                    <span className={cn(
                        "text-lg font-bold tracking-tight transition-colors",
                        scrolled ? "text-foreground" : "text-foreground dark:text-white"
                    )}>
                        AIPerform
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium rounded-full text-foreground/80 hover:text-primary hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button
                        size="sm"
                        className="rounded-full px-6 bg-foreground dark:bg-white text-background dark:text-black hover:bg-foreground/90 dark:hover:bg-white/90 shadow-lg transition-all hover:shadow-xl font-semibold"
                    >
                        Get Demo
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-4 fade-in-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="font-medium text-foreground">{link.label}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                    ))}
                    <div className="h-px bg-border my-2"></div>
                    <Button className="w-full justify-center rounded-xl bg-primary hover:bg-primary/90" onClick={() => setIsOpen(false)}>
                        Get Demo
                    </Button>
                </div>
            )}
        </header>
    );
}
