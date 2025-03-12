import React from "react";
import useProducts from "../../hooks/useProducts";
import {
  ProductCard,
  ProductCardsWrapper,
  ProductImage,
  ProductPrice,
  ProductTitle,
  StyledLink,
} from "../styled/styledProducts/ProductCards";

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
            <StyledLink to={`/products/${product.id}`}>mer info</StyledLink>
          </ProductCard>
        ))}
      </ProductCardsWrapper>
    </>
  );
};

export default ProductList;
