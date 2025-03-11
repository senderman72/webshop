import React from "react";
import useProducts from "../../hooks/useProducts";

const ProductList = () => {
  const { products, error } = useProducts();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Pris: {product.price} SEK</p>
            <p>Lagertillgång: {product.stock}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
