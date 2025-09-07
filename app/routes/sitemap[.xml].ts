import { LoaderFunctionArgs } from 'react-router';
import BlogConfig from '../../blog.config';
import { articleQuery } from '../queries/article';

export async function loader({ request: _request }: LoaderFunctionArgs) {
  try {
    // 직접 sitemap XML 생성
    const articles = await articleQuery.getArticles();
    
    const staticEntries = [
      { route: '/', changefreq: 'weekly', priority: 0.7, lastmod: undefined },
      { route: '/articles', changefreq: 'daily', priority: 0.8, lastmod: undefined },
    ];
    
    const articleEntries = articles.map((article) => ({
      route: `/articles/${article.category}/${article.permalink ?? article.title}`,
      lastmod: new Date(article.lastUpdatedAt).toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    }));
    
    const allEntries = [...staticEntries, ...articleEntries];
    
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allEntries.map(entry => `  <url>
    <loc>${BlogConfig.site}${entry.route}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400', // 24시간 캐시
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // 오류 발생 시 기본 sitemap 반환
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BlogConfig.site}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BlogConfig.site}/articles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new Response(basicSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
} 
