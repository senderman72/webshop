import { useContext } from "react";
import { AddToCartBtn } from "../styled/styledProducts/ProductCards";
import { IProduct } from "../../models/IProducts";
import { CartContext } from "../../contexts/CartContext";
import React from "react";

const AddToCart = ({ product }: { product: IProduct }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { addToCart } = cartContext;

  return (
    <AddToCartBtn onClick={() => addToCart(product)}>Lägg till</AddToCartBtn>
  );
};

export default AddToCart;
