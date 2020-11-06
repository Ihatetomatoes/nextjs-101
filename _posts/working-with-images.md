---
id: "2"
title: '3. Working with images'
excerpt: 'How to reference images in your Next.js project'
coverImage: ''
module: 'Introduction and Setup'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: '/assets/course/working-with-images/img_introduction.jpg'
---

Working with images in Next.js is quite easy.

Place them in the `/public/` folder.

Then you can reference them inside of your React components.

## Example

Our logo is in the `/public/assets/img_logo.svg`, then we store a reference to this static asset in the `Meta` component. 

`Meta.js` also exports other information about this site, such as the site name, description and a list of learning outcomes.

```javascript
// /src/components/Meta.js
export const logo = "/assets/img_logo.svg";

// /src/components/Header.js
import { logo } from "./Meta";
const Header = () => (
  <img src={logo} />
)
```

## Use SVGs as React components

For the tick icons in the `Hero` component we are importing svg directly as a **React Component**.

We create `icons` in the `src` folder and place all our svg icons there.

```javascript
/src/icons/
  facebook.svg
  tick.svg
  twitch.svg
  twitter.svg
  youtube.svg
```

There is a handy plugin [SVGR CLI](https://react-svgr.com/docs/cli/) that will create React components from SVGs automatically.

```javascript
npx @svgr/cli -d ./src/icons/ ./src/icons/
```

This will look inside of the whole directory (`-d`) and will create new react component for each of the SVGs.

Now we can create the `index.js` to simplify our import statements.

```javascript
// icons/index.js
export { default as Facebook } from './Facebook'
export { default as Tick } from './Tick'
export { default as Twitch } from './Twitch'
export { default as Twitter } from './Twitter'
export { default as Youtube } from './Youtube'
```

To re-use these icons we can import them anywhere in our app.

```javascript
// /components/Hero.js
import { Tick } from "../icons";

const Hero = () => (
  ...
  <Tick className="mr-4" />
  ...
)
```