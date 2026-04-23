import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Your W-4 PDF | Space HR",
  description: "Complete your details to download your generated W-4 form PDF.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function W4LeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
