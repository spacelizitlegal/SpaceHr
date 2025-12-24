import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BadgeCheck, Clock, BookOpen, Star, Users, ArrowRight } from "lucide-react";

const courses = [
    {
        title: "AI for Performance Management",
        description: "Learn how to leverage AI tools to give better feedback and track performance metrics.",
        duration: "4 weeks",
        lessons: 12,
        level: "Beginner",
        rating: 4.8,
        reviews: 128,
        students: 1240,
        category: "Management",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Advanced Goal Setting",
        description: "Master the art of setting OKRs and KPIs that align with company vision using AI insights.",
        duration: "3 weeks",
        lessons: 8,
        level: "Intermediate",
        rating: 4.9,
        reviews: 95,
        students: 850,
        category: "Strategy",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Leading High-Performance Teams",
        description: "Strategies for managers to build and sustain high-performing remote and hybrid teams.",
        duration: "6 weeks",
        lessons: 18,
        level: "Advanced",
        rating: 4.7,
        reviews: 210,
        students: 2100,
        category: "Leadership",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Data-Driven Decision Making",
        description: "Understand performance analytics and how to use data to make fair personnel decisions.",
        duration: "5 weeks",
        lessons: 15,
        level: "Intermediate",
        rating: 4.6,
        reviews: 150,
        students: 980,
        category: "Analytics",
        color: "from-emerald-500 to-green-400"
    },
    {
        title: "Feedback Mastery",
        description: "A comprehensive guide to giving and receiving constructive feedback in the AI era.",
        duration: "2 weeks",
        lessons: 6,
        level: "All Levels",
        rating: 4.9,
        reviews: 340,
        students: 3200,
        category: "Communication",
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Culture & Engagement",
        description: "Building a culture of continuous learning and high engagement.",
        duration: "4 weeks",
        lessons: 10,
        level: "Beginner",
        rating: 4.8,
        reviews: 180,
        students: 1500,
        category: "Culture",
        color: "from-pink-500 to-rose-400"
    },
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950">
            {/* Hero Section */}
            <div className="bg-white dark:bg-gray-900 border-b">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-4">
                        New Courses Added
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                        Master Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Management</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Upskill your management team with our expert-led courses designed for the AI-driven workplace.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8">Browse All Courses</Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8">View Learning Paths</Button>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Featured Courses</h2>
                        <p className="text-muted-foreground mt-1">Hand-picked courses to boost your team's performance.</p>
                    </div>
                    <Button variant="ghost" className="hidden sm:flex group">
                        View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group bg-white dark:bg-gray-900">
                            {/* Card Image Area */}
                            <div className={`h-48 bg-gradient-to-br ${course.color} relative p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500`}>
                                <div className="flex justify-between items-start">
                                    <span className="bg-white/90 dark:bg-black/50 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded text-black dark:text-white">
                                        {course.category}
                                    </span>
                                </div>
                                <div className="text-white">
                                    <BookOpen className="h-10 w-10 text-white/80 mb-2" />
                                </div>
                            </div>

                            <CardHeader className="space-y-2 pb-2">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                                        {course.title}
                                    </CardTitle>
                                </div>
                                <CardDescription className="line-clamp-2 text-sm">{course.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow pt-2">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center">
                                        <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center">
                                        <BadgeCheck className="mr-1.5 h-4 w-4 text-gray-400" />
                                        {course.lessons} lessons
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium text-gray-900 dark:text-gray-100">{course.rating}</span>
                                        <span className="text-gray-400">({course.reviews || 45})</span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <Users className="h-4 w-4 mr-1.5" />
                                        {course.students.toLocaleString()}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-2 pb-6">
                                <Button className="w-full rounded-full transition-all" variant="outline">
                                    Enroll Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
