import siteData from '@/data/site.json'

export function generateMetadata(pageTitle = '', pageDescription = '') {
  const title = pageTitle ? `${pageTitle} | ${siteData.name}` : siteData.name
  const description = pageDescription || siteData.description

  return {
    title,
    description,
    keywords: siteData.keywords.join(', '),
    authors: [{ name: siteData.name }],
    creator: siteData.name,
    publisher: siteData.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: 'https://mon-portfolio-zeta-bice.vercel.app',
      title,
      description,
      siteName: siteData.name,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: siteData.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@adama_djan',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://mon-portfolio-zeta-bice.vercel.app',
    },
  }
}

export function generateSitemap() {
  const baseUrl = 'https://mon-portfolio-zeta-bice.vercel.app'
  
  const routes = [
    '',
    '/about',
    '/formation',
    '/education',
    '/certifications',
    '/experience',
    '/skills',
    '/projects',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
