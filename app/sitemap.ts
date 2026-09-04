import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/kitchen-car',
    '/space',
    '/plants',
    '/garden',
    '/shop',
    '/event',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
