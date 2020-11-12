import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import {
  Header,
  Layout,
  Navigation,
  Sidebar,
  UnitCard,
} from "../../components";

const Unit = ({ unit, allUnits }) => {
  return (
    <Layout>
      <main className="bg-white p-4 sm:p-8 border-gray-200 min-h-full col-span-8 col-start-2">
        <Header />
        <UnitCard unit={unit} />
        <div
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: unit.content }}
        />
        <Navigation currentUnit={unit.order} units={allUnits} />
      </main>
      <Sidebar units={allUnits} />
    </Layout>
  );
};

export default Unit;

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
