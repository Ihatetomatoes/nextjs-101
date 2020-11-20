---
id: "8"
order: 8
title: 'Subscribe API endpoint'
excerpt: 'Creating API route, send request to ConvertKit'
coverImage: ''
module: ''
videoId: ''
---

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

```javascript{4,6}
// src/components/SignupForm.js

const subscribe = async ({ email }) => {
   const res = await fetch(`/api/subscribe?email=${email}`);
   console.log(res);
   if (!res.ok) throw "There was an error subscribing to the list.";
};

// handle form submit
const onSubmit = (data) => subscribe(data);
```

The `subscribe` needs to be `async/await` because we need to wait for the `response` from the backend API.

If the response from the API will `not be OK`, we will throw an `error`.

This will be handy in the next unit, when we will use **React Query mutation** to handle the error state for us.

## Create Subscribe Endpoint

```javascript{7,8,9}
// src/pages/api/subscribe.js

export default async (req, res) => {

   const { email, tags } = req.query;

   if (!email) {
      return res.status(400).json({ error: "Email is required" });
   }

   try {
      const FORM_ID = process.env.CONVERTKIT_FORM_ID;
      const API_KEY = process.env.CONVERTKIT_API_KEY;
      const API_URL = process.env.CONVERTKIT_API_URL;

      //TODO: Send request to ConvertKit

      return res.status(201).json({ error: "" });
   } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
   }
};

```

Firstly we check if the `email` is **included in the request query**. If it is not included, we will return `"Email is required"` error.

Then we will create a `try/catch` statement and return either status `201` or `500`.

## Send Request to ConvertKit API

Now we need to send the request to ConvertKit, with the same data and format as we did through Postman.

```javascript{4,7-11,17}
// src/pages/api/subscribe.js

// Send request to ConvertKit
const data = { email, api_key: API_KEY, tags: [tags] };

const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
   body: JSON.stringify(data),
   headers: {
      "Content-Type": "application/json",
   },
   method: "POST",
});

// Any error from CK = return custom message
if (response.status >= 400) {
   return res.status(400).json({
      error: `There was an error subscribing to the list.`,
   });
}

```

Firstly we create the `data` for the `body` object, include required `headers` and a **POST** method. 

If the reponse from ConvertKit is anything greater than 400, we will return a custom message.

## Final Subscribe Endpoint

```javascript
export default async (req, res) => {
   const { email, tags } = req.query;

   if (!email) {
      return res.status(400).json({ error: "Email is required" });
   }

   try {
      const FORM_ID = process.env.CONVERTKIT_FORM_ID;
      const API_KEY = process.env.CONVERTKIT_API_KEY;
      const API_URL = process.env.CONVERTKIT_API_URL;

      const data = { email, api_key: API_KEY, tags: [tags] };

      const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
         body: JSON.stringify(data),
         headers: {
         "Content-Type": "application/json",
         },
         method: "POST",
      });

      // Any error from CK return custom message
      if (response.status >= 400) {
         return res.status(400).json({
         error: `There was an error subscribing to the list.`,
         });
      }

      return res.status(201).json({ error: "" });
   } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
   }
};
```

## Signup works

Now we should be able to fill in the email, submit the form and make a succesful request.

There should be a console log.

![OK response](/assets/course/form/img_ok-response.png)

Nice, the API connection works but the UI needs some love.

Lets fix it in the next unit.
