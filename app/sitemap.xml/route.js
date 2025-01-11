// app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // Lista todas las rutas que quieres *potencialmente* incluir.
  const pages = [
    '',                     // Representa la página principal (home -> "/")
    'catalogo',
    'recomendaciones',
    'centros',
    'garantias-y-ajustes',
  ];

  // Filtra para excluir "garantias-y-ajustes"
  const filteredPages = pages.filter((page) => page !== 'garantias-y-ajustes');

  // Ajusta el dominio base a tu dominio real
  const baseUrl = 'https://bateriaencasa.com';

  // Generamos el contenido XML
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${filteredPages
        .map((page) => {
          // Si page es '', corresponde a la home. Caso contrario, /page
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

