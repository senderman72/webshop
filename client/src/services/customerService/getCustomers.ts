import { ICustomer } from "../../models/ICustomer";
import { get } from "../serviceBase";

export const getCustomers = async () => {
  try {
    const data: ICustomer[] = await get("http://localhost:3000/customers");

    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
