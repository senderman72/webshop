import { IProduct } from "../../models/IProducts";
import { get } from "../serviceBase";

export const getProduct = async (id: number) => {
  try {
    const data: IProduct = await get(`http://localhost:3000/products/${id}`);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
