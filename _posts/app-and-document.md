---
id: "4"
order: 4
title: 'App and Document'
excerpt: 'How to control HTML of everypage.'
coverImage: ''
module: ''
videoId: ''
duration: '04:05'
---

## Document Structure

### App

`_app.js` is a special component that is used to initialize every page. This is a place where you would do **anything that needs to affect all pages**, eg. load a **global stylesheet**.

Read more about [custom App](https://nextjs.org/docs/advanced-features/custom-app).

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

Read more about [custom Document](https://nextjs.org/docs/advanced-features/custom-document).

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