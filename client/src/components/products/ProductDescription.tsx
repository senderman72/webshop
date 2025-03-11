import React from "react";
import useProduct from "../../hooks/useProduct";

import {
  ProductCardsWrapper,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from "../styled/styledProducts/ProductCards";

const ProductDescription = () => {
  const { product } = useProduct("3");
  return (
    <>
      <h1>Produkter</h1>
      <ProductCardsWrapper>
        <ProductCard key={product?.id}>
          <ProductImage src={product?.image} alt={product?.name} />

          <ProductTitle>{product?.name}</ProductTitle>
          <ProductPrice>{product?.price} SEK</ProductPrice>
        </ProductCard>
      </ProductCardsWrapper>
    </>
  );
};

export default ProductDescription;
