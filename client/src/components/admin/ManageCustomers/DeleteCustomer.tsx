import React from "react";
import { deleteCustomer } from "../../../services/customerService/deleteCustomer";
import { DeleteButton } from "../../styled/styledAdmin/customerStyled/DeleteCustomerStyles";

interface DeleteCustomerProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteCustomer = ({ id, onDelete }: DeleteCustomerProps) => {
  const handleDelete = async () => {
    const success = await deleteCustomer(id);
    if (success) {
      onDelete(id);
    }
  };
  return <DeleteButton onClick={handleDelete}>Delete </DeleteButton>;
};

export default DeleteCustomer;
