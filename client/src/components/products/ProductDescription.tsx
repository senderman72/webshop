import React from "react";
import useProduct from "../../hooks/useProduct";

import { useParams } from "react-router";
import AddToCart from "./AddToCart";
import {
  SingleProductWrapper,
  ProductImageWrapper,
  ProductInfoWrapper,
  AddToCartWrapper,
  SingleProductPrice,
  SingleProductTitle,
  SingleDescriptionProduct,
} from "../styled/styledProducts/SingeProduct";

const ProductDescription = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? Number(id) : 0;

  const { product } = useProduct(productId);

  return (
    <>
      <SingleProductWrapper>
        <ProductImageWrapper>
          <img src={product?.image} alt={product?.name} />
        </ProductImageWrapper>

        <ProductInfoWrapper>
          <SingleProductTitle>{product?.name}</SingleProductTitle>
          <SingleProductPrice>Pris: {product?.price} SEK</SingleProductPrice>
          <SingleDescriptionProduct>
            Beskrivning: {product?.description}
          </SingleDescriptionProduct>
          <SingleDescriptionProduct>
            Lagerstatus: {product?.stock}
          </SingleDescriptionProduct>
          <SingleDescriptionProduct>
            Kategori: {product?.category}
          </SingleDescriptionProduct>
          <AddToCartWrapper>
            {product && (
              <AddToCart product={product}> Lägg till i varukorgen </AddToCart>
            )}
          </AddToCartWrapper>
        </ProductInfoWrapper>
      </SingleProductWrapper>
    </>
  );
};

export default ProductDescription;
