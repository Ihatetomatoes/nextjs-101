---
id: "7"
order: 7
title: 'Customising Colors in TailwindCSS'
excerpt: 'How to create your own color palette'
coverImage: ''
module: 'Styling with TailwindCSS'
videoId: 'YLLLkyU32qE'
duration: '05:57'
---

## Customising TailwindCSS

TailwindCSS comes with a preset [colors and to customize them](https://tailwindcss.com/docs/customizing-colors) we need to include our color scheme in the tailwind.config.js.

![TailwindCSS Default Colors](/assets/course/styling/img_tailwind-css-colors.png)

To customise the default Tailwind color scheme we can generate new colors through this [handy generator](https://javisperez.github.io/tailwindcolorshades/#/).

```json
theme: {
  extend: {
    colors: {
      completed: "#83B919",
      success: "#587e0e",
      green: {
        50: "#F7F9F3",
        100: "#EEF2E7",
        200: "#D5DFC3",
        300: "#BCCB9F",
        400: "#8AA556",
        500: "#587E0E",
        600: "#4F710D",
        700: "#354C08",
        800: "#283906",
        900: "#1A2604",
      },
      gray: {
        50: "#F4F4F4",
        100: "#F9F9F9",
        200: "#C9C9C9",
        300: "#A9A9A9",
        400: "#2E2E30",
        500: "#282828",
        600: "#242424",
        700: "#161616",
        800: "#121212",
        900: "#0C0C0C",
      },
      blue: {
        50: "#F2F8FE",
        100: "#E6F1FE",
        200: "#BFDBFC",
        300: "#99C6FA",
        400: "#4D9BF7",
        500: "#0070F3",
        600: "#0065DB",
        700: "#004392",
        800: "#00326D",
        900: "#002249",
      },
      red: {
        50: "#FDF5F3",
        100: "#FAECE7",
        200: "#F4CFC4",
        300: "#EDB3A1",
        400: "#DF795A",
        500: "#D5402B",
        600: "#BC3A11",
        700: "#7D260B",
        800: "#5E1D09",
        900: "#3F1306",
      }
    }
  }
}
```
