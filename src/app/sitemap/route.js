import { generateSitemap } from '@/utils/seo'

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default async function sitemap() {
  const sitemap = generateSitemap()
  return sitemap.map((item) => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))
}