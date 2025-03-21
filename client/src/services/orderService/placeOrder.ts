import { IOrder } from "../../models/IOrder";

export const placeOrder = async (
  customerId: number
): Promise<IOrder | false> => {
  try {
    const orderData = {
      customer_id: customerId,
      payment_status: "unpaid",
      payment_id: null,
      order_status: "pending",
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
