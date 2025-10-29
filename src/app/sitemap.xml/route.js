import { generateSitemap } from "@/utils/seo";

export const dynamic = "force-static";

export async function GET() {
  const sitemap = generateSitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map((item) => `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${item.lastModified}</lastmod>\n    <changefreq>${item.changeFrequency}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`)
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
