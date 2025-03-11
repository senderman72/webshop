import React from "react";
import useProduct from "../../hooks/useProduct";

import {
  ProductCardsWrapper,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DescriptionProduct,
} from "../styled/styledProducts/ProductCards";

import { useParams } from "react-router";
import AddToCart from "./AddToCart";

const ProductDescription = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? Number(id) : 0;

  const { product } = useProduct(productId);

  return (
    <>
      <h1>Produkter</h1>
      <ProductCardsWrapper>
        <ProductCard key={product?.id}>
          <ProductImage src={product?.image} alt={product?.name} />

          <ProductTitle>{product?.name}</ProductTitle>
          <ProductPrice>Pris: {product?.price} SEK</ProductPrice>
          <DescriptionProduct>
            Beskrivning: {product?.description}
          </DescriptionProduct>
          <DescriptionProduct>
            Lagerstatus: {product?.stock}{" "}
          </DescriptionProduct>
          <DescriptionProduct>Kategori: {product?.category}</DescriptionProduct>
          {product && <AddToCart product={product} />}
        </ProductCard>
      </ProductCardsWrapper>
    </>
  );
};

export default ProductDescription;
