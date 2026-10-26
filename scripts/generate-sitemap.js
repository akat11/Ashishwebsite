import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const { productCategories } = await import('../src/data/categories.ts');
  const { products } = await import('../src/data/products.ts');

  const BASE_URL = 'https://vinayaksurgicals.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${BASE_URL}/about-us`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/products`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${BASE_URL}/departments`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${BASE_URL}/brands`, priority: '0.6', changefreq: 'monthly' },
    { loc: `${BASE_URL}/services`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${BASE_URL}/faq`, priority: '0.6', changefreq: 'monthly' },
    { loc: `${BASE_URL}/contact-us`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/request-a-quote`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/sitemap`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${BASE_URL}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${BASE_URL}/terms-and-conditions`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${BASE_URL}/shipping-policy`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${BASE_URL}/returns-and-claims`, priority: '0.3', changefreq: 'yearly' },
  ];

  const categoryRoutes = productCategories.map((cat) => ({
    loc: `${BASE_URL}/products/${cat.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const productRoutes = products.map((prod) => ({
    loc: `${BASE_URL}/products/${prod.category}/${prod.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticRoutes, ...categoryRoutes, ...productRoutes];

  const xmlEntries = allUrls
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml, 'utf-8');
  console.log(`Generated sitemap with ${allUrls.length} valid URLs at ${outputPath}`);
}

generateSitemap().catch(console.error);
