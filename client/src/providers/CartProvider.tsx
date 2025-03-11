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

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
