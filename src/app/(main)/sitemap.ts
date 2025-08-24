import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glenncaninguitars.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/for-sale',
    '/doubletops',
    '/players',
    '/gallery',
    '/videos',
    '/ordering',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route === '/for-sale' || route === '/doubletops' ? 0.9 : 0.8,
  }));

  // Note: Add dynamic pages here when individual guitar/player pages are implemented
  // For now, we only have static pages
  
  return [...staticPages];
}