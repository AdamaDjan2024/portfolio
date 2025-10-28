import { generateSitemap } from "@/utils/seo";

/**
 * Route handler pour la génération du sitemap XML
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function GET() {
  // Génération du sitemap en utilisant l'utilitaire
  const sitemap = generateSitemap();
  
  // Formatage selon les spécifications de Next.js pour le sitemap
  return sitemap.map((item) => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
