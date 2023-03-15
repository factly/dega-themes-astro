function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
     <url>
      <loc>${`${import.meta.env.PUBLIC_SITE_URL}/sitemap-posts.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>
  <url>
      <loc>${`${import.meta.env.PUBLIC_SITE_URL}/sitemap-authors.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>
  <url>
      <loc>${`${import.meta.env.PUBLIC_SITE_URL}/sitemap-categories.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>
  <url>
      <loc>${`${import.meta.env.PUBLIC_SITE_URL}/sitemap-tags.xml/`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>
   </urlset>
 `;
}

export async function get({ params, request }) {
  try {
    const sitemap = await generateSiteMap();
    return {
      headers: {
        'Content-Type': 'application/xml',
      },
      body: sitemap,
    };
  } catch (e) {
    console.log(e);
    return {
      body: "Error occured",
    }
  }
}
