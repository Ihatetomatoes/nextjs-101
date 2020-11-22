import * as gtag from "@lib/gtag";
import "@styles/syntaxHighlight.css";
import "@styles/tailwind.css";
import Router from "next/router";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
