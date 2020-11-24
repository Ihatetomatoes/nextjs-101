---
id: "5"
order: 5
title: 'TailwindCSS Introduction'
excerpt: 'The basic workflow with TailwindCSS'
coverImage: ''
module: 'Styling with TailwindCSS'
videoId: ''
duration: '9:10'
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

## Body Background

We have already changed the background color to a light gray by applying `bg-gray-100` to the `body`.

```jsx{4,10}
// /src/pages/index.js
export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl md:px-4 min-h-screen">
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <p>Hero component</p>
      </main>
    </div>
  );
}
```