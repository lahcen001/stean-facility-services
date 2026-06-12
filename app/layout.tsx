import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";

const siteUrl = "https://www.steinfacilityservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stein Facility Services | Commercial Cleaning Services — Kearny, NJ",
    template: "%s | Stein Facility Services",
  },
  description:
    "Stein Facility Services provides reliable commercial janitorial and cleaning services throughout Kearny and Northern New Jersey. Licensed, insured, and locally owned. Offices, medical facilities, gyms, retail, schools, and more.",
  keywords: [
    "commercial cleaning Kearny NJ",
    "janitorial services New Jersey",
    "office cleaning company NJ",
    "Stein Facility Services",
    "commercial janitorial services Northern New Jersey",
    "day porter services NJ",
    "floor care and maintenance NJ",
    "medical office cleaning NJ",
    "gym cleaning services NJ",
  ],
  authors: [{ name: "Stein Facility Services" }],
  creator: "Stein Facility Services",
  publisher: "Stein Facility Services",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Stein Facility Services",
    title: "Stein Facility Services | Commercial Cleaning Services — Kearny, NJ",
    description:
      "Reliable commercial janitorial and cleaning services throughout Kearny and Northern New Jersey. Licensed, insured, and locally owned.",
    locale: "en_US",
    images: [
      {
        url: "/logo/vanguard-janitorial-logo.png",
        width: 500,
        height: 500,
        alt: "Stein Facility Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stein Facility Services | Commercial Cleaning Services — Kearny, NJ",
    description:
      "Reliable commercial janitorial and cleaning services throughout Kearny and Northern New Jersey. Licensed, insured, and locally owned.",
    images: ["/logo/vanguard-janitorial-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/logo/vanguard-janitorial-logo.png",
    apple: "/logo/vanguard-janitorial-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Stein Facility Services",
  alternateName: "Stein Janitorial",
  description:
    "Stein Facility Services provides reliable commercial janitorial and cleaning services throughout Kearny and Northern New Jersey, including office cleaning, medical facility cleaning, gym cleaning, retail cleaning, day porter services, floor care, and green cleaning.",
  url: siteUrl,
  telephone: "+1-862-270-7055",
  image: `${siteUrl}/logo/vanguard-janitorial-logo.png`,
  logo: `${siteUrl}/logo/vanguard-janitorial-logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kearny",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  serviceType: [
    "Office Cleaning",
    "Medical Office Cleaning",
    "Retail Store Cleaning",
    "Gym & Fitness Center Cleaning",
    "School & Office Building Cleaning",
    "Day Porter Services",
    "Floor Care & Maintenance",
    "Restroom Sanitization",
    "Post-Construction Cleanup",
    "Green Cleaning Solutions",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Loader />
        {children}
      </body>
    </html>
  );
}
