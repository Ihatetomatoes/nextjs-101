---
id: "4"
order: 4
title: 'Layout and Hero Components'
excerpt: 'Create CSS layout using TailwindCSS'
coverImage: ''
module: 'Styling with TailwindCSS'
videoId: ''
---

## What is TailwindCSS

![TailwindCSS - A Utility-first CSS framework](/assets/course/styling/img_tailwind-css.png)

[TailwindCSS](https://tailwindcss.com/) is a utility-first CSS framework. It give you **small building blocks** that you can use to build your designs.

I have been using it for a few months now and really like:

- **no thinking** about naming classes
- **no switching** between html and css
- **responsive** media queries syntax
- **only load css that is used** by your components
- forces you to **break down your ui** into components
- your **css does not grow** over time as much

Things that I am still getting to know:

- proper **customisation**
- referring to the **documentation**
- some of the **advanced usecases and layouts**

For what we are trying to build in this course, TailwindCSS is perfect.

> If you are not interested in TailwindCSS, you can skip the styling part and dive straight into building the functionality.

## Tools

If you are using VSCode like me, you would want to install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), this will give you classes autocompletion and linting.

![Tailwind CSS IntelliSense for VSCode](/assets/course/styling/img_tailwind-vscode.png)

## Body and Full Height

Firstly we will add `bg-gray-100` to the `body`, and stretch the whole app to take the whole viewport height.

```css
/* /pages/styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

#__next {
  @apply flex flex-col min-h-screen;
}
```

## Layout Component

Firstly we will create a new component that will center the main content of the page.

Create a new `Layout` component.

```jsx
// components/Layout.js
const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:px-4 md:max-w-3xl min-h-screen w-full">
      {children}
    </div>
  );
};

export default Layout;
```

> Do we need to [import React in Next.js projects components](https://stackoverflow.com/questions/63090037/importing-react-into-pages-in-next-js)? Only if you need to use the keyword React. (React.Component)

Then we will update the content of `index.js`.

```jsx{3,9-11}
// pages/index.js
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      ...
      <main className="bg-white min-h-screen pt-4 md:px-4 md:max-w-6xl">
        <Hero />
      </main>
    </Layout>
  );
}

```

## Hero Component

Instead of growing the markup of the home component, lets create a new `Hero` component.

```jsx{23}
// src/components/Hero.js
const outcomes = [
  "How to build this landing page with Next.js",
  "How to create API endpoint and integrate with ConvertKit API",
  "How to use React Hook Form and TailwindCSS",
];

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
    Coming Soon!
  </span>
);

const Hero = () => {
  return (
    <div className="md:flex md:flex-row relative border border-gray-200">
      <div className="bg-gray-100 text-center md:w-1/3 flex">
        <img
          className="object-contain mx-auto"
          alt="Next.js 101"
          src="/assets/img_nextjs-101-cover.png"
        />
      </div>
      <div className="px-4 md:px-8 py-6 self-center md:w-2/3">
        <h2 className="font-bold text-2xl mb-3">What you'll learn</h2>
        {outcomes && (
          <ul className="mb-6">
            {outcomes.map((i) => (
              <li key={i} className="text-gray-700 list-none flex mb-2 opacity-75">{i}</li>
            ))}
          </ul>
        )}
        <ComingSoonBadge />
        <div>SIGNUP FORM GOES HERE</div>
      </div>
    </div>
  );
};

export default Hero;

```

### Images

Place your images in the `/public/` folder and then reference them in your markup like were are referencing the course cover image.

Next.js also provides an optimised `<Image />` component that will load the image only when it is visible in the viewport, plus other performance benefits.

Read more about the [Image component](https://nextjs.org/docs/api-reference/next/image).

Now we have a **nice responsive layout** for our signup form.

![Hero signup layout](/assets/course/styling/img_hero-layout.png)