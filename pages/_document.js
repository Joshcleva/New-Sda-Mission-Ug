import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6204542530772663"
            crossorigin="anonymous"
          ></script>
          <meta
            name="google-site-verification"
            content="eIxcH-fGCRQN-AoxQ5UbrGCVdr3wBKROQ-Hc21jGDbo"
          />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6204542530772663"
            crossorigin="anonymous"
          ></script>
          {/* <!-- adsence --> */}
          <ins
            class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6204542530772663"
            data-ad-slot="5284088443"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6204542530772663"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="+20+s9-1r-45+eb"
            data-ad-client="ca-pub-6204542530772663"
            data-ad-slot="1760610555"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6204542530772663"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            style={{ display: "block", textAlign: "center" }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-6204542530772663"
            data-ad-slot="8480085664"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

          <meta
            name="hilltopads-site-verification"
            content="8db77846f683c5d722777f9dc830f75e8a872032"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
