import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/seo';

const routes = [
  '/',
  '/company',
  '/portafolio',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
