import type { MetadataRoute } from "next";
import { services, SITE_URL } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/sluzby`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/realizacie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/sluzby/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
