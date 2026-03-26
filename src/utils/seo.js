import siteData from "@/data/site.json";

function normalizeSiteUrl(url) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl() {
  const deploymentUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  if (deploymentUrl) {
    const absoluteUrl = deploymentUrl.startsWith("http")
      ? deploymentUrl
      : `https://${deploymentUrl}`;

    return normalizeSiteUrl(absoluteUrl);
  }

  return normalizeSiteUrl(siteData.siteUrl);
}

export function generateMetadata(
  pageTitle = "",
  pageDescription = "",
  pathname = "/"
) {
  const siteUrl = getSiteUrl();
  const canonicalUrl = new URL(pathname, `${siteUrl}/`).toString();
  const title = pageTitle ? `${pageTitle} | ${siteData.name}` : siteData.name;
  const description = pageDescription || siteData.description;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    keywords: siteData.keywords.join(", "),
    authors: [{ name: siteData.name }],
    creator: siteData.name,
    publisher: siteData.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalUrl,
      title,
      description,
      siteName: siteData.name,
      images: [
        {
          url: siteData.ogImage,
          width: 1200,
          height: 630,
          alt: siteData.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteData.twitterHandle,
      images: [siteData.ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function generateSitemap() {
  const baseUrl = getSiteUrl();

  const routes = [
    "",
    "/about",
    "/formation",
    "/experience",
    "/parcours",
    "/certifications",
    "/projects",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
