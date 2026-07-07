import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Space HR - Get Support or Request a Demo",
  description:
    "Reach the Space HR team for product demos, support, partnerships, or general inquiries. Available Monday–Friday 9am–6pm EST. Free trial available.",
  keywords: [
    "contact Space HR",
    "HR software support",
    "request demo",
    "Space HR help",
    "HR platform contact",
  ],
  alternates: {
    canonical: "https://spacehr.net/contact",
  },
  openGraph: {
    title: "Contact Space HR - Get Support or Request a Demo",
    description:
      "Reach the Space HR team for demos, support, or partnerships. Fast response guaranteed.",
    url: "https://spacehr.net/contact",
    siteName: "Space HR",
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
