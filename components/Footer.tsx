import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            AIPerform
                        </span>
                        <p className="mt-4 text-sm text-uted-foreground max-w-xs text-muted-foreground">
                            Empowering teams to achieve peak performance with AI-driven insights and continuous feedback loops.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Features</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Pricing</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="/blogs" className="text-sm leading-6 text-muted-foreground hover:text-primary">Blog</Link></li>
                            <li><Link href="/courses" className="text-sm leading-6 text-muted-foreground hover:text-primary">Courses</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">About</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Careers</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 flex items-center justify-between">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; 2024 AIPerform Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
