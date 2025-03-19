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

app.post("/stripe/create-checkout-session-hosted", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "http://localhost:5173/order-confirmation?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:5173",
  });

  res.json({ checkout_url: session.url });

  // res.redirect(303, session.url);
});

//Embedded

app.post("/stripe/create-checkout-session-embedded", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    ui_mode: "embedded",
    return_url:
      "http://localhost:5173/order-confirmation?session_id={CHECKOUT_SESSION_ID}",
  });

  res.json(session);

  // res.send({clientSecret: session.client_secret});
});

// När order är avklarad
app.post("/stripe/webhook", (request, response) => {
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
