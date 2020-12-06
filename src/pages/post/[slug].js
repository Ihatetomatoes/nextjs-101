import React from "react";
import { useEffect } from "react";
import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import markdownToHtml from "@lib/markdownToHtml";
import {
  Author,
  Header,
  Layout,
  Navigation,
  PageHead,
  SignupForm,
  UnitCard,
  UnitVideo,
} from "@components/index";
import { videoType } from "@config";
import useLocalStorage from "@hooks/useLocalStorage";
import { getAllPosts, getPostBySlug } from "@lib/api";
import { siteName } from "@config";

const Sidebar = dynamic(() => import("@components/Sidebar"), {
  ssr: false,
});

const Unit = ({ unit, allUnits = [], router }) => {
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
      <PageHead title={`${unit.title} - ${siteName}`} />
      <main className="bg-white p-4 mb-4 md:p-8 border-gray-200 min-h-full col-span-9">
        <Header />
        <UnitCard unit={unit} />
        {unit.videoId && <UnitVideo type={videoType} videoId={unit.videoId} />}

        <article
          className="prose md:prose-md"
          dangerouslySetInnerHTML={{ __html: unit.content }}
        />
        <Navigation currentUnit={unit.order} units={allUnits} />
        <SignupForm
          isSlim
          title="Enjoying this course? Subscribe for more content from Petr."
        />
        <Author />
      </main>
      <div className="col-span-3 relative">
        <Sidebar isSticky units={allUnits} progress={progress} />
      </div>
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
    "videoId",
    "coverImage",
  ]);
  const content = await markdownToHtml(unit.content || "");

  const allUnits = getAllPosts([
    "title",
    "order",
    "slug",
    "module",
    "duration",
  ]);

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
