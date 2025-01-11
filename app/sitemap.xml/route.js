// app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

export async function GET() {

  const pages = [
    '',               // Representa la página principal (home -> "/")
    'catalogo',
    'centros',
    'evolution',
    'hitec',
    'lth',
    'moto',
    'nosotros',
    'protect',
    'recomendaciones',
    'taxi',
  ];

  const baseUrl = 'https://bateriaencasa.com';

  // Generamos el contenido XML del sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const route = page ? `/${page}` : '';
          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `.trim();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
