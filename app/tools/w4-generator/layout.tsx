import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free W-4 Form Generator 2024 | Fill & Download PDF | Space HR",
  description:
    "Generate your IRS W-4 Employee's Withholding Certificate online in minutes. Fill out your W-4 form digitally and download a completed PDF. Free tool by Space HR.",
  keywords: [
    "w4 form generator",
    "w-4 form 2024",
    "irs w4 online",
    "employee withholding certificate",
    "w4 pdf download",
    "fill out w4 online",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/w4-generator",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free W-4 Form Generator — Fill & Download PDF",
    description:
      "Complete your IRS W-4 form online and download a ready-to-submit PDF. Free tool by Space HR.",
    url: "https://spacehr.net/tools/w4-generator",
    type: "website",
  },
};

export default function W4GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
