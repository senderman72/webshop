import { useState, useEffect } from "react";
import { IProduct } from "../models/IProducts";
import { getProducts } from "../services/productService/getProducts";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Kunde inte hämta produkterna.");
      }
    };
    fetchProducts();
  }, []);

  return { products, error };
};

export default useProducts;
