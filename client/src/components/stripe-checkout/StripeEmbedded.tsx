import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";

import { getStripeCheckoutEmbeddedUrl } from "../../services/stripe/stripe-embedded";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51R4GrvRC90WGM6PJ2QrF7lutVEGGtMmqwefR5r1XY0hSFXc5i97MWbeYSMKVuirBU9Lt2if1r5KR16kyQkNw101u00OwJuLr1B"
);

const App = () => {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const clientSecrete = await getStripeCheckoutEmbeddedUrl();
    return clientSecrete;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default App;
