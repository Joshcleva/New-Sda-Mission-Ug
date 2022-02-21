const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://sdamissionug.com/post/nashimwe-by-ambassadors-of-christ-choir-rwanda",
      changefreq: "daily",
      priority: 0.3,
    },
  ];

  const stream = new sitemapStream({ hostname: `https://${req.headers.host}` });

  res.writHead(200, {
    "content-Type": "application/xml",
  });
    
    const xmlString = await streamTopromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString())

    res.end(xmlString)
};
