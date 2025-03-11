import React from "react";
import { AddToCartBtn } from "../styled/styledProducts/ProductCards";
import { IProduct } from "../../models/IProducts";

const AddToCart = ({ product }: { product: IProduct }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <AddToCartBtn onClick={handleAddToCart}>Lägg till</AddToCartBtn>;
};
export default AddToCart;
