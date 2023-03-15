function generateSiteMap(tags) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
     ${tags
      ?.map((tag) => {
        return `
        <url>
      <loc>${`${import.meta.env.PUBLIC_SITE_URL}/tag/${tag?.slug}/`}</loc>
      <lastmod>${tag?.updated_at}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>

     `;
      })
      .join('')}
   </urlset>
 `;
}

export async function get({ params, request }) {
  let data = {};
  try {
    const response = await fetch(import.meta.env.PUBLIC_DEGA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Space': import.meta.env.PUBLIC_SPACE_ID,
        'X-Dega-API-Key': import.meta.env.PUBLIC_DEGA_API_KEY,
      },
      body: JSON.stringify({
        query: `
        query SitemapQuery {
          sitemap {
            tags {
              slug
              id
              created_at
              published_date
              updated_at
            }
          }
        }`,
      }),
    });

    if (response.status !== 200) {
      throw new Error(
        'Failed to fetch data. Response code: ' + response.status
      );
    }
    const json = await response.json();
    data = json.data;
    const sitemap = await generateSiteMap(data?.sitemap?.tags);
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
