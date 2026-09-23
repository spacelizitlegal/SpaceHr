import { Metadata } from "next";
import { getCareerBySlug } from "@/lib/careersData";
import { notFound } from "next/navigation";
import { CareerDetail } from "@/components/CareerDetail";

const career = getCareerBySlug("senior-mern-developer");

export const metadata: Metadata = {
  title: "Senior MERN Stack Developer — Careers at Space HR",
  description:
    "Apply to be a Senior MERN Stack Developer at Space HR. Lead development of cutting-edge HR applications with expertise in the MERN stack. 5 to 10 years experience. Remote role.",
  keywords: [
    "senior MERN stack developer job",
    "senior React developer job",
    "senior full stack developer job",
    "remote senior developer job",
    "Space HR careers",
  ],
  openGraph: {
    title: "Senior MERN Stack Developer — Careers at Space HR",
    description:
      "Lead development of cutting-edge HR applications with expertise in the MERN stack: React, Next.js, MongoDB, NestJS, GraphQL, and Node.js.",
    type: "website",
    url: "https://spacehr.net/careers/senior-mern-developer",
    siteName: "Space HR",
    images: [
      {
        url: "/office-team-presentation.webp",
        width: 1200,
        height: 630,
        alt: "Senior MERN Stack Developer at Space HR",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/careers/senior-mern-developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior MERN Stack Developer — Careers at Space HR",
    description:
      "Senior MERN Stack Developer (Remote, 5–10 yrs) at Space HR — lead the MERN stack behind an AI-powered HR platform.",
    images: ["/office-team-presentation.webp"],
  },
};

export default function SeniorMernDeveloperPage() {
  if (!career) {
    notFound();
  }
  return <CareerDetail career={career} />;
}