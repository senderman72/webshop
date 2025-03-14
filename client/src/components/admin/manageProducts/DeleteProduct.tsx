import React from "react";
import { DeleteButton } from "../../styled/styledAdmin/customerStyled/DeleteCustomerStyles";
import { deleteProduct } from "../../../services/productService/deleteProduct";

interface DeleteProductProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteProduct = ({ id, onDelete }: DeleteProductProps) => {
  const handleDelete = async () => {
    const success = await deleteProduct(id);
    if (success) {
      console.log("Produkten togs bort från databasen");
      onDelete(id);
    } else {
      console.error("Misslyckades med att ta bort produkten");
    }
  };
  return <DeleteButton onClick={handleDelete}>Delete </DeleteButton>;
};

export default DeleteProduct;
