---
id: "3"
title: '2. Static Generation'
excerpt: 'How to pre-render a page on the server'
coverImage: ''
module: 'Dynamic routes'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: '/assets/course/working-with-images/img_introduction.jpg'
---

The main aim of this microsite is to be pre-rendered on the server.

We want the server to:

1. Get the content from our markdown files
2. Generate the final html files and
3. Serve them as a static files.

This is called **static site generation** or short **SSG**.

`getStaticProps` is the function where can you make an API call or access the file system to **generate the props that will be used for SSG**.

This function needs to return an object containing `props` that will be used to pre-render this page.

On the home page we have already used `getStaticProps` to pass `allPosts` as a `prop` to the home component.

```javascript
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
```

Now we need to do that same for the dynamic route `/post/[id].js`.
