import "@styles/syntaxHighlight.css";
import "@styles/tailwind.css";
import withGA from "next-ga";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGA("G-FRGYMZSF5G", Router)(MyApp);
