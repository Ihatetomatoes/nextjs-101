import "@styles/syntaxHighlight.css";
import "@styles/tailwind.css";
import { MDXEmbedProvider } from 'mdx-embed';

function MyApp({ Component, pageProps }) {
  return <MDXEmbedProvider><Component {...pageProps} /></MDXEmbedProvider>;
}

export default MyApp;
