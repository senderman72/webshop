import React, { useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { IProduct } from "../models/IProducts";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setCartCount(storedCart.length);
  }, []);

  const addToCart = (product: IProduct) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setCartCount(newCart.length);
    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("storage"));
  };

  const updateItemCount = (productId: number, change: number) => {
    const updatedCart = cart
      .map((item: any) => {
        if (item.id === productId) {
          const newCount = item.count + change;
          if (newCount > 0) {
            return { ...item, count: newCount };
          }
        }
        return item;
      })
      .filter((item) => item.count > 0);

    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total, item) => total + item.count, 0));

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
