import { ProductCreate } from "../../models/IProducts";
import { create } from "../serviceBase";

export const createProduct = async (product: ProductCreate): Promise<void> => {
  try {
    const response = await create("http://localhost:3000/products", product);

    console.log(response);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
