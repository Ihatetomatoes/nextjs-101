import dynamic from "next/dynamic";
import Head from "next/head";
import { withRouter } from "next/router";
import { useEffect } from "react";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import { Header, Layout, Navigation, UnitCard } from "../../components";
import {
  author,
  ogImage,
  siteDescription,
  siteName,
} from "../../components/Meta";
import useLocalStorage from "../../hooks/useLocalStorage";

const Sidebar = dynamic(() => import("../../components/Sidebar"), {
  ssr: false,
});

const Unit = ({ unit, allUnits, router }) => {
  const { query: slug } = router;

  const [progress, setProgress] = useLocalStorage("progress", []);

  useEffect(() => {
    // add slug to localStorage to track progress
    const newStep = { path: unit.slug, visited: true };
    const alreadyVisited = progress.find((unit) => unit.path === slug.slug);
    !alreadyVisited && setProgress([...progress, newStep]);
  }, [slug]);

  return (
    <Layout>
      <Head>
        <title>{`${siteName} by ${author}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteDescription}
          key="descriptionMeta"
        />
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
      <main className="bg-white p-4 mb-4 sm:p-8 border-gray-200 min-h-full col-span-8 col-start-2">
        <Header />
        <UnitCard unit={unit} />
        <div
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: unit.content }}
        />
        <Navigation currentUnit={unit.order} units={allUnits} />
      </main>
      <Sidebar isSticky units={allUnits} progress={progress} />
    </Layout>
  );
};

export default withRouter(Unit);

export async function getStaticProps({ params }) {
  const unit = getPostBySlug(params.slug, [
    "title",
    "order",
    "date",
    "slug",
    "content",
    "module",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(unit.content || "");

  const allUnits = getAllPosts(["title", "order", "slug", "module"]);

  return {
    props: {
      unit: {
        ...unit,
        content,
      },
      allUnits,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
