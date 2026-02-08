import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://physiocare.com.pl";

const staticPaths = ["", "cennik", "faq", "oferta", "zespol"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      const urlPath = path ? `/${locale}/${path}` : `/${locale}`;
      entries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
