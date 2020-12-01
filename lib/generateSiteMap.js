const fs = require("fs");
const globby = require("globby");

(async () => {
  const pages = await globby([
    "src/pages/**/*.js",
    "!src/pages/_*.js",
    "!src/pages/**/[slug].js",
    "!src/pages/api",
    "_posts/*.md",
  ]);

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page
          .replace("pages", "")
          .replace(".js", "")
          .replace(".md", "");
        const route = path === "src//index" ? "" : path;
        const fixedPostRoute = route.replace("_posts", "post");
        return `
    <url>
        <loc>${`https://ihatetomatoes-nextjs-101.vercel.app/${fixedPostRoute}`}</loc>
    </url>
            `;
      })
      .join("")}
</urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
