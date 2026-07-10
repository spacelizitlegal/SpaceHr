export interface ContactEntry {
  country: string;
  number: string;
  href: string;
}

export const contactNumbers: ContactEntry[] = [
  { country: "USA", number: "+1 646 421 5740", href: "tel:+16464215740" },
  { country: "Singapore", number: "+65 86 111 900", href: "tel:+6586111900" },
  { country: "Dubai", number: "+971 56 256 7509", href: "tel:+971562567509" },
  { country: "India", number: "+91 22 1234 5678", href: "tel:+912212345678" },
  { country: "Kuwait", number: "+965 9724 3755", href: "tel:+96597243755" },
  { country: "Canada", number: "+1 (979) 326-9493", href: "tel:+19793269493" },
  { country: "Hong Kong", number: "+852 1234 5678", href: "tel:+85212345678" },
];

export const contactByCountry: Record<string, ContactEntry> = {};
for (const c of contactNumbers) {
  contactByCountry[c.country] = c;
}
