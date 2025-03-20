import { IProduct } from "../../models/IProducts";
import { IOrder } from "../../models/IOrder";
import { IOrderItem } from "../../models/IOrderItem";

export const placeOrder = async (
  customerId: number,
  cart: IProduct[]
): Promise<IOrder | false> => {
  try {
    const orderItems = cart.map(
      (item): IOrderItem => ({
        product_id: item.id,
        product_name: item.name,
        quantity: item.count,
        unit_price: item.price,
      })
    );
    const orderItems = req.body.order_items.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Lägg till denna egenskapen
    }));
    const orderData = {
      customer_id: customerId,
      payment_status: "unpaid",
      payment_id: null,
      order_status: "pending",
      order_items: orderItems,
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
