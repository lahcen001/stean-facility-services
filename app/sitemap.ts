import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.steinfacilityservices.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((s) => ({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
