---
id: "11"
order: 11
title: 'Subscribe API endpoint'
excerpt: 'Creating API route, response helpers'
coverImage: ''
module: ''
videoId: 'KogQXMaP_9A'
duration: '06:49'
---

## API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) **great build-in feature** of Next.js.

If you need to **talk** to an external API, fetch data or modify data in the database, API route is the way to go.

```javascript
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
```

Above is the default Hello API route. If you visit `http://localhost:3000/api/hello` in your browser, you would see the response from this endpoint.

![API Response](/assets/course/form/img_api-response.png)

## Subscribe API Overview

Here is a quick overview of the remaining API work:

1. send user `email input` from the UI
2. create **subscribe API** endpoint - `/api/subscribe.js`
3. **subscribe API** will get `CONVERTKIT_API_URL`, `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID` from `env variables`
4. **send request** to [ConvertKit API](https://developers.convertkit.com/#add-subscriber-to-a-form)
   1. return `status 201` if everything goes well
   2. return `status 400` or `500` if something goes wrong
5. **Update UI** accordingly
   1. While the **request is pending** we want to toggle the `isLoading` variable to `true` to update our UI.
   2. When the **request is completed** we either show a **success message** and **error message**.

## Send request on form submit

When we **submit a valid form**, we will create a new `fetch` request and pass the `email` value in the `query`.

```javascript{4,8}
// src/components/SignupForm.js

const subscribe = async ({ email }) => {
   const res = await fetch(`/api/subscribe?email=${email}`);
};

// handle form submit
const onSubmit = (data) => subscribe(data);
```

The `subscribe` needs to be `async/await` because we need to wait for the `response` from the backend API.

## Create Subscribe Endpoint

```javascript{7,8,9}
// src/pages/api/subscribe.js

export default (req, res) => {

   const { email, tags } = req.query;

   if (!email) {
      return res.status(400).json({ error: "Email is required" });
   }

   // Part 2 continue

};

```

Firstly we check if the `email` is **included in the request query**. If it is not included, we will return `"Email is required"` error.

In the next unit we will implement the response from ConvertKit API.
