<<<<<<< HEAD
import { generateSitemap } from "@/utils/seo";

/**
 * Route handler pour la génération du sitemap XML
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function GET() {
  // Génération du sitemap en utilisant l'utilitaire
  const sitemap = generateSitemap();
  
  // Formatage selon les spécifications de Next.js pour le sitemap
=======
import { generateSitemap } from '@/utils/seo'

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default async function sitemap() {
  const sitemap = generateSitemap()
>>>>>>> 6466b2e07bf75485326f2b10c988bc6a7c649937
  return sitemap.map((item) => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
<<<<<<< HEAD
  }));
}
=======
  }))
}
>>>>>>> 6466b2e07bf75485326f2b10c988bc6a7c649937
