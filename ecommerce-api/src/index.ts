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
import {
  updateOrder,
  updateOrderInDatabase,
} from "./controllers/orderController";

app.use("/products", productRouter);
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);
app.use("/order-items", orderItemRouter);

//Embedded

app.post("/stripe/create-checkout-session-embedded", async (req, res) => {
  const { cart, orderId } = req.body;

  const lineItems = cart.map((item) => {
    return {
      price_data: {
        currency: "sek",
        product_data: {
          name: item.product.name,
          images: [item.product.image],
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
      "http://localhost:5173/order-confirmation/{CHECKOUT_SESSION_ID}",
    client_reference_id: orderId,
  });

  res.send({ clientSecret: session.client_secret });
});

app.get("/session_status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    payment_status: session.payment_status,
    customer_email: session.customer_details.email,
  });
});

// När order är avklarad

app.post("/stripe/webhook", async (req, res) => {
  // Hämta event-data från request-body
  const event = req.body;

  // Hantera eventet baserat på dess typ
  switch (event.type) {
    case "checkout.session.completed":
      // Hämta session-data från eventet
      const session = event.data.object;

      console.log(session);

      // Hämta order-id, payment-id, payment-status och order-status från session-data
      const orderId = session.client_reference_id;
      const paymentId = session.id;
      const paymentStatus = "Paid";
      const orderStatus = "Received";

      // Uppdatera order i databasen
      try {
        await updateOrderInDatabase(
          orderId,
          paymentStatus,
          paymentId,
          orderStatus
        );
      } catch (error) {
        console.error("Failed to update order:", error);
      }

      break;

    default:
      // Logga eventuella ohanterade event-typ
      console.log(`Unhandled event type ${event.type}`);
  }

  // Returnera ett svar för att bekräfta mottagandet av eventet
  res.json({ received: true });
});

// Attempt to connect to the database
connectDB();
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
