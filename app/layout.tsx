import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spacehr.net"),
  title: {
    default: "Space HR | AI-Powered Performance Management Platform ",
    template: "%s | Space HR",
  },
  description:
    "Transform your workplace with Space HR's AI-powered performance management platform. Streamline appraisals, automate workflows, and drive employee growth with intelligent analytics.",
  keywords: [
    "HR software",
    "performance management",
    "AI HR platform",
    "employee appraisal",
    "performance reviews",
    "talent management",
    "HR automation",
    "workforce analytics",
    "employee engagement",
    "HR technology",
    "360 feedback",
    "OKR software",
    "employee development",
    "HR chatbot",
    "hr",
    "hrms",
    "human resource management",
    "human resource software",
    "best hr software",
    "hr management software",
    "hr management system",
    "hris",
  ],
  authors: [{ name: "Space HR" }],
  creator: "Space HR",
  publisher: "Space HR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacehr.net",
    siteName: "Space HR",
    title: "Space HR | AI-Powered Performance Management Platform",
    description:
      "Transform your workplace with Space HR's AI-powered performance management platform. Streamline appraisals, automate workflows, and drive employee growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR | AI-Powered Performance Management Platform",
    description:
      "Transform your workplace with AI-powered performance management. Streamline appraisals and drive employee growth.",
    images: ["/og-image.jpg"],
    creator: "@SpaceHR",
  },
  alternates: {
    canonical: "https://spacehr.net",
  },
  verification: {
    google: "MJLrhzEJERw1j9RMKx272D8n3whd7L_71XQTi2_puqY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
