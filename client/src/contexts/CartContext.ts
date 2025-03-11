import { createContext } from "react";
import { IProduct } from "../models/IProducts";

interface CartContextType {
  cart: IProduct[];
  cartCount: number;
  addToCart: (product: IProduct) => void;
  updateItemCount: (productId: number, change: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);
