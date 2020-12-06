# Next.js 101 - mini course app

This is Next.js app that has been used to create the [Next.js 101](https://ihatetomatoes-nextjs-101.vercel.app/).

Feel free to use it if you want to create a simple free course for your audience.

## Templates

### Coming Soon

![Coming Soon](/public/assets/img_coming-soon-screen.png)

### Creator Bio

![Creator Bio](/public/assets/img_creator-details.png)

### Get Started

![Get Started](/public/assets/img_get-started-screen.png)

### Unit detail view

![Unit Detail](/public/assets/img_unit-detail.png)

### Course navigation

![Course Navigation](/public/assets/img_course-navigation.png)

### Celebration

![Celebration](/public/assets/img_celebration.png)

## How to use it

- Add files for each unit in the `_posts` folder
- Specify `module` of each module
  - Units will be grouped by module in the sidebar
- Include `videoId` or leave empty
- Update `site.config.js` with your own details
- Set video type `youtube` or `vimeo` and include `id` for each video
- Have fun :)

## Feedback Fish API

If you want to use the "Give me feedback" button in the sidebar you will need to add `NEXT_PUBLIC_FEEDBACK_FISH_ID` to the [environment variables](https://vercel.com/blog/environment-variables-ui). For example

```text
NEXT_PUBLIC_FEEDBACK_FISH_ID=abcdefghijk
```

## ConvertKit API

If you want the subscribe form to be integrated with ConvertKit add the following environment variables.

```text
CONVERTKIT_API_URL=https://api.convertkit.com/v3/
CONVERTKIT_API_KEY=YOUR_API_KEY
CONVERTKIT_FORM_ID=YOUR_CONVERTKIT_FORM_ID
```

## Google Analytics API

If you want track visits for your course add your GA ID to the environment variables.

```text
GA_TRACKING_ID=YOUR_GA_ID
```

## What's included

- Next.js - the core
- TailwindCSS - styling
- Markdown files as data source

## Ideal image sizes

- Course cover image - `417 × 464`
- Unit cover image - `837 × 305`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
