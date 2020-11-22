---
id: "5"
order: 5
title: 'Signup Form Component'
excerpt: 'Conditional classes, TailwindCSS variants'
coverImage: ''
module: ''
videoId: ''
---

## Create SignupForm Component

TaiwlindCSS has a nice section dedicated to [styling forms](https://tailwindcss.com/components/forms). We can use their [underline-form example](https://tailwindcss.com/components/forms#underline-form) as a base and tweak the styles and colors.

![Signup Form](/assets/course/styling/img_signup-form.png)

Create a new SignupForm component with the following markup. `Form` element with an `input` and a submit `button`.

```jsx
// src/components/SignupForm.js
import React from "react";

const SignupForm = ({ title }) => {
  return (
    <>
      <p className="p-1 mb-2">{title}</p>
      <form className="w-full max-w-sm">
        <div className="flex items-center border rounded-md border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
```

If you copy and paste their example HTML markup, make sure you change `class` to `className`.

The details of the design are not as important, feel free to tweak it to your liking, and **include this form** in the `Hero` component.

```jsx{6}
// src/components/Hero.js
const Hero = () => {
  ...
  return (
    ...
    <SignupForm title="Leave your email below, to be notified when this course is ready." />
    ...
  )
}
```

## Customising TailwindCSS Colors

To customise the default Tailwind color scheme we can generate new colors through this [handy generator](https://javisperez.github.io/tailwindcolorshades/#/).


```javascript
theme: {
  extend: {
    colors: {
      success: "#587e0e",
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

## Invalid styles

To prepare for the from validation, we will also create **ErrorMessage**.

![Invalid Input](/assets/course/styling/img_invalid.png)

```jsx{2-4,11}
// src/components/SignupForm.js
const ErrorMessage = ({ message }) => (
  <p className="text-sm px-3 mt-1 text-red-500 inline-block">{message}</p>
);

const SignupForm = ({ title }) => {
  return (
    <>
      <form className="w-full max-w-sm">
        ...
        <ErrorMessage message="Please enter a valid email." />
      </form>
    </>
  );
};

```

## Success Message

When the signup is completed we want to **show a success message**, lets add a **SuccessMessage** component.

![Success Message](/assets/course/styling/img_success.png)

```jsx{4-8}
// src/components/SignupForm.js
const ErrorMessage = ({ message }) => (...);

const SuccessMessage = () => (
  <p className="text-sm p-3 bg-green-100 border rounded-md border-success text-success">
    Success. Check your inbox and confirm your email.
  </p>
);

// also add the new success color to tailwind.config.js
success: "#587e0e"
```

## Loading State

**When the user submits the form** we want to show **"Processing"** button instead of the default Sign Up text.

![Loading State](/assets/course/styling/img_isLoading.png)

Before we implement the API we can simply hardcode the `isLoading: true` manually.

Based on the **isLoading** value we will update the classes on our elements.

[classnames](https://github.com/JedWatson/classnames) utility is a great helper for that.

```jsx{9,24}
// install classnames in terminal
npm install classnames

// src/components/SignupForm.js
import classNames from "classnames";

const SignupForm = ({ title }) => {

  const isLoading = true;

  // css classes for our UI
  const formClass = classNames({
    "flex items-center border rounded-md border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4": true,
    "bg-gray-100 border-gray-100": isLoading,
  });

  const inputClass = classNames({
    "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none": true,
    "opacity-50 cursor-not-allowed": isLoading,
  });

  const btnClass = classNames({
    "flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded": true,
    "disabled:opacity-75 cursor-not-allowed": isLoading,
  });
  ...

};
```

To use the **disabled variant on our button** and make it **75% transparent** when it is **disabled** we need to update the TailwindCSS config.

```css
variants: {
  opacity: ["responsive", "hover", "focus", "disabled"],
}
```

Please refer to [Default Variant Reference](https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference) for more details.

Now we can simplify the return statement, use these new **conditional CSS classes**, **disable** button and input and show **different text** too.

```jsx{7,9,13,15,16}
// src/components/SignupForm.js
return (
  <>
    <p className="p-1 mb-2">{title}</p>
    <SuccessMessage />
    <form className="w-full max-w-sm">
      <div className={formClass}>
        <input
          className={inputClass}
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
          disabled={isLoading}
        />
        <button className={btnClass} disabled={isLoading} type="submit">
          {isLoading ? "Processing" : "Sign Up"}
        </button>
      </div>
      <ErrorMessage message="Please enter a valid email." />
    </form>
  </>
);
```