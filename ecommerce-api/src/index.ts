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
  const { cart } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).send({ error: "Cart is empty." });
  }

  const groupedCart: {
    id: string;
    quantity;
    number;
    price: number;
    name: string;
    image: string;
    stock: number;
  }[] = [];

  cart.forEach((item) => {
    const existingItem = groupedCart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      groupedCart.push({ ...item, quantity: 1 });
    }
  });

  console.log("Grouped cart:", groupedCart);

  const line_items = groupedCart.map((item) => ({
    price_data: {
      currency: "sek",
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100,
      tax_behavior: "exclusive",
    },
    quantity: (item as { quantity: number }).quantity,
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
      maximum: item.stock,
    },
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      ui_mode: "embedded",
      return_url:
        "http://localhost:5173/order-confirmation?session_id={CHECKOUT_SESSION_ID}",
      client_reference_id: "1234",
    });

    res.send({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).send({ error: "Failed to create session" });
  }
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
