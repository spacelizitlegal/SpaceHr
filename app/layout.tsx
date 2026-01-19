import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
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
    default: "Space HR | AI-Powered Performance Management Platform",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NQWZKP5D');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${outfit.className} antialiased flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQWZKP5D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
