import { CustomerCreate } from "../../models/ICustomer";
import { create } from "../serviceBase";

export const createCustomer = async (
  customer: CustomerCreate
): Promise<void> => {
  try {
    const response = await create("http://localhost:3000/customers", customer);

    console.log(response);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
