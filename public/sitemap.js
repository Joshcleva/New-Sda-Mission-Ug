const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://sdamissionug.com/post/nashimwe-by-ambassadors-of-christ-choir-rwanda-car-insurance",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/sifa-by-golden-gate-choir-uganda-get-life-insurance-in-jesus",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/nashimwe-by-ambassadors-of-christ-choir-rwanda",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/ekalenda-by-licoasa-sda-choir-kasese-classes-of-degree",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/ani-alimponya-by-emerald-gospel-singers-kagote-fort-portal-uganda-god-is-our-only-attorney",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/best-sda-nonstop-uganda-2022-sda-mission-story-sda-lesson",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/sweet-by-and-by-with-lyrics-by-bird-youmans",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/nitashinda-by-sarah-uwera",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/when-we-all-get-to-heaven-with-lyrics-classic-gospel-song-hymn-bird-youmans",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/mwana-wanjye-by-sarah-uwera-of-ambassadors-of-christ-rwanda",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://sdamissionug.com/post/baba-nisaidie-by-clovice-mugume-sda-music-2022",
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
