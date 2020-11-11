import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  // 1. Destructure the email address from the request query.
  const { email, tags } = req.query;

  if (!email) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // 3. Fetch the environment variables.
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = process.env.CONVERTKIT_API_URL;

    // 5. Create a data object that will be passed to Convertkit API
    const data = { email, api_key: API_KEY, tags: [tags] };

    // 6. Send a POST request to Convertkit.
    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // 7. Swallow any errors from Convertkit and return a better error message.
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      });
    }

    // 8. If we made it this far, it was a success! 🎉
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
