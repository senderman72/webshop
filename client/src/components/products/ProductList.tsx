import React from "react";
import useProducts from "../../hooks/useProducts";
import {
  ProductCard,
  ProductCardsWrapper,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "../styled/styledProducts/ProductCards";
import { Link } from "react-router";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <>
      <h1>Produkter</h1>
      <ProductCardsWrapper>
        {products?.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />

            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price} SEK</ProductPrice>
            <Link to={`/products/${product.id}`}>mer info</Link>
          </ProductCard>
        ))}
      </ProductCardsWrapper>
    </>
  );
};

export default ProductList;
