"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Send,
    ArrowRight,
    CheckCircle,
    Clock,
    Headphones,
    Building2,
    Sparkles,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        employees: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission
        await new Promise((res) => setTimeout(res, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Get a reply within 1 business day",
            value: "hello@spaceaiapp.com",
            href: "mailto:hello@spaceaiapp.com",
            color: "from-primary to-cyan-500",
            bgColor: "bg-primary/10",
        },
        {
            icon: Phone,
            title: "Call Sales",
            description: "Mon – Fri, 9 AM – 6 PM IST",
            value: "+91 80 1234 5678",
            href: "tel:+918012345678",
            color: "from-violet-500 to-purple-600",
            bgColor: "bg-violet-500/10",
        },
        {
            icon: Headphones,
            title: "Customer Support",
            description: "Existing customer? We're here.",
            value: "support@spaceaiapp.com",
            href: "mailto:support@spaceaiapp.com",
            color: "from-emerald-500 to-teal-600",
            bgColor: "bg-emerald-500/10",
        },
        {
            icon: MapPin,
            title: "Our Office",
            description: "Come say hello in person",
            value: "Bangalore, India",
            href: "https://maps.google.com",
            color: "from-pink-500 to-rose-600",
            bgColor: "bg-pink-500/10",
        },
    ];

    const reasons = [
        { icon: Clock, text: "Response within 24 hours" },
        { icon: Building2, text: "Dedicated account manager" },
        { icon: CheckCircle, text: "No commitment required" },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121]">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://spacehr.net"},{"@type":"ListItem","position":2,"name":"Contact","item":"https://spacehr.net/contact"}]}` }} />
            {/* HERO */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
                {/* Gradient blobs */}
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Sparkles className="w-4 h-4" />
                            We&apos;d Love to Hear from You
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            Get in{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-cyan-400">
                                Touch
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            Whether you&apos;re exploring Space HR for the first time or need
                            support as an existing customer — our team is ready to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT METHODS */}
            <section className="pb-16 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, i) => (
                            <a
                                key={i}
                                href={method.href}
                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <method.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                                    {method.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    {method.description}
                                </p>
                                <p className="text-sm font-semibold text-primary dark:text-cyan-400">
                                    {method.value}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORM + SIDE INFO */}
            <section className="py-16 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Left info column */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-4">
                                    <MessageSquare className="w-4 h-4" />
                                    Talk to Sales
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    Start Your{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                                        Journey
                                    </span>{" "}
                                    with Space HR
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Fill in the form and one of our HR specialists will reach out
                                    to walk you through how Space HR can fit your business.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {reasons.map((r, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                            <r.icon className="w-4 h-4 text-primary dark:text-cyan-400" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                                            {r.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial snippet */}
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-2xl" />
                                <div className="relative">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic mb-4">
                                        &quot;The Space HR team was incredibly helpful during our
                                        onboarding. We had our entire payroll migrated in under a
                                        week.&quot;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                                            R
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                Rahul Sharma
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                HR Director, TechCorp India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right form column */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 shadow-xl text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                                        Thanks for reaching out. Our team will get back to you
                                        within 1 business day.
                                    </p>
                                    <Link href="/">
                                        <Button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white rounded-full px-8">
                                            Back to Home
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl">
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Jane Smith"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                    Work Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="jane@company.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Acme Corp"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                    Company Size
                                                </label>
                                                <select
                                                    name="employees"
                                                    value={formData.employees}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                >
                                                    <option value="">Select size</option>
                                                    <option value="1-50">1 – 50 employees</option>
                                                    <option value="51-200">51 – 200 employees</option>
                                                    <option value="201-500">201 – 500 employees</option>
                                                    <option value="501-1000">501 – 1,000 employees</option>
                                                    <option value="1000+">1,000+ employees</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                Subject <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            >
                                                <option value="">What can we help you with?</option>
                                                <option value="demo">Request a demo</option>
                                                <option value="pricing">Pricing & plans</option>
                                                <option value="support">Technical support</option>
                                                <option value="partnership">Partnership inquiry</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us a bit about your organization and what you're looking for…"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={loading}
                                            className="w-full h-14 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg
                                                        className="animate-spin h-5 w-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8v8H4z"
                                                        />
                                                    </svg>
                                                    Sending…
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Send Message
                                                    <Send className="w-5 h-5" />
                                                </span>
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                                            By submitting, you agree to our{" "}
                                            <Link
                                                href="/privacy"
                                                className="underline hover:text-primary transition-colors"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </p>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b] relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Prefer a Live{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400">
                            Demo?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        See Space HR in action with a personalized walkthrough from our
                        product team.
                    </p>
                    <Link href="/request-a-demo">
                        <Button
                            size="lg"
                            className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 hover:from-pink-400 hover:via-violet-400 hover:to-blue-400 text-white shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 transition-all"
                        >
                            Book a Free Demo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
