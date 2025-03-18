import React, { useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { IProduct } from "../models/IProducts";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [];

  const [cart, setCart] = useState<IProduct[]>(initialCart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setCartCount(parsedCart.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart]);

  const addToCart = (product: IProduct) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const removeFromCart = (productId: number) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
