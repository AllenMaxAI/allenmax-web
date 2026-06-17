import type { MetadataRoute } from 'next';

const siteUrl = 'https://allenmax.com';

const routes = [
  '/',
  '/beneficios',
  '/contacto',
  '/cookies',
  '/crm',
  '/faq',
  '/legal',
  '/privacidad',
  '/proceso',
  '/servicios',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
