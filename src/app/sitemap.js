import { generateSitemap } from '@/utils/seo'

export default async function sitemap() {
  const sitemap = generateSitemap()
  
  return sitemap.map(item => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))
}
