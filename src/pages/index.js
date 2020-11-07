import Head from "next/head";
import { getAllPosts } from "../../lib/api";
import { Header, Hero, Layout, Unit } from "../components";
import { author, siteName } from "../components/Meta";

export default function Home({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteName} by ${author}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white p-4 sm:p-8 min-h-full col-span-8 col-start-2">
        <Header />
        <Hero />
        {allPosts && (
          <ul>
            {allPosts.map((unit) => (
              <Unit unit={unit} />
            ))}
          </ul>
        )}
        {/* <Author /> */}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "slug",
    "module",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
