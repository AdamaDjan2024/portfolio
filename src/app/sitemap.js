import { generateSitemap } from '@/utils/seo'

export default async function sitemap() {
  const baseUrl = 'https://mon-portfolio-zeta-bice.vercel.app'
  const sitemap = generateSitemap()
  
  return sitemap.map(item => ({
    url: `${baseUrl}${item.url}`,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))
}
