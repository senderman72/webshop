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
import { updateOrderInDatabase } from "./controllers/orderController";
import { updateProductStock } from "./controllers/productController";

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

// När order är avklarad

app.post("/stripe/webhook", async (req, res) => {
  const event = req.body;

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );

      console.log(event);
      console.log(lineItems);

      const orderId = session.client_reference_id;
      const paymentId = session.id;
      const paymentStatus = "Paid";
      const orderStatus = "Received";

      try {
        await updateOrderInDatabase(
          orderId,
          paymentStatus,
          paymentId,
          orderStatus
        );

        for (const item of lineItems.data) {
          const productName = item.description;
          const quantity = item.quantity;

          try {
            await updateProductStock(productName, quantity);
            console.log(`Stock updated successfully for ${productName}`);
          } catch (error) {
            console.error(`Failed to update stock for ${productName}:`, error);
          }
        }
      } catch (error) {
        console.error("Error updating order:", error);
      }

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Attempt to connect to the database
connectDB();
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
