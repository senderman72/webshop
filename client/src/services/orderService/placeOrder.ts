import { IOrder } from "../../models/IOrder";
import { IOrderItem } from "../../models/IOrderItem";

export const placeOrder = async (
  customerId: number,
  cart: IOrderItem[]
): Promise<IOrder | false> => {
  try {
    const orderData = {
      customer_id: customerId,
      payment_status: "paid",
      payment_id: "",
      order_status: "pending",
      order_items: cart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.unit_price,
      })),
    };

    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error during order creation:", errorResponse.message);
      return false;
    }

    const order: IOrder = await response.json();
    console.log("Order created:", order);
    return order;
  } catch (error) {
    console.error("Error during order creation:", error);
    return false;
  }
};
