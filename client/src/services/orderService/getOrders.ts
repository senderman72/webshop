import { IOrder } from "../../models/IOrder";
import { get } from "../serviceBase";

export const getOrders = async () => {
  try {
    const data: IOrder[] = await get("http://localhost:3000/orders");

    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
