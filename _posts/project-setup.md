---
id: "2"
order: 2
title: 'Project Setup'
excerpt: 'Install Next.js and TailwindCSS'
coverImage: ''
module: ''
videoId: ''
---

## Getting Started with Next.js

Similar to [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), Next.js offers a quick way to setup your project using [Create Next App - CNA](https://nextjs.org/docs/api-reference/create-next-app).

**CNA** lets you **quickly spin up** a project with **0 dependencies**, but also give you a flexibility to extend the default configuration later, if you choose to.

> TLTR; You can [**clone the starting files**](#starting-files) at the bottom of this unit, but here is a step by step guide how I did setup this project up.

## 1. Create a Github Repo

Firstly create a `git` repository on your local computer using [GitHub CLI](https://github.com/cli/cli).

```javascript
// create repository using Github CLI
gh repo create [YOUR-REPO-NAME]
cd [YOUR-REPO-NAME]
```

## 2. Create Next App

Inside of your newly created repo spin up a brand new Next.js project

```javascript
npx create-next-app .
```

If everything went well you should see a **success message** like this:

![successfully create Next.js app](/assets/course/introduction/img_creact-next-app.png)

`yarn dev` is the command that will start the **local development server**.

![next.js dev server](/assets/course/introduction/img_next-dev-server.png)

Visit `http://localhost:3000/` and you will see a **default page with useful links** to Next.js resources.

![default next.js page](/assets/course/introduction/img_default-page.png)

## 3. CSS styling in Next.js

There are **multiple ways how to style your components** in Next.js.

- [CSS Modules](https://github.com/css-modules/css-modules) - used by the default page
- [Styled Components](https://styled-components.com/)
- [styled-jsx](https://github.com/vercel/styled-jsx)
- [emotion](https://emotion.sh/docs/introduction)

Next.js supports [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) out of the box, but we will want to use [TailwindCSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).

We will cover the main [**benefits of TailwindCSS**](/post/layout-and-hero) later on.

### 3.1 Install TailwindCSS

To install it follow this official [TailwindCSS with Next.js guide](https://github.com/tailwindlabs/tailwindcss-setup-examples/tree/next-new/examples/tailwindcss-nextjs).

```javascript
// install autoprefixer
npm install tailwindcss autoprefixer@^9
// generate tailwind config
npx tailwindcss init -p
// generate tailwind full config - I will explain later
npx tailwindcss init tailwind.config-full.js  --full
```

### 3.2 Create SRC folder

This step is optional but keeps the top level project folder clean.

Create `src` folder and move `pages`, and `styles` inside of it.

```html
public/
src/
|-- pages
|-- styles
postcss.config.js
tailwind.config-full.js
tailwind.config.js
...
```

### 3.3 Create and import tailwind.css

Inside of `src/styles` we will **create tailwind.css** with the default layers and **delete the other default css files**.

```css
/* src/styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `tailwind.css` it in the `_app.js`.

```jsx
// src/pages/_app.js
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

To get the **TailwindCSS autocompletion** in your components you might need to restart your VSCode.

### 3.4 Page Content

`index.js` is the home page of your Next.js project, replace the content with this.

```jsx
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <img
          className="m-auto my-4 w-24 sm:w-auto"
          alt="Ihatetomatoes"
          src="/assets/img_logo.svg"
        />
        <h1 className="mx-auto text-4xl font-bold">
          Welcome to Next.js 101!
        </h1>
      </main>

    </div>
  )
}
```

And we are done with the setup, you should see a page looking like this:

![next.js 101 initial setup](/assets/course/introduction/img_final-setup.png)

## 4. Push everything to GitHub

Now that we have **everything setup locally** we will create a first commit and push it to GitHub.

```javascript
git add .
git commit -m 'project setup'
git push --set-upstream origin master
```

At this point I have also created `start` **branch** that contains the starting files.

## Summary

We have used **Create Next App** to spin up a **brand new Next.js project**, **removed CSS modules** and **installed TailwindCSS instead**.

## Starting Files

Clone the `start branch` of [this repo](https://github.com/Ihatetomatoes/nextjs-101-dev/), if you want to **follow me step by step** from now on.

```javascript
// clone the start branch
git clone -b start --single-branch https://github.com/Ihatetomatoes/nextjs-101-dev.git
// go to the cloned folder
cd nextjs-101-dev
// install dependencies
npm install
// start dev server
yarn dev
// open browser http://localhost:3000/
```
