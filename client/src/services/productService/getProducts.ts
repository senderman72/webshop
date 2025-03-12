import { IProduct } from "../../models/IProducts";
import { get } from "../serviceBase";

export const getProducts = async () => {
  try {
    const data: IProduct[] = await get("http://localhost:3000/products");

    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
