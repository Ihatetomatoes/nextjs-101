import {
  Author,
  Header,
  Hero,
  Layout,
  Module,
  PageHead,
  Unit,
} from "@components/index";
import { author, siteName } from "@config";
import useLocalStorage from "@hooks/useLocalStorage";
import { getAllPosts } from "@lib/api";
import { groupBy } from "@utils/utils";
import React from "react";

export default function Home({ allPosts }) {
  const [progress] = useLocalStorage("progress", []);

  const modules = groupBy(allPosts, "module");

  return (
    <Layout>
      <PageHead title={`${siteName} by ${author}`} />
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
    "duration",
  ]);

  return {
    props: { allPosts },
  };
}
