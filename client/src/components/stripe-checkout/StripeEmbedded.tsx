import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51R4GrvRC90WGM6PJ2QrF7lutVEGGtMmqwefR5r1XY0hSFXc5i97MWbeYSMKVuirBU9Lt2if1r5KR16kyQkNw101u00OwJuLr1B"
);

const App = () => {
  const fetchClientSecret = useCallback(() => {
    return fetch(
      "http://localhost:3000/stripe/create-checkout-session-embedded",
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <h1>Checkout </h1>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default App;
