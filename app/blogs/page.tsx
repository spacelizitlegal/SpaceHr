import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const posts = [
    {
        title: "The Future of Performance Management is AI",
        summary: "Discover how Artificial Intelligence is reshaping how we evaluate and improve employee performance.",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        category: "Technology",
    },
    {
        title: "5 Strategies for Remote Team Alignment",
        summary: "Keep your distributed team aligned and motivated with these proven strategies.",
        date: "Dec 10, 2024",
        readTime: "4 min read",
        category: "Management",
    },
    {
        title: "Why Annual Reviews are Dead",
        summary: "Move towards continuous feedback loops and ditch the stressful annual review process.",
        date: "Dec 05, 2024",
        readTime: "6 min read",
        category: "HR Trends",
    },
    {
        title: "Building Psychological Safety at Work",
        summary: "How to create an environment where employees feel safe to take risks and be vulnerable.",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Culture",
    },
];

export default function BlogsPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Insights</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Trends, tips, and strategies for modern leadership and performance management.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {posts.map((post, index) => (
                    <Card key={index} className="flex flex-col hover:shadow-md transition-shadow border-none bg-muted/30">
                        <CardHeader>
                            <div className="text-sm text-primary mb-2 font-medium">{post.category}</div>
                            <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                                <Link href="#">{post.title}</Link>
                            </CardTitle>
                            <div className="text-sm text-muted-foreground mt-2 space-x-2">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base line-clamp-3">
                                {post.summary}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="px-0 text-primary">Read full article &rarr;</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
