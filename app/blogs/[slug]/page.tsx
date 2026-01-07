"use client";

import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                {/* Back Button */}
                <Link href="/blogs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                {/* Header Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-6">
                    <span className="text-primary font-semibold uppercase tracking-wide">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    {post.title}
                </h1>

                {/* Cover Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none text-gray-700 dark:text-gray-300 leading-loose">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* CTA */}
                <div className="mt-20 p-8 md:p-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to transform your workforce?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                        Join thousands of forward-thinking companies using SpaceHR to drive performance and engagement.
                    </p>
                    <Link href="https://cad.spaceaiapp.com/login">
                        <Button size="lg" className="rounded-full px-8 font-semibold">
                            Get Started for Free
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
