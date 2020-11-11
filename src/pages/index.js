import Head from "next/head";
import { getAllPosts } from "../../lib/api";
import { Author, Header, Hero, Layout } from "../components";
import { author, ogImage, siteDescription, siteName } from "../components/Meta";

export default function Home({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteName} by ${author}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://ihatetomatoes-nextjs-101.vercel.app/"
          key="url"
        />
        <meta property="og:type" content="website" key="website" />
        <meta
          property="og:title"
          content={`${siteName} by ${author}`}
          key="title"
        />
        <meta property="og:image" content={ogImage} key="image" />
        <meta
          property="og:description"
          content={siteDescription}
          key="description"
        />
      </Head>
      <main className="bg-white p-4 sm:p-8 min-h-full col-span-8 col-start-2">
        <Header />
        <Hero />
        {/* {allPosts && (
          <ol className="mb-4">
            {allPosts.map((unit, index) => {
              const item = unit.module ? (
                <>
                  <Module key={unit.module} module={unit.module} />
                  <Unit key={unit.slug} index={index} unit={unit} />
                </>
              ) : (
                <Unit key={unit.slug} index={index} unit={unit} />
              );
              return item;
            })}
          </ol>
        )} */}
        <Author />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "slug",
    "module",
    "order",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
