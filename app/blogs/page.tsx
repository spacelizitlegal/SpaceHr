import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
    {
        title: "The Future of Performance Management is AI",
        summary: "Discover how Artificial Intelligence is reshaping how we evaluate and improve employee performance, moving away from bias and towards data-driven growht.",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        category: "Technology",
        imageGrad: "from-blue-500 to-cyan-500"
    },
    {
        title: "5 Strategies for Remote Team Alignment",
        summary: "Keep your distributed team aligned and motivated with these proven strategies that focus on asynchronous communication and clear goal setting.",
        date: "Dec 10, 2024",
        readTime: "4 min read",
        category: "Management",
        imageGrad: "from-purple-500 to-pink-500"
    },
    {
        title: "Why Annual Reviews are Dead",
        summary: "The data is in: continuous feedback loops drastically outperform the stressful annual review process. Here is how to make the switch.",
        date: "Dec 05, 2024",
        readTime: "6 min read",
        category: "HR Trends",
        imageGrad: "from-orange-500 to-red-500"
    },
    {
        title: "Building Psychological Safety at Work",
        summary: "How to create an environment where employees feel safe to take risks, be vulnerable, and admit mistakes without fear of punishment.",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Culture",
        imageGrad: "from-emerald-500 to-green-500"
    },
    {
        title: "The ROI of Employee Wellbeing",
        summary: "Investing in mental health and wellbeing isn't just the right thing to do—it drives significant ROI through retention and productivity.",
        date: "Nov 22, 2024",
        readTime: "5 min read",
        category: "Wellbeing",
        imageGrad: "from-teal-500 to-blue-500"
    },
    {
        title: "Navigating Hybrid Work Challenges",
        summary: "Practical tips for managers handling the complexities of proximity bias and communication gaps in hybrid work environments.",
        date: "Nov 15, 2024",
        readTime: "6 min read",
        category: "Hybrid Work",
        imageGrad: "from-indigo-500 to-purple-600"
    },
];

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950">
            <div className="bg-white dark:bg-gray-900 border-b pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Blog</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                        Insights for the Modern Leader
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Deep dives into performance management, AI technology, and organizational culture.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col h-full border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white dark:bg-gray-900">
                            <div className={`h-48 bg-gradient-to-br ${post.imageGrad} w-full opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full px-2.5">
                                        {post.category}
                                    </span>
                                </div>
                                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href="#">{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow pt-2">
                                <CardDescription className="text-base line-clamp-3 text-gray-600 dark:text-gray-400">
                                    {post.summary}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm text-muted-foreground bg-gray-50/50 dark:bg-gray-900/50">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="mr-1.5 h-3.5 w-3.5" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="rounded-full px-8">Load More Articles</Button>
                </div>
            </div>
        </div>
    );
}
