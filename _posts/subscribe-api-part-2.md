---
id: "12"
order: 12
title: 'Subscribe API - Part 2'
excerpt: 'Send request to ConvertKit'
coverImage: ''
module: ''
videoId: 'ZhPcgl8DK1E'
duration: '09:35'
---

## Subscribe API - Part 2

Inside of the `try/catch` block we will firstly create the `data` object that will use our **env variables** and the user `email`.

Then we will send it all to ConvertKit API.

```javascript{10,12-18,22,27,29}
export default async (req, res) => {
   ...
   // Part 2 continue
   try {
      const FORM_ID = process.env.CONVERTKIT_FORM_ID;
      const API_KEY = process.env.CONVERTKIT_API_KEY;
      const API_URL = process.env.CONVERTKIT_API_URL;

      // Send request to ConvertKit
      const data = { email, api_key: API_KEY };

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

      return res.status(201).json({ error: "" });
   } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
   }
};
```

Based on the response from ConvertKit we will return either status `201`, `400` or `500`.

If the reponse from ConvertKit is anything greater than `400`, we will return a custom message.

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
