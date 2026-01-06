"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogsPage() {

    const featuredPost = {
        title: "The Future of Performance Management is AI-Driven",
        summary: "Discover how Artificial Intelligence is reshaping how we evaluate and improve employee performance, moving away from bias and towards real-time data.",
        date: "Dec 12, 2024",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    };

    const posts = [
        {
            title: "5 Strategies for Remote Team Alignment",
            summary: "Keep your distributed team aligned and motivated with these proven strategies for async work.",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            category: "Management",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Why Annual Reviews are Dead",
            summary: "Continuous feedback loops drastically outperform the stressful annual review process.",
            date: "Dec 05, 2024",
            readTime: "6 min read",
            category: "HR Trends",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Building Psychological Safety",
            summary: "Create an environment where employees feel safe to take risks and be vulnerable.",
            date: "Nov 28, 2024",
            readTime: "7 min read",
            category: "Culture",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The ROI of Employee Wellbeing",
            summary: "Investing in mental health drives significant ROI through retention and productivity.",
            date: "Nov 22, 2024",
            readTime: "5 min read",
            category: "Wellbeing",
            image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Hybrid Work Challenges",
            summary: "Practical tips for managers handling proximity bias and communication gaps.",
            date: "Nov 15, 2024",
            readTime: "6 min read",
            category: "Hybrid Work",
            image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">

            {/* Header */}
            <section className="pt-32 pb-16 border-b border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Insights</p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Perspectives on the future of work.
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Deep dives into leadership, AI technology, and organizational culture.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">

                {/* Featured Post - Large layout */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-bold text-sm tracking-wide uppercase mb-3 block">Featured Story</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            <Link href="#" className="hover:text-primary transition-colors">
                                {featuredPost.title}
                            </Link>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {featuredPost.summary}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-8">
                            <span>{featuredPost.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>{featuredPost.category}</span>
                        </div>
                        <Button className="rounded-full px-6">
                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 dark:bg-gray-800 w-full mb-16"></div>

                {/* Recent Posts Grid */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {posts.map((post, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="h-48 rounded-xl overflow-hidden mb-5 relative bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                        {post.category}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {post.summary}
                                    </p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <Button variant="outline" size="lg" className="rounded-full px-8">View All Articles</Button>
                </div>

            </div>
        </div>
    );
}
