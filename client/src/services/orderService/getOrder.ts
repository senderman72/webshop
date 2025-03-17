import { IOrder } from "../../models/IOrder";

import { get } from "../serviceBase";

export const getOrder = async (id: number) => {
  try {
    const data: IOrder = await get(`http://localhost:3000/orders/${id}`);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
