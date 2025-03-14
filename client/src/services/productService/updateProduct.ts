import { IProduct, ProductUpdate } from "../../models/IProducts";
import { update } from "../serviceBase";

export const updateProduct = async (
  id: number,
  updatedProduct: ProductUpdate
): Promise<IProduct> => {
  try {
    const response = await update(
      `http://localhost:3000/products/${id}`,
      updatedProduct
    );

    const data: IProduct = await response.json();
    console.log("Product updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in updatedProduct:", error);
    throw error;
  }
};
