export const siteConfig = {
  title: "Hotel.com",
  keywords: [],
  description: "",
} as const;

export const languages = {
  en: "English",
  fr: "Français",
} as const;

export const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Hotels", url: "/#hotels" },
  { name: "Services", url: "/#services" },
  // { name: "Blog", url: "/blog" },
  { name: "FAQs", url: "/#faqs" },
  { name: "Contact", url: "/#contact" },
];

export function formatDate(
  date: Date,
  opts?: Intl.DateTimeFormatOptions,
): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...opts,
  });
}

export const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];