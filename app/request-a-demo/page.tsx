import DemoRequest from "@/components/DemoRequest";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo: AI-Powered HR Management ERP | Space HR",
  description:
    "Schedule a personalized demo of Space HR's AI-powered ERP. See automated payroll, 360° appraisals, tax compliance, and predictive analytics in action.",
  keywords: [
    "HR software demo",
    "payroll software demo",
    "AI HR platform demo",
    "performance management demo",
    "ERP demo request",
    "HR automation demo",
    "Space HR demo",
    "human capital management demo",
    "schedule HR software demo",
    "request HR platform demo",
  ],
  openGraph: {
    title: "Request a Demo | Space HR",
    description:
      "See our AI-powered HR ERP in action. Schedule your personalized demo today.",
    url: "https://spacehr.net/request-a-demo",
    images: ["/og-demo.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/request-a-demo",
  },
};

export default function RequestDemoPage() {
  return <DemoRequest />;
}
