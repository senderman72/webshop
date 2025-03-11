import { useState, useEffect } from "react";
import { IProduct } from "../models/IProducts";
import { getProducts } from "../services/productService/getProducts";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        console.log("Kunde inte hämta produkterna.");
      }
    };
    fetchProducts();
  }, []);

  return { products };
};

export default useProducts;
