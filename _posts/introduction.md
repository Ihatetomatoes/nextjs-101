---
id: "1"
order: 1
title: 'Introduction'
excerpt: 'Why to use Next.js and what we will cover.'
coverImage: ''
module: 'Introduction and Setup'
videoId: ''
---

## Why Next.js

[Next.js](https://nextjs.org/) is a React framework, that simplifies a lot things that **you would need to add** to most React apps and projects.

For example if you need:

- **multiple routes**, bring in [React Router](https://reactrouter.com/)
- **dynamic routes**, configure `React Router`
- **optimize images**, do it yourself
- **SEO optimization**, bring in [React Helmet](https://github.com/nfl/react-helmet)
- **prefetch links**, configure it yourself

`Next.js` gives you **all of this out of the box**:

- **file based routing**, create `pages/index.js`
- **dynamic route segments**, create `pages/post/[slug].js`
- **image optimization**, use `<Image />` from `next/image`
- **link prefetching**, use `<Link />` from `next/link`
- **static site generation** or server side rendering

There is plenty of **other benefits**, but in this course we will focus mainly on the above.

> `React` is great for `SPA` (single page applications), `Next.js` is great for projects where `SEO matters`.

## When to use React vs Next.js

React | Next.js
--- | ---
**One** `<div id="root" />` entry | **Full HTML** on the page
**Single page applications** (SPA) | SPA **or** pre rendered
**Dashboards** | **SEO** benefits
Apps **behind** login | Statically **generated sites**
**Client side** rendering (CSR) | Choose between **CSR or SSR**

## This course is not

- a complete guide to **Next.js** or **React.js**
- a complete guide to **TailwindCSS**
- a **full-stack** course teaching your **everything**

## Who is this course for

- Next.js beginners **with some React knowledge**
- anyone who wants to **learn about modern front-end development**
- anyone who wants to **build a practical component** from **start to finish**

## What you will build

In this Next.js mini course we will **create a simple landing page** with **email signup form**.

![Final Demo](/assets/course/introduction/img_final-demo.png)

### What you will use

- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)
- [TailwindCSS](https://tailwindcss.com/) for **styling**
- [React Hooks Form](https://react-hook-form.com/) for client side **validation**
- [React Query](https://react-query.tanstack.com/) to **integrate** our form with [ConvertKit](convertkit.com) API
- **Deploy** everything to [Vercel](https://vercel.com/)

### What do you need

If you **want to follow step by step** from start to finish **you will need**:

- [Github](http://github.com/) account
- [Vercel](https://vercel.com/) account
- [ConvertKit](https://convertkit.com/) account

**Excited to learn** Next.js? **Lets setup the project** in the next unit.
