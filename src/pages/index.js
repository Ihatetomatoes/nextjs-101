import { Author, Header, Hero, Layout, Module, Unit } from "@components/index";
import { author, ogImage, siteDescription, siteName } from "@config";
import useLocalStorage from "@hooks/useLocalStorage";
import { getAllPosts } from "@lib/api";
import { groupBy } from "@utils/utils";
import Head from "next/head";
import React from "react";

export default function Home({ allPosts }) {
  const [progress] = useLocalStorage("progress", []);

  const modules = groupBy(allPosts, "module");

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
      <main className="bg-white p-4 sm:p-8 min-h-full col-span-9">
        <Header />
        <Hero />
        {modules && (
          <ol className="mb-4">
            {modules.map(({ name, units }) => {
              return (
                <div key={name}>
                  <Module module={name} />
                  {units.map((unit) => {
                    const isCompleted = progress.find(
                      (u) => u.path === unit.slug
                    );
                    const unitIndex = allPosts.findIndex(
                      (element) => element.title === unit.title
                    );
                    return (
                      <Unit
                        key={unit.slug}
                        index={unitIndex}
                        isCompleted={isCompleted}
                        unit={unit}
                      />
                    );
                  })}
                </div>
              );
            })}
          </ol>
        )}
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
