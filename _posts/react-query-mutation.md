---
id: "13"
order: 13
title: 'React Query - Mutation'
excerpt: 'Manage isLoading, isError and isSuccess'
coverImage: ''
module: 'Form Submission'
videoId: 'htvitBYmiAA'
duration: '14:07'
---

## The UI Issues

The **subscribe process works, but the UI** is not really user friendly.

- the user doesn't know that the **request is pending**
- the user can submit the form **multiple times**
- we are **not showing any error messages** in the UI
- we are not reseting the form

How to fix all this? We could use React's `useState` and handle `isLoading`, `isSuccess` and `isError` ourselves.

Instead of the that we will use [React Query](https://react-query.tanstack.com/) to handle it for us.

## React Query

[React Query](https://react-query.tanstack.com/) is **data-fetching library** for React.

It makes it easy to fetch, cache, synchronize and update data from API endpoints.

![React Query](/assets/course/react-query/img_react-query.png)

What I like the most about **React Query** is the hooks based API and the ability to update **isLoading**, **isError** and **isSuccess** during the request.

We will use the [mutation](https://react-query.tanstack.com/docs/guides/mutations) API to keep track of the state in our component.

## Installation and Setup

Firstly install React Query.

```jsx
// we need this
npm i react-query
```

Then use it in the SignupForm component.

```jsx{2,8,10}
// src/components/SignupForm.js
import { useMutation } from "react-query";

const SignupForm = ({ title }) => {

    const subscribe ...

    const [ mutate, { isLoading } ] = useMutation((data) => subscribe(data));

    const onSubmit = (data) => mutate(data);

}
```

We can remove the hardcoded isLoading, and use isLoading value returned by `useMutation`.

On form submit we will run `mutate` and pass in the form `data`.

Now we should see the form styles updated **while the request is pending** and `isLoading` is set to **true**.

## Success Message

In the same way we can get access to `isSuccess` and show the SuccessMessage component when the request is completed.

We can move this component outside and use an **early return** statement if **isSuccess** value is `true`.

```jsx{2,4-6}
const SignupForm = ({ title }) => {
    const [ mutate, { isLoading, isSuccess } ] = useMutation((data) => subscribe(data));

    if (isSuccess) {
        return <SuccessMessage />;
    }

    return (...)
}
```

## Error Message

If the request fails we will want to show the reponse in the UI. For that we can destructure `isError` from the mutation.

```jsx{1,8}
const [ mutate, { isSuccess, isLoading, isError, error } ] = useMutation((data) => subscribe(data));

const SignupForm = ({ title }) => {

    return (
        <form>
            ...
            {isError && <ErrorMessage message={error} />}
        </form>
    )
}
```

Now we have the UI responding to all the different states of the request.

## UI state Summary

**Invalid form input** or **error** returned by the **API**.

![isError](/assets/course/styling/img_isError.png)

**Loading** state and **default** state.

![Loading and default state](/assets/course/styling/img_isLoading.png)

**Success** message displayed after a succesfull submission.

![Success state](/assets/course/styling/img_success.png)

## Reset form and state

The last outstanding bit is to show the form again.

We can set a timer and hide it after 3 or 4 seconds, or add **close icon** to let the user do it.

```jsx{1,3,8,11,18,21}
import { Cross } from "../icons";

const SuccessMessage = ({handleReset}) => (
  <p className="text-sm p-3 bg-green-100 border rounded-md border-success text-success inline-flex">
    <span>Success. Check your inbox and confirm your email.</span>
    <span className="self-center flex mr-1">
        <button
            onClick={() => handleReset()}
            className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
        >
            <Cross className="h-2 w-2 mx-auto" />
        </button>
    </span>
  </p>
);

const SignupForm = ({ title }) => {
    const [ mutate, { isLoading, isError, error, isSucccess, reset } ] = useMutation(({ email }) => subscribe(email));

    if (isSuccess) {
        return <SuccessMessage handleReset={reset} />;
    }
    ...
}

```

We get the `reset` from the mutation and pass it to SuccessMessage as `handleReset` prop.

Inside of the **success message** we will add a **button with the cross icon** and fire the `reset` on button click.
