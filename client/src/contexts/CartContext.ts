import { createContext } from "react";
import { IProduct } from "../models/IProducts";

interface CartContextType {
  cart: IProduct[];
  cartCount: number;

  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);
