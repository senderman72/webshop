import { IOrderItem } from "../../models/IOrderItem";

import { update } from "../serviceBase";

export const updateOrderItem = async (id: number, updatedOrder: IOrderItem) => {
  try {
    const response = await update(
      `http://localhost:3000/order-items/${id}`,
      updatedOrder
    );

    const data = await response.json();
    console.log("Order updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in updateOrder:", error);
    throw error;
  }
};
