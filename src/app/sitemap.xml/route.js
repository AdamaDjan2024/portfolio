<<<<<<< HEAD
import { generateSitemap } from "@/utils/seo";

export const dynamic = "force-static";

export async function GET() {
  const sitemap = generateSitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (item) => `
=======
import { generateSitemap } from '@/utils/seo'

export const dynamic = 'force-static'

export async function GET() {
  const sitemap = generateSitemap()
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((item) => `
>>>>>>> 6466b2e07bf75485326f2b10c988bc6a7c649937
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
<<<<<<< HEAD
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
=======
  </url>`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
>>>>>>> 6466b2e07bf75485326f2b10c988bc6a7c649937
}
