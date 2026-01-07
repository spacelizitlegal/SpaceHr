import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b1121] text-white border-t border-white/5 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative h-8 w-8 hover:scale-110 transition-transform duration-300">
                                <img
                                    src="/Space_S_Logo_New.png"
                                    alt="Space HR"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                Space HR
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            The intelligent performance management platform for modern enterprises. Align, train, and grow your workforce with AI.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 tracking-wide">Product</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/features" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 tracking-wide">Resources</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/blogs" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                    Courses
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 AIPerform Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
