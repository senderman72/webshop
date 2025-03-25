import { IOrderItem } from "../../models/IOrderItem";

export const placeOrder = async (
  customerId: number,
  cart: IOrderItem[]
): Promise<{
  order_id(order_id: any): unknown;
  message: string;
  id: number;
}> => {
  try {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.unit_price,
      0
    );

    const order = {
      customer_id: customerId,
      payment_status: "unpaid",
      total_price: totalPrice,
      payment_id: null,
      order_status: "pending",
      order_items: cart.map((item) => ({
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        unit_price: item.unit_price,
      })),
    };

    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Order created, response from server:", data.order_id);

    return data;
  } catch (error) {
    console.error("Error during order creation:", error);
    throw error;
  }
};
