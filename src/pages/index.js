import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/api";
import { Header, Hero, Layout, UnitCard } from "../components";
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
        {allPosts &&
          allPosts.map((unit) => {
            const { slug } = unit;
            return (
              <Link key={slug} href={`post/${slug}`}>
                <a href={`post/${slug}`}>
                  <UnitCard key={slug} unit={unit} />
                </a>
              </Link>
            );
          })}
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
