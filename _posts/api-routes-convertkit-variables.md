---
id: "7"
order: 7
title: 'API Routes, ConvertKit API'
excerpt: 'API route overivew, creating ConvertKit account'
coverImage: ''
module: ''
videoId: ''
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

## ConvertKit API

If you don't already have a [ConvertKit account](https://convertkit.com/?lmref=LA8-5Q), now is a good time to [create it](https://convertkit.com/?lmref=LA8-5Q).

From ConvertKit you will need 3 variables:

- `CONVERTKIT_API_URL`
- `CONVERTKIT_API_KEY`
- `CONVERTKIT_FORM_ID`

### Get CONVERTKIT_API_KEY
![Get ConvertKit Form ID](/assets/course/form/img_convertkit-api-key.png)

### Get CONVERTKIT_FORM_ID

![Get ConvertKit Form ID](/assets/course/form/img_convertkit-form.png)

### Create .env.local

We will take these variables and store them in `.env.local`, this is a file containing all environment variables for our project. 

It should be in the root directory of your project.

> .env files should never be checked out to your repository, **make sure they are included in .gitignore**. Create Next App automatically does this for you.

Once we deploy our project to Vercel **we will need to configure all these variables on the server** too.

Your `.env.local` should look something like this:

![Environment Variables](/assets/course/form/img_env-variables.png)

## Validating API via Postman

![Postman](/assets/course/form/img_postman.png)

Before we create the endpoint, lets validate that we have the right data.

You don't need to do this step, but sometimes it is handy to check that the endpoint works fine and [Postman](https://www.postman.com/) is a great tool for that.

```text
Method: POST
URL: https://api.convertkit.com/v3/forms/[formID]/subscribe
Request body JSON
{
    "email": "youremail@gmail.com",
    "api_key": "8_CK3idkcieKDiels6iQ"
}
```

![Validate API via Postman](/assets/course/form/img_validate-via-postman.png)

With the correct details we are getting back `Status: 200 OK`! 

The **user will recieve a confirmation email** and **needs to confirm it** to be added to ConvertKit.

Now we have all the information required to create our Subscribe API endpoint.
