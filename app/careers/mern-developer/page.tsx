import { Metadata } from "next";
import { getCareerBySlug } from "@/lib/careersData";
import { notFound } from "next/navigation";
import { CareerDetail } from "@/components/CareerDetail";

const career = getCareerBySlug("mern-developer");

export const metadata: Metadata = {
  title: "MERN Stack Developer — Careers at Space HR",
  description:
    "Apply to be a MERN Stack Developer at Space HR. Build scalable HR applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js. Freshers welcome. Remote role.",
  keywords: [
    "MERN stack developer job",
    "React developer job",
    "Next.js developer job",
    "remote developer job",
    "fresher developer job",
    "Space HR careers",
  ],
  openGraph: {
    title: "MERN Stack Developer — Careers at Space HR",
    description:
      "Build scalable HR applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js. Freshers welcome. Remote role.",
    type: "website",
    url: "https://spacehr.net/careers/mern-developer",
    siteName: "Space HR",
    images: [
      {
        url: "/team-meeting-collaboration.webp",
        width: 1200,
        height: 630,
        alt: "MERN Stack Developer at Space HR",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/careers/mern-developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Developer — Careers at Space HR",
    description:
      "MERN Stack Developer (Remote, Freshers Welcome) at Space HR — React, Next.js, MongoDB, NestJS, GraphQL, Node.js.",
    images: ["/team-meeting-collaboration.webp"],
  },
};

export default function MernDeveloperPage() {
  if (!career) {
    notFound();
  }
  return <CareerDetail career={career} />;
}