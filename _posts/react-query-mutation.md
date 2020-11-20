---
id: "9"
order: 9
title: 'React Query - Mutation'
excerpt: 'Manage isLoading, isError and is Success'
coverImage: ''
module: ''
videoId: ''
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

    const [ mutate, { isLoading } ] = useMutation(({ email }) => subscribe(email));
    
    const onSubmit = (data) => mutate(data);

}
```

We can remove the hardcode isLoading, and use isLoading value returned by `useMutation`.

On form submit we will run `mutate` and pass in the form `data`.

Now we should see the form styles updated **while the request is pending** and `isLoading` is set to **true**.

## Error Message

If the request fails we will want to show the reponse in the UI. For that we can destructure `isError` from the mutation.

```jsx{1,8}
const [ mutate, { isLoading, isError, error } ] = useMutation(({ email }) => subscribe(email));

const SignupForm = ({ title }) => {

    return (
        <form>
            ...
            {isError && <ErrorMessage message={error} />}
        </form>
    )
}
```

## Success Message

In the same way we can get access to `isSuccess` and show the SuccessMessage component when the request is completed.

We can move this component outside and use an **early return** statement if **isSuccess** value is `true`.

```jsx{2,4-6}
const SignupForm = ({ title }) => {
    const [ mutate, { isLoading, isError, error, isSucccess } ] = useMutation(({ email }) => subscribe(email));

    if (isSuccess) {
        return <SuccessMessage />;
    }

    return (...)
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