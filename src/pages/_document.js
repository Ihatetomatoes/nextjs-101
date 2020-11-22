import { GA_TRACKING_ID } from "@lib/gtag";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    const isProduction = process.env.NODE_ENV === "production";

    return {
      ...initialProps,
      isProduction,
    };
  }
  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body className="antialiased bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
