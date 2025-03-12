import { ICustomer } from "../../models/ICustomer";
import { create } from "../serviceBase";

export const createCustomer = async (customer: ICustomer): Promise<void> => {
  try {
    const response = await create<{ message: string }>(
      "http://localhost:3000/customers",
      customer
    );

    console.log(response.message);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
