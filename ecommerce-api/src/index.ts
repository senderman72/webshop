import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
import productRouter from "./routes/products";
import customerRouter from "./routes/customers";
import orderRouter from "./routes/orders";
import orderItemRouter from "./routes/orderItems";
app.use("/products", productRouter);
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);
app.use("/order-items", orderItemRouter);

//Embedded

app.post("/stripe/create-checkout-session-embedded", async (req, res) => {
  const { cart, customerId } = req.body;

  console.log("Begäran inkommen:");
  console.log("cart:", cart);
  console.log("customId:", customerId);

  const lineItems = cart.map((item) => {
    return {
      price_data: {
        currency: "sek",
        product_data: {
          name: item.product.name,
        },
        unit_amount: item.product.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },

      quantity: item.count,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    ui_mode: "embedded",
    return_url:
      "https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}",
    client_reference_id: customerId,
  });

  res.send({ clientSecret: session.client_secret });
});
// När order är avklarad
app.post("http://localhost:5173/stripe/webhook", (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSession = event.data.object;
      //update order with confirmed payment
      // -- payment_status = "Paid"

      // -- payment_id = "Paid"
      // -- order_status = "Shipped"

      //update product with stock

      // send confirmation email to customer

      // send purchase to accounting service

      console.log(checkoutSession);
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({ received: true });
});

// Attempt to connect to the database
connectDB();
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
