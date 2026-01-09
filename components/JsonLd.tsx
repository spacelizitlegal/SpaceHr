export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Space HR",
  url: "https://spacehr.net",
  logo: "https://spacehr.net/hrlogonly.png",
  description:
    "AI-powered performance management platform for modern enterprises",
  sameAs: [
    "https://twitter.com/SpaceHR",
    "https://www.linkedin.com/company/space-hr",
    "https://www.facebook.com/SpaceHR",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "sales@spacehr.net",
  },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Space HR",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
};
