---
id: "3"
order: 3
title: 'Document Structure and Routing'
excerpt: 'Review Next.js core components and routing'
coverImage: ''
module: ''
videoId: ''
---

## Document Structure

### App

`_app.js` is a special component that is used to initialize every page. This is a place where you would do **anything that needs to affect all pages**, eg. load a **global stylesheet**.

```jsx
// /pages/_app.js
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

### Document

`_document.js` forms the overall structure of the **HTML**. If you need need to modify the **html** or **body** tags, `_document.js` is the place to do this.

If you are chasing the perfect Lighthouse score, you will need to add the **lang attribute to the html tag**.

We will also change the page background color here. Set the className for body to `bg-gray-100`.

```jsx
// /pages/_document_.js
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## File System Routing

Any file in the pages directory, except the Next.js specific `_app.js` and `_document.js` files, will be rendered as a page (`route`) in the browser.

```text
src/
|-- pages/
|---- index.js
|---- page-two.js

```

To test this, create `/pages/page-two.js` with the following content.

```jsx
import Link from 'next/link';

export default function PageTwo() {
  return (
    <h1>Page Two</h1>
    <Link href="/"><a>Go back to home</a></Link>
  );
}

```

To link to it, use Next.js `<Link />` component in the home page `index.js`.

```jsx
// import Link
import Link from 'next/link';

// Use link
<Link href="/page-two"><a>Go to Page Two</a></Link>
```

The [Link component]((https://nextjs.org/docs/api-reference/next/link)) will trigger **client side navigation** between the pages, without any page refresh.

```jsx
// external link - don't use <Link />
<a href="https://ihatetomatoes.net">Go to Ihatetomatoes</a>

// a link with CSS class or other attribute
<Link href="/page-two"><a className="my-class">Go to Page Two</a></Link>
```

> Next.js also **automatically prefetches any linked pages**, this results in almost **instant navigation** between pages.

## Dynamic Routes

Creating files for each route might be useful for some apps, but you will most likely also need a **dynamic route**.

Something like `/customer/[id].js` or `/post/[slug].js`, where based on the **dynamic part of the url** you can load a specific data.

`[id]` and `[slug]` are the special keywords and will be dynamically passed into the page as a **query parameter**.

To access this dynamic value, use `useRouter` hook or `withRouter` inside of the page component.

```jsx
// with useRouter
import { useRouter } from "next/router";

export default function Customer() {
  const router = useRouter();
  return <h1>Customer {router.query.id}</h1>;
}

// with withRouter
import { withRouter } from 'next/router'

function Order({ router }) {
  return <p>Order {router.query.id}</p>
}

export default withRouter(Order)
```

Enough about [routes and navigation](https://nextjs.org/docs/routing/introduction), we are creating a landing page right?
