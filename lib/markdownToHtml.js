import remark from "remark";
import headings from "remark-autolink-headings";
import html from "remark-html";
import prism from "remark-prism";
import slug from "remark-slug";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(slug)
    .use(headings)
    .use(html)
    .use(prism, { showSpotlight: true })
    .process(markdown);
  return result.toString();
}
