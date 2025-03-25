import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";

const stripePromise = loadStripe(
  "pk_test_51R4GrvRC90WGM6PJ2QrF7lutVEGGtMmqwefR5r1XY0hSFXc5i97MWbeYSMKVuirBU9Lt2if1r5KR16kyQkNw101u00OwJuLr1B"
);

const StripeEmbedded = ({ cart, orderId }) => {
  const fetchClientSecret = useCallback(() => {
    console.log("Skickar följande information till backend:");
    console.log("cart:", cart);
    console.log("customerId:", orderId);
    return fetch(
      "http://localhost:3000/stripe/create-checkout-session-embedded",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          orderId,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [cart, orderId]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default StripeEmbedded;
