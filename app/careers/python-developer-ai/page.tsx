import { Metadata } from "next";
import { getCareerBySlug } from "@/lib/careersData";
import { notFound } from "next/navigation";
import { CareerDetail } from "@/components/CareerDetail";

const career = getCareerBySlug("python-developer-ai");

export const metadata: Metadata = {
  title: "Python Developer — AI/ML | Careers at Space HR",
  description:
    "Apply to be a Python Developer (AI/ML) at Space HR. Design scalable AI systems using Python, Neo4j, RAG pipelines, LLMs, and vLLM optimization. 3 to 5 years experience. Remote role.",
  keywords: [
    "Python AI developer job",
    "ML engineer job",
    "RAG developer job",
    "LLM engineer job",
    "AI developer remote job",
    "Space HR careers",
  ],
  openGraph: {
    title: "Python Developer — AI/ML | Careers at Space HR",
    description:
      "Design scalable AI systems using Python, Neo4j, RAG pipelines, LLMs, and vLLM optimization — powering the Space HR AI concierge and payroll auditor.",
    type: "website",
    url: "https://spacehr.net/careers/python-developer-ai",
    siteName: "Space HR",
    images: [
      {
        url: "/engineering-blueprint-review.webp",
        width: 1200,
        height: 630,
        alt: "Python AI/ML Developer at Space HR",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/careers/python-developer-ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Developer — AI/ML | Careers at Space HR",
    description:
      "Python AI/ML Developer (Remote, 3–5 yrs) at Space HR — RAG pipelines, LLMs, Neo4j, and vLLM optimization.",
    images: ["/engineering-blueprint-review.webp"],
  },
};

export default function PythonDeveloperAiPage() {
  if (!career) {
    notFound();
  }
  return <CareerDetail career={career} />;
}