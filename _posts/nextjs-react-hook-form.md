---
id: "6"
order: 6
title: 'Client Side Validation'
excerpt: 'Use React Hook Form'
coverImage: ''
module: 'Form Submission'
videoId: ''
---

## React Hook Form

[React Hook Form](https://react-hook-form.com/) is a great tool for **client-side form validation**.

![React Hook Form](/assets/course/form/img_react-hook-form.png)

It **minimises** the number of re-renders and has very **easy to use API**.

```shell
npm install react-hook-form
```

## Client Side Validation

Now we can **add client-side form validation** and prevent **empty or invalid emails** to hit our API.

```jsx{3,8,10,17,22,23-26}
// src/components/SignupForm.js
...
import { useForm } from "react-hook-form";
...

const SignupForm = ({ title }) => {
  // prevent submitting invalid or empty emails
  const { register, errors, handleSubmit } = useForm();
  // handle form submit
  const onSubmit = (data) => console.log({ data });

  ...

  return (
    <>
      ...
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className={formClass}>
          <input
            className={inputClass}
            type="text"
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder="Jane Doe"
            aria-label="Full name"
            disabled={isLoading}
          />
          <button type="submit">...<button>
        </div>
      </form>
    </>
  );
};

```

Every field that needs to be validated needs a `name` attribute and a `ref={register}` to make its value available for **validation** and form **submission**.

To define the rules of the input validation, we can pass in an object containing **required**, **min**, **max**, **minLength**, **maxLength**, **pattern** or **validate**.

In our case we are making the email input `required` with a `pattern` matching a **valid email address**.

`handleSubmit` will intercept all form values, validate them, and either update the `errors` object or fire off **onSubmit** if the form is valid.

## Show Error Message

Update the **ErrorMessage** rendering and only show it when the user does not provide a valid email.

```jsx
{errors?.email && <ErrorMessage message={errors.email.message} />}
```

We can also specify a custom error message for each validation requirement.

```jsx{3,6}
<input
  ref={register({
    required: "Email is required.",
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "Please enter a valid email"
    }
  })}
/>
```

Now we will render a more specific error based on which validation did not pass.

![Invalid form details](/assets/course/form/img_invalid-form-data.png)

## Form submit

If the **form is valid** you should see a `console.log` with the form data.

![Valid form details](/assets/course/form/img_valid-form-data.png)

Now we are ready to take this value and send it to the API.

## Summary

We are **preventing invalid form submissions** and showing the user a **relevant error message**. We have marked our email input as **required** and set the neccessary **pattern validation**.

Check out the full documentation of [React Hook Form](https://react-hook-form.com/api) for more details.
