export const getStripeCheckoutEmbeddedUrl = async () => {
  try {
    const response: Response = await fetch(
      "http://localhost:3000/stripe/create-checkout-session-embedded",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error("Error fetching Stripe session", error);
    throw error;
  }
};
