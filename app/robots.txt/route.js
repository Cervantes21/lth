// app/robots.txt/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const content = `
    User-agent: *
    Disallow: /garantias-y-ajustes
    Disallow: /search
    Disallow: /api
    Disallow: /id

    Allow: /

    Sitemap: https://bateriaencasa.com/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
