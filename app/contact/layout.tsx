import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SpaceHR - Get Support or Request a Demo",
  description:
    "Reach the SpaceHR team for product demos, support, partnerships, or general inquiries. Available Monday–Friday 9am–6pm EST. Free trial available.",
  keywords: [
    "contact SpaceHR",
    "HR software support",
    "request demo",
    "SpaceHR help",
    "HR platform contact",
  ],
  alternates: {
    canonical: "https://spacehr.net/contact",
  },
  openGraph: {
    title: "Contact SpaceHR - Get Support or Request a Demo",
    description:
      "Reach the SpaceHR team for demos, support, or partnerships. Fast response guaranteed.",
    url: "https://spacehr.net/contact",
    siteName: "SpaceHR",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
