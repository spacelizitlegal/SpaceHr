import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BadgeCheck, Clock, BookOpen } from "lucide-react";

const courses = [
    {
        title: "AI for Performance Management",
        description: "Learn how to leverage AI tools to give better feedback and track performance metrics.",
        duration: "4 weeks",
        lessons: 12,
        level: "Beginner",
    },
    {
        title: "Advanced Goal Setting",
        description: "Master the art of setting OKRs and KPIs that align with company vision using AI insights.",
        duration: "3 weeks",
        lessons: 8,
        level: "Intermediate",
    },
    {
        title: "Leading High-Performance Teams",
        description: "Strategies for managers to build and sustain high-performing remote and hybrid teams.",
        duration: "6 weeks",
        lessons: 18,
        level: "Advanced",
    },
    {
        title: "Data-Driven Decision Making",
        description: "Understand performance analytics and how to use data to make fair personnel decisions.",
        duration: "5 weeks",
        lessons: 15,
        level: "Intermediate",
    },
    {
        title: "Feedback Mastery",
        description: "A comprehensive guide to giving and receiving constructive feedback in the AI era.",
        duration: "2 weeks",
        lessons: 6,
        level: "All Levels",
    },
    {
        title: "Culture & Engagement",
        description: "Building a culture of continuous learning and high engagement.",
        duration: "4 weeks",
        lessons: 10,
        level: "Beginner",
    },
];

export default function CoursesPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Explore Our Courses</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Upskill your management team with our expert-led courses designed for the modern workplace.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-full h-40 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-md mb-4 flex items-center justify-center">
                                <BookOpen className="h-12 w-12 text-primary/40" />
                            </div>
                            <CardTitle className="text-xl">{course.title}</CardTitle>
                            <CardDescription className="mt-2">{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center">
                                    <Clock className="mr-1 h-4 w-4" />
                                    {course.duration}
                                </div>
                                <div className="flex items-center">
                                    <BadgeCheck className="mr-1 h-4 w-4" />
                                    {course.lessons} lessons
                                </div>
                            </div>
                            <div className="text-sm font-medium text-primary bg-primary/10 inline-block px-2 py-1 rounded-md">
                                {course.level}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Enroll Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
