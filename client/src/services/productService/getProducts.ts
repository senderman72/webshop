import { IProduct } from "../../models/IProducts";
import { get } from "../serviceBase";

export const getProducts = async () => {
  try {
    const data: IProduct[] = await get("http://localhost:3000/products");
    console.log("Produkter hämtade:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
getProducts();
