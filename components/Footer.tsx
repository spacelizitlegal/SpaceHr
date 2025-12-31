import Link from "next/link";
import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b1121] text-white border-t border-white/5 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                <Cpu className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">AIPerform</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            The intelligent performance management platform for modern enterprises. Align, train, and grow your workforce with AI.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 tracking-wide">Product</h3>
                        <ul className="space-y-4">
                            {['Platform Overview', 'Features', 'Solutions', 'Pricing', 'Enterprise'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 tracking-wide">Resources</h3>
                        <ul className="space-y-4">
                            {['Blog', 'Customer Stories', 'Documentation', 'Help Center', 'API Reference'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Legal', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email address" className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-primary text-white" />
                                <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors">Go</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 AIPerform Inc. All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
