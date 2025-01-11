// app/robots.txt/route.js
import { NextResponse } from 'next/server';

// Puedes usar GET o GET()
export async function GET() {
  const content = `
    User-agent: *
    Allow: /
    
    Sitemap: https://www.bateriaencasa.com/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

