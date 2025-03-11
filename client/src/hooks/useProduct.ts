import { useState, useEffect } from "react";
import { IProduct } from "../models/IProducts";
import { getProduct } from "../services/productService/getProduct";

const useProduct = (id: number) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch {
        console.log("Kunde inte hämta produkten.");
      }
    };
    fetchProduct();
  }, [id]);

  return { product };
};

export default useProduct;
