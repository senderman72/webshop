import { CustomerUpdate, ICustomer } from "../../models/ICustomer";
import { update } from "../serviceBase";

export const updateCustomer = async (
  id: number,
  updatedCustomer: CustomerUpdate
): Promise<ICustomer> => {
  try {
    const response = await update(
      `http://localhost:3000/customers/${id}`,
      updatedCustomer
    );

    const data: ICustomer = await response.json();
    console.log("Customer updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in updateCustomer:", error);
    throw error;
  }
};
