"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
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
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/blogs", label: "Insights" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                AIPerform
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider text-[11px]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="font-medium">
                            Log in
                        </Button>
                        <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20">
                            Get Started
                        </Button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-primary p-2 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl animate-in slide-in-from-top-2">
                    <div className="space-y-1 px-4 pb-6 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center justify-between py-3 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </Link>
                        ))}
                        <div className="flex flex-col space-y-3 mt-6">
                            <Button variant="outline" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                                Log in
                            </Button>
                            <Button className="w-full" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
