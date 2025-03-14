import React from "react";

import { StyledSaveButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";
import { ProductUpdate } from "../../../models/IProducts";
import { updateProduct } from "../../../services/productService/updateProduct";

interface SaveProductProps {
  product: ProductUpdate;
  onSave: (product: ProductUpdate) => void;
}

const SaveProduct = ({ product, onSave }: SaveProductProps) => {
  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (product.id === null || product.id === undefined) {
      console.error("Product ID is invalid.");
      return;
    }

    console.log("Saving product with data:", product);

    try {
      const response = await updateProduct(product.id, product);
      if (response?.message === "Product updated") {
        onSave(product);
      } else {
        console.error("Failed to update product:", response?.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <StyledSaveButton onClick={(e) => handleSave(e)}>Spara</StyledSaveButton>
  );
};

export default SaveProduct;
