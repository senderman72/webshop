import { IOrderItem } from "../../models/IOrderItem";
import { create } from "../serviceBase";

export const placeOrder = async (
  customerId: number,
  cart: IOrderItem[]
): Promise<{ message: string; order_id: number }> => {
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

    const response = await create("http://localhost:3000/orders", order);

    return response;
  } catch (error) {
    console.error("Error during order creation:", error);
    throw error;
  }
};
