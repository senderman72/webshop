import { useState, useEffect } from "react";
import { IProduct, ProductCreate } from "../models/IProducts";
import { getProducts } from "../services/productService/getProducts";

import { createProduct } from "../services/productService/createProduct";

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

  const addProduct = async (product: ProductCreate) => {
    try {
      await createProduct(product);

      const updatedCustomers = await getProducts();
      setProducts(updatedCustomers);
    } catch {
      console.log("Kunde inte skapa produkt");
    }
  };

  return { products, addProduct, setProducts };
};

export default useProducts;
